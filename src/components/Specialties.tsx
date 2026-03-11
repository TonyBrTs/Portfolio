'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Layers } from 'lucide-react';
import SpecialtyCard from './SpecialtyCard';

export default function Specialties() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-32 px-6 md:px-24 bg-[#0a0a0b] text-white relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle Grid for dark mode */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1.5px, transparent 0)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Glows similar to Home but adjusted for dark mode */}
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-primary/30 rounded-full blur-[160px] animate-pulse mix-blend-screen" />
        <div className="absolute top-[20%] -right-[10%] w-[55%] h-[55%] bg-purple-500/20 rounded-full blur-[160px] mix-blend-screen" />
        <div className="absolute -bottom-[15%] left-[15%] w-[45%] h-[45%] bg-blue-400/20 rounded-full blur-[120px] mix-blend-screen" />

        {/* Floating Decor removed */}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-sans text-white mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <SpecialtyCard
            title="Robust Systems"
            description="High-performance system design and implementation with scalable architectures."
            tags={['Java', 'C++', 'OOP', '.NET']}
            icon={<Code2 className="text-primary" size={32} />}
            index={0}
          />
          <SpecialtyCard
            title="Modern Experiences"
            description="Intuitive and dynamic user interfaces with a focus on performance and accessibility."
            tags={['React', 'TypeScript', 'Next.js', 'Tailwind']}
            icon={<Layers className="text-primary" size={32} />}
            index={1}
          />
          <SpecialtyCard
            title="Data Architecture"
            description="Complex database modeling and management to ensure integrity and speed."
            tags={['SQL', 'NoSQL', 'MongoDB', 'PostgreSQL']}
            icon={<Database className="text-primary" size={32} />}
            index={2}
          />
        </div>
      </div>
    </section>
  );
}
