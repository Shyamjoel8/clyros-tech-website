# Clyros Tech - Deployment Guide

## Pre-Deployment Checklist

### 1. Environment Variables Setup

Create a `.env.local` file (copy from `.env.example`):

```bash
cp .env.example .env.local
```

**Required Variables:**
- `SMTP_HOST` - Your email provider's SMTP server
- `SMTP_PORT` - SMTP port (usually 465 for SSL or 587 for TLS)
- `SMTP_SECURE` - Set to `true` for SSL
- `SMTP_USER` - Your email address (info@clyrostech.com)
- `SMTP_PASS` - Your email password or app-specific password
- `CONTACT_FROM` - Email address for sending (info@clyrostech.com)
- `CONTACT_TO` - Email address to receive inquiries (info@clyrostech.com)

**Optional Variables:**
- `NEXT_PUBLIC_GA4_ID` - Google Analytics 4 measurement ID
- `NEXT_PUBLIC_SITE_URL` - Your production URL

### 2. Email Configuration (Zoho Mail Recommended)

**Zoho Mail SMTP Settings:**
- Host: `smtp.zoho.com`
- Port: `465` (SSL) or `587` (TLS)
- Username: `info@clyrostech.com`
- Password: Your Zoho Mail password

**Important:** Use an app-specific password if 2FA is enabled.

### 3. Domain Setup

**DNS Configuration:**
- Point your domain to Vercel's nameservers or add A/CNAME records
- Configure both `clyrostech.com` and `www.clyrostech.com`
- The site will automatically redirect non-www to www

**Vercel Configuration:**
- The `vercel.json` file handles the redirect from `clyrostech.com` → `www.clyrostech.com`
- No additional configuration needed

---

## Deployment Options

### Option A: Deploy to Vercel (Recommended)

**Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

**Step 2: Login to Vercel**
```bash
vercel login
```

**Step 3: Deploy**
```bash
vercel
```

**Step 4: Add Environment Variables**
Go to your project settings on Vercel dashboard:
1. Navigate to Settings → Environment Variables
2. Add all variables from `.env.local`
3. Redeploy the project

**Step 5: Configure Custom Domain**
1. Go to Settings → Domains
2. Add your domain: `www.clyrostech.com`
3. Follow Vercel's DNS configuration instructions

---

### Option B: Deploy to Other Platforms

The site can be deployed to any platform that supports Next.js 14:
- **Netlify**: Use `next export` or Netlify's Next.js plugin
- **AWS Amplify**: Connect your GitHub repo
- **Cloudflare Pages**: Connect your GitHub repo
- **Self-hosted**: Use `npm run build` and serve with Node.js

---

## Post-Deployment Verification

### 1. Test Contact Form
- Go to `/contact`
- Fill out and submit the form
- Verify email is received at `info@clyrostech.com`
- Check success/error messages display correctly

### 2. Test All Pages
- Navigate through all main pages
- Verify no broken links
- Check mobile responsiveness
- Test all CTAs

### 3. Verify SEO
- Check `https://www.clyrostech.com/sitemap.xml` loads
- Check `https://www.clyrostech.com/robots.txt` loads
- Submit sitemap to Google Search Console

### 4. Test Analytics (if configured)
- Verify GA4 tracking code is present
- Check real-time reports in Google Analytics

---

## Google Analytics Setup (Optional)

**Step 1: Create GA4 Property**
1. Go to https://analytics.google.com
2. Create a new GA4 property for `clyrostech.com`
3. Copy your Measurement ID (format: `G-XXXXXXXXXX`)

**Step 2: Add to Environment Variables**
```bash
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
```

**Step 3: Redeploy**
The tracking code will automatically be injected into all pages.

---

## Google Search Console Setup

**Step 1: Verify Ownership**
1. Go to https://search.google.com/search-console
2. Add property: `https://www.clyrostech.com`
3. Verify using DNS TXT record or HTML file upload

**Step 2: Submit Sitemap**
1. In Search Console, go to Sitemaps
2. Submit: `https://www.clyrostech.com/sitemap.xml`

**Step 3: Monitor**
- Check for crawl errors
- Monitor search performance
- Review index coverage

---

## Troubleshooting

### Contact Form Not Working

**Check:**
1. Environment variables are set correctly in Vercel
2. SMTP credentials are valid
3. Email provider allows SMTP connections
4. Check Vercel function logs for errors

**Common Issues:**
- **"Authentication failed"**: Wrong password or 2FA blocking
- **"Connection timeout"**: Wrong SMTP host or port
- **"No response"**: Check Vercel function timeout settings

### 404 Errors

**Check:**
1. Build completed successfully
2. All routes are in `src/app/` directory
3. No typos in navigation links
4. Sitemap is up to date

### Slow Performance

**Optimize:**
1. Enable Vercel Edge Network
2. Compress images (if any added later)
3. Check bundle size: `npm run build`
4. Review First Load JS metrics

---

## Maintenance

### Regular Tasks

**Weekly:**
- Monitor contact form submissions
- Check for spam/bot submissions
- Review analytics data

**Monthly:**
- Update dependencies: `npm update`
- Review and update content
- Check for broken links
- Monitor uptime and performance

**Quarterly:**
- Review SEO performance
- Update case studies (when available)
- Refresh thought leadership content
- Audit competitor websites

---

## Security Best Practices

1. **Never commit `.env.local`** - It's in `.gitignore`
2. **Use app-specific passwords** for email
3. **Enable 2FA** on Vercel account
4. **Rotate SMTP passwords** quarterly
5. **Monitor function logs** for suspicious activity
6. **Keep dependencies updated** for security patches

---

## Support

**Technical Issues:**
- Check Vercel logs: https://vercel.com/dashboard
- Review Next.js documentation: https://nextjs.org/docs
- Check GitHub issues: https://github.com/Shyamjoel8/clyros-tech-website

**Email Configuration:**
- Zoho Mail support: https://www.zoho.com/mail/help/
- SMTP troubleshooting: Check provider documentation

---

## Quick Reference

**Build Commands:**
```bash
npm run dev          # Local development
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run linter
```

**Deployment Commands:**
```bash
vercel               # Deploy to preview
vercel --prod        # Deploy to production
vercel env pull      # Pull environment variables
```

**Git Commands:**
```bash
git status           # Check changes
git add .            # Stage all changes
git commit -m "msg"  # Commit with message
git push             # Push to GitHub
```

---

## Production URLs

- **Website:** https://www.clyrostech.com
- **Sitemap:** https://www.clyrostech.com/sitemap.xml
- **Robots:** https://www.clyrostech.com/robots.txt

---

**Last Updated:** January 2026  
**Maintained By:** Clyros Tech Technical Team
