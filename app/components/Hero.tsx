"use client";

import { profile } from "../data/portfolio";
import { useLang } from "./LangProvider";
import { WavyBackground, BlobDecoration, LoopLine, ScribbleUnderline } from "./Decorations";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Hand-drawn decorations */}
      <WavyBackground className="top-16 left-0 right-0 w-full h-48 text-foreground" />
      <BlobDecoration className="top-20 -right-20 w-80 h-80 text-accent" />
      <LoopLine className="-left-10 bottom-10 w-72 h-24 text-foreground" />

      <div className="max-w-6xl mx-auto relative">
        <div className="animate-fade-in-up">
          <p className="text-accent text-sm font-medium mb-4 tracking-wide uppercase">
            {profile.title}
          </p>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6 animate-fade-in-up animate-delay-100 opacity-0 relative inline-block">
          {t.hero.greeting} {profile.name}
          <ScribbleUnderline className="bottom-0 left-0 w-full h-3 text-accent" />
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-8 animate-fade-in-up animate-delay-200 opacity-0">
          {profile.subtitle}
        </p>
        <div className="flex gap-4 animate-fade-in-up animate-delay-300 opacity-0">
          <a
            href="#work"
            className="inline-flex items-center px-6 py-3 bg-foreground text-white rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            {t.hero.cta}
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
