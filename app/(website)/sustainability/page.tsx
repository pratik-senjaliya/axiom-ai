import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FeatureGrid, FeatureItem } from "@/components/services/FeatureGrid";
import { FAQ } from "@/components/ui/FAQ";
import { DarkCTA } from "@/components/services/DarkCTA";
import { TestimonialCarousel } from "@/components/services/TestimonialCarousel";
import { RelatedInsights } from "@/components/services/RelatedInsights";
import { getSustainabilityPage, getLatestPostsByService } from "@/lib/sanity/queries";
import { PortableText } from "@/components/ui/PortableText";
import { ObstacleSection } from "@/components/services/ObstacleSection";
import { notFound } from "next/navigation";
import { StaggerGroup, StaggerItem } from "@/components/ui/animations/StaggerGroup";
import { HoverCard } from "@/components/ui/animations/HoverCard";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSustainabilityPage();
  const defaultTitle = "AI Sustainability Solutions | Carbon Tracking & ESG Automation";
  const defaultDesc = "Drive impact with sustainability solutions. Enable carbon tracking, automate ESG reporting, and optimize performance with data-driven insights.";
  
  if (!data?.seo) return {
    title: defaultTitle,
    description: defaultDesc,
  };
  return {
    title: data.seo.metaTitle || defaultTitle,
    description: data.seo.metaDescription || defaultDesc,
  };
}

export default async function SustainabilityPage() {
  const [data, relatedPosts] = await Promise.all([
    getSustainabilityPage(),
    getLatestPostsByService('sustainability')
  ]);
  
  if (!data) notFound();

  const obstacleIcons = [
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
    </svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m.796 9.038a9 9 0 01-5.892-5.892m5.892 5.892C10.73 19.174 11.354 19 12 19c.645 0 1.27.174 1.815.488m-5.131-5.131C8.114 13.886 8 13.003 8 12c0-1.003.114-1.886.684-2.357m7.131 7.131c.57.471.684 1.354.684 2.357 0 1.003-.114 1.886-.684 2.357m0-9.514c.202.404.316.86.316 1.342 0 .482-.114.938-.316 1.342m-.796-9.038a9 9 0 015.892 5.892m-5.892-5.892C13.27 4.826 12.646 5 12 5c-.645 0-1.27-.174-1.815-.488m5.131 5.131C15.886 10.114 16 10.997 16 12c0 1.003-.114 1.886-.684 2.357m-7.131-7.131c-.57-.471-.684-1.354-.684-2.357 0-1.003.114-1.886.684-2.357" />
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6" />
    </svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
    </svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
    </svg>
  ];

  const obstacleItems = (data?.pitfalls || []).map((obs: any, index: number) => ({
    title: obs.title,
    description: obs.description,
    icon: obstacleIcons[index % obstacleIcons.length]
  }));

  const hardcodedIcons = [
    (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  ];

  const serviceItems: FeatureItem[] = (data?.layers || []).map((layer: any, index: number) => ({
    title: layer.title,
    description: layer.description,
    outcomeTitle: "Key Focus",
    outcomeDescription: layer.tasks?.[0] || "",
    icon: hardcodedIcons[index % hardcodedIcons.length]
  }));

  const methodologySteps: FeatureItem[] = (data?.roadmap || []).map((step: any, index: number) => {
    const pillarIcons = [
      (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.364-6.364l-.707-.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M12 11a1 1 0 100-2 1 1 0 000 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21V11m0 0a5 5 0 10-5-5" />
        </svg>
      ),
      (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M11 12H3" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66h-1m-15.32 0h-1m7.66-7.66l-.707.707m7.071 7.071l-.707.707M5.636 5.636l-.707.707m7.071 7.071l-.707.707" />
        </svg>
      ),
      (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    ];

    return {
      title: step.title,
      description: step.description,
      icon: pillarIcons[index % pillarIcons.length]
    };
  });

  const faqs = (data?.faqs || []).map((faq: any) => ({
    question: faq.question,
    answer: <PortableText value={faq.answer} />
  }));

  return (
    <div className="pt-0 pb-0">
      <ServiceHero 
        badgeText={data?.hero?.badge}
        title={data?.hero?.title}
        gradientTitlePart={data?.hero?.titleHighlight}
        description={data?.hero?.description}
        primaryButtonText={data?.hero?.primaryCta?.text}
        primaryButtonLink={data?.hero?.primaryCta?.link}
      />

      {/* Obstacles Section */}
      <ObstacleSection 
        title={data?.pitfallsHeadline}
        items={obstacleItems}
      />

      <FeatureGrid 
        title={data?.layersHeadline}
        columns={2}
        items={serviceItems.length > 0 ? serviceItems : []}
        bgWhite={true}
        small={true}
      />

      {/* ── Sync Origins Advantage (Roadmap) ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#14243A' }}>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,229,255,0.03) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        <div className="container-custom px-4 relative z-10 max-w-[90rem] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="tracking-tight font-bold text-white text-2xl md:text-[2.25rem]">
              {data?.roadmapHeadline}
            </h2>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {methodologySteps.map((item, index) => (
              <StaggerItem key={index} className="h-full">
                <HoverCard 
                  className="rounded-[2rem] flex flex-col h-full p-6 border border-white/5 bg-[#1A2E47]/40 hover:bg-[#1A2E47]/60 group transition-all duration-300 items-start justify-start"
                  style={{ backdropFilter: 'blur(8px)' }}
                >
                  <div className="h-10 mb-6 flex items-center">
                    {item.icon && (
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#00E5FF]/10 text-[#00E5FF] group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                    )}
                  </div>
                  <div className="min-h-[3.5rem] mb-3">
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <div className="text-[0.9rem] leading-relaxed mb-6 flex-grow text-[#8FA3BF]">
                    <PortableText value={item.description} />
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <TestimonialCarousel 
        testimonials={data?.testimonials} 
        subtitle="AI SUCCESS"
        title="Powered by AI, Proven by Clients"
      />

      <RelatedInsights posts={relatedPosts} serviceName="Sustainability" />

      {faqs.length > 0 && (
        <section className="py-24 relative z-10" style={{ background: '#0A0F1F' }}>
          <div className="container-custom px-4 max-w-4xl mx-auto">
            <FAQ items={faqs} title="Frequently Asked Questions" />
          </div>
        </section>
      )}

      <DarkCTA 
        badgeText={data?.finalCta?.badgeText}
        title={data?.finalCta?.title}
        description={data?.finalCta?.description}
        buttonText={data?.finalCta?.buttonText}
        buttonHref={data?.finalCta?.buttonLink}
        useWhiteButton={true}
      />
    </div>
  );
}
