import type { Metadata } from "next";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  getLatestPostsByService,
  getIndustryPageBySlug,
  getAllIndustryPageSlugs,
  getHirePageBySlug,
  getAllHirePageSlugs,
} from "@/lib/sanity/queries";
import { SpecializedServiceLayout } from "@/components/services/SpecializedServiceLayout";
import { IndustryPageLayout } from "@/components/industries/IndustryPageLayout";
import { HirePageLayout } from "@/components/hire/HirePageLayout";
import { client } from "@/lib/sanity/client";
import { generateMetadata as genMeta, portableTextToPlain } from "@/lib/seo";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const query = `*[_type == "service" && slug.current == $slug][0] {
    seo {
      metaTitle,
      metaDescription,
      metaKeywords,
      "openGraphImage": openGraphImage.asset->url
    },
    title,
    "description": hero.description
  }`;

  try {
    const service = await client.fetch(query, { slug: params.slug });

    if (service?.seo) {
      return genMeta({
        title: service.seo.metaTitle || service.title,
        description: service.seo.metaDescription || service.description,
        keywords: service.seo.metaKeywords,
        ogImage: service.seo.openGraphImage,
        slug: `/${params.slug}`,
      });
    }

    if (service) {
      return genMeta({
        title: service.title,
        description: service.description,
        slug: `/${params.slug}`,
      });
    }

    const industry = await getIndustryPageBySlug(params.slug);
    if (industry) {
      return genMeta({
        title: industry.seo?.metaTitle || `${industry.title} | Industry | SyncOrigins`,
        description: industry.seo?.metaDescription || portableTextToPlain(industry.hero?.description),
        keywords: industry.seo?.metaKeywords,
        ogImage: industry.seo?.openGraphImage,
        slug: `/${params.slug}`,
      });
    }

    const hirePage = await getHirePageBySlug(params.slug);
    if (hirePage) {
      return genMeta({
        title: hirePage.seo?.metaTitle || `Hire ${hirePage.title} | SyncOrigins`,
        description: hirePage.seo?.metaDescription || portableTextToPlain(hirePage.hero?.description),
        keywords: hirePage.seo?.metaKeywords,
        ogImage: hirePage.seo?.openGraphImage,
        slug: `/${params.slug}`,
      });
    }
  } catch (e) {
    console.error("Error fetching service metadata:", e);
  }

  return genMeta({
    title: "Service | SyncOrigins",
    description: "Detailed information about our professional advisory services.",
    slug: `/${params.slug}`,
  });
}

export async function generateStaticParams() {
  const [serviceSlugs, industrySlugs, hireSlugs] = await Promise.all([
    getAllServiceSlugs(),
    getAllIndustryPageSlugs(),
    getAllHirePageSlugs(),
  ]);
  return [...serviceSlugs, ...industrySlugs, ...hireSlugs].map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    const industry = await getIndustryPageBySlug(slug);
    if (!industry) {
      const hirePage = await getHirePageBySlug(slug);
      if (!hirePage) notFound();
      return <HirePageLayout data={hirePage} path={`/${slug}`} />;
    }

    const relatedPosts = await getLatestPostsByService(slug, 3);
    return (
      <IndustryPageLayout
        data={industry}
        industryName={industry.title}
        path={`/${slug}`}
        relatedPosts={relatedPosts}
      />
    );
  }

  const relatedPosts = await getLatestPostsByService(slug, 3);
  return <SpecializedServiceLayout data={service} relatedPosts={relatedPosts} />;
}
