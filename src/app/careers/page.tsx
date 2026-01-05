import type { Metadata } from "next";

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
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-zinc-900 lg:text-5xl">
            Build Systems That Matter
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 lg:text-xl">
            Clyros Tech is built by senior engineers who chose depth over scale. We work on complex
            problems for sophisticated clients who demand excellence. If you value craft, appreciate
            rigor, and want to work on systems that can&apos;t afford to fail, let&apos;s talk.
          </p>
        </div>
      </header>

      <section aria-labelledby="what-we-offer" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="what-we-offer" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            What We Offer
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Challenging Work</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                No trivial projects. No throwaway prototypes. Every engagement involves meaningful
                technical complexity, regulatory constraints, or architectural significance.
              </p>
            </article>
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Senior Peers</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Work alongside architects and principal engineers who have built systems at scale and
                navigated the hardest parts of enterprise delivery.
              </p>
            </article>
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Client Impact</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Your work will run in production environments serving millions of users, processing
                billions in transactions, or supporting critical infrastructure.
              </p>
            </article>
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Learning Investment</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Structured training budget, conference attendance, certification support, and
                dedicated time for professional development.
              </p>
            </article>
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Work-Life Balance</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Enterprise consulting doesn&apos;t mean perpetual crisis. We staff appropriately, plan
                realistically, and respect personal time.
              </p>
            </article>
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Competitive Compensation</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Market-rate salaries, performance bonuses, comprehensive benefits, and equity
                participation for senior leadership.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="who-thrives" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="who-thrives" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Who Thrives Here
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <li className="text-sm leading-6 text-zinc-700">
                <span className="font-semibold text-zinc-900">You Value Quality Over Speed</span> — We
                favor well-architected solutions over quick hacks. If &quot;move fast and break things&quot;
                makes you uncomfortable, you&apos;ll fit in.
              </li>
              <li className="text-sm leading-6 text-zinc-700">
                <span className="font-semibold text-zinc-900">You Communicate Clearly</span> —
                Enterprise delivery requires documentation, knowledge transfer, and explaining
                technical concepts to non-technical stakeholders.
              </li>
              <li className="text-sm leading-6 text-zinc-700">
                <span className="font-semibold text-zinc-900">You Take Ownership</span> — We trust our
                teams to make decisions, surface problems early, and drive initiatives to completion
                without micromanagement.
              </li>
              <li className="text-sm leading-6 text-zinc-700">
                <span className="font-semibold text-zinc-900">You Respect the Domain</span> —
                Healthcare, financial services, and public sector work comes with responsibility. We
                take seriously the trust our clients place in us.
              </li>
              <li className="text-sm leading-6 text-zinc-700 lg:col-span-2">
                <span className="font-semibold text-zinc-900">You&apos;re Pragmatic</span> — We use proven
                technologies and favor boring solutions that work over exciting ones that might. If
                that sounds appealing, we should talk.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="open-positions" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="open-positions" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Open Positions
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="rounded-lg border border-zinc-200 bg-white p-8">
                <p className="text-sm leading-6 text-zinc-600">We&apos;re currently seeking:</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                  <li>Senior Full-Stack Engineers</li>
                  <li>Cloud Architects (AWS/Azure)</li>
                  <li>DevOps Engineers</li>
                  <li>Data Engineers</li>
                  <li>Security Engineers</li>
                  <li>Principal Consultants</li>
                  <li>Technical Project Managers</li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-8">
                <h3 className="text-base font-semibold text-zinc-900">Location</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  We operate as a distributed team with optional office presence in select metros.
                  Remote work is fully supported with occasional client site visits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="application-process" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 lg:p-12">
            <h2 id="application-process" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
              Application Process
            </h2>
            <ol className="mt-6 list-decimal space-y-3 pl-5 text-sm leading-6 text-zinc-700">
              <li>
                <span className="font-semibold text-zinc-900">Initial Conversation</span> — Brief
                discussion about your background, interests, and what you&apos;re looking for.
              </li>
              <li>
                <span className="font-semibold text-zinc-900">Technical Discussion</span> — Conversation
                with senior engineers about past projects, architectural decisions, and technical
                approach.
              </li>
              <li>
                <span className="font-semibold text-zinc-900">Problem-Solving Session</span> —
                Collaborative technical discussion exploring how you approach real-world problems (no
                whiteboard algorithms).
              </li>
              <li>
                <span className="font-semibold text-zinc-900">Leadership Discussion</span> — Conversation
                about fit, culture, and mutual expectations.
              </li>
              <li>
                <span className="font-semibold text-zinc-900">Offer</span> — If there&apos;s mutual
                alignment, we move quickly to extend an offer.
              </li>
            </ol>
            <p className="mt-4 text-sm leading-6 text-zinc-600">
              <span className="font-semibold text-zinc-900">Timeline:</span> Most candidates complete the
              process within 2-3 weeks.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="not-seeing-role" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="not-seeing-role" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Not Seeing the Right Role?
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-600">
            We&apos;re always interested in speaking with exceptional engineers, even if we don&apos;t have an
            open position that perfectly matches your background.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600">
            If you have deep expertise in enterprise systems, regulated industries, or complex
            technical domains, we&apos;d welcome a conversation about future opportunities.
          </p>

          <div className="mt-10 rounded-lg border border-zinc-200 bg-white p-8">
            <h3 className="text-base font-semibold text-zinc-900">Contact</h3>
            <dl className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold text-zinc-900">General Inquiries</dt>
                <dd className="mt-1 text-sm text-zinc-700">
                  <a className="font-medium text-zinc-900 hover:underline" href="mailto:careers@clyrostech.com">
                    careers@clyrostech.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-zinc-900">Experienced Hires</dt>
                <dd className="mt-1 text-sm leading-6 text-zinc-700">
                  Include your resume and a brief note about what interests you about Clyros Tech.
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-sm leading-6 text-zinc-600">
              We Review All Applications: Every application is reviewed by engineering leadership, not
              filtered by automated systems.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="eoe" className="border-t border-zinc-200/70 pt-10 lg:pt-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p id="eoe" className="text-xs leading-5 text-zinc-500">
            <span className="font-semibold text-zinc-700">Equal Opportunity Employer</span> — Clyros Tech
            is committed to building a diverse team and providing equal employment opportunity
            regardless of race, color, religion, gender, sexual orientation, gender identity, national
            origin, age, disability, veteran status, or any other protected characteristic.
          </p>
        </div>
      </section>
    </div>
  );
}

