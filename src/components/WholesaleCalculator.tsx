import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  Truck, 
  Train, 
  Zap, 
  MapPin, 
  CheckCircle, 
  TrendingDown, 
  Info, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Product, CalculationResult } from '../types';
import { USA_PRODUCTS } from '../data';

interface CalculatorProps {
  onAddRfqWithQty: (product: Product, quantity: number) => void;
}

export default function WholesaleCalculator({ onAddRfqWithQty }: CalculatorProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product>(USA_PRODUCTS[0]);
  const [quantity, setQuantity] = useState<number>(USA_PRODUCTS[0].moq);
  const [deliveryState, setDeliveryState] = useState<string>('TX');
  const [logisticsSpeed, setLogisticsSpeed] = useState<'standard' | 'intermodal' | 'expedited'>('standard');
  const [calcResult, setCalcResult] = useState<CalculationResult | null>(null);

  const US_STATES = [
    { code: 'TX', name: 'Texas', dist: 850 },
    { code: 'CA', name: 'California', dist: 1850 },
    { code: 'NY', name: 'New York', dist: 780 },
    { code: 'IL', name: 'Illinois', dist: 220 },
    { code: 'FL', name: 'Florida', dist: 1100 },
    { code: 'OH', name: 'Ohio', dist: 350 },
    { code: 'GA', name: 'Georgia', dist: 650 },
    { code: 'WA', name: 'Washington', dist: 1950 },
    { code: 'NC', name: 'North Carolina', dist: 700 },
    { code: 'MI', name: 'Michigan', dist: 280 }
  ];

  // Recalculate whenever inputs change
  useEffect(() => {
    if (!selectedProduct) return;

    // 1. Base cost
    const basePrice = selectedProduct.pricePerUnit * quantity;

    // 2. Volume Discount
    let discountPercentage = 0;
    if (selectedProduct.unit === 'Board Feet (BF)') {
      if (quantity >= 50000) discountPercentage = 22;
      else if (quantity >= 25000) discountPercentage = 14;
      else if (quantity >= 10000) discountPercentage = 6;
    } else {
      // Tons, Barrels, Bales, MT
      if (quantity >= 250) discountPercentage = 20;
      else if (quantity >= 100) discountPercentage = 12;
      else if (quantity >= 50) discountPercentage = 5;
    }

    const discountedPrice = basePrice * (1 - discountPercentage / 100);

    // 3. Freight Cost Calculation
    const stateObj = US_STATES.find(s => s.code === deliveryState) || US_STATES[0];
    let multiplier = 1.20; // standard truck rate
    let speedDays = 5;

    if (logisticsSpeed === 'intermodal') {
      multiplier = 0.65; // cheap green rail
      speedDays = 11;
    } else if (logisticsSpeed === 'expedited') {
      multiplier = 3.50; // express air/direct team road
      speedDays = 2;
    }

    // Weight multiplier factor
    const weightFactor = selectedProduct.unit === 'Board Feet (BF)' ? quantity * 0.003 : quantity;
    const freightCost = stateObj.dist * multiplier * (1 + weightFactor * 0.01);
    const totalCost = discountedPrice + freightCost;

    setCalcResult({
      basePrice,
      discountPercentage,
      discountedPrice,
      freightCost,
      totalCost,
      deliveryDays: speedDays,
      fulfillmentHub: selectedProduct.warehouse
    });
  }, [selectedProduct, quantity, deliveryState, logisticsSpeed]);

  const handleProductChange = (prodId: string) => {
    const prod = USA_PRODUCTS.find(p => p.id === prodId);
    if (prod) {
      setSelectedProduct(prod);
      setQuantity(prod.moq);
    }
  };

  const handleApplyToRfq = () => {
    onAddRfqWithQty(selectedProduct, quantity);
  };

  return (
    <section id="calculator-section" className="py-10 bg-white border-b border-[#e5dfd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <span className="text-xs font-mono font-bold text-[#f59e0b] tracking-widest uppercase bg-[#f59e0b]/10 px-3.5 py-1.5 rounded-full">
            Real-Time Logistics Engine
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1c2421]">
            Interactive B2B Cargo & Price Calculator
          </h2>
          <p className="text-base text-gray-500">
            Replicating BigCommerce’s enterprise tier calculators. Toggle bulk weights, freight routes, and logistics networks to estimate contract pricing and delivery times instantly.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="bg-[#faf8f5] rounded-3xl border border-[#e5dfd3] shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Controls Panel (Left) */}
          <div className="lg:col-span-7 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-[#e5dfd3] space-y-8 text-left">
            <h3 className="text-xl font-sans font-bold text-[#1c2421] flex items-center space-x-2">
              <Calculator className="h-5 w-5 text-[#0e4a36]" />
              <span>Configure Bulk Purchase Order</span>
            </h3>

            {/* Input fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Product Selector */}
              <div>
                <label className="block text-xs font-mono font-bold text-gray-500 uppercase mb-2">1. Select Commodity</label>
                <select
                  value={selectedProduct.id}
                  onChange={(e) => handleProductChange(e.target.value)}
                  className="w-full bg-white border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-4 py-3 text-sm text-[#1c2421] outline-none shadow-sm font-semibold"
                >
                  {USA_PRODUCTS.map((prod) => (
                    <option key={prod.id} value={prod.id}>{prod.name} ({prod.category})</option>
                  ))}
                </select>
              </div>

              {/* Delivery State Selector */}
              <div>
                <label className="block text-xs font-mono font-bold text-gray-500 uppercase mb-2">2. Destination US State</label>
                <select
                  value={deliveryState}
                  onChange={(e) => setDeliveryState(e.target.value)}
                  className="w-full bg-white border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-4 py-3 text-sm text-[#1c2421] outline-none shadow-sm font-semibold"
                >
                  {US_STATES.map((st) => (
                    <option key={st.code} value={st.code}>{st.name} ({st.code})</option>
                  ))}
                </select>
              </div>

              {/* Quantity Slider / Field */}
              <div className="sm:col-span-2 space-y-3">
                <div className="flex justify-between items-center">
                  <label className="block text-xs font-mono font-bold text-gray-500 uppercase">3. Set Cargo Volume</label>
                  <span className="text-xs font-mono text-gray-400">
                    MOQ: {selectedProduct.moq.toLocaleString()} {selectedProduct.unit}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min={selectedProduct.moq}
                    max={selectedProduct.unit === 'Board Feet (BF)' ? 100000 : 500}
                    step={selectedProduct.unit === 'Board Feet (BF)' ? 1000 : 5}
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || selectedProduct.moq)}
                    className="flex-1 accent-[#0e4a36]"
                  />
                  <div className="relative w-32 flex-shrink-0">
                    <input
                      type="number"
                      min={selectedProduct.moq}
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(selectedProduct.moq, parseInt(e.target.value) || 0))}
                      className="w-full bg-white border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2 text-sm font-bold text-[#1c2421] outline-none text-center"
                    />
                    <span className="absolute right-3.5 top-2 text-[10px] text-gray-400 font-mono">{selectedProduct.unit.split(' ')[0]}</span>
                  </div>
                </div>
              </div>

              {/* Logistics Speed Segment Controls */}
              <div className="sm:col-span-2 space-y-3">
                <label className="block text-xs font-mono font-bold text-gray-500 uppercase">4. Logistics Transit Speed</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  
                  {/* Standard Road */}
                  <button
                    onClick={() => setLogisticsSpeed('standard')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      logisticsSpeed === 'standard'
                        ? 'border-[#0e4a36] bg-[#0e4a36]/5 ring-1 ring-[#0e4a36]'
                        : 'border-[#e5dfd3] bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Truck className={`h-5 w-5 ${logisticsSpeed === 'standard' ? 'text-[#0e4a36]' : 'text-gray-400'}`} />
                      <span className="text-[10px] font-mono text-gray-400">Road Freight</span>
                    </div>
                    <p className="text-sm font-bold text-[#1c2421]">Standard Trucking</p>
                    <p className="text-[11px] text-gray-500 mt-1">~5 Working Days • Balanced rate</p>
                  </button>

                  {/* Intermodal Rail */}
                  <button
                    onClick={() => setLogisticsSpeed('intermodal')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      logisticsSpeed === 'intermodal'
                        ? 'border-[#0e4a36] bg-[#0e4a36]/5 ring-1 ring-[#0e4a36]'
                        : 'border-[#e5dfd3] bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Train className={`h-5 w-5 ${logisticsSpeed === 'intermodal' ? 'text-[#0e4a36]' : 'text-gray-400'}`} />
                      <span className="text-[10px] font-mono text-gray-400">Green Rail</span>
                    </div>
                    <p className="text-sm font-bold text-[#1c2421]">Intermodal Rail</p>
                    <p className="text-[11px] text-gray-500 mt-1">~11 Working Days • Up to 45% cheaper</p>
                  </button>

                  {/* Premium Expedited */}
                  <button
                    onClick={() => setLogisticsSpeed('expedited')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      logisticsSpeed === 'expedited'
                        ? 'border-[#0e4a36] bg-[#0e4a36]/5 ring-1 ring-[#0e4a36]'
                        : 'border-[#e5dfd3] bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Zap className={`h-5 w-5 ${logisticsSpeed === 'expedited' ? 'text-[#f59e0b]' : 'text-gray-400'}`} />
                      <span className="text-[10px] font-mono text-gray-400">Priority Hub</span>
                    </div>
                    <p className="text-sm font-bold text-[#1c2421]">Expedited Freight</p>
                    <p className="text-[11px] text-gray-500 mt-1">~2 Working Days • Express Cargo teams</p>
                  </button>

                </div>
              </div>

            </div>
          </div>

          {/* Pricing Calculator Results (Right Panel) */}
          <div className="lg:col-span-5 p-6 sm:p-10 bg-gradient-to-br from-[#0e4a36] to-[#0b3c2a] text-[#faf8f5] flex flex-col justify-between text-left">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#faf8f5]/60">Contract Pricing Matrix</span>
                {calcResult && calcResult.discountPercentage > 0 && (
                  <span className="bg-[#f59e0b] text-[#1c2421] text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center space-x-1 animate-pulse">
                    <Sparkles className="h-3 w-3" />
                    <span>{calcResult.discountPercentage}% Volume Discount</span>
                  </span>
                )}
              </div>

              {/* Major Calculated Cost */}
              <div>
                <p className="text-sm text-[#faf8f5]/70 font-mono">Projected Total Contract PO</p>
                <p className="text-4xl sm:text-5xl font-sans font-black tracking-tight text-[#f59e0b] mt-1">
                  ${calcResult ? Math.round(calcResult.totalCost).toLocaleString() : '0'}
                  <span className="text-sm font-mono text-[#faf8f5]/70 font-normal ml-1">USD</span>
                </p>
                <p className="text-xs text-[#faf8f5]/50 mt-1">FOB Origin. Simulated B2B Wholesale Exemption applied.</p>
              </div>

              {/* Breakdowns */}
              <div className="space-y-3.5 pt-4 border-t border-[#faf8f5]/25 text-sm">
                
                {/* Base price */}
                <div className="flex justify-between font-mono">
                  <span className="text-[#faf8f5]/70">Base Wholesale Price:</span>
                  <span className="font-sans font-semibold">${calcResult ? Math.round(calcResult.basePrice).toLocaleString() : '0'}</span>
                </div>

                {/* Discount */}
                {calcResult && calcResult.discountPercentage > 0 && (
                  <div className="flex justify-between font-mono text-emerald-400">
                    <span>Volume Discount Savings:</span>
                    <span className="font-sans font-semibold">-${Math.round(calcResult.basePrice - calcResult.discountedPrice).toLocaleString()}</span>
                  </div>
                )}

                {/* Freight */}
                <div className="flex justify-between font-mono">
                  <span className="text-[#faf8f5]/70">Est. Freight Cargo Cost:</span>
                  <span className="font-sans font-semibold">${calcResult ? Math.round(calcResult.freightCost).toLocaleString() : '0'}</span>
                </div>

                {/* Transit ETA */}
                <div className="flex justify-between font-mono border-t border-[#faf8f5]/15 pt-3">
                  <span className="text-[#faf8f5]/70">Estimated Transit ETA:</span>
                  <span className="font-sans font-bold text-amber-300">~{calcResult ? calcResult.deliveryDays : '0'} Working Days</span>
                </div>

                {/* Fulfillment Hub */}
                <div className="flex justify-between font-mono text-xs text-[#faf8f5]/80 bg-white/5 p-2.5 rounded-xl border border-white/10">
                  <span className="flex items-center space-x-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#f59e0b]" />
                    <span>Fulfillment Hub:</span>
                  </span>
                  <span className="text-right max-w-[150px] truncate">{calcResult ? calcResult.fulfillmentHub.split(' ')[0] : 'None'}</span>
                </div>

              </div>
            </div>

            {/* Quick PO Button */}
            <div className="pt-8 space-y-3">
              <button
                id="calc-add-to-rfq-btn"
                onClick={handleApplyToRfq}
                className="w-full bg-[#f59e0b] hover:bg-amber-600 text-[#1c2421] py-4 rounded-xl font-sans font-bold text-sm transition-all flex items-center justify-center space-x-2 shadow-lg cursor-pointer"
              >
                <span>Add Contract Cargo to RFQ List</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <div className="flex items-center justify-center space-x-1.5 text-center text-[11px] text-[#faf8f5]/65">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                <span>Locked wholesale contract simulation. Click to draft.</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
