export const site = {
  name: "Clyros Tech Private Limited",
  shortName: "Clyros Tech",
  tagline: "Engineering Excellence. Delivered with Precision.",
};

export type NavItem = {
  label: string;
  href: string;
};

// Primary header navigation
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Delivery", href: "/delivery-methodology" },
  { label: "Engage", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

// Footer navigation organized by category
export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "How We Operate", href: "/how-we-operate" },
    { label: "Leadership", href: "/leadership" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Services Overview", href: "/services" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Delivery Methodology", href: "/delivery-methodology" },
    { label: "Case Studies", href: "/case-studies" },
  ],
  industries: [
    { label: "Industries Overview", href: "/industries" },
    { label: "Healthcare", href: "/industries#healthcare" },
    { label: "Financial Services", href: "/industries#financial" },
    { label: "Manufacturing", href: "/industries#manufacturing" },
  ],
  resources: [
    { label: "Insights", href: "/insights" },
    { label: "Enterprise Readiness", href: "/enterprise" },
    { label: "Global Delivery", href: "/global-delivery" },
    { label: "Partners", href: "/partners" },
  ],
  legal: [
    { label: "Data Privacy", href: "/data-privacy" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};

