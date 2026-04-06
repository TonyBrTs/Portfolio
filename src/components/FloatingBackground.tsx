'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Square, 
  Triangle, 
  Hexagon, 
  Database, 
  Circle, 
  Cpu, 
  Layers 
} from 'lucide-react';
import { useEffect, useState } from 'react';

const FIGURE_TYPES = [Code, Square, Triangle, Hexagon, Database, Circle, Cpu, Layers];

interface Figure {
  id: number;
  size: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
  figureIndex: number;
}

export default function FloatingBackground() {
  const [mounted, setMounted] = useState(false);
  const [figures, setFigures] = useState<Figure[]>([]);

  useEffect(() => {
    // Generamos las figuras fuera del render cycle para evitar inconsistencias
    const generatedFigures = [...Array(20)].map((_, i) => ({
      id: i,
      size: Math.random() * 15 + 10,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 20 + 25,
      delay: Math.random() * 5,
      figureIndex: Math.floor(Math.random() * FIGURE_TYPES.length),
    }));
    
    // Usamos setTimeout(0) o requestAnimationFrame para mover el setState a la siguiente tarea 
    // y evitar la advertencia de cascading renders en React 19/Next 
    const handle = requestAnimationFrame(() => {
      setFigures(generatedFigures);
      setMounted(true);
    });

    return () => cancelAnimationFrame(handle);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-blue-600/40 rounded-full blur-[120px]" 
        style={{ mixBlendMode: 'multiply' }}
      />

      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-[20%] -right-[5%] w-[60%] h-[60%] bg-purple-500/45 rounded-full blur-[110px]" 
        style={{ mixBlendMode: 'multiply' }}
      />

      {figures.map((fig) => {
        const FigureIcon = FIGURE_TYPES[fig.figureIndex];
        return (
          <motion.div
            key={fig.id}
            className="absolute text-blue-600/20"
            style={{ 
              width: fig.size, 
              height: fig.size, 
              left: fig.left, 
              top: fig.top 
            }}
            animate={{ 
              y: [0, -120, 0], 
              x: [0, 40, 0],
              rotate: [0, 360] 
            }}
            transition={{ 
              duration: fig.duration, 
              repeat: Infinity, 
              ease: "linear",
              delay: fig.delay 
            }}
          >
            <FigureIcon className="w-full h-full" />
          </motion.div>
        );
      })}
    </div>
  );
}