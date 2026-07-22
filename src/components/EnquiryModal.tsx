import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle, Building, User, Mail, Phone, MessageSquare, Clock } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export default function EnquiryModal({ isOpen, onClose, defaultCategory }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: 'Sourcing Support',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  // Update category when modal is opened or defaultCategory changes
  React.useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        category: defaultCategory || 'Sourcing Support'
      }));
    }
  }, [isOpen, defaultCategory]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Roots of America Enquiry [${formData.category}]: ${formData.company}`);
    const body = encodeURIComponent(
      `NEW INQUIRY SUBMISSION\n` +
      `-----------------------------------\n` +
      `Name: ${formData.name}\n` +
      `Company: ${formData.company}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Category: ${formData.category}\n\n` +
      `Inquiry Details:\n${formData.message}\n` +
      `-----------------------------------\n` +
      `Sent via Roots of America B2B Portal`
    );

    const mailtoUrl = `mailto:info@rootofamerica.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTicketNumber(`ENQ-2026-${Math.floor(100000 + Math.random() * 900000)}`);
      try {
        window.location.href = mailtoUrl;
      } catch (err) {
        console.log('Mailto redirect:', err);
      }
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      category: 'Sourcing Support',
      message: ''
    });
    setSubmitSuccess(false);
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
            className="fixed inset-0 z-50 bg-[#1c2421]/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-lg bg-[#faf8f5] rounded-2xl shadow-2xl border border-[#e5dfd3] overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-[#e5dfd3] flex items-center justify-between bg-white">
                <div className="text-left">
                  <h3 className="text-lg font-sans font-extrabold text-[#1c2421] flex items-center space-x-2">
                    <Building className="h-5 w-5 text-[#0e4a36]" />
                    <span>Inquiry & Corporate Sourcing</span>
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">Submit a general inquiry or specialized sourcing request.</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {!submitSuccess ? (
                    <motion.form
                      key="enquiry-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4 text-left"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name */}
                        <div>
                          <label className="block text-[11px] font-mono font-bold text-gray-500 uppercase mb-1">Your Name</label>
                          <div className="relative">
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              placeholder="Alex Carter"
                              className="w-full bg-white border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2 pl-9 text-xs outline-none text-[#1c2421]"
                            />
                            <User className="absolute left-3 top-2.5 h-3.5 w-3.5 text-gray-400" />
                          </div>
                        </div>

                        {/* Company */}
                        <div>
                          <label className="block text-[11px] font-mono font-bold text-gray-500 uppercase mb-1">Company Name</label>
                          <div className="relative">
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              required
                              placeholder="Acme Global Inc"
                              className="w-full bg-white border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2 pl-9 text-xs outline-none text-[#1c2421]"
                            />
                            <Building className="absolute left-3 top-2.5 h-3.5 w-3.5 text-gray-400" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Email */}
                        <div>
                          <label className="block text-[11px] font-mono font-bold text-gray-500 uppercase mb-1">Corporate Email</label>
                          <div className="relative">
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              placeholder="alex@acme.com"
                              className="w-full bg-white border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2 pl-9 text-xs outline-none text-[#1c2421]"
                            />
                            <Mail className="absolute left-3 top-2.5 h-3.5 w-3.5 text-gray-400" />
                          </div>
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-[11px] font-mono font-bold text-gray-500 uppercase mb-1">Contact Phone</label>
                          <div className="relative">
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              placeholder="(555) 012-3456"
                              className="w-full bg-white border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2 pl-9 text-xs outline-none text-[#1c2421]"
                            />
                            <Phone className="absolute left-3 top-2.5 h-3.5 w-3.5 text-gray-400" />
                          </div>
                        </div>
                      </div>

                      {/* Sourcing Category */}
                      <div>
                        <label className="block text-[11px] font-mono font-bold text-gray-500 uppercase mb-1">Inquiry Category</label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2 text-xs outline-none text-[#1c2421]"
                        >
                          <option value="Sourcing Support">Wholesale Sourcing Support</option>
                          <option value="eCommerce Development">eCommerce Development</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Digital Marketing">Digital Marketing & SEO</option>
                          <option value="Design & Branding">Design & Branding</option>
                          <option value="Custom Enterprise">Custom Enterprise Solutions</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-[11px] font-mono font-bold text-gray-500 uppercase mb-1">Inquiry Details</label>
                        <div className="relative">
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={3}
                            placeholder="Please describe your sourcing requirements, volume expectations, or specific project scope..."
                            className="w-full bg-white border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2 text-xs outline-none text-[#1c2421] resize-none"
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#0e4a36] hover:bg-[#0b3c2a] text-white py-3.5 rounded-xl font-sans font-bold text-sm transition-all flex items-center justify-center space-x-2 shadow-md cursor-pointer disabled:bg-gray-400"
                      >
                        {isSubmitting ? (
                          <>
                            <Clock className="h-4 w-4 animate-spin" />
                            <span>Submitting Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 text-[#f59e0b]" />
                            <span>Submit Sourcing Inquiry</span>
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    /* Success Receipt */
                    <motion.div
                      key="enquiry-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-6 text-center space-y-5"
                    >
                      <div className="mx-auto h-14 w-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                        <CheckCircle className="h-8 w-8" />
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-lg font-sans font-extrabold text-[#1c2421]">Inquiry Dispatched</h4>
                        <p className="text-xs text-gray-500 px-4">Your inquiry details have been routed directly to <strong className="text-[#0e4a36]">info@rootofamerica.com</strong>.</p>
                      </div>

                      {/* Detail card */}
                      <div className="bg-white border border-[#e5dfd3] p-4 rounded-xl text-left space-y-2.5 font-mono text-[11px] text-gray-500 mx-4">
                        <div className="flex justify-between border-b pb-2 text-xs font-bold text-[#1c2421]">
                          <span>INQUIRY TICKET</span>
                          <span className="text-[#0e4a36]">{ticketNumber}</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span>Sourcing Rep:</span>
                            <span className="font-sans font-semibold text-[#1c2421]">{formData.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Company:</span>
                            <span className="font-sans font-semibold text-[#1c2421]">{formData.company}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Category:</span>
                            <span className="font-sans font-semibold text-[#1c2421]">{formData.category}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Target Mail:</span>
                            <span className="font-sans font-bold text-[#0e4a36]">info@rootofamerica.com</span>
                          </div>
                        </div>
                        <div className="border-t pt-2 mt-2 bg-amber-50/50 p-2 border border-amber-200 text-[10px] leading-relaxed text-amber-800 flex items-start space-x-2">
                          <Clock className="h-3.5 w-3.5 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span>An email prompt was launched. You can also send directly to <a href="mailto:info@rootofamerica.com" className="font-bold underline text-[#0e4a36]">info@rootofamerica.com</a>.</span>
                        </div>
                      </div>

                      <button
                        onClick={handleReset}
                        className="w-full bg-[#1c2421] hover:bg-[#2c3833] text-white py-3 rounded-xl font-sans font-bold text-xs transition-colors cursor-pointer"
                      >
                        Close Window
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
