"use client";

import Image from "next/image";
import { profile } from "../data/portfolio";
import { useLang } from "./LangProvider";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="pt-28 pb-16 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-32 right-12 section-number hidden md:block select-none">01</div>
      <svg className="absolute top-40 left-8 w-16 h-16 text-accent opacity-20 hidden md:block" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" />
      </svg>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent-dark text-xs font-bold tracking-widest uppercase rounded-full mb-6">
                {profile.title}
              </span>
            </div>

            <h1 className="animate-fade-in-up animate-delay-100 opacity-0">
              <span className="block font-[family-name:var(--font-hand)] text-accent text-2xl md:text-3xl mb-2">
                {t.hero.greeting}
              </span>
              <span className="block font-[family-name:var(--font-display)] text-5xl md:text-7xl font-black tracking-tight leading-none">
                {profile.name.split(" ")[0]}
              </span>
              <span className="block font-[family-name:var(--font-display)] text-5xl md:text-7xl font-black tracking-tight leading-none mt-1">
                {profile.name.split(" ").slice(1).join(" ")}
                <span className="text-accent">.</span>
              </span>
            </h1>

            <p className="text-muted text-base md:text-lg leading-relaxed mt-8 max-w-lg animate-fade-in-up animate-delay-200 opacity-0">
              {t.hero.subtitle}
            </p>

            <div className="flex gap-4 mt-8 animate-fade-in-up animate-delay-300 opacity-0">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white rounded-full text-sm font-bold hover:bg-accent-dark transition-colors shadow-lg shadow-accent/25"
              >
                {t.hero.cta}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 border-2 border-dark rounded-full text-sm font-bold hover:bg-dark hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right — Photo placeholder */}
          <div className="relative flex justify-center animate-fade-in-up animate-delay-200 opacity-0">
            <div className="relative">
              {/* Yellow background shape */}
              <div className="absolute -top-4 -right-4 w-72 h-80 md:w-80 md:h-96 bg-accent rounded-3xl rotate-3" />
              {/* Photo container */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 bg-dark rounded-3xl overflow-hidden -rotate-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/portrait.jpg"
                  alt="Phuong Nguyen"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-20 h-20 border-4 border-accent rounded-full opacity-30" />
              <svg className="absolute -top-8 -left-8 w-12 h-12 text-accent" viewBox="0 0 40 40" fill="none">
                <path d="M20 5L23 17L35 20L23 23L20 35L17 23L5 20L17 17Z" fill="currentColor" opacity="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
