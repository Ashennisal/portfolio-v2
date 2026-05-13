"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import {
  allProjectTags,
  cvHighlights,
  cvPdfPath,
  projects,
  skillGroups,
} from "./data/portfolio";

export default function Home() {
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);
  const [tagFilter, setTagFilter] = useState<string>("All");

  const tags = useMemo(() => ["All", ...allProjectTags(projects)], []);

  const filteredProjects = useMemo(() => {
    if (tagFilter === "All") return projects;
    return projects.filter((p) => p.tags.includes(tagFilter));
  }, [tagFilter]);

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const colomboTime = time.toLocaleTimeString("en-US", {
    timeZone: "Asia/Colombo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const card = "bg-[#1a2029]/60 backdrop-blur-xl border border-white/10 rounded-[2rem]";

  return (
    <main className="min-h-screen p-6 md:p-10 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 auto-rows-min md:items-start">
        {/* Identity */}
        <section
          className={`md:col-span-7 md:row-span-1 ${card} rounded-[2.5rem] p-8 md:p-9 flex flex-col justify-start self-start`}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-3">
            Software Engineer
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3">
            Ashen <span className="italic text-accent">Nisal</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
            AI Specialization Student at SLIIT. I bridge the gap between heavy Java backends and
            modern AI-driven interfaces.
          </p>
        </section>

        {/* Photo — height from aspect ratio, not stretched grid rows */}
        <section
          className={`md:col-span-5 md:row-span-1 ${card} rounded-[2.5rem] overflow-hidden relative w-full aspect-[4/5] max-h-[320px] md:max-h-[340px] md:justify-self-end md:max-w-[280px] self-start`}
        >
          <Image
            src="/images/your-photo.jpg"
            alt="Ashen Nisal"
            fill
            className="object-cover animate-morph border-2 border-accent/30"
            sizes="(max-width: 768px) 100vw, 280px"
            priority
          />
        </section>

        {/* Skills — full width strip */}
        <section className={`md:col-span-12 md:row-span-1 ${card} p-6 md:p-7 flex flex-col gap-3`}>
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold shrink-0">
            Stack
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {skillGroups.map((g) => (
              <div key={g.label}>
                <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-2">{g.label}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/10 text-gray-200 hover:border-accent/40 hover:bg-accent/5 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className={`md:col-span-8 md:row-span-1 ${card} p-6 md:p-7 self-start`}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold block">
              Recent projects
            </span>
            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Filter projects by tag"
            >
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  role="tab"
                  aria-selected={tagFilter === tag}
                  onClick={() => setTagFilter(tag)}
                  className={`text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-lg border transition-colors ${
                    tagFilter === tag
                      ? "border-accent bg-accent/15 text-accent"
                      : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/25"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col border-l-2 border-white/10 pl-4 md:pl-5 hover:border-accent/60 transition-colors"
              >
                <div>
                  <h3 className="font-bold text-base md:text-lg">{project.title}</h3>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 mt-1">{project.role}</p>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] text-gray-400 bg-white/5 px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-3">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-accent hover:underline"
                    >
                      Repository ↗
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-gray-400 hover:text-white"
                    >
                      Demo ↗
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Status & socials */}
        <section
          className={`md:col-span-4 md:row-span-1 ${card} p-6 md:p-7 flex flex-col gap-5 self-start group hover:border-accent/40 transition-all`}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
                Available for internships
              </span>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-mono tracking-tighter text-accent" suppressHydrationWarning>
                {mounted ? colomboTime : "--:--:--"}
              </div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Colombo, Sri Lanka</p>
            </div>
          </div>
          <div className="flex gap-4 pt-1">
            <a
              href="https://github.com/Ashennisal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-sm font-bold">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ashen-nisal-435295317"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-sm font-bold">LinkedIn</span>
            </a>
          </div>
        </section>

        {/* CV */}
        <section
          className={`mt-1 md:col-span-12 md:row-span-1 ${card} p-6 md:p-8 flex flex-col lg:flex-row lg:items-start gap-6 md:gap-8 self-start group hover:border-accent/40 transition-all`}
        >
          <div className="flex-1 min-w-0">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-1.5 block">
                Resume
              </span>
              <h3 className="text-lg md:text-xl font-bold mb-3">Curriculum vitae</h3>
              <ul className="space-y-2 max-w-3xl">
                {cvHighlights.map((line) => (
                  <li key={line} className="text-sm text-gray-300 leading-snug flex gap-2">
                    <span className="text-accent shrink-0">▸</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:justify-start lg:shrink-0 lg:w-auto">
            <a
              href={cvPdfPath}
              download
              className="flex items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 hover:bg-accent hover:text-black transition-all group/btn lg:min-w-[220px]"
            >
              <span className="text-sm font-bold uppercase tracking-widest">Download PDF</span>
              <svg
                className="w-5 h-5 group-hover/btn:translate-y-1 transition-transform shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </div>
        </section>
      </div>

      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative group">
          <div className="absolute -inset-2 bg-accent/40 rounded-full blur-xl group-hover:bg-accent/60 transition duration-500" />
          <Image
            src="/icon.png"
            alt=""
            width={48}
            height={48}
            className="relative rounded-xl border border-white/10 bg-[#1a2029] p-2"
          />
        </div>
      </div>
    </main>
  );
}
