'use client';

import { motion } from 'framer-motion';

interface SpecialtyCardProps {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

export default function SpecialtyCard({
  title,
  description,
  tags,
  icon,
}: SpecialtyCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
      }}
      whileHover={{
        y: -15,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      className="bg-[#222] p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group relative overflow-hidden shadow-sm hover:shadow-xl"
    >
      <div className="absolute top-0 right-0 p-4 opacity-[0.3] group-hover:opacity-80 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
        {icon}
      </div>
      <div className="mb-6 relative z-10">  
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ease-[cubic-bezier(0.34,1.56,0.64,1)]">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed mb-6">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <span
            key={tag}
            className="font-mono text-[10px] bg-white/5 text-white/80 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
