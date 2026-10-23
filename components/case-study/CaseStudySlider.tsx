'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CaseStudyCard } from './CaseStudyCard'
import type { CaseStudiesSectionData, CaseStudySpotlightData } from './types'

interface CaseStudySliderProps {
  data: CaseStudiesSectionData
}

function isValidItem(item: CaseStudySpotlightData) {
  return Boolean(item.headline && item.ctaLink && item.image)
}

export function CaseStudySlider({ data }: CaseStudySliderProps) {
  const items = (data.items || []).filter(isValidItem)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: items.length > 1,
    align: 'center',
    skipSnaps: false,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  if (!items.length) return null

  const sectionTitle = data.sectionTitle || 'Proven Impact in Production'
  const sectionSubtitle = data.sectionSubtitle || 'Case Studies'

  const navButton =
    'flex h-11 w-11 items-center justify-center rounded-full border border-line text-body transition-colors hover:border-line-accent hover:text-accent'

  return (
    <section className="relative overflow-x-clip bg-ink-900 section-y">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-line" />
      <div className="container-custom relative">
        <div className="reveal mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-5">{sectionSubtitle}</p>
            <h4 className="h-section">{sectionTitle}</h4>
          </div>
          {items.length > 1 && (
            <div className="flex gap-2">
              <button type="button" onClick={scrollPrev} className={navButton} aria-label="Previous case study">
                <ChevronLeft size={18} />
              </button>
              <button type="button" onClick={scrollNext} className={navButton} aria-label="Next case study">
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {items.map((item, index) => (
              <div key={index} className="min-w-0 flex-[0_0_100%] px-1 md:px-2">
                <CaseStudyCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
