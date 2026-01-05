import Link from "next/link";
import { legalNav, site } from "@/lib/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <Container>
        <div className="flex flex-col gap-6 py-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <p className="text-sm text-zinc-600">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <p className="max-w-3xl text-xs leading-5 text-zinc-500">
              Delivery aligned with ISO-grade practices. HIPAA-aware engineering for healthcare contexts.
              SOC 2–aligned security and controls.
            </p>
          </div>

          <nav aria-label="Footer legal" className="flex flex-wrap items-center gap-x-5 gap-y-2">
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
    </footer>
  );
}

