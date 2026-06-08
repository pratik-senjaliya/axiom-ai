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

export const DEFAULT_OG_IMAGE = "/og-image.png";
export const DEFAULT_OG_IMAGE_WIDTH = 1024;
export const DEFAULT_OG_IMAGE_HEIGHT = 1024;

export function resolveOgImage(
  siteUrl: string,
  ...candidates: (string | null | undefined)[]
): { url: string; isDefault: boolean } {
  for (const candidate of candidates) {
    const trimmed = candidate?.trim();
    if (!trimmed) continue;

    const url = trimmed.startsWith("http")
      ? trimmed
      : `${siteUrl}${trimmed.startsWith("/") ? trimmed : `/${trimmed}`}`;

    return { url, isDefault: false };
  }

  return { url: `${siteUrl}${DEFAULT_OG_IMAGE}`, isDefault: true };
}

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

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://syncorigins.com";
  const cleanString = (val: string) => {
    return val
      .replace(/Axiom AI/g, "SyncOrigins")
      .replace(/AxiomAI/g, "SyncOrigins")
      .replace(/Sync Origins/g, "SyncOrigins")
      .replace(/Sync Origin/g, "SyncOrigins");
  };

  const fullTitle = cleanString(title);
  const cleanedDesc = description ? cleanString(description) : "";

  // Construct the current page URL
  // Priority: 1. canonicalUrl (explicit override) 2. siteUrl + slug 3. siteUrl (home)
  const currentUrl = canonicalUrl || (slug ? `${siteUrl}${slug.startsWith('/') ? slug : '/' + slug}` : siteUrl);

  const { url: imageUrl, isDefault: isDefaultOgImage } = resolveOgImage(siteUrl, ogImage);

  return {
    title: fullTitle,
    description: cleanedDesc,
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
      description: cleanedDesc,
      url: currentUrl,
      siteName: defaultSEO.author || "SyncOrigins",
      images: [
        {
          url: imageUrl,
          width: isDefaultOgImage ? DEFAULT_OG_IMAGE_WIDTH : 1200,
          height: isDefaultOgImage ? DEFAULT_OG_IMAGE_HEIGHT : 630,
          alt: title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: twitterCard,
      title: fullTitle,
      description: cleanedDesc,
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

export interface StructuredDataSeo {
  schemaType?: string;
  schemaDescription?: string;
  includeFaqSchema?: boolean;
}

export interface FaqSchemaItem {
  question: string;
  answer: unknown;
}

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://syncorigins.com";
}

export function portableTextToPlain(value: unknown): string {
  if (!value) return "";
  if (typeof value === "string") return value.trim();
  if (!Array.isArray(value)) return "";

  return value
    .filter((block: { _type?: string }) => block._type === "block")
    .map((block: { children?: { text?: string }[] }) =>
      block.children?.map((child) => child.text || "").join("") || ""
    )
    .join(" ")
    .trim();
}

function getPublisherSchema(siteUrl: string) {
  return {
    "@type": "Organization",
    name: "SyncOrigins",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/SyncOrigin_Logo.png`,
    },
  };
}

export function resolveSchemaType(
  pageKind: "service" | "blog",
  structuredData?: StructuredDataSeo
): string {
  const type = structuredData?.schemaType || "auto";
  if (type && type !== "auto") return type;
  return pageKind === "blog" ? "BlogPosting" : "Service";
}

/**
 * Generate Article / BlogPosting Schema for Blog Posts
 */
export function generateArticleSchema(post: {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  url: string;
  schemaType?: string;
}) {
  const siteUrl = getSiteUrl();
  const { url: imageUrl } = resolveOgImage(siteUrl, post.image);
  const schemaType = post.schemaType || "BlogPosting";

  return generateStructuredData(schemaType, {
    headline: post.title,
    description: post.description,
    image: imageUrl,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      "@type": "Person",
      name: post.authorName,
    },
    publisher: getPublisherSchema(siteUrl),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.url,
    },
  });
}

export function generateServiceSchema(service: {
  title: string;
  description: string;
  url: string;
  image?: string;
  schemaType?: string;
}) {
  const siteUrl = getSiteUrl();
  const { url: imageUrl } = resolveOgImage(siteUrl, service.image);
  const schemaType = service.schemaType || "Service";

  return generateStructuredData(schemaType, {
    name: service.title,
    description: service.description,
    url: service.url,
    image: imageUrl,
    provider: getPublisherSchema(siteUrl),
  });
}

export function generateFAQPageSchema(faqs: FaqSchemaItem[]) {
  const items = faqs
    .filter((faq) => faq.question)
    .map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: portableTextToPlain(faq.answer),
      },
    }))
    .filter((faq) => faq.acceptedAnswer.text);

  if (items.length === 0) return null;

  return generateStructuredData("FAQPage", {
    mainEntity: items,
  });
}

export function buildBlogPageSchemas(input: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  authorName: string;
  seo?: {
    metaDescription?: string;
    structuredData?: StructuredDataSeo;
  };
  faqs?: FaqSchemaItem[];
}) {
  const siteUrl = getSiteUrl();
  const structuredData = input.seo?.structuredData;
  const schemaDescription =
    structuredData?.schemaDescription ||
    input.seo?.metaDescription ||
    input.description;

  const schemas: Record<string, unknown>[] = [
    generateBreadcrumbSchema([
      { name: "Home", item: siteUrl },
      { name: "Insights", item: `${siteUrl}/insights` },
      { name: input.title, item: input.url },
    ]),
    generateArticleSchema({
      title: input.title,
      description: schemaDescription,
      image: input.image,
      datePublished: input.datePublished || new Date().toISOString(),
      authorName: input.authorName,
      url: input.url,
      schemaType: resolveSchemaType("blog", structuredData),
    }),
  ];

  if (structuredData?.includeFaqSchema !== false && input.faqs?.length) {
    const faqSchema = generateFAQPageSchema(input.faqs);
    if (faqSchema) schemas.push(faqSchema);
  }

  return schemas;
}

export function buildServicePageSchemas(input: {
  title: string;
  description: string;
  url: string;
  image?: string;
  seo?: {
    metaDescription?: string;
    structuredData?: StructuredDataSeo;
  };
  faqs?: FaqSchemaItem[];
}) {
  const siteUrl = getSiteUrl();
  const structuredData = input.seo?.structuredData;
  const schemaDescription =
    structuredData?.schemaDescription ||
    input.seo?.metaDescription ||
    input.description;

  const schemas: Record<string, unknown>[] = [
    generateBreadcrumbSchema([
      { name: "Home", item: siteUrl },
      { name: input.title, item: input.url },
    ]),
    generateServiceSchema({
      title: input.title,
      description: schemaDescription,
      url: input.url,
      image: input.image,
      schemaType: resolveSchemaType("service", structuredData),
    }),
  ];

  if (structuredData?.includeFaqSchema !== false && input.faqs?.length) {
    const faqSchema = generateFAQPageSchema(input.faqs);
    if (faqSchema) schemas.push(faqSchema);
  }

  return schemas;
}

/**
 * Common organization structured data
 */
export function getOrganizationSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://syncorigins.com";
  return generateStructuredData("Organization", {
    name: "SyncOrigins",
    url: siteUrl,
    logo: `${siteUrl}/SyncOrigin_Logo.png`,
    sameAs: [
      "https://www.linkedin.com/company/syncorigins/",
      "https://twitter.com/syncorigins",
      "https://www.facebook.com/syncorigins",
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

