import type { Metadata } from "next";

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
    <section className="py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold tracking-tight">Privacy Policy</h1>
      </div>
    </section>
  );
}

