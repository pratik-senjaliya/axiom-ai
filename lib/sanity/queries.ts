import { client } from './client'
import type { BlogPost } from '../blog'

async function safeFetch<T>(query: string, params: Record<string, any> = {}, defaultValue: T): Promise<T> {
  try {
    const result = await client.fetch(query, params);
    console.log(`DEBUG: GROQ result for query:`, query.substring(0, 50), "...", !!result);
    if (result && result.testimonials) console.log("DEBUG: Testimonials found:", result.testimonials.length);
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
    "author": coalesce(author, "Sync Origin Team"),
    "authorRole": coalesce(authorRole, "Contributor"),
    "image": coalesce(mainImage.asset->url, 
      select(
        relatedService == "ai" => select(
          _id match "a*" || _id match "1*" || _id match "5*" => "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
          _id match "b*" || _id match "2*" || _id match "6*" => "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800&auto=format&fit=crop"
        ),
        relatedService == "erp" => select(
          _id match "a*" || _id match "1*" || _id match "5*" => "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
          _id match "b*" || _id match "2*" || _id match "6*" => "https://images.unsplash.com/photo-1454165833968-3860bb617482?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
        ),
        relatedService == "data" => select(
          _id match "a*" || _id match "1*" || _id match "5*" => "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          _id match "b*" || _id match "2*" || _id match "6*" => "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1504868584819-f8e905263543?q=80&w=800&auto=format&fit=crop"
        ),
        relatedService == "managed" => select(
          _id match "a*" || _id match "1*" || _id match "5*" => "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
          _id match "b*" || _id match "2*" || _id match "6*" => "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
        ),
        relatedService == "sustainability" => select(
          _id match "a*" || _id match "1*" || _id match "5*" => "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
          _id match "b*" || _id match "2*" || _id match "6*" => "https://images.unsplash.com/photo-1508514177221-18d14de04965?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1466611653911-95282ee365d5?q=80&w=800&auto=format&fit=crop"
        ),
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
      )
    ),
    "imageAlt": mainImage.alt,
    "readTime": coalesce(readTime, "5 min read"),
    "relatedService": relatedService,
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
    "author": coalesce(author, "Sync Origin Team"),
    "authorRole": coalesce(authorRole, "Contributor"),
    "image": coalesce(mainImage.asset->url, 
      select(
        relatedService == "ai" => select(
          _id match "a*" || _id match "1*" || _id match "5*" => "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
          _id match "b*" || _id match "2*" || _id match "6*" => "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800&auto=format&fit=crop"
        ),
        relatedService == "erp" => select(
          _id match "a*" || _id match "1*" || _id match "5*" => "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
          _id match "b*" || _id match "2*" || _id match "6*" => "https://images.unsplash.com/photo-1454165833968-3860bb617482?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
        ),
        relatedService == "data" => select(
          _id match "a*" || _id match "1*" || _id match "5*" => "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          _id match "b*" || _id match "2*" || _id match "6*" => "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1504868584819-f8e905263543?q=80&w=800&auto=format&fit=crop"
        ),
        relatedService == "managed" => select(
          _id match "a*" || _id match "1*" || _id match "5*" => "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
          _id match "b*" || _id match "2*" || _id match "6*" => "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
        ),
        relatedService == "sustainability" => select(
          _id match "a*" || _id match "1*" || _id match "5*" => "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
          _id match "b*" || _id match "2*" || _id match "6*" => "https://images.unsplash.com/photo-1508514177221-18d14de04965?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1466611653911-95282ee365d5?q=80&w=800&auto=format&fit=crop"
        ),
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
      )
    ),
    "imageAlt": mainImage.alt,
    "relatedService": relatedService,
    "readTime": coalesce(readTime, "5 min read"),
    "category": coalesce(category, "Insights"),
    faqs,
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
    pitfallsBody,
    pitfalls[] {
      stat,
      title,
      description
    },
    solutionsHeadline,
    solutionsSubtitle,
    solutionsBody,
    solutions[] {
      title,
      description,
      outcome
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
    },
    testimonials[] {
      quote,
      author,
      role,
      company
    },
    affiliationHeadline,
    affiliationTitle,
    affiliationBody
  }`

    return safeFetch<any>(query, {}, null)
}

// ==================== DATA ANALYTICS PAGE ====================

export async function getDataAnalyticsPage(): Promise<any> {
  const query = `*[_type == "dataAnalyticsPage" && _id == "dataAnalyticsPageSingleton"][0] {
    seo {
      metaTitle,
      metaDescription,
      metaKeywords,
      "openGraphImage": openGraphImage.asset->url
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
    tags,
    problemHeadline,
    problemIntro,
    problems[] { title, description },
    problemConclusion,
    approachHeadline,
    approachBody,
    approachCapabilities[] { title, description, outcome },
    differentiatorsHeadline,
    differentiators[] { title, description },
    useCasesHeadline,
    useCases[] { title, description },
    techHeadline,
    techBody,
    technologies[] { title, technologiesList },
    engagementHeadline,
    engagementSteps[] { title, description },
    ctaHeadline,
    ctaOptions[] { text, link },
    ctaClosing,
    testimonials[] {
      quote,
      author,
      role,
      company
    }
  }`
    return safeFetch<any>(query, {}, null)
}

// ==================== ABOUT US PAGE ====================

export async function getAboutPage(): Promise<any> {
  const query = `*[_type == "aboutPage"][0] {
    seo {
      metaTitle,
      metaDescription,
      metaKeywords,
      "openGraphImage": openGraphImage.asset->url
    },
    hero {
      badge,
      title,
      titleHighlight,
      description,
      "image": image.asset->url,
      "imageAlt": image.alt
    },
    whoWeAreHeadline,
    whoWeAreBody,
    philosophyHeadline,
    philosophyBody,
    philosophyPrinciple,
    whatWeDoHeadline,
    whatWeDoIntro,
    capabilities[] { title, description },
    whyUsHeadline,
    whyUsPoints[] { title, description },
    visionStatement,
    ctaHeadline,
    ctaOptions[] { text, link },
    ctaClosing
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
      badge,
      title,
      description,
      infoItems,
      phone,
      email,
      address,
      businessHours
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
    },
    testimonials[] {
      quote,
      author,
      role,
      company
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
      badgeText,
      title,
      description,
      buttonText,
      buttonLink
    },
    testimonials[] {
      quote,
      author,
      role,
      company
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
      badgeText,
      title,
      description,
      buttonText,
      buttonLink
    },
    testimonials[] {
      quote,
      author,
      role,
      company
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
      badgeText,
      title,
      description,
      buttonText,
      buttonLink
    },
    testimonials[] {
      quote,
      author,
      role,
      company
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
      badgeText,
      title,
      description,
      buttonText,
      buttonLink
    },
    testimonials[] {
      quote,
      author,
      role,
      company
    }
  }`
    return safeFetch<any>(query, {}, null)
}

// ==================== BLOG FILTERING ====================

export async function getLatestPostsByService(service: string, limit: number = 3): Promise<BlogPost[]> {
  const query = `*[_type == "post" && relatedService == $service] | order(publishedAt desc) [0...$limit] {
    "id": _id,
    title,
    "slug": slug.current,
    excerpt,
    "category": coalesce(category, "Insights"),
    "date": publishedAt,
    "author": coalesce(author, "Sync Origin Team"),
    "image": coalesce(mainImage.asset->url, 
      select(
        relatedService == "ai" => select(
          _id match "a*" || _id match "1*" || _id match "5*" => "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
          _id match "b*" || _id match "2*" || _id match "6*" => "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800&auto=format&fit=crop"
        ),
        relatedService == "erp" => select(
          _id match "a*" || _id match "1*" || _id match "5*" => "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
          _id match "b*" || _id match "2*" || _id match "6*" => "https://images.unsplash.com/photo-1454165833968-3860bb617482?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
        ),
        relatedService == "data" => select(
          _id match "a*" || _id match "1*" || _id match "5*" => "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          _id match "b*" || _id match "2*" || _id match "6*" => "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1504868584819-f8e905263543?q=80&w=800&auto=format&fit=crop"
        ),
        relatedService == "managed" => select(
          _id match "a*" || _id match "1*" || _id match "5*" => "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
          _id match "b*" || _id match "2*" || _id match "6*" => "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
        ),
        relatedService == "sustainability" => select(
          _id match "a*" || _id match "1*" || _id match "5*" => "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
          _id match "b*" || _id match "2*" || _id match "6*" => "https://images.unsplash.com/photo-1508514177221-18d14de04965?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1466611653911-95282ee365d5?q=80&w=800&auto=format&fit=crop"
        ),
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
      )
    ),
    "readTime": coalesce(readTime, "5 min read")
  }`

  return safeFetch<BlogPost[]>(query, { service, limit }, [])
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
