'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpFromDot } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ScrollToTopPremium() {
  const [activeSection, setActiveSection] = useState('hero');
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const size = 64;
  const radius = 26;
  const stroke = 4;

  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    const sectionIds = ['hero', 'about', 'skills', 'portfolio', 'contact'];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      setProgress((scrollTop / docHeight) * 100);
      setIsVisible(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isDarkBg = activeSection === 'skills' || activeSection === 'contact';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-10 right-10 z-50"
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="relative flex items-center justify-center rounded-full cursor-pointer group outline-none"
            style={{ width: size, height: size }}
          >
            {/* Fondo */}
            <div
              className={`absolute inset-0 rounded-full transition-all duration-300
              ${
                isDarkBg
                  ? 'bg-neutral-900 shadow-[6px_6px_14px_rgba(0,0,0,0.6),-6px_-6px_14px_rgba(255,255,255,0.03)]'
                  : 'bg-white shadow-[6px_6px_14px_rgba(0,0,0,0.12),-6px_-6px_14px_rgba(255,255,255,0.9)]'
              }
              group-hover:scale-105`}
            />

            {/* Progreso */}
            <svg width={size} height={size} className="absolute rotate-[-90deg]">
              <defs>
                <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>

              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={isDarkBg ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}
                strokeWidth={stroke}
              />

              <motion.circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="url(#scrollGradient)"
                strokeWidth={stroke}
                strokeDasharray={circumference}
                animate={{ strokeDashoffset: offset }}
                strokeLinecap="round"
                transition={{ duration: 0.2 }}
              />
            </svg>

            {/* Icono */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <ArrowUpFromDot
                size={26}
                strokeWidth={2}
                className={`transition-transform duration-300 group-hover:scale-110 
                ${isDarkBg ? 'text-white' : 'text-gray-900'}`}
              />
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
