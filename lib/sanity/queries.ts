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
    "category": coalesce(category, "Insights"),
    "date": publishedAt,
    "author": coalesce(author, "AxiomAI Team"),
    "authorRole": coalesce(authorRole, "Contributor"),
    "image": mainImage.asset->url,
    "imageAlt": mainImage.alt,
    "readTime": coalesce(readTime, "5 min read"),
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
    "author": coalesce(author, "AxiomAI Team"),
    "authorRole": coalesce(authorRole, "Contributor"),
    "image": select(
      defined(mainImage.asset->url) => mainImage.asset->url + "?updated=" + mainImage.asset->_updatedAt,
      null
    ),
    "imageAlt": mainImage.alt,
    "readTime": coalesce(readTime, "5 min read"),
    "category": coalesce(category, "Insights"),
    faqs,
    seo {
      metaTitle,
      metaDescription,
      metaKeywords,
      "openGraphImage": select(
        defined(openGraphImage.asset->url) => openGraphImage.asset->url + "?updated=" + openGraphImage.asset->_updatedAt,
        null
      ),
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
    hero {
      badge,
      title,
      titleHighlight,
      description,
      "image": image.asset->url,
      "imageAlt": image.alt,
      primaryCta { text, link },
      secondaryCta { text, link }
    },
    pitfallsHeadline,
    pitfalls[] {
      stat,
      title,
      description
    },
    solutionsHeadline,
    solutions[] {
      title,
      description
    },
    roadmapHeadline,
    roadmap[] {
      step,
      title,
      description
    },
    personasHeadline,
    personas[] {
      role,
      description
    },
    finalCta {
      title,
      description,
      primaryCta { text, link }
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
    hero {
      badge,
      title,
      titleHighlight,
      description,
      "image": image.asset->url,
      "imageAlt": image.alt
    },
    whyTitle,
    whyBody,
    whyImage,
    "whyImageAlt": whyImage.alt,
    valuesTitle,
    values[] {
      title,
      description,
      icon
    },
    teamTitle,
    teamBody,
    finalCta {
      title,
      description,
      primaryCta { text, link }
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
      badgeText,
      title,
      titleHighlight,
      description,
      finalCTA {
        title,
        description,
        cta
      }
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
      newsletterDescription,
      newsletterButtonText,
      newsletterButtonLink
    }`
    return safeFetch<any>(query, {}, null)
}

// ==================== SPECIALIZED SINGLETONS ====================

export async function getUseCasesPage(): Promise<any> {
    const query = `*[_type == "useCasesPage"][0] {
    seo,
    hero {
      badge,
      title,
      titleHighlight,
      description,
      "image": image.asset->url
    },
    tabs,
    cases[] {
      caseNumber,
      title,
      problem,
      tools,
      approach,
      impact
    },
    midPageCta {
      title,
      description,
      primaryCta { text, link }
    },
    pocOffer {
      title,
      description
    }
  }`
    return safeFetch<any>(query, {}, null)
}

export async function getAIImplementationPage(): Promise<any> {
    const query = `*[_type == "aiImplementationPage"][0] {
    seo,
    hero {
      badge,
      title,
      titleHighlight,
      description,
      "image": image.asset->url,
      primaryCta { text, link },
      secondaryCta { text, link }
    },
    tags,
    pitfallsHeadline,
    pitfalls[] { title, description },
    layersHeadline,
    layers[] { layer, title, outcome, description },
    useCasesHeadline,
    useCases[] { industry, title, description },
    roadmapHeadline,
    roadmap[] { step, title, description },
    modelsHeadline,
    models[] { model, title, description },
    faqs[] { question, answer },
    finalCta {
      title,
      description,
      primaryCta { text, link }
    }
  }`
    return safeFetch<any>(query, {}, null)
}

export async function getSustainabilityPage(): Promise<any> {
    const query = `*[_type == "sustainabilityPage"][0] {
    seo,
    hero {
      badge,
      title,
      titleHighlight,
      description,
      "image": image.asset->url,
      primaryCta { text, link },
      secondaryCta { text, link }
    },
    tags,
    pitfallsHeadline,
    pitfalls[] { title, description },
    layersHeadline,
    layers[] { title, description, tasks },
    roadmapHeadline,
    roadmap[] { step, title, description },
    faqs[] { question, answer },
    finalCta {
      title,
      description,
      primaryCta { text, link }
    }
  }`
    return safeFetch<any>(query, {}, null)
}

export async function getERPTransformationPage(): Promise<any> {
    const query = `*[_type == "erpTransformationPage"][0] {
    seo,
    hero {
      badge,
      title,
      titleHighlight,
      description,
      "image": image.asset->url,
      primaryCta { text, link },
      secondaryCta { text, link }
    },
    tags,
    pitfallsHeadline,
    pitfalls[] { title, description },
    layersHeadline,
    layers[] { title, description, tasks },
    roadmapHeadline,
    roadmap[] { step, title, description },
    faqs[] { question, answer },
    finalCta {
      title,
      description,
      primaryCta { text, link }
    }
  }`
    return safeFetch<any>(query, {}, null)
}

export async function getDataAnalyticsPage(): Promise<any> {
    const query = `*[_type == "dataAnalyticsPage"][0] {
    seo,
    hero {
      badge,
      title,
      titleHighlight,
      description,
      "image": image.asset->url,
      primaryCta { text, link },
      secondaryCta { text, link }
    },
    tags,
    layersHeadline,
    layers[] { title, description, tasks },
    roadmapHeadline,
    roadmap[] { step, title, description },
    faqs[] { question, answer },
    finalCta {
      title,
      description,
      primaryCta { text, link }
    }
  }`
    return safeFetch<any>(query, {}, null)
}

export async function getManagedDeliveryPage(): Promise<any> {
    const query = `*[_type == "managedDeliveryPage"][0] {
    seo,
    hero {
      badge,
      title,
      titleHighlight,
      description,
      "image": image.asset->url,
      primaryCta { text, link },
      secondaryCta { text, link }
    },
    pitfallsHeadline,
    pitfalls[] { title, description },
    layersHeadline,
    layers[] { title, description, tasks },
    modelsHeadline,
    models[] { title, description, tasks },
    roadmapHeadline,
    roadmap[] { step, title, description },
    faqs[] { question, answer },
    finalCta {
      title,
      description,
      primaryCta { text, link }
    }
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
