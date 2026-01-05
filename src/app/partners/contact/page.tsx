import type { Metadata } from "next";
import { submitPartnerInquiry } from "../../actions/partner-inquiry";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Partnership Inquiry",
  description: "Submit a partnership inquiry to Clyros Tech Private Limited.",
  alternates: { canonical: "/partners/contact" },
  openGraph: {
    title: "Partnership Inquiry | Clyros Tech",
    description: "Submit a partnership inquiry to Clyros Tech Private Limited.",
    url: "/partners/contact",
  },
};

export default function PartnerContactPage() {
  return (
    <div className="space-y-14 py-14 lg:space-y-20 lg:py-20">
      <header className="pb-2">
        <Container>
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-zinc-900 lg:text-5xl">
            Partnership Inquiry
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 lg:text-xl">
            We welcome inquiries from organizations interested in exploring partnership opportunities
            with Clyros Tech. Please provide details about your organization and the nature of the
            potential collaboration.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600">
            Partnership inquiries are reviewed by our leadership team and responded to within 3-5
            business days.
          </p>
        </Container>
      </header>

      <section aria-labelledby="inquiry-form" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <Container>
          <h2 id="inquiry-form" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Submit Partnership Inquiry
          </h2>
          <form action={submitPartnerInquiry} className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="lg:col-span-1">
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
                Contact Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
              />
            </div>

            <div className="lg:col-span-1">
              <label htmlFor="title" className="block text-sm font-medium text-zinc-700">
                Title / Role
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
              />
            </div>

            <div className="lg:col-span-2">
              <label htmlFor="organization" className="block text-sm font-medium text-zinc-700">
                Organization Name
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
              />
            </div>

            <div className="lg:col-span-1">
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
              />
            </div>

            <div className="lg:col-span-1">
              <label htmlFor="phone" className="block text-sm font-medium text-zinc-700">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
              />
            </div>

            <div className="lg:col-span-2">
              <label htmlFor="website" className="block text-sm font-medium text-zinc-700">
                Organization Website (Optional)
              </label>
              <input
                type="url"
                id="website"
                name="website"
                placeholder="https://"
                className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
              />
            </div>

            <div className="lg:col-span-2">
              <label htmlFor="partnershipType" className="block text-sm font-medium text-zinc-700">
                Partnership Type
              </label>
              <select
                id="partnershipType"
                name="partnershipType"
                required
                className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
              >
                <option value="">Select partnership type...</option>
                <option value="Technology Partner">Technology Partner</option>
                <option value="Delivery Partner">Delivery Partner</option>
                <option value="Research & Academic">Research & Academic Partner</option>
                <option value="Referral Partner">Referral Partner</option>
                <option value="Strategic Alliance">Strategic Alliance</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="lg:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-zinc-700">
                Brief Description
              </label>
              <p className="mt-1 text-xs text-zinc-500">
                Please describe your organization, your interest in partnership, and potential areas of
                collaboration.
              </p>
              <textarea
                id="description"
                name="description"
                rows={6}
                required
                className="mt-2 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
              ></textarea>
            </div>

            <div className="lg:col-span-2">
              <label htmlFor="timeline" className="block text-sm font-medium text-zinc-700">
                Timeline & Urgency (Optional)
              </label>
              <input
                type="text"
                id="timeline"
                name="timeline"
                placeholder="e.g., Exploratory, Q1 2026, Urgent"
                className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
              />
            </div>

            {/* Honeypot field */}
            <input type="text" name="honeypot" className="hidden" aria-hidden="true" />

            <div className="lg:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-zinc-800"
              >
                Submit Partnership Inquiry
              </button>
            </div>
          </form>

          <div className="mt-8 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="text-sm font-semibold text-zinc-900">What Happens Next?</h3>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-zinc-600">
              <li>Your inquiry is reviewed by our leadership team</li>
              <li>We respond within 3-5 business days to acknowledge receipt</li>
              <li>If there is potential strategic fit, we schedule an exploratory discussion</li>
              <li>Initial conversations focus on alignment, complementary capabilities, and mutual value</li>
              <li>If alignment exists, we explore pilot engagement or formal partnership discussions</li>
            </ol>
          </div>
        </Container>
      </section>
    </div>
  );
}
