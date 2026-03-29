import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FeatureGrid, FeatureItem } from "@/components/services/FeatureGrid";
import { DarkCTA } from "@/components/services/DarkCTA";
import { getAIImplementationPage } from "@/lib/sanity/queries";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
import { FAQ } from "@/components/ui/FAQ";
import { ObstacleSection } from "@/components/services/ObstacleSection";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAIImplementationPage();
  if (!data?.seo) return {
    title: "AI Implementation & Strategy | AxiomAI",
    description: "From Generative AI to Agentic and Autonomous Systems — we design production-ready AI platforms.",
  };
  return {
    title: data.seo.metaTitle || "AI Implementation & Strategy | AxiomAI",
    description: data.seo.metaDescription || "From Generative AI to Agentic and Autonomous Systems — we design production-ready AI platforms.",
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
  const data = await getAIImplementationPage();
  if (!data) notFound();

  const pitfallItems = (data?.pitfalls || []).map((p: any) => ({
    title: p.title,
    description: p.description
  }));

  const aiLayers: FeatureItem[] = (data?.layers || []).map((layer: any) => ({
    title: layer.title,
    outcomeTitle: layer.outcome || "Business Value",
    outcomeDescription: <p>{layer.description}</p>
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

      {/* Minimal Deployment Models */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="container-custom px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#26201D]">
            {data?.modelsHeadline || "Engagement Models"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 max-w-5xl mx-auto">
            {engagementModels.map((item: any, index: number) => (
              <div key={index} className="flex flex-col items-center text-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-[#FF821C] flex items-center justify-center text-white shadow-[0_8px_16px_rgba(255,130,28,0.2)] transition-transform group-hover:scale-110 duration-300">
                  {item.icon}
                </div>
                <span className="font-bold text-base text-[#26201D] leading-[1.3] max-w-[180px]">
                  {item.title}
                </span>
                <p className="text-sm text-neutral-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      {faqs.length > 0 && (
        <section className="py-24 bg-white">
          <div className="container-custom px-4 max-w-4xl mx-auto">
            <FAQ items={faqs} title="Frequently Asked Questions" />
          </div>
        </section>
      )}

      <DarkCTA 
        title={data?.finalCta?.title}
        description={data?.finalCta?.description}
        buttonText={data?.finalCta?.primaryCta?.text}
        buttonHref={data?.finalCta?.primaryCta?.link}
      />
    </div>
  );
}
