import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Global Delivery & Presence",
  description:
    "International client support and distributed delivery approach at Clyros Tech Private Limited.",
  alternates: { canonical: "/global-delivery" },
  openGraph: {
    title: "Global Delivery & Presence | Clyros Tech",
    description:
      "International client support and distributed delivery approach at Clyros Tech Private Limited.",
    url: "/global-delivery",
  },
};

export default function GlobalDeliveryPage() {
  return (
    <div className="space-y-14 py-14 lg:space-y-20 lg:py-20">
      <header className="pb-2">
        <Container>
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-zinc-900 lg:text-5xl">
            Global Delivery &amp; Presence
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 lg:text-xl">
            Clyros Tech supports international clients through distributed delivery models that
            accommodate timezone requirements, regulatory contexts, and organizational governance
            frameworks.
          </p>
        </Container>
      </header>

      <section aria-labelledby="client-support" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="client-support" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Global Client Support Overview
          </h2>
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Clyros Tech Private Limited is headquartered in India and maintains delivery capability
              that serves clients in the United States, Europe, and other international markets. We
              structure engagements to accommodate client timezone preferences, regulatory
              requirements, and communication expectations.
            </p>
            <p>
              Our approach to international delivery emphasizes transparent communication, clear
              governance, and adherence to applicable regulatory frameworks. We do not claim physical
              office presence in every market we serve. Instead, we deliver services through
              distributed teams configured to meet specific client needs.
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="delivery-model" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="delivery-model" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Distributed Delivery Model
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Remote-First Operations</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Clyros Tech operates as a distributed organization. Engineers work from locations
                across India with flexibility to accommodate international client timezone
                requirements. This model enables coverage across India Standard Time (IST), US
                Eastern/Pacific, and European timezones based on engagement needs.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Client Site Presence</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Where client requirements mandate on-site presence, Clyros Tech engineers can travel
                to client facilities for kickoffs, architecture reviews, knowledge transfer sessions,
                or production cutover support. On-site work is structured based on specific engagement
                needs and client preferences.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Hybrid Engagement Models</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Many engagements combine remote delivery with periodic on-site presence. This hybrid
                approach balances cost efficiency with face-to-face collaboration benefits. We work
                with clients to determine appropriate ratios of remote and on-site work based on
                project phase and technical requirements.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Tool &amp; Platform Flexibility</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                We adapt to client collaboration platforms (Microsoft Teams, Slack, Zoom, Google
                Meet), project management tools (Jira, Azure DevOps, Asana), and code repositories
                (GitHub, GitLab, Bitbucket). Our teams are experienced working within client IT
                environments and security policies.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="timezone" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="timezone" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Timezone &amp; Collaboration Approach
          </h2>
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Clyros Tech structures team schedules to provide working hours overlap with client
              locations. The extent of overlap depends on client geography and engagement requirements.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">US Clients</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                <strong>Eastern Time:</strong> 4-6 hour overlap depending on team member schedules
                and daylight saving adjustments.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                <strong>Pacific Time:</strong> 1-3 hour overlap with standard IST business hours;
                extended coverage available based on engagement needs.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                For production support or urgent issues, extended hours coverage can be arranged with
                appropriate notice and staffing.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">European Clients</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                <strong>UK/GMT:</strong> 5-6 hour overlap with standard IST business hours.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                <strong>Central European Time:</strong> 4-5 hour overlap with IST working hours.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                European engagements typically benefit from substantial daily overlap for real-time
                collaboration.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Asia-Pacific Clients</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Regional clients benefit from same or adjacent timezone operation, enabling full
                business hours overlap.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                For clients in Southeast Asia, Australia, or other APAC markets, we can provide
                coverage aligned with local business hours.
              </p>
            </article>
          </div>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-sm leading-6 text-zinc-700">
              <strong className="text-zinc-900">Asynchronous Collaboration:</strong> Not all work
              requires real-time communication. We use documentation, recorded demos, and structured
              handoffs to maintain progress across timezone boundaries. Many technical tasks
              (development, testing, infrastructure provisioning) proceed effectively with
              asynchronous coordination.
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="communication" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="communication" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Client Communication &amp; Governance
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Regular Status Updates</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Daily standups scheduled during timezone overlap windows</li>
                <li>• Weekly progress reports covering accomplishments, risks, and blockers</li>
                <li>• Sprint demos and retrospectives for Agile engagements</li>
                <li>• Monthly executive summaries for program-level oversight</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Escalation Procedures</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Technical Lead: First point of escalation for technical issues</li>
                <li>• Delivery Manager: Escalation for schedule, scope, or resource concerns</li>
                <li>• Executive Leadership: Final escalation for critical issues</li>
                <li>• Response times defined in engagement agreements</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Documentation Standards</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Architecture documentation maintained in client repositories</li>
                <li>• Meeting notes and decisions documented in shared systems</li>
                <li>• Code documentation written in English</li>
                <li>• Runbooks and operational procedures provided at handoff</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Primary Contact Points</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Email: info@clyrostech.com (monitored during IST business hours)</li>
                <li>• Engagement-specific contacts provided at project start</li>
                <li>• Emergency escalation contacts for production incidents</li>
                <li>• Response expectations defined in engagement agreements</li>
              </ul>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="regional" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="regional" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Regional Engagement Considerations
          </h2>

          <div className="mt-10 space-y-6">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                United States
              </h3>
              <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                <p>
                  <strong className="text-zinc-900">Contracting:</strong> Clyros Tech can engage
                  directly with US clients or through established US-based partners. We accommodate
                  US corporate procurement requirements including W-9 documentation, commercial
                  insurance certificates, and standard MSA/SOW structures.
                </p>
                <p>
                  <strong className="text-zinc-900">Compliance Awareness:</strong> US engagements may
                  involve HIPAA (healthcare), SOX (financial services), FedRAMP (government), or
                  industry-specific regulatory requirements. We structure delivery to support client
                  compliance obligations.
                </p>
                <p>
                  <strong className="text-zinc-900">Data Handling:</strong> For engagements requiring
                  US data residency, we work with clients to establish appropriate cloud
                  infrastructure configurations and access controls. See our{" "}
                  <Link href="/data-privacy" className="font-medium text-zinc-900 hover:underline">
                    Data Privacy page
                  </Link>{" "}
                  for details.
                </p>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                Europe
              </h3>
              <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                <p>
                  <strong className="text-zinc-900">GDPR Awareness:</strong> European engagements
                  involving personal data are structured to align with GDPR requirements including
                  data processing agreements, appropriate technical and organizational measures, and
                  cross-border transfer mechanisms where applicable.
                </p>
                <p>
                  <strong className="text-zinc-900">Language:</strong> Technical work conducted in
                  English. Client-facing materials and documentation provided in English unless
                  otherwise specified in engagement scope.
                </p>
                <p>
                  <strong className="text-zinc-900">Contracting:</strong> We accommodate European
                  contract structures and legal frameworks. Engagements may involve data processing
                  agreements, GDPR addendums, and appropriate liability provisions.
                </p>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                Other International Markets
              </h3>
              <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                <p>
                  Clyros Tech is delivery-ready for clients in Middle East, Southeast Asia,
                  Australia, and other markets. Each engagement is structured based on local
                  regulatory context, timezone requirements, and client governance frameworks.
                </p>
                <p>
                  We conduct jurisdiction-specific risk assessment before committing to engagements
                  in new markets to ensure we can meet applicable legal and regulatory requirements.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="engage" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 lg:p-12">
            <h2 id="engage" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
              Engage with Clyros Tech Globally
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600">
              We welcome inquiries from organizations worldwide. Initial conversations address your
              location, timezone preferences, regulatory context, and engagement requirements to
              determine appropriate delivery structure.
            </p>
            <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-600">
              Contact us at{" "}
              <a href="mailto:info@clyrostech.com" className="font-medium text-zinc-900 hover:underline">
                info@clyrostech.com
              </a>{" "}
              with information about your organization, project context, and location. We respond to
              international inquiries within 1-2 business days (IST business hours).
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-[rgb(var(--accent))] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[rgb(var(--accent-hover))]"
              >
                Contact Clyros Tech
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="learn-more" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <div className="rounded-xl border border-zinc-200 bg-white p-8 lg:p-12">
            <h2 id="learn-more" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
              Related Information
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <Link
                href="/data-privacy"
                className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 text-sm leading-6 text-zinc-700 hover:border-zinc-300"
              >
                <span className="font-semibold text-zinc-900">Data Privacy & Cross-Border Compliance →</span>
                <p className="mt-1 text-zinc-600">
                  Our approach to data protection, regulatory alignment, and cross-border data handling.
                </p>
              </Link>
              <Link
                href="/capabilities"
                className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 text-sm leading-6 text-zinc-700 hover:border-zinc-300"
              >
                <span className="font-semibold text-zinc-900">Technical Capabilities →</span>
                <p className="mt-1 text-zinc-600">
                  Technologies, methodologies, and delivery frameworks we bring to international engagements.
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
