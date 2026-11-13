import React, { useEffect } from 'react';
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
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!currentPhoto) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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

  const whatsappInquiryUrl = `https://wa.me/919000457378?text=Hello%20Vijaya%20Sai%20Enterprises%2C%20I%20am%20interested%20in%20this%20design%3A%20${encodeURIComponent(
    currentPhoto.title
  )}%20(${currentPhoto.category})%20from%20your%20website%20gallery.`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
          aria-label="Close image viewer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Navigation Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white transition-all hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Navigation Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white transition-all hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image and Info Container */}
        <motion.div
          key={currentPhoto.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
        >
          <div className="relative rounded-xl overflow-hidden max-h-[72vh] flex items-center justify-center shadow-2xl border border-white/10 bg-[#121210]">
            <img
              src={currentPhoto.src}
              alt={currentPhoto.title}
              className="max-h-[70vh] w-auto max-w-full object-contain"
            />
          </div>

          {/* Details Bar */}
          <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-white px-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-[#B7A17B] text-[#181816] text-[10px] font-bold tracking-wider uppercase">
                  {currentPhoto.category}
                </span>
                <span className="text-xs text-white/50 font-mono">
                  {currentIndex + 1} of {allPhotos.length}
                </span>
              </div>
              <h4 className="font-serif text-xl sm:text-2xl text-white">
                {currentPhoto.title}
              </h4>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#20ba5a] transition-all hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire On WhatsApp</span>
              </a>

              <a
                href={currentPhoto.src}
                download={currentPhoto.filename}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Download high-resolution photo"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
