"use client";

import React, { useState, useEffect } from "react";
import { useChat } from 'ai/react';


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
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit } = useChat();


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
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-4 block">Recent Labs</span>
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
        <section className="md:col-span-1 md:row-span-1 bg-[#1a2029]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-4 block">Current Focus</span>
            <h3 className="text-lg font-bold leading-tight">Fine-tuning Llama 3.1</h3>
            <p className="text-[11px] text-gray-500 mt-2">Exploring LoRA adapters for specialized reasoning.</p>

            <div className="mt-6 space-y-2">
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

      {/* AI Chat Widget */}
      <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-4">
        {isChatOpen && (
          <div className="w-[320px] h-[450px] bg-[#1a2029]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
            {/* Header */}
            <div className="p-4 border-b border-white/5 bg-accent/10 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-widest">Ashen AI</span>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-gray-400 hover:text-white">✕</button>
            </div>

            {/* Updated Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 flex flex-col">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-2xl text-xs max-w-[80%] ${msg.role === "user"
                    ? "bg-accent text-black self-end"
                    : "bg-white/5 text-gray-300 self-start"
                    }`}
                >
                  {msg.content}
                </div>
              ))}
            </div>

            {/* Updated Input Area */}
            <div className="p-4 border-t border-white/5">
              <div className="relative">
                <form onSubmit={handleSubmit} className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask me about Ashen..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-accent/50 transition-all"
                  />
                  <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-accent font-bold text-xs p-2">
                    SEND
                  </button>
                </form>
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-accent font-bold text-xs p-2 hover:opacity-70"
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Merged AI Chat Toggle & Logo */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="relative group w-14 h-14 rounded-2xl transition-all duration-300 active:scale-95 shadow-2xl"
        >
          {/* The Purple Haze/Glow Effect */}
          <div className="absolute -inset-2 bg-accent/40 rounded-full blur-xl group-hover:bg-accent/60 transition duration-500"></div>

          {/* The Button Content */}
          <div className="relative w-full h-full rounded-2xl border border-white/10 bg-[#1a2029] flex items-center justify-center overflow-hidden">
            {isChatOpen ? (
              <span className="text-accent font-bold text-2xl">×</span>
            ) : (
              /* Your actual logo icon */
              <img
                src="/icon.png"
                alt="Ashen AI"
                className="w-8 h-8 object-contain"
              />
            )}
          </div>

          {/* Small Notification Dot (Optional - looks very AI) */}
          {!isChatOpen && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
          )}
        </button>
      </div>

    </main>
  );
}