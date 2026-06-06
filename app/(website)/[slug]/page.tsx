import type { Metadata } from "next";
import { getServiceBySlug, getAllServiceSlugs, getLatestPostsByService } from "@/lib/sanity/queries";
import { SpecializedServiceLayout } from "@/components/services/SpecializedServiceLayout";
import { client } from "@/lib/sanity/client";
import { generateMetadata as genMeta } from "@/lib/seo";
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
  const slugs = await getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedPosts = await getLatestPostsByService(slug, 3);
  return <SpecializedServiceLayout data={service} relatedPosts={relatedPosts} />;
}
