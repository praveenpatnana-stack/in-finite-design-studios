// ---------------- PROJECT IMPORTS ----------------
import p11 from "../assets/projects/project-1/p11.jpg";
import p12 from "../assets/projects/project-1/p12.jpg";
import p13 from "../assets/projects/project-1/p13.jpg";

import p21 from "../assets/projects/project-2/p21.jpeg";
import p22 from "../assets/projects/project-2/p22.jpeg";
import p23 from "../assets/projects/project-2/p23.jpeg";
import p24 from "../assets/projects/project-2/p24.jpeg";
import p25 from "../assets/projects/project-2/p25.jpeg";
import p26 from "../assets/projects/project-2/p26.jpg";
import p27 from "../assets/projects/project-2/p27.jpg";
import p28 from "../assets/projects/project-2/p28.jpg";
import p29 from "../assets/projects/project-2/p29.jpg";
import p210 from "../assets/projects/project-2/p210.jpg";
import p211 from "../assets/projects/project-2/p211.jpg";
import p212 from "../assets/projects/project-2/p212.jpg";
import p213 from "../assets/projects/project-2/p213.jpg";

import p31 from "../assets/projects/project-3/p31.jpg";
import p32 from "../assets/projects/project-3/p32.jpg";
import p33 from "../assets/projects/project-3/p33.jpg";

import p41 from "../assets/projects/project-4/p41.jpg";
import p42 from "../assets/projects/project-4/p42.jpg";
import p43 from "../assets/projects/project-4/p43.jpeg";
import p44 from "../assets/projects/project-4/p44.jpeg";

import p51 from "../assets/projects/project-5/p51.jpeg";
import p52 from "../assets/projects/project-5/p52.jpeg";

import p62 from "../assets/projects/project-6/p62.jpeg";
import p63 from "../assets/projects/project-6/p63.jpeg";
import p64 from "../assets/projects/project-6/p64.jpeg";
import p65 from "../assets/projects/project-6/p65.jpeg";
import p66 from "../assets/projects/project-6/p66.jpeg";
import p67 from "../assets/projects/project-6/p67.jpeg";
import p68 from "../assets/projects/project-6/p68.jpeg";
import p69 from "../assets/projects/project-6/p69.jpeg";
import p610 from "../assets/projects/project-6/p610.jpeg";

import React, { useContext, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "../types";
import { ThemeContext } from "../App";

interface ProjectsProps {
  setModalOpen: (value: boolean) => void;
}

const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Vizianagaram Villa",
    category: "Residential",
    imageUrls: [p11, p12, p13],
    description:
      "A bespoke contemporary villa crafted with refined materiality and layered volumes. The design balances privacy, light, and architectural elegance.",
  },
  {
    id: "2",
    title: "The White Lotus - at Parvathipuram",
    category: "Hotel",
    imageUrls: [p21,p22,p23,p24,p25,p26,p27,p28,p29,p210,p211,p212,p213],
    description:
      "A thoughtfully designed hospitality project blending comfort and modern elegance with curated spatial experiences.",
  },
  {
    id: "3",
    title: "Urban International School",
    category: "Institutional",
    imageUrls: [p31, p32, p33],
    description:
      "A dynamic educational campus fostering innovation and holistic development within an inspiring architectural setting.",
  },
  {
    id: "4",
    title: "Elevate Dental Clinic",
    category: "Healthcare",
    imageUrls: [p41, p42, p43, p44],
    description:
      "A refined healthcare space combining warmth, efficiency, and contemporary interior detailing.",
  },
  {
    id: "5",
    title: "Dental Clinic",
    category: "Healthcare",
    imageUrls: [p51, p52],
    description:
      "A calming clinic environment designed with clean lines and soothing textures for patient comfort.",
  },
  {
    id: "6",
    title: "Duplex House - at Kotabomali",
    category: "Residential",
    imageUrls: [p62,p63,p64,p65,p66,p67,p68,p69,p610],
    description:
      "A luxurious duplex residence blending marble finishes, wood textures, and ambient lighting into a timeless home.",
  },
];

const Projects: React.FC<ProjectsProps> = ({ setModalOpen }) => {
  const { isDark } = useContext(ThemeContext);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [visibleHints, setVisibleHints] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
      setModalOpen(true);
    } else {
      document.body.style.overflow = "auto";
      setModalOpen(false);
    }
  }, [activeProject, setModalOpen]);

  const showHint = (id: string) => {
    setVisibleHints((prev) => [...prev, id]);
    setTimeout(() => {
      setVisibleHints((prev) => prev.filter((item) => item !== id));
    }, 3000);
  };

  const scrollNext = () => {
    scrollRef.current?.scrollBy({ left: window.innerWidth, behavior: "smooth" });
  };

  const scrollPrev = () => {
    scrollRef.current?.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
  };

  return (
    <section id="work" className="py-32 px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col mb-20">
          <h2 className="text-4xl md:text-6xl font-serif">Works</h2>
          <div className="w-24 h-[1px] bg-[#A4F142]/40 mt-4" />
        </div>

        <div className="grid grid-cols-1 gap-24">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              onViewportEnter={() => showHint(project.id)}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                <div className="lg:col-span-8 relative">

                  <div className={`relative rounded-xl border overflow-hidden ${
                    isDark
                      ? "bg-white/5 border-white/5"
                      : "bg-stone-200 border-stone-200 shadow-sm"
                  }`}>

                    {/* PREMIUM CURVED SWIPE GESTURE */}
                  {project.imageUrls.length > 1 &&
  visibleHints.includes(project.id) && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute w-full top-6 left-0 flex justify-center z-30 pointer-events-none"
    >
      <motion.div
        animate={{ x: [0, -12, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`flex items-center gap-4 text-xs md:text-sm uppercase tracking-[0.6em] font-light ${
          isDark ? "text-white/80" : "text-stone-900/80"
        }`}
      >
        <span className="text-lg md:text-xl">←</span>
        <span>Swipe</span>
      </motion.div>
    </motion.div>
)}
                    {/* Maximize */}
                    <button
                      onClick={() => setActiveProject(project)}
                      className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black text-white rounded-full px-3 py-1 text-sm"
                    >
                      ⛶
                    </button>

                    <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth">
                      {project.imageUrls.map((img, i) => (
                        <div key={i} className="min-w-full aspect-[4/5] md:aspect-[16/10] snap-start">
                          <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                          />
                        </div>
                      ))}
                    </div>

                  </div>

                  <div className={`mt-6 text-sm leading-relaxed ${
                    isDark ? "text-white/60" : "text-stone-900/70"
                  }`}>
                    {project.description}
                  </div>

                </div>

                <div className="lg:col-span-4 lg:sticky lg:top-32">
                  <span className={`text-xs uppercase tracking-[0.4em] mb-4 block ${
                    isDark ? "text-[#A4F142]" : "text-stone-900/60 font-bold"
                  }`}>
                    {project.category}
                  </span>

                  <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                    {project.title}
                  </h3>

                  <div className={`w-12 h-[1px] mb-8 ${
                    isDark ? "bg-white/20" : "bg-stone-900/20"
                  }`} />
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN MODAL (unchanged) */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[9999] flex flex-col overflow-hidden"
          >
            <div className="flex justify-between items-center px-8 py-6 text-white">
              <button
                onClick={() => setActiveProject(null)}
                className="uppercase tracking-widest border border-white/40 px-4 py-2 hover:bg-white hover:text-black transition-all"
              >
                ← Back
              </button>
              <button
                onClick={() => setActiveProject(null)}
                className="text-2xl hover:scale-110 transition-transform"
              >
                ⤡
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex flex-1 overflow-x-auto snap-x snap-mandatory scroll-smooth"
            >
              {activeProject.imageUrls.map((img, i) => (
                <div
                  key={i}
                  className="min-w-full flex items-center justify-center snap-center"
                >
                  <img
                    src={img}
                    alt=""
                    className="max-h-[85vh] max-w-[85vw] object-contain"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={scrollPrev}
              className="absolute left-8 top-1/2 -translate-y-1/2 text-white text-5xl"
            >
              ‹
            </button>

            <button
              onClick={scrollNext}
              className="absolute right-8 top-1/2 -translate-y-1/2 text-white text-5xl"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;