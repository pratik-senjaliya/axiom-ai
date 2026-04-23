import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PortableText } from "@/components/ui/PortableText";
import { DarkCTA } from "@/components/services/DarkCTA";
import { getUseCasesPage } from "@/lib/sanity/queries";
import { TestimonialCarousel } from "@/components/services/TestimonialCarousel";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { SolutionsGrid } from "@/components/solutions/SolutionsGrid";

export const dynamic = "force-dynamic";

export async function generateMetadata({ 
  searchParams 
}: { 
  searchParams: Promise<{ tag?: string }> 
}): Promise<Metadata> {
  const data = await getUseCasesPage();
  const resolvedParams = await searchParams;
  const tag = resolvedParams.tag;
  const defaultTitle = "Enterprise AI Solutions Across Industries | SyncOrigins";
  const defaultDesc = "Explore high-impact AI solutions across industries, leveraging automation and objective execution to drive measurable ROI.";
  
  if (!data?.seo) return {
    title: tag ? `${tag} Solutions | SyncOrigins` : defaultTitle,
    description: defaultDesc,
  };
  return {
    title: (tag ? `${tag} | ${data.seo.metaTitle || defaultTitle}` : (data.seo.metaTitle || defaultTitle)).replace(/Axiom AI|AxiomAI|Sync Origin/g, "SyncOrigins"),
    description: (data.seo.metaDescription || defaultDesc).replace(/Axiom AI|AxiomAI|Sync Origin/g, "SyncOrigins"),
  };
}

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" style={{ color: '#00E5FF' }}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
  </svg>
);

export default async function SolutionsPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const [data, resolvedParams] = await Promise.all([
    getUseCasesPage(),
    searchParams
  ]);
  const activeTag = resolvedParams.tag || null;

  const allTags = [
    "AI Agents",
    "Machine Learning",
    "Data Engineering",
    "Advanced Analytics",
    "Azure OpenAI",
    "Data Platforms",
    "Business Intelligence",
    "Workflow Automation",
    "ERP"
  ];

  return (
    <div className="pt-24 pb-0" style={{ background: '#0A0F1F' }}>
      
      {/* ── Interactive Grid & Hero Section (Hybrid) ── */}
      <SolutionsGrid 
        cases={data?.cases || []} 
        allTags={allTags} 
        initialTag={activeTag} 
        heroData={data?.hero} 
      />

      {/* ── Testimonials ── */}
      <TestimonialCarousel 
        testimonials={data?.testimonials} 
        subtitle="AI SUCCESS"
        title="Powered by AI, Proven by Clients"
      />

      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0A0F1F 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(to right, rgba(0,229,255,0.03) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[30rem] rounded-full blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)' }} />

        <SlideUp className="container-custom relative z-10 text-center flex flex-col items-center">
          <h2 className="type-section-title text-white mb-6">
            {data?.midPageCta?.title}
          </h2>
          <div className="text-lg max-w-2xl mx-auto mb-10" style={{ color: '#8FA3BF' }}>
            <PortableText value={data?.midPageCta?.description} />
          </div>
          {data?.midPageCta?.primaryCta?.text && (
            <Link href={data.midPageCta.primaryCta.link || "/contact"} className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-8 h-14 text-base rounded-full flex items-center justify-center gap-2 border-none transition-all hover:scale-[1.02] shadow-md hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #1DA1F2, #00E5FF)', color: '#0A0F1F', boxShadow: '0 0 20px rgba(0,229,255,0.3)' }}
              >
                {data.midPageCta.primaryCta.text}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </Link>
          )}
        </SlideUp>
      </section>

      {data?.pocOffer && (
        <DarkCTA 
            title={data.pocOffer.title}
            description={data.pocOffer.description}
            buttonText="Start Your Pilot"
            buttonHref="/contact"
        />
      )}
    </div>
  );
}
