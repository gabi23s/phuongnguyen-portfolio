"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "../data/portfolio";
import { useLang } from "./LangProvider";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { t } = useLang();
  const pc = t.projects[project.slug];
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="rounded-3xl bg-white border-2 border-border overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-xl hover:-translate-y-2">
        {/* Image area */}
        <div className="relative h-56 md:h-64 overflow-hidden" style={{ backgroundColor: project.color }}>
          {/* Screenshot placeholder */}
          {project.screenshot ? (
            <Image
              src={project.screenshot}
              alt={pc?.title || project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Mockup placeholder */}
              <div className="w-4/5 h-4/5 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center text-white/50">
                  <svg className="w-10 h-10 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                  <p className="text-xs">Screenshot</p>
                </div>
              </div>
            </div>
          )}

          {/* Number badge */}
          <div className="absolute top-4 left-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <span className="text-white font-black text-sm">{num}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold text-accent uppercase tracking-wider">
              {project.company}
            </span>
            <span className="text-xs text-muted">{project.period}</span>
          </div>

          <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
            {pc?.title || project.title}
          </h3>

          <p className="text-muted text-sm leading-relaxed mb-5">
            {pc?.tagline || project.tagline}
          </p>

          {/* Results */}
          <div className="flex gap-6 pt-4 border-t border-border">
            {(pc?.results || project.results).slice(0, 3).map((r) => (
              <div key={r.label}>
                <div className="text-lg font-black text-accent">{r.metric}</div>
                <div className="text-[11px] text-muted leading-tight">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
