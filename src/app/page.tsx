import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import ScrollIndicator from '@/components/ScrollIndicator';
import Specialties from '@/components/Specialties';

export default function Home() {
  const nombre = 'Anthony Barrantes Alfaro';

  return (
    <main className="bg-transparent selection:bg-primary/20">
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-white">
        <div 
          className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-blue-600/50 rounded-full blur-[120px] animate-pulse-blur" 
          style={{ 
            mixBlendMode: 'multiply', 
            '--base-opacity': '0.35',
            '--pulse-duration': '15s',
            willChange: 'transform, opacity', 
            transform: 'translateZ(0)' 
          } as React.CSSProperties}
        />

        <div 
          className="absolute top-[20%] -right-[5%] w-[60%] h-[60%] bg-purple-500/65 rounded-full blur-[120px] animate-pulse-blur" 
          style={{ 
            mixBlendMode: 'multiply', 
            '--base-opacity': '0.3',
            '--pulse-duration': '18s',
            '--pulse-delay': '2s',
            willChange: 'transform, opacity', 
            transform: 'translateZ(0)' 
          } as React.CSSProperties}
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
