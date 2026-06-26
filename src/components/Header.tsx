"use client";

import { useState } from "react";
import { SearchIcon, XMarkIcon, ChevronDownIcon } from "./icons";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-mystic/40 bg-arctic/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 font-mono text-lg font-bold text-oceanic">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-nocturnal text-xs text-forsythia">
            NF
          </span>
          NexaFlow
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          <a href="#features" className="motion-micro text-sm text-nocturnal hover:text-oceanic">
            Features
          </a>
          <a href="#pricing" className="motion-micro text-sm text-nocturnal hover:text-oceanic">
            Pricing
          </a>
          <a href="#testimonials" className="motion-micro text-sm text-nocturnal hover:text-oceanic">
            Testimonials
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <label className="flex items-center gap-2 rounded-lg border border-mystic bg-white px-3 py-1.5">
            <SearchIcon size={16} className="opacity-50" />
            <input
              type="search"
              placeholder="Search docs..."
              className="w-28 bg-transparent text-sm outline-none placeholder:text-nocturnal/40"
              aria-label="Search documentation"
            />
          </label>
          <a
            href="#pricing"
            className="motion-micro rounded-lg bg-nocturnal px-4 py-2 text-sm font-medium text-arctic hover:bg-oceanic"
          >
            Start Free
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <XMarkIcon size={22} /> : <ChevronDownIcon size={22} />}
        </button>
      </div>

      <nav
        className={`mobile-menu border-t border-mystic/40 bg-arctic px-4 md:hidden ${menuOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <ul className="space-y-3 py-4">
          {["features", "pricing", "testimonials"].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="block font-mono text-sm capitalize text-nocturnal"
                onClick={() => setMenuOpen(false)}
              >
                {id}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
