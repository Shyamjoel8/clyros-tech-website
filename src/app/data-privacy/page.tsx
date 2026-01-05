import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Data Privacy & Cross-Border Compliance",
  description:
    "Data protection principles and cross-border compliance approach at Clyros Tech Private Limited.",
  alternates: { canonical: "/data-privacy" },
  openGraph: {
    title: "Data Privacy & Cross-Border Compliance | Clyros Tech",
    description:
      "Data protection principles and cross-border compliance approach at Clyros Tech Private Limited.",
    url: "/data-privacy",
  },
};

export default function DataPrivacyPage() {
  return (
    <div className="space-y-14 py-14 lg:space-y-20 lg:py-20">
      <header className="pb-2">
        <Container>
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-zinc-900 lg:text-5xl">
            Data Privacy &amp; Cross-Border Compliance
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 lg:text-xl">
            Clyros Tech structures data handling, security controls, and compliance practices to
            support client obligations under applicable regulatory frameworks including GDPR, HIPAA,
            and industry-specific data protection requirements.
          </p>
        </Container>
      </header>

      <section aria-labelledby="principles" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="principles" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Data Protection Principles
          </h2>
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Clyros Tech approaches data protection as fundamental requirement, not optional
              enhancement. Our data handling practices are designed to support client compliance
              obligations while enabling effective service delivery.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Data Minimization</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                We collect and process only data necessary for delivering agreed services. Access to
                client systems and data is limited to personnel with legitimate business need.
                Unnecessary data collection or retention is avoided.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Purpose Limitation</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Data accessed during engagements is used only for specified purposes defined in
                engagement agreements. We do not repurpose client data for internal analysis,
                training, or other uses without explicit authorization.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Confidentiality</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                All client data is treated as confidential. Non-disclosure agreements govern data
                handling. Team members sign confidentiality commitments as condition of employment.
                Data is not disclosed to unauthorized parties.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Data Retention</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Client data is retained only as long as necessary for service delivery and any
                applicable legal obligations. At engagement conclusion, data is returned to client or
                securely destroyed per agreed procedures.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="cross-border" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="cross-border" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Cross-Border Data Handling
          </h2>
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-zinc-600">
            <p>
              International engagements often involve data transfer across jurisdictional boundaries.
              Clyros Tech structures these arrangements to support client compliance with applicable
              data protection regulations.
            </p>
          </div>
          <div className="mt-10 space-y-6">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Data Transfer Mechanisms</h3>
              <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                <p>
                  For engagements involving transfer of personal data from European Economic Area
                  (EEA) to India or other jurisdictions, we implement appropriate safeguards which
                  may include:
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                  <li>Standard Contractual Clauses (SCCs) as approved by European Commission</li>
                  <li>Data Processing Agreements (DPAs) defining roles and responsibilities</li>
                  <li>Technical and organizational measures to protect transferred data</li>
                  <li>Onward transfer restrictions and subprocessor governance</li>
                </ul>
                <p className="mt-3">
                  Specific mechanisms are determined based on client jurisdiction, data types, and
                  regulatory context.
                </p>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Data Residency Options</h3>
              <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                <p>
                  Where client requirements mandate data remain in specific geographic locations, we
                  structure engagements accordingly:
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                  <li>
                    <strong>Cloud Infrastructure:</strong> Configure client cloud environments (AWS,
                    Azure, GCP) to store data in required regions
                  </li>
                  <li>
                    <strong>Remote Access:</strong> Engineers access client systems remotely without
                    data egress from client-controlled infrastructure
                  </li>
                  <li>
                    <strong>Anonymization:</strong> Where feasible, work with anonymized or synthetic
                    data that does not trigger data protection requirements
                  </li>
                  <li>
                    <strong>On-Site Work:</strong> For highly sensitive contexts, engineers work
                    on-site at client facilities
                  </li>
                </ul>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Subprocessor Disclosure</h3>
              <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                <p>
                  If Clyros Tech engages subprocessors (cloud providers, specialized service
                  providers) that may access client data, we disclose these relationships and ensure
                  appropriate data protection agreements are in place.
                </p>
                <p className="mt-3">
                  Clients are notified of subprocessor arrangements and may object to specific
                  subprocessors based on their risk assessment and compliance requirements.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="regulatory" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="regulatory" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Regulatory Awareness
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-zinc-50 p-8">
            <p className="text-sm leading-6 text-zinc-700">
              <strong className="text-zinc-900">Important Note:</strong> Clyros Tech is not
              certified under GDPR, HIPAA, SOC 2, or other specific regulatory frameworks. We design
              our practices to support client compliance obligations and can align our processes with
              regulatory requirements. Clients retain ultimate responsibility for their own compliance.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">GDPR Awareness (Europe)</h3>
              <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                <p>
                  For engagements involving processing of personal data of EU/EEA residents, Clyros
                  Tech acts as data processor on behalf of client (data controller). We implement
                  measures aligned with GDPR requirements:
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                  <li>Process data only on documented instructions from client</li>
                  <li>Ensure personnel processing data are bound by confidentiality</li>
                  <li>Implement appropriate technical and organizational measures</li>
                  <li>Assist client with data subject rights requests where applicable</li>
                  <li>Support client with data breach notification obligations</li>
                  <li>Delete or return personal data at engagement conclusion</li>
                </ul>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">HIPAA Awareness (US Healthcare)</h3>
              <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                <p>
                  For US healthcare engagements involving Protected Health Information (PHI), Clyros
                  Tech operates as Business Associate. We implement safeguards aligned with HIPAA
                  requirements:
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                  <li>Execute Business Associate Agreement (BAA) before PHI access</li>
                  <li>Implement physical, technical, and administrative safeguards</li>
                  <li>Encrypt PHI at rest and in transit</li>
                  <li>Maintain audit logs of PHI access and modifications</li>
                  <li>Report security incidents per BAA requirements</li>
                  <li>Provide breach notification assistance where applicable</li>
                </ul>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Other Regulatory Contexts</h3>
              <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                <p>
                  Clyros Tech structures delivery to align with various regulatory frameworks based
                  on client context:
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                  <li>
                    <strong>SOC 2:</strong> Security practices aligned with Trust Services Criteria
                  </li>
                  <li>
                    <strong>PCI-DSS:</strong> Controls for payment card data environments
                  </li>
                  <li>
                    <strong>FedRAMP:</strong> Security controls for US government cloud services
                  </li>
                  <li>
                    <strong>Industry Standards:</strong> ISO 27001, NIST frameworks, sector-specific
                    requirements
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="security" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="security" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Security &amp; Access Controls
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Access Management</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Principle of least privilege for all system access</li>
                <li>• Multi-factor authentication enforced for sensitive systems</li>
                <li>• Regular access reviews and recertification</li>
                <li>• Immediate access revocation upon role change or separation</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Data Encryption</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Encryption at rest using industry-standard algorithms</li>
                <li>• TLS 1.2 or higher for data in transit</li>
                <li>• Secure key management practices</li>
                <li>• Full disk encryption on devices accessing client data</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Network Security</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• VPN or secure access methods for client system connectivity</li>
                <li>• Network segmentation and firewall controls</li>
                <li>• Intrusion detection and prevention where applicable</li>
                <li>• Regular security assessments and vulnerability management</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Logging &amp; Monitoring</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Audit logs maintained for system access and modifications</li>
                <li>• Security event monitoring and alerting</li>
                <li>• Log retention per engagement requirements</li>
                <li>• Incident detection and response procedures</li>
              </ul>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="shared-responsibility" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="shared-responsibility" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Client Responsibilities &amp; Shared Accountability
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <div className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>
                Data privacy and compliance operate under shared responsibility model. Clyros Tech
                implements agreed controls and follows client instructions. Clients retain ultimate
                accountability for their compliance obligations.
              </p>
              <p className="mt-4">
                <strong className="text-zinc-900">Client Responsibilities Include:</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
                <li>
                  Determining applicable regulatory requirements and informing Clyros Tech of
                  compliance obligations
                </li>
                <li>Providing clear instructions regarding data handling and processing limitations</li>
                <li>Establishing appropriate contracts (DPAs, BAAs, SCCs) before data transfer</li>
                <li>Conducting own risk assessments and due diligence on vendor arrangements</li>
                <li>Monitoring Clyros Tech compliance with agreed data protection terms</li>
                <li>
                  Responding to data subject requests, breach notifications, and regulatory inquiries
                </li>
              </ul>
              <p className="mt-4">
                <strong className="text-zinc-900">Clyros Tech Responsibilities Include:</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
                <li>Implementing security controls appropriate to data sensitivity</li>
                <li>Processing data only per client instructions</li>
                <li>Maintaining confidentiality and access restrictions</li>
                <li>Assisting with compliance activities where specified in agreements</li>
                <li>Reporting security incidents and potential breaches promptly</li>
                <li>Cooperating with audits and assessments per engagement terms</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="questions" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 lg:p-12">
            <h2 id="questions" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
              Data Privacy Inquiries
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600">
              Organizations with specific data protection or compliance questions are encouraged to
              discuss requirements during initial engagement conversations. We address data handling,
              regulatory alignment, and contractual frameworks before project commencement.
            </p>
            <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-600">
              Contact us at{" "}
              <a href="mailto:info@clyrostech.com" className="font-medium text-zinc-900 hover:underline">
                info@clyrostech.com
              </a>{" "}
              with information about your regulatory context and data protection requirements.
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="related" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <div className="rounded-xl border border-zinc-200 bg-white p-8 lg:p-12">
            <h2 id="related" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
              Related Information
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <Link
                href="/global-delivery"
                className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 text-sm leading-6 text-zinc-700 hover:border-zinc-300"
              >
                <span className="font-semibold text-zinc-900">Global Delivery & Presence →</span>
                <p className="mt-1 text-zinc-600">
                  International client support and distributed delivery approach.
                </p>
              </Link>
              <Link
                href="/capabilities"
                className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 text-sm leading-6 text-zinc-700 hover:border-zinc-300"
              >
                <span className="font-semibold text-zinc-900">Security Capabilities →</span>
                <p className="mt-1 text-zinc-600">
                  Security engineering practices and compliance frameworks we support.
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
