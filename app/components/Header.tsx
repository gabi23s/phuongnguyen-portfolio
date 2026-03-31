"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "./LangProvider";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, t, toggle } = useLang();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Phuong<span className="text-accent">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link
            href="/#work"
            className="text-muted hover:text-foreground transition-colors"
          >
            {t.nav.work}
          </Link>
          <Link
            href="/#about"
            className="text-muted hover:text-foreground transition-colors"
          >
            {t.nav.about}
          </Link>
          <Link
            href="/#contact"
            className="text-muted hover:text-foreground transition-colors"
          >
            {t.nav.contact}
          </Link>
          <button
            onClick={toggle}
            className="px-3 py-1.5 border border-border rounded-full text-xs font-medium hover:bg-gray-50 transition-colors"
          >
            {locale === "en" ? "VIE" : "ENG"}
          </button>
        </div>

        {/* Mobile right */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggle}
            className="px-2.5 py-1 border border-border rounded-full text-xs font-medium"
          >
            {locale === "en" ? "VIE" : "ENG"}
          </button>
          <button
            className="p-2 text-muted"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {menuOpen ? (
                <path d="M5 5l10 10M15 5L5 15" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-white px-6 py-4 flex flex-col gap-4 text-sm">
          <Link
            href="/#work"
            onClick={() => setMenuOpen(false)}
            className="text-muted hover:text-foreground"
          >
            {t.nav.work}
          </Link>
          <Link
            href="/#about"
            onClick={() => setMenuOpen(false)}
            className="text-muted hover:text-foreground"
          >
            {t.nav.about}
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="text-muted hover:text-foreground"
          >
            {t.nav.contact}
          </Link>
        </div>
      )}
    </header>
  );
}
