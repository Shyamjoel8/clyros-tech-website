import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { StaggeredGrid, StaggeredItem } from "@/components/motion/StaggeredGrid";

export const metadata: Metadata = {
  title: "About",
  description:
    "Company overview and operating principles for Clyros Tech Private Limited.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Clyros Tech",
    description:
      "Company overview and operating principles for Clyros Tech Private Limited.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-14 py-14 lg:space-y-20 lg:py-20">
      <AnimatedSection>
        <header className="pb-2">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-6xl">
              Engineering Excellence. Enterprise Focus.
            </h1>
            <p className="lead mt-6 max-w-3xl">
              Clyros Tech Private Limited is a specialized technology consulting firm serving
              organizations with complex, high-stakes technology requirements. Since our founding, we
              have delivered transformative solutions across healthcare, financial services,
              manufacturing, and the public sector.
            </p>
            <p className="lead mt-5 max-w-3xl">
              We exist to solve problems that demand more than off-the-shelf answers—where regulatory
              pressure is high, where downtime isn&apos;t an option, and where technology decisions have
              board-level implications.
            </p>
          </div>
        </header>
      </AnimatedSection>

      <AnimatedSection>
        <section aria-labelledby="approach" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 id="approach" className="text-3xl lg:text-4xl">
                Discipline Over Disruption
              </h2>
              <p className="mt-6 text-base leading-relaxed">
                Enterprise technology isn&apos;t about moving fast and breaking things. It&apos;s about moving
                deliberately and building things that last.
              </p>
              <p className="mt-5 text-base leading-relaxed">
                Every engagement begins with deep discovery. We invest time understanding your
                business context, technical landscape, regulatory environment, and organizational
                dynamics before proposing solutions.
              </p>
              <p className="mt-5 text-base leading-relaxed">
                We favor proven architectures over experimental ones. We document rigorously. We
                transfer knowledge systematically. And we stand behind our work long after deployment.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section aria-labelledby="principles" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="principles" className="text-3xl lg:text-4xl">
              Core Principles
            </h2>
            <StaggeredGrid className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <StaggeredItem>
                <article className="rounded-lg border bg-white p-8">
                  <h3 className="text-lg font-semibold">Integrity First</h3>
                  <p className="mt-3 text-base leading-relaxed">
                    We provide honest assessments, even when the truth is inconvenient. If a project
                    isn&apos;t the right fit, we&apos;ll say so.
                  </p>
                </article>
              </StaggeredItem>

              <StaggeredItem>
                <article className="rounded-lg border bg-white p-8">
                  <h3 className="text-lg font-semibold">Outcome Accountability</h3>
                  <p className="mt-3 text-base leading-relaxed">
                    We measure success by business outcomes, not lines of code. Our delivery frameworks
                    include clear success metrics agreed upon before work begins.
                  </p>
                </article>
              </StaggeredItem>

              <StaggeredItem>
                <article className="rounded-lg border bg-white p-8">
                  <h3 className="text-lg font-semibold">Knowledge Transfer</h3>
                  <p className="mt-3 text-base leading-relaxed">
                    Every engagement includes structured knowledge transfer. We build your team&apos;s
                    capability, not dependency.
                  </p>
                </article>
              </StaggeredItem>

              <StaggeredItem>
                <article className="rounded-lg border bg-white p-8">
                  <h3 className="text-lg font-semibold">Long-Term Partnership</h3>
                  <p className="mt-3 text-base leading-relaxed">
                    We build relationships measured in years, not projects. Our clients return because
                    we deliver consistently and honestly.
                  </p>
                </article>
              </StaggeredItem>
            </StaggeredGrid>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section aria-labelledby="leadership" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 lg:p-12">
              <h2 id="leadership" className="text-3xl lg:text-4xl">
                Led by Practitioners, Not Salespeople
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-relaxed">
                Our leadership team consists of practicing architects and engineers who remain
                actively engaged in delivery. Technical decisions are made by people who will live
                with the consequences. Client relationships are managed by people who understand the
                work.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-relaxed">
                This isn&apos;t a lifestyle consulting firm. We&apos;re engineers who respect the craft and the
                responsibility that comes with building systems people depend on.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section aria-labelledby="company-profile" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-zinc-200 bg-white p-8 lg:p-12">
              <h2 id="company-profile" className="text-3xl lg:text-4xl">
                Company Profile
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-relaxed">
                For a comprehensive overview of Clyros Tech&apos;s capabilities, experience, and approach,
                request our company profile document.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-[rgb(var(--accent))] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[rgb(var(--accent-hover))]"
                >
                  Request Company Profile
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}

