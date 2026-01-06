import type { Metadata } from "next";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { StaggeredGrid, StaggeredItem } from "@/components/motion/StaggeredGrid";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Enterprise technology consulting and engineering for secure, reliable, and scalable systems.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Clyros Tech Private Limited",
    description:
      "Enterprise technology consulting and engineering for secure, reliable, and scalable systems.",
    url: "/",
  },
};

export default function Home() {
  return (
    <div className="space-y-14 py-14 lg:space-y-20 lg:py-20">
      <AnimatedSection>
        <header className="pb-2">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <h1 className="text-4xl lg:text-6xl">
                  Enterprise Technology. Engineered for Scale.
                </h1>
                <p className="lead mt-6 max-w-3xl">
                  We architect, build, and optimize mission-critical systems that power digital
                  transformation across regulated industries.
                </p>
              </div>
              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <a
                  href="/contact"
                  className="inline-flex h-12 w-full items-center justify-center rounded-md bg-[rgb(var(--accent))] px-6 text-sm font-semibold text-white hover:bg-[rgb(var(--accent-hover))] lg:w-auto"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </header>
      </AnimatedSection>

      <AnimatedSection>
        <section aria-labelledby="value-proposition" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2
                id="value-proposition"
                className="text-3xl lg:text-4xl"
              >
                Built for Complexity. Delivered with Precision.
              </h2>
              <p className="lead mt-6">
                Organizations turn to Clyros Tech when standard solutions fall short. We bring deep
                domain expertise, rigorous engineering discipline, and proven delivery frameworks to
                solve the most demanding technology challenges.
              </p>
            </div>

            <StaggeredGrid className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <StaggeredItem>
                <article className="rounded-lg border bg-white p-8">
                  <h3 className="text-lg font-semibold">Enterprise Architecture</h3>
                  <p className="mt-3 text-base leading-relaxed">
                    From legacy modernization to cloud-native platforms, we design systems that scale
                    with your ambition and comply with your constraints.
                  </p>
                </article>
              </StaggeredItem>

              <StaggeredItem>
                <article className="rounded-lg border bg-white p-8">
                  <h3 className="text-lg font-semibold">Mission-Critical Delivery</h3>
                  <p className="mt-3 text-base leading-relaxed">
                    Our teams operate within stringent regulatory, security, and uptime
                    requirements—delivering solutions that can&apos;t afford to fail.
                  </p>
                </article>
              </StaggeredItem>

              <StaggeredItem>
                <article className="rounded-lg border bg-white p-8">
                  <h3 className="text-lg font-semibold">Strategic Partnership</h3>
                  <p className="mt-3 text-base leading-relaxed">
                    We don&apos;t just build software. We embed with your organization, transfer knowledge,
                    and ensure long-term success beyond deployment.
                  </p>
                </article>
              </StaggeredItem>
            </StaggeredGrid>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section aria-labelledby="differentiators" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="differentiators" className="text-3xl lg:text-4xl">
              Why Leading Enterprises Choose Clyros Tech
            </h2>
            <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
              <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <li className="text-sm leading-6 text-zinc-700">
                  <span className="font-semibold text-zinc-900">Regulatory Fluency</span> — Deep
                  experience navigating compliance frameworks including SOC 2, HIPAA, GDPR, and
                  financial services regulations
                </li>
                <li className="text-sm leading-6 text-zinc-700">
                  <span className="font-semibold text-zinc-900">Zero-Compromise Security</span> —
                  Security architecture integrated from inception, not bolted on afterward
                </li>
                <li className="text-sm leading-6 text-zinc-700">
                  <span className="font-semibold text-zinc-900">Transparent Delivery</span> — Fixed
                  methodologies, clear milestones, predictable outcomes
                </li>
                <li className="text-sm leading-6 text-zinc-700">
                  <span className="font-semibold text-zinc-900">Senior Engineering Teams</span> — No
                  juniors on critical path; every engagement led by architects with 10+ years
                  production experience
                </li>
                <li className="text-sm leading-6 text-zinc-700 lg:col-span-2">
                  <span className="font-semibold text-zinc-900">Industry Verticalization</span> —
                  Specialized practices in healthcare, financial services, manufacturing, and public
                  sector
                </li>
              </ul>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section aria-labelledby="closing-cta" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 lg:p-12">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <h2 id="closing-cta" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
                    Let&apos;s Discuss Your Next Initiative
                  </h2>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-600">
                    Whether you&apos;re modernizing core systems, building new digital capabilities, or
                    navigating a complex technology decision, our team is ready to help.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:flex lg:justify-end">
                  <a
                    href="/contact"
                    className="inline-flex h-12 w-full items-center justify-center rounded-md bg-white px-6 text-sm font-semibold text-zinc-900 ring-1 ring-inset ring-zinc-300 hover:bg-zinc-100 lg:w-auto"
                  >
                    Contact Our Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
