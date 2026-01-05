import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Partners & Alliances",
  description:
    "Partnership approach and alliance opportunities with Clyros Tech Private Limited.",
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "Partners & Alliances | Clyros Tech",
    description:
      "Partnership approach and alliance opportunities with Clyros Tech Private Limited.",
    url: "/partners",
  },
};

export default function PartnersPage() {
  return (
    <div className="space-y-14 py-14 lg:space-y-20 lg:py-20">
      <header className="pb-2">
        <Container>
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-zinc-900 lg:text-5xl">
            Partners &amp; Alliances
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 lg:text-xl">
            Clyros Tech collaborates with organizations that share our commitment to engineering
            excellence, client accountability, and long-term value creation.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600 lg:text-xl">
            We pursue partnerships that strengthen our delivery capabilities, expand our domain
            expertise, and enhance the outcomes we deliver to enterprise clients.
          </p>
        </Container>
      </header>

      <section aria-labelledby="approach" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="approach" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Our Approach to Partnerships
          </h2>
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Clyros Tech views partnerships as strategic relationships built on complementary
              capabilities, shared accountability, and aligned incentives. We do not pursue
              partnerships for volume or market presence—we engage with organizations that enhance
              our ability to solve complex client problems.
            </p>
            <p>
              Every partnership is governed by clear agreements defining scope, responsibilities,
              intellectual property, and escalation procedures. We maintain transparency with
              clients about partner roles and ensure consistent delivery standards regardless of
              organizational boundaries.
            </p>
            <p>
              We prioritize depth over breadth—investing in fewer, more substantive relationships
              rather than maintaining a broad network of superficial alliances.
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="why-partner" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="why-partner" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Why Partner with Clyros Tech
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Technical Depth</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Our engineering teams bring proven expertise in enterprise software, data platforms,
                cloud infrastructure, and regulated-industry delivery. Partners gain access to
                technical capabilities that complement their own service offerings.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Delivery Rigor</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                We apply disciplined engineering practices, comprehensive documentation, and
                structured knowledge transfer to every engagement. Partners can rely on consistent
                execution and transparent communication.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Domain Fluency</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Our experience spans healthcare, financial services, government, manufacturing, and
                other regulated industries. We understand compliance requirements, procurement
                processes, and organizational dynamics in complex enterprise environments.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Client Accountability</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                We take responsibility for outcomes, not just effort. Partners value our commitment
                to client success, honest communication, and willingness to address issues directly.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="partnership-types" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="partnership-types" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Types of Partnerships
          </h2>

          <div className="mt-10 space-y-8">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                Technology Partners
              </h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Organizations whose platforms, tools, or infrastructure products are central to our
                client delivery. Technology partnerships enable deeper integration expertise,
                specialized training, and early access to emerging capabilities.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                We pursue technology partnerships where we have demonstrated delivery experience and
                where closer collaboration enhances client outcomes.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                Delivery Partners
              </h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Consulting firms, systems integrators, and specialized service providers with whom we
                jointly deliver client engagements. Delivery partnerships bring complementary
                capabilities—domain expertise, regional presence, or specialized skill sets—that
                expand the scope of problems we can solve.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                These relationships are governed by clear role definitions, joint delivery frameworks,
                and shared accountability to the client.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                Research &amp; Academic Partners
              </h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Universities, research institutions, and applied research organizations exploring
                emerging technologies, methodologies, or domain-specific innovations. Academic
                partnerships provide access to cutting-edge research, specialized talent, and
                opportunities to contribute to the broader technology community.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                We engage in research partnerships where findings have practical application to
                enterprise technology challenges.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="engagement" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="engagement" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            How We Engage with Partners
          </h2>

          <div className="mt-8 max-w-3xl space-y-6 text-base leading-7 text-zinc-600">
            <div>
              <h3 className="text-base font-semibold text-zinc-900">Discovery &amp; Alignment</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Initial discussions focus on complementary capabilities, shared client focus, and
                alignment of delivery standards. We assess technical fit, cultural compatibility, and
                potential for meaningful collaboration.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-zinc-900">Pilot Engagement</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Where appropriate, we begin with a limited-scope pilot project to validate delivery
                compatibility, communication effectiveness, and joint problem-solving capability
                before committing to broader collaboration.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-zinc-900">Formal Agreement</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Successful pilots lead to formal partnership agreements defining scope, intellectual
                property, confidentiality, commercial terms, and governance procedures. All
                agreements are reviewed by legal and executive leadership.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-zinc-900">Ongoing Collaboration</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Active partnerships include regular business reviews, joint planning sessions, and
                continuous evaluation of delivery effectiveness. We maintain transparent
                communication about successes, challenges, and opportunities for improvement.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="governance" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="governance" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Governance &amp; Accountability
          </h2>

          <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-zinc-600">
            <p>
              All partnerships operate under defined governance frameworks that clarify roles,
              responsibilities, decision-making authority, and escalation procedures. For joint
              client engagements, we establish:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
              <li>Clear scope boundaries and interface points</li>
              <li>Defined communication protocols and status reporting</li>
              <li>Joint issue resolution and risk management procedures</li>
              <li>Client transparency about partner roles and responsibilities</li>
              <li>Shared accountability for delivery outcomes</li>
            </ul>
            <p className="mt-4">
              We do not outsource accountability. Even in partnership engagements, Clyros Tech
              maintains responsibility for our deliverables, quality standards, and client
              commitments.
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="partner-cta" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <div className="rounded-xl border border-zinc-200 bg-white p-8 lg:p-12">
            <h2 id="partner-cta" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
              Partner with Clyros Tech
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600">
              We welcome inquiries from organizations interested in exploring partnership
              opportunities. Initial discussions focus on strategic fit, complementary capabilities,
              and potential for meaningful collaboration.
            </p>
            <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-600">
              Partnership inquiries are reviewed by our leadership team and responded to within 3-5
              business days.
            </p>
            <div className="mt-6">
              <Link
                href="/partners/contact"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-[rgb(var(--accent))] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[rgb(var(--accent-hover))]"
              >
                Submit Partnership Inquiry
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
