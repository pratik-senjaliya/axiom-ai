import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity/client'

// Revalidate sitemap every hour
export const revalidate = 60

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://axiomai.com'

    // Fetch all dynamic content slugs from Sanity
    let serviceSlugs: string[] = [];
    let postSlugs: string[] = [];

    try {
        const [s, p] = await Promise.all([
            client.fetch<string[]>(`*[_type == "service"].slug.current`),
            client.fetch<string[]>(`*[_type == "post"].slug.current`)
        ]);
        serviceSlugs = s || [];
        postSlugs = p || [];
    } catch (e) {
        console.error("Error fetching sitemap slugs:", e);
    }

    // Static routes
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/solutions`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/insights`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/ai-implementation`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/data-analytics`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/erp-transformation`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/managed-delivery`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/sustainability`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms-of-usage`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]

    // Dynamic service pages (handled by [slug]/page.tsx at root)
    const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
        url: `${baseUrl}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Dynamic blog post pages (handled by insights/[slug]/page.tsx)
    const postRoutes: MetadataRoute.Sitemap = postSlugs.map((slug) => ({
        url: `${baseUrl}/insights/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Combine all routes
    return [...staticRoutes, ...serviceRoutes, ...postRoutes]
}
