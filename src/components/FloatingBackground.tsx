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
    const generatedFigures = [...Array(30)].map((_, i) => ({
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
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ perspective: "1000px" }}>

      {figures.map((fig) => {
        const FigureIcon = FIGURE_TYPES[fig.figureIndex];
        return (
          <motion.div
            key={fig.id}
            className="absolute text-blue-600/15"
            style={{ 
              width: fig.size, 
              height: fig.size, 
              left: fig.left, 
              top: fig.top,
              willChange: 'transform'
            }}
            animate={{ 
              y: [0, -100, 0], 
              x: [0, 30, 0],
              rotate: [0, 360] 
            }}
            transition={{ 
              duration: fig.duration, 
              repeat: Infinity, 
              ease: "linear",
              delay: fig.delay 
            }}
          >
            <FigureIcon className="w-full h-full drop-shadow-sm" />
          </motion.div>
        );
      })}
    </div>
  );
}