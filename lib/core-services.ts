/** Core service pages with dedicated routes — never overridden by dynamic [slug] pages */
export const CORE_SERVICE_SLUGS = [
  'ai-implementation',
  'erp-transformation',
  'data-analytics',
  'managed-delivery',
  'sustainability',
] as const

export const CORE_SERVICE_PATHS = CORE_SERVICE_SLUGS.map((slug) => `/${slug}`)

export type CoreServiceSlug = (typeof CORE_SERVICE_SLUGS)[number]

export function isReservedServiceSlug(slug: string): boolean {
  return (CORE_SERVICE_SLUGS as readonly string[]).includes(slug)
}
