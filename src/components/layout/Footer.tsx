import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-900/10 bg-zinc-950">
      <Container>
        {/* Main Footer Content */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-100">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-100">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-100">
              Industries
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNav.industries.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-100">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNav.resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-100">
              Legal & Compliance
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-sm text-zinc-300">
                © {new Date().getFullYear()} {site.name}. All rights reserved.
              </p>
              <p className="max-w-2xl text-xs leading-relaxed text-zinc-400">
                Delivery aligned with ISO-grade practices. HIPAA-aware engineering for healthcare
                contexts. SOC 2–aligned security and controls.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span>India</span>
              <span className="text-white/20">|</span>
              <span>North America</span>
              <span className="text-white/20">|</span>
              <span>Global</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
