import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { featuredProjects, type ProjectItem } from '../data/businessData';

interface FeaturedProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-16 sm:py-28 lg:py-36 bg-[#181816] text-[#F5F2EB] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#B7A17B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-20 gap-5 sm:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#B7A17B]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#B7A17B]">
                Publication &bull; Case Studies
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#F5F2EB] tracking-tight leading-[1.08]">
              Spaces We've <br />
              <span className="italic font-light text-[#B7A17B]">Helped Transform.</span>
            </h2>
          </div>

          <p className="max-w-md text-white/60 text-sm sm:text-base leading-relaxed">
            A curated selection of private residences and architectural environments fitted with our custom doors, windows, and safety grills.
          </p>
        </div>

        {/* Asymmetric Publication Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {featuredProjects.map((project, index) => {
            const colSpan =
              index === 0
                ? 'lg:col-span-7'
                : index === 1
                ? 'lg:col-span-5'
                : index === 2
                ? 'lg:col-span-5'
                : 'lg:col-span-7';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer rounded-2xl overflow-hidden bg-[#22211F] border border-white/10 transition-all duration-500 hover:border-[#B7A17B]/50 hover:-translate-y-2 ${colSpan}`}
              >
                {/* Image */}
                <div className="relative h-64 sm:h-96 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#22211F] via-[#22211F]/30 to-transparent" />

                  {/* Location Badge */}
                  <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-[11px] font-medium border border-white/10">
                    <MapPin className="w-3 h-3 text-[#B7A17B]" />
                    <span>{project.location}</span>
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#B7A17B] font-semibold block mb-1">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white group-hover:text-[#B7A17B] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                    <div className="flex flex-wrap items-center gap-2">
                      {project.specs.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full bg-white/5 text-white/80 text-[10px] tracking-wide border border-white/5"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#B7A17B] group-hover:text-[#181816] flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
