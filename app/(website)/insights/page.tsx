import type { Metadata } from "next";
import { getBlogPage, getAllPosts } from "@/lib/sanity/queries";
import { BlogList } from "@/components/blog/BlogList";
import { DarkCTA } from "@/components/services/DarkCTA";
import { notFound } from "next/navigation";
import { PortableText } from "@/components/ui/PortableText";
import { SlideUp } from "@/components/ui/animations/SlideUp";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getBlogPage();
  const defaultTitle = "AI Insights, Trends & Digital Transformation Blogs | Axiom AI";
  const defaultDesc = "Stay updated with AI trends, industry insights, and digital transformation strategies to drive innovation and smarter decision-making with Axiom AI.";
  
  if (!data?.seo) return {
    title: defaultTitle,
    description: defaultDesc,
  };
  return {
    title: data.seo.metaTitle || defaultTitle,
    description: data.seo.metaDescription || defaultDesc,
  };
}

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00E5FF">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="#00E5FF"/>
  </svg>
);

export default async function InsightsPage() {
  const [pageData, posts] = await Promise.all([
    getBlogPage(),
    getAllPosts()
  ]);
  if (!pageData) notFound();

  return (
    <div className="pt-24 pb-0" style={{ background: '#0A0F1F' }}>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden text-center" style={{ background: 'linear-gradient(180deg, #0A0F1F 0%, #0D1B2A 100%)' }}>
        <div className="bg-grid opacity-60 z-0" />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70rem] h-[50rem] rounded-full blur-[130px] pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)' }} />
        <div className="absolute top-[20%] right-[5%] w-[35rem] h-[35rem] rounded-full blur-[100px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(29,161,242,0.07) 0%, transparent 70%)' }} />

        <SlideUp className="container-custom relative z-10 px-4 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8" style={{ background: 'rgba(0,229,255,0.08)', borderColor: 'rgba(0,229,255,0.3)', backdropFilter: 'blur(8px)' }}>
            <SparkleIcon />
            <span className="tracking-wide uppercase text-xs font-semibold" style={{ color: '#00E5FF' }}>
              {pageData?.seo?.metaTitle?.split("|")[0] || pageData?.title}
            </span>
          </div>
          <h1 className="type-hero-title text-white mb-8 max-w-5xl mx-auto">
            {pageData?.title}
          </h1>
          <div className="type-body-large max-w-3xl mx-auto text-[#8FA3BF] [&>p]:text-lg [&>p]:md:text-xl [&>p]:leading-relaxed" style={{ color: '#8FA3BF' }}>
            <PortableText value={pageData?.description} />
          </div>
        </SlideUp>
      </section>

      {/* Grid Content with Filtering */}
      <section className="pb-24 pt-4 md:pt-8 relative z-10" style={{ background: '#0A0F1F' }}>
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
