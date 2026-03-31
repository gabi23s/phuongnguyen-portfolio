"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            Work
          </Link>
          <Link
            href="/#about"
            className="text-muted hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="text-muted hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-muted"
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
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-white px-6 py-4 flex flex-col gap-4 text-sm">
          <Link
            href="/#work"
            onClick={() => setMenuOpen(false)}
            className="text-muted hover:text-foreground"
          >
            Work
          </Link>
          <Link
            href="/#about"
            onClick={() => setMenuOpen(false)}
            className="text-muted hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="text-muted hover:text-foreground"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
