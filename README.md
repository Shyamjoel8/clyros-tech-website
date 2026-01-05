# Clyros Tech Private Limited - Corporate Website

**Enterprise technology consulting and engineering services.**

**Live Site:** https://www.clyrostech.com  
**Built With:** Next.js 14 (App Router), TypeScript, Tailwind CSS

---

## Project Overview

This is the official corporate website for Clyros Tech Private Limited, an engineering-first technology services firm delivering enterprise-grade consulting, development, and infrastructure services.

### Key Features

- ✅ **Enterprise-Grade Design:** Professional, minimal, CXO-appropriate UI
- ✅ **29 Public Pages:** Complete information architecture
- ✅ **Contact Form:** Server-side email delivery with SMTP
- ✅ **SEO Optimized:** Sitemap, robots.txt, metadata, Open Graph tags
- ✅ **Security Headers:** HSTS, CSP, X-Frame-Options, and more
- ✅ **Analytics Ready:** Google Analytics 4 integration with IP anonymization
- ✅ **Mobile Responsive:** Desktop-first, fully responsive design
- ✅ **Accessibility:** WCAG-compliant focus states and semantic HTML

---

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git
- Email account with SMTP access (Zoho Mail recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/Shyamjoel8/clyros-tech-website.git
cd clyros-tech-website

# Install dependencies
npm install

# Copy environment variables template
cp .env.example .env.local

# Edit .env.local with your SMTP credentials
# (See DEPLOYMENT.md for detailed instructions)

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Project Structure

```
clyros-tech-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── about/             # About page
│   │   ├── services/          # Services overview
│   │   ├── industries/        # Industries served
│   │   ├── capabilities/      # Technical capabilities
│   │   ├── case-studies/      # Client case studies
│   │   ├── delivery-methodology/  # Delivery approach
│   │   ├── enterprise/        # Enterprise readiness
│   │   ├── how-we-operate/    # Operating philosophy
│   │   ├── careers/           # Hiring and culture
│   │   ├── engineering-culture/   # Engineering standards
│   │   ├── leadership/        # Leadership principles
│   │   ├── partners/          # Partnership approach
│   │   ├── insights/          # Thought leadership
│   │   ├── global-delivery/   # International delivery
│   │   ├── data-privacy/      # Data privacy posture
│   │   ├── contact/           # Contact form
│   │   ├── privacy-policy/    # Privacy policy
│   │   ├── terms/             # Terms of use
│   │   ├── actions/           # Server actions (form handling)
│   │   ├── layout.tsx         # Root layout (Header, Footer)
│   │   ├── globals.css        # Global styles
│   │   ├── sitemap.ts         # XML sitemap
│   │   └── robots.ts          # Robots.txt
│   ├── components/
│   │   └── layout/            # Layout components
│   │       ├── Header.tsx     # Global header
│   │       ├── Footer.tsx     # Global footer
│   │       └── Container.tsx  # Content container
│   ├── lib/
│   │   └── site.ts            # Site configuration
│   └── middleware.ts          # Security headers
├── public/
│   ├── downloads/             # Downloadable assets
│   └── resources/             # Resource documents (Markdown)
├── docs/                      # Internal documentation (20+ docs)
├── .env.example               # Environment variables template
├── DEPLOYMENT.md              # Deployment guide
├── package.json               # Dependencies
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── vercel.json                # Vercel deployment config
```

---

## Available Scripts

```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

---

## Environment Variables

Create a `.env.local` file with the following variables:

```bash
# SMTP Configuration (Required)
SMTP_HOST=smtp.zoho.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@clyrostech.com
SMTP_PASS=your_password_here

# Contact Form
CONTACT_FROM=info@clyrostech.com
CONTACT_TO=info@clyrostech.com

# Google Analytics (Optional)
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
```

See `.env.example` for complete template and `DEPLOYMENT.md` for detailed setup instructions.

---

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

**Important:** Add environment variables in Vercel dashboard before deploying.

See `DEPLOYMENT.md` for complete deployment instructions, including:
- Email configuration
- Domain setup
- Google Analytics
- Search Console
- Troubleshooting

---

## Site Architecture

### Public Pages (29 Total)

**Primary Navigation:**
- About
- Services
- Industries
- Delivery
- Insights
- Careers

**Footer Navigation (5 Columns):**
- Company: About, How We Operate, Leadership, Careers, Contact
- Services: Services Overview, Capabilities, Delivery Methodology, Case Studies
- Industries: Industries Overview, Healthcare, Financial Services, Manufacturing
- Resources: Insights, Enterprise Readiness, Global Delivery, Partners
- Legal: Data Privacy, Privacy Policy, Terms of Use

**Thought Leadership:**
- Insights overview
- Engineering Rigor (POV article)
- AI in Regulated Environments (POV article)
- Cloud Governance (POV article)

---

## Technology Stack

- **Framework:** Next.js 14.2.35 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Email:** Nodemailer (SMTP)
- **Analytics:** Google Analytics 4
- **Deployment:** Vercel (recommended)
- **Version Control:** Git + GitHub

---

## Design System

### Colors
- **Background:** Zinc-50 (off-white)
- **Text:** Zinc-900 (near-black), Zinc-700 (secondary)
- **Borders:** Zinc-200 (subtle)
- **Accent:** Zinc-900 (CTAs)

### Typography
- **Font:** Inter (Google Fonts)
- **Base Size:** 16px
- **Weights:** 400 (body), 500 (medium), 600 (semibold)
- **Line Heights:** 1.1-1.7 (hierarchy)

### Spacing
- **Sections:** 16px-24px vertical padding
- **Container:** Max-width with responsive padding
- **Grid:** 1-3 columns responsive

---

## SEO & Performance

### SEO Features
- ✅ XML Sitemap (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ Meta descriptions (all pages)
- ✅ Open Graph tags (social sharing)
- ✅ Canonical URLs
- ✅ Semantic HTML
- ✅ Heading hierarchy

### Performance
- ✅ Static generation (29 routes)
- ✅ Optimized fonts (Inter from Google Fonts)
- ✅ Minimal JavaScript (87.2 kB shared)
- ✅ Fast page loads
- ✅ Mobile-responsive

### Security
- ✅ HSTS (Strict-Transport-Security)
- ✅ X-Frame-Options (clickjacking protection)
- ✅ X-Content-Type-Options (MIME sniffing protection)
- ✅ Referrer-Policy (privacy)
- ✅ Permissions-Policy (feature control)

---

## Internal Documentation

The `docs/` directory contains 20+ internal governance documents:

**Sales & Engagement:**
- Sales Overview Deck
- RFP Master Response Pack
- Engagement Models
- Partner Framework

**Operations:**
- Operating Model Overview
- KPI Framework
- Management Cadence
- Decision Rights & Escalation

**Governance:**
- Brand Governance Principles
- Voice, Tone & Language Rules
- Claims Register
- Content Review Workflow

**Strategic:**
- Investor Overview
- Board Narrative
- Due Diligence Checklist
- M&A Readiness

**Risk & Continuity:**
- Crisis Classification & Response
- Incident Communication Playbooks
- Leadership Succession Framework
- Authority Delegation Matrix

**Note:** These documents are internal-only and not exposed publicly.

---

## Contributing

This is a private corporate website. Contributions are managed internally.

### Development Workflow

1. Create a feature branch
2. Make changes
3. Test locally (`npm run dev`)
4. Build and verify (`npm run build`)
5. Commit with descriptive message
6. Push and create pull request
7. Deploy to preview (Vercel)
8. Merge to main for production

---

## Support

**Technical Issues:**
- Check `DEPLOYMENT.md` for troubleshooting
- Review Vercel logs for function errors
- Check Next.js documentation: https://nextjs.org/docs

**Business Inquiries:**
- Email: info@clyrostech.com
- Website: https://www.clyrostech.com/contact

---

## License

© 2026 Clyros Tech Private Limited. All rights reserved.

This is proprietary software for Clyros Tech Private Limited's corporate website.

---

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Last Updated:** January 2026  
**Version:** 1.0.0  
**Status:** Production Ready ✅
