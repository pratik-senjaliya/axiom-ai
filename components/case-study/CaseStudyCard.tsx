import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { CaseStudySpotlightData } from './types'

interface CaseStudyCardProps {
  item: CaseStudySpotlightData
  /** First spotlight uses h4; subsequent use h5 per SEO hierarchy. */
  index?: number
}

export function CaseStudyCard({ item, index = 0 }: CaseStudyCardProps) {
  const ctaText = item.ctaText?.trim() || 'Read case study'
  const TitleTag = index === 0 ? 'h4' : 'h5'
  const href = item.ctaLink?.trim() || '/contact'

  return (
    <div className="panel-accent flex h-full min-h-[22rem] flex-col overflow-hidden lg:min-h-[26rem] lg:flex-row">
      <div className="order-2 flex flex-col justify-center px-7 py-10 sm:px-10 md:px-12 md:py-14 lg:order-1 lg:w-[58%]">
        <TitleTag className="font-display text-2xl font-semibold leading-tight tracking-tight text-fg md:text-3xl lg:text-[2.25rem]">
          {item.headline}
        </TitleTag>

        {item.subline && <p className="lead mt-5 max-w-2xl">{item.subline}</p>}

        <div className="mt-10">
          <Link href={href} className="btn btn-white group/btn h-11 px-6 text-[0.9375rem]">
            {ctaText}
            <ArrowRight size={16} aria-hidden className="transition-transform group-hover/btn:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div className="relative order-1 min-h-[15rem] sm:min-h-[18rem] lg:order-2 lg:min-h-0 lg:w-[42%]">
        <Image
          src={item.image!}
          alt={item.imageAlt || item.headline || 'Case study'}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 42vw"
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 lg:bg-gradient-to-r lg:from-[#0E1829] lg:via-transparent lg:to-transparent" />
      </div>
    </div>
  )
}
