import { MetadataRoute } from 'next'
import { areCaseStudiesListed, isFinanceListed } from '@/lib/content-visibility'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://syncorigins.com'

  const disallow = ['/studio/', '/api/']
  if (!isFinanceListed()) disallow.push('/finance')
  if (!areCaseStudiesListed()) disallow.push('/case-studies/')

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
