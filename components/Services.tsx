
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';

const SERVICES = [
  {
    title: "Architectural Planning",
    desc: "Visionary blueprints that balance aesthetic excellence with functional precision.",
    icon: "▣"
  },
  {
    title: "Interior Designing",
    desc: "Curating immersive environments through the harmony of texture, light, and form.",
    icon: "◊"
  },
  {
    title: "Structural Designing",
    desc: "Engineering the hidden strength and integrity behind every artistic vision.",
    icon: "⬡"
  },
  {
    title: "Landscape Designing",
    desc: "Seamlessly bridging built environments with the soul of the natural world.",
    icon: "◍"
  }
];

const Services: React.FC = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section id="services" className="py-32 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className={`text-sm uppercase tracking-[0.5em] mb-16 transition-colors duration-500 ${isDark ? 'text-white/40' : 'text-stone-900/40'}`}>Services</h2>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-xl border transition-colors duration-500 ${isDark ? 'bg-white/5 border-white/5' : 'bg-stone-200 border-stone-200 shadow-sm'}`}>
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={service.title}
              whileHover={{ backgroundColor: isDark ? "rgba(164,241,66,0.02)" : "rgba(255,255,255,0.8)" }}
              className={`relative group p-12 transition-all duration-500 overflow-hidden ${isDark ? 'bg-[#0a0a0a]/40 backdrop-blur-md' : 'bg-white/60 backdrop-blur-md'}`}
            >
              {/* Radial Highlight Effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#A4F142]/0 via-transparent to-transparent group-hover:from-[#A4F142]/10 transition-all duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className={`text-4xl mb-6 opacity-40 group-hover:opacity-100 group-hover:text-[#A4F142] transition-all duration-500 group-hover:scale-110 transform inline-block ${isDark ? 'text-white' : 'text-stone-900'}`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-serif mb-4 group-hover:text-[#A4F142] transition-colors ${isDark ? 'text-white' : 'text-stone-900'}`}>
                  {service.title}
                </h3>
                <p className={`font-light text-sm leading-relaxed transition-colors group-hover:text-opacity-100 ${isDark ? 'text-white/40 group-hover:text-white' : 'text-stone-900/60 group-hover:text-stone-900'}`}>
                  {service.desc}
                </p>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#A4F142] group-hover:w-full transition-all duration-700 shadow-[0_0_10px_#A4F142]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
