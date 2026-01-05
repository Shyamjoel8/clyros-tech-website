import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use and legal conditions for Clyros Tech Private Limited.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms | Clyros Tech",
    description: "Terms of use and legal conditions for Clyros Tech Private Limited.",
    url: "/terms",
  },
};

export default function TermsPage() {
  return (
    <section className="py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold tracking-tight">Terms</h1>
      </div>
    </section>
  );
}

