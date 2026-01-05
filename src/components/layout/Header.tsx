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
    <header className="sticky top-0 z-50 border-b border-zinc-200/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(243,246,252,0.92)_100%)] shadow-sm backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-5">
          {/* Brand (also acts as Home) */}
          <Link href="/" aria-label="Home" className="group flex flex-col">
            <span className="text-lg font-semibold tracking-tight text-zinc-900">
              {site.shortName}
            </span>
            <span className="text-xs text-zinc-500">{site.tagline}</span>
          </Link>

          {/* Primary Navigation (tablet+) */}
          <nav aria-label="Primary navigation" className="hidden md:flex md:items-center md:gap-8">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden rounded-md bg-[rgb(var(--accent))] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[rgb(var(--accent-hover))] md:inline-flex"
          >
            Engage with Us
          </Link>

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
            className="fixed inset-0 z-40 bg-black/30"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          <div className="fixed inset-x-0 top-[72px] z-50 border-b border-zinc-200 bg-white shadow-lg">
            <Container>
              <nav aria-label="Mobile navigation" className="py-4">
                <ul className="space-y-2">
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
                <div className="mt-4 border-t border-zinc-200 pt-4">
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full items-center justify-center rounded-md bg-[rgb(var(--accent))] px-4 py-2.5 text-sm font-medium text-white hover:bg-[rgb(var(--accent-hover))]"
                  >
                    Engage with Us
                  </Link>
                </div>
              </nav>
            </Container>
          </div>
        </div>
      ) : null}
    </header>
  );
}
