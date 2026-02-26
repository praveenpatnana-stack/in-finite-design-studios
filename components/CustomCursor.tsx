
import React from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

interface Props {
  mousePos: { x: number; y: number };
}

const CustomCursor: React.FC<Props> = ({ mousePos }) => {
  const springConfig = { damping: 20, stiffness: 250 };
  const cursorX = useSpring(mousePos.x, springConfig);
  const cursorY = useSpring(mousePos.y, springConfig);

  const trailX = useSpring(mousePos.x, { damping: 30, stiffness: 100 });
  const trailY = useSpring(mousePos.y, { damping: 30, stiffness: 100 });

  return (
    <>
      {/* Main Core */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#A4F142] rounded-full z-[9999] pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: "0 0 15px rgba(164, 241, 66, 0.6)"
        }}
      />
      
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-[#A4F142]/40 rounded-full z-[9998] pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: [1, 1.1, 1],
          borderWidth: [1, 2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Trailing Aura */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 bg-[#A4F142]/5 rounded-full z-[9997] pointer-events-none"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};

export default CustomCursor;
