import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industry experience and delivery focus across regulated and mission-critical environments.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries | Clyros Tech",
    description:
      "Industry experience and delivery focus across regulated and mission-critical environments.",
    url: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <div className="space-y-14 py-14 lg:space-y-20 lg:py-20">
      <header className="pb-2">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-zinc-900 lg:text-5xl">
            Vertical Expertise That Understands Your World
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 lg:text-xl">
            Enterprise technology challenges are never purely technical. They exist within complex
            regulatory, operational, and stakeholder environments that demand domain fluency.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600 lg:text-xl">
            Clyros Tech has built deep vertical practices in industries where technology decisions
            carry significant risk and where specialized knowledge creates competitive advantage.
          </p>
        </div>
      </header>

      <section aria-label="Industries" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                Healthcare &amp; Life Sciences
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <h4 className="text-sm font-semibold text-zinc-900">The Challenge</h4>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Healthcare organizations operate under intense regulatory scrutiny while managing
                    sensitive patient data, integrating with fragmented legacy systems, and responding
                    to rapidly evolving care delivery models.
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <h4 className="text-sm font-semibold text-zinc-900">Our Experience</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>EHR/EMR integration and interoperability (HL7, FHIR)</li>
                    <li>Patient data platforms and clinical analytics</li>
                    <li>HIPAA-compliant application development</li>
                    <li>Clinical workflow automation</li>
                    <li>Telehealth and remote patient monitoring systems</li>
                    <li>Healthcare data exchange and HIE connectivity</li>
                  </ul>
                  <h4 className="mt-4 text-sm font-semibold text-zinc-900">Representative Outcomes</h4>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Successfully delivered HIPAA-compliant platforms processing millions of patient
                    records, integrated disparate clinical systems across multi-facility health
                    systems, and built real-time analytics infrastructure for population health
                    management.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                Financial Services
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <h4 className="text-sm font-semibold text-zinc-900">The Challenge</h4>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Financial institutions must balance innovation velocity with regulatory
                    compliance, security requirements, and zero-tolerance risk postures—all while
                    maintaining always-on availability.
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <h4 className="text-sm font-semibold text-zinc-900">Our Experience</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>Core banking system modernization</li>
                    <li>Payment processing and settlement systems</li>
                    <li>Risk management and compliance platforms</li>
                    <li>Trading and portfolio management systems</li>
                    <li>Regulatory reporting automation</li>
                    <li>Open banking API implementation</li>
                  </ul>
                  <h4 className="mt-4 text-sm font-semibold text-zinc-900">Representative Outcomes</h4>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Modernized legacy core systems handling billions in daily transaction volume,
                    implemented real-time fraud detection systems, and delivered regulatory reporting
                    platforms satisfying SOX, PCI-DSS, and banking compliance requirements.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                Manufacturing &amp; Supply Chain
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <h4 className="text-sm font-semibold text-zinc-900">The Challenge</h4>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Manufacturing organizations are undergoing digital transformation while managing
                    complex OT/IT integration, global supply chain visibility requirements, and
                    Industry 4.0 initiatives.
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <h4 className="text-sm font-semibold text-zinc-900">Our Experience</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>Manufacturing execution systems (MES)</li>
                    <li>Supply chain visibility and optimization platforms</li>
                    <li>IoT and sensor data integration</li>
                    <li>Predictive maintenance systems</li>
                    <li>Quality management systems (QMS)</li>
                    <li>ERP integration and modernization</li>
                  </ul>
                  <h4 className="mt-4 text-sm font-semibold text-zinc-900">Representative Outcomes</h4>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Deployed real-time production monitoring across global manufacturing facilities,
                    integrated IoT sensor networks with enterprise analytics platforms, and built
                    supply chain control towers providing end-to-end visibility.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                Public Sector &amp; Government
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <h4 className="text-sm font-semibold text-zinc-900">The Challenge</h4>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Government agencies require technology solutions that balance citizen service
                    delivery, stringent security requirements, budget constraints, and complex
                    procurement processes.
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <h4 className="text-sm font-semibold text-zinc-900">Our Experience</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>Citizen services platforms and portals</li>
                    <li>Case management and workflow systems</li>
                    <li>Data integration across agency boundaries</li>
                    <li>Legacy modernization and cloud migration</li>
                    <li>Accessibility and compliance (508, WCAG)</li>
                    <li>FedRAMP and government security standards</li>
                  </ul>
                  <h4 className="mt-4 text-sm font-semibold text-zinc-900">Representative Outcomes</h4>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Modernized citizen-facing services improving digital experience while maintaining
                    ATO and compliance, integrated data systems across multiple agencies, and delivered
                    accessible platforms serving diverse populations.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                Energy &amp; Utilities
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <h4 className="text-sm font-semibold text-zinc-900">The Challenge</h4>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Energy sector organizations manage critical infrastructure while navigating grid
                    modernization, regulatory requirements, and the transition to distributed energy
                    resources.
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <h4 className="text-sm font-semibold text-zinc-900">Our Experience</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>Smart grid data platforms</li>
                    <li>Asset management and monitoring systems</li>
                    <li>Outage management and restoration systems</li>
                    <li>Customer information systems (CIS)</li>
                    <li>SCADA system integration</li>
                    <li>Regulatory compliance and reporting</li>
                  </ul>
                  <h4 className="mt-4 text-sm font-semibold text-zinc-900">Representative Outcomes</h4>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Built real-time grid monitoring infrastructure, implemented predictive maintenance
                    systems reducing unplanned outages, and delivered customer platforms supporting
                    distributed energy integration.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="cross-industry" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 lg:p-12">
            <p className="text-sm font-medium text-zinc-600">Cross-Industry Capabilities</p>
            <h2 id="cross-industry" className="mt-1 text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
              Domain Fluency Across Sectors
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-600">
              Beyond our core verticals, Clyros Tech serves clients in professional services,
              education, logistics, and telecommunications—applying our enterprise delivery
              methodology and technical depth to organizations with complex technology requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

