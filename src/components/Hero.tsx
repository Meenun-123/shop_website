import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowRight, ShieldCheck, Compass } from 'lucide-react';
import { businessInfo } from '../data/businessData';

interface HeroProps {
  onExploreClick: () => void;
  onStoryClick: () => void;
}

const heroSlides = [
  {
    image: './images/gallery/vse-photo-002.jpg',
    tag: 'UPVC Windows & Doors',
    subtitle: '2 Track, 2.5 Track & 3 Track Sliding, Casement & Louvers',
  },
  {
    image: './images/gallery/vse-photo-023.jpg',
    tag: 'WPC Frames & Doors',
    subtitle: 'Waterproof 18mm–32mm WPC Frames, Doors & 6mm–18mm Boards',
  },
  {
    image: './images/gallery/vse-photo-060.jpg',
    tag: 'PVC & WPC Wall Panels',
    subtitle: 'Interior & Exterior Wall Panels & Precision CNC Jali Boards',
  },
];

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onStoryClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#181816]">
      {/* Background Slides with Slow Cinematic Zoom */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
          />
        </AnimatePresence>

        {/* Sophisticated Luxury Architectural Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181816] via-[#181816]/65 to-[#181816]/40" />
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-24 pb-10 sm:pt-32 sm:pb-20 w-full flex flex-col justify-between min-h-[100svh]">
        {/* Top Tagline / Region Badge */}
        <div className="pt-2 sm:pt-8 flex items-center justify-between gap-3">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] uppercase font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7A17B] animate-pulse" />
            Vijaya Sai Enterprises &bull; Gudivada
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-white/70"
          >
            <Compass className="w-3.5 h-3.5 text-[#B7A17B]" />
            <span>UPVC &bull; WPC Frames & Doors &bull; Wall Panels &bull; CNC Jali</span>
          </motion.div>
        </div>

        {/* Main Central Editorial Headline */}
        <div className="my-auto py-8 sm:py-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-[#B7A17B] text-[11px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.35em] font-medium mb-3 sm:mb-4">
              Premium UPVC, WPC & Architectural Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[2.65rem] sm:text-7xl lg:text-8xl font-normal text-[#F5F2EB] leading-[1.06] tracking-tight mb-5 sm:mb-8"
          >
            Spaces Deserve <br />
            <span className="italic font-light text-white/90">Something</span>{' '}
            <span className="text-[#B7A17B]">Extraordinary.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-xl text-white/85 font-light max-w-2xl leading-relaxed mb-8 sm:mb-10"
          >
            {businessInfo.subheadline}
          </motion.p>

          {/* Call to action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-6"
          >
            <button
              onClick={onExploreClick}
              className="group w-full sm:w-auto justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#B7A17B] text-[#181816] text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 hover:bg-[#C8B695] active:scale-[0.98] sm:hover:scale-105 shadow-lg flex items-center gap-3"
            >
              <span>Explore Collections</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onStoryClick}
              className="w-full sm:w-auto justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/25 backdrop-blur-md border border-white/25 text-[#F5F2EB] text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 hover:border-white/40"
            >
              Discover Our Story
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar: Slide Indicators, Location Badge & Scroll Down */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5 border-t border-white/15">
          <div className="w-full sm:w-auto flex flex-col gap-2">
            {/* Active slide label on mobile */}
            <div className="md:hidden text-[11px] uppercase tracking-[0.18em] text-[#B7A17B] font-semibold">
              {heroSlides[currentSlide].tag}
            </div>
            <div className="flex items-center gap-3">
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.tag}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`View slide: ${slide.tag}`}
                  className={`flex items-center gap-2 py-1 text-[11px] uppercase tracking-[0.2em] transition-all duration-300 ${
                    currentSlide === idx ? 'text-[#B7A17B] font-semibold' : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  <span
                    className={`h-1 sm:h-0.5 rounded-full transition-all duration-500 ${
                      currentSlide === idx ? 'w-9 sm:w-8 bg-[#B7A17B]' : 'w-4 sm:w-3 bg-white/30'
                    }`}
                  />
                  <span className="hidden md:inline">{slide.tag}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-6 text-xs text-white/65">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B7A17B] flex-shrink-0" />
              <span className="text-[11px] sm:text-xs">Proprietor Akuri Vaasu</span>
            </div>

            <a
              href="#about"
              className="flex items-center gap-2 text-white/80 hover:text-white text-[11px] sm:text-xs uppercase tracking-[0.2em] transition-colors py-1"
            >
              <span>Scroll</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowDown className="w-3.5 h-3.5 text-[#B7A17B]" />
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
