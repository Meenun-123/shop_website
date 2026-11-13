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
    image: '/images/gallery/vse-photo-001.jpg',
    tag: 'Bespoke Entrances',
    subtitle: 'Handcrafted Teak & Architectural Pivot Doors',
  },
  {
    image: '/images/gallery/vse-photo-002.jpg',
    tag: 'Architectural Security',
    subtitle: 'Precision Laser-Cut Grills & Facade Enclosures',
  },
  {
    image: '/images/gallery/vse-photo-003.jpg',
    tag: 'Modern Glazing',
    subtitle: 'Acoustic Aluminium & UPVC Window Systems',
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
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#181816]">
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#181816] via-[#181816]/60 to-[#181816]/30" />
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-20 w-full flex flex-col justify-between min-h-screen">
        {/* Top Tagline / Region Badge */}
        <div className="pt-8 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-[11px] tracking-[0.25em] uppercase font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7A17B] animate-pulse" />
            Vijaya Sai Enterprises &bull; Gudivada
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-white/70"
          >
            <Compass className="w-3.5 h-3.5 text-[#B7A17B]" />
            <span>Architecture &bull; Doors &bull; Windows &bull; Grills</span>
          </motion.div>
        </div>

        {/* Main Central Editorial Headline */}
        <div className="my-auto py-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-[#B7A17B] text-xs sm:text-sm uppercase tracking-[0.35em] font-medium mb-4">
              Architectural Craftsmanship Since Establishment
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-[#F5F2EB] leading-[1.05] tracking-tight mb-8"
          >
            Spaces Deserve <br />
            <span className="italic font-light text-white/90">Something</span>{' '}
            <span className="text-[#B7A17B]">Extraordinary.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-xl text-white/80 font-light max-w-2xl leading-relaxed mb-10"
          >
            {businessInfo.subheadline}
          </motion.p>

          {/* Call to action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <button
              onClick={onExploreClick}
              className="group px-8 py-4 rounded-full bg-[#B7A17B] text-[#181816] text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 hover:bg-[#C8B695] hover:scale-105 shadow-lg flex items-center gap-3"
            >
              <span>Explore Collections</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onStoryClick}
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-[#F5F2EB] text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 hover:border-white/40"
            >
              Discover Our Story
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar: Slide Indicators, Location Badge & Scroll Down */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/15">
          <div className="flex items-center gap-3">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.tag}
                onClick={() => setCurrentSlide(idx)}
                className={`flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] transition-all duration-300 ${
                  currentSlide === idx ? 'text-[#B7A17B] font-semibold' : 'text-white/40 hover:text-white/70'
                }`}
              >
                <span
                  className={`h-0.5 rounded-full transition-all duration-500 ${
                    currentSlide === idx ? 'w-8 bg-[#B7A17B]' : 'w-3 bg-white/30'
                  }`}
                />
                <span className="hidden md:inline">{slide.tag}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6 text-xs text-white/60">
            <div className="hidden lg:flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B7A17B]" />
              <span>Proprietor Akuri Vaasu &bull; Custom Fabrication</span>
            </div>

            <a
              href="#about"
              className="flex items-center gap-2 text-white/70 hover:text-white text-xs uppercase tracking-[0.2em] transition-colors"
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
