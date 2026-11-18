import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone } from 'lucide-react';
import { businessInfo } from '../data/businessData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      {/* Mobile Bottom Floating Quick-Action Pill (Call + WhatsApp) */}
      <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden flex items-center gap-2.5 p-1.5 rounded-full bg-[#181816]/95 backdrop-blur-md border border-white/15 shadow-2xl">
        <a
          href={`tel:${businessInfo.phonePrimaryRaw}`}
          aria-label="Call Vijaya Sai Enterprises"
          className="flex-1 py-2.5 px-4 rounded-full bg-white/10 active:bg-white/20 text-white text-xs uppercase tracking-[0.16em] font-semibold flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4 text-[#B7A17B]" />
          <span>Call Now</span>
        </a>
        <a
          href={businessInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex-1 py-2.5 px-4 rounded-full bg-[#25D366] active:bg-[#20ba5a] text-white text-xs uppercase tracking-[0.16em] font-semibold flex items-center justify-center gap-2 shadow-md"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Desktop Floating WhatsApp FAB */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 items-center gap-3">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#181816] text-white text-xs font-medium shadow-xl border border-white/10"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>Chat with Akuri Vaasu (Proprietor)</span>
            </motion.div>
          )}
        </AnimatePresence>

        <a
          href={businessInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label="Chat on WhatsApp"
          className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
          <MessageSquare className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:scale-110" />
        </a>
      </div>
    </>
  );
};
