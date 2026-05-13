/** Site copy and links — keep in sync with your PDF CV when you update it. */

export const skillGroups = [
  { label: "Backend & languages", items: ["Java", "Spring Boot", "Python", "C"] },
  { label: "Web & UI", items: ["Next.js", "React", "HTML", "CSS"] },
  { label: "Data & ops", items: ["MySQL", "MongoDB", "Git"] },
  { label: "AI & tooling", items: ["LLM APIs", "Structured outputs", "LoRA / fine-tuning"] },
] as const;

export type Project = {
  title: string;
  description: string;
  role: string;
  tech: readonly string[];
  tags: readonly string[];
  github: string;
  demo?: string;
};

export const projects: readonly Project[] = [
  {
    title: "Real Estate App",
    description: "Property management system with Java/Spring Boot.",
    role: "Academic / team",
    tech: ["Java", "MySQL"],
    tags: ["Backend", "Java"],
    github: "https://github.com/Ashennisal/Real-State-Agent-Finder-and-Appointment-System-main",
  },
  {
    title: "Wedding Reservation",
    description: "Full-stack booking flow with secure payment integration.",
    role: "Academic / team",
    tech: ["Spring Boot", "JS"],
    tags: ["Full stack", "Java"],
    github: "https://github.com/Ashennisal/wedding_reservation",
  },
];

export const featuredProject = {
  eyebrow: "Case study",
  title: "Legal Analyzer",
  summary: "Automated document parsing using LLM structured outputs.",
  problem: "Manual review of dense legal-style text does not scale and is easy to misread.",
  approach: "Pipeline that sends documents to an LLM with a strict JSON schema so downstream code can trust the shape of extracted fields.",
  outcome: "Repeatable parsing runs with reviewable structured results instead of ad hoc copy-paste.",
  tech: ["Python", "LLM APIs", "Structured outputs"] as const,
  github: null as string | null,
  demo: null as string | null,
};

/** Short bullets mirrored from your CV — edit when you update the PDF. */
export const cvHighlights = [
  "BSc (Hons) in IT — AI specialization track, SLIIT",
  "Backend focus: Java, Spring Boot, relational data",
  "Interfaces & tooling: Next.js, React, REST integrations",
];

export const cvPdfPath = "/Ashen_Nisal_CV.pdf";

export function allProjectTags(projectsList: readonly Project[]): string[] {
  const set = new Set<string>();
  for (const p of projectsList) for (const t of p.tags) set.add(t);
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}
