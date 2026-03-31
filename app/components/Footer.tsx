"use client";

import { profile } from "../data/portfolio";
import { useLang } from "./LangProvider";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer id="contact" className="bg-dark text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 right-20 w-32 h-32 border-2 border-accent/20 rounded-full" />
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-accent/10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div>
            <span className="font-[family-name:var(--font-hand)] text-accent text-2xl">{t.footer.title}</span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-black mt-2">
              {t.footer.subtitle.split("?")[0]}?
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-accent text-white rounded-full text-sm font-bold hover:bg-accent-dark transition-colors w-fit"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-white/60 hover:text-accent transition-colors text-sm"
            >
              {profile.email}
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center text-xs text-white/40">
          <span>{new Date().getFullYear()} Phuong Nguyen</span>
          <span className="font-[family-name:var(--font-hand)] text-accent/60 text-base">Made with passion</span>
        </div>
      </div>
    </footer>
  );
}
