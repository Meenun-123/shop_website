import React from 'react';
import { ArrowUp, MapPin, Phone, Clock } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { businessInfo } from '../data/businessData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181816] text-[#F5F2EB] pt-20 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <BrandLogo variant="light" size="lg" showTagline={true} />

            <p className="text-sm text-white/70 font-light leading-relaxed max-w-sm">
              Specialists in premium UPVC windows & doors, waterproof WPC frames, doors & boards, interior & exterior PVC/WPC wall panels, CNC Jali boards, and mosquito mesh solutions.
            </p>

            <div className="pt-2 text-xs text-white/50 space-y-1">
              <p>Proprietor: <span className="text-[#B7A17B] font-medium">{businessInfo.proprietor}</span></p>
              <p>Location: Gudivada, Krishna District, Andhra Pradesh</p>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B7A17B]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">
                  Brand Story & Studio
                </a>
              </li>
              <li>
                <a href="#collections" className="text-white/70 hover:text-white transition-colors">
                  Architectural Collections
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/70 hover:text-white transition-colors">
                  Featured Case Studies
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/70 hover:text-white transition-colors">
                  Visual Workshop Archives
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-white/70 hover:text-white transition-colors">
                  Quality Principles
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Enquiries & Consultations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B7A17B]">
              Workshop & Contact
            </h4>
            <div className="space-y-3 text-xs text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B7A17B] mt-0.5 flex-shrink-0" />
                <span>{businessInfo.address.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B7A17B] flex-shrink-0" />
                <span>{businessInfo.phonePrimary} / {businessInfo.phoneSecondary}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#B7A17B] flex-shrink-0" />
                <span>Mon – Sat: 9:00 AM – 8:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            &copy; {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span>UPVC &bull; WPC Frames & Doors &bull; Wall Panels &bull; CNC Jali</span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#B7A17B] text-white hover:text-[#181816] transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
