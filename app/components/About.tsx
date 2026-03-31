import { profile } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">About me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-muted leading-relaxed mb-6">{profile.about}</p>
            <p className="text-muted leading-relaxed">
              I focus on execution — understanding the business problem,
              shipping the right solution, and measuring what matters. I work
              best when I can go deep on a product and own the outcome
              end-to-end.
            </p>
          </div>

          <div className="space-y-8">
            {/* Tools */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted mb-3">
                Tools
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

            {/* Frameworks */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted mb-3">
                Frameworks
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

            {/* Certifications */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted mb-3">
                Certifications
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
