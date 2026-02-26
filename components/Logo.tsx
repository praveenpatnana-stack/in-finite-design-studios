import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
  glow?: boolean;
  animatePath?: boolean;
  stable?: boolean;
  isDark?: boolean;
}

const Logo: React.FC<Props> = ({ 
  className = "w-64 h-64", 
  glow = true, 
  animatePath = false,
  stable = false,
  isDark = true
}) => {
  // Path for the smooth infinity symbol (∞)
  const infinityPath = "M200,200 C240,140 300,140 300,200 C300,260 240,260 200,200 C160,140 100,140 100,200 C100,260 160,260 200,200";

  // Geometric grid circles opacity - significantly darker for light mode visibility
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: isDark ? 0.15 : 0.6, // Higher opacity in light mode for structure
      transition: {
        pathLength: { delay: i * 0.1, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay: i * 0.1, duration: 0.5 }
      }
    })
  };

  // Consistent Brand Color (#A4F142) across both themes
  const primaryStroke = "#A4F142"; 
  const gridColor = isDark ? "text-white" : "text-black";
  
  // The base path should be darker in light mode for structure
  const baseStrokeColor = isDark 
    ? "rgba(164, 241, 66, 0.2)" 
    : "rgba(0, 0, 0, 0.3)";

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Geometric Grid Circles */}
        <g stroke="currentColor" strokeWidth="1.2" className={gridColor}>
          <motion.circle cx="200" cy="120" r="80" variants={draw} custom={1} initial={animatePath ? "hidden" : "visible"} animate="visible" />
          <motion.circle cx="200" cy="280" r="80" variants={draw} custom={2} initial={animatePath ? "hidden" : "visible"} animate="visible" />
          <motion.circle cx="130" cy="160" r="80" variants={draw} custom={3} initial={animatePath ? "hidden" : "visible"} animate="visible" />
          <motion.circle cx="270" cy="160" r="80" variants={draw} custom={4} initial={animatePath ? "hidden" : "visible"} animate="visible" />
          <motion.circle cx="130" cy="240" r="80" variants={draw} custom={5} initial={animatePath ? "hidden" : "visible"} animate="visible" />
          <motion.circle cx="270" cy="240" r="80" variants={draw} custom={6} initial={animatePath ? "hidden" : "visible"} animate="visible" />
          <motion.circle cx="200" cy="200" r="80" variants={draw} custom={0} initial={animatePath ? "hidden" : "visible"} animate="visible" />
        </g>

        {/* Base Static Path for the Infinity Symbol - Increased to 5px */}
        <path
          d={infinityPath}
          stroke={baseStrokeColor}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Animated Directional Flow (Rotation segments) */}
        {!stable ? (
          <>
            <motion.path
              d={infinityPath}
              stroke={primaryStroke}
              strokeWidth="10" 
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="60 100"
              animate={{
                strokeDashoffset: [0, -160],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                opacity: 1,
                // Refined shadow for definition against light backgrounds
                filter: glow 
                  ? `drop-shadow(0 0 8px ${isDark ? "rgba(164, 241, 66, 0.6)" : "rgba(0, 0, 0, 0.15)"})` 
                  : "none"
              }}
            />
          </>
        ) : (
          <path
            d={infinityPath}
            stroke={primaryStroke}
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              opacity: 1,
              filter: glow 
                ? `drop-shadow(0 0 6px ${isDark ? "rgba(164, 241, 66, 0.4)" : "rgba(0, 0, 0, 0.1)"})` 
                : "none"
            }}
          />
        )}
      </svg>
    </div>
  );
};

export default Logo;