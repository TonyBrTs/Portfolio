'use client';

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
  floatX: number;
  floatY: number;
}

export default function FloatingBackground() {
  const [mounted, setMounted] = useState(false);
  const [figures, setFigures] = useState<Figure[]>([]);

  useEffect(() => {
    // Generamos las figuras fuera del render cycle para evitar inconsistencias
    const generatedFigures = [...Array(12)].map((_, i) => ({
      id: i,
      size: Math.random() * 15 + 10,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 20 + 25,
      delay: Math.random() * -25, // Delay negativo para que arranquen en estados intermedios
      figureIndex: Math.floor(Math.random() * FIGURE_TYPES.length),
      floatX: Math.random() * 60 - 30,
      floatY: Math.random() * -120 - 40,
    }));
    
    // Usamos requestAnimationFrame para evitar la advertencia de cascading renders
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
          <div
            key={fig.id}
            className="absolute text-blue-600/15 animate-particle"
            style={{ 
              width: fig.size, 
              height: fig.size, 
              left: fig.left, 
              top: fig.top,
              '--float-x': `${fig.floatX}px`,
              '--float-y': `${fig.floatY}px`,
              '--float-duration': `${fig.duration}s`,
              '--float-delay': `${fig.delay}s`,
            } as React.CSSProperties}
          >
            <FigureIcon className="w-full h-full drop-shadow-sm" />
          </div>
        );
      })}
    </div>
  );
}