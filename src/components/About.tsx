'use client';

import { motion } from 'framer-motion';
import FloatingBackground from '@/components/FloatingBackground';
import { Code2, Briefcase, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="h-screen w-full flex items-center justify-center px-6 md:px-24 bg-transparent relative overflow-hidden"
    >
      <FloatingBackground />
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, var(--foreground) 1.5px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

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


        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-[10%] -left-[10%] w-[75%] h-[75%] bg-blue-600/30 rounded-full blur-[140px]" 
          style={{ mixBlendMode: 'multiply' }}
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.5, 0.35] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-[20%] right-[0%] w-[65%] h-[65%] bg-purple-500/25 rounded-full blur-[130px]" 
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
        }}
        className="max-w-6xl mx-auto relative z-10 w-full"
      >
        <motion.span
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-primary font-mono text-xs font-bold tracking-[0.4em] uppercase mb-6 block text-center md:text-left"
        >
          About Me
        </motion.span>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Title Column */}
          <motion.div 
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
            className="lg:col-span-5 h-full flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center md:text-left leading-tight">
              Bridging <br/><span className="text-primary">Technology</span><br/>& <span className="text-primary">Business</span>.
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed font-medium text-center md:text-left">
              I am a proactive learner and a collaborative leader focused on delivering high-performance fintech solutions. 
              My goal is to ensure robust system stability while optimizing user experiences through data-driven analysis.
            </p>
          </motion.div>

          {/* Bento Cards Column */}
          <motion.div 
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="md:col-span-2 bg-white/40 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code2 size={24} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground/90">Computer Science</h3>
              <p className="text-foreground/70 leading-relaxed">
                Currently pursuing a degree at the University of Costa Rica. With hands-on experience in full-stack development, I specialize in building secure, highly scalable platforms and digital experiences.
              </p>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="bg-white/40 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                 <Briefcase size={24} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground/90">Finance & Accounting</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                A solid technical foundation in accounting allows me to excel at understanding business operations and bridging the gap between technical requirements and executive stakeholders.
              </p>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="bg-white/40 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground/90">QA & Automation</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                Expertise in orchestrating rigorous standard QA protocols and automating complex administrative workflows to reduce manual operation load and guarantee system integrity.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
