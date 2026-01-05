import type { Metadata } from "next";

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

export default function ContactPage() {
  return (
    <section className="py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
      </div>
    </section>
  );
}

