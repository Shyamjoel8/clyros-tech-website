import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Leadership & Governance",
  description:
    "Leadership approach, delivery ownership, and governance principles at Clyros Tech Private Limited.",
  alternates: { canonical: "/leadership" },
  openGraph: {
    title: "Leadership & Governance | Clyros Tech",
    description:
      "Leadership approach, delivery ownership, and governance principles at Clyros Tech Private Limited.",
    url: "/leadership",
  },
};

export default function LeadershipPage() {
  return (
    <div className="space-y-14 py-14 lg:space-y-20 lg:py-20">
      <header className="pb-2">
        <Container>
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-zinc-900 lg:text-5xl">
            Leadership &amp; Governance
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 lg:text-xl">
            Clyros Tech is led by practicing engineers and architects who remain actively engaged in
            delivery. Our leadership approach emphasizes technical accountability, transparent
            governance, and unwavering commitment to client outcomes.
          </p>
        </Container>
      </header>

      <section aria-labelledby="approach" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="approach" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Leadership Approach
          </h2>

          <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Clyros Tech does not separate technical leadership from delivery accountability. Our
              senior leadership team consists of architects, principal engineers, and delivery leaders
              who have built and operated systems at scale. They understand the work because they do
              the work.
            </p>
            <p>
              This structure ensures technical decisions are made by people who will live with the
              consequences, client relationships are managed by people who understand the complexity,
              and organizational strategy is grounded in operational reality.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Technical Leadership</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Our technical leaders are practicing architects who participate in architecture
                reviews, design discussions, and critical technical decisions across client
                engagements. They mentor engineering teams, establish technical standards, and serve
                as escalation points for complex technical challenges.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                They do not make decisions from conference rooms. They engage with code, review
                designs, participate in production incident responses, and maintain direct connection
                to delivery reality.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Delivery Leadership</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Our delivery leaders manage client relationships, program governance, and commercial
                accountability. They have deep technical backgrounds and understand the work well
                enough to assess risk, identify gaps, and make informed commitments to clients.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                They do not hand off accountability to project managers. They own client outcomes,
                delivery timelines, and escalation management. When issues arise, they engage directly
                rather than adding layers of intermediaries.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Servant Leadership</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Leadership exists to enable engineering teams to do their best work. This means
                removing blockers, providing context, facilitating decisions, and shielding teams from
                organizational noise that doesn&apos;t require their attention.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                It also means taking accountability when things go wrong. Leaders do not blame their
                teams. They take responsibility for outcomes and work to address systemic issues that
                contributed to problems.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Transparency and Trust</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                We share information openly with our teams. Engineers understand business context,
                client expectations, and organizational constraints. They know why decisions are made,
                not just what they&apos;re asked to build.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                This transparency builds trust and enables better decision-making at all levels.
                Engineers who understand the bigger picture make better choices within their scope of
                responsibility.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="delivery-ownership" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="delivery-ownership" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Delivery Ownership
          </h2>

          <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Clyros Tech takes full ownership of delivery outcomes. We do not make excuses. We do not
              blame clients for changing requirements or unclear specifications. We do not point
              fingers at subcontractors or partners. We own the result.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Proactive Communication</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                We communicate project status transparently and frequently. Clients are never surprised
                by missed deadlines, scope challenges, or technical risks. We surface problems early
                when there is still time to address them.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Status reports are honest. Red means red, not yellow in transition. When we commit to
                delivery dates, we build in appropriate contingency. When risks materialize, we
                escalate immediately with mitigation options.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Quality Without Compromise</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                We do not ship code we know to be deficient. If delivering by a deadline requires
                cutting quality corners, we renegotiate the timeline or scope. We do not create
                technical debt knowingly and we do not pass operational problems to client teams.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                This sometimes means uncomfortable conversations with clients about what is realistic.
                We prefer short-term discomfort over long-term regret. Production systems deserve
                better than hope-based deployment strategies.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Post-Deployment Accountability</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Our commitment does not end at deployment. We provide stabilization support, monitor
                production performance, and address post-launch issues promptly. We do not declare
                victory and move on while systems are unstable.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                For managed services engagements, we maintain operational responsibility with defined
                SLAs and proactive monitoring. For project-based work, we remain available during
                transition periods and respond to production issues discovered after handoff.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="governance" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="governance" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Governance and Oversight
          </h2>

          <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Clyros Tech maintains disciplined governance processes that balance control with
              autonomy. We provide appropriate oversight without micromanagement, clear escalation
              paths without bureaucracy, and risk management without paralysis.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Project Governance</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Regular status reviews with client stakeholders</li>
                <li>• Risk and issue tracking with clear ownership</li>
                <li>• Change control for scope, schedule, and budget modifications</li>
                <li>• Quality gates at major milestone transitions</li>
                <li>• Escalation procedures for urgent issues</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Technical Governance</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Architecture review for significant design decisions</li>
                <li>• Security review for all production deployments</li>
                <li>• Code review by senior engineers before merge</li>
                <li>• Performance testing before production release</li>
                <li>• Post-deployment monitoring and health checks</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Compliance Oversight</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Regular compliance assessments for regulated industries</li>
                <li>• Security controls aligned with SOC 2 and ISO standards</li>
                <li>• Data protection procedures for HIPAA, GDPR contexts</li>
                <li>• Audit trail and documentation requirements</li>
                <li>• Third-party audit coordination and remediation</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Financial Governance</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Project budgets tracked against actuals</li>
                <li>• Burn rate monitoring and forecasting</li>
                <li>• Change order process for scope modifications</li>
                <li>• Transparent invoicing and expense tracking</li>
                <li>• Regular financial reviews with client stakeholders</li>
              </ul>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="client-accountability" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="client-accountability" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Client Accountability
          </h2>

          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <div className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>
                Every engagement begins with clear success criteria agreed upon by both Clyros Tech and
                the client. These criteria are specific, measurable, and documented. They form the
                basis for evaluating whether we have delivered on our commitments.
              </p>
              <p>
                We measure success by outcomes, not effort. Delivering on time and within budget is
                necessary but not sufficient. Systems must work as intended, meet performance
                requirements, satisfy security standards, and be operable by the client team.
              </p>
              <p>
                When we fall short of commitments, we acknowledge it directly. We conduct internal
                retrospectives to understand what went wrong and how to prevent recurrence. We apply
                these lessons to future engagements. Learning from failure is how organizations
                improve.
              </p>
              <p>
                When clients are satisfied with our work, we ask for honest feedback and permission to
                document the engagement as a case study (in anonymized form). Client success is our
                success, and we celebrate it appropriately.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="ethical-standards" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="ethical-standards" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Ethical and Professional Standards
          </h2>

          <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Clyros Tech operates with integrity in all client, partner, and employee relationships.
              We adhere to ethical standards that go beyond legal compliance to encompass professional
              responsibility and moral obligation.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Honesty and Transparency</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                We tell clients the truth, even when it is uncomfortable. If we lack expertise in a
                domain, we say so rather than pretending competence. If a project is at risk, we
                escalate early. If requirements are unrealistic, we explain why rather than accepting
                doomed commitments.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                This honesty extends to internal relationships. Engineers are encouraged to surface
                concerns, challenge decisions, and speak up when something is wrong. We do not punish
                bearers of bad news.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Confidentiality and Data Protection</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Clients trust us with access to their systems, data, and confidential business
                information. We take this trust seriously. All client information is protected under
                NDAs, handled according to data protection regulations, and accessed only by authorized
                personnel for legitimate business purposes.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                We do not discuss client projects in public forums, share client data with
                unauthorized parties, or use client systems for purposes beyond the defined scope. Data
                protection is not just a legal requirement; it is a professional obligation.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Conflicts of Interest</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                We avoid situations where personal interests conflict with client interests. We do not
                accept gifts or incentives that could influence our technical recommendations. We
                disclose any relationships that might create actual or perceived conflicts.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                When technology vendor partnerships exist, we disclose them to clients and ensure
                recommendations are based on technical merit rather than commercial incentives.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Respectful Workplace</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Clyros Tech maintains a professional work environment that treats all individuals with
                respect. We do not tolerate harassment, discrimination, or unprofessional conduct. We
                address concerns promptly and take appropriate action when standards are violated.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Disagreements about technical decisions are normal and healthy. Personal attacks,
                demeaning language, and disrespectful behavior are not. We can debate ideas vigorously
                while maintaining professionalism and mutual respect.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="continuous-improvement" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 lg:p-12">
            <h2 id="continuous-improvement" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
              Continuous Improvement
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600">
              Leadership practices, governance processes, and organizational standards evolve based on
              experience and lessons learned. We conduct regular retrospectives, solicit feedback from
              teams and clients, and adapt our approach when we identify better ways of working.
            </p>
            <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-600">
              This page describes how we operate today. It will be different tomorrow as we continue
              learning and improving. The commitment to excellence, accountability, and integrity
              remains constant.
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="learn-more" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <div className="rounded-xl border border-zinc-200 bg-white p-8 lg:p-12">
            <h2 id="learn-more" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
              Learn More
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <Link
                href="/careers"
                className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 text-sm leading-6 text-zinc-700 hover:border-zinc-300"
              >
                <span className="font-semibold text-zinc-900">Careers at Clyros Tech →</span>
                <p className="mt-1 text-zinc-600">
                  Open positions, hiring process, and what we look for in engineering candidates.
                </p>
              </Link>
              <Link
                href="/engineering-culture"
                className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 text-sm leading-6 text-zinc-700 hover:border-zinc-300"
              >
                <span className="font-semibold text-zinc-900">Engineering Culture & Standards →</span>
                <p className="mt-1 text-zinc-600">
                  Our engineering philosophy, code quality standards, and technical decision-making.
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
