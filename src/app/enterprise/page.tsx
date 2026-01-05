import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enterprise Readiness",
  description:
    "Clyros Tech delivers enterprise-grade technology services with governance discipline, security awareness, and global delivery capability.",
  alternates: { canonical: "/enterprise" },
  openGraph: {
    title: "Enterprise Readiness | Clyros Tech",
    description:
      "Enterprise-grade technology services with governance discipline, security awareness, and global delivery capability.",
    url: "/enterprise",
  },
};

export default function EnterprisePage() {
  return (
    <div className="space-y-14 py-14 lg:space-y-20 lg:py-20">
      <header className="pb-2">
        <Container>
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-zinc-900 lg:text-5xl">
            Enterprise Readiness
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 lg:text-xl">
            Clyros Tech delivers technology services with the governance discipline, security
            awareness, and operational maturity that enterprise organizations require.
          </p>
        </Container>
      </header>

      <section
        aria-labelledby="what-enterprise-readiness-means"
        className="border-t border-zinc-200/70 pt-14 lg:pt-20"
      >
        <Container>
          <h2
            id="what-enterprise-readiness-means"
            className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
          >
            What Enterprise Readiness Means at Clyros Tech
          </h2>
          <div className="mt-8 space-y-6 text-base leading-7 text-zinc-600">
            <p>
              Enterprise readiness is not a checklist or certification. It is a commitment to
              operational discipline, transparent communication, and accountability for outcomes.
            </p>
            <p>
              Organizations that work with Clyros Tech expect engineering rigor, delivery
              predictability, and governance awareness. We are structured to meet these
              expectations without the overhead and complexity that often accompanies enterprise
              service providers.
            </p>
            <p>
              Our approach is deliberate: we maintain the operational discipline required for
              enterprise engagements while preserving the responsiveness and technical excellence
              that clients value.
            </p>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="governance-delivery"
        className="border-t border-zinc-200/70 pt-14 lg:pt-20"
      >
        <Container>
          <h2
            id="governance-delivery"
            className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
          >
            Governance & Delivery Discipline
          </h2>
          <div className="mt-8 space-y-6 text-base leading-7 text-zinc-600">
            <p>
              Clyros Tech operates with structured delivery methodology, quality gates, and risk
              management processes. Engagements are governed through regular status reporting,
              escalation protocols, and transparent communication.
            </p>
            <p>
              We document decisions, maintain delivery accountability, and provide clear ownership
              for outcomes. Clients receive predictable delivery cadence, proactive risk
              identification, and honest communication about constraints and trade-offs.
            </p>
            <p>
              Our governance approach is proportional to engagement complexity and client
              requirements. We do not impose unnecessary process, but we ensure that critical
              controls and oversight mechanisms are in place.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-zinc-900">Delivery Oversight</h3>
            <ul className="mt-4 space-y-3 text-base leading-7 text-zinc-600">
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Structured delivery phases with defined milestones and quality gates
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Weekly status reporting and risk escalation to client stakeholders
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Clear ownership and accountability for delivery outcomes
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Post-engagement retrospectives and continuous improvement
                </span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="security-compliance"
        className="border-t border-zinc-200/70 pt-14 lg:pt-20"
      >
        <Container>
          <h2
            id="security-compliance"
            className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
          >
            Security & Compliance Posture
          </h2>
          <div className="mt-8 space-y-6 text-base leading-7 text-zinc-600">
            <p>
              Clyros Tech designs and delivers systems with security and compliance awareness
              appropriate to client context. Our engineering practices are aligned with industry
              standards including OWASP, NIST, and framework-specific security guidance.
            </p>
            <p>
              We are aware of regulatory requirements including GDPR, HIPAA, SOC 2, and
              industry-specific compliance obligations. While we are not certified under these
              frameworks, our practices are designed to support client compliance obligations and
              audit readiness.
            </p>
            <p>
              Clients retain ultimate accountability for their compliance posture. We provide
              engineering discipline, documentation, and controls that enable clients to meet their
              regulatory and contractual obligations.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-zinc-900">Security Practices</h3>
            <ul className="mt-4 space-y-3 text-base leading-7 text-zinc-600">
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Secure architecture design and review for all client engagements
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Automated security scanning (SAST, DAST, SCA) integrated into delivery
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Vulnerability assessment and remediation based on severity and context
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Data protection and access controls aligned with client requirements
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-zinc-900">Compliance Awareness</h3>
            <ul className="mt-4 space-y-3 text-base leading-7 text-zinc-600">
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  GDPR-aware engineering for European and cross-border data handling
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  HIPAA-aware engineering for healthcare contexts and protected health information
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  SOC 2-aligned security and operational controls
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Industry-specific compliance support (financial services, manufacturing, SaaS)
                </span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="global-delivery"
        className="border-t border-zinc-200/70 pt-14 lg:pt-20"
      >
        <Container>
          <h2
            id="global-delivery"
            className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
          >
            Global Delivery Orientation
          </h2>
          <div className="mt-8 space-y-6 text-base leading-7 text-zinc-600">
            <p>
              Clyros Tech supports international clients through distributed delivery model and
              timezone-aware collaboration. We are headquartered in India with delivery capability
              for clients in North America, Europe, and Asia-Pacific.
            </p>
            <p>
              Our distributed model provides flexibility and cost efficiency without sacrificing
              communication quality or delivery accountability. We establish working hours overlap,
              regular communication cadence, and clear escalation paths for international
              engagements.
            </p>
            <p>
              For clients requiring on-site presence, we structure engagements to balance on-site
              and distributed work based on project phase, complexity, and client preference.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-zinc-900">
              International Engagement Capabilities
            </h3>
            <ul className="mt-4 space-y-3 text-base leading-7 text-zinc-600">
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Timezone overlap management and communication scheduling
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Cross-border data handling with regulatory awareness
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Contractual flexibility for multi-jurisdiction engagements
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  On-site delivery capability when required by client or engagement
                </span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="engagement-accountability"
        className="border-t border-zinc-200/70 pt-14 lg:pt-20"
      >
        <Container>
          <h2
            id="engagement-accountability"
            className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
          >
            Engagement & Accountability Model
          </h2>
          <div className="mt-8 space-y-6 text-base leading-7 text-zinc-600">
            <p>
              Clyros Tech engagements are structured with clear scope, timeline, and accountability.
              We provide multiple engagement models to align with client needs: project-based
              delivery, time and materials, dedicated teams, and advisory retainers.
            </p>
            <p>
              Each engagement has designated delivery leadership with authority and accountability
              for outcomes. Clients have single point of contact for escalation, decision-making,
              and communication.
            </p>
            <p>
              We document scope, assumptions, and constraints before work begins. Changes to scope
              or timeline are managed through formal change control process with client approval.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-zinc-900">Engagement Models</h3>
            <ul className="mt-4 space-y-3 text-base leading-7 text-zinc-600">
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  <strong>Project-Based:</strong> Fixed scope, timeline, and budget with defined
                  deliverables
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  <strong>Time & Materials:</strong> Flexible engagement for evolving requirements
                  and iterative delivery
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  <strong>Dedicated Team:</strong> Allocated team for ongoing development and
                  support
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  <strong>Advisory Retainer:</strong> Ongoing technical advisory and fractional CTO
                  services
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-zinc-900">Accountability Framework</h3>
            <ul className="mt-4 space-y-3 text-base leading-7 text-zinc-600">
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Single point of accountability for delivery outcomes and client satisfaction
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Clear escalation path to executive leadership for issues or concerns
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Documented scope, assumptions, and change control process
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Post-engagement retrospective and knowledge transfer to client team
                </span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="resources"
        className="border-t border-zinc-200/70 pt-14 lg:pt-20"
      >
        <Container>
          <h2
            id="resources"
            className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
          >
            Enterprise Resources
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-600">
            The following resources provide additional context on Clyros Tech&apos;s capabilities,
            delivery approach, and engagement models.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-zinc-900">Company Overview</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Comprehensive overview of Clyros Tech capabilities, industries served, and
                differentiators.
              </p>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="text-sm font-medium text-zinc-900 hover:text-zinc-700"
                >
                  Request Document →
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-zinc-900">Delivery Methodology</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Summary of delivery phases, quality gates, and governance approach.
              </p>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="text-sm font-medium text-zinc-900 hover:text-zinc-700"
                >
                  Request Document →
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-zinc-900">Engagement Models</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Overview of engagement types, commercial models, and typical timelines.
              </p>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="text-sm font-medium text-zinc-900 hover:text-zinc-700"
                >
                  Request Document →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="engage"
        className="border-t border-zinc-200/70 pt-14 lg:pt-20"
      >
        <Container>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 lg:p-12">
            <h2
              id="engage"
              className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
            >
              Engage with Clyros Tech
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-600">
              If your organization requires enterprise-grade technology services with governance
              discipline and delivery accountability, we welcome the opportunity to discuss your
              requirements.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-zinc-800"
              >
                Contact Us
              </Link>
              <Link
                href="/how-we-operate"
                className="inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-6 py-3 text-base font-medium text-zinc-900 shadow-sm hover:bg-zinc-50"
              >
                How We Operate
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
