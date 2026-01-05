import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Career opportunities and hiring process at Clyros Tech Private Limited.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers | Clyros Tech",
    description: "Career opportunities and hiring process at Clyros Tech Private Limited.",
    url: "/careers",
  },
};

export default function CareersPage() {
  return (
    <div className="space-y-14 py-14 lg:space-y-20 lg:py-20">
      <header className="pb-2">
        <Container>
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-zinc-900 lg:text-5xl">
            Build Systems That Matter
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 lg:text-xl">
            Clyros Tech is built by senior engineers who chose depth over scale. We work on complex
            problems for sophisticated clients who demand excellence. If you value craft, appreciate
            rigor, and want to work on systems that can&apos;t afford to fail, let&apos;s talk.
          </p>
        </Container>
      </header>

      <section aria-labelledby="who-thrives" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="who-thrives" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Who Thrives at Clyros Tech
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <p className="text-sm leading-6 text-zinc-600">
              We hire experienced engineers who bring technical depth, professional maturity, and
              genuine commitment to engineering excellence. The following characteristics consistently
              predict success at Clyros Tech:
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <li className="text-sm leading-6 text-zinc-700">
                <span className="font-semibold text-zinc-900">Quality Over Speed</span> — You favor
                well-architected solutions over quick implementations. The phrase &quot;move fast and break
                things&quot; makes you uncomfortable when building production systems.
              </li>
              <li className="text-sm leading-6 text-zinc-700">
                <span className="font-semibold text-zinc-900">Clear Communication</span> — You write
                documentation without being asked. You can explain technical decisions to non-technical
                stakeholders. You surface problems early rather than hoping they resolve themselves.
              </li>
              <li className="text-sm leading-6 text-zinc-700">
                <span className="font-semibold text-zinc-900">Ownership and Accountability</span> — You
                take responsibility for outcomes, not just effort. You follow through on commitments.
                You don&apos;t wait for permission to solve problems within your scope.
              </li>
              <li className="text-sm leading-6 text-zinc-700">
                <span className="font-semibold text-zinc-900">Domain Respect</span> — You understand
                that healthcare, financial services, and public sector work carries responsibility. You
                take seriously the trust clients place in us when we access their systems and data.
              </li>
              <li className="text-sm leading-6 text-zinc-700">
                <span className="font-semibold text-zinc-900">Pragmatic Technology Choices</span> — You
                favor proven technologies and boring solutions that work over exciting ones that might.
                You understand that production systems are not playgrounds for experimentation.
              </li>
              <li className="text-sm leading-6 text-zinc-700">
                <span className="font-semibold text-zinc-900">Long-Term Mindset</span> — You build
                systems you&apos;ll be proud of years later. You think about operations, maintenance, and
                the next engineer who will work on your code.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section aria-labelledby="what-we-expect" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="what-we-expect" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            What We Expect
          </h2>
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Clyros Tech maintains high engineering standards and expects every team member to embody
              professional accountability. These are not aspirational values—they are daily operating
              requirements.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Technical Excellence</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Write production-quality code that others can maintain</li>
                <li>• Participate in code review with constructive feedback</li>
                <li>• Design systems for operations, not just deployment</li>
                <li>• Stay current with relevant technologies and best practices</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Client Delivery</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Meet commitments and communicate proactively when at risk</li>
                <li>• Represent Clyros Tech professionally in all client interactions</li>
                <li>• Escalate issues appropriately without creating client panic</li>
                <li>• Maintain confidentiality and data protection obligations</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Documentation & Knowledge</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Document architectural decisions and rationale</li>
                <li>• Maintain runbooks and operational procedures</li>
                <li>• Transfer knowledge systematically to clients and teammates</li>
                <li>• Write code that is self-documenting where possible</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Professional Conduct</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Treat colleagues, clients, and partners with respect</li>
                <li>• Raise concerns constructively through appropriate channels</li>
                <li>• Adhere to ethical standards and professional integrity</li>
                <li>• Support team members and contribute to collective success</li>
              </ul>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="what-we-offer" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="what-we-offer" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            What We Offer
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Challenging Work</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                No trivial projects. No throwaway prototypes. Every engagement involves meaningful
                technical complexity, regulatory constraints, or architectural significance. Your work
                will run in production environments serving millions of users, processing billions in
                transactions, or supporting critical infrastructure.
              </p>
            </article>
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Senior Peers</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Work alongside architects and principal engineers who have built systems at scale and
                navigated the hardest parts of enterprise delivery. Learn from people who have solved
                problems you&apos;re facing and who take mentorship seriously.
              </p>
            </article>
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Professional Development</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Structured training budget, conference attendance where relevant, certification support
                for cloud and specialized technologies, and dedicated time for skill development. We
                invest in capability building, not just project delivery.
              </p>
            </article>
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Sustainable Pace</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Enterprise consulting doesn&apos;t mean perpetual crisis. We staff projects appropriately,
                plan realistically, and respect personal time. Occasional deadlines require extra
                effort, but sustained overtime indicates planning failure, not dedication.
              </p>
            </article>
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Competitive Compensation</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Market-rate salaries benchmarked to enterprise consulting and technology services roles.
                Performance-based bonuses tied to individual contribution and company performance.
                Comprehensive benefits including health, retirement, and professional liability coverage.
              </p>
            </article>
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Remote-First Flexibility</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                We operate as a distributed team with optional office presence in select metros. Remote
                work is fully supported with occasional client site visits based on engagement needs and
                client requirements.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="hiring-process" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="hiring-process" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            How We Hire
          </h2>
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Our hiring process evaluates technical depth, problem-solving approach, communication
              ability, and cultural fit. We focus on real-world capability rather than algorithmic
              performance or whiteboard exercises.
            </p>
          </div>
          <div className="mt-10 rounded-xl border border-zinc-200 bg-zinc-50 p-8 lg:p-12">
            <ol className="list-decimal space-y-6 pl-5 text-sm leading-6 text-zinc-700">
              <li>
                <span className="font-semibold text-zinc-900">Application Review</span> — Every
                application is reviewed by engineering leadership, not filtered by automated systems or
                keyword matching. We look for depth of experience, demonstrated capability, and
                alignment with our technical focus areas.
              </li>
              <li>
                <span className="font-semibold text-zinc-900">Initial Conversation</span> — Brief
                discussion (30-45 minutes) with engineering leadership about your background, what
                you&apos;re looking for, and whether there&apos;s potential mutual fit. This is not an interview;
                it&apos;s a mutual exploration.
              </li>
              <li>
                <span className="font-semibold text-zinc-900">Technical Discussion</span> — In-depth
                conversation (60-90 minutes) with senior engineers about past projects, architectural
                decisions, technology choices, and lessons learned. We care more about how you think
                through problems than whether you&apos;ve used specific tools.
              </li>
              <li>
                <span className="font-semibold text-zinc-900">Problem-Solving Session</span> —
                Collaborative technical discussion (60-90 minutes) exploring how you approach real-world
                problems similar to our client work. No whiteboard algorithms, no coding challenges
                under time pressure. We discuss trade-offs, constraints, and decision-making.
              </li>
              <li>
                <span className="font-semibold text-zinc-900">Leadership & Culture Discussion</span> —
                Conversation with firm leadership about long-term goals, working style, expectations,
                and whether Clyros Tech is the right environment for the next phase of your career.
              </li>
              <li>
                <span className="font-semibold text-zinc-900">Decision & Offer</span> — If there&apos;s
                mutual alignment, we move quickly to extend an offer. We provide clear compensation
                details, benefits overview, and project context. We answer questions honestly and expect
                the same in return.
              </li>
            </ol>
            <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-6">
              <p className="text-sm leading-6 text-zinc-700">
                <span className="font-semibold text-zinc-900">Typical Timeline:</span> Most candidates
                complete the process within 2-3 weeks from initial conversation to offer decision. We
                respect your time and communicate decisions promptly at each stage.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-700">
                <span className="font-semibold text-zinc-900">Transparency:</span> We will never ghost
                you. If we decide not to move forward, we&apos;ll explain why. If you decide Clyros Tech
                isn&apos;t right for you, we appreciate direct feedback.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="open-positions" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="open-positions" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Open Positions
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="rounded-lg border border-zinc-200 bg-white p-8">
                <p className="text-sm font-semibold text-zinc-900">Current Hiring Focus</p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                  <li>• Senior Full-Stack Engineers (Java, .NET, Node.js, React)</li>
                  <li>• Cloud Architects (AWS, Azure, GCP)</li>
                  <li>• Data Engineers (Snowflake, Redshift, Kafka, Spark)</li>
                  <li>• DevOps Engineers (Kubernetes, Terraform, CI/CD)</li>
                  <li>• Security Engineers (AppSec, Cloud Security, Compliance)</li>
                  <li>• Principal Consultants (Enterprise Architecture, Advisory)</li>
                  <li>• Technical Delivery Managers (Client-facing, PMP preferred)</li>
                </ul>
                <p className="mt-4 text-sm leading-6 text-zinc-600">
                  Typical experience level: 5+ years for engineering roles, 8+ years for principal/architect roles.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-8">
                <h3 className="text-base font-semibold text-zinc-900">Location & Work Model</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Remote-first with optional office presence in select metros (Bangalore, Hyderabad, NCR).
                  Occasional client site visits based on engagement needs.
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  <span className="font-semibold text-zinc-700">Time Zone Coverage:</span> We support
                  India, US East Coast, and US West Coast time zones depending on client requirements.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="learn-more" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 lg:p-12">
            <h2 id="learn-more" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
              Learn More About Clyros Tech
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <Link
                href="/engineering-culture"
                className="rounded-lg border border-zinc-200 bg-white p-6 text-sm leading-6 text-zinc-700 hover:border-zinc-300"
              >
                <span className="font-semibold text-zinc-900">Engineering Culture & Standards →</span>
                <p className="mt-1 text-zinc-600">
                  Our engineering philosophy, code quality standards, and approach to technical decision-making.
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

      <section aria-labelledby="application-contact" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="application-contact" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Not Seeing the Right Role?
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600">
            We&apos;re always interested in speaking with exceptional engineers, even if we don&apos;t have an
            open position that perfectly matches your background. If you have deep expertise in
            enterprise systems, regulated industries, or complex technical domains, we&apos;d welcome a
            conversation about future opportunities.
          </p>

          <div className="mt-10 rounded-lg border border-zinc-200 bg-white p-8">
            <h3 className="text-base font-semibold text-zinc-900">Apply or Inquire</h3>
            <dl className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold text-zinc-900">Email</dt>
                <dd className="mt-1 text-sm text-zinc-700">
                  <a className="font-medium text-zinc-900 hover:underline" href="mailto:careers@clyrostech.com">
                    careers@clyrostech.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-zinc-900">What to Include</dt>
                <dd className="mt-1 text-sm leading-6 text-zinc-700">
                  Resume/CV and brief note about what interests you about Clyros Tech and what you&apos;re
                  looking for in your next role.
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-sm leading-6 text-zinc-600">
              <span className="font-semibold text-zinc-700">We review all applications:</span> Every
              application is reviewed by engineering leadership within 5 business days. We respond to
              every serious inquiry.
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="eoe" className="border-t border-zinc-200/70 pt-10 lg:pt-14">
        <Container>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-sm leading-6 text-zinc-700">
              <span className="font-semibold text-zinc-900">Equal Opportunity & Professional Conduct</span>
            </p>
            <p className="mt-2 text-xs leading-5 text-zinc-600">
              Clyros Tech is committed to building a diverse team and providing equal employment
              opportunity regardless of race, color, religion, gender, sexual orientation, gender
              identity, national origin, age, disability, veteran status, or any other protected
              characteristic. We evaluate candidates based on technical capability, professional
              maturity, and alignment with our engineering standards.
            </p>
            <p className="mt-3 text-xs leading-5 text-zinc-600">
              We maintain a professional work environment that respects all individuals and does not
              tolerate harassment, discrimination, or unprofessional conduct.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
