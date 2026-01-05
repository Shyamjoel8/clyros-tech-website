import Link from "next/link";
import { primaryNav, site } from "@/lib/site";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
      <Container>
        <div className="flex items-center justify-between py-5">
          {/* Brand (also acts as Home) */}
          <Link href="/" aria-label="Home" className="group flex flex-col">
            <span className="text-lg font-semibold tracking-tight text-zinc-900">
              {site.shortName}
            </span>
            <span className="text-xs text-zinc-500">{site.tagline}</span>
          </Link>

          {/* Primary Navigation */}
          <nav aria-label="Primary navigation" className="hidden lg:flex lg:items-center lg:gap-8">
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
            className="hidden rounded-md bg-[rgb(var(--accent))] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[rgb(var(--accent-hover))] lg:inline-flex"
          >
            Engage with Us
          </Link>

          {/* Mobile Menu Button (placeholder for future mobile nav) */}
          <div className="lg:hidden">
            <Link
              href="/contact"
              className="inline-flex rounded-md bg-[rgb(var(--accent))] px-4 py-2 text-sm font-medium text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
