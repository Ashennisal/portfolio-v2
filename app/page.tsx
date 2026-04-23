"use client";

import React, { useState, useEffect } from "react";


const projects = [
  {
    title: "Real Estate App",
    description: "Property management system with Java/Spring Boot.",
    tech: ["Java", "MySQL"],
    link: "https://github.com/Ashennisal/Real-State-Agent-Finder-and-Appointment-System-main"
  },
  {
    title: "Wedding Reservation",
    description: "Full-stack booking flow with secure payment integration.",
    tech: ["Spring Boot", "JS"],
    link: "https://github.com/Ashennisal/wedding_reservation"
  }
];

export default function Home() {
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);



  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const colomboTime = time.toLocaleTimeString("en-US", {
    timeZone: "Asia/Colombo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <main className="min-h-screen p-6 md:p-12 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[180px] auto-rows-min">

        {/* 1. Identity Tile */}
        <section className="md:col-span-2 md:row-span-2 bg-[#1a2029]/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-center">
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-4">Software Engineer</span>
          <h1 className="text-5xl font-serif font-bold mb-4"> Ashen <span className="italic text-accent">Nisal</span></h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            AI Specialization Student at SLIIT. I bridge the gap between heavy Java backends and modern AI-driven interfaces.
          </p>
        </section>

        {/* 2. Morphing Photo Tile */}
        <section className="md:col-span-1 md:row-span-2 bg-[#1a2029]/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden flex items-center justify-center p-4 h-[300px] md:h-full">
          <img
            src="/images/your-photo.jpg"
            className="w-full h-full object-cover animate-morph border-2 border-accent/30"
            alt="Ashen Nisal"
          />
        </section>

        {/* 3. Skills Tile */}
        <section className="md:col-span-1 md:row-span-1 bg-[#1a2029]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6">
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-3 block">Neural Stack</span>
          <div className="flex flex-wrap gap-2">
            {['Java', 'Spring Boot', 'Next.js', 'Python', 'HTML', 'CSS', 'React', 'MySQL', 'MongoDB', 'C', 'Git'].map(s => (
              <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium">{s}</span>
            ))}
          </div>
        </section>

        {/* 4. AI Project (The Spotlight) */}
        <section className="md:col-span-1 md:row-span-2 bg-gradient-to-br from-[#1a2029] to-indigo-900/30 border border-accent/20 rounded-[2rem] p-8 group relative overflow-hidden flex flex-col justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-4 block">AI Focus</span>
            <h3 className="text-xl font-bold">Legal Analyzer</h3>
            <p className="text-sm text-gray-400 mt-2">Automated document parsing using LLM structured outputs.</p>
          </div>

          <div className="mt-auto pt-8"> {/* This pushes the status to the bottom naturally */}
            <div className="h-1 w-full bg-accent/10 rounded-full overflow-hidden mb-4">
              <div className="h-full bg-accent w-2/3 animate-pulse"></div>
            </div>
            <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              Live Soon
            </div>
          </div>
        </section>

        {/* 5. Dynamic Projects Loop */}
        <section className="md:col-span-2 md:row-span-1 bg-[#1a2029]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8">
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-4 block">Recent Projects</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/item flex flex-col justify-between border-l border-white/5 pl-4 hover:border-accent transition-colors cursor-pointer"
              >
                <div>
                  <h3 className="font-bold group-hover/item:text-accent transition-colors flex items-center gap-2">
                    {project.title}
                    <span className="text-[10px] opacity-0 group-hover/item:opacity-100 transition-opacity">↗</span>
                  </h3>
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

        {/* 6. Live Status & Socials */}
        <section className="md:col-span-1 md:row-span-1 bg-[#1a2029]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-accent/40 transition-all">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
                Available for Internships
              </span>
            </div>

            <div>
              <div className="text-3xl font-mono tracking-tighter text-accent">
                {mounted ? colomboTime : "--:--:--"}
              </div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                Colombo, Sri Lanka
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <a href="https://github.com/Ashennisal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <span className="text-xs font-bold">Github</span>
            </a>
            <a href="https://www.linkedin.com/in/ashen-nisal-435295317" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <span className="text-xs font-bold">LinkedIn</span>
            </a>
          </div>
        </section>

        {/* 7. The Brain Tile (Learning Path) */}
        <section className="md:col-span-1 md:row-span-1 bg-[#1a2029]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-2 block">Current Focus</span>
            <h3 className="text-base font-bold leading-tight">Fine-tuning Llama 3.1</h3>
            <p className="text-[11px] text-gray-500 mt-1">Exploring LoRA adapters for specialized reasoning.</p>

            <div className="mt-3 space-y-1">
              <div className="flex justify-between text-[9px] uppercase tracking-tighter">
                <span className="text-gray-400">Optimization</span>
                <span className="text-accent">75%</span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-accent w-[75%] animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CV / Resume Download Tile */}
        <section className="mt-4 col-span-1 md:col-span-2 md:row-span-1 bg-[#1a2029]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-accent/40 transition-all cursor-pointer">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-2 block">Resume</span>
            <h3 className="text-xl font-bold mb-4">Curriculum Vitae</h3>
          </div>

          <a
            href="/Ashen_Nisal_CV.pdf"
            download
            className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-6 py-4 hover:bg-accent hover:text-black transition-all group/btn"
          >
            <span className="text-sm font-bold uppercase tracking-widest">Download PDF</span>
            <svg className="w-5 h-5 group-hover/btn:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </section>

      </div>

      {/* Floating Logo Stamp */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative group">
          <div className="absolute -inset-2 bg-accent/40 rounded-full blur-xl group-hover:bg-accent/60 transition duration-500"></div>
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