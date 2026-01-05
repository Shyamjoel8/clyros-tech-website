import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use and legal conditions for Clyros Tech Private Limited website and services.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Use | Clyros Tech",
    description: "Terms of use and legal conditions for Clyros Tech Private Limited website and services.",
    url: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="space-y-14 py-14 lg:space-y-20 lg:py-20">
      <header className="pb-2">
        <Container>
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-zinc-900 lg:text-5xl">
            Terms of Use
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-600">
            <strong>Effective Date:</strong> January 1, 2026
            <br />
            <strong>Last Updated:</strong> January 5, 2026
          </p>
          <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-600">
            These Terms of Use (&quot;Terms&quot;) govern your access to and use of the Clyros Tech
            Private Limited website (www.clyrostech.com) and related services. By accessing or using
            our website, you agree to be bound by these Terms.
          </p>
        </Container>
      </header>

      <section aria-labelledby="acceptance" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="acceptance" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            1. Acceptance of Terms
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <div className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>
                By accessing or using the Clyros Tech website, you acknowledge that you have read,
                understood, and agree to be bound by these Terms and our{" "}
                <Link href="/privacy-policy" className="font-medium text-zinc-900 hover:underline">
                  Privacy Policy
                </Link>
                . If you do not agree to these Terms, you must not access or use our website.
              </p>
              <p className="mt-4">
                These Terms apply to all visitors, users, and others who access or use our website,
                whether or not you are a client of Clyros Tech.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="website-use" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="website-use" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            2. Permitted Use of Website
          </h2>
          <div className="mt-8 space-y-6">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">2.1 License to Use</h3>
              <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                <p>
                  Subject to your compliance with these Terms, Clyros Tech grants you a limited,
                  non-exclusive, non-transferable, revocable license to access and use our website
                  for lawful business purposes. This license does not include:
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                  <li>Commercial use beyond evaluation of our services</li>
                  <li>Resale or redistribution of website content</li>
                  <li>Derivative works based on our website or content</li>
                  <li>Automated access or data scraping</li>
                </ul>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">2.2 Prohibited Activities</h3>
              <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                <p>You agree not to:</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                  <li>
                    Use the website for any unlawful purpose or in violation of applicable laws or
                    regulations
                  </li>
                  <li>
                    Attempt to gain unauthorized access to our systems, networks, or user accounts
                  </li>
                  <li>
                    Interfere with or disrupt the operation of our website or servers
                  </li>
                  <li>
                    Introduce viruses, malware, or other harmful code
                  </li>
                  <li>
                    Impersonate any person or entity or misrepresent your affiliation
                  </li>
                  <li>
                    Collect or harvest information from our website using automated means without
                    permission
                  </li>
                  <li>
                    Copy, reproduce, or create derivative works from our website content without
                    authorization
                  </li>
                  <li>
                    Remove or alter copyright, trademark, or other proprietary notices
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="intellectual-property" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2
            id="intellectual-property"
            className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
          >
            3. Intellectual Property Rights
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <div className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>
                All content on this website, including but not limited to text, graphics, logos,
                images, software, and other materials, is the property of Clyros Tech Private Limited
                or its licensors and is protected by copyright, trademark, and other intellectual
                property laws.
              </p>
              <p className="mt-4">
                <strong className="text-zinc-900">Trademarks:</strong> &quot;Clyros Tech,&quot;
                &quot;Clyros Tech Private Limited,&quot; and related marks are trademarks of Clyros
                Tech Private Limited. You may not use these marks without our prior written
                permission.
              </p>
              <p className="mt-4">
                <strong className="text-zinc-900">Restrictions:</strong> You may not reproduce,
                distribute, modify, create derivative works from, publicly display, or exploit any
                content from our website without express written authorization from Clyros Tech.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="user-content" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="user-content" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            4. User-Submitted Content
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <div className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>
                When you submit information through our contact forms, career applications, or other
                inquiry mechanisms, you grant Clyros Tech a non-exclusive, worldwide, royalty-free
                license to use, reproduce, and process that information for the purposes of:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
                <li>Responding to your inquiries</li>
                <li>Evaluating potential business relationships or employment</li>
                <li>Improving our services</li>
                <li>Complying with legal obligations</li>
              </ul>
              <p className="mt-4">
                You represent and warrant that any content you submit does not violate any third-party
                rights, including intellectual property rights, privacy rights, or confidentiality
                obligations.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="third-party" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="third-party" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            5. Third-Party Links and Services
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <div className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>
                Our website may contain links to third-party websites or services that are not owned
                or controlled by Clyros Tech. We do not endorse or assume responsibility for the
                content, privacy policies, or practices of any third-party websites or services.
              </p>
              <p className="mt-4">
                You acknowledge and agree that Clyros Tech is not liable for any damage or loss caused
                by or in connection with your use of any third-party websites or services. We
                encourage you to review the terms and privacy policies of any third-party sites you
                visit.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="disclaimers" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="disclaimers" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            6. Disclaimers and Warranties
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <div className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>
                <strong className="text-zinc-900">AS IS Basis:</strong> Our website and all
                information provided are offered &quot;as is&quot; and &quot;as available&quot;
                without warranties of any kind, either express or implied.
              </p>
              <p className="mt-4">
                <strong className="text-zinc-900">No Warranties:</strong> To the fullest extent
                permitted by law, Clyros Tech disclaims all warranties, including but not limited to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
                <li>Warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
                <li>Warranties regarding accuracy, reliability, or completeness of website content</li>
                <li>Warranties that the website will be uninterrupted, secure, or error-free</li>
                <li>Warranties that defects will be corrected</li>
              </ul>
              <p className="mt-4">
                <strong className="text-zinc-900">Information Accuracy:</strong> While we strive to
                provide accurate and up-to-date information, we make no representations or warranties
                about the accuracy, completeness, or timeliness of content on our website.
                Information may be changed or updated without notice.
              </p>
              <p className="mt-4">
                <strong className="text-zinc-900">Professional Services:</strong> Information on our
                website is for general informational purposes only and does not constitute
                professional advice. You should not rely on website content as a substitute for
                professional consultation regarding specific business or technical decisions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="limitation-liability" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2
            id="limitation-liability"
            className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
          >
            7. Limitation of Liability
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <div className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>
                To the maximum extent permitted by applicable law, Clyros Tech Private Limited, its
                directors, officers, employees, agents, and affiliates shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising out of or
                related to your use of our website, including but not limited to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
                <li>Loss of profits, revenue, business opportunities, or data</li>
                <li>Cost of substitute goods or services</li>
                <li>Business interruption or system failures</li>
                <li>Errors, omissions, or inaccuracies in website content</li>
              </ul>
              <p className="mt-4">
                This limitation applies whether the claim is based on contract, tort (including
                negligence), strict liability, or any other legal theory, even if we have been advised
                of the possibility of such damages.
              </p>
              <p className="mt-4">
                <strong className="text-zinc-900">Maximum Liability:</strong> In no event shall Clyros
                Tech&apos;s total liability to you for all claims arising from or related to the
                website exceed the amount you paid to us (if any) for accessing the website in the
                twelve (12) months preceding the claim.
              </p>
              <p className="mt-4 text-xs text-zinc-500">
                Some jurisdictions do not allow limitation of liability for certain types of damages.
                In such jurisdictions, our liability is limited to the fullest extent permitted by law.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="indemnification" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2
            id="indemnification"
            className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
          >
            8. Indemnification
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <div className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>
                You agree to indemnify, defend, and hold harmless Clyros Tech Private Limited, its
                directors, officers, employees, agents, and affiliates from and against any and all
                claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable
                attorneys&apos; fees) arising from:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
                <li>Your use or misuse of our website</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Any content you submit through our website</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="modifications" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2
            id="modifications"
            className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
          >
            9. Modifications to Terms and Website
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <div className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>
                <strong className="text-zinc-900">Terms Updates:</strong> Clyros Tech reserves the
                right to modify or replace these Terms at any time at our sole discretion. Material
                changes will be indicated by updating the &quot;Last Updated&quot; date. Your
                continued use of the website after changes constitutes acceptance of the updated
                Terms.
              </p>
              <p className="mt-4">
                <strong className="text-zinc-900">Website Modifications:</strong> We reserve the right
                to modify, suspend, or discontinue any aspect of our website at any time without prior
                notice or liability.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="termination" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="termination" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            10. Termination
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <div className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>
                Clyros Tech may terminate or suspend your access to our website immediately, without
                prior notice or liability, for any reason, including but not limited to breach of
                these Terms.
              </p>
              <p className="mt-4">
                Upon termination, your right to use the website will immediately cease. All provisions
                of these Terms that by their nature should survive termination shall survive,
                including but not limited to ownership provisions, warranty disclaimers, indemnity,
                and limitations of liability.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="governing-law" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2
            id="governing-law"
            className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
          >
            11. Governing Law and Jurisdiction
          </h2>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-8">
            <div className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>
                These Terms and any dispute arising out of or related to these Terms or your use of
                our website shall be governed by and construed in accordance with the laws of India,
                without regard to its conflict of law provisions.
              </p>
              <p className="mt-4">
                You agree that any legal action or proceeding arising out of or related to these Terms
                or the website shall be brought exclusively in the courts located in India, and you
                consent to the personal jurisdiction of such courts.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="general" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="general" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            12. General Provisions
          </h2>
          <div className="mt-8 space-y-6">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Entire Agreement</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                These Terms, together with our Privacy Policy, constitute the entire agreement between
                you and Clyros Tech regarding use of our website and supersede all prior agreements
                and understandings.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Severability</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                If any provision of these Terms is found to be unenforceable or invalid, that
                provision shall be limited or eliminated to the minimum extent necessary, and the
                remaining provisions shall remain in full force and effect.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Waiver</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                No waiver of any term of these Terms shall be deemed a further or continuing waiver of
                such term or any other term. Clyros Tech&apos;s failure to assert any right or
                provision under these Terms shall not constitute a waiver of such right or provision.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Assignment</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                You may not assign or transfer these Terms or your rights hereunder without our prior
                written consent. Clyros Tech may assign these Terms without restriction.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="contact-terms" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 lg:p-12">
            <h2
              id="contact-terms"
              className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl"
            >
              13. Contact Information
            </h2>
            <div className="mt-4 space-y-3 text-base leading-7 text-zinc-600">
              <p>
                If you have questions about these Terms of Use, please contact us:
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
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
