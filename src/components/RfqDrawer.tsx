import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Trash2, 
  Send, 
  CheckCircle, 
  Building, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  FileSpreadsheet, 
  TrendingUp, 
  Clock 
} from 'lucide-react';
import { Product, RfqItem, RfqFormData } from '../types';

interface RfqDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  rfqItems: RfqItem[];
  onUpdateQty: (productId: string, qty: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearRfq: () => void;
}

export default function RfqDrawer({
  isOpen,
  onClose,
  rfqItems,
  onUpdateQty,
  onRemoveItem,
  onClearRfq
}: RfqDrawerProps) {
  const [formData, setFormData] = useState<RfqFormData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    shippingState: 'TX',
    logisticsSpeed: 'standard',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [rfqNumber, setRfqNumber] = useState('');

  const calculateSubtotal = () => {
    return rfqItems.reduce((acc, item) => acc + item.product.pricePerUnit * item.quantity, 0);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleQtyChange = (productId: string, val: string, minOrder: number) => {
    const num = parseInt(val) || 0;
    onUpdateQty(productId, Math.max(minOrder, num));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rfqItems.length === 0) {
      alert('Your RFQ basket is empty. Please add items from the Sourcing Hub.');
      return;
    }

    setIsSubmitting(true);

    const itemsSummary = rfqItems.map(i => `- ${i.product.name} (Qty: ${i.quantity} ${i.product.unit}) @ $${i.product.pricePerUnit}/${i.product.unit}`).join('\n');
    const subtotal = calculateSubtotal();

    const subject = encodeURIComponent(`Roots of America Bulk RFQ Quote Request: ${formData.companyName}`);
    const body = encodeURIComponent(
      `NEW BULK RFQ SUBMISSION\n` +
      `-----------------------------------\n` +
      `Company: ${formData.companyName}\n` +
      `Contact Name: ${formData.contactName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Destination State: ${formData.shippingState}\n` +
      `Logistics Speed: ${formData.logisticsSpeed}\n\n` +
      `Requested Items:\n${itemsSummary}\n\n` +
      `Estimated Subtotal: $${subtotal.toLocaleString()}\n` +
      `Additional Notes: ${formData.notes || 'None'}\n` +
      `-----------------------------------\n` +
      `Sent via Roots of America B2B Trade Portal`
    );

    const mailtoUrl = `mailto:info@rootofamerica.com?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setRfqNumber(`RFQ-2026-${Math.floor(100000 + Math.random() * 900000)}`);
      try {
        window.location.href = mailtoUrl;
      } catch (err) {
        console.log('Mailto redirect:', err);
      }
    }, 1500);
  };

  const resetDrawer = () => {
    onClearRfq();
    setSubmitSuccess(false);
    setIsSubmitting(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Sliding Side Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xl bg-[#faf8f5] shadow-2xl border-l border-[#e5dfd3] flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#e5dfd3] flex items-center justify-between bg-white">
              <div className="text-left">
                <h3 className="text-lg font-sans font-extrabold text-[#1c2421] flex items-center space-x-2">
                  <FileSpreadsheet className="h-5 w-5 text-[#0e4a36]" />
                  <span>Your Bulk RFQ Basket</span>
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">Prepare enterprise-grade commodity quotes.</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.div
                    key="rfq-draft"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8"
                  >
                    {/* Draft List */}
                    <div className="space-y-4">
                      <p className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider text-left">Selected Commodities</p>
                      
                      {rfqItems.length === 0 ? (
                        <div className="border-2 border-dashed border-[#e5dfd3] p-8 rounded-2xl text-center space-y-2">
                          <p className="text-sm text-gray-500 font-sans">No items added to draft yet.</p>
                          <p className="text-xs text-gray-400 font-sans">Add organic grains, timber slabs, cotton, or biopolymers to begin contract calculations.</p>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {rfqItems.map((item) => (
                            <div 
                              key={item.product.id}
                              className="bg-white border border-[#e5dfd3] p-4 rounded-2xl flex items-center justify-between space-x-4 shadow-sm"
                            >
                              <div className="text-left space-y-1 flex-1 min-w-0">
                                <h4 className="text-sm font-sans font-bold text-[#1c2421] truncate">{item.product.name}</h4>
                                <p className="text-xs text-gray-400 font-mono">FOB Origin: {item.product.origin}</p>
                                <p className="text-xs font-semibold text-[#0e4a36] font-mono">
                                  ${item.product.pricePerUnit.toLocaleString()} per {item.product.unit.split(' ')[0]}
                                </p>
                              </div>

                              {/* Quantity control */}
                              <div className="flex items-center space-x-2">
                                <div className="relative w-24">
                                  <input
                                    type="number"
                                    min={item.product.moq}
                                    value={item.quantity}
                                    onChange={(e) => handleQtyChange(item.product.id, e.target.value, item.product.moq)}
                                    className="w-full bg-[#faf8f5] border border-[#e5dfd3] focus:border-[#0e4a36] rounded-lg px-2 py-1 text-xs font-semibold text-center text-[#1c2421] outline-none"
                                  />
                                </div>
                                <span className="text-[10px] text-gray-400 font-mono w-10 truncate text-left">{item.product.unit.split(' ')[0]}s</span>

                                <button
                                  onClick={() => onRemoveItem(item.product.id)}
                                  className="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-lg transition-colors"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                          ))}

                          {/* Subtotal preview */}
                          <div className="border-t border-[#e5dfd3] pt-4 flex justify-between items-center text-sm font-mono text-gray-500">
                            <span>Projected FOB Subtotal:</span>
                            <span className="text-lg font-sans font-black text-[#1c2421]">${calculateSubtotal().toLocaleString()} USD</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* RFQ Contact Form */}
                    {rfqItems.length > 0 && (
                      <form onSubmit={handleSubmit} className="space-y-5 text-left border-t border-[#e5dfd3] pt-6">
                        <p className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">Commercial Contact & Logistics Info</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Company Name */}
                          <div>
                            <label className="block text-[11px] font-mono font-bold text-gray-500 uppercase mb-1">Company legal Name</label>
                            <div className="relative">
                              <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                                required
                                placeholder="Enterprise Ltd"
                                className="w-full bg-white border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2 pl-9 text-xs outline-none text-[#1c2421]"
                              />
                              <Building className="absolute left-3 top-2.5 h-3.5 w-3.5 text-gray-400" />
                            </div>
                          </div>

                          {/* Contact Name */}
                          <div>
                            <label className="block text-[11px] font-mono font-bold text-gray-500 uppercase mb-1">Buyer Representative</label>
                            <div className="relative">
                              <input
                                type="text"
                                name="contactName"
                                value={formData.contactName}
                                onChange={handleInputChange}
                                required
                                placeholder="Sarah Smith"
                                className="w-full bg-white border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2 pl-9 text-xs outline-none text-[#1c2421]"
                              />
                              <User className="absolute left-3 top-2.5 h-3.5 w-3.5 text-gray-400" />
                            </div>
                          </div>

                          {/* Email */}
                          <div>
                            <label className="block text-[11px] font-mono font-bold text-gray-500 uppercase mb-1">Business Email</label>
                            <div className="relative">
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder="buyer@company.com"
                                className="w-full bg-white border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2 pl-9 text-xs outline-none text-[#1c2421]"
                              />
                              <Mail className="absolute left-3 top-2.5 h-3.5 w-3.5 text-gray-400" />
                            </div>
                          </div>

                          {/* Phone */}
                          <div>
                            <label className="block text-[11px] font-mono font-bold text-gray-500 uppercase mb-1">Direct Line</label>
                            <div className="relative">
                              <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                placeholder="(555) 019-2834"
                                className="w-full bg-white border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2 pl-9 text-xs outline-none text-[#1c2421]"
                              />
                              <Phone className="absolute left-3 top-2.5 h-3.5 w-3.5 text-gray-400" />
                            </div>
                          </div>

                          {/* Shipping State */}
                          <div>
                            <label className="block text-[11px] font-mono font-bold text-gray-500 uppercase mb-1">Delivery US State</label>
                            <select
                              name="shippingState"
                              value={formData.shippingState}
                              onChange={handleInputChange}
                              className="w-full bg-white border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2 text-xs outline-none text-[#1c2421]"
                            >
                              <option value="TX">Texas (TX)</option>
                              <option value="CA">California (CA)</option>
                              <option value="NY">New York (NY)</option>
                              <option value="IL">Illinois (IL)</option>
                            </select>
                          </div>
                        </div>

                        {/* Special Requirements */}
                        <div>
                          <label className="block text-[11px] font-mono font-bold text-gray-500 uppercase mb-1">Special Sourcing Requirements</label>
                          <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleInputChange}
                            rows={2}
                            placeholder="e.g. USDA Phyto-sanitary certificates needed, custom board lengths required..."
                            className="w-full bg-white border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2 text-xs outline-none text-[#1c2421] resize-none"
                          />
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#0e4a36] hover:bg-[#0b3c2a] text-white py-4 rounded-xl font-sans font-bold text-sm transition-all flex items-center justify-center space-x-2 shadow-md cursor-pointer disabled:bg-gray-400"
                        >
                          {isSubmitting ? (
                            <>
                              <Clock className="h-4 w-4 animate-spin" />
                              <span>Processing Contract Quotation...</span>
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4 text-[#f59e0b]" />
                              <span>Submit Request for Contract Quote</span>
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </motion.div>
                ) : (
                  /* Success Feedback / receipt */
                  <motion.div
                    key="rfq-receipt"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="mx-auto h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      <CheckCircle className="h-10 w-10" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xl font-sans font-bold text-[#1c2421]">RFQ Dispatched to Company Mail</h4>
                      <p className="text-xs text-gray-500">Your wholesale contract request has been formatted and sent directly to <strong className="text-[#0e4a36]">info@rootofamerica.com</strong>.</p>
                    </div>

                    {/* Receipt breakdown Card */}
                    <div className="bg-white border border-[#e5dfd3] p-5 rounded-2xl text-left space-y-3 font-mono text-[11px] text-gray-500">
                      <div className="flex justify-between border-b pb-2 text-xs font-bold text-[#1c2421]">
                        <span>COMMODITY RFQ RECORD</span>
                        <span className="text-[#0e4a36]">{rfqNumber}</span>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex justify-between">
                          <span>Purchasing Company:</span>
                          <span className="font-sans font-semibold text-[#1c2421]">{formData.companyName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sourcing Rep:</span>
                          <span className="font-sans font-semibold text-[#1c2421]">{formData.contactName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Delivery Location:</span>
                          <span className="font-sans font-semibold text-[#1c2421]">State of {formData.shippingState}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Estimated Subtotal FOB:</span>
                          <span className="font-sans font-bold text-emerald-700">${calculateSubtotal().toLocaleString()} USD</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Routed Mail:</span>
                          <span className="font-sans font-bold text-[#0e4a36]">info@rootofamerica.com</span>
                        </div>
                      </div>

                      <div className="border-t pt-2 mt-2 bg-amber-50/50 p-2.5 rounded-xl border border-amber-200 text-[10px] leading-relaxed text-amber-800 flex items-start space-x-2">
                        <Clock className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Mail prompt dispatched. You can also email us directly at <a href="mailto:info@rootofamerica.com" className="font-bold underline text-[#0e4a36]">info@rootofamerica.com</a> for urgent procurement needs.</span>
                      </div>
                    </div>

                    <button
                      onClick={resetDrawer}
                      className="w-full bg-[#1c2421] hover:bg-[#2c3833] text-white py-3.5 rounded-xl font-sans font-bold text-xs transition-colors"
                    >
                      Return to Sourcing Hub
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
