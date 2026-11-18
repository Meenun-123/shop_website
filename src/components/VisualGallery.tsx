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
  const [visibleCount, setVisibleCount] = useState<number>(18);

  const upvcCount = allGalleryPhotos.filter((p) => p.tag === 'UPVC').length;
  const wpcCount = allGalleryPhotos.filter((p) => p.tag === 'WPC').length;
  const panelsCount = allGalleryPhotos.filter((p) => p.tag === 'Panels & Interiors').length;
  const meshCount = allGalleryPhotos.filter((p) => p.tag === 'Mesh & Hardware').length;

  const categories = [
    { id: 'all', label: `All Designs (${allGalleryPhotos.length})` },
    { id: 'UPVC', label: `UPVC Windows & Doors (${upvcCount})` },
    { id: 'WPC', label: `WPC Frames, Doors & Boards (${wpcCount})` },
    { id: 'Panels & Interiors', label: `Wall Panels & Interiors (${panelsCount})` },
    { id: 'Mesh & Hardware', label: `Mesh Doors & Hardware (${meshCount})` },
  ];

  const filteredPhotos = allGalleryPhotos.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.tag === activeCategory;
  }) as GalleryPhoto[];

  const visiblePhotos = filteredPhotos.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 18, filteredPhotos.length));
  };

  return (
    <section id="gallery" className="py-28 sm:py-36 bg-[#F5F2EB] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
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
            Authentic photographs directly from our Gudivada showroom and client installations — accurately grouped by UPVC, WPC, Wall Panels, and Mesh Doors.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setVisibleCount(18);
              }}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#20201E] text-white shadow-md'
                  : 'bg-[#EAE6DD] text-[#6B6964] hover:text-[#20201E] hover:bg-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {visiblePhotos.map((photo, index) => {
              const isPortrait = photo.aspect === 'portrait';

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
                  key={photo.id}
                  onClick={() => onPhotoClick(photo, filteredPhotos)}
                  className="group relative cursor-pointer rounded-2xl overflow-hidden bg-[#EAE6DD] border border-[#DFD8CC] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5"
                >
                  {/* Photo Display */}
                  <div className={`w-full overflow-hidden ${isPortrait ? 'h-96' : 'h-72'}`}>
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    <div className="flex justify-end">
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#B7A17B] font-semibold block mb-1">
                        {photo.category}
                      </span>
                      <h4 className="font-serif text-xl text-white">
                        {photo.title}
                      </h4>
                      <span className="text-[11px] text-white/70 tracking-wider block mt-1">
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
          <div className="mt-16 text-center">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#20201E] text-white text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#B7A17B] transition-all duration-300 hover:scale-105 shadow-md"
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
