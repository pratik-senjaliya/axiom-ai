export interface CaseStudySpotlightData {
  headline?: string
  subline?: string
  ctaText?: string
  ctaLink?: string
  image?: string
  imageAlt?: string
}

export interface CaseStudiesSectionData {
  sectionTitle?: string
  sectionSubtitle?: string
  /** Optional portable text shown under the section title */
  sectionDescription?: any
  items?: CaseStudySpotlightData[]
}
