import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Engineering Culture & Standards",
  description:
    "Engineering philosophy, code quality standards, and technical decision-making at Clyros Tech Private Limited.",
  alternates: { canonical: "/engineering-culture" },
  openGraph: {
    title: "Engineering Culture & Standards | Clyros Tech",
    description:
      "Engineering philosophy, code quality standards, and technical decision-making at Clyros Tech Private Limited.",
    url: "/engineering-culture",
  },
};

export default function EngineeringCulturePage() {
  return (
    <div className="space-y-14 py-14 lg:space-y-20 lg:py-20">
      <header className="pb-2">
        <Container>
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-zinc-900 lg:text-5xl">
            Engineering Culture &amp; Standards
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 lg:text-xl">
            Clyros Tech is an engineering-first organization. Our culture, processes, and standards
            reflect a commitment to technical excellence, professional accountability, and long-term
            system integrity.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600 lg:text-xl">
            These are not aspirational statements. They describe how we actually work.
          </p>
        </Container>
      </header>

      <section aria-labelledby="philosophy" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="philosophy" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Our Engineering Philosophy
          </h2>

          <div className="mt-10 space-y-8">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                Production is the Only Thing That Matters
              </h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Code that doesn&apos;t run in production is speculation. We design, build, and test with
                production operations as the primary success criterion. Every architectural decision
                considers operational complexity, monitoring requirements, failure modes, and recovery
                procedures.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                This means we think about the 3 AM page before we write the first line of code. It means
                we care about runbooks as much as requirements. It means we don&apos;t ship what we
                wouldn&apos;t operate ourselves.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                Boring Technology Wins
              </h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                We favor proven technologies with established operational patterns, mature ecosystems,
                and predictable failure modes. The newest framework or database engine is exciting. The
                five-year-old one with known limitations and well-documented workarounds is reliable.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                This doesn&apos;t mean we never adopt new technology. It means we have a high bar for
                introducing operational risk. Novel technology must solve a problem that existing
                solutions cannot, and the organization must be willing to invest in becoming expert
                operators.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                Systems Outlive Implementations
              </h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Most systems we build will be maintained by someone other than the original author. Many
                will run for years or decades. We write code for the future maintainer, not just for the
                compiler or the initial deployment.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Clear naming, consistent patterns, explicit error handling, and comprehensive
                documentation aren&apos;t niceties. They&apos;re professional obligations to the people who
                will operate and evolve these systems long after we&apos;ve moved on.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                Complexity is the Enemy
              </h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Every abstraction layer, every framework, every microservice, every async message bus
                adds complexity. Complexity makes systems harder to understand, harder to debug, harder
                to secure, and harder to operate.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                We accept necessary complexity when it solves real problems. We reject accidental
                complexity that emerges from poor design decisions or enthusiasm for architectural
                patterns. The simplest solution that meets requirements is usually the right one.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="code-quality" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="code-quality" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Standards and Code Quality
          </h2>

          <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Code quality is not subjective. We maintain explicit standards for readability,
              testability, security, and maintainability. Every engineer is expected to internalize and
              apply these standards without constant oversight.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Code Review</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• All production code reviewed by at least one senior engineer</li>
                <li>• Reviews focus on correctness, clarity, security, and operational concerns</li>
                <li>• Feedback delivered constructively with specific rationale</li>
                <li>• Authors expected to engage with review feedback thoughtfully</li>
                <li>• Security-sensitive code requires additional review</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Automated Testing</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Unit tests for business logic and critical algorithms</li>
                <li>• Integration tests for service boundaries and external dependencies</li>
                <li>• Contract tests for API interfaces</li>
                <li>• Load tests for performance-critical paths</li>
                <li>• Tests run automatically in CI/CD pipelines before deployment</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Error Handling</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Explicit error handling; no silent failures</li>
                <li>• Error messages include actionable context</li>
                <li>• Structured logging at appropriate levels</li>
                <li>• Graceful degradation when dependencies fail</li>
                <li>• Circuit breakers and timeout handling for external calls</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Performance</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Efficient algorithms and data structures for expected scale</li>
                <li>• Database queries reviewed for N+1 problems and missing indexes</li>
                <li>• Caching strategies for expensive operations</li>
                <li>• Resource limits and backpressure handling</li>
                <li>• Performance testing before production deployment</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Readability</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Clear, intention-revealing names for functions and variables</li>
                <li>• Functions do one thing and do it well</li>
                <li>• Comments explain why, not what (code explains what)</li>
                <li>• Consistent code style within each codebase</li>
                <li>• Minimal cleverness; optimize for future maintainer comprehension</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Refactoring</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Continuous refactoring to prevent technical debt accumulation</li>
                <li>• Leave code better than you found it</li>
                <li>• Refactor with tests to ensure behavior preservation</li>
                <li>• Architectural improvements discussed before implementation</li>
                <li>• Balance refactoring with feature delivery based on value</li>
              </ul>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="documentation" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="documentation" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Documentation &amp; Knowledge Transfer
          </h2>

          <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Documentation is not optional. Systems that cannot be understood cannot be maintained.
              Engineers who do not document their work create technical debt for everyone who comes
              after them.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Architecture Documentation</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• System context diagrams showing external dependencies</li>
                <li>• Component diagrams explaining internal structure</li>
                <li>• Sequence diagrams for complex workflows</li>
                <li>• Architecture decision records (ADRs) capturing key choices</li>
                <li>• Documentation updated when architecture changes</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">API Documentation</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• OpenAPI/Swagger specs for REST APIs</li>
                <li>• Request/response examples with realistic data</li>
                <li>• Error scenarios and status codes documented</li>
                <li>• Authentication and authorization requirements</li>
                <li>• Rate limits, quotas, and usage guidelines</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Operational Runbooks</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Deployment procedures and rollback steps</li>
                <li>• Monitoring and alerting configuration</li>
                <li>• Common failure modes and resolution procedures</li>
                <li>• Scaling guidelines and capacity planning</li>
                <li>• Emergency contact information and escalation paths</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Knowledge Transfer</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Structured handoff sessions for client transitions</li>
                <li>• Documentation review and walkthrough</li>
                <li>• Shadowing and reverse shadowing periods</li>
                <li>• Q&A sessions and recorded demos</li>
                <li>• Contact availability during transition period</li>
              </ul>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="security" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="security" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Security and Responsibility
          </h2>

          <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Security is not a feature that can be added later. It is a fundamental property of
              well-designed systems. Every engineer is responsible for the security of the systems they
              build and maintain.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Secure Development Practices</h3>
              <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Input Validation</p>
                  <ul className="mt-2 space-y-1 text-sm leading-6 text-zinc-700">
                    <li>• Validate all external input at system boundaries</li>
                    <li>• Use parameterized queries to prevent SQL injection</li>
                    <li>• Sanitize user-generated content before display</li>
                    <li>• Enforce size limits and rate limiting</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Authentication & Authorization</p>
                  <ul className="mt-2 space-y-1 text-sm leading-6 text-zinc-700">
                    <li>• Multi-factor authentication for privileged access</li>
                    <li>• Principle of least privilege for all permissions</li>
                    <li>• Regular access reviews and recertification</li>
                    <li>• Session management and token expiration</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Data Protection</p>
                  <ul className="mt-2 space-y-1 text-sm leading-6 text-zinc-700">
                    <li>• Encryption at rest for sensitive data</li>
                    <li>• TLS 1.2+ for all network communication</li>
                    <li>• Secure credential storage and rotation</li>
                    <li>• Data classification and handling procedures</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Vulnerability Management</p>
                  <ul className="mt-2 space-y-1 text-sm leading-6 text-zinc-700">
                    <li>• Automated dependency scanning in CI/CD</li>
                    <li>• Regular security patching and updates</li>
                    <li>• SAST and DAST tools in development workflow</li>
                    <li>• Penetration testing for high-risk systems</li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Security Mindset</h3>
              <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                <p>
                  Security failures often result from assumptions about how systems will be used. We
                  assume users will do unexpected things. We assume dependencies will fail in surprising
                  ways. We assume attackers will find the weaknesses we didn&apos;t think to protect.
                </p>
                <p>
                  This means we think adversarially when designing systems. What could go wrong? What
                  are the failure modes? What data could be exposed? What access could be abused? Where
                  are the trust boundaries?
                </p>
                <p>
                  When we identify security concerns, we escalate them immediately. We never assume a
                  vulnerability is too obscure to exploit or too difficult to fix. Security issues are
                  prioritized above feature work.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="decision-making" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="decision-making" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Decision-Making and Accountability
          </h2>

          <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Engineering is about making decisions with incomplete information under time constraints.
              We trust our engineers to make good decisions and hold them accountable for outcomes.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Autonomy and Ownership</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Engineers are trusted to make technical decisions within their scope of responsibility.
                This includes technology choices, implementation approaches, and trade-off decisions.
                With autonomy comes accountability—owners are responsible for the consequences of their
                decisions.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Architectural decisions with broad impact require discussion and alignment. Individual
                implementation decisions do not. We default to trust and verify through code review
                rather than upfront approval.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Escalation and Collaboration</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Autonomy does not mean isolation. When engineers encounter ambiguity, conflicting
                requirements, or technical uncertainty, they are expected to seek input. Escalation is
                not failure; it&apos;s responsible decision-making.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                We collaborate through architecture discussions, design reviews, and technical spikes.
                We document significant decisions through ADRs. We surface disagreements constructively
                and defer to those closest to the problem.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Failure and Learning</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Production incidents, security vulnerabilities, and delivery delays happen. We conduct
                blameless postmortems focused on systemic factors rather than individual fault. The goal
                is learning and prevention, not punishment.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                This does not excuse carelessness or negligence. It means we distinguish between honest
                mistakes made while trying to do good work and reckless behavior that violates our
                standards. The former we learn from. The latter we address directly.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Continuous Improvement</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Engineering excellence is not a destination. Our practices, tools, and standards evolve
                based on experience, technology changes, and lessons learned. Engineers are encouraged
                to propose improvements to our processes and standards.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Improvement proposals should include rationale, expected benefits, implementation costs,
                and transition plans. We evaluate proposals based on measurable impact, not enthusiasm
                for change.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="learn-more" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 lg:p-12">
            <h2 id="learn-more" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
              Learn More
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <Link
                href="/careers"
                className="rounded-lg border border-zinc-200 bg-white p-6 text-sm leading-6 text-zinc-700 hover:border-zinc-300"
              >
                <span className="font-semibold text-zinc-900">Careers at Clyros Tech →</span>
                <p className="mt-1 text-zinc-600">
                  Open positions, hiring process, and what we look for in engineering candidates.
                </p>
              </Link>
              <Link
                href="/leadership"
                className="rounded-lg border border-zinc-200 bg-white p-6 text-sm leading-6 text-zinc-700 hover:border-zinc-300"
              >
                <span className="font-semibold text-zinc-900">Leadership & Governance →</span>
                <p className="mt-1 text-zinc-600">
                  How we approach client accountability, delivery ownership, and ethical standards.
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
