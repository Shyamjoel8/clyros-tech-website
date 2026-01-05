import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data handling disclosures for Clyros Tech Private Limited.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Clyros Tech",
    description: "Privacy policy and data handling disclosures for Clyros Tech Private Limited.",
    url: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-14 py-14 lg:space-y-20 lg:py-20">
      <header className="pb-2">
        <Container>
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-zinc-900 lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-600">
            <strong>Effective Date:</strong> January 1, 2026
            <br />
            <strong>Last Updated:</strong> January 5, 2026
          </p>
          <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-600">
            This Privacy Policy describes how Clyros Tech Private Limited (&quot;Clyros Tech,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects
            information obtained through our website (www.clyrostech.com) and business operations.
          </p>
        </Container>
      </header>

      <section aria-labelledby="information-collected" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2
            id="information-collected"
            className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
          >
            1. Information We Collect
          </h2>
          <div className="mt-8 space-y-6">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">1.1 Information You Provide</h3>
              <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                <p>We collect information you provide directly to us, including:</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                  <li>
                    <strong>Contact Information:</strong> Name, email address, company name,
                    geographic location when you submit inquiry forms or contact us
                  </li>
                  <li>
                    <strong>Communication Content:</strong> Messages, questions, and other
                    information you provide through contact forms or email correspondence
                  </li>
                  <li>
                    <strong>Professional Information:</strong> Job title, work history, and other
                    information submitted through career inquiries or partnership requests
                  </li>
                </ul>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">
                1.2 Automatically Collected Information
              </h3>
              <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                <p>When you visit our website, we may automatically collect:</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                  <li>
                    <strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked,
                    and other actions taken on our website
                  </li>
                  <li>
                    <strong>Device Information:</strong> Browser type, operating system, IP address
                    (anonymized), and referring URLs
                  </li>
                  <li>
                    <strong>Analytics Data:</strong> Aggregated website usage patterns collected
                    through Google Analytics 4 with IP anonymization enabled
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="how-we-use" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="how-we-use" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            2. How We Use Your Information
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <div className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>We use the information we collect to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
                <li>Respond to your inquiries and communicate with you about our services</li>
                <li>Process and evaluate career applications and partnership inquiries</li>
                <li>
                  Improve our website, services, and user experience through analytics and usage
                  patterns
                </li>
                <li>
                  Comply with legal obligations and protect our rights, property, and safety
                </li>
                <li>Maintain and improve security of our systems and prevent fraud</li>
              </ul>
              <p className="mt-4">
                <strong className="text-zinc-900">We do NOT:</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
                <li>Sell your personal information to third parties</li>
                <li>Use your information for marketing purposes without explicit consent</li>
                <li>Share your information with third parties except as described in this policy</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="information-sharing" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2
            id="information-sharing"
            className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
          >
            3. Information Sharing and Disclosure
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <div className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>We may share your information in the following circumstances:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
                <li>
                  <strong>Service Providers:</strong> With third-party service providers who perform
                  services on our behalf (email hosting, website hosting, analytics). These
                  providers are contractually obligated to protect your information and use it only
                  for specified purposes.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, court order, or
                  government authority, or when we believe disclosure is necessary to protect our
                  rights or comply with legal process.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition,
                  sale of assets, or other business transaction where your information may be
                  transferred as part of that transaction.
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you explicitly authorize us to share your
                  information for a specific purpose.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="data-security" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2
            id="data-security"
            className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
          >
            4. Data Security
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <div className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>
                We implement reasonable technical and organizational measures to protect your
                personal information from unauthorized access, loss, misuse, or alteration. These
                measures include:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
                <li>Encryption of data in transit using TLS/SSL protocols</li>
                <li>Secure authentication and access controls</li>
                <li>Regular security assessments and monitoring</li>
                <li>Employee training on data protection and confidentiality</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the Internet or electronic storage is 100%
                secure. While we strive to protect your information, we cannot guarantee absolute
                security.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="data-retention" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2
            id="data-retention"
            className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
          >
            5. Data Retention
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <div className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>
                We retain personal information for as long as necessary to fulfill the purposes
                outlined in this Privacy Policy, unless a longer retention period is required or
                permitted by law. Retention periods vary based on:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
                <li>The nature of the information and purpose for which it was collected</li>
                <li>Legal, regulatory, or contractual obligations requiring retention</li>
                <li>Business operational needs and record-keeping requirements</li>
              </ul>
              <p className="mt-4">
                When information is no longer needed, we securely delete or anonymize it in
                accordance with our data retention policies.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="your-rights" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="your-rights" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            6. Your Rights and Choices
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <div className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>Depending on your jurisdiction, you may have the following rights:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
                <li>
                  <strong>Access:</strong> Request access to the personal information we hold about
                  you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate or incomplete
                  information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information, subject
                  to legal retention requirements
                </li>
                <li>
                  <strong>Restriction:</strong> Request restriction of processing in certain
                  circumstances
                </li>
                <li>
                  <strong>Portability:</strong> Request a copy of your information in a structured,
                  machine-readable format
                </li>
                <li>
                  <strong>Objection:</strong> Object to processing of your information for certain
                  purposes
                </li>
                <li>
                  <strong>Withdraw Consent:</strong> Withdraw previously provided consent for data
                  processing
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:info@clyrostech.com" className="font-medium text-zinc-900 hover:underline">
                  info@clyrostech.com
                </a>
                . We will respond to your request within a reasonable timeframe as required by
                applicable law.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="international" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2
            id="international"
            className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
          >
            7. International Data Transfers
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <div className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>
                Clyros Tech is headquartered in India. If you are accessing our website from outside
                India, your information may be transferred to, stored, and processed in India or
                other countries where our service providers operate.
              </p>
              <p className="mt-4">
                When we transfer personal data from the European Economic Area (EEA) to countries
                that do not provide an adequate level of data protection, we implement appropriate
                safeguards such as Standard Contractual Clauses approved by the European Commission.
              </p>
              <p className="mt-4">
                For more information about our cross-border data handling practices, please refer to
                our{" "}
                <Link href="/data-privacy" className="font-medium text-zinc-900 hover:underline">
                  Data Privacy & Cross-Border Compliance
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="cookies" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="cookies" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            8. Cookies and Tracking Technologies
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <div className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>
                We use cookies and similar tracking technologies to collect information about your
                browsing activities. Cookies are small text files stored on your device that help us
                improve website functionality and analyze usage patterns.
              </p>
              <p className="mt-4">
                <strong className="text-zinc-900">Types of Cookies We Use:</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
                <li>
                  <strong>Essential Cookies:</strong> Necessary for website operation and security
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Used to understand how visitors interact with
                  our website (Google Analytics 4 with IP anonymization)
                </li>
              </ul>
              <p className="mt-4">
                You can control cookies through your browser settings. Note that disabling cookies
                may affect website functionality. For more information about Google Analytics and how
                to opt out, visit{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-zinc-900 hover:underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="children" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="children" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            9. Children&apos;s Privacy
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <div className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>
                Our website and services are not directed to individuals under the age of 18. We do
                not knowingly collect personal information from children. If we become aware that we
                have collected personal information from a child without parental consent, we will
                take steps to delete that information promptly.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="changes" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="changes" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            10. Changes to This Privacy Policy
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <div className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our
                practices, technology, legal requirements, or other factors. When we make material
                changes, we will update the &quot;Last Updated&quot; date at the top of this policy.
              </p>
              <p className="mt-4">
                We encourage you to review this Privacy Policy periodically. Your continued use of
                our website after changes are posted constitutes your acceptance of the updated
                policy.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="contact-privacy" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 lg:p-12">
            <h2
              id="contact-privacy"
              className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
            >
              11. Contact Us
            </h2>
            <div className="mt-4 space-y-3 text-base leading-7 text-zinc-600">
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our
                data practices, please contact us:
              </p>
              <div className="mt-4 text-sm leading-6 text-zinc-700">
                <p>
                  <strong className="text-zinc-900">Clyros Tech Private Limited</strong>
                </p>
                <p className="mt-2">
                  Email:{" "}
                  <a
                    href="mailto:info@clyrostech.com"
                    className="font-medium text-zinc-900 hover:underline"
                  >
                    info@clyrostech.com
                  </a>
                </p>
                <p className="mt-1">Website: www.clyrostech.com</p>
              </div>
              <p className="mt-4 text-sm text-zinc-600">
                We will respond to your inquiry within a reasonable timeframe as required by
                applicable data protection laws.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
