/**
 * Soft-launch flags: pages stay reachable by direct URL/slug,
 * but are hidden from menus, links, sitemaps, and search indexing
 * until real content is ready.
 *
 * Flip to `false` to publish on the live site.
 * See "Soft-launch / hidden content" in README.md for everything each flag controls.
 */
export const HIDE_FINANCE_FROM_SITE = false;
export const HIDE_CASE_STUDIES_FROM_SITE = false;

export function isFinanceListed(): boolean {
  return !HIDE_FINANCE_FROM_SITE;
}

export function areCaseStudiesListed(): boolean {
  return !HIDE_CASE_STUDIES_FROM_SITE;
}
