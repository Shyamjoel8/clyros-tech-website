import type { Metadata } from "next";
import { AnimatedSection } from "@/components/motion/AnimatedSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Overview of enterprise consulting and engineering services offered by Clyros Tech Private Limited.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Clyros Tech",
    description:
      "Overview of enterprise consulting and engineering services offered by Clyros Tech Private Limited.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="space-y-14 py-14 lg:space-y-20 lg:py-20">
      <AnimatedSection>
        <header className="pb-2">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-6xl">
              Comprehensive Technology Services for Enterprise Clients
            </h1>
            <p className="lead mt-6 max-w-3xl">
              Clyros Tech provides end-to-end technology services across the entire solution
              lifecycle—from strategic planning and architecture through implementation, optimization,
              and ongoing evolution.
            </p>
          </div>
        </header>
      </AnimatedSection>

      <AnimatedSection>
        <section aria-labelledby="service-categories" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="service-categories"
            className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
          >
            Service Categories
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Enterprise Architecture &amp; Advisory</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">What We Deliver</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>Technology strategy and roadmap development</li>
                    <li>Enterprise architecture design and modernization</li>
                    <li>Cloud migration strategy and planning</li>
                    <li>Technology stack evaluation and selection</li>
                    <li>Legacy system assessment and modernization planning</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">Ideal For</h4>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    Organizations facing major technology decisions, architectural debt, or strategic
                    inflection points requiring expert guidance.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Custom Application Development</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">What We Deliver</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>Mission-critical application development</li>
                    <li>Core system modernization</li>
                    <li>API and integration architecture</li>
                    <li>Microservices and distributed systems</li>
                    <li>Cloud-native application development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">Ideal For</h4>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    Enterprises requiring custom solutions that integrate deeply with existing systems
                    while meeting stringent performance, security, and compliance requirements.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Data &amp; Analytics Engineering</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">What We Deliver</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>Data platform architecture and implementation</li>
                    <li>Real-time data pipeline development</li>
                    <li>Analytics infrastructure and reporting systems</li>
                    <li>Data governance and quality frameworks</li>
                    <li>Business intelligence and visualization solutions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">Ideal For</h4>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    Organizations seeking to transform data into strategic advantage while maintaining
                    governance, security, and regulatory compliance.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">DevOps &amp; Infrastructure</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">What We Deliver</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>CI/CD pipeline design and implementation</li>
                    <li>Infrastructure as code frameworks</li>
                    <li>Container orchestration and Kubernetes</li>
                    <li>Cloud infrastructure optimization</li>
                    <li>Security automation and compliance tooling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">Ideal For</h4>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    Enterprises accelerating release velocity while maintaining control, security,
                    and audit readiness.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Quality Assurance &amp; Testing</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">What We Deliver</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>Test automation strategy and implementation</li>
                    <li>Performance and load testing</li>
                    <li>Security testing and vulnerability assessment</li>
                    <li>Compliance testing frameworks</li>
                    <li>Quality assurance process optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">Ideal For</h4>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    Organizations with zero tolerance for production failures requiring comprehensive
                    validation and risk mitigation.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Cybersecurity Services</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">What We Deliver</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>Security architecture design and review</li>
                    <li>Threat modeling and risk assessment</li>
                    <li>Security code review and remediation</li>
                    <li>Compliance gap analysis and remediation</li>
                    <li>Incident response planning and support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">Ideal For</h4>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    Enterprises in regulated industries requiring defense-in-depth security posture
                    and audit-ready documentation.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Managed Services &amp; Support</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">What We Deliver</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>Production system monitoring and support</li>
                    <li>Performance optimization and tuning</li>
                    <li>Proactive maintenance and updates</li>
                    <li>Capacity planning and scaling</li>
                    <li>Technical documentation and training</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">Ideal For</h4>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    Organizations requiring ongoing expert support for critical systems without
                    expanding internal headcount.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section aria-labelledby="engagement-models" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 lg:p-12">
              <h2 id="engagement-models" className="text-3xl lg:text-4xl">
                Flexible Structures to Match Your Needs
              </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="rounded-lg border border-zinc-200 bg-white p-8">
                <h3 className="text-base font-semibold text-zinc-900">Fixed Scope Projects</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Well-defined initiatives with clear requirements, fixed timeline, and budget certainty.
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-white p-8">
                <h3 className="text-base font-semibold text-zinc-900">Dedicated Teams</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Embedded engineering teams augmenting your capacity for sustained delivery.
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-white p-8">
                <h3 className="text-base font-semibold text-zinc-900">Advisory Retainers</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Ongoing strategic guidance and architectural oversight for enterprise technology leadership.
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-white p-8">
                <h3 className="text-base font-semibold text-zinc-900">Hybrid Engagements</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Custom structures combining project delivery, team augmentation, and advisory services.
                </p>
              </div>
            </div>
          </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}

