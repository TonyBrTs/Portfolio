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
      { threshold: 0.6 }, // Un poco más alto para evitar ambigüedad
    );

    sections.forEach((sec) => {
      const element = document.getElementById(sec.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col gap-6">
      {sections.map((sec) => {
        const isActive = activeSection === sec.id;

        return (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className="relative flex items-center justify-center w-3 h-3"
            title={sec.label}
          >
            {/* ONDA REFINADA: Solo se renderiza si isActive es true */}
            {isActive && (
              <motion.span
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
                className="absolute inset-0 rounded-full bg-primary pointer-events-none"
              />
            )}

            {/* PUNTO CENTRAL: Con transición suave de color */}
            <div
              className={`w-2.5 h-2.5 rounded-full z-10 transition-colors duration-500
                ${isActive ? 'bg-primary scale-110' : 'bg-foreground/20 hover:bg-foreground/40'}
              `}
            />
          </a>
        );
      })}
    </div>
  );
}
