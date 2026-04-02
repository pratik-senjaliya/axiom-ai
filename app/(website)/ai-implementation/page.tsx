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

  const pitfallItems = (data?.pitfalls || []).map((p: any) => ({
    title: p.title,
    description: p.description
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
        secondaryButtonText={data?.hero?.secondaryCta?.text}
        secondaryButtonLink={data?.hero?.secondaryCta?.link}
      />

      {/* Why AI Initiatives Stall Section */}
      <ObstacleSection 
        title={data?.pitfallsHeadline}
        items={pitfallItems}
      />

      <FeatureGrid 
        title={data?.layersHeadline}
        columns={2}
        items={aiLayers.length > 0 ? aiLayers : []}
        small={true}
        bgWhite={true}
      />

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
        subtitle="AI Success"
        title="Impact Stories"
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
