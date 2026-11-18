import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Plus } from 'lucide-react';
import { allGalleryPhotos } from '../data/businessData';
import { type GalleryPhoto } from './LightboxModal';

interface VisualGalleryProps {
  onPhotoClick: (photo: GalleryPhoto, filteredList: GalleryPhoto[]) => void;
}

export const VisualGallery: React.FC<VisualGalleryProps> = ({ onPhotoClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const upvcCount = allGalleryPhotos.filter((p) => p.tag === 'UPVC').length;
  const wpcCount = allGalleryPhotos.filter((p) => p.tag === 'WPC').length;
  const panelsCount = allGalleryPhotos.filter((p) => p.tag === 'Panels & Interiors').length;
  const meshCount = allGalleryPhotos.filter((p) => p.tag === 'Mesh & Hardware').length;

  const categories = [
    { id: 'all', label: `All (${allGalleryPhotos.length})` },
    { id: 'UPVC', label: `UPVC (${upvcCount})` },
    { id: 'WPC', label: `WPC Frames & Doors (${wpcCount})` },
    { id: 'Panels & Interiors', label: `Wall Panels (${panelsCount})` },
    { id: 'Mesh & Hardware', label: `Mesh & Hardware (${meshCount})` },
  ];

  const filteredPhotos = allGalleryPhotos.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.tag === activeCategory;
  }) as GalleryPhoto[];

  const visiblePhotos = filteredPhotos.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, filteredPhotos.length));
  };

  return (
    <section id="gallery" className="py-16 sm:py-28 lg:py-36 bg-[#F5F2EB] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 gap-5 sm:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="w-8 h-[1px] bg-[#B7A17B]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#8E7752]">
                Visual Archives
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#20201E] tracking-tight leading-[1.08]">
              The Craftsmanship <br />
              <span className="italic font-normal text-[#8E7752]">In Detail.</span>
            </h2>
          </div>

          <p className="max-w-md text-[#6B6964] text-sm sm:text-base leading-relaxed">
            Authentic photographs directly from our Gudivada showroom and client installations. Tap any photo to inspect full-screen and swipe through designs.
          </p>
        </div>

        {/* Swipeable Edge-to-Edge Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 sm:mb-12 -mx-5 px-5 sm:mx-0 sm:px-0 scrollbar-none snap-x">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setVisibleCount(12);
              }}
              className={`snap-start px-4 sm:px-5 py-2.5 rounded-full text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-[#20201E] text-white shadow-md'
                  : 'bg-[#EAE6DD] text-[#6B6964] hover:text-[#20201E] hover:bg-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 2-Column Mobile Grid -> 3-Column Desktop Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6"
        >
          <AnimatePresence>
            {visiblePhotos.map((photo, index) => {
              const isPortrait = photo.aspect === 'portrait';

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: (index % 6) * 0.04 }}
                  key={photo.id}
                  onClick={() => onPhotoClick(photo, filteredPhotos)}
                  className="group relative cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden bg-[#EAE6DD] border border-[#DFD8CC] shadow-sm hover:shadow-xl transition-all duration-500 active:scale-[0.98] sm:hover:-translate-y-1.5"
                >
                  {/* Photo Display */}
                  <div className={`w-full overflow-hidden ${isPortrait ? 'h-48 sm:h-96' : 'h-44 sm:h-72'}`}>
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                  </div>

                  {/* Mobile Always-Visible Subtle Caption / Desktop Hover Reveal */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 sm:p-6">
                    <div className="hidden sm:flex justify-end">
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="mt-auto">
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[#B7A17B] font-semibold block mb-0.5 sm:mb-1 truncate">
                        {photo.tag}
                      </span>
                      <h4 className="font-serif text-sm sm:text-xl text-white leading-tight line-clamp-2">
                        {photo.title}
                      </h4>
                      <span className="hidden sm:block text-[11px] text-white/70 tracking-wider mt-1">
                        Click to view full resolution
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {visibleCount < filteredPhotos.length && (
          <div className="mt-10 sm:mt-16 text-center">
            <button
              onClick={handleLoadMore}
              className="w-full sm:w-auto justify-center inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#20201E] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#B7A17B] transition-all duration-300 active:scale-[0.98] sm:hover:scale-105 shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>Load More Designs ({filteredPhotos.length - visibleCount} remaining)</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
