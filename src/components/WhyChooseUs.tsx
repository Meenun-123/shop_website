import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Hammer, ShieldCheck, HeartHandshake } from 'lucide-react';
import { whyChooseUsData, businessInfo } from '../data/businessData';

const icons = [Hammer, Compass, ShieldCheck, HeartHandshake];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-28 sm:py-36 bg-[#F5F2EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#B7A17B]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#8E7752]">
              Our Guiding Principles
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl text-[#20201E] tracking-tight leading-[1.08] mb-6">
            Architectural Precision. <br />
            <span className="italic font-normal text-[#8E7752]">Uncompromising Standards.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#6B6964] font-light leading-relaxed">
            At {businessInfo.name}, every door, window, and architectural grill is handled with personal care and engineered integrity. We believe true luxury lies in the durability of joints, honesty of materials, and precision of fit.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUsData.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative p-8 rounded-2xl bg-[#EAE6DD]/60 hover:bg-[#EAE6DD] border border-[#DFD8CC] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-sm tracking-wider text-[#8E7752] font-semibold">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#F5F2EB] group-hover:bg-[#B7A17B] text-[#20201E] group-hover:text-white flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-[#20201E] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B6964] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Subtle bottom decorative accent */}
                <div className="mt-8 pt-4 border-t border-[#D9D1C3]">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8E7752] font-semibold">
                    Vijaya Sai Standard
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
