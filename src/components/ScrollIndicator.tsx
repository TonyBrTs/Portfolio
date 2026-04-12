'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = useMemo(
    () => [
      { id: 'hero', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'portfolio', label: 'Portfolio' },
      { id: 'contact', label: 'Contact' },
    ],
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((sec) => {
      const element = document.getElementById(sec.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const isDarkBg = activeSection === 'skills' || activeSection === 'contact';

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-100 hidden md:flex flex-col gap-6">
      {sections.map((sec) => {
        const isActive = activeSection === sec.id;

        return (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            onClick={(e) => {
              e.preventDefault();
              const elem = document.getElementById(sec.id);
              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }}
            className="relative flex items-center justify-center w-4 h-4 group"
            aria-label={sec.label}
          >
            {/* Label Tooltip */}
            <span
              className={`absolute right-6 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap translate-x-2 group-hover:translate-x-0
                ${
                  isDarkBg
                    ? 'bg-white/90 text-black shadow-[0_4px_12px_rgba(255,255,255,0.1)]'
                    : 'bg-black/80 text-white shadow-[0_4px_12px_rgba(0,0,0,0.1)]'
                }
              `}
            >
              {sec.label}
            </span>

            {/* --- ONDA ANIMADA CORREGIDA --- */}
            {isActive && (
              <motion.span
                // Cambiamos initial opacity a 0 y usamos animate con keyframes
                initial={{ scale: 1, opacity: 0 }}
                animate={{ 
                  scale: [1, 2.5], 
                  opacity: [0, 0.5, 0] // Inicia en 0, sube a 0.5 y vuelve a 0
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear', // Linear suele sentirse más natural para ondas constantes
                }}
                className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-600 to-purple-500 pointer-events-none"
              />
            )}

            {/* Punto Central */}
            <div
              className={`w-2.5 h-2.5 rounded-full z-10 transition-all duration-500
                ${
                  isActive
                    ? 'bg-linear-to-tr from-blue-600 to-purple-600 scale-110 shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                    : isDarkBg
                    ? 'bg-white/30 group-hover:bg-white/70'
                    : 'bg-black/20 group-hover:bg-black/50'
                }
              `}
            />
          </a>
        );
      })}
    </div>
  );
}