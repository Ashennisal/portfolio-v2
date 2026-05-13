"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import {
  allProjectTags,
  cvHighlights,
  cvPdfPath,
  featuredProject,
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

  return (
    <main className="min-h-screen p-6 md:p-12 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[180px] auto-rows-min">
        {/* 1. Identity */}
        <section className="md:col-span-2 md:row-span-2 bg-[#1a2029]/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-center">
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-4">
            Software Engineer
          </span>
          <h1 className="text-5xl font-serif font-bold mb-4">
            Ashen <span className="italic text-accent">Nisal</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            AI Specialization Student at SLIIT. I bridge the gap between heavy Java backends and
            modern AI-driven interfaces.
          </p>
        </section>

        {/* 2. Photo */}
        <section className="md:col-span-1 md:row-span-2 bg-[#1a2029]/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden flex items-center justify-center p-4 h-[300px] md:h-full relative">
          <Image
            src="/images/your-photo.jpg"
            alt="Ashen Nisal"
            fill
            className="object-cover animate-morph border-2 border-accent/30"
            sizes="(max-width: 768px) 100vw, 25vw"
            priority
          />
        </section>

        {/* 3. Skills */}
        <section className="md:col-span-1 md:row-span-1 bg-[#1a2029]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 flex flex-col gap-3 overflow-hidden">
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold shrink-0">
            Stack
          </span>
          <div className="space-y-2.5 min-h-0 overflow-y-auto pr-1">
            {skillGroups.map((g) => (
              <div key={g.label}>
                <p className="text-[9px] uppercase tracking-wider text-gray-500 mb-1">{g.label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/[0.04] border border-white/10 text-gray-200 hover:border-accent/40 hover:bg-accent/5 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Featured case study */}
        <section className="md:col-span-1 md:row-span-2 bg-gradient-to-br from-[#1a2029] to-indigo-900/30 border border-accent/20 rounded-[2rem] p-8 relative overflow-hidden flex flex-col gap-4">
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
            {featuredProject.eyebrow}
          </span>
          <h3 className="text-xl font-bold">{featuredProject.title}</h3>
          <p className="text-sm text-gray-400">{featuredProject.summary}</p>
          <dl className="space-y-2.5 text-[11px] leading-snug">
            <div>
              <dt className="text-gray-500 uppercase tracking-wider text-[9px] mb-0.5">Problem</dt>
              <dd className="text-gray-300">{featuredProject.problem}</dd>
            </div>
            <div>
              <dt className="text-gray-500 uppercase tracking-wider text-[9px] mb-0.5">Approach</dt>
              <dd className="text-gray-300">{featuredProject.approach}</dd>
            </div>
            <div>
              <dt className="text-gray-500 uppercase tracking-wider text-[9px] mb-0.5">Outcome</dt>
              <dd className="text-gray-300">{featuredProject.outcome}</dd>
            </div>
          </dl>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {featuredProject.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {featuredProject.github ? (
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded-lg bg-white/10 border border-white/15 hover:border-accent hover:text-accent transition-colors"
              >
                GitHub ↗
              </a>
            ) : null}
            {featuredProject.demo ? (
              <a
                href={featuredProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded-lg bg-accent/20 border border-accent/40 text-accent hover:bg-accent hover:text-black transition-colors"
              >
                Live demo ↗
              </a>
            ) : null}
          </div>
        </section>

        {/* 5. Projects + filter */}
        <section className="md:col-span-3 md:row-span-1 bg-[#1a2029]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-5">
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold block">
              Recent projects
            </span>
            <div
              className="flex flex-wrap gap-1.5"
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
                  className={`text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-md border transition-colors ${
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col justify-between border-l border-white/5 pl-4 hover:border-accent/60 transition-colors"
              >
                <div>
                  <h3 className="font-bold text-base">{project.title}</h3>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 mt-1">{project.role}</p>
                  <p className="text-[11px] text-gray-400 mt-2 leading-relaxed">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[9px] text-gray-400 bg-white/5 px-2 py-0.5 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold text-accent hover:underline"
                  >
                    Repository ↗
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-bold text-gray-400 hover:text-white"
                    >
                      Demo ↗
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 6. Status & socials */}
        <section className="md:col-span-1 md:row-span-1 bg-[#1a2029]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-accent/40 transition-all">
          <div className="space-y-4">
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
              <div className="text-3xl font-mono tracking-tighter text-accent" suppressHydrationWarning>
                {mounted ? colomboTime : "--:--:--"}
              </div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Colombo, Sri Lanka</p>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/Ashennisal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-xs font-bold">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ashen-nisal-435295317"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-xs font-bold">LinkedIn</span>
            </a>
          </div>
        </section>

        {/* 7. CV */}
        <section className="mt-4 md:col-span-4 md:row-span-1 bg-[#1a2029]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 flex flex-col md:flex-row md:items-stretch gap-8 group hover:border-accent/40 transition-all">
          <div className="flex-1 flex flex-col justify-between min-w-0">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-2 block">
                Resume
              </span>
              <h3 className="text-xl font-bold mb-4">Curriculum vitae</h3>
              <ul className="space-y-2">
                {cvHighlights.map((line) => (
                  <li key={line} className="text-[12px] text-gray-300 leading-snug flex gap-2">
                    <span className="text-accent shrink-0">▸</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-end md:w-[280px] shrink-0">
            <a
              href={cvPdfPath}
              download
              className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-6 py-4 hover:bg-accent hover:text-black transition-all group/btn"
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
