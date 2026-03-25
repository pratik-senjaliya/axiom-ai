import { client } from './client'
import type { BlogPost } from '../blog'

async function safeFetch<T>(query: string, params: Record<string, any> = {}, defaultValue: T): Promise<T> {
  try {
    const result = await client.fetch(query, params);
    return result || defaultValue;
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return defaultValue;
  }
}

// GROQ query to get all posts
export async function getAllPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    "id": _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    "date": publishedAt,
    author,
    authorRole,
    "image": mainImage.asset->url,
    "imageAlt": mainImage.alt,
    readTime,
    "content": ""
  }`

  return safeFetch<BlogPost[]>(query, {}, [])
}

// GROQ query to get a single post by slug
export async function getPostBySlug(slug: string): Promise<any> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    "id": _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    "date": publishedAt,
    author,
    authorRole,
    "image": mainImage.asset->url + "?updated=" + mainImage.asset->_updatedAt,
    "imageAlt": mainImage.alt,
    readTime,
    faqs,
    seo {
      metaTitle,
      metaDescription,
      metaKeywords,
      "openGraphImage": openGraphImage.asset->url + "?updated=" + openGraphImage.asset->_updatedAt,
      "openGraphImageAlt": openGraphImage.alt
    }
  }`

  return safeFetch<any>(query, { slug }, null)
}

// Get all slugs for generateStaticParams
export async function getAllPostSlugs(): Promise<string[]> {
  const query = `*[_type == "post"].slug.current`
  return safeFetch<string[]>(query, {}, [])
}

// Get unique categories
export async function getAllCategories(): Promise<string[]> {
  const query = `array::unique(*[_type == "post"].category)`
  return safeFetch<string[]>(query, {}, [])
}

// ==================== SERVICES ====================

// GROQ query to get all services
export async function getAllServices(): Promise<any[]> {
  const query = `*[_type == "service"] | order(title asc) {
    "id": _id,
    title,
    "slug": slug.current,
    description,
    longDescription,
    icon,
    "heroBackgroundImage": heroBackgroundImage.asset->url,
    "heroBackgroundImageAlt": heroBackgroundImage.alt,
    "heroImage": heroImage.asset->url,
    "heroImageAlt": heroImage.alt,
    "image": image.asset->url,
    "imageAlt": image.alt,
    "intro": {
      "title": introTitle,
      "content": introContent,
      "stats": introStats
    },
    features,
    serviceAreas,
    process,
    whyChooseUs,
    testimonial,
    faqs
  }`

  return safeFetch<any[]>(query, {}, [])
}

// GROQ query to get a single service by slug
export async function getServiceBySlug(slug: string): Promise<any> {
  const query = `*[_type == "service" && slug.current == $slug][0] {
    "id": _id,
    title,
    "slug": slug.current,
    description,
    longDescription,
    icon,
    "heroBackgroundImage": heroBackgroundImage.asset->url,
    "heroBackgroundImageAlt": heroBackgroundImage.alt,
    "heroImage": heroImage.asset->url,
    "heroImageAlt": heroImage.alt,
    "image": image.asset->url,
    "imageAlt": image.alt,
    "intro": {
      "title": introTitle,
      "content": introContent,
      "stats": introStats
    },
    features,
    serviceAreas,
    process,
    whyChooseUs,
    "whyPartnerImage": whyPartnerImage.asset->url,
    "whyPartnerImageAlt": whyPartnerImage.alt,
    whyPartnerImageLabel,
    whyPartnerImageTagline,
    testimonialsTitle,
    testimonialsDescription,
    testimonials,
    faqs,
    heroCTA,
    introCTA {
      title,
      description,
      cta
    },
    whyChooseCTA,
    finalCTA {
      title,
      description,
      cta
    },
    seo {
      metaTitle,
      metaDescription,
      metaKeywords,
      "openGraphImage": openGraphImage.asset->url,
      "openGraphImageAlt": openGraphImage.alt
    }
  }`

  return safeFetch<any>(query, { slug }, null)
}

// Get all service slugs for generateStaticParams
export async function getAllServiceSlugs(): Promise<string[]> {
  const query = `*[_type == "service"].slug.current`
  return safeFetch<string[]>(query, {}, [])
}

// ==================== HOME PAGE ====================

// GROQ query to get home page data
export async function getHomePage(): Promise<any> {
  const query = `*[_type == "homePage"][0] {
    seo {
      metaTitle,
      metaDescription,
      metaKeywords,
      "openGraphImage": openGraphImage.asset->url,
      "openGraphImageAlt": openGraphImage.alt
    },
    heroTitle,
    heroTitleHighlight,
    heroDescription,
    "heroBackgroundImage": heroBackgroundImage.asset->url,
    "heroBackgroundImageAlt": heroBackgroundImage.alt,
    "heroImage": heroImage.asset->url,
    "heroImageAlt": heroImage.alt,
    heroStats,
    introductionTitle,
    introductionBody,
    introductionCta {
      text,
      link
    },
    "introductionImage": introductionImage.asset->url,
    "introductionImageAlt": introductionImage.alt,
    trustTitle,
    trustDescription,
    trustStats,
    testimonialsTitle,
    testimonialsDescription,
    testimonials,
    featuresTitle,
    featuresDescription,
    features[] {
      title,
      description,
      linkText,
      linkHref,
      "image": image.asset->url,
      "imageAlt": image.alt
    },
    partnersTitle,
    partnersDescription,
    partners[] {
      name,
      "logo": logo.asset->url,
      "logoAlt": logo.alt
    },
    processTitle,
    processDescription,
    process,
    personasTitle,
    personasDescription,
    personas,
    blogTitle,
    blogDescription,
    faqTitle,
    faqs,
    finalCTA {
      title,
      description,
      cta
    }
  }`

  return safeFetch<any>(query, {}, null)
}

// ==================== ABOUT PAGE ====================

export async function getAboutPage(): Promise<any> {
  const query = `*[_type == "aboutPage"][0] {
    seo {
      metaTitle,
      metaDescription,
      metaKeywords,
      "openGraphImage": openGraphImage.asset->url,
      "openGraphImageAlt": openGraphImage.alt
    },
    heroTitle,
    heroTitleHighlight,
    heroDescription,
    "heroBackgroundImage": heroBackgroundImage.asset->url,
    "heroBackgroundImageAlt": heroBackgroundImage.alt,
    "heroImage": heroImage.asset->url,
    "heroImageAlt": heroImage.alt,
    whyWeExistTitle,
    whyWeExistBody,
    "whyWeExistImage": whyWeExistImage.asset->url,
    "whyWeExistImageAlt": whyWeExistImage.alt,
    valuesTitle,
    values[] {
      title,
      description,
      icon
    },
    teamTitle,
    teamBody,
    finalCTA {
      title,
      description,
      cta
    }
  }`
  return safeFetch<any>(query, {}, null)
}

// ==================== CONTACT PAGE ====================

export async function getContactPage(): Promise<any> {
  const query = `*[_type == "contactPage"][0] {
      seo {
        metaTitle,
        metaDescription,
        metaKeywords,
        "openGraphImage": openGraphImage.asset->url
      },
      title,
      description,
      phone,
      email,
      address,
      businessHours
    }`
  return safeFetch<any>(query, {}, null)
}

export async function getServicesPage(): Promise<any> {
  const query = `*[_type == "servicesPage"][0] {
      seo {
        metaTitle,
        metaDescription,
        metaKeywords,
        "openGraphImage": openGraphImage.asset->url
      },
      title,
      description
    }`
  return safeFetch<any>(query, {}, null)
}


export async function getBlogPage(): Promise<any> {
  const query = `*[_type == "blogPage"][0] {
      seo {
        metaTitle,
        metaDescription,
        metaKeywords,
        "openGraphImage": openGraphImage.asset->url
      },
      title,
      description,
      newsletterTitle,
      newsletterDescription
    }`
  return safeFetch<any>(query, {}, null)
}

// ==================== SETTINGS ====================

export async function getSettings(): Promise<any> {
  const query = `*[_type == "settings"][0] {
    companyName,
    footerDescription,
    socialLinks[] {
      platform,
      url
    }
  }`
  return safeFetch<any>(query, {}, null)
}
