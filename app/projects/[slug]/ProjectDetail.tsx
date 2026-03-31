"use client";

import Link from "next/link";
import { Project } from "../../data/portfolio";
import { LangProvider, useLang } from "../../components/LangProvider";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getIllustration } from "../../components/ProjectIllustrations";
import { WavyBackground, DotGrid, BlobDecoration } from "../../components/Decorations";

function ProjectContent({
  project,
  nextProject,
}: {
  project: Project;
  nextProject: Project;
}) {
  const { t } = useLang();

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero banner with illustration */}
        <section
          className="pt-32 pb-20 px-6 relative overflow-hidden"
          style={{ backgroundColor: project.color }}
        >
          {/* Illustration background */}
          <div className="absolute inset-0 opacity-40">
            {getIllustration(project.slug)}
          </div>

          <div className="max-w-4xl mx-auto relative animate-fade-in-up">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-white/60 text-sm mb-8 hover:text-white/90 transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M10 4L6 8l4 4" />
              </svg>
              {t.project.backToWork}
            </Link>
            <p className="text-white/60 text-sm font-medium mb-2">
              {project.company} / {project.role}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              {project.tagline}
            </p>
            <div className="flex gap-6 mt-8 text-sm text-white/60">
              <span>{project.period}</span>
              <span>
                {t.project.team}: {project.teamSize}
              </span>
            </div>
          </div>
        </section>

        {/* Results highlight */}
        <section className="py-16 px-6 bg-white border-b border-border">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-8 text-center">
              {project.results.map((r) => (
                <div key={r.label}>
                  <div
                    className="text-3xl md:text-4xl font-bold mb-2"
                    style={{ color: project.color }}
                  >
                    {r.metric}
                  </div>
                  <div className="text-sm text-muted">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6 relative overflow-hidden">
          <BlobDecoration className="-top-10 -right-20 w-72 h-72 text-accent" />
          <div className="max-w-4xl mx-auto relative">
            <h2 className="text-2xl font-bold mb-6">{t.project.overview}</h2>
            <p className="text-muted leading-relaxed text-lg">
              {project.overview}
            </p>
          </div>
        </section>

        {/* Challenge */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">{t.project.challenge}</h2>
            <p className="text-muted leading-relaxed text-lg">
              {project.challenge}
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-6 relative">
          <DotGrid className="top-4 left-8 w-40 h-32 text-foreground" />
          <div className="max-w-4xl mx-auto relative">
            <h2 className="text-2xl font-bold mb-8">{t.project.process}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.process.map((step, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl bg-white border border-border"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ backgroundColor: project.color }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-16 px-6 bg-white relative overflow-hidden">
          <WavyBackground className="bottom-0 left-0 right-0 w-full h-32 text-foreground" />
          <div className="max-w-4xl mx-auto relative">
            <h2 className="text-2xl font-bold mb-8">{t.project.solutions}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {project.solutions.map((s) => (
                <div key={s.title}>
                  <div
                    className="w-1 h-8 rounded-full mb-4"
                    style={{ backgroundColor: project.color }}
                  />
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lessons */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">{t.project.lessons}</h2>
            <div className="space-y-4">
              {project.lessons.map((lesson, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-white border border-border"
                >
                  <p className="text-muted leading-relaxed">{lesson}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next project */}
        <section className="py-16 px-6 bg-white border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted mb-4">{t.project.nextCase}</p>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="text-2xl font-bold hover:opacity-70 transition-opacity"
              style={{ color: nextProject.color }}
            >
              {nextProject.title}
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
