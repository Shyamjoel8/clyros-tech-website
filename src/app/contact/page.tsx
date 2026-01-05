import type { Metadata } from "next";
import { submitLead } from "@/app/actions/lead";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact information and inquiry routing for Clyros Tech Private Limited.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Clyros Tech",
    description: "Contact information and inquiry routing for Clyros Tech Private Limited.",
    url: "/contact",
  },
};

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { success?: string | string[]; error?: string | string[] };
}) {
  const success = Array.isArray(searchParams?.success)
    ? searchParams?.success[0]
    : searchParams?.success;
  const error = Array.isArray(searchParams?.error) ? searchParams?.error[0] : searchParams?.error;
  const showSuccess = success === "true";
  const showError = error === "true";

  return (
    <div className="space-y-10 py-14 lg:py-20">
      <header>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-zinc-900 lg:text-5xl">
            Contact
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-600">
            Send an inquiry to Clyros Tech Private Limited. We will route your message to the appropriate
            team.
          </p>
        </div>
      </header>

      <section aria-label="Contact form" className="border-t border-zinc-200/70 pt-10 lg:pt-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {showSuccess && (
            <div className="mb-8 rounded-lg border border-green-300 bg-green-50 p-6">
              <p className="text-sm font-medium leading-6 text-green-900">
                Thank you for your inquiry. We&apos;ve received your message and will respond within
                1-2 business days (IST).
              </p>
            </div>
          )}
          {showError && (
            <div className="mb-8 rounded-lg border border-red-300 bg-red-50 p-6">
              <p className="text-sm font-medium leading-6 text-red-900">
                There was an error submitting your inquiry. Please try again or contact us directly
                at info@clyrostech.com.
              </p>
            </div>
          )}

          <form action={submitLead} className="max-w-2xl space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-900">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-2 h-11 w-full rounded-md border border-zinc-300 bg-white px-3 text-sm text-zinc-900 outline-none ring-0 focus:border-zinc-400"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-zinc-900">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  required
                  className="mt-2 h-11 w-full rounded-md border border-zinc-300 bg-white px-3 text-sm text-zinc-900 outline-none ring-0 focus:border-zinc-400"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-zinc-900">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 h-11 w-full rounded-md border border-zinc-300 bg-white px-3 text-sm text-zinc-900 outline-none ring-0 focus:border-zinc-400"
                />
              </div>

              <div>
                <label htmlFor="geography" className="block text-sm font-medium text-zinc-900">
                  Geography
                </label>
                <select
                  id="geography"
                  name="geography"
                  required
                  className="mt-2 h-11 w-full rounded-md border border-zinc-300 bg-white px-3 text-sm text-zinc-900 outline-none ring-0 focus:border-zinc-400"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="India">India</option>
                  <option value="North America">North America</option>
                  <option value="Europe">Europe</option>
                  <option value="Middle East">Middle East</option>
                  <option value="APAC">APAC</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="inquiry" className="block text-sm font-medium text-zinc-900">
                  Inquiry Type
                </label>
                <select
                  id="inquiry"
                  name="inquiry"
                  required
                  className="mt-2 h-11 w-full rounded-md border border-zinc-300 bg-white px-3 text-sm text-zinc-900 outline-none ring-0 focus:border-zinc-400"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="Consulting">Consulting</option>
                  <option value="Delivery">Delivery</option>
                  <option value="Security">Security</option>
                  <option value="Careers">Careers</option>
                  <option value="General">General</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-900">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm leading-6 text-zinc-900 outline-none ring-0 focus:border-zinc-400"
              />
            </div>

            {/* Honeypot field (hidden) */}
            <input
              tabIndex={-1}
              autoComplete="off"
              name="website"
              className="hidden"
              aria-hidden="true"
            />

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-md bg-zinc-900 px-6 text-sm font-semibold text-white hover:bg-zinc-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
