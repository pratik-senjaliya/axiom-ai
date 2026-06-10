'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SlideUp } from '@/components/ui/animations/SlideUp'
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

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#0A0F1F' }}>
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(0,229,255,0.35), transparent)' }}
      />

      <div className="container-custom px-4 relative z-10">
        <SlideUp className="text-center mb-12 md:mb-14">
          <div
            className="inline-flex items-center gap-2 mb-4 font-semibold text-xs tracking-wide uppercase"
            style={{ color: '#00E5FF' }}
          >
            <span className="text-xl leading-none font-light block -mt-1">+</span>
            <span>{sectionSubtitle}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{sectionTitle}</h2>
        </SlideUp>

        <SlideUp delay={0.15} className="relative w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {items.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-1 md:px-2">
                  <CaseStudyCard item={item} />
                </div>
              ))}
            </div>
          </div>

          {items.length > 1 && (
            <div className="flex justify-center gap-4 mt-10">
              <button
                type="button"
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                style={{
                  border: '1px solid rgba(0,229,255,0.25)',
                  color: '#C5D1E0',
                  background: 'rgba(20,36,58,0.7)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = '#00E5FF'
                  el.style.color = '#00E5FF'
                  el.style.boxShadow = '0 0 15px rgba(0,229,255,0.3)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(0,229,255,0.25)'
                  el.style.color = '#C5D1E0'
                  el.style.boxShadow = ''
                }}
                aria-label="Previous case study"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                style={{
                  border: '1px solid rgba(0,229,255,0.25)',
                  color: '#C5D1E0',
                  background: 'rgba(20,36,58,0.7)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = '#00E5FF'
                  el.style.color = '#00E5FF'
                  el.style.boxShadow = '0 0 15px rgba(0,229,255,0.3)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(0,229,255,0.25)'
                  el.style.color = '#C5D1E0'
                  el.style.boxShadow = ''
                }}
                aria-label="Next case study"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </SlideUp>
      </div>
    </section>
  )
}
