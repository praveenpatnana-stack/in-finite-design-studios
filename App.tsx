import React, { useState, useEffect, useRef, createContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Team from './components/Team';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Logo from './components/Logo';

export const ThemeContext = createContext({ isDark: true, toggleTheme: () => {} });

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const spotlightStyle = {
    background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, ${
      isDark ? 'rgba(164,241,66,0.02)' : 'rgba(61,163,93,0.04)'
    } 0%, transparent 80%)`,
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div
        className={`relative min-h-screen transition-colors duration-500 ${
          isDark ? 'bg-[#0a0a0a] text-white' : 'bg-stone-50 text-stone-900'
        } selection:bg-[#A4F142] selection:text-black`}
        ref={containerRef}
      >
        <AnimatePresence>
          {isLoading && <Preloader finishLoading={() => setIsLoading(false)} />}
        </AnimatePresence>

        {/* Background Logo */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <Logo
            className="w-[85vh] h-[85vh] opacity-[0.06]"
            glow={true}
            isDark={isDark}
          />
        </div>

        {/* Spotlight */}
        <div
          className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-300"
          style={spotlightStyle}
        />

        {/* 🔥 Navbar hides when modal open */}
        {!isProjectModalOpen && <Navbar />}

        <main className="relative z-10 bg-transparent">
          <Hero />
          <Projects setModalOpen={setIsProjectModalOpen} />
          <Services />
          <Team />
          <Insights />
          <Contact />
        </main>

        {!isProjectModalOpen && <Footer />}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
