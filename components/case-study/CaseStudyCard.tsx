import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { CaseStudySpotlightData } from './types'

interface CaseStudyCardProps {
  item: CaseStudySpotlightData
}

export function CaseStudyCard({ item }: CaseStudyCardProps) {
  const ctaText = item.ctaText?.trim() || 'Read case study'

  return (
    <div
      className="overflow-hidden rounded-[2rem] border flex flex-col lg:flex-row min-h-[360px] lg:min-h-[420px] h-full"
      style={{
        borderColor: 'rgba(0,229,255,0.15)',
        background: 'linear-gradient(135deg, #0D1B2A 0%, #14243A 100%)',
        boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
      }}
    >
      <div className="order-2 lg:order-1 flex flex-col justify-center px-8 py-10 md:px-12 md:py-14 lg:w-[58%]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight mb-5">
          {item.headline}
        </h2>

        {item.subline && (
          <p className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: '#D4DEE8' }}>
            {item.subline}
          </p>
        )}

        <div className="mt-auto">
          <Link
            href={item.ctaLink!}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all hover:scale-[1.02]"
            style={{
              background: '#FFFFFF',
              color: '#0A0F1F',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            }}
          >
            {ctaText}
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </div>

      <div className="order-1 lg:order-2 relative min-h-[240px] sm:min-h-[300px] lg:min-h-0 lg:w-[42%]">
        <Image
          src={item.image!}
          alt={item.imageAlt || item.headline || 'Case study'}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 42vw"
        />
        <div
          className="absolute inset-0 pointer-events-none lg:bg-gradient-to-r lg:from-[#14243A] lg:via-transparent lg:to-transparent"
          aria-hidden
        />
      </div>
    </div>
  )
}
