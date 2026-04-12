'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);
  const mail = 'brts2461@gmail.com';

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
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const isDarkBg = activeSection === 'skills' || activeSection === 'contact';

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full px-6 py-6 md:py-10 flex justify-center pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className={`hidden md:flex backdrop-blur-2xl border rounded-full px-10 py-5 gap-10 items-center pointer-events-auto shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all hover:scale-[1.02]
          ${isDarkBg ? 'bg-black/40 border-white/10' : 'bg-white/60 border-foreground/10 hover:bg-white/80'}
        `}
      >
        <div
          className={`flex gap-8 text-[11px] font-bold uppercase tracking-[0.25em] transition-colors ${isDarkBg ? 'text-white/70' : 'text-foreground/70'}`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative transition-colors whitespace-nowrap ${
                  isActive ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="desktopActiveSectionIndicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className={`w-px h-5 ${isDarkBg ? 'bg-white/20' : 'bg-foreground/10'}`} />

        <div
          className={`flex gap-6 transition-colors ${isDarkBg ? 'text-white/40' : 'text-foreground/40'}`}
        >
          <a
            href="https://github.com/TonyBrTs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/anthony-barrantes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${mail}`} className="hover:text-primary transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </motion.div>

      <div className="md:hidden flex flex-col items-end pointer-events-auto w-full">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-4 rounded-full border backdrop-blur-xl shadow-lg transition-all
            ${isDarkBg ? 'bg-black/60 border-white/20 text-white' : 'bg-white/80 border-black/10 text-black'}
          `}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 10 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className={`flex flex-col items-center gap-6 p-8 rounded-3xl border backdrop-blur-2xl shadow-2xl w-full max-w-70
                ${isDarkBg ? 'bg-black/80 border-white/10 text-white' : 'bg-white/90 border-black/10 text-black'}
              `}
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative text-xs font-bold uppercase tracking-[0.3em] transition-colors whitespace-nowrap ${
                      isActive ? 'text-primary' : 'hover:text-primary'
                    }`}
                  >
                    {link.name}

                    {/* Indicador animado */}
                    {isActive && (
                      <motion.div
                        layoutId="activeSectionIndicator"
                        className="absolute -bottom-2 left-0 right-0 h-[2px] bg-primary"
                      />
                    )}
                  </a>
                );
              })}

              <div className={`h-px w-full ${isDarkBg ? 'bg-white/10' : 'bg-black/10'}`} />

              <div className="flex gap-8 opacity-70">
                <a href="https://github.com/TonyBrTs" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/anthony-barrantes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </a>
                <a href={`mailto:${mail}`}>
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
