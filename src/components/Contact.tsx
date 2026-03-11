import Footer from '@/components/Footer';

export default function Contact({ nombre }: { nombre: string }) {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-end relative overflow-hidden bg-[#0a0a0b] text-white z-0"
    >
      {/* Contact Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none text-white overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-primary/30 rounded-full blur-[160px] animate-pulse mix-blend-screen" />
        <div className="absolute top-[20%] -right-[10%] w-[55%] h-[55%] bg-purple-500/20 rounded-full blur-[160px] mix-blend-screen" />
        <div className="absolute -bottom-[15%] left-[15%] w-[45%] h-[45%] bg-blue-400/20 rounded-full blur-[120px] mix-blend-screen" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1.5px, transparent 0)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="flex-1 flex items-center justify-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent px-6 text-center">
          Let&apos;s build something together.
        </h2>
      </div>
      <Footer nombre={nombre} />
    </section>
  );
}
