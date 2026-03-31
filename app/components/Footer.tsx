"use client";

import { profile } from "../data/portfolio";
import { useLang } from "./LangProvider";
import { WavyBackground } from "./Decorations";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer id="contact" className="border-t border-border bg-white relative overflow-hidden">
      <WavyBackground className="bottom-0 left-0 right-0 w-full h-32 text-foreground rotate-180" />

      <div className="max-w-6xl mx-auto px-6 py-16 relative">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{t.footer.title}</h2>
            <p className="text-muted max-w-md">{t.footer.subtitle}</p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-accent hover:underline"
            >
              {profile.email}
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-xs text-muted">
          {new Date().getFullYear()} Phuong Nguyen
        </div>
      </div>
    </footer>
  );
}
