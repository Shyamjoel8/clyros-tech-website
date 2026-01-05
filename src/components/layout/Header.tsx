import Link from "next/link";
import { legalNav, primaryNav, site } from "@/lib/site";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <Container>
        <div className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="text-base font-semibold tracking-tight text-zinc-900">
              {site.shortName}
            </Link>
          </div>

          <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}

