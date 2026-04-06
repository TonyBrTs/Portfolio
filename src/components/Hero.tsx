'use client';

import { motion, Variants } from 'framer-motion';
import { Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import FloatingBackground from '@/components/FloatingBackground';

interface HeroProps {
  nombre: string;
}

export default function Hero({ nombre }: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

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
      className="relative min-h-screen w-full overflow-hidden font-sans bg-transparent flex flex-col"
    >
      <FloatingBackground />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-24 pt-32 pb-12">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="font-mono text-[10px] md:text-xs text-blue-700 uppercase tracking-[0.4em] font-bold bg-linear-to-r from-blue-700 to-purple-600 bg-clip-text">
            Software Engineer Portfolio
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center w-full mt-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-slate-950 mb-6 tracking-tight"
            >
              Hi, I&apos;m{' '}
              <span className="bg-linear-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent iridescent-shimmer">
                {nombre}
              </span>
              .
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-md mb-8"
            >
              I transform complex logic into high-impact digital experiences through clean code and
              modern architecture.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 max-w-md"
            >
              <button
                className="cursor-pointer hover:scale-105 bg-blue-700 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-800 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-blue-500/30 text-base min-w-42.5"
                onClick={() => window.open('/CV_ANTHONY_BARRANTES.pdf', '_blank')}
              >
                Download CV{' '}
                <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              </button>
              <button className="cursor-pointer border border-slate-300 px-8 py-4 rounded-full font-bold hover:bg-slate-950 hover:text-white transition-all text-slate-950 text-base">
                Contact
              </button>
            </motion.div>
          </motion.div>

          <div className="relative h-100 lg:h-137.5 flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
             <div className="w-full h-full flex items-center justify-center overflow-visible">
                {mounted && (
                  <DotLottiePlayer
                    src="/hero-animation.lottie"
                    autoplay
                    loop
                    className="w-full h-auto max-w-xl"
                    style={{ 
                        filter: 'drop-shadow(0 20px 50px rgba(59, 130, 246, 0.3))' 
                    }}
                  />
                )}
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
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
      `}</style>
    </section>
  );
}