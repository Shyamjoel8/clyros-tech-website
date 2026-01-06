import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-700/50 bg-[rgb(var(--surface-footer))]">
      <Container>
        {/* Main Footer Content */}
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-5 lg:gap-10 lg:py-24">
          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Company
            </h3>
            <ul className="mt-5 space-y-3.5">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Services
            </h3>
            <ul className="mt-5 space-y-3.5">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Industries
            </h3>
            <ul className="mt-5 space-y-3.5">
              {footerNav.industries.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Resources
            </h3>
            <ul className="mt-5 space-y-3.5">
              {footerNav.resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Legal & Compliance
            </h3>
            <ul className="mt-5 space-y-3.5">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-medium text-slate-300">
                © {new Date().getFullYear()} {site.name}. All rights reserved.
              </p>
              <p className="max-w-2xl text-xs leading-relaxed text-slate-500">
                Delivery aligned with ISO-grade practices. HIPAA-aware engineering for healthcare
                contexts. SOC 2–aligned security and controls.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs font-medium text-slate-400">
              <span>India</span>
              <span className="text-slate-600">•</span>
              <span>North America</span>
              <span className="text-slate-600">•</span>
              <span>Global</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
