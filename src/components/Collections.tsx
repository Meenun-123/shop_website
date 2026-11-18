import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Ruler } from 'lucide-react';
import { collectionsData, type CollectionItem } from '../data/businessData';

interface CollectionsProps {
  onSelectCollection: (item: CollectionItem) => void;
}

export const Collections: React.FC<CollectionsProps> = ({ onSelectCollection }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Collections' },
    { id: 'upvc', label: 'UPVC Windows & Doors' },
    { id: 'wpc', label: 'WPC Frames, Doors & Boards' },
    { id: 'panels', label: 'Wall Panels & CNC Jali' },
    { id: 'mesh', label: 'Mesh Doors & Hardware' },
  ];

  const filteredItems = collectionsData.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.categoryGroup === activeFilter;
  });

  return (
    <section id="collections" className="py-28 sm:py-36 bg-[#EAE6DD] text-[#20201E] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#B7A17B]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#8E7752]">
                Curated Portfolio
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#20201E] tracking-tight leading-[1.08]">
              Explore Our <br />
              <span className="italic font-normal text-[#8E7752]">UPVC, WPC & Panel Collections.</span>
            </h2>
          </div>

          <p className="max-w-md text-[#6B6964] text-sm sm:text-base leading-relaxed">
            Precision UPVC windows & doors, waterproof WPC frames, doors & boards, and interior/exterior PVC & WPC wall panels and CNC Jali boards — engineered for lasting architectural elegance.
          </p>
        </div>

        {/* Exact Specifications Quick-Reference Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-[#F5F2EB] border border-[#DFD8CC]">
            <div className="flex items-center gap-2 text-[#8E7752] text-[10px] uppercase tracking-[0.22em] font-bold mb-2">
              <Ruler className="w-3.5 h-3.5" />
              <span>UPVC Products</span>
            </div>
            <p className="text-xs text-[#20201E] leading-relaxed">
              <strong>Sliding:</strong> 2 Track, 2.5 Track, 3 Track &bull; <strong>Openable:</strong> Casement Doors & Windows &bull; <strong>Utility:</strong> Fixed Frames, Partitions, Ventilators & Louvers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F5F2EB] border border-[#DFD8CC]">
            <div className="flex items-center gap-2 text-[#8E7752] text-[10px] uppercase tracking-[0.22em] font-bold mb-2">
              <Ruler className="w-3.5 h-3.5" />
              <span>WPC Frames, Doors & Boards</span>
            </div>
            <p className="text-xs text-[#20201E] leading-relaxed">
              <strong>Frames:</strong> 3×2, 4×2, 4×2.5, 5×2.5, 6×2.5 (18–32mm) &bull; <strong>Doors:</strong> 26mm–32mm (Size 7 ft × 38 in) &bull; <strong>Boards:</strong> 6mm to 18mm.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F5F2EB] border border-[#DFD8CC]">
            <div className="flex items-center gap-2 text-[#8E7752] text-[10px] uppercase tracking-[0.22em] font-bold mb-2">
              <Ruler className="w-3.5 h-3.5" />
              <span>Interior & Exterior PVC / WPC</span>
            </div>
            <p className="text-xs text-[#20201E] leading-relaxed">
              <strong>Architectural Surfaces:</strong> Interior & Exterior PVC / WPC Wall Panels, Fluted Louvers & Custom <strong>CNC Jali Boards</strong>.
            </p>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 whitespace-nowrap ${
                activeFilter === tab.id
                  ? 'bg-[#20201E] text-white shadow-md'
                  : 'bg-[#F5F2EB] text-[#6B6964] hover:text-[#20201E] hover:bg-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Large Editorial Card Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => {
              const isFeatured = activeFilter === 'all' && (index === 0 || index === 6);

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: index * 0.06 }}
                  key={item.id}
                  onClick={() => onSelectCollection(item)}
                  className={`group cursor-pointer rounded-2xl overflow-hidden bg-[#F5F2EB] flex flex-col justify-between border border-[#DFD8CC] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                    isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                  }`}
                >
                  {/* Image Container with zoom */}
                  <div
                    className={`relative w-full overflow-hidden bg-black/10 ${
                      isFeatured ? 'h-80 sm:h-96' : 'h-72 sm:h-80'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                    {/* Category Index Number Badge */}
                    <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#20201E] text-[11px] font-mono tracking-wider font-semibold">
                      {item.number}
                    </div>

                    {/* Quick Specs Pill on hover */}
                    <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center gap-2 opacity-95 transition-opacity">
                      {item.specs.slice(0, 2).map((spec, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded bg-black/50 backdrop-blur-md text-white/95 text-[10px] tracking-wide font-medium border border-white/15"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Content Footer */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#20201E] group-hover:text-[#8E7752] transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#6B6964] font-light leading-relaxed mb-6">
                        {item.shortDesc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#EAE6DD]">
                      <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8E7752] group-hover:text-[#20201E] transition-colors">
                        View Specifications
                      </span>
                      <div className="w-9 h-9 rounded-full bg-[#EAE6DD] group-hover:bg-[#B7A17B] text-[#20201E] group-hover:text-white flex items-center justify-center transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
