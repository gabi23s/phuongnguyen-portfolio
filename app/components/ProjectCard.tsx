import Link from "next/link";
import { Project } from "../data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="rounded-2xl border border-border bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        {/* Color banner */}
        <div
          className="h-48 md:h-56 flex items-end p-8"
          style={{ backgroundColor: project.color }}
        >
          <div>
            <p className="text-white/70 text-sm font-medium mb-1">
              {project.company}
            </p>
            <h3 className="text-white text-xl md:text-2xl font-bold">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center gap-3 mb-4 text-xs text-muted">
            <span className="px-2 py-1 bg-gray-100 rounded-full">
              {project.role}
            </span>
            <span>{project.period}</span>
          </div>
          <p className="text-muted text-sm leading-relaxed mb-6">
            {project.tagline}
          </p>

          {/* Results preview */}
          <div className="flex gap-6">
            {project.results.slice(0, 3).map((r) => (
              <div key={r.label}>
                <div
                  className="text-lg font-bold"
                  style={{ color: project.color }}
                >
                  {r.metric}
                </div>
                <div className="text-xs text-muted">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
