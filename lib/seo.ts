/**
 * SEO Configuration
 * Centralized SEO metadata and configuration
 */

import { Metadata } from "next";

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  canonicalUrl?: string; // Explicit full URL
  slug?: string; // Path relative to site root (e.g. "/services/web-dev")
  noindex?: boolean;
  nofollow?: boolean;
}

const defaultSEO: Partial<SEOConfig> = {
  author: "SyncOrigins",
  ogType: "website",
  twitterCard: "summary_large_image",
  keywords: ["accounting", "financial services", "bookkeeping", "payroll", "tax preparation"],
};

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    author,
    ogImage,
    ogType = "website",
    twitterCard = "summary_large_image",
    canonicalUrl,
    slug,
    noindex = false,
    nofollow = false,
  } = { ...defaultSEO, ...config };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://syncorigins.ai";
  // Reinforce branding by replacing old brand names with the new one
  const cleanedTitle = title
    .replace(/Axiom AI/g, "SyncOrigins")
    .replace(/AxiomAI/g, "SyncOrigins")
    .replace(/Sync Origin/g, "SyncOrigins");
  
  const fullTitle = cleanedTitle;

  // Construct the current page URL
  // Priority: 1. canonicalUrl (explicit override) 2. siteUrl + slug 3. siteUrl (home)
  const currentUrl = canonicalUrl || (slug ? `${siteUrl}${slug.startsWith('/') ? slug : '/' + slug}` : siteUrl);

  const imageUrl = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${siteUrl}${ogImage}`
    : `${siteUrl}/og-image.png`;

  return {
    title: fullTitle,
    description,
    keywords: (keywords || []).length > 0 ? (keywords || []).join(", ") : undefined,
    authors: author ? [{ name: author }] : undefined,
    creator: author,
    publisher: author,
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: ogType,
      title: fullTitle,
      description,
      url: currentUrl,
      siteName: defaultSEO.author || "SyncOrigins",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: twitterCard,
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: author ? `@${author}` : undefined,
    },
    alternates: {
      canonical: currentUrl,
    },
    metadataBase: new URL(siteUrl),
  };
}

/**
 * Generate structured data (JSON-LD) for better SEO
 */
/**
 * Generate structured data (JSON-LD) for better SEO
 */
export function generateStructuredData(
  type: string,
  data: Record<string, any>
) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };
}

/**
 * Generate Breadcrumb List Schema
 */
export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return generateStructuredData("BreadcrumbList", {
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  });
}

/**
 * Generate Article Schema for Blog Posts
 */
export function generateArticleSchema(post: {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  url: string;
}) {
  return generateStructuredData("Article", {
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      "@type": "Person",
      name: post.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "SyncOrigins",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://syncorigin.ai"}/SyncOrigin_Logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.url,
    },
  });
}

/**
 * Common organization structured data
 */
export function getOrganizationSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://syncorigin.ai";
  return generateStructuredData("Organization", {
    name: "SyncOrigins",
    url: siteUrl,
    logo: `${siteUrl}/SyncOrigin_Logo.png`,
    sameAs: [
      "https://www.linkedin.com/company/syncorigin",
      "https://twitter.com/syncorigin",
      "https://www.facebook.com/syncorigin",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-0123-4567",
      contactType: "customer service",
      contactOption: "TollFree",
      areaServed: "US",
      availableLanguage: "en",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Business Avenue, Suite 100",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10001",
      addressCountry: "US",
    },
  });
}

