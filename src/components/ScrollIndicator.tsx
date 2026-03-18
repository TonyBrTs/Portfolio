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
            className="relative flex items-center justify-center w-4 h-4 group"
            aria-label={sec.label}
          >
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

            {isActive && (
              <motion.span
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
                className="absolute inset-0 rounded-full bg-linear-to-tr from-primary to-purple-500 pointer-events-none"
              />
            )}

            <div
              className={`w-2.5 h-2.5 rounded-full z-10 transition-all duration-500
            ${
              isActive
                ? 'bg-linear-to-tr from-primary to-purple-500 scale-110'
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