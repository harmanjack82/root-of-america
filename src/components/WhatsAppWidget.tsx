import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const phoneNumber = '447717920970';
  const formattedNumber = '+44 7717920970';
  const message = 'Hello Roots B2B Trade Desk, I am interested in B2B sourcing support and custom enterprise solutions.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleChatRedirect = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="whatsapp-support-widget" className="fixed bottom-6 left-6 z-50 font-sans flex flex-col items-start">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="mb-4 w-72 bg-white rounded-2xl shadow-2xl border border-[#e5dfd3] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#0e4a36] p-4 text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <MessageCircle className="h-5 w-5 text-[#25D366] fill-[#25D366]" />
                  </div>
                  <span className="absolute bottom-0 right-0 h-3 w-3 bg-[#25D366] border-2 border-[#0e4a36] rounded-full animate-pulse" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-extrabold tracking-wide uppercase">Roots B2B Desk</h4>
                  <p className="text-[10px] text-emerald-100 flex items-center space-x-1 mt-0.5">
                    <span className="inline-block h-1.5 w-1.5 bg-[#25D366] rounded-full" />
                    <span>Typically replies instantly</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 text-white/80 hover:text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Message Body */}
            <div className="p-4 bg-[#faf8f5] space-y-3">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-[#e5dfd3] text-left text-xs text-gray-700 leading-relaxed max-w-[85%]">
                <span className="font-semibold text-[#0e4a36] block mb-0.5">Trade Officer</span>
                Hello! Welcome to Roots B2B. How can we assist you with your bulk sourcing, web development, or logistics today?
              </div>
              
              <div className="bg-emerald-50/50 border border-emerald-100 p-2.5 rounded-xl text-left text-[11px] text-emerald-800 flex items-start space-x-2">
                <span className="inline-block h-2 w-2 bg-[#25D366] rounded-full mt-1 flex-shrink-0 animate-pulse" />
                <span>Support Number: <strong className="font-mono">{formattedNumber}</strong></span>
              </div>
            </div>

            {/* Action Footer */}
            <div className="p-3 bg-white border-t border-[#e5dfd3] flex justify-end">
              <button
                onClick={handleChatRedirect}
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-2.5 px-4 rounded-xl font-bold text-xs transition-colors flex items-center justify-center space-x-2 shadow-md hover:shadow-lg cursor-pointer"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Start WhatsApp Chat</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <div className="flex items-center space-x-3">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl hover:shadow-emerald-200/50 z-50 transition-shadow duration-300 flex items-center justify-center cursor-pointer relative"
        >
          {/* Pulsing Outer Rings */}
          <span className="absolute -inset-1 rounded-full border-2 border-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />
          
          <MessageCircle className="h-6 w-6 text-white fill-white" />
          
          {/* Online Notification Dot */}
          <span className="absolute top-0 right-0 h-3 w-3 bg-[#0e4a36] border-2 border-white rounded-full" />
        </motion.button>

        {/* Hover label */}
        <AnimatePresence>
          {hovered && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="bg-[#1c2421] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-md border border-[#3e4a44] pointer-events-none whitespace-nowrap"
            >
              WhatsApp Support <span className="text-[#25D366] ml-1">● Online</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
