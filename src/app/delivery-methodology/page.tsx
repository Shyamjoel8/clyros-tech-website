import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Delivery Methodology",
  description:
    "Engineering delivery framework, project governance, and execution methodology at Clyros Tech Private Limited.",
  alternates: { canonical: "/delivery-methodology" },
  openGraph: {
    title: "Delivery Methodology | Clyros Tech",
    description:
      "Engineering delivery framework, project governance, and execution methodology at Clyros Tech Private Limited.",
    url: "/delivery-methodology",
  },
};

export default function DeliveryMethodologyPage() {
  return (
    <div className="space-y-14 py-14 lg:space-y-20 lg:py-20">
      <header className="pb-2">
        <Container>
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-zinc-900 lg:text-5xl">
            Delivery Methodology
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 lg:text-xl">
            Clyros Tech applies structured engineering delivery frameworks that prioritize
            transparency, accountability, and measurable outcomes. Our methodology adapts to
            client context while maintaining consistent quality and governance standards.
          </p>
        </Container>
      </header>

      <section aria-labelledby="principles" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="principles" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Core Delivery Principles
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Transparency by Default</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Clients receive continuous visibility into progress, risks, and blockers. We
                document decisions, maintain clear communication channels, and provide regular
                status reporting aligned with client governance requirements.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Engineering Ownership</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Engineers take responsibility for work quality, technical decisions, and outcomes.
                Ownership extends beyond code delivery to include documentation, knowledge
                transfer, and post-deployment support.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Adaptive Execution</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                We tailor delivery approach to project context, client maturity, and organizational
                constraints. Whether Agile, Waterfall, or hybrid, we apply appropriate rigor
                without dogmatic adherence to methodology labels.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Measurable Progress</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Progress is tracked through concrete deliverables, working software, and objective
                milestones. We avoid vanity metrics and focus on outcomes that matter to client
                business objectives.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="phases" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="phases" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Delivery Phases
          </h2>
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Clyros Tech structures engagements into clear phases with defined objectives,
              deliverables, and decision gates. The specific phase structure adapts to engagement
              scope and client preferences.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgb(var(--accent))] text-sm font-semibold text-white">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-zinc-900">Discovery & Planning</h3>
                  <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                    <p>
                      <strong className="text-zinc-900">Objective:</strong> Establish shared
                      understanding of technical requirements, constraints, and success criteria.
                    </p>
                    <p>
                      <strong className="text-zinc-900">Activities:</strong>
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                      <li>Technical architecture assessment and documentation</li>
                      <li>Risk identification and mitigation planning</li>
                      <li>Resource allocation and team structure definition</li>
                      <li>Communication and governance framework establishment</li>
                      <li>Technology stack evaluation and tooling decisions</li>
                    </ul>
                    <p>
                      <strong className="text-zinc-900">Deliverables:</strong> Technical design
                      documents, project plan, RACI matrix, communication plan, risk register
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgb(var(--accent))] text-sm font-semibold text-white">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-zinc-900">Foundation & Setup</h3>
                  <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                    <p>
                      <strong className="text-zinc-900">Objective:</strong> Establish technical
                      foundation, development environment, and delivery infrastructure.
                    </p>
                    <p>
                      <strong className="text-zinc-900">Activities:</strong>
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                      <li>Development environment and tooling configuration</li>
                      <li>CI/CD pipeline setup and automation</li>
                      <li>Code repository structure and branching strategy</li>
                      <li>Security controls and access management implementation</li>
                      <li>Testing framework and quality gates establishment</li>
                    </ul>
                    <p>
                      <strong className="text-zinc-900">Deliverables:</strong> Working development
                      environment, CI/CD pipelines, coding standards documentation, security
                      baseline
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgb(var(--accent))] text-sm font-semibold text-white">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-zinc-900">Iterative Development</h3>
                  <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                    <p>
                      <strong className="text-zinc-900">Objective:</strong> Build and validate
                      functionality through iterative cycles with regular client feedback.
                    </p>
                    <p>
                      <strong className="text-zinc-900">Activities:</strong>
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                      <li>Feature development in prioritized increments</li>
                      <li>Continuous testing (unit, integration, performance, security)</li>
                      <li>Regular demos and feedback incorporation</li>
                      <li>Technical debt management and refactoring</li>
                      <li>Documentation maintenance alongside code changes</li>
                    </ul>
                    <p>
                      <strong className="text-zinc-900">Deliverables:</strong> Working software
                      increments, test reports, updated documentation, sprint retrospectives
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgb(var(--accent))] text-sm font-semibold text-white">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Stabilization &amp; Hardening
                  </h3>
                  <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                    <p>
                      <strong className="text-zinc-900">Objective:</strong> Achieve production
                      readiness through comprehensive testing, performance optimization, and
                      security validation.
                    </p>
                    <p>
                      <strong className="text-zinc-900">Activities:</strong>
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                      <li>End-to-end and user acceptance testing</li>
                      <li>Performance testing and optimization</li>
                      <li>Security scanning and vulnerability remediation</li>
                      <li>Production deployment planning and rehearsal</li>
                      <li>Operational runbook and support documentation preparation</li>
                    </ul>
                    <p>
                      <strong className="text-zinc-900">Deliverables:</strong> Production-ready
                      code, test reports, deployment plan, operational documentation, rollback
                      procedures
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgb(var(--accent))] text-sm font-semibold text-white">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Deployment &amp; Knowledge Transfer
                  </h3>
                  <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                    <p>
                      <strong className="text-zinc-900">Objective:</strong> Execute controlled
                      production deployment and enable client team for ongoing operations.
                    </p>
                    <p>
                      <strong className="text-zinc-900">Activities:</strong>
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                      <li>Production deployment execution and validation</li>
                      <li>Post-deployment monitoring and issue resolution</li>
                      <li>Knowledge transfer sessions with client teams</li>
                      <li>Documentation handoff and repository access transition</li>
                      <li>Support model establishment for post-deployment period</li>
                    </ul>
                    <p>
                      <strong className="text-zinc-900">Deliverables:</strong> Production system,
                      operations documentation, trained client team, support handoff plan
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgb(var(--accent))] text-sm font-semibold text-white">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Hypercare &amp; Closure
                  </h3>
                  <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                    <p>
                      <strong className="text-zinc-900">Objective:</strong> Provide elevated
                      support during initial production period and formally close engagement with
                      lessons learned.
                    </p>
                    <p>
                      <strong className="text-zinc-900">Activities:</strong>
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                      <li>Intensive monitoring and rapid issue response</li>
                      <li>Performance tuning based on production load patterns</li>
                      <li>Minor bug fixes and configuration adjustments</li>
                      <li>Project retrospective and lessons learned documentation</li>
                      <li>Formal engagement closure and final deliverable handoff</li>
                    </ul>
                    <p>
                      <strong className="text-zinc-900">Deliverables:</strong> Stable production
                      system, final documentation updates, lessons learned report, engagement
                      closure confirmation
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="governance" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="governance" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Governance &amp; Reporting
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Status Reporting</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>
                  <strong>Daily:</strong> Standup meetings during agreed timezone overlap windows
                </li>
                <li>
                  <strong>Weekly:</strong> Progress reports covering completed work, upcoming work,
                  risks, and blockers
                </li>
                <li>
                  <strong>Sprint/Iteration:</strong> Demo sessions and retrospectives for feedback
                  and continuous improvement
                </li>
                <li>
                  <strong>Monthly:</strong> Executive summaries for program-level visibility
                </li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Decision Management</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>Technical decisions documented in architecture decision records (ADRs)</li>
                <li>Scope changes managed through formal change control process</li>
                <li>Risks escalated promptly with proposed mitigation strategies</li>
                <li>
                  Key decisions reviewed at steering committee meetings (for program-level
                  engagements)
                </li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Quality Gates</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>Code review mandatory before merge to main branches</li>
                <li>Automated testing (unit, integration) must pass before deployment</li>
                <li>Security scanning integrated into CI/CD pipeline</li>
                <li>Performance benchmarks validated before production release</li>
                <li>Documentation completeness verified at phase gates</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Risk Management</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>Risk register maintained and reviewed weekly</li>
                <li>Proactive identification of technical, schedule, and resource risks</li>
                <li>Mitigation strategies defined and tracked to closure</li>
                <li>Critical risks escalated to executive leadership immediately</li>
              </ul>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="quality" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="quality" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Quality &amp; Engineering Standards
          </h2>
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Clyros Tech maintains consistent engineering standards across all engagements.
              Standards are tailored to client context but never compromised on fundamentals.
            </p>
          </div>
          <div className="mt-10 space-y-6">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Code Quality</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>Clean, readable code adhering to language-specific conventions</li>
                <li>Meaningful naming, appropriate abstraction, and minimal duplication</li>
                <li>Comprehensive unit test coverage for business logic</li>
                <li>Static code analysis and linting enforced in build pipeline</li>
                <li>Regular refactoring to manage technical debt</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Security Practices</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>Secure coding practices following OWASP guidelines</li>
                <li>Regular dependency scanning and vulnerability patching</li>
                <li>Secrets management using vault solutions (no hardcoded credentials)</li>
                <li>Security testing integrated into development lifecycle</li>
                <li>Principle of least privilege for system access and permissions</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Documentation</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>Architecture diagrams and technical design documentation</li>
                <li>API documentation (Swagger/OpenAPI for REST APIs)</li>
                <li>Inline code comments for complex logic</li>
                <li>Deployment and operations runbooks</li>
                <li>README files for each repository with setup instructions</li>
              </ul>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="tools" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="tools" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Tools &amp; Technology Approach
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-zinc-50 p-8">
            <p className="text-sm leading-6 text-zinc-700">
              Clyros Tech is tool-agnostic and adapts to client technology ecosystems. We bring
              expertise across multiple platforms while accommodating client tool preferences and
              organizational standards.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Project Management</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Jira, Azure DevOps, Asana, Monday.com, or client-preferred systems for task
                tracking, sprint management, and backlog prioritization.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Collaboration</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Microsoft Teams, Slack, Zoom, Google Meet for communication. Confluence, Notion,
                SharePoint for documentation and knowledge management.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Code &amp; CI/CD</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                GitHub, GitLab, Bitbucket for version control. Jenkins, GitHub Actions, GitLab CI,
                Azure Pipelines for CI/CD automation.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="engagement-models" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 lg:p-12">
            <h2
              id="engagement-models"
              className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
            >
              Engagement Models
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600">
              For detailed information on how we structure client engagements, commercial models,
              and team configuration options, please refer to our engagement models documentation
              or contact us directly.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/capabilities"
                className="inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-6 py-3 text-base font-medium text-zinc-900 shadow-sm hover:bg-zinc-50"
              >
                View Technical Capabilities
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-[rgb(var(--accent))] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[rgb(var(--accent-hover))]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
