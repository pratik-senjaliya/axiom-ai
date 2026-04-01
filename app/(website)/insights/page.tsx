import type { Metadata } from "next";
import { getBlogPage, getAllPosts } from "@/lib/sanity/queries";
import { BlogList } from "@/components/blog/BlogList";
import { DarkCTA } from "@/components/services/DarkCTA";
import { notFound } from "next/navigation";
import { PortableText } from "@/components/ui/PortableText";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getBlogPage();
  if (!data?.seo) return {
    title: "Insights | AxiomAI",
    description: "Expert perspectives on enterprise technology and digital transformation.",
  };
  return {
    title: data.seo.metaTitle || "Insights | AxiomAI",
    description: data.seo.metaDescription || "Expert perspectives on enterprise technology and digital transformation.",
  };
}

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="text-[#FF821C]">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
  </svg>
);

export default async function InsightsPage() {
  const [pageData, posts] = await Promise.all([
    getBlogPage(),
    getAllPosts()
  ]);
  if (!pageData) notFound();

  return (
    <div className="pt-24 pb-0 bg-white">
      {/* Hero Section */}
      <section className="py-12 relative overflow-hidden flex flex-col items-center text-center">
        <div className="bg-grid opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-orange-50/40 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-multiply"></div>
        <div className="container-custom relative z-10 px-4">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 bg-white/50 backdrop-blur-sm text-xs font-medium text-neutral-800 shadow-sm animate-fade-up">
            <SparkleIcon />
            <span>{pageData?.seo?.metaTitle?.split("|")[0] || pageData?.title}</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-5 text-[#26201D] max-w-4xl mx-auto animate-fade-up">
            <span className="gradient-text">{pageData?.title}</span>
          </h1>
          <div className="text-sm md:text-base text-neutral-500 max-w-2xl mx-auto mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <PortableText value={pageData?.description} />
          </div>
        </div>
      </section>

      {/* Grid Content with Filtering */}
      <section className="pb-24 pt-0 relative z-10">
        <BlogList posts={posts} />
      </section>

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
