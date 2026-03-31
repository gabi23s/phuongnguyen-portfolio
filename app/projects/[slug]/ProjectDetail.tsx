"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "../../data/portfolio";
import { LangProvider, useLang } from "../../components/LangProvider";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function ProjectContent({
  project,
  nextProject,
}: {
  project: Project;
  nextProject: Project;
}) {
  const { t } = useLang();
  const pc = t.projects[project.slug];
  const nextPc = t.projects[nextProject.slug];

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-28 pb-16 px-6 relative overflow-hidden" style={{ backgroundColor: project.color }}>
          <div className="absolute top-20 right-16 section-number !text-white/10 hidden md:block select-none">
            {String(1).padStart(2, "0")}
          </div>

          <div className="max-w-5xl mx-auto relative">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-white/50 text-sm mb-10 hover:text-white transition-colors font-medium"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4L6 9l5 5" />
              </svg>
              {t.project.backToWork}
            </Link>

            <div className="grid md:grid-cols-2 gap-12 items-end">
              <div>
                <span className="text-white/50 text-xs font-bold uppercase tracking-widest">
                  {project.company} / {project.role}
                </span>
                <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-black text-white mt-3 leading-tight">
                  {pc?.title || project.title}
                  <span className="text-white/40">.</span>
                </h1>
                <p className="text-white/70 text-base mt-4 leading-relaxed">
                  {pc?.tagline || project.tagline}
                </p>
                <div className="flex gap-6 mt-6 text-sm text-white/40">
                  <span>{project.period}</span>
                  <span>{t.project.team}: {project.teamSize}</span>
                </div>
              </div>

              {/* Screenshot placeholder */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden aspect-[4/3]">
                  {project.screenshot ? (
                    <Image src={project.screenshot} alt={pc?.title || project.title} fill className="object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/30">
                      <div className="text-center">
                        <svg className="w-12 h-12 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="2" y="3" width="20" height="14" rx="2" />
                          <path d="M8 21h8M12 17v4" />
                        </svg>
                        <p className="text-sm">Project Screenshot</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results bar */}
        <section className="py-12 px-6 bg-white border-b border-border">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-3 gap-8 text-center">
              {(pc?.results || project.results).map((r) => (
                <div key={r.label}>
                  <div className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-black" style={{ color: project.color }}>
                    {r.metric}
                  </div>
                  <div className="text-sm text-muted mt-1">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-1 bg-accent rounded-full" />
              <span className="text-xs font-bold text-accent uppercase tracking-widest">{t.project.overview}</span>
            </div>
            <p className="text-muted leading-relaxed text-lg max-w-3xl">
              {pc?.overview || project.overview}
            </p>
          </div>
        </section>

        {/* Challenge */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-1 bg-accent rounded-full" />
              <span className="text-xs font-bold text-accent uppercase tracking-widest">{t.project.challenge}</span>
            </div>
            <div className="relative pl-8 border-l-4 border-accent/30">
              <span className="absolute -left-1 top-0 font-[family-name:var(--font-display)] text-4xl text-accent/40 leading-none">&ldquo;</span>
              <p className="text-muted leading-relaxed text-lg">
                {pc?.challenge || project.challenge}
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-1 bg-accent rounded-full" />
              <span className="text-xs font-bold text-accent uppercase tracking-widest">{t.project.process}</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {(pc?.process || project.process).map((step, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white border-2 border-border hover:border-accent transition-colors">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-black shrink-0"
                    style={{ backgroundColor: project.color }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-sm text-muted leading-relaxed pt-1.5">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-1 bg-accent rounded-full" />
              <span className="text-xs font-bold text-accent uppercase tracking-widest">{t.project.solutions}</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {(pc?.solutions || project.solutions).map((s, i) => (
                <div key={i} className="relative pl-6">
                  <div className="absolute left-0 top-0 w-1.5 h-full bg-accent/20 rounded-full">
                    <div className="w-1.5 h-10 bg-accent rounded-full" />
                  </div>
                  <h3 className="font-bold text-base mb-2">{s.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lessons */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-1 bg-accent rounded-full" />
              <span className="text-xs font-bold text-accent uppercase tracking-widest">{t.project.lessons}</span>
            </div>
            <div className="space-y-4">
              {(pc?.lessons || project.lessons).map((lesson, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white border-2 border-border">
                  <span className="font-[family-name:var(--font-display)] text-2xl font-black text-accent/30 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-muted leading-relaxed">{lesson}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next project */}
        <section className="py-16 px-6 bg-white border-t border-border">
          <div className="max-w-5xl mx-auto text-center">
            <span className="font-[family-name:var(--font-hand)] text-accent text-xl">{t.project.nextCase}</span>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="block mt-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-black hover:opacity-70 transition-opacity"
              style={{ color: nextProject.color }}
            >
              {nextPc?.title || nextProject.title}
              <span className="text-muted/30">.</span>
            </Link>
            <p className="text-muted text-sm mt-2">{nextProject.company}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function ProjectDetail({
  project,
  nextProject,
}: {
  project: Project;
  nextProject: Project;
}) {
  return (
    <LangProvider>
      <ProjectContent project={project} nextProject={nextProject} />
    </LangProvider>
  );
}
