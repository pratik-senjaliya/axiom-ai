import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity/client'

// Revalidate sitemap every hour
export const revalidate = 60

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://axiomai.com'

    // Fetch all dynamic content slugs from Sanity
    let serviceSlugs: string[] = [];
    let industrySlugs: string[] = [];
    let hireStaffSlugs: string[] = [];
    let postSlugs: string[] = [];

    try {
        const [s, i, h, p] = await Promise.all([
            client.fetch<string[]>(`*[_type == "service"].slug.current`),
            client.fetch<string[]>(`*[_type == "industry"].slug.current`),
            client.fetch<string[]>(`*[_type == "hireStaff"].slug.current`),
            client.fetch<string[]>(`*[_type == "post"].slug.current`)
        ]);
        serviceSlugs = s || [];
        industrySlugs = i || [];
        hireStaffSlugs = h || [];
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
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/data-analytics`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/managed-delivery`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/erp-transformation`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]

    // Dynamic service pages
    const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
        url: `${baseUrl}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Dynamic industry pages
    const industryRoutes: MetadataRoute.Sitemap = industrySlugs.map((slug) => ({
        url: `${baseUrl}/industries/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Dynamic hire staff pages
    const hireStaffRoutes: MetadataRoute.Sitemap = hireStaffSlugs.map((slug) => ({
        url: `${baseUrl}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Dynamic blog post pages
    const postRoutes: MetadataRoute.Sitemap = postSlugs.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Combine all routes
    return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...hireStaffRoutes, ...postRoutes]
}
