import { getCaseStudies } from '@/lib/sanity/queries'
import { areCaseStudiesListed } from '@/lib/content-visibility'
import { CaseStudySlider } from './CaseStudySlider'

interface CaseStudySliderSectionProps {
  /** Overrides for the section heading (falls back to the Case Studies document) */
  title?: string
  subtitle?: string
  description?: any
  /** Set when a CMS toggle already decided to show the section, e.g. the Home Page switch */
  ignoreSiteFlag?: boolean
}

export async function CaseStudySliderSection({ title, subtitle, description, ignoreSiteFlag }: CaseStudySliderSectionProps = {}) {
  // Soft-launch: keep case study URLs open by slug, but hide from site surfaces
  if (!ignoreSiteFlag && !areCaseStudiesListed()) return null

  const data = await getCaseStudies()
  if (!data?.items?.length) return null

  return (
    <CaseStudySlider
      data={{
        ...data,
        sectionTitle: title || data.sectionTitle,
        sectionSubtitle: subtitle || data.sectionSubtitle,
        sectionDescription: description,
      }}
    />
  )
}
