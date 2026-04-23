export default function Home() {

  const projects = [
    {
      title: "Real Estate App",
      description: "Property management system with Java/Spring Boot.",
      tech: ["Java", "MySQL"],
      link: "https://github.com/Ashennisal/real-estate"
    },
    {
      title: "Wedding Reservation",
      description: "Full-stack booking flow with secure payment integration.",
      tech: ["Spring Boot", "JS"],
      link: "https://github.com/Ashennisal/wedding-reservation"
    }
  ];

  return (
    <main className="min-h-screen p-6 md:p-12 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">

        {/* 1. Identity Tile */}
        <section className="md:col-span-2 md:row-span-2 bg-[#1a2029]/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-center">
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-4">Software Engineer</span>
          <h1 className="text-5xl font-serif font-bold mb-4"> Ashen <span className="italic text-accent">Nisal</span></h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            AI Specialization Student at SLIIT. I bridge the gap between heavy Java backends and modern AI-driven interfaces.
          </p>
        </section>

        {/* 2. Morphing Photo Tile */}
        <section className="md:col-span-1 md:row-span-2 bg-[#1a2029]/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden flex items-center justify-center p-4">
          <img
            src="/images/your-photo.jpg"
            className="w-full h-full object-cover animate-morph border-2 border-[#e8a857]/30"
            alt="Ashen Nisal"
          />
        </section>

        {/* 3. Skills Tile */}
        <section className="md:col-span-1 md:row-span-1 bg-[#1a2029]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6">
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-3 block">Neural Stack</span>
          <div className="flex flex-wrap gap-2">
            {['Java', 'Spring', 'Next.js', 'Python'].map(s => (
              <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium">{s}</span>
            ))}
          </div>
        </section>

        {/* 4. AI Project (The Spotlight) */}
        <section className="md:col-span-1 md:row-span-2 bg-gradient-to-br from-[#1a2029] to-indigo-900/30 border border-accent/20 rounded-[2rem] p-8 group relative overflow-hidden hover:border-accent/50 transition-all duration-500 shimmer-mask">
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-4 block">AI Focus</span>
          <h3 className="text-xl font-bold">Legal Analyzer</h3>
          <p className="text-sm text-gray-400 mt-2">Automated document parsing using LLM structured outputs.</p>

          {/* Add a subtle decorative element */}
          <div className="mt-8 h-1 w-full bg-accent/10 rounded-full overflow-hidden">
            <div className="h-full bg-accent w-2/3 animate-pulse"></div>
          </div>

          <div className="absolute bottom-6 left-8 flex items-center gap-2 text-accent font-bold text-xs">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            LIVE SOON
          </div>
        </section>

        {/* 5. Dynamic Projects Loop */}
        <section className="md:col-span-2 md:row-span-1 bg-[#1a2029]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8">
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-4 block">Recent Labs</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                className="group/item flex flex-col justify-between border-l border-white/5 pl-4 hover:border-accent transition-colors"
              >
                <div>
                  <h3 className="font-bold group-hover/item:text-accent transition-colors">{project.title}</h3>
                  <p className="text-[11px] text-gray-500 mt-1 line-clamp-1">{project.description}</p>
                </div>
                <div className="flex gap-2 mt-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[9px] text-gray-400 bg-white/5 px-2 py-0.5 rounded-md">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 6. Contact */}
        <section className="md:col-span-1 md:row-span-1 bg-[#1a2029]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 flex flex-col justify-center items-center text-center">
          <a href="https://www.linkedin.com/in/ashen-nisal-435295317" className="text-sm font-bold hover:text-[#e8a857] transition-colors">LinkedIn ↗</a>
          <a href="https://github.com/Ashennisal" className="text-sm font-bold hover:text-[#e8a857] mt-2 transition-colors">GitHub ↗</a>
        </section>

      </div>

      {/* Floating Logo Stamp */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative group">
          {/* The Purple Haze/Glow Effect */}
          <div className="absolute -inset-2 bg-accent/40 rounded-full blur-xl group-hover:bg-accent/60 transition duration-500"></div>

          {/* The Icon */}
          <img
            src="/icon.png"
            alt="Logo"
            className="relative w-12 h-12 rounded-xl border border-white/10 bg-[#1a2029] p-2"
          />
        </div>
      </div>
    </main>
  );
}