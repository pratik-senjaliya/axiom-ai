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
  items?: CaseStudySpotlightData[]
}
