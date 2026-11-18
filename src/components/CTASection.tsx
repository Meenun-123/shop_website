import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/businessData';

interface CTASectionProps {
  onContactClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onContactClick }) => {
  return (
    <section className="relative py-20 sm:py-36 lg:py-40 bg-[#181816] text-[#F5F2EB] overflow-hidden">
      {/* Background Architectural Photo with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 filter blur-[0.5px]"
        style={{ backgroundImage: "url('./images/gallery/vse-photo-001.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#181816] via-[#181816]/80 to-[#181816]" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#B7A17B] text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.25em] font-semibold mb-6 sm:mb-8 border border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Begin Your Architectural Journey</span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-4xl sm:text-7xl lg:text-8xl text-[#F5F2EB] tracking-tight leading-[1.06] mb-6 sm:mb-8">
            Let's Create <br />
            <span className="italic font-light text-[#B7A17B]">Something Beautiful.</span>
          </h2>

          {/* Supporting text */}
          <p className="text-sm sm:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed mb-9 sm:mb-12">
            Looking for the right doors and windows for your space? Let's make it happen.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-6">
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto justify-center px-8 sm:px-9 py-4 rounded-full bg-[#B7A17B] text-[#181816] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#C8B695] transition-all duration-300 active:scale-[0.98] sm:hover:scale-105 shadow-xl flex items-center gap-3"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={businessInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center px-8 sm:px-9 py-4 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#20ba5a] transition-all duration-300 active:scale-[0.98] sm:hover:scale-105 shadow-xl flex items-center gap-3"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Direct Phone Assistance */}
          <div className="mt-12 text-xs text-white/50 tracking-wider">
            <span>Direct consultation with {businessInfo.proprietor}: </span>
            <a
              href={`tel:${businessInfo.phonePrimaryRaw}`}
              className="text-[#B7A17B] hover:underline font-semibold"
            >
              {businessInfo.phonePrimary}
            </a>
            <span className="mx-2">&bull;</span>
            <a
              href={`tel:${businessInfo.phoneSecondaryRaw}`}
              className="text-[#B7A17B] hover:underline font-semibold"
            >
              {businessInfo.phoneSecondary}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
