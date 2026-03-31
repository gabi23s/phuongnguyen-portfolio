"use client";

import { projects } from "../data/portfolio";
import { useLang } from "./LangProvider";
import { DotGrid, ArrowDoodle } from "./Decorations";
import ProjectCard from "./ProjectCard";

export default function WorkSection() {
  const { t } = useLang();

  return (
    <section id="work" className="py-20 px-6 relative">
      <DotGrid className="top-8 right-12 w-48 h-36 text-foreground" />
      <ArrowDoodle className="top-16 right-64 w-16 h-16 text-accent" />

      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl font-bold mb-4">{t.work.title}</h2>
        <p className="text-muted mb-12 max-w-xl">{t.work.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-8 stagger">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
