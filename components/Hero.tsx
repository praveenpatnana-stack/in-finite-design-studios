
import React, { useContext } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Logo from './Logo';
import { ThemeContext } from '../App';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const { isDark } = useContext(ThemeContext);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent">
      <motion.div style={{ opacity }} className="text-center z-20">
        <div className="flex flex-col items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
            className={`text-7xl md:text-[10rem] font-serif leading-none tracking-tight transition-colors duration-500 ${isDark ? 'text-white' : 'text-stone-900'}`}
          >
            In Finite.
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.2, duration: 1 }}
          className={`mt-8 text-sm md:text-xl font-light uppercase tracking-[1em] transition-colors duration-500 ${isDark ? 'text-[#A4F142]' : 'text-stone-900'}`}
        >
          Sculpting Space & Time
        </motion.p>
      </motion.div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <div className={`w-[1px] h-20 animate-pulse ${isDark ? 'bg-gradient-to-b from-[#A4F142] to-transparent' : 'bg-gradient-to-b from-stone-900 to-transparent'}`} />
        <span className={`text-[10px] uppercase tracking-widest ${isDark ? 'text-white' : 'text-stone-900'}`}>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
