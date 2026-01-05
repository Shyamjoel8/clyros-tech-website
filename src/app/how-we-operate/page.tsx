import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How We Operate",
  description:
    "Clyros Tech operates with engineering discipline, quality awareness, and accountability for outcomes. Learn about our operating philosophy and delivery approach.",
  alternates: { canonical: "/how-we-operate" },
  openGraph: {
    title: "How We Operate | Clyros Tech",
    description:
      "Engineering discipline, quality awareness, and accountability for outcomes.",
    url: "/how-we-operate",
  },
};

export default function HowWeOperatePage() {
  return (
    <div className="space-y-14 py-14 lg:space-y-20 lg:py-20">
      <header className="pb-2">
        <Container>
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-zinc-900 lg:text-5xl">
            How We Operate
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 lg:text-xl">
            Clyros Tech operates with engineering discipline, quality awareness, and accountability
            for outcomes. This page describes our operating philosophy and approach to delivery.
          </p>
        </Container>
      </header>

      <section
        aria-labelledby="operating-philosophy"
        className="border-t border-zinc-200/70 pt-14 lg:pt-20"
      >
        <Container>
          <h2
            id="operating-philosophy"
            className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
          >
            Operating Philosophy
          </h2>
          <div className="mt-8 space-y-6 text-base leading-7 text-zinc-600">
            <p>
              Clyros Tech is built on the principle that engineering excellence and operational
              discipline are inseparable. We do not compromise quality for speed, nor do we impose
              unnecessary process for the appearance of rigor.
            </p>
            <p>
              Our operating philosophy is grounded in five core principles that guide how we
              structure work, make decisions, and interact with clients and team members.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-zinc-900">
                Engineering Accountability Over Process Theater
              </h3>
              <p className="mt-3 text-base leading-7 text-zinc-600">
                Engineers own outcomes, not just tasks. Quality is non-negotiable. Documentation
                and knowledge transfer are delivery obligations. Technical decisions are made by
                those who will live with the consequences.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-900">
                Client Transparency Over Optimism
              </h3>
              <p className="mt-3 text-base leading-7 text-zinc-600">
                We communicate risks and constraints early and honestly. We do not overpromise. Bad
                news does not improve with age. Clients are partners in delivery, not passive
                recipients.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-900">
                Long-Term Relationships Over Short-Term Projects
              </h3>
              <p className="mt-3 text-base leading-7 text-zinc-600">
                We optimize for repeat business and referrals. We leave clients better than we
                found them through capability transfer, not dependency. We decline work that does
                not align with our capabilities or values.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-900">
                Measured Growth Over Scale at All Costs
              </h3>
              <p className="mt-3 text-base leading-7 text-zinc-600">
                Hiring standards are non-negotiable. We prioritize profitability and sustainability
                over revenue targets. Operational discipline precedes expansion. We decline
                opportunities that stretch capacity beyond safe limits.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-900">
                Risk Awareness Over Optimism Bias
              </h3>
              <p className="mt-3 text-base leading-7 text-zinc-600">
                We identify and document risks proactively. We assume Murphy&apos;s Law applies and
                plan for contingencies. We escalate risks early rather than waiting for problems to
                materialize. Post-mortems are learning opportunities, not blame exercises.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="engineering-discipline"
        className="border-t border-zinc-200/70 pt-14 lg:pt-20"
      >
        <Container>
          <h2
            id="engineering-discipline"
            className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
          >
            Engineering Discipline
          </h2>
          <div className="mt-8 space-y-6 text-base leading-7 text-zinc-600">
            <p>
              Engineering discipline at Clyros Tech means writing maintainable code, documenting
              decisions, and building systems that can be understood and operated by others. It
              means choosing boring, proven technology over novelty. It means testing thoroughly
              and deploying carefully.
            </p>
            <p>
              We do not cut corners on fundamentals. Code is reviewed before merge. Tests are
              written and maintained. Security is considered from design through deployment.
              Performance is measured and optimized based on actual requirements, not assumptions.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-zinc-900">Engineering Standards</h3>
            <ul className="mt-4 space-y-3 text-base leading-7 text-zinc-600">
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Code review is mandatory before merge; blocking issues must be resolved
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Automated testing for business logic and critical functions
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Security scanning integrated into development workflow
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Architecture decisions are documented with rationale and trade-offs
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Operational runbooks and documentation maintained throughout engagement
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-zinc-900">Technical Decision-Making</h3>
            <p className="mt-3 text-base leading-7 text-zinc-600">
              Technical decisions are made by engineers closest to the work, with appropriate
              consultation and oversight. We favor boring, proven technology over novelty. We
              choose tools based on requirements and constraints, not trends or personal preference.
            </p>
            <p className="mt-3 text-base leading-7 text-zinc-600">
              Significant technical decisions are documented with context, alternatives considered,
              and rationale. This enables future teams to understand why decisions were made and
              when they should be revisited.
            </p>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="quality-risk"
        className="border-t border-zinc-200/70 pt-14 lg:pt-20"
      >
        <Container>
          <h2
            id="quality-risk"
            className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
          >
            Quality & Risk Awareness
          </h2>
          <div className="mt-8 space-y-6 text-base leading-7 text-zinc-600">
            <p>
              Quality is built into delivery, not inspected in afterward. We identify risks early
              and communicate them transparently. We do not hide problems or minimize their
              severity.
            </p>
            <p>
              When quality is at risk, we escalate and adjust scope or timeline rather than
              compromise. When risks materialize, we contain, communicate, and learn. Every
              significant incident receives post-mortem analysis focused on systemic improvement,
              not blame.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-zinc-900">Quality Practices</h3>
            <ul className="mt-4 space-y-3 text-base leading-7 text-zinc-600">
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Quality gates enforce standards before code reaches production
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Defects are tracked, prioritized, and resolved based on severity and impact
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Technical debt is documented and addressed, not ignored
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Client-reported issues receive immediate triage and transparent communication
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-zinc-900">Risk Management</h3>
            <ul className="mt-4 space-y-3 text-base leading-7 text-zinc-600">
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Risks are identified during discovery and monitored throughout engagement
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  High-priority risks are escalated to executive leadership and client stakeholders
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Mitigation strategies are developed and implemented proactively
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Incidents receive post-mortem analysis with focus on systemic improvement
                </span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="security-responsibility"
        className="border-t border-zinc-200/70 pt-14 lg:pt-20"
      >
        <Container>
          <h2
            id="security-responsibility"
            className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
          >
            Security & Responsibility Mindset
          </h2>
          <div className="mt-8 space-y-6 text-base leading-7 text-zinc-600">
            <p>
              Security is not a checklist or afterthought. It is integrated into architecture
              design, code review, and deployment processes. We assume systems will be attacked and
              design accordingly.
            </p>
            <p>
              We follow OWASP guidance, conduct automated security scanning, and remediate
              vulnerabilities based on severity and exploitability. We do not deploy systems with
              known critical vulnerabilities.
            </p>
            <p>
              Data protection and access controls are designed based on data sensitivity and
              regulatory context. We minimize data collection, encrypt sensitive data, and
              implement least-privilege access controls.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-zinc-900">Security Integration</h3>
            <ul className="mt-4 space-y-3 text-base leading-7 text-zinc-600">
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Threat modeling during architecture design for critical systems
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Static and dynamic security scanning integrated into CI/CD pipelines
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Dependency scanning for known vulnerabilities in third-party libraries
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Security findings triaged and remediated before production deployment
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Incident response procedures for security events and data breaches
                </span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="continuous-improvement"
        className="border-t border-zinc-200/70 pt-14 lg:pt-20"
      >
        <Container>
          <h2
            id="continuous-improvement"
            className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
          >
            Continuous Improvement Orientation
          </h2>
          <div className="mt-8 space-y-6 text-base leading-7 text-zinc-600">
            <p>
              Clyros Tech learns from every engagement. We conduct retrospectives after project
              completion to identify what worked, what did not, and what should change. We document
              lessons learned and update processes based on experience.
            </p>
            <p>
              Improvement is not about perfection. It is about identifying patterns, addressing
              systemic issues, and incrementally strengthening how we work. We measure what matters
              and adjust based on outcomes, not activity.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-zinc-900">Learning Mechanisms</h3>
            <ul className="mt-4 space-y-3 text-base leading-7 text-zinc-600">
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Post-engagement retrospectives capture lessons learned and improvement
                  opportunities
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Client feedback is solicited and incorporated into delivery approach
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Team feedback informs process adjustments and tool selection
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Industry best practices are evaluated and adopted when appropriate
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Operating model is reviewed and updated based on experience and scale
                </span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="what-this-means"
        className="border-t border-zinc-200/70 pt-14 lg:pt-20"
      >
        <Container>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 lg:p-12">
            <h2
              id="what-this-means"
              className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
            >
              What This Means for Clients
            </h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-zinc-600">
              <p>
                Clients working with Clyros Tech can expect engineering discipline, transparent
                communication, and accountability for outcomes. We do not overpromise. We do not
                hide problems. We do not compromise quality for convenience.
              </p>
              <p>
                We are structured to deliver enterprise-grade work without enterprise overhead. We
                maintain operational discipline without bureaucracy. We provide governance and
                oversight without unnecessary process.
              </p>
              <p>
                If this operating philosophy aligns with your expectations for technology services,
                we welcome the opportunity to discuss your requirements.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-zinc-800"
              >
                Contact Us
              </Link>
              <Link
                href="/enterprise"
                className="inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-6 py-3 text-base font-medium text-zinc-900 shadow-sm hover:bg-zinc-50"
              >
                Enterprise Readiness
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
