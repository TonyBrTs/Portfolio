'use client';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import ScrollIndicator from '@/components/ScrollIndicator';
import Specialties from '@/components/Specialties';

import { motion } from "framer-motion";

export default function Home() {
  const nombre = 'Anthony Barrantes Alfaro';

  return (
    <main className="bg-transparent selection:bg-primary/20">
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-white">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.35, 0.45, 0.35] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-blue-600/50 rounded-full blur-[120px]" 
          style={{ mixBlendMode: 'multiply', willChange: 'transform, opacity', transform: 'translateZ(0)' }}
        />

        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-[20%] -right-[5%] w-[60%] h-[60%] bg-purple-500/65 rounded-full blur-[120px]" 
          style={{ mixBlendMode: 'multiply', willChange: 'transform, opacity', transform: 'translateZ(0)' }}
        />
      </div>
      
      <ScrollIndicator />
      <Navbar />

      <Hero nombre={nombre} />
      <About />
      <Specialties />

      <Portfolio />

      <Contact nombre={nombre} />
    </main>
  );
}
