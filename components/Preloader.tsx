
import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

interface Props {
  finishLoading: () => void;
}

const Preloader: React.FC<Props> = ({ finishLoading }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
    >
      <div className="relative">
        {/* Preloader is always dark themed for dramatic entry */}
        <Logo className="w-48 h-48 md:w-64 md:h-64" animatePath={true} isDark={true} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-center mt-8 text-white"
        >
          <h2 className="text-xl font-serif tracking-[0.4em] uppercase">In Finite</h2>
          <p className="text-[10px] tracking-[0.2em] text-white/40 uppercase mt-2">Design Studios</p>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-white/10 overflow-hidden"
      >
        <motion.div 
          className="h-full bg-[#A4F142]"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 2.5, ease: "circIn" }}
          onAnimationComplete={() => finishLoading()}
        />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
