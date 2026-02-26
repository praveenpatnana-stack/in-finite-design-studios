import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { ThemeContext } from '../App';

const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'Work', 'Services', 'Team', 'Philosophy', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md ${
        isDark ? 'bg-black/10' : 'bg-white/10'
      }`}
    >
      {/* Logo Section */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="flex items-center gap-2"
      >
        <Logo className="w-8 h-8" glow={true} stable={true} isDark={isDark} />
        <div className="flex flex-col leading-tight">
          <span className="text-lg font-bold uppercase font-serif">
            In Finite
          </span>
          <span
            className={`text-[9px] tracking-[0.3em] uppercase ${
              isDark ? 'opacity-60' : 'opacity-80'
            }`}
          >
            Design Studios
          </span>
        </div>
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-light">
        {navItems.map((item) => (
          <a
            key={item}
            href={
              item === 'Home'
                ? '#'
                : item === 'Contact'
                ? '#contact-info'
                : `#${item.toLowerCase()}`
            }
            onClick={(e) => {
              if (item === 'Home') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className={`relative transition-opacity hover:opacity-100 ${
              isDark ? 'opacity-60 text-white' : 'opacity-80 text-stone-900'
            }`}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-all border ${
            isDark
              ? 'border-[#A4F142]/20 hover:bg-[#A4F142]/10'
              : 'border-stone-900/20 hover:bg-stone-900/10'
          }`}
        >
          {isDark ? '☀️' : '🌙'}
        </button>

        {/* Let's Talk Button (Desktop Only) */}
        <a
          href="#vision-form"
          className={`hidden md:block px-5 py-2 border text-xs uppercase tracking-widest transition-all ${
            isDark
              ? 'border-[#A4F142]/20 hover:bg-[#A4F142] hover:text-black'
              : 'border-stone-900/20 hover:bg-stone-900 hover:text-white'
          }`}
        >
          Let's Talk
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-6 h-[2px] ${isDark ? 'bg-white' : 'bg-black'}`} />
          <span className={`w-6 h-[2px] ${isDark ? 'bg-white' : 'bg-black'}`} />
          <span className={`w-6 h-[2px] ${isDark ? 'bg-white' : 'bg-black'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`absolute top-full left-0 w-full flex flex-col items-center gap-6 py-8 md:hidden backdrop-blur-md ${
            isDark ? 'bg-black/95 text-white' : 'bg-white/95 text-black'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={
                item === 'Home'
                  ? '#'
                  : item === 'Contact'
                  ? '#contact-info'
                  : `#${item.toLowerCase()}`
              }
              onClick={(e) => {
                if (item === 'Home') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                setIsOpen(false);
              }}
              className="uppercase tracking-widest text-sm"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
