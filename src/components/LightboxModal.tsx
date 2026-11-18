import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MessageSquare, Download } from 'lucide-react';

export interface GalleryPhoto {
  id: number;
  filename: string;
  src: string;
  width: number;
  height: number;
  aspect: string;
  category: string;
  tag: string;
  title: string;
}

interface LightboxModalProps {
  currentPhoto: GalleryPhoto | null;
  allPhotos: GalleryPhoto[];
  onClose: () => void;
  onSelectPhoto: (photo: GalleryPhoto) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  currentPhoto,
  allPhotos,
  onClose,
  onSelectPhoto,
}) => {
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!currentPhoto) return;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPhoto, allPhotos]);

  if (!currentPhoto) return null;

  const currentIndex = allPhotos.findIndex((p) => p.id === currentPhoto.id);

  const handleNext = () => {
    if (currentIndex < allPhotos.length - 1) {
      onSelectPhoto(allPhotos[currentIndex + 1]);
    } else {
      onSelectPhoto(allPhotos[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectPhoto(allPhotos[currentIndex - 1]);
    } else {
      onSelectPhoto(allPhotos[allPhotos.length - 1]);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  const whatsappInquiryUrl = `https://wa.me/919000457378?text=Hello%20Vijaya%20Sai%20Enterprises%2C%20I%20am%20interested%20in%20this%20design%3A%20${encodeURIComponent(
    currentPhoto.title
  )}%20(${currentPhoto.category})%20from%20your%20website%20gallery.`;

  return (
    <AnimatePresence>
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="fixed inset-0 z-50 flex flex-col items-center justify-between p-4 sm:p-8 bg-black/95 backdrop-blur-xl"
      >
        {/* Top Bar with Counter & Close */}
        <div className="w-full max-w-5xl flex items-center justify-between z-50">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-[#B7A17B] text-[#181816] text-[10px] font-bold tracking-wider uppercase">
              {currentPhoto.tag}
            </span>
            <span className="text-xs text-white/60 font-mono">
              {currentIndex + 1} / {allPhotos.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
            aria-label="Close image viewer"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Desktop Side Arrows */}
        <button
          onClick={handlePrev}
          className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white transition-all hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white transition-all hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Center Photo */}
        <motion.div
          key={currentPhoto.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-5xl w-full flex-1 flex items-center justify-center my-3 min-h-0"
        >
          <div className="relative rounded-xl overflow-hidden max-h-[60svh] sm:max-h-[70vh] flex items-center justify-center shadow-2xl border border-white/10 bg-[#121210]">
            <img
              src={currentPhoto.src}
              alt={currentPhoto.title}
              className="max-h-[58svh] sm:max-h-[68vh] w-auto max-w-full object-contain select-none"
            />
          </div>
        </motion.div>

        {/* Bottom Details & Mobile Touch Nav Bar */}
        <div className="w-full max-w-5xl flex flex-col gap-3 text-white z-50 pb-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="min-w-0">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B7A17B] font-semibold block truncate">
                {currentPhoto.category}
              </span>
              <h4 className="font-serif text-lg sm:text-2xl text-white truncate">
                {currentPhoto.title}
              </h4>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2.5">
              {/* Mobile Prev/Next Buttons */}
              <button
                onClick={handlePrev}
                className="sm:hidden w-10 h-10 rounded-full bg-white/15 active:bg-white/30 text-white flex items-center justify-center flex-shrink-0"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial justify-center inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#25D366] text-white text-[11px] sm:text-xs uppercase tracking-wider font-semibold hover:bg-[#20ba5a] transition-all"
              >
                <MessageSquare className="w-4 h-4 flex-shrink-0" />
                <span>Enquire WhatsApp</span>
              </a>

              <a
                href={currentPhoto.src}
                download={currentPhoto.filename}
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center flex-shrink-0 transition-colors"
                title="Download high-resolution photo"
              >
                <Download className="w-4 h-4" />
              </a>

              <button
                onClick={handleNext}
                className="sm:hidden w-10 h-10 rounded-full bg-white/15 active:bg-white/30 text-white flex items-center justify-center flex-shrink-0"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <p className="sm:hidden text-center text-[10px] text-white/40 tracking-wider uppercase">
            Swipe left or right to browse designs
          </p>
        </div>
      </div>
    </AnimatePresence>
  );
};
