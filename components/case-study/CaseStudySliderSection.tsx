import { getCaseStudies, getHomeFeaturedCaseStudies, getServiceCaseStudies } from '@/lib/sanity/queries'
import { areCaseStudiesListed } from '@/lib/content-visibility'
import { CaseStudySlider } from './CaseStudySlider'

interface CaseStudySliderSectionProps {
  /** Overrides for the section heading (falls back to the Case Studies document) */
  title?: string
  subtitle?: string
  description?: any
  /** Set when a CMS toggle already decided to show the section, e.g. the Home Page switch */
  ignoreSiteFlag?: boolean
  /** Show only case studies ticked "Feature on Home Page" */
  featuredOnly?: boolean
  /** Service area key (ai, erp, data, managed, sustainability): its case studies show first, then featured ones */
  service?: string
}

/**
 * Case study slider built from real case study documents.
 * The Case Studies document only supplies the section heading.
 */
export async function CaseStudySliderSection({ title, subtitle, description, ignoreSiteFlag, featuredOnly, service }: CaseStudySliderSectionProps = {}) {
  // Soft-launch: keep case study URLs open by slug, but hide from site surfaces
  if (!ignoreSiteFlag && !areCaseStudiesListed()) return null

  const [data, items] = await Promise.all([
    getCaseStudies(),
    featuredOnly ? getHomeFeaturedCaseStudies() : getServiceCaseStudies(service),
  ])
  if (!items?.length) return null

  return (
    <CaseStudySlider
      data={{
        items,
        sectionTitle: title || data?.sectionTitle,
        sectionSubtitle: subtitle || data?.sectionSubtitle,
        sectionDescription: description,
      }}
    />
  )
}
