'use client';

import { motion, Variants } from 'framer-motion';
import { Download } from 'lucide-react';

interface HeroProps {
  nombre: string;
}

const PARTICLES = [
  { duration: 3.2, delay: 0.5 },
  { duration: 4.1, delay: 1.2 },
  { duration: 3.7, delay: 2.8 },
  { duration: 4.5, delay: 0.1 },
  { duration: 3.1, delay: 3.4 },
  { duration: 4.8, delay: 1.9 },
  { duration: 3.4, delay: 4.2 },
  { duration: 4.2, delay: 0.8 },
  { duration: 3.9, delay: 2.3 },
  { duration: 4.6, delay: 1.1 },
  { duration: 3.3, delay: 3.7 },
  { duration: 4.4, delay: 0.4 },
  { duration: 3.8, delay: 2.6 },
  { duration: 4.7, delay: 1.5 },
  { duration: 3.5, delay: 4.1 },
  { duration: 4.3, delay: 0.9 },
  { duration: 4.0, delay: 2.1 },
  { duration: 3.6, delay: 3.3 },
  { duration: 4.9, delay: 0.6 },
  { duration: 4.2, delay: 1.8 },
];

export default function Hero({ nombre }: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden font-sans bg-transparent"
    >
      {/* BACKGROUND LAYER - Covers entire viewport width without being clipped by max-w-7xl */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Grid dots */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, var(--foreground) 1.5px, transparent 0)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Glows */}
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[55%] h-[55%] bg-purple-500/10 rounded-full blur-[160px]" />
        <div className="absolute -bottom-[15%] left-[15%] w-[45%] h-[45%] bg-blue-400/10 rounded-full blur-[120px]" />
      </div>

      {/* CONTENT LAYER - Centered and constrained to max-w-7xl */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-screen flex flex-col justify-between px-6 md:px-24 py-32">
        {/* Top Area: Tagline */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="font-mono text-[10px] md:text-xs text-primary uppercase tracking-[0.4em] font-bold bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Software Engineer Portfolio
          </p>
        </motion.div>

        {/* Main Content Area (Grid) */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center w-full my-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6 tracking-tight"
            >
              Hi, I&apos;m{' '}
              <span className="bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                {nombre}
              </span>
              .
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-foreground/60 font-medium leading-relaxed max-w-md mb-8"
            >
              I transform complex logic into high-impact digital experiences through clean code and
              modern architecture.
            </motion.p>

            {/* Buttons Area */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <button
                className="cursor-pointer hover:scale-110 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all flex items-center gap-2 group shadow-lg shadow-primary/20 text-sm"
                onClick={() => window.open('/CV_ANTHONY_BARRANTES.pdf', '_blank')}
              >
                Download CV{' '}
                <Download size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="cursor-pointer border border-foreground/10 px-8 py-4 rounded-full font-bold hover:bg-foreground hover:text-white transition-all text-foreground/70 text-sm">
                Contact
              </button>
            </motion.div>
          </motion.div>

          {/* Isometric Visual */}
          <div className="relative h-[600px] lg:h-[800px] flex items-center justify-center lg:justify-end">
            <div className="isometric-layer relative scale-[0.6] md:scale-[0.8] lg:scale-[0.9] origin-center lg:origin-right transform-gpu">
              {/* Connection Paths SVG */}
              <svg
                viewBox="0 0 600 800"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] pointer-events-none overflow-visible"
              >
                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fcd34d" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#fcd34d" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#fcd34d" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M 50 100 L 250 -50 L 450 100"
                  stroke="url(#grad1)"
                  strokeWidth="20"
                  fill="none"
                  strokeLinecap="round"
                  className="opacity-30"
                  style={{ filter: 'url(#glow)' }}
                />
                <motion.path
                  d="M 100 450 L 300 300 L 500 450"
                  stroke="rgba(34, 211, 238, 0.2)"
                  strokeWidth="20"
                  fill="none"
                  strokeLinecap="round"
                  style={{ filter: 'url(#glow)' }}
                />
                <motion.path
                  d="M 200 700 L 400 550 L 600 700"
                  stroke="rgba(232, 121, 249, 0.2)"
                  strokeWidth="20"
                  fill="none"
                  strokeLinecap="round"
                  style={{ filter: 'url(#glow)' }}
                />
                {PARTICLES.map((p, i) => (
                  <motion.circle
                    key={i}
                    r="2"
                    fill="white"
                    initial={{ offsetDistance: '0%' }}
                    animate={{ offsetDistance: '100%' }}
                    transition={{
                      duration: p.duration,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: p.delay,
                    }}
                    style={{
                      offsetPath: "path('M 50 100 L 250 -50 L 450 100')",
                      filter: 'blur(1px)',
                    }}
                  />
                ))}
              </svg>

              {/* Isometric Cards */}
              <motion.div
                initial={{ x: -120, y: -100, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                className="absolute -top-80 -left-24 w-72 h-44 rounded-2xl border border-white/40 shadow-2xl overflow-hidden group"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.3) 100%)',
                  backdropFilter: 'blur(30px)',
                  transform: 'rotateX(55deg) rotateZ(-35deg)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-400/20 via-transparent to-pink-400/20 opacity-30" />
                <div className="relative p-6 h-full flex flex-col">
                  <div className="flex gap-2 mb-8">
                    <div className="w-3 h-3 rounded-full bg-red-400/30" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/30" />
                    <div className="w-3 h-3 rounded-full bg-green-400/30" />
                  </div>
                  <div className="w-1/2 h-4 bg-black/5 rounded-full mb-6" />
                  <div className="space-y-4">
                    <div className="w-full h-2 bg-black/5 rounded-full" />
                    <div className="w-3/4 h-2 bg-black/5 rounded-full" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="relative w-85 h-52.5 bg-[#0F172A] rounded-2xl shadow-[0_60px_120px_-20px_rgba(0,0,0,0.6)] border border-white/10 flex flex-col p-8 z-20 group"
                style={{
                  transform: 'rotateX(55deg) rotateZ(-35deg)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/30 rounded-full blur-[80px] animate-pulse" />
                <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full blur-sm shadow-[0_0_15px_rgba(255,255,255,0.9)]" />
                <div className="relative z-10 h-full flex flex-col font-mono">
                  <span className="text-[9px] text-blue-400 font-bold tracking-[0.3em] uppercase mb-12">
                    WARPCALL: PREMIUM LG
                  </span>
                  <div className="space-y-5">
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
                      <motion.div
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 w-1/3 h-full bg-linear-to-r from-transparent via-blue-400 to-transparent"
                      />
                    </div>
                    <div className="w-4/5 h-1 bg-white/5 rounded-full" />
                    <div className="w-1/2 h-1 bg-white/5 rounded-full" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 120, y: 100, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1, ease: 'easeOut' }}
                className="absolute -bottom-64 -right-20 w-80 h-48 rounded-2xl border border-white/20 shadow-xl overflow-hidden"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)',
                  backdropFilter: 'blur(15px)',
                  transform: 'rotateX(55deg) rotateZ(-35deg)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="absolute inset-0 bg-linear-to-tr from-cyan-400/5 via-transparent to-white/10 opacity-40" />
                <div className="relative p-8 flex flex-col h-full">
                  <span className="text-[10px] font-bold text-black/20 tracking-[0.4em] mb-6 uppercase">
                    DATA ARCHITECTURE
                  </span>
                  <div className="grid grid-cols-4 gap-4 mt-2">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 4, delay: i * 0.3, repeat: Infinity }}
                        className="h-10 bg-black/5 rounded-md"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .iridescent-shimmer {
          background-size: 200% 200%;
          animation: shimmer 12s infinite linear;
        }
        @keyframes shimmer {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
      `}</style>
    </section>
  );
}
