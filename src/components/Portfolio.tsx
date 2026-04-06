'use client';

import { motion } from 'framer-motion';
import FloatingBackground from '@/components/FloatingBackground';

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="h-screen w-full flex items-center justify-center bg-transparent text-foreground/10 uppercase font-mono tracking-[0.5em] text-sm relative overflow-hidden"
    >
      <FloatingBackground />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, var(--foreground) 1.5px, transparent 0)',
          backgroundSize: '48px 48px',
        }}
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-10%] right-[-10%] w-[75%] h-[75%] bg-blue-600/35 rounded-full blur-[150px]" 
        style={{ mixBlendMode: 'multiply' }}
      />
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-[15%] left-[-5%] w-[70%] h-[70%] bg-purple-500/30 rounded-full blur-[140px]" 
        style={{ mixBlendMode: 'multiply' }}
      />

      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        Portfolio Section Coming Soon
      </motion.span>
    </section>
  );
}
