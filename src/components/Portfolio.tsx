'use client';

import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="h-screen w-full flex items-center justify-center bg-background text-foreground/10 uppercase font-mono tracking-[0.5em] text-sm relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, var(--foreground) 1.5px, transparent 0)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute top-[20%] -right-[10%] w-[55%] h-[55%] bg-purple-500/10 rounded-full blur-[160px]" />
      <div className="absolute -bottom-[15%] left-[15%] w-[45%] h-[45%] bg-blue-400/10 rounded-full blur-[120px]" />

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
