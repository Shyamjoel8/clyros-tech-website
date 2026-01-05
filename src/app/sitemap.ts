import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.clyrostech.com";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/industries`, lastModified: new Date() },
    { url: `${baseUrl}/capabilities`, lastModified: new Date() },
    { url: `${baseUrl}/case-studies`, lastModified: new Date() },
    { url: `${baseUrl}/partners`, lastModified: new Date() },
    { url: `${baseUrl}/partners/contact`, lastModified: new Date() },
    { url: `${baseUrl}/delivery-methodology`, lastModified: new Date() },
    { url: `${baseUrl}/careers`, lastModified: new Date() },
    { url: `${baseUrl}/engineering-culture`, lastModified: new Date() },
    { url: `${baseUrl}/leadership`, lastModified: new Date() },
    { url: `${baseUrl}/insights`, lastModified: new Date() },
    { url: `${baseUrl}/insights/engineering-rigor`, lastModified: new Date() },
    { url: `${baseUrl}/insights/ai-regulated-environments`, lastModified: new Date() },
    { url: `${baseUrl}/insights/cloud-governance`, lastModified: new Date() },
    { url: `${baseUrl}/global-delivery`, lastModified: new Date() },
    { url: `${baseUrl}/data-privacy`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
    { url: `${baseUrl}/terms`, lastModified: new Date() },
  ];
}
