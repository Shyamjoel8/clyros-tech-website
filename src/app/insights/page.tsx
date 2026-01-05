import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Insights & Perspectives",
  description:
    "Technology perspectives and analytical viewpoints from Clyros Tech Private Limited on enterprise software delivery.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights & Perspectives | Clyros Tech",
    description:
      "Technology perspectives and analytical viewpoints from Clyros Tech Private Limited on enterprise software delivery.",
    url: "/insights",
  },
};

export default function InsightsPage() {
  return (
    <div className="space-y-14 py-14 lg:space-y-20 lg:py-20">
      <header className="pb-2">
        <Container>
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-zinc-900 lg:text-5xl">
            Insights &amp; Perspectives
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 lg:text-xl">
            Analytical perspectives on enterprise technology delivery, informed by direct experience
            building and operating systems in complex, regulated environments.
          </p>
        </Container>
      </header>

      <section aria-labelledby="why-publish" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="why-publish" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Why We Publish Perspectives
          </h2>
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Clyros Tech publishes perspectives to share lessons learned from enterprise delivery,
              document recurring challenges we observe across client engagements, and contribute to
              more informed technology decision-making in regulated industries.
            </p>
            <p>
              We do not publish to generate leads, chase trends, or position ourselves as
              visionaries. We write about problems we have actually solved, mistakes we have made,
              and considerations that matter in production environments serving real users.
            </p>
            <p>
              Our perspectives are written for technical leaders, architects, and enterprise
              decision-makers who value analytical rigor over promotional content. We assume readers
              are capable of drawing their own conclusions.
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="focus-areas" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="focus-areas" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            What We Focus On
          </h2>
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-zinc-600">
            <p>
              We write about enduring challenges in enterprise technology, not passing trends. Our
              perspectives address topics that remain relevant across technology cycles and that
              reflect tensions inherent in building complex systems under real-world constraints.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="rounded-lg border border-zinc-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-zinc-900">Engineering Trade-offs</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Decisions about architecture, technology selection, and implementation approach
                involve trade-offs between competing objectives. We explore these tensions and the
                factors that influence choices in enterprise contexts.
              </p>
            </article>
            <article className="rounded-lg border border-zinc-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-zinc-900">Regulated Industry Delivery</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Healthcare, financial services, and public sector work carries unique constraints.
                We examine how regulatory requirements, compliance obligations, and risk postures
                influence technical decisions.
              </p>
            </article>
            <article className="rounded-lg border border-zinc-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-zinc-900">Operational Reality</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Systems must be operated, not just deployed. We focus on operational considerations,
                failure modes, monitoring requirements, and the gap between architectural diagrams
                and production reality.
              </p>
            </article>
            <article className="rounded-lg border border-zinc-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-zinc-900">Governance &amp; Process</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Technology decisions occur within organizational and procurement contexts. We address
                governance frameworks, change management, and the human factors that determine
                whether technical initiatives succeed.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="development" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="development" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            How Perspectives Are Developed
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <div className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>
                Our perspectives emerge from patterns observed across multiple client engagements,
                not from individual projects or theoretical speculation. When we identify recurring
                challenges, misalignments, or decision-making tensions, we document them for
                internal discussion.
              </p>
              <p>
                Draft perspectives are reviewed by delivery leadership and practicing engineers who
                can validate that claims reflect actual experience and that conclusions are
                supportable. We do not publish opinions that cannot be defended with specific
                examples.
              </p>
              <p>
                All perspectives are written under author attribution by senior engineers and
                architects at Clyros Tech. We do not outsource content development or publish
                AI-generated material without substantial human authorship and editorial oversight.
              </p>
              <p>
                Client-specific details are removed or anonymized. We do not disclose proprietary
                information, client-identifiable projects, or sensitive implementation details. What
                we publish reflects general insights applicable across multiple contexts.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="featured" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="featured" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Featured Perspectives
          </h2>
          <div className="mt-10 space-y-6">
            <article className="rounded-lg border border-zinc-200 bg-white p-8 hover:border-zinc-300">
              <Link href="/insights/engineering-rigor">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                  Why Engineering Rigor Still Matters in Enterprise Software
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Examining why disciplined engineering practices remain essential in enterprise
                  contexts despite pressure to move faster, the costs of technical debt in
                  production systems, and the relationship between process rigor and delivery
                  predictability.
                </p>
                <p className="mt-4 text-sm font-medium text-zinc-900">Read perspective →</p>
              </Link>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8 hover:border-zinc-300">
              <Link href="/insights/ai-regulated-environments">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                  Applying AI Responsibly in Regulated Environments
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Exploring the gap between AI capabilities and enterprise adoption requirements,
                  considerations for deploying AI in regulated industries, and the governance
                  frameworks needed to manage model risk and algorithmic accountability.
                </p>
                <p className="mt-4 text-sm font-medium text-zinc-900">Read perspective →</p>
              </Link>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8 hover:border-zinc-300">
              <Link href="/insights/cloud-governance">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                  Cloud Adoption Without Governance Is Not Transformation
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Analyzing why cloud migrations often fail to deliver expected benefits, the role
                  of governance in controlling cloud sprawl and cost overruns, and what successful
                  cloud adoption requires beyond infrastructure migration.
                </p>
                <p className="mt-4 text-sm font-medium text-zinc-900">Read perspective →</p>
              </Link>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="engagement" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 lg:p-12">
            <h2 id="engagement" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
              Engagement
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600">
              We welcome substantive discussion about the topics addressed in our perspectives. If
              you are facing similar challenges in your organization or have observations that
              contradict or extend our analysis, we are interested in the conversation.
            </p>
            <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-600">
              Contact us at{" "}
              <a href="mailto:info@clyrostech.com" className="font-medium text-zinc-900 hover:underline">
                info@clyrostech.com
              </a>{" "}
              with your context and questions. We respond to all serious inquiries.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
