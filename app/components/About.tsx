"use client";

import { profile } from "../data/portfolio";
import { useLang } from "./LangProvider";
import { BlobDecoration } from "./Decorations";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-20 px-6 bg-white relative overflow-hidden">
      <BlobDecoration className="-bottom-20 -left-20 w-96 h-96 text-accent" />

      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl font-bold mb-12">{t.about.title}</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-muted leading-relaxed mb-6">{profile.about}</p>
            <p className="text-muted leading-relaxed">{t.about.extra}</p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted mb-3">
                {t.about.tools}
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-gray-100 rounded-full text-xs text-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted mb-3">
                {t.about.frameworks}
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.frameworks.map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1 bg-gray-100 rounded-full text-xs text-foreground"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted mb-3">
                {t.about.certifications}
              </h3>
              <div className="flex flex-col gap-1">
                {profile.certifications.map((c) => (
                  <span key={c} className="text-sm text-muted">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
