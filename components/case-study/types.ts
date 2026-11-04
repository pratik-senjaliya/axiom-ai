export interface CaseStudySpotlightData {
  headline?: string
  subline?: string
  ctaText?: string
  ctaLink?: string
  image?: string
  imageAlt?: string
  /** Headline stats from the case study hero (up to 3) */
  stats?: { value?: string; label?: string }[]
}

export interface CaseStudiesSectionData {
  sectionTitle?: string
  sectionSubtitle?: string
  /** Optional portable text shown under the section title */
  sectionDescription?: any
  items?: CaseStudySpotlightData[]
}
