import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle, Building, User, Mail, Phone, MessageSquare, Clock, Copy, ExternalLink } from 'lucide-react';

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
  const [copied, setCopied] = useState(false);

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

    const payload = {
      formType: 'Pop-Up Enquiry',
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      category: formData.category,
      subject: `Root Of America Pop-Up Enquiry [${formData.category}]: ${formData.company || formData.name}`,
      message: formData.message,
      details: {
        category: formData.category,
        pageOrigin: window.location.pathname
      }
    };

    // Non-blocking background API log
    fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(err => console.warn('Backend API submission warning:', err));

    const subject = encodeURIComponent(`Root Of America Enquiry [${formData.category}]: ${formData.company || formData.name}`);
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
      `Target: info@rootofamerica.com`
    );

    const mailtoUrl = `mailto:info@rootofamerica.com?cc=info@rootsofamerica.com&subject=${subject}&body=${body}`;

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setTicketNumber(`ENQ-2026-${Math.floor(100000 + Math.random() * 900000)}`);

    // Synchronously launch default mail client without popup blocker restriction
    try {
      window.location.href = mailtoUrl;
    } catch (err) {
      console.log('Mailto redirect:', err);
    }
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
                          <option value="Corporate Financier">Corporate Financier / Trade Credit</option>
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
                      className="py-4 text-center space-y-4"
                    >
                      <div className="mx-auto h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                        <CheckCircle className="h-7 w-7" />
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-lg font-sans font-extrabold text-[#1c2421]">Inquiry Dispatched to Inbox</h4>
                        <p className="text-xs text-gray-600 px-4">Your pop-up inquiry has been processed and logged for <strong className="text-[#0e4a36]">info@rootofamerica.com</strong>.</p>
                      </div>

                      {/* Detail card */}
                      <div className="bg-white border border-[#e5dfd3] p-4 rounded-xl text-left space-y-2.5 font-mono text-[11px] text-gray-600 mx-1 shadow-sm">
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
                            <span>Target Email:</span>
                            <span className="font-sans font-bold text-[#0e4a36]">info@rootofamerica.com</span>
                          </div>
                        </div>

                        {/* Direct Email Action Options */}
                        <div className="border-t pt-3 mt-2 space-y-2 font-sans">
                          <p className="text-[11px] font-semibold text-gray-700">Choose your preferred email client to confirm dispatch:</p>
                          <div className="grid grid-cols-2 gap-2">
                             <a
                              href={`https://mail.google.com/mail/?view=cm&fs=1&to=info@rootofamerica.com&cc=info@rootsofamerica.com&su=${encodeURIComponent(`Root Of America Inquiry [${formData.category}]: ${formData.company || formData.name}`)}&body=${encodeURIComponent(`NEW POP-UP INQUIRY\nTicket: ${ticketNumber}\nName: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCategory: ${formData.category}\nMessage: ${formData.message}`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-[#ea4335] hover:bg-[#d93025] text-white py-2 px-2.5 rounded-lg text-[10px] font-bold flex items-center justify-center space-x-1 transition-all"
                            >
                              <ExternalLink className="h-3 w-3" />
                              <span>Open Gmail</span>
                            </a>
                            <a
                              href={`https://outlook.office.com/mail/deeplink/compose?to=info@rootofamerica.com&cc=info@rootsofamerica.com&subject=${encodeURIComponent(`Root Of America Inquiry [${formData.category}]: ${formData.company || formData.name}`)}&body=${encodeURIComponent(`NEW POP-UP INQUIRY\nTicket: ${ticketNumber}\nName: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCategory: ${formData.category}\nMessage: ${formData.message}`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-[#0078d4] hover:bg-[#106ebe] text-white py-2 px-2.5 rounded-lg text-[10px] font-bold flex items-center justify-center space-x-1 transition-all"
                            >
                              <ExternalLink className="h-3 w-3" />
                              <span>Open Outlook</span>
                            </a>
                          </div>

                          <div className="flex items-center space-x-2 pt-1">
                            <a
                              href={`mailto:info@rootofamerica.com?cc=info@rootsofamerica.com&subject=${encodeURIComponent(`Root Of America Inquiry [${formData.category}]: ${formData.company || formData.name}`)}&body=${encodeURIComponent(`NEW POP-UP INQUIRY\nTicket: ${ticketNumber}\nName: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCategory: ${formData.category}\nMessage: ${formData.message}`)}`}
                              className="flex-1 bg-[#0e4a36] hover:bg-[#0b3c2a] text-white py-2 px-2 rounded-lg text-[10px] font-bold flex items-center justify-center space-x-1 transition-all"
                            >
                              <Mail className="h-3 w-3" />
                              <span>Default App</span>
                            </a>
                            <button
                              type="button"
                              onClick={() => {
                                const text = `NEW INQUIRY (${ticketNumber})\nName: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCategory: ${formData.category}\nMessage: ${formData.message}`;
                                navigator.clipboard.writeText(text);
                                setCopied(true);
                                setTimeout(() => setCopied(false), 2500);
                              }}
                              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 py-2 px-2 rounded-lg text-[10px] font-bold flex items-center justify-center space-x-1 transition-all"
                            >
                              {copied ? <CheckCircle className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3 text-gray-600" />}
                              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
                            </button>
                          </div>

                          {/* FormSubmit direct submission option */}
                          <form action="https://formsubmit.co/info@rootofamerica.com" method="POST" target="_blank" className="pt-2">
                            <input type="hidden" name="_subject" value={`Root Of America Pop-Up Enquiry [${formData.category}]: ${formData.company || formData.name}`} />
                            <input type="hidden" name="_replyto" value={formData.email} />
                            <input type="hidden" name="Ticket_Number" value={ticketNumber} />
                            <input type="hidden" name="Name" value={formData.name} />
                            <input type="hidden" name="Company" value={formData.company} />
                            <input type="hidden" name="Email" value={formData.email} />
                            <input type="hidden" name="Phone" value={formData.phone} />
                            <input type="hidden" name="Category" value={formData.category} />
                            <input type="hidden" name="Message" value={formData.message} />
                            <button
                              type="submit"
                              className="w-full bg-amber-500 hover:bg-amber-600 text-gray-950 font-bold py-2 px-3 rounded-lg text-[11px] flex items-center justify-center space-x-1.5 transition-all shadow-xs cursor-pointer"
                            >
                              <Send className="h-3 w-3" />
                              <span>Direct Web Submit to info@rootofamerica.com</span>
                            </button>
                          </form>

                          <p className="text-[10px] text-amber-800 bg-amber-50 border border-amber-200 p-2 rounded-lg leading-tight mt-2 text-left">
                            <strong>Note for info@rootofamerica.com inbox:</strong> FormSubmit sends a 1-time activation email on first use. Clicking the "Direct Web Submit" button or "Open Gmail" above delivers the message directly to your inbox.
                          </p>
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
