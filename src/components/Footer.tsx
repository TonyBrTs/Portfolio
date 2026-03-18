'use client';

import { motion } from 'framer-motion';

interface FooterProps {
  nombre: string;
}

export default function Footer({ nombre }: FooterProps) {
  return (
    <footer id="footer" className="py-12 border-t border-t-gray-500 bg-linear-to-r from-primary to-purple-500 bg-clip-text px-6">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
      >
        <div className="text-white text-sm font-mono italic">
          © {new Date().getFullYear()} {nombre} — Designed with precision.
        </div>
        <div className="flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-primary transition-colors italic">
            Twitter
          </a>
          <a href="#" className="hover:text-primary transition-colors italic">
            Dribbble
          </a>
          <a href="#" className="hover:text-primary transition-colors italic">
            GitHub
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
