'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Layers, Cloud, GitBranch, TestTube, Smartphone, Shield, Blocks } from 'lucide-react';
import SpecialtyCard from './SpecialtyCard';

export default function Specialties() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-32 px-6 md:px-24 bg-[#0a0a0b] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1.5px, transparent 0)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-primary/30 rounded-full blur-[160px] animate-pulse mix-blend-screen" />
        <div className="absolute top-[20%] -right-[10%] w-[55%] h-[55%] bg-purple-500/20 rounded-full blur-[160px] mix-blend-screen" />
        <div className="absolute -bottom-[15%] left-[15%] w-[45%] h-[45%] bg-blue-400/20 rounded-full blur-[120px] mix-blend-screen" />

      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 }
            }
          }}
          className="mb-16"
        >
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="text-3xl md:text-5xl font-bold font-sans text-white mb-4"
          >
            Skills
          </motion.h2>
          <motion.div 
            variants={{ hidden: { width: 0 }, visible: { width: 120, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="h-1 bg-primary" 
          />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1, 
              transition: { staggerChildren: 0.1 } 
            }
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          <SpecialtyCard
            title="Robust Systems"
            description="High-performance system design and implementation with scalable architectures."
            tags={['Java', 'C++', 'OOP', '.NET']}
            icon={<Code2 className="text-primary" size={32} />}
          />
          <SpecialtyCard
            title="Modern Experiences"
            description="Intuitive and dynamic user interfaces with a focus on performance and accessibility."
            tags={['React', 'TypeScript', 'Next.js', 'Tailwind']}
            icon={<Layers className="text-primary" size={32} />}
          />
          <SpecialtyCard
            title="Data Architecture"
            description="Complex database modeling and management to ensure integrity and speed."
            tags={['SQL', 'NoSQL', 'MongoDB', 'PostgreSQL']}
            icon={<Database className="text-primary" size={32} />}
          />
          <SpecialtyCard
            title="Cloud & DevOps"
            description="Scalable cloud solutions and automated deployment pipelines for efficient development."
            tags={['AWS', 'Docker', 'Kubernetes', 'CI/CD']}
            icon={<Cloud className="text-primary" size={32} />}
          />
          <SpecialtyCard
            title="Version Control & Collaboration"
            description="Effective code management and team collaboration using modern tools and methodologies."
            tags={['Git', 'GitHub', 'Agile', 'Scrum']}
            icon={<GitBranch className="text-primary" size={32} />}
          />
          <SpecialtyCard
            title="Testing & Quality Assurance"
            description="Comprehensive testing strategies to ensure reliable and bug-free applications."
            tags={['Jest', 'Cypress', 'Unit Testing', 'E2E Testing']}
            icon={<TestTube className="text-primary" size={32} />}
          />
          <SpecialtyCard
            title="Mobile Development"
            description="Cross-platform mobile application development with a focus on performance and usability."
            tags={['React Native', 'Flutter', 'Mobile UI', 'App Publishing']}
            icon={<Smartphone className="text-primary" size={32} />}
          />
          <SpecialtyCard
            title="API Design & Integration"
            description="Designing scalable REST and GraphQL APIs with seamless third-party integrations."
            tags={['REST', 'GraphQL', 'WebSockets', 'Microservices']}
            icon={<Blocks className="text-primary" size={32} />}
          />
          <SpecialtyCard
            title="Security & Authentication"
            description="Implementing robust security measures and authentication protocols to protect user data."
            tags={['OAuth', 'JWT', 'Cryptography', 'OWASP']}
            icon={<Shield className="text-primary" size={32} />}
          />
        </motion.div>
      </div>
    </section>
  );
}
