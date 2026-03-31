"use client";

import { projects } from "../data/portfolio";
import { useLang } from "./LangProvider";
import ProjectCard from "./ProjectCard";

export default function WorkSection() {
  const { t } = useLang();

  return (
    <section id="work" className="py-20 px-6 relative">
      {/* Section number */}
      <div className="absolute top-16 right-12 section-number hidden md:block select-none">02</div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-accent rounded-full" />
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Portfolio</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-black tracking-tight">
            {t.work.title}
            <span className="text-accent">.</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl text-base">
            {t.work.subtitle}
          </p>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-8 stagger">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
