import type { Metadata } from "next";
import { getServiceBySlug, getHireStaffBySlug, getAllServiceSlugs, getAllHireStaffSlugs } from "@/lib/sanity/queries";
import { generateMetadata as genMeta } from "@/lib/seo";
import { notFound } from "next/navigation";

// Enable ISR - revalidate every 60 seconds
export const revalidate = 60;

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Helper function to determine content type
async function getContentBySlug(slug: string) {
    // Try service first
    const service = await getServiceBySlug(slug).catch(() => null);
    if (service) return { type: 'service' as const, data: service };

    // Try hire staff
    const hireStaff = await getHireStaffBySlug(slug).catch(() => null);
    if (hireStaff) return { type: 'hireStaff' as const, data: hireStaff };

    return null;
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const params = await props.params;
    const content = await getContentBySlug(params.slug);

    if (!content) {
        return genMeta({
            title: "Page Not Found",
            description: "The requested page could not be found.",
        });
    }

    const { data } = content;

    if (data.seo) {
        return genMeta({
            title: data.seo.metaTitle || data.title,
            description: data.seo.metaDescription || data.description,
            keywords: data.seo.metaKeywords,
            ogImage: data.seo.openGraphImage,
            slug: `/${params.slug}`
        });
    }

    return genMeta({
        title: data.title,
        description: data.description,
        slug: `/${params.slug}`
    });
}

export async function generateStaticParams() {
    const [serviceSlugs, hireStaffSlugs] = await Promise.all([
        getAllServiceSlugs(),
        getAllHireStaffSlugs(),
    ]);

    return [
        ...serviceSlugs.map((slug) => ({ slug })),
        ...hireStaffSlugs.map((slug) => ({ slug })),
    ];
}

export default async function UnifiedPage(props: PageProps) {
    const params = await props.params;
    const content = await getContentBySlug(params.slug);

    if (!content) {
        notFound();
    }

    // Direct rendering without dynamic imports to avoid delay
    // This approach statically imports both page components at build time
    if (content.type === 'service') {
        // Import at the top level for service
        const ServicePageComponent = (await import("@/app/(website)/services/[slug]/page")).default;
        return <ServicePageComponent params={props.params} />;
    }

    if (content.type === 'hireStaff') {
        // Import at the top level for hire staff
        const HireStaffPageComponent = (await import("@/app/(website)/hire-staff/[slug]/page")).default;
        return <HireStaffPageComponent params={props.params} />;
    }

    notFound();
}
