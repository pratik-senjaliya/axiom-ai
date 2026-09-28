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
  const siteUrl = getSiteUrl();
  return generateStructuredData("BreadcrumbList", {
    itemListElement: items.map((item, index) => {
      const url =
        item.item === siteUrl || item.item === `${siteUrl}/`
          ? `${siteUrl}/`
          : item.item;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: url,
      };
    }),
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
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://syncorigins.com").replace(/\/$/, "");
}

export const SITE_SCHEMA_DESCRIPTION =
  "Drive growth with SyncOrigins digital transformation solutions, including ERP transformation, managed delivery, and sustainable strategies to improve efficiency and performance.";

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

function organizationId(siteUrl: string) {
  return `${siteUrl}/#organization`;
}

function websiteId(siteUrl: string) {
  return `${siteUrl}/#website`;
}

/**
 * Organization — fixed, all pages
 * Spec: SyncOrigins Schema doc
 */
export function getOrganizationSchema() {
  const siteUrl = getSiteUrl();
  return generateStructuredData("Organization", {
    "@id": organizationId(siteUrl),
    name: "SyncOrigins",
    url: `${siteUrl}/`,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/SyncOrigin_Logo.png`,
    },
    description: SITE_SCHEMA_DESCRIPTION,
    email: "hello@syncorigins.com",
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    sameAs: ["https://www.linkedin.com/company/syncorigins/"],
  });
}

/**
 * WebSite — fixed, home page only
 */
export function getWebSiteSchema() {
  const siteUrl = getSiteUrl();
  return generateStructuredData("WebSite", {
    "@id": websiteId(siteUrl),
    url: `${siteUrl}/`,
    name: "SyncOrigins",
    description: SITE_SCHEMA_DESCRIPTION,
    inLanguage: "en-IN",
    publisher: {
      "@id": organizationId(siteUrl),
    },
  });
}

/**
 * WebPage — dynamic, all pages
 */
export function generateWebPageSchema(input: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const siteUrl = getSiteUrl();
  const pageUrl = input.url || `${siteUrl}/`;

  return generateStructuredData("WebPage", {
    "@id": `${pageUrl.replace(/\/$/, "")}/#webpage`,
    url: pageUrl,
    name: input.title,
    description: input.description,
    inLanguage: "en-IN",
    isPartOf: {
      "@id": websiteId(siteUrl),
    },
    publisher: {
      "@id": organizationId(siteUrl),
    },
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
  });
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
 * BlogPosting — blog detail pages
 */
export function generateArticleSchema(post: {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorUrl?: string;
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
    url: post.url,
    author: {
      "@type": "Person",
      name: post.authorName,
      ...(post.authorUrl ? { url: post.authorUrl } : {}),
    },
    publisher: {
      "@id": organizationId(siteUrl),
    },
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
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
    provider: {
      "@id": organizationId(siteUrl),
    },
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
        text: portableTextToPlain(faq.answer) || String(faq.answer || "").trim(),
      },
    }))
    .filter((faq) => faq.acceptedAnswer.text);

  if (items.length === 0) return null;

  return generateStructuredData("FAQPage", {
    mainEntity: items,
  });
}

export function buildHomePageSchemas(input: {
  title: string;
  description: string;
  url?: string;
  faqs?: FaqSchemaItem[];
  datePublished?: string;
  dateModified?: string;
}) {
  const siteUrl = getSiteUrl();
  const pageUrl = input.url || `${siteUrl}/`;
  const schemas: Record<string, unknown>[] = [
    getWebSiteSchema(),
    generateWebPageSchema({
      title: input.title,
      description: input.description,
      url: pageUrl,
      datePublished: input.datePublished,
      dateModified: input.dateModified,
    }),
  ];

  if (input.faqs?.length) {
    const faqSchema = generateFAQPageSchema(input.faqs);
    if (faqSchema) schemas.push(faqSchema);
  }

  return schemas;
}

export function buildBlogPageSchemas(input: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName: string;
  authorUrl?: string;
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
  const published = input.datePublished || new Date().toISOString();
  const modified = input.dateModified || published;

  const schemas: Record<string, unknown>[] = [
    generateWebPageSchema({
      title: input.title,
      description: schemaDescription,
      url: input.url,
      datePublished: published,
      dateModified: modified,
    }),
    generateBreadcrumbSchema([
      { name: "Home", item: `${siteUrl}/` },
      { name: "Insights", item: `${siteUrl}/insights` },
      { name: input.title, item: input.url },
    ]),
    generateArticleSchema({
      title: input.title,
      description: schemaDescription,
      image: input.image,
      datePublished: published,
      dateModified: modified,
      authorName: input.authorName,
      authorUrl: input.authorUrl,
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
  datePublished?: string;
  dateModified?: string;
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
    generateWebPageSchema({
      title: input.title,
      description: schemaDescription,
      url: input.url,
      datePublished: input.datePublished,
      dateModified: input.dateModified,
    }),
    generateBreadcrumbSchema([
      { name: "Home", item: `${siteUrl}/` },
      { name: "Services", item: `${siteUrl}/services` },
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
 * Generic inner-page schemas (listing / contact / about, etc.)
 */
export function buildInnerPageSchemas(input: {
  title: string;
  description: string;
  url: string;
  breadcrumbs?: { name: string; item: string }[];
  faqs?: FaqSchemaItem[];
  datePublished?: string;
  dateModified?: string;
}) {
  const siteUrl = getSiteUrl();
  const schemas: Record<string, unknown>[] = [
    generateWebPageSchema({
      title: input.title,
      description: input.description,
      url: input.url,
      datePublished: input.datePublished,
      dateModified: input.dateModified,
    }),
    generateBreadcrumbSchema(
      input.breadcrumbs || [
        { name: "Home", item: `${siteUrl}/` },
        { name: input.title, item: input.url },
      ]
    ),
  ];

  if (input.faqs?.length) {
    const faqSchema = generateFAQPageSchema(input.faqs);
    if (faqSchema) schemas.push(faqSchema);
  }

  return schemas;
}

