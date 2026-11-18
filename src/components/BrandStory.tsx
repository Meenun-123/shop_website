import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Hammer, CheckCircle2 } from 'lucide-react';
import { businessInfo } from '../data/businessData';

interface BrandStoryProps {
  onLearnMoreClick: () => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onLearnMoreClick }) => {
  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#F5F2EB] overflow-hidden">
      {/* Subtle luxury background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EAE6DD] rounded-full filter blur-3xl opacity-60 -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-[1px] bg-[#B7A17B]" />
          <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#8E7752]">
            Editorial &bull; Brand Story
          </span>
        </div>

        {/* Main Grid: Editorial Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetric Image Composition */}
          <div className="lg:col-span-7 relative">
            <div className="relative z-10 grid grid-cols-12 gap-4 items-end">
              {/* Primary Large Architectural Photograph (Real UPVC Display) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="col-span-8 overflow-hidden rounded-2xl shadow-xl aspect-[4/5] relative group"
              >
                <img
                  src="./images/gallery/vse-photo-001.jpg"
                  alt="Vijaya Sai Enterprises Premium UPVC Windows and Doors"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-lg bg-black/40 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#B7A17B] font-semibold block">
                    Premium UPVC Engineering
                  </span>
                  <span className="text-xs font-light">Sliding (2, 2.5 & 3 Track), Casement, Fixed & Louvers</span>
                </div>
              </motion.div>

              {/* Secondary Overlapping Photograph (Real PVC/WPC Fluted Wall Panels) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="col-span-4 overflow-hidden rounded-xl shadow-2xl aspect-[3/4] relative group -mb-6"
              >
                <img
                  src="./images/gallery/vse-photo-060.jpg"
                  alt="Interior and Exterior PVC and WPC Fluted Wall Panels"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75" />
                <div className="absolute bottom-3 left-3 text-white text-[11px] font-medium">
                  PVC & WPC Panels
                </div>
              </motion.div>
            </div>

            {/* Floating Architecture Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-6 -left-6 z-20 hidden sm:flex items-center gap-3 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-xl border border-[#EAE6DD]"
            >
              <div className="w-10 h-10 rounded-full bg-[#F5F2EB] flex items-center justify-center text-[#B7A17B]">
                <Hammer className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-[#20201E] tracking-wide">
                  Gudivada Showroom
                </span>
                <span className="block text-[11px] text-[#6B6964]">
                  Proprietor: Akuri Vaasu
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#20201E] leading-[1.1] mb-6 tracking-tight">
                Designed for Living. <br />
                <span className="italic font-normal text-[#8E7752]">Crafted to Last.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#6B6964] font-light leading-relaxed mb-6">
                Every detail matters. From precision UPVC sliding and openable casement systems to 100% waterproof WPC frames, doors, boards, and PVC/WPC wall panels, we bring modern engineering to every corner of your space.
              </p>

              <p className="text-sm text-[#6B6964] leading-relaxed mb-8">
                Based in Gudivada, <strong className="text-[#20201E] font-semibold">{businessInfo.name}</strong> delivers weatherproof, termite-proof, and low-maintenance architectural solutions tailored to modern Indian homes and commercial interiors. Guided personally by <strong className="text-[#20201E] font-semibold">{businessInfo.proprietor}</strong>, every unit is measured and finished to exact specifications.
              </p>

              {/* Pillars list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-4 border-t border-[#E0D9CC]">
                <div className="flex items-center gap-2 text-xs font-medium text-[#20201E]">
                  <CheckCircle2 className="w-4 h-4 text-[#B7A17B] flex-shrink-0" />
                  <span>UPVC 2, 2.5 & 3 Track Windows</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#20201E]">
                  <CheckCircle2 className="w-4 h-4 text-[#B7A17B] flex-shrink-0" />
                  <span>WPC Frames (3×2 to 6×2.5)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#20201E]">
                  <CheckCircle2 className="w-4 h-4 text-[#B7A17B] flex-shrink-0" />
                  <span>WPC Doors (26–32mm) & Boards</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#20201E]">
                  <CheckCircle2 className="w-4 h-4 text-[#B7A17B] flex-shrink-0" />
                  <span>PVC/WPC Wall Panels & CNC Jali</span>
                </div>
              </div>

              {/* Discover More link */}
              <div>
                <button
                  onClick={onLearnMoreClick}
                  className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-semibold text-[#20201E] hover:text-[#B7A17B] transition-colors py-2"
                >
                  <span>Discover Full Catalogue</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
