"use client";

import Link from "next/link";
import { primaryNav, site } from "@/lib/site";
import { Container } from "./Container";
import { useEffect, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(var(--border-subtle))] bg-white/95 shadow-sm backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between py-5">
          {/* Brand (also acts as Home) */}
          <Link href="/" aria-label="Home" className="group flex flex-col">
            <span className="text-lg font-bold tracking-tight text-[rgb(var(--text-primary))]">
              {site.shortName}
            </span>
            <span className="text-xs text-[rgb(var(--text-tertiary))]">{site.tagline}</span>
          </Link>

          {/* Primary Navigation (tablet+) */}
          <nav aria-label="Primary navigation" className="hidden md:flex md:items-center md:gap-8">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[rgb(var(--text-secondary))] transition-colors hover:text-[rgb(var(--text-primary))]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu (phone only) */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-900 shadow-sm"
            >
              <span className="sr-only">Menu</span>
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-50 cursor-pointer bg-black/30 pointer-events-auto"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          <div className="fixed left-4 right-4 top-[76px] z-[60] mx-auto max-w-md rounded-xl border border-zinc-200 bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3">
              <span className="text-sm font-semibold text-zinc-900">Menu</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-900"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav aria-label="Mobile navigation" className="p-3">
              <ul className="space-y-1">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                    >
                      {item.label}
                      <span className="text-zinc-400">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
