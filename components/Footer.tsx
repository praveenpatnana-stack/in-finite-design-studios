import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const Footer: React.FC = () => {
  const { isDark } = useContext(ThemeContext);

  const instagramUrl = "https://www.instagram.com/in_finite_design_studio?igsh=MWF4aGp3YjZ5cTZ4MQ%3D%3D&utm_source=qr";
  const mapUrl = "https://maps.app.goo.gl/DZ8HHCYwHVhaiiEr9?g_st=aw";

  return (
    <footer className={`py-16 border-t px-8 relative z-20 ${isDark ? 'border-white/5' : 'border-stone-900/5'}`}>
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-8 text-center">

        {/* Social Buttons */}
        <div className="flex gap-6">

          {/* Instagram Button */}
          <a 
            href={instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`text-[10px] uppercase tracking-[0.4em] font-medium transition-all duration-300 px-6 py-3 border rounded-full flex items-center gap-2 ${
              isDark
                ? 'border-white/5 hover:border-[#A4F142] hover:text-[#A4F142]'
                : 'border-stone-900/10 hover:border-stone-900 hover:text-stone-900'
            }`}
          >
            Instagram
          </a>

          {/* Maps Button */}
          <a 
            href={mapUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`text-[10px] uppercase tracking-[0.4em] font-medium transition-all duration-300 px-6 py-3 border rounded-full flex items-center gap-2 ${
              isDark
                ? 'border-white/5 hover:border-[#A4F142] hover:text-[#A4F142]'
                : 'border-stone-900/10 hover:border-stone-900 hover:text-stone-900'
            }`}
          >
            {/* Map Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21s-6-4.35-6-10a6 6 0 0 1 12 0c0 5.65-6 10-6 10z"/>
              <circle cx="12" cy="11" r="2.5"/>
            </svg>
            Maps
          </a>

        </div>

        {/* Copyright */}
        <div className={`text-[10px] uppercase tracking-[0.2em] font-light ${isDark ? 'text-white/20' : 'text-stone-900/40'}`}>
          © In Finite Design Studios@2016. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;