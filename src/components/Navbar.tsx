import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { businessInfo } from '../data/businessData';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Collections', href: '#collections' },
    { name: 'UPVC & WPC', href: '#collections' },
    { name: 'Projects', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || mobileMenuOpen
            ? 'bg-[#F5F2EB]/95 backdrop-blur-md py-2.5 sm:py-3 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-b border-[#E0D9CC]'
            : 'bg-gradient-to-b from-black/70 via-black/35 to-transparent py-3.5 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-2">
          {/* Responsive Logo: compact on small phones, full md on tablet/desktop */}
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="group flex items-center gap-2 min-w-0">
            <div className="sm:hidden">
              <BrandLogo
                variant={isScrolled || mobileMenuOpen ? 'dark' : 'light'}
                size="sm"
                showTagline={true}
              />
            </div>
            <div className="hidden sm:block">
              <BrandLogo
                variant={isScrolled || mobileMenuOpen ? 'dark' : 'light'}
                size="md"
                showTagline={true}
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 relative py-1 hover:text-[#B7A17B] ${
                  isScrolled ? 'text-[#20201E]' : 'text-white/90'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B7A17B] transition-all duration-300 hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Action Button & Contact Info */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${businessInfo.phonePrimaryRaw}`}
              className={`hidden xl:flex items-center gap-2 text-xs font-medium tracking-wider transition-colors ${
                isScrolled ? 'text-[#6B6964] hover:text-[#20201E]' : 'text-white/80 hover:text-white'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#B7A17B]" />
              <span>{businessInfo.phonePrimary}</span>
            </a>

            <button
              onClick={onContactClick}
              className={`group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-sm overflow-hidden ${
                isScrolled
                  ? 'bg-[#20201E] text-white hover:bg-[#B7A17B]'
                  : 'bg-white text-[#20201E] hover:bg-[#B7A17B] hover:text-white'
              }`}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Let's Talk
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile Quick Call + Hamburger Toggle */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <a
              href={`tel:${businessInfo.phonePrimaryRaw}`}
              aria-label="Call Vijaya Sai Enterprises"
              className={`sm:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                isScrolled || mobileMenuOpen
                  ? 'bg-[#EAE6DD] text-[#20201E]'
                  : 'bg-white/15 backdrop-blur-md text-white border border-white/20'
              }`}
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                isScrolled || mobileMenuOpen
                  ? 'text-[#20201E] bg-[#EAE6DD]/70'
                  : 'text-white bg-white/15 backdrop-blur-md border border-white/20'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#1A1918]/98 backdrop-blur-xl lg:hidden flex flex-col pt-20 px-6 pb-8 justify-between overflow-y-auto"
          >
            <div className="flex flex-col gap-1 py-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#B7A17B] font-semibold mb-3">
                Navigation
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * idx }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-[#F5F2EB] active:text-[#B7A17B] hover:text-[#B7A17B] transition-colors py-2.5 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B7A17B]/60" />
                </motion.a>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-4 mt-4">
              <div className="text-xs text-white/65 leading-relaxed">
                <p className="font-semibold text-white">{businessInfo.name}</p>
                <p className="mt-1">{businessInfo.address.landmark}, {businessInfo.address.city}</p>
                <p className="mt-0.5">Proprietor: {businessInfo.proprietor}</p>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full py-3.5 px-4 bg-[#B7A17B] text-[#181816] text-xs uppercase tracking-[0.2em] font-semibold text-center rounded-full flex items-center justify-center gap-2"
              >
                <span>Let's Talk / Request Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${businessInfo.phonePrimaryRaw}`}
                  className="py-3.5 px-4 bg-white/10 text-white text-xs uppercase tracking-wider font-medium text-center rounded-full active:bg-white/20 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#B7A17B]" />
                  Call Now
                </a>
                <a
                  href={businessInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-4 bg-[#25D366] text-white text-xs uppercase tracking-wider font-medium text-center rounded-full active:bg-[#20ba5a] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
