import type { Metadata } from "next";
import { getBlogPage, getAllPosts } from "@/lib/sanity/queries";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { DarkCTA } from "@/components/services/DarkCTA";
import { notFound } from "next/navigation";
import { BLOG_FILTER_CATEGORIES } from "@/lib/blog";
import { generateMetadata as genMeta, getSiteUrl } from "@/lib/seo";
import { InnerPageSchemas } from "@/components/seo/PageSchemas";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}): Promise<Metadata> {
  const data = await getBlogPage();
  const resolvedParams = await searchParams;
  const activeCategory = resolvedParams.category || "All";
  const defaultTitle = `${activeCategory} Insights & AI Trends | SyncOrigins`;
  const defaultDesc =
    "Stay updated with AI trends, industry insights, and digital transformation strategies to drive innovation and smarter decision-making with SyncOrigins.";

  if (!data?.seo)
    return genMeta({
      title: defaultTitle,
      description: defaultDesc,
      slug: "/insights",
    });
  return genMeta({
    title:
      activeCategory !== "All"
        ? `${activeCategory} | AI Insights | SyncOrigins`
        : data.seo.metaTitle || defaultTitle,
    description: data.seo.metaDescription || defaultDesc,
    keywords: data.seo.metaKeywords,
    ogImage: data.seo.openGraphImage,
    slug: "/insights",
  });
}

export default async function InsightsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const [pageData, allPosts, resolvedParams] = await Promise.all([
    getBlogPage(),
    getAllPosts(),
    searchParams,
  ]);

  if (!pageData) notFound();

  const categoryParam = resolvedParams.category;
  const activeCategory = typeof categoryParam === "string" ? categoryParam : "All";
  const categories = BLOG_FILTER_CATEGORIES.map((c) => c.label);

  return (
    <div className="overflow-x-clip bg-ink-900 pt-[4.5rem]">
      <InnerPageSchemas
        title={pageData?.seo?.metaTitle || "Insights & AI Trends | SyncOrigins"}
        description={
          pageData?.seo?.metaDescription ||
          "Stay updated with AI trends, industry insights, and digital transformation strategies to drive innovation and smarter decision-making with SyncOrigins."
        }
        url={`${getSiteUrl()}/insights`}
        breadcrumbs={[
          { name: "Home", item: `${getSiteUrl()}/` },
          { name: "Insights", item: `${getSiteUrl()}/insights` },
        ]}
      />

      <BlogGrid
        posts={allPosts}
        categories={categories}
        initialCategory={activeCategory}
        pageData={pageData}
      />

      <DarkCTA
        title={pageData?.newsletterTitle}
        description={pageData?.newsletterDescription}
        buttonText={pageData?.newsletterButtonText}
        buttonHref={pageData?.newsletterButtonLink}
      />
    </div>
  );
}
