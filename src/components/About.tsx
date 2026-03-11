'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="h-screen w-full flex items-center justify-center px-6 md:px-24 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle Grid dots */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, var(--foreground) 1.5px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Floating Shapes */}
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, 20, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[15%] left-[15%] w-16 h-16 border border-primary/10 rounded-xl"
        />
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, -10, 0], rotate: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-[25%] right-[20%] w-24 h-24 border border-purple-400/10 rounded-full"
        />

        {/* Subtle Background Text removed */}

        {/* Glows similar to Home */}
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[55%] h-[55%] bg-purple-500/10 rounded-full blur-[160px]" />
        <div className="absolute -bottom-[15%] left-[15%] w-[45%] h-[45%] bg-blue-400/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
        }}
        className="max-w-4xl mx-auto relative z-10 text-center"
      >
        <motion.span
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-primary font-mono text-xs font-bold tracking-[0.4em] uppercase mb-8 block"
        >
          About Me
        </motion.span>
        <motion.h2
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-3xl md:text-5xl font-bold mb-12"
        >
          Committed to <span className="text-primary">Excellence</span> in Software Engineering.
        </motion.h2>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-lg md:text-xl text-foreground/50 leading-relaxed font-medium"
        >
          I am a passionate software engineer focused on building high-performance systems and
          unforgettable digital experiences. My approach combines technical rigor with creative
          intuition to solve complex problems through clean, maintainable code.
        </motion.p>
      </motion.div>
    </section>
  );
}
