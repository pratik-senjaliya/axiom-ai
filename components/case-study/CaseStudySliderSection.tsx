import { getCaseStudies, getHomeFeaturedCaseStudies } from '@/lib/sanity/queries'
import { areCaseStudiesListed } from '@/lib/content-visibility'
import { CaseStudySlider } from './CaseStudySlider'

interface CaseStudySliderSectionProps {
  /** Overrides for the section heading (falls back to the Case Studies document) */
  title?: string
  subtitle?: string
  description?: any
  /** Set when a CMS toggle already decided to show the section, e.g. the Home Page switch */
  ignoreSiteFlag?: boolean
  /** Show only case studies ticked "Feature on Home Page" instead of the Case Studies document list */
  featuredOnly?: boolean
}

export async function CaseStudySliderSection({ title, subtitle, description, ignoreSiteFlag, featuredOnly }: CaseStudySliderSectionProps = {}) {
  // Soft-launch: keep case study URLs open by slug, but hide from site surfaces
  if (!ignoreSiteFlag && !areCaseStudiesListed()) return null

  const [data, featured] = await Promise.all([
    getCaseStudies(),
    featuredOnly ? getHomeFeaturedCaseStudies() : Promise.resolve(null),
  ])
  const items = featured ?? data?.items
  if (!items?.length) return null

  return (
    <CaseStudySlider
      data={{
        ...data,
        items,
        sectionTitle: title || data.sectionTitle,
        sectionSubtitle: subtitle || data.sectionSubtitle,
        sectionDescription: description,
      }}
    />
  )
}
