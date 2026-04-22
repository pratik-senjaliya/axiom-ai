import type { Metadata } from "next";
import { getBlogPage, getAllPosts } from "@/lib/sanity/queries";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { DarkCTA } from "@/components/services/DarkCTA";
import { notFound } from "next/navigation";
import { PortableText } from "@/components/ui/PortableText";
import { SlideUp } from "@/components/ui/animations/SlideUp";

export const dynamic = "force-dynamic";

export async function generateMetadata({ 
  searchParams 
}: { 
  searchParams: Promise<{ category?: string }> 
}): Promise<Metadata> {
  const data = await getBlogPage();
  const resolvedParams = await searchParams;
  const activeCategory = resolvedParams.category || "All";
  const defaultTitle = `${activeCategory} Insights & AI Trends | Sync Origin`;
  const defaultDesc = "Stay updated with AI trends, industry insights, and digital transformation strategies to drive innovation and smarter decision-making with Sync Origin.";
  
  if (!data?.seo) return {
    title: defaultTitle,
    description: defaultDesc,
  };
  return {
    title: activeCategory !== "All" ? `${activeCategory} | AI Insights | Sync Origin` : (data.seo.metaTitle || defaultTitle),
    description: data.seo.metaDescription || defaultDesc,
  };
}

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00E5FF">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="#00E5FF"/>
  </svg>
);

export default async function InsightsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const [pageData, allPosts, resolvedParams] = await Promise.all([
    getBlogPage(),
    getAllPosts(),
    searchParams
  ]);
  
  if (!pageData) notFound();

  // Robustly extract category from awaited searchParams
  const categoryParam = resolvedParams.category;
  const activeCategory = typeof categoryParam === 'string' ? categoryParam : "All";

  // Category mapping: Labels to Sanity relatedService values
  const serviceMap: { [key: string]: string } = {
    "AI Implementation": "ai",
    "ERP Transformation": "erp",
    "Data & Analytics": "data",
    "Managed Delivery": "managed",
    "Sustainability": "sustainability"
  };

  const filteredPosts = activeCategory === "All" 
    ? allPosts 
    : allPosts.filter((p: any) => {
        const targetValue = serviceMap[activeCategory];
        return p.relatedService === targetValue;
      });

  return (
    <div className="pt-24 pb-0" style={{ background: '#0A0F1F' }}>
      
      {/* ── Interactive Grid & Hero Section (Hybrid) ── */}
      <BlogGrid 
         posts={allPosts} 
         categories={Object.keys(serviceMap)} 
         initialCategory={activeCategory} 
         pageData={pageData}
      />

      {/* Newsletter / Bottom CTA Layer */}
      <DarkCTA
        title={pageData?.newsletterTitle}
        description={pageData?.newsletterDescription}
        buttonText={pageData?.newsletterButtonText}
        buttonHref={pageData?.newsletterButtonLink}
      />
    </div>
  );
}
