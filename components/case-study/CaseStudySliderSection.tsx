import { getCaseStudies } from '@/lib/sanity/queries'
import { areCaseStudiesListed } from '@/lib/content-visibility'
import { CaseStudySlider } from './CaseStudySlider'

export async function CaseStudySliderSection() {
  // Soft-launch: keep case study URLs open by slug, but hide from site surfaces
  if (!areCaseStudiesListed()) return null

  const data = await getCaseStudies()
  if (!data?.items?.length) return null

  return <CaseStudySlider data={data} />
}
