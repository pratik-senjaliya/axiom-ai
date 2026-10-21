/** Core service pages with dedicated routes — never overridden by dynamic [slug] pages */
export const CORE_SERVICE_SLUGS = [
  'ai-implementation',
  'erp-transformation',
  'data-analytics',
  'managed-delivery',
  'sustainability',
  'finance',
] as const

export const CORE_SERVICE_PATHS = CORE_SERVICE_SLUGS.map((slug) => `/${slug}`)

export type CoreServiceSlug = (typeof CORE_SERVICE_SLUGS)[number]

export function isReservedServiceSlug(slug: string): boolean {
  return (CORE_SERVICE_SLUGS as readonly string[]).includes(slug)
}

/** Slugs taken by core pages and static routes — CMS pages ([slug]) can't use these */
export const RESERVED_PAGE_SLUGS: string[] = [
  ...CORE_SERVICE_SLUGS,
  'about',
  'api',
  'case-studies',
  'contact',
  'insights',
  'privacy-policy',
  'services',
  'solutions',
  'studio',
  'terms-of-usage',
]
