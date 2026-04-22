"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <motion.div
        className="rounded-3xl bg-white border-2 border-border overflow-hidden h-full"
        whileHover={{
          y: -8,
          borderColor: 'var(--accent)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Image area */}
        <div className="relative h-56 md:h-64 overflow-hidden" style={{ backgroundColor: project.color }}>
          {project.screenshot && (
            <motion.img
              src={project.screenshot}
              alt={pc?.title || project.title}
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
            />
          )}

          {/* Number badge */}
          <motion.div
            className="absolute top-4 left-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center z-10 shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-white font-black text-sm">{num}</span>
          </motion.div>

          {/* Overlay glow on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.2 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content */}
        <motion.div
          className="p-6 md:p-8"
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold text-accent uppercase tracking-wider">
              {pc?.company || project.company}
            </span>
            <span className="text-xs text-muted">{project.period}</span>
          </div>

          <motion.h3
            className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold mb-2"
            whileHover={{ color: 'var(--accent)' }}
          >
            {pc?.title || project.title}
          </motion.h3>

          <p className="text-muted text-sm leading-relaxed mb-5">
            {pc?.tagline || project.tagline}
          </p>

          {/* Results */}
          <div className="flex gap-6 pt-4 border-t border-border">
            {(pc?.results || project.results).slice(0, 3).map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1, y: -2 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div className="text-lg font-black text-accent">{r.metric}</div>
                <div className="text-[11px] text-muted leading-tight">{r.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
