import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          <p className="text-accent text-sm font-medium mb-4 tracking-wide uppercase">
            {profile.title}
          </p>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6 animate-fade-in-up animate-delay-100 opacity-0">
          Hi, I&apos;m {profile.name}
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-8 animate-fade-in-up animate-delay-200 opacity-0">
          {profile.subtitle}
        </p>
        <div className="flex gap-4 animate-fade-in-up animate-delay-300 opacity-0">
          <a
            href="#work"
            className="inline-flex items-center px-6 py-3 bg-foreground text-white rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            View my work
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-border rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
