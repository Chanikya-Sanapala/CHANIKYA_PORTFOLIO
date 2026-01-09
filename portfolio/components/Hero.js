export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-apple-blue/20 rounded-full blur-[120px] opacity-20 animate-pulse" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h2 className="text-apple-blue font-semibold tracking-wider text-sm uppercase">Full Stack Developer</h2>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-tight">
            Sanapala Chanikya
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 font-normal max-w-2xl mx-auto leading-relaxed">
          Building scalable, user-friendly web applications with precision and passion.
        </p>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="#projects" className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-transform hover:scale-105 active:scale-95">
            View Work
          </a>
          <a href="#contact" className="px-8 py-3 bg-[#1d1d1f] text-apple-blue font-medium rounded-full hover:bg-[#2d2d2f] transition-all border border-apple-blue/10">
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5" />
          <path d="M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
