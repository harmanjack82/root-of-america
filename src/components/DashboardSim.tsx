import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  CreditCard, 
  DollarSign, 
  UserCheck, 
  MapPin, 
  Calendar, 
  Plus, 
  Layers, 
  Truck, 
  TrendingUp, 
  FileText, 
  Mail,
  CheckCircle2,
  Info,
  ShieldAlert
} from 'lucide-react';
import { MOCK_BUYER, MOCK_ORDERS, USA_PRODUCTS } from '../data';
import { MockPurchaseOrder, Product } from '../types';

export default function DashboardSim() {
  const [buyer, setBuyer] = useState(MOCK_BUYER);
  const [orders, setOrders] = useState<MockPurchaseOrder[]>(MOCK_ORDERS);
  
  // Instant PO states
  const [selectedProdId, setSelectedProdId] = useState<string>(USA_PRODUCTS[3].id); // Appalachian timber default
  const [orderQty, setOrderQty] = useState<number>(USA_PRODUCTS[3].moq);
  const [selectedSpeed, setSelectedSpeed] = useState<string>('standard');
  const [isOrdering, setIsOrdering] = useState(false);
  const [orderSuccessMsg, setOrderSuccessMsg] = useState(false);

  const selectedProduct = USA_PRODUCTS.find(p => p.id === selectedProdId) || USA_PRODUCTS[3];

  const handleProductChange = (prodId: string) => {
    setSelectedProdId(prodId);
    const prod = USA_PRODUCTS.find(p => p.id === prodId);
    if (prod) {
      setOrderQty(prod.moq);
    }
  };

  const calculateTotalOrderCost = () => {
    let base = selectedProduct.pricePerUnit * orderQty;
    // Volume discount
    let disc = 0;
    if (selectedProduct.unit === 'Board Feet (BF)') {
      if (orderQty >= 50000) disc = 22;
      else if (orderQty >= 25000) disc = 14;
      else if (orderQty >= 10000) disc = 6;
    } else {
      if (orderQty >= 250) disc = 20;
      else if (orderQty >= 100) disc = 12;
      else if (orderQty >= 50) disc = 5;
    }
    return base * (1 - disc / 100);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const cost = calculateTotalOrderCost();

    if (cost > buyer.availableCredit) {
      alert(`Insufficient Available Credit Line. Your available credit is $${buyer.availableCredit.toLocaleString()}, but this order costs $${Math.round(cost).toLocaleString()}. Please request an overdraft extension.`);
      return;
    }

    setIsOrdering(true);

    // Simulate ordering process
    setTimeout(() => {
      const newPo: MockPurchaseOrder = {
        id: `PO-2026-${Math.floor(10000 + Math.random() * 90000)}`,
        date: new Date().toISOString().split('T')[0],
        items: [
          { productName: selectedProduct.name, quantity: orderQty, totalCost: cost }
        ],
        totalAmount: cost,
        status: 'Processing',
        trackingNumber: `ROA-US-${Math.floor(100000 + Math.random() * 900000)}-D`
      };

      setBuyer(prev => ({
        ...prev,
        availableCredit: prev.availableCredit - cost
      }));

      setOrders(prev => [newPo, ...prev]);
      setIsOrdering(false);
      setOrderSuccessMsg(true);

      setTimeout(() => setOrderSuccessMsg(false), 4000);
    }, 1200);
  };

  return (
    <div className="bg-[#faf8f5] min-h-screen py-10 px-4 sm:px-6 lg:px-8 text-left font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Top welcome layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center bg-white p-6 sm:p-8 rounded-3xl border border-[#e5dfd3] shadow-sm gap-6">
          <div>
            <div className="flex items-center space-x-2">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold font-mono px-2.5 py-1 rounded-full">APPROVED BUYER PROFILE</span>
              <span className="text-xs font-mono text-gray-400">STATE RESALE CLEARED</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-sans font-extrabold text-[#1c2421] mt-2">
              {buyer.companyName}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Trading Status: <span className="font-sans font-bold text-emerald-700">ACTIVE CREDIT ACCOUNT</span> • Standard Net-30 Trading terms.
            </p>
          </div>

          {/* Account Representative Quick Info */}
          <div className="flex items-center space-x-4 bg-[#faf8f5] p-4 rounded-2xl border border-[#e5dfd3] w-full lg:w-auto">
            <div className="h-11 w-11 rounded-xl bg-[#0e4a36] text-white flex items-center justify-center font-bold text-lg shadow-sm">
              SJ
            </div>
            <div className="text-left text-xs">
              <p className="text-gray-400 font-mono">DEDICATED SOURCING AGENT</p>
              <p className="font-bold text-[#1c2421] text-sm">{buyer.representative}</p>
              <button 
                onClick={() => alert(`Sourcing chat link sent to registered email: ${buyer.repEmail}`)}
                className="text-[#0e4a36] font-semibold flex items-center space-x-1 hover:underline mt-0.5"
              >
                <Mail className="h-3 w-3" />
                <span>Contact Agent</span>
              </button>
            </div>
          </div>
        </div>

        {/* Financial line of credit card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Credit availability widget */}
          <div className="bg-white p-6 rounded-3xl border border-[#e5dfd3] shadow-sm space-y-4 md:col-span-2 text-left">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-mono font-bold text-gray-400 uppercase">Available Wholesale Line of Credit</h3>
              <div className="flex items-center space-x-1.5 text-xs text-emerald-700 font-mono">
                <UserCheck className="h-4 w-4" />
                <span>Secure Escrow active</span>
              </div>
            </div>

            <div className="flex items-baseline space-x-2">
              <span className="text-3xl sm:text-4xl font-sans font-black text-[#0e4a36]">
                ${Math.round(buyer.availableCredit).toLocaleString()}
              </span>
              <span className="text-sm font-mono text-gray-400">
                USD / ${buyer.creditLimit.toLocaleString()} Limit
              </span>
            </div>

            {/* Line of credit visual slider bar */}
            <div className="space-y-1.5">
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden border">
                <div 
                  className="bg-gradient-to-r from-amber-500 to-emerald-600 h-full transition-all duration-500"
                  style={{ width: `${(buyer.availableCredit / buyer.creditLimit) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-mono text-gray-400">
                <span>Used: ${Math.round(buyer.creditLimit - buyer.availableCredit).toLocaleString()}</span>
                <span>Available: {Math.round((buyer.availableCredit / buyer.creditLimit) * 100)}%</span>
              </div>
            </div>
          </div>

          {/* Quick compliance summary cards */}
          <div className="bg-white p-6 rounded-3xl border border-[#e5dfd3] shadow-sm flex flex-col justify-between">
            <div className="space-y-1.5 text-left">
              <p className="text-xs font-mono text-gray-400 uppercase font-bold">Fulfillment Clearances</p>
              <h4 className="text-lg font-bold text-[#1c2421]">Cargo Cleared</h4>
              <p className="text-xs text-gray-500">All procurement products undergo rigorous laboratory screening and are verified 100% free of banned narcotics or military hardware.</p>
            </div>
            
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-[#0e4a36]">
              <span className="flex items-center space-x-1.5 font-bold">
                <CheckCircle2 className="h-4 w-4" />
                <span>Sanction Status Active</span>
              </span>
              <span>ROA-COMP-2026</span>
            </div>
          </div>

        </div>

        {/* Main interactive workflow grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* List of active Purchase Orders (Left - 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-sans font-bold text-[#1c2421] flex items-center space-x-2">
                <Briefcase className="h-5 w-5 text-[#0e4a36]" />
                <span>Active Commercial Purchase Orders (PO)</span>
              </h3>
              <span className="bg-[#1c2421] text-white font-mono text-xs px-2.5 py-0.5 rounded-full">
                {orders.length} Total
              </span>
            </div>

            <div className="space-y-4">
              <AnimatePresence initial={false}>
                {orders.map((po) => (
                  <motion.div
                    key={po.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="bg-white border border-[#e5dfd3] rounded-3xl p-5 shadow-sm space-y-4 hover:shadow-md transition-shadow"
                  >
                    {/* Header line of PO */}
                    <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                      <div>
                        <div className="flex items-center space-x-1.5">
                          <span className="font-mono font-bold text-sm text-[#1c2421]">{po.id}</span>
                        </div>
                        <p className="text-[11px] font-mono text-gray-400 mt-0.5">Tracking No: {po.trackingNumber}</p>
                      </div>

                      {/* Dynamic status badges */}
                      <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full ${
                        (po.status === 'Delivered' || po.status === 'In Transit')
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-800 animate-pulse'
                      }`}>
                        {po.status === 'Delivered' ? 'In Transit' : po.status}
                      </span>
                    </div>

                    {/* PO items list */}
                    <div className="space-y-2">
                      {po.items.map((it, index) => (
                        <div key={index} className="flex justify-between text-sm text-[#1c2421]">
                          <span className="font-semibold">{it.productName}</span>
                          <span className="text-gray-500 font-mono">
                            {it.quantity.toLocaleString()} Vol • <span className="font-semibold text-[#0e4a36]">${Math.round(it.totalCost).toLocaleString()}</span>
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* PO footer with tracking / logistics summary */}
                    <div className="pt-3 border-t border-gray-100 flex justify-between items-center text-xs">
                      <span className="flex items-center space-x-1 text-gray-400 font-mono">
                        <Truck className="h-3.5 w-3.5 text-gray-400" />
                        <span>FOB Logistics cleared</span>
                      </span>
                      <div className="font-mono text-gray-700">
                        Total PO Value: <span className="font-sans font-black text-sm text-[#1c2421]">${Math.round(po.totalAmount).toLocaleString()} USD</span>
                      </div>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Place Instant PO Panel (Right - 5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#e5dfd3] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h3 className="text-lg font-sans font-bold text-[#1c2421] flex items-center space-x-2">
                <Plus className="h-5 w-5 text-[#f59e0b]" />
                <span>Place Instant PO</span>
              </h3>
              <p className="text-xs text-gray-400 mt-1">Procure immediate commodities using your available line of credit.</p>
            </div>

            <AnimatePresence mode="wait">
              {orderSuccessMsg && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-emerald-50 border border-emerald-200 text-[#0e4a36] p-4 rounded-2xl text-xs space-y-1.5"
                >
                  <p className="font-bold flex items-center space-x-1">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Purchase Order Dispatched!</span>
                  </p>
                  <p>Line of credit updated. Standard Net-30 billing cycle logged.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handlePlaceOrder} className="space-y-4 text-left">
              
              {/* Product */}
              <div>
                <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase mb-1">Select Sourcing Product</label>
                <select
                  value={selectedProdId}
                  onChange={(e) => handleProductChange(e.target.value)}
                  className="w-full bg-[#faf8f5] border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2.5 text-xs font-semibold outline-none text-[#1c2421]"
                >
                  {USA_PRODUCTS.map(p => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>

              {/* Volume & speed row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase mb-1">Cargo Volume</label>
                  <div className="relative">
                    <input
                      type="number"
                      min={selectedProduct.moq}
                      value={orderQty}
                      onChange={(e) => setOrderQty(Math.max(selectedProduct.moq, parseInt(e.target.value) || 0))}
                      className="w-full bg-[#faf8f5] border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2.5 text-xs font-bold outline-none text-[#1c2421]"
                    />
                    <span className="absolute right-3.5 top-2.5 text-[10px] font-mono text-gray-400">{selectedProduct.unit.split(' ')[0]}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase mb-1">Routing speed</label>
                  <select
                    value={selectedSpeed}
                    onChange={(e) => setSelectedSpeed(e.target.value)}
                    className="w-full bg-[#faf8f5] border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2.5 text-xs font-semibold outline-none text-[#1c2421]"
                  >
                    <option value="standard">Standard Trucking</option>
                    <option value="intermodal">Green Intermodal Rail</option>
                    <option value="expedited">Expedited Cargo</option>
                  </select>
                </div>
              </div>

              {/* Live pricing breakdown */}
              <div className="bg-[#faf8f5] p-4 rounded-2xl border border-[#e5dfd3] text-xs space-y-2 font-mono">
                <div className="flex justify-between text-gray-500">
                  <span>Product FOB Rate:</span>
                  <span className="text-gray-800 font-sans">${selectedProduct.pricePerUnit} / {selectedProduct.unit.split(' ')[0]}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Minimum Required Vol:</span>
                  <span className="text-gray-800 font-sans">{selectedProduct.moq} {selectedProduct.unit.split(' ')[0]}s</span>
                </div>
                <div className="flex justify-between text-gray-700 font-bold border-t border-dashed border-gray-200 pt-2 text-sm">
                  <span>Estimated total cost:</span>
                  <span className="text-[#0e4a36] font-sans">${Math.round(calculateTotalOrderCost()).toLocaleString()} USD</span>
                </div>
              </div>

              {/* Submit contract dispatch */}
              <button
                type="submit"
                disabled={isOrdering}
                className="w-full bg-[#0e4a36] hover:bg-[#0b3c2a] disabled:bg-gray-400 text-white py-3.5 rounded-xl font-sans font-bold text-xs transition-colors flex items-center justify-center space-x-1.5 shadow-md cursor-pointer"
              >
                <Plus className="h-4 w-4 text-[#f59e0b]" />
                <span>{isOrdering ? 'Processing Contract Purchase...' : 'Execute Instant PO Sourcing'}</span>
              </button>

              <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-200 text-[10px] leading-relaxed text-amber-800 flex items-start space-x-1.5">
                <ShieldAlert className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span>By executing, your available line of credit is immediately bound and standard FOB cargo allocation starts at {selectedProduct.warehouse.split(' ')[0]} distribution hub.</span>
              </div>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
