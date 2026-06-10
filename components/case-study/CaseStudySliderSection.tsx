import { getCaseStudies } from '@/lib/sanity/queries'
import { CaseStudySlider } from './CaseStudySlider'

export async function CaseStudySliderSection() {
  const data = await getCaseStudies()
  if (!data?.items?.length) return null

  return <CaseStudySlider data={data} />
}
