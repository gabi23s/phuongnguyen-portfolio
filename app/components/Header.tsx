"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "./LangProvider";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, t, toggle } = useLang();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="text-lg font-bold tracking-tight">
            Phuong<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#work" className="text-sm text-muted hover:text-foreground transition-colors font-medium">
            {t.nav.work}
          </Link>
          <Link href="/#about" className="text-sm text-muted hover:text-foreground transition-colors font-medium">
            {t.nav.about}
          </Link>
          <Link href="/#contact" className="text-sm text-muted hover:text-foreground transition-colors font-medium">
            {t.nav.contact}
          </Link>
          <button
            onClick={toggle}
            className="px-4 py-1.5 bg-dark text-white rounded-full text-xs font-bold tracking-wider hover:bg-accent transition-colors"
          >
            {locale === "en" ? "VIE" : "ENG"}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggle}
            className="px-3 py-1 bg-dark text-white rounded-full text-xs font-bold"
          >
            {locale === "en" ? "VIE" : "ENG"}
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? <path d="M5 5l12 12M17 5L5 17" /> : <path d="M3 6h16M3 11h16M3 16h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-5 flex flex-col gap-4">
          {[
            { href: "/#work", label: t.nav.work },
            { href: "/#about", label: t.nav.about },
            { href: "/#contact", label: t.nav.contact },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
