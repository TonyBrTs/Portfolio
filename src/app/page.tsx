'use client';

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
    <main className="bg-background selection:bg-primary/20">
      <ScrollIndicator />
      <Navbar />

      {/* Each component is a full-height snap target */}
      <Hero nombre={nombre} />
      <About />
      <Specialties />

      {/* Placeholder for Portfolio */}
      <Portfolio />

      {/* Contact Section (Footer) */}
      <Contact nombre={nombre} />
    </main>
  );
}
