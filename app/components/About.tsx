"use client";

import { profile } from "../data/portfolio";
import { useLang } from "./LangProvider";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Section number */}
      <div className="absolute top-16 right-12 section-number hidden md:block select-none">03</div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-1 bg-accent rounded-full" />
          <span className="text-xs font-bold text-accent uppercase tracking-widest">{t.about.title}</span>
        </div>

        <div className="grid md:grid-cols-5 gap-12 mt-8">
          {/* Left — Bio (3 cols) */}
          <div className="md:col-span-3">
            <div className="relative pl-6">
              <span className="absolute left-0 top-0 font-[family-name:var(--font-display)] text-5xl text-accent opacity-40 leading-none">&ldquo;</span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-black leading-tight mb-6">
                HELLO<span className="text-accent">.</span>
              </h2>
              <p className="text-muted leading-relaxed text-base mb-4">
                {t.about.summary}
              </p>
              <p className="text-muted leading-relaxed text-base">
                {t.about.extra}
              </p>
            </div>

            {/* Education & Working Experience layout */}
            <div className="grid grid-cols-2 gap-8 mt-10">
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-4">{t.about.education}</h3>
                <div className="space-y-2">
                  {profile.certifications.map((c) => (
                    <div key={c} className="text-sm text-muted flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
                      {c}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-4">{t.about.frameworks}</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.frameworks.map((f) => (
                    <span key={f} className="px-3 py-1.5 bg-accent/10 text-accent-dark rounded-full text-xs font-bold">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — Tools (2 cols) */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6">{t.about.tools}</h3>
            <div className="grid grid-cols-2 gap-3">
              {profile.tools.map((tool) => (
                <div
                  key={tool}
                  className="flex items-center gap-3 px-4 py-3 bg-background rounded-xl border border-border hover:border-accent transition-colors"
                >
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                    <span className="text-accent font-bold text-xs">{tool.charAt(0)}</span>
                  </div>
                  <span className="text-sm font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
