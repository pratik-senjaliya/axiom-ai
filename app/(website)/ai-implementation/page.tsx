import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FeatureGrid, FeatureItem } from "@/components/services/FeatureGrid";
import { DarkCTA } from "@/components/services/DarkCTA";
import { TestimonialCarousel } from "@/components/services/TestimonialCarousel";
import { RelatedInsights } from "@/components/services/RelatedInsights";
import { getAIImplementationPage, getLatestPostsByService } from "@/lib/sanity/queries";
import { PortableText } from "@/components/ui/PortableText";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
import { FAQ } from "@/components/ui/FAQ";
import { ObstacleSection } from "@/components/services/ObstacleSection";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAIImplementationPage();
  const defaultTitle = "AI Implementation Services for Business Automation & Growth";
  const defaultDesc = "Transform operations with AI implementation services. Automate workflows, improve efficiency, & smarter decision-making with tailored AI solutions.";
  
  if (!data?.seo) return {
    title: defaultTitle,
    description: defaultDesc,
  };
  return {
    title: data.seo.metaTitle || defaultTitle,
    description: data.seo.metaDescription || defaultDesc,
  };
}

const BrainIcon = () => (
  <svg className="w-4 h-4 text-[#FF821C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9.5 2A1.5 1.5 0 0 0 8 3.5V6a2 2 0 0 1-2 2h-2.5A1.5 1.5 0 0 0 2 9.5v5A1.5 1.5 0 0 0 3.5 16H6a2 2 0 0 1 2 2v2.5A1.5 1.5 0 0 0 9.5 22h5a1.5 1.5 0 0 0 1.5-1.5V18a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 20.5 8H18a2 2 0 0 1-2-2V3.5A1.5 1.5 0 0 0 14.5 2h-5z" />
    <path d="M12 8v8" />
    <path d="M8 12h8" />
  </svg>
);

export default async function AIImplementationPage() {
  const [data, relatedPosts] = await Promise.all([
    getAIImplementationPage(),
    getLatestPostsByService('ai')
  ]);
  
  if (!data) notFound();

  const pitfallIcons = [
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7v2m0 2h.01" />
    </svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6" />
    </svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6" />
    </svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.89 8.39a2 2 1 01-2.78 2.78l-4.24 4.24a2 2 1 1-1.42 3.42 2 2 1 01-3.42-1.42l4.24-4.24a2 2 1 012.78-2.78l4.24-4.24z" />
    </svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7v2m0 2h.01" />
    </svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v2m0 2h.01" />
    </svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14h4m-2-2v4" />
    </svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
    </svg>
  ];

  const pitfallItems = (data?.pitfalls || []).map((p: any, index: number) => ({
    title: p.title,
    description: p.description,
    icon: pitfallIcons[index % pitfallIcons.length]
  }));

  const aiLayers: FeatureItem[] = (data?.layers || []).map((layer: any) => ({
    title: layer.title,
    outcomeTitle: layer.outcome || "Business Value",
    outcomeDescription: layer.description
  }));

  const useCases: FeatureItem[] = (data?.useCases || []).map((uc: any) => ({
    title: uc.title,
    description: uc.description,
  }));

  const roadmapSteps: FeatureItem[] = (data?.roadmap || []).map((step: any, index: number) => ({
    stepNumber: index + 1,
    title: step.title,
    description: step.description,
  }));

  const modelIcons = [
    (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11 21v-7H6l9-12v7h5l-9 12z" />
      </svg>
    ),
    (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path d="M4 7L12 3L20 7L12 11L4 7Z" />
        <path d="M4 12L12 16L20 12" />
        <path d="M4 17L12 21L20 17" />
      </svg>
    ),
    (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  ];

  const engagementModels = (data?.models || []).map((model: any, index: number) => {
    return {
      title: model.title,
      description: model.description,
      icon: modelIcons[index % modelIcons.length]
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
        badgeIcon={<BrainIcon />}
        title={data?.hero?.title}
        gradientTitlePart={data?.hero?.titleHighlight}
        description={data?.hero?.description}
        primaryButtonText={data?.hero?.primaryCta?.text}
        primaryButtonLink={data?.hero?.primaryCta?.link}
      />

      {/* Why AI Initiatives Stall Section */}
      <ObstacleSection 
        title={data?.pitfallsHeadline}
        items={pitfallItems}
      />

      {/* Our Enterprise AI Stack (The 4 Layers) */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#0D1B2A' }}>
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
        <div className="container-custom px-4 relative z-10 max-w-[95rem] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-white mb-6">
              {data?.layersHeadline}
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {aiLayers.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col group w-full lg:basis-[calc(50%-2rem)] min-w-[320px] max-w-[500px]"
              >
                <div 
                  className="rounded-[2.5rem] p-8 md:p-10 flex flex-col h-full border transition-all duration-300" 
                  style={{ background: 'rgba(26,46,71,0.6)', borderColor: 'rgba(0,229,255,0.12)', backdropFilter: 'blur(10px)' }}
                >
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-[#00E5FF] transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-base leading-relaxed mb-8" style={{ color: '#8FA3BF' }}>
                      <PortableText value={item.outcomeDescription} />
                    </div>
                  </div>

                  {item.outcomeTitle && (
                    <div 
                      className="mt-auto p-6 rounded-2xl transition-all duration-300 group-hover:bg-[#00E5FF]/10" 
                      style={{ background: 'rgba(0,229,255,0.07)', border: '1px solid rgba(0,229,255,0.2)' }}
                    >
                      <div className="text-sm font-bold mb-1" style={{ color: '#00E5FF' }}>
                        {item.outcomeTitle}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid 
        title={data?.useCasesHeadline}
        columns={2}
        items={useCases.length > 0 ? useCases : []}
        bgWhite={false}
        small={true}
      />

      <FeatureGrid 
        title={data?.roadmapHeadline}
        items={roadmapSteps.length > 0 ? roadmapSteps : []}
        isRoadmap={true}
        bgWhite={true}
        small={true}
      />

      <FeatureGrid 
        title={data?.modelsHeadline}
        items={engagementModels.length > 0 ? engagementModels : []}
        columns={2}
        bgWhite={true}
        small={true}
      />

      <TestimonialCarousel 
        testimonials={data?.testimonials} 
        subtitle="AI SUCCESS"
        title="Powered by AI, Proven by Clients"
      />

      <RelatedInsights posts={relatedPosts} serviceName="AI Implementation" />

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
      />
    </div>
  );
}
