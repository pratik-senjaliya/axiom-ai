import { client } from './client'
import type { BlogPost } from '../blog'
import { CORE_SERVICE_SLUGS } from '../core-services'
import { blogCardImageUrl, blogDetailImageUrl } from './image'

const IMAGE_FALLBACK = `
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
`

function withResolvedBlogImages<T extends Record<string, any>>(post: T | null): T | null {
  if (!post) return post
  const fallback = post.image as string | undefined
  const source = post.mainImage || fallback
  const imageCard = blogCardImageUrl(source, fallback) || fallback
  const imageDetail = blogDetailImageUrl(source, fallback) || fallback
  return {
    ...post,
    image: imageCard || fallback,
    imageCard,
    imageDetail,
  }
}

const SEO_FIELDS = `
  metaTitle,
  metaDescription,
  metaKeywords,
  "openGraphImage": openGraphImage.asset->url,
  "openGraphImageAlt": openGraphImage.alt,
  structuredData {
    schemaType,
    schemaDescription,
    includeFaqSchema
  }
`

const CASE_STUDY_ITEM_FIELDS = `
  headline,
  subline,
  ctaText,
  "ctaLink": select(
    defined(caseStudy->slug.current) => "/case-studies/" + caseStudy->slug.current,
    ctaLink
  ),
  "image": image.asset->url,
  "imageAlt": image.alt
`

async function safeFetch<T>(
  query: string,
  params: Record<string, any> = {},
  defaultValue: T,
  options?: { cache?: RequestCache }
): Promise<T> {
  try {
    const result = await client.fetch(query, params, options as any);
    console.log(`DEBUG: GROQ result for query:`, query.substring(0, 50), "...", !!result);
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
    "author": coalesce(author, "SyncOrigins"),
    authorRole,
    mainImage,
    "image": coalesce(mainImage.asset->url, ${IMAGE_FALLBACK}),
    "imageAlt": mainImage.alt,
    "readTime": coalesce(readTime, "5 min read"),
    "relatedService": relatedService,
    "relatedIndustry": relatedIndustry,
    "content": ""
  }`

  const posts = await safeFetch<BlogPost[]>(query, {}, [])
  return (posts || []).map((p) => withResolvedBlogImages(p) as BlogPost)
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
    "author": coalesce(author, "SyncOrigins"),
    authorRole,
    mainImage,
    "image": coalesce(mainImage.asset->url, ${IMAGE_FALLBACK}),
    "imageAlt": mainImage.alt,
    "relatedService": relatedService,
    "relatedIndustry": relatedIndustry,
    cta { title, description, buttonText, buttonHref },
    "readTime": coalesce(readTime, "5 min read"),
    "category": coalesce(category, "Insights"),
    faqs,
    seo { ${SEO_FIELDS} }
  }`

  const post = await safeFetch<any>(query, { slug }, null)
  return withResolvedBlogImages(post)
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
  const query = `*[_type == "service" && !(slug.current in $reserved)] | order(title asc) {
    "id": _id,
    title,
    "slug": slug.current,
    showInNavigation,
    navTags,
    tags,
    "description": coalesce(seo.metaDescription, hero.description, "")
  }`

  return safeFetch<any[]>(query, { reserved: CORE_SERVICE_SLUGS }, [])
}

/** Services that should appear in header/footer navigation */
export async function getNavigationServices(): Promise<any[]> {
  const query = `*[_type == "service" && showInNavigation != false && !(slug.current in $reserved)] | order(title asc) {
    title,
    "slug": slug.current,
    navTags,
    tags
  }`

  return safeFetch<any[]>(query, { reserved: CORE_SERVICE_SLUGS }, [])
}

// GROQ query to get a single service by slug
export async function getServiceBySlug(slug: string): Promise<any> {
  const query = `*[_type == "service" && slug.current == $slug][0] {
    "id": _id,
    title,
    "slug": slug.current,
    showInNavigation,
    navTags,
    tags,
    "faqs": coalesce(faqs, []),
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
    pitfallsDescription,
    pitfalls[] { title, description },
    layersHeadline,
    layersDescription,
    layers[] { layer, title, outcome, description, tasks },
    layersCta { text, link },
    useCasesHeadline,
    useCasesDescription,
    useCases[] { industry, title, description },
    modelsHeadline,
    modelsDescription,
    models[] { model, title, description, tasks },
    roadmapHeadline,
    roadmapDescription,
    roadmap[] { step, title, description },
    roadmapCta { text, link },
    finalCta {
      badgeText,
      title,
      description,
      buttonText,
      buttonLink
    },
    seo { ${SEO_FIELDS} }
  }`

  return safeFetch<any>(query, { slug }, null)
}

// Get all service slugs for generateStaticParams
export async function getAllServiceSlugs(): Promise<string[]> {
  const query = `*[_type == "service" && !(slug.current in $reserved)].slug.current`
  return safeFetch<string[]>(query, { reserved: CORE_SERVICE_SLUGS }, [])
}

// ==================== CASE STUDIES (GLOBAL) ====================

export async function getCaseStudies(): Promise<any> {
  const query = `*[_type == "caseStudies" && _id == "caseStudiesSingleton"][0] {
    sectionTitle,
    sectionSubtitle,
    items[] {
      ${CASE_STUDY_ITEM_FIELDS}
    }
  }`

  return safeFetch<any>(query, {}, null, { cache: 'no-store' })
}

// ==================== HOME PAGE ====================

// GROQ query to get home page data
export async function getHomePage(): Promise<any> {
    const query = `*[_type == "homePage" && _id == "homePageSingleton"][0] {
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
    solutionsCta { text, link },
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
    personasCta { text, link },
    finalCta {
      title,
      description,
      primaryCta { text, link }
    },
    hireBadge,
    hireHeadline,
    hireBody,
    hireCards[] { title, description, cta { text, link } },
    whyBadge,
    whyHeadline,
    whyBody,
    whyCards[] { title, description },
    storiesBadge,
    storiesHeadline,
    storiesBody,
    showCaseStudies,
    testimonialsHeadline,
    testimonials[] { quote, author, role, company },
    faqsHeadline,
    faqs[] { question, answer }
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
    approachCta { text, link },
    differentiatorsHeadline,
    differentiatorsDescription,
    differentiators[] { title, description },
    useCasesHeadline,
    useCasesDescription,
    useCases[] { title, description },
    techHeadline,
    techBody,
    technologies[] { title, technologiesList },
    techCta { text, link },
    engagementHeadline,
    engagementDescription,
    engagementSteps[] { title, description },
    ctaHeadline,
    ctaOptions[] { text, link },
    ctaClosing
  }`
    return safeFetch<any>(query, {}, null)
}

// ==================== ABOUT US PAGE ====================

export async function getAboutPage(): Promise<any> {
  const query = `*[_type == "aboutPage" && _id == "aboutPageSingleton"][0] {
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
  const query = `*[_type == "contactPage" && _id == "contactPage"][0] {
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
      businessHours,
      submitButtonText
    }`
  return safeFetch<any>(query, {}, null)
}

export async function getBlogPage(): Promise<any> {
    const query = `*[_type == "blogPage" && _id == "blogPageSingleton"][0] {
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
    const query = `*[_type == "useCasesPage" && _id == "useCasesPageSingleton"][0] {
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
      category,
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
      description,
      buttonText,
      buttonLink
    },
  }`
    return safeFetch<any>(query, {}, null, { cache: 'no-store' })
}

export async function getAIImplementationPage(): Promise<any> {
    const query = `*[_type == "aiImplementationPage" && _id == "aiImplementationPageSingleton"][0] {
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
    pitfallsDescription,
    pitfalls[] { title, description },
    layersHeadline,
    layersDescription,
    layers[] { layer, title, outcome, description },
    layersCta { text, link },
    useCasesHeadline,
    useCasesDescription,
    useCases[] { industry, title, description },
    roadmapHeadline,
    roadmapDescription,
    roadmap[] { step, title, description },
    roadmapCta { text, link },
    modelsHeadline,
    modelsDescription,
    models[] { model, title, description },
    faqs[] { question, answer },
    finalCta {
      badgeText,
      title,
      description,
      buttonText,
      buttonLink
    },
  }`
    return safeFetch<any>(query, {}, null)
}

export async function getSustainabilityPage(): Promise<any> {
    const query = `*[_type == "sustainabilityPage" && _id == "sustainabilityPageSingleton"][0] {
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
    pitfallsDescription,
    pitfalls[] { title, description },
    layersHeadline,
    layersDescription,
    layers[] { title, description, tasks },
    layersCta { text, link },
    roadmapHeadline,
    roadmapDescription,
    roadmap[] { step, title, description },
    faqs[] { question, answer },
    finalCta {
      badgeText,
      title,
      description,
      buttonText,
      buttonLink
    },
  }`
    return safeFetch<any>(query, {}, null)
}

export async function getERPTransformationPage(): Promise<any> {
    const query = `*[_type == "erpTransformationPage" && _id == "erpTransformationPageSingleton"][0] {
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
    pitfallsDescription,
    pitfalls[] { title, description },
    layersHeadline,
    layersDescription,
    layers[] { title, description, tasks },
    layersCta { text, link },
    roadmapHeadline,
    roadmapDescription,
    roadmap[] { step, title, description },
    faqs[] { question, answer },
    finalCta {
      badgeText,
      title,
      description,
      buttonText,
      buttonLink
    },
  }`
    return safeFetch<any>(query, {}, null)
}

export async function getManagedDeliveryPage(): Promise<any> {
    const query = `*[_type == "managedDeliveryPage" && _id == "managedDeliveryPageSingleton"][0] {
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
    pitfallsDescription,
    pitfalls[] { title, description },
    layersHeadline,
    layersDescription,
    layers[] { title, description, tasks },
    layersCta { text, link },
    modelsHeadline,
    modelsDescription,
    models[] { title, description, tasks },
    roadmapHeadline,
    roadmapDescription,
    roadmap[] { step, title, description },
    faqs[] { question, answer },
    finalCta {
      badgeText,
      title,
      description,
      buttonText,
      buttonLink
    },
  }`
    return safeFetch<any>(query, {}, null)
}

// ==================== FINANCE / INDUSTRY PAGES ====================

const INDUSTRY_PAGE_FIELDS = `
    seo { ${SEO_FIELDS} },
    hero {
      badge,
      title,
      titleHighlight,
      description,
      "image": image.asset->url,
      primaryCta { text, link },
      secondaryCta { text, link }
    },
    heroMetrics[] { value, label },
    challengesHeadline,
    challengesDescription,
    challenges[] { title, description },
    solutionsHeadline,
    solutionsDescription,
    solutions[] { title, description },
    solutionsCta { text, link, hidden },
    clientsHeadline,
    clientsDescription,
    clients[] { title, description, icon, "iconImage": iconImage.asset->url },
    outcomesHeadline,
    outcomesDescription,
    outcomes[] { title, description },
    outcomesCta { text, link, hidden },
    successStoriesHeadline,
    successStories[] {
      title,
      clientChallenge,
      solutionDelivered,
      keyTransformation,
      businessOutcomes,
      ctaText,
      ctaLink
    },
    processHeadline,
    processDescription,
    process[] { step, title, description },
    whyUsHeadline,
    whyUsDescription,
    "whyUsImage": whyUsImage.asset->url,
    "whyUsImageAlt": whyUsImage.alt,
    whyUsImageLabel,
    whyUsImageTitle,
    whyUsListTitle,
    whyUs[] { title, description },
    faqs[] { question, answer },
    finalCta {
      badgeText,
      title,
      description,
      buttonText,
      buttonLink
    }
`

export async function getFinancePage(): Promise<any> {
  const query = `*[_type == "financePage" && _id == "financePageSingleton"][0] {${INDUSTRY_PAGE_FIELDS}}`
  return safeFetch<any>(query, {}, null)
}

// ==================== INDUSTRY PAGES (CMS-created, served at /[slug]) ====================

export async function getIndustryPageBySlug(slug: string): Promise<any> {
  const query = `*[_type == "industryPage" && slug.current == $slug][0] {
    title,
    "slug": slug.current,${INDUSTRY_PAGE_FIELDS}}`
  return safeFetch<any>(query, { slug }, null)
}

export async function getAllIndustryPageSlugs(): Promise<string[]> {
  const query = `*[_type == "industryPage" && !(slug.current in $reserved)].slug.current`
  return safeFetch<string[]>(query, { reserved: CORE_SERVICE_SLUGS }, [])
}

/** Industry pages that should appear in header/footer navigation */
export async function getNavigationIndustries(): Promise<any[]> {
  const query = `*[_type == "industryPage" && showInNavigation != false && defined(slug.current) && !(slug.current in $reserved)] | order(title asc) {
    title,
    "slug": slug.current,
    navTags
  }`
  return safeFetch<any[]>(query, { reserved: CORE_SERVICE_SLUGS }, [])
}

// ==================== HIRE DEVELOPER PAGES (CMS-created, served at /[slug]) ====================

export async function getHirePageBySlug(slug: string): Promise<any> {
  const query = `*[_type == "hirePage" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    breadcrumbLabel,
    seo { ${SEO_FIELDS} },
    hero {
      badge,
      title,
      titleHighlight,
      description,
      "image": image.asset->url,
      primaryCta { text, link },
      secondaryCta { text, link }
    },
    expertiseHeadline, expertiseDescription, expertise[] { title, description },
    buildHeadline, buildDescription, buildItems[] { title, description },
    modelsHeadline, modelsDescription, modelsBestForLabel, models[] { title, description, bestFor, features },
    modelsCta { text, link },
    techHeadline, techDescription, techStack[] { category, tools },
    whyHeadline, whyDescription, whyItems[] { title, description },
    "whyImage": whyImage.asset->url, "whyImageAlt": whyImage.alt,
    whyImageLabel, whyImageTitle, whyListTitle,
    processHeadline, processDescription, process[] { title, description },
    industriesHeadline, industriesDescription, industries[] { title, description, icon },
    testimonialsHeadline, testimonialsBadge, testimonials[] { quote, author, role, company },
    moreHeadline, moreLinkText, moreLinks[] { title, description, link },
    faqsHeadline, faqs[] { question, answer },
    finalCta { badgeText, title, description, buttonText, buttonLink }
  }`
  return safeFetch<any>(query, { slug }, null)
}

/** Hire pages that should appear in header/footer navigation */
export async function getNavigationHirePages(): Promise<any[]> {
  const query = `*[_type == "hirePage" && showInNavigation != false && defined(slug.current) && !(slug.current in $reserved)] | order(title asc) {
    "title": coalesce(navLabel, "Hire " + title),
    "slug": slug.current,
    navTags
  }`
  return safeFetch<any[]>(query, { reserved: CORE_SERVICE_SLUGS }, [])
}

export async function getAllHirePageSlugs(): Promise<string[]> {
  const query = `*[_type == "hirePage" && defined(slug.current) && !(slug.current in $reserved)].slug.current`
  return safeFetch<string[]>(query, { reserved: CORE_SERVICE_SLUGS }, [])
}

// ==================== CASE STUDIES (DETAIL PAGES) ====================

const CASE_STUDY_CARD_FIELDS = `
  "id": _id,
  title,
  "slug": slug.current,
  excerpt,
  "image": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  publishedAt,
  relatedService,
  relatedIndustry
`

export async function getAllCaseStudies(): Promise<any[]> {
  const query = `*[_type == "caseStudy"] | order(publishedAt desc) {
    ${CASE_STUDY_CARD_FIELDS}
  }`
  return safeFetch<any[]>(query, {}, [])
}

export async function getAllCaseStudySlugs(): Promise<string[]> {
  const query = `*[_type == "caseStudy"].slug.current`
  return safeFetch<string[]>(query, {}, [])
}

export async function getCaseStudyBySlug(slug: string): Promise<any> {
  const query = `*[_type == "caseStudy" && slug.current == $slug][0] {
    ${CASE_STUDY_CARD_FIELDS},
    heroBadge,
    heroStats[] { value, label },
    heroCta { buttonText, buttonHref },
    aboutClientHeadline,
    aboutClient,
    "aboutClientImage": coalesce(aboutClientImage.asset->url, mainImage.asset->url),
    "aboutClientImageAlt": coalesce(aboutClientImage.alt, mainImage.alt),
    challengeHeadline,
    challengeDescription,
    challengeItems,
    challenge,
    approachHeadline,
    approachDescription,
    approachItems,
    approach,
    technologies,
    outcomesHeadline,
    outcomesDescription,
    outcomeItems[] { headline, subline },
    outcomeCards,
    outcomes,
    outcomeMetrics[] { value, label },
    testimonialsHeadline,
    testimonials[] { quote, author, role, company },
    finalCta { badgeText, title, description, buttonText, buttonLink },
    seo { ${SEO_FIELDS} }
  }`
  return safeFetch<any>(query, { slug }, null)
}

export async function getRelatedCaseStudies(slug: string, limit: number = 3): Promise<any[]> {
  const query = `*[_type == "caseStudy" && slug.current != $slug] | order(publishedAt desc) [0...$limit] {
    ${CASE_STUDY_CARD_FIELDS}
  }`
  return safeFetch<any[]>(query, { slug, limit }, [])
}

// ==================== BLOG FILTERING ====================

/** Posts for a service or industry page (matches relatedService or relatedIndustry). */
export async function getLatestPostsByService(service: string, limit: number = 3): Promise<BlogPost[]> {
  const query = `*[_type == "post" && (relatedService == $service || relatedIndustry == $service)] | order(publishedAt desc) [0...$limit] {
    "id": _id,
    title,
    "slug": slug.current,
    excerpt,
    "category": coalesce(category, "Insights"),
    "date": publishedAt,
    "author": coalesce(author, "SyncOrigins"),
    mainImage,
    "image": coalesce(mainImage.asset->url, ${IMAGE_FALLBACK}),
    "imageAlt": mainImage.alt,
    "relatedService": relatedService,
    "relatedIndustry": relatedIndustry,
    "readTime": coalesce(readTime, "5 min read")
  }`

  const posts = await safeFetch<BlogPost[]>(query, { service, limit }, [])
  return (posts || []).map((p) => withResolvedBlogImages(p) as BlogPost)
}

// ==================== SETTINGS ====================

export async function getSettings(): Promise<any> {
  const query = `*[_type == "settings" && _id == "settings"][0] {
    companyName,
    footerDescription,
    copyrightText,
    socialLinks[] {
      platform,
      url
    },
    headerContactLink { text, link },
    headerCta { text, link }
  }`
  return safeFetch<any>(query, {}, null, { cache: 'no-store' })
}
