'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
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

  return (
    <nav className="fixed top-0 z-50 w-full px-6 py-10 flex justify-center pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className={`backdrop-blur-2xl border rounded-full px-10 py-5 flex gap-10 items-center pointer-events-auto shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all hover:scale-[1.02]
          ${isDarkBg ? 'bg-black/40 border-white/10' : 'bg-white/60 border-foreground/10 hover:bg-white/80'}
        `}
      >
        <div
          className={`flex gap-8 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] transition-colors ${isDarkBg ? 'text-white/70' : 'text-foreground/70'}`}
        >
          <a href="#hero" className="hover:text-primary transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-primary transition-colors whitespace-nowrap">
            About Me
          </a>
          <a href="#skills" className="hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#portfolio" className="hover:text-primary transition-colors">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
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
    </nav>
  );
}
