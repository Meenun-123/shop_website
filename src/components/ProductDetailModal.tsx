import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, MessageSquare } from 'lucide-react';
import { type CollectionItem } from '../data/businessData';

interface ProductDetailModalProps {
  item: CollectionItem | null;
  onClose: () => void;
  onEnquire: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  item,
  onClose,
  onEnquire,
}) => {
  useEffect(() => {
    if (!item) return;
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [item, onClose]);

  if (!item) return null;

  const whatsappItemUrl = `https://wa.me/919000457378?text=Hello%20Vijaya%20Sai%20Enterprises%2C%20I%20am%20interested%20in%20${encodeURIComponent(
    item.title
  )}%20(${item.number}).%20Please%20share%20details%20and%20pricing.`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window: bottom sheet on mobile, centered card on sm+ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#F5F2EB] rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92svh] sm:max-h-[90vh] flex flex-col md:flex-row border border-[#E0D9CC]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 w-10 h-10 rounded-full bg-black/55 hover:bg-black/75 text-white flex items-center justify-center transition-colors shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column: Image */}
          <div className="md:w-1/2 relative bg-black/10 h-56 sm:h-72 md:h-auto md:min-h-full flex-shrink-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-14 sm:bottom-5 sm:left-5 sm:right-5 text-white">
              <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#B7A17B] font-semibold block">
                Collection {item.number}
              </span>
              <h4 className="font-serif text-xl sm:text-2xl text-white leading-tight">{item.title}</h4>
            </div>
          </div>

          {/* Right Column: Detailed Specifications */}
          <div className="md:w-1/2 p-5 sm:p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
                <span className="px-3 py-1 rounded-full bg-[#EAE6DD] text-[#8E7752] text-[10px] uppercase tracking-[0.22em] font-semibold">
                  Technical Specifications
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#20201E] mb-3 sm:mb-4 leading-tight">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#6B6964] font-light leading-relaxed mb-5 sm:mb-6">
                {item.fullDesc}
              </p>

              {/* Material & Engineering Specs */}
              <div className="mb-5 sm:mb-6">
                <h5 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#20201E] mb-2.5">
                  Dimensions & Engineering
                </h5>
                <div className="grid grid-cols-1 gap-2">
                  {item.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#20201E]">
                      <Check className="w-3.5 h-3.5 text-[#B7A17B] mt-0.5 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Features */}
              <div className="mb-6 sm:mb-8">
                <h5 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#20201E] mb-2.5">
                  Key Architectural Features
                </h5>
                <div className="grid grid-cols-1 gap-2">
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#6B6964]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8E7752] mt-1.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 sm:pt-6 border-t border-[#EAE6DD] flex flex-col sm:flex-row gap-3 pb-2 sm:pb-0">
              <button
                onClick={() => {
                  onEnquire(item.title);
                  onClose();
                }}
                className="flex-1 py-3.5 px-5 rounded-full bg-[#20201E] text-white text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#B7A17B] transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={whatsappItemUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#20ba5a] transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
