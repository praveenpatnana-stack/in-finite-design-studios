import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';
import { TeamMember } from '../types';

const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Naresh Potnuru',
    role: ' Prinicpal architect partner',
    imageUrl: '/collective/team/naresh-potnuru.jpeg',
    bio: 'Shaping spaces with vision, precision, and purpose — blending timeless design with innovative thinking.'
  },
  {
    id: '2',
    name: 'Gowtam Belisonty',
    role: ' Prinicpal architect partner',
    imageUrl: '/collective/team/gowtam-belisonty.jpeg',
    bio: 'Leading with vision and expertise, transforming complex ideas into enduring, functional designs.'
  },
  {
    id: '3',
    name: 'Nikita Bhattara',
    role: 'Junior Architect',
    imageUrl: '/collective/team/nikita-bhattara.jpeg',
    bio: 'Shaping tomorrow’s skylines with fresh vision and precise detail — one blueprint at a time.'
  },
  {
    id: '4',
    name: 'Mythily Sreerangam',
    role: 'Junior Architect',
    imageUrl: '/collective/team/mythily-sreerangam.jpeg',
    bio: 'Designing with passion, learning with purpose, and building for the future.'
  }
];

const Team: React.FC = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section id="team" className="py-32 px-8 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-20">
          <h2 className="text-4xl md:text-6xl font-serif">The Collective</h2>
          <div className="w-24 h-[1px] bg-[#A4F142]/40 mt-4 mb-8" />
          <p className={`max-w-xl font-light leading-relaxed ${isDark ? 'text-white/50' : 'text-stone-900/60'}`}>
            A synergy of diverse minds dedicated to pushing the boundaries of what space can be. Our team combines technical precision with philosophical depth.
          </p>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {TEAM.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-6">
                <img 
                  src={member.imageUrl} 
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className={`absolute inset-0 transition-opacity duration-500 ${isDark ? 'bg-black/20 group-hover:bg-transparent' : 'bg-white/10 group-hover:bg-transparent'}`} />
              </div>
              
              <h3 className="text-2xl font-serif mb-1">{member.name}</h3>
              <p className={`text-xs uppercase tracking-[0.2em] font-bold mb-4 ${isDark ? 'text-[#A4F142]' : 'text-stone-900'}`}>
                {member.role}
              </p>
              <p className={`text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isDark ? 'text-white/60' : 'text-stone-900/70'}`}>
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;