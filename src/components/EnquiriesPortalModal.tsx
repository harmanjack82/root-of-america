import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Download, RefreshCw, CheckCircle, Search, Calendar, User, Building, Phone, Tag, ExternalLink } from 'lucide-react';

interface EnquiryRecord {
  id: string;
  timestamp: string;
  formType: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
  details?: Record<string, any>;
  recipients: string[];
  deliveryStatus: string;
}

interface EnquiriesPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiriesPortalModal({ isOpen, onClose }: EnquiriesPortalModalProps) {
  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('ALL');

  const fetchEnquiries = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/enquiries');
      if (res.ok) {
        const data = await res.json();
        setEnquiries(data.enquiries || []);
      }
    } catch (err) {
      console.error('Failed to fetch enquiries:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchEnquiries();
    }
  }, [isOpen]);

  const filtered = enquiries.filter(e => {
    const matchesSearch =
      (e.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (e.company || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (e.email || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (e.formType || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (e.message || '').toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filterType === 'ALL' || e.formType.toLowerCase().includes(filterType.toLowerCase());

    return matchesSearch && matchesFilter;
  });

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-4xl bg-[#faf8f5] rounded-2xl shadow-2xl border border-[#e5dfd3] overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="bg-[#0e4a36] text-white p-5 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-emerald-800/80 rounded-xl flex items-center justify-center border border-emerald-600/50">
                <Mail className="h-5 w-5 text-amber-400" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold">Form Inquiries Inbox</h3>
                <p className="text-xs text-emerald-200">
                  Targeted Recipients: <span className="font-mono text-amber-300 font-bold">info@rootofamerica.com</span> & info@rootsofamerica.com
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <a
                href="/api/enquiries/export"
                download
                className="bg-amber-500 hover:bg-amber-600 text-gray-950 font-sans font-bold text-xs px-3 py-2 rounded-lg flex items-center space-x-1.5 transition-colors shadow-sm"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Export CSV</span>
              </a>

              <button
                onClick={fetchEnquiries}
                disabled={isLoading}
                className="p-2 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg transition-colors cursor-pointer"
                title="Refresh Inquiries"
              >
                <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              </button>

              <button
                onClick={onClose}
                className="p-2 hover:bg-emerald-800 text-emerald-200 hover:text-white rounded-lg transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="p-4 bg-white border-b border-[#e5dfd3] flex flex-wrap items-center justify-between gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, company, email or requirement..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#faf8f5] border border-[#e5dfd3] rounded-xl pl-9 pr-3 py-1.5 text-xs outline-none focus:border-[#0e4a36]"
              />
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold text-gray-500">Form Type:</span>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="bg-[#faf8f5] border border-[#e5dfd3] rounded-xl px-2.5 py-1.5 text-xs outline-none focus:border-[#0e4a36]"
              >
                <option value="ALL">All Forms</option>
                <option value="Pop-Up">Pop-Up Enquiry</option>
                <option value="RFQ">Bulk RFQ</option>
                <option value="Premium">Premium Plan</option>
                <option value="Trade">Trade Desk</option>
              </select>
            </div>
          </div>

          {/* Inquiries Table / Cards */}
          <div className="p-4 overflow-y-auto flex-1 space-y-3">
            {filtered.length === 0 ? (
              <div className="text-center py-12 text-gray-500 space-y-2">
                <Mail className="h-10 w-10 text-gray-300 mx-auto" />
                <p className="text-sm font-semibold">No submitted form requests found.</p>
                <p className="text-xs text-gray-400">All submissions via pop-up modals and web forms will instantly appear here and dispatch to info@rootofamerica.com.</p>
              </div>
            ) : (
              filtered.map((enq) => (
                <div key={enq.id} className="bg-white border border-[#e5dfd3] rounded-xl p-4 shadow-2xs hover:border-[#0e4a36] transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-2 mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="bg-[#0e4a36]/10 text-[#0e4a36] px-2.5 py-0.5 rounded-md font-mono text-[10px] font-bold">
                        {enq.id}
                      </span>
                      <span className="bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-md text-[10px] font-bold flex items-center space-x-1">
                        <Tag className="h-2.5 w-2.5" />
                        <span>{enq.formType}</span>
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 text-[11px] text-gray-400 font-mono">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(enq.timestamp).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs mb-3">
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase font-bold">Contact Name</span>
                      <div className="font-semibold text-gray-900 flex items-center space-x-1">
                        <User className="h-3 w-3 text-gray-400 shrink-0" />
                        <span>{enq.name || 'N/A'}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase font-bold">Company</span>
                      <div className="font-semibold text-gray-900 flex items-center space-x-1">
                        <Building className="h-3 w-3 text-gray-400 shrink-0" />
                        <span>{enq.company || 'N/A'}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase font-bold">Email / Phone</span>
                      <div className="font-mono text-gray-800 flex items-center space-x-1">
                        <Mail className="h-3 w-3 text-gray-400 shrink-0" />
                        <a href={`mailto:${enq.email}`} className="hover:underline text-[#0e4a36] font-bold">{enq.email || 'N/A'}</a>
                      </div>
                      {enq.phone && enq.phone !== 'N/A' && (
                        <div className="font-mono text-gray-600 text-[11px] flex items-center space-x-1 mt-0.5">
                          <Phone className="h-2.5 w-2.5 text-gray-400 shrink-0" />
                          <span>{enq.phone}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {enq.message && (
                    <div className="bg-[#faf8f5] p-2.5 rounded-lg border border-[#e5dfd3] text-xs text-gray-700 font-sans mb-3 whitespace-pre-wrap">
                      <span className="font-bold block text-[10px] text-gray-400 mb-1 uppercase">Message / Requirement:</span>
                      {enq.message}
                    </div>
                  )}

                  <div className="flex items-center justify-between text-[11px] pt-1">
                    <span className="text-emerald-700 font-medium flex items-center space-x-1">
                      <CheckCircle className="h-3 w-3 text-emerald-600" />
                      <span>{enq.deliveryStatus} (Routed to info@rootofamerica.com)</span>
                    </span>

                    <a
                      href={`mailto:info@rootofamerica.com?subject=RE: ${encodeURIComponent(enq.subject || 'Form Inquiry')}&body=${encodeURIComponent(`Replying to inquiry #${enq.id} from ${enq.name} (${enq.company}):\n\n`)}`}
                      className="text-[#0e4a36] font-bold hover:underline flex items-center space-x-1 text-xs"
                    >
                      <ExternalLink className="h-3 w-3" />
                      <span>Reply via Mail</span>
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-3 bg-gray-100 border-t border-[#e5dfd3] flex items-center justify-between text-xs text-gray-500">
            <span>Total Captured Submissions: <strong className="text-gray-900">{enquiries.length}</strong></span>
            <span className="text-emerald-800 font-medium">Auto-syncing with info@rootofamerica.com</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
