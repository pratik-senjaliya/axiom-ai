import { ServiceHero } from "@/components/services/ServiceHero";
import { HorizontalFeature, HorizontalFeatureItem } from "@/components/services/HorizontalFeature";
import { FeatureGrid, FeatureItem } from "@/components/services/FeatureGrid";
import { FAQ } from "@/components/ui/FAQ";
import { DarkCTA } from "@/components/services/DarkCTA";
import { TestimonialCarousel } from "@/components/services/TestimonialCarousel";
import { RelatedInsights } from "@/components/services/RelatedInsights";
import { ObstacleSection } from "@/components/services/ObstacleSection";
import { PortableText } from "@/components/ui/PortableText";
import { ServicePageSchemas } from "@/components/seo/ServicePageSchemas";
import { getSiteUrl, portableTextToPlain } from "@/lib/seo";
import type { BlogPost } from "@/lib/blog";

interface SpecializedServiceLayoutProps {
  data: any;
  relatedPosts?: BlogPost[];
}

const layerIcons = [
  <svg key="1" className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>,
  <svg key="2" className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  <svg key="3" className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>,
  <svg key="4" className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
];

const pitfallIcons = [
  <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>,
  <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
  </svg>,
  <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>,
  <svg key="4" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
];

const modelIcons = [
  <svg key="1" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>,
  <svg key="2" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11 21v-7H6l9-12v7h5l-9 12z" />
  </svg>,
  <svg key="3" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path d="M4 7L12 3L20 7L12 11L4 7Z" />
    <path d="M4 12L12 16L20 12" />
    <path d="M4 17L12 21L20 17" />
  </svg>,
  <svg key="4" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>,
];

export function SpecializedServiceLayout({ data, relatedPosts = [] }: SpecializedServiceLayoutProps) {
  const layers = data?.layers ?? [];
  const useAiLayerGrid = layers.some((l: any) => l.outcome || !l.tasks?.length);

  const aiLayers = layers.map((layer: any) => ({
    title: layer.title,
    outcomeTitle: layer.outcome || "Business Value",
    outcomeDescription: layer.description,
  }));

  const horizontalLayers: HorizontalFeatureItem[] = layers.map((layer: any, index: number) => ({
    title: layer.title,
    description: layer.description,
    outcomeTitle: "Key Advantage",
    outcomeDescription: layer.tasks?.[0] || "",
    icon: layerIcons[index % layerIcons.length],
  }));

  const useCases: FeatureItem[] = (data?.useCases ?? []).map((uc: any) => ({
    title: uc.title,
    description: uc.description,
  }));

  const roadmapSteps: FeatureItem[] = (data?.roadmap ?? []).map((step: any, index: number) => ({
    stepNumber: index + 1,
    title: step.title,
    description: step.description,
  }));

  const engagementModels = (data?.models ?? []).map((model: any, index: number) => ({
    title: model.title,
    description: model.description,
    outcomeTitle: "Key Outcome",
    outcomeDescription: model.tasks?.[0] || "",
    icon: modelIcons[index % modelIcons.length],
  }));

  const pitfallItems = (data?.pitfalls ?? []).map((item: any, index: number) => ({
    title: item.title,
    description: item.description,
    icon: pitfallIcons[index % pitfallIcons.length],
  }));

  const faqs = (data?.faqs ?? []).map((faq: any) => ({
    question: faq.question,
    answer: <PortableText value={faq.answer} />,
  }));

  const finalCta = data?.finalCta;

  const serviceUrl = `${getSiteUrl()}/${data?.slug}`;

  return (
    <div className="pt-0 pb-0">
      <ServicePageSchemas
        title={data?.seo?.metaTitle || data?.hero?.title || data?.title}
        description={portableTextToPlain(data?.hero?.description)}
        url={serviceUrl}
        image={data?.seo?.openGraphImage || data?.hero?.image}
        seo={data?.seo}
        faqs={data?.faqs}
      />
      <ServiceHero
        backLink={{ href: "/", label: "Back to Home" }}
        badgeText={data?.hero?.badge}
        title={data?.hero?.title || data?.title}
        gradientTitlePart={data?.hero?.titleHighlight}
        description={data?.hero?.description}
        primaryButtonText={data?.hero?.primaryCta?.text}
        primaryButtonLink={data?.hero?.primaryCta?.link || "/contact"}
      />

      {pitfallItems.length > 0 && (
        <ObstacleSection title={data?.pitfallsHeadline} items={pitfallItems} />
      )}

      {layers.length > 0 && useAiLayerGrid && (
        <section className="py-24 relative overflow-hidden" style={{ background: "#0D1B2A" }}>
          <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
          <div className="container-custom px-4 relative z-10 max-w-[95rem] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-[2.5rem] font-bold text-white mb-6">
                {data?.layersHeadline}
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
              {aiLayers.map((item: FeatureItem, index: number) => (
                <div
                  key={index}
                  className="flex flex-col group w-full lg:basis-[calc(50%-2rem)] min-w-[320px] max-w-[500px]"
                >
                  <div
                    className="rounded-[2.5rem] p-8 md:p-10 flex flex-col h-full border transition-all duration-300"
                    style={{ background: "rgba(26,46,71,0.6)", borderColor: "rgba(0,229,255,0.12)", backdropFilter: "blur(10px)" }}
                  >
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-[#00E5FF] transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-base leading-relaxed mb-8" style={{ color: "#8FA3BF" }}>
                        <PortableText value={item.outcomeDescription} />
                      </div>
                    </div>
                    {item.outcomeTitle && (
                      <div
                        className="mt-auto p-6 rounded-2xl transition-all duration-300 group-hover:bg-[#00E5FF]/10"
                        style={{ background: "rgba(0,229,255,0.07)", border: "1px solid rgba(0,229,255,0.2)" }}
                      >
                        <div className="text-sm font-bold mb-1" style={{ color: "#00E5FF" }}>
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
      )}

      {layers.length > 0 && !useAiLayerGrid && (
        <HorizontalFeature items={horizontalLayers} bgWhite={true} />
      )}

      {useCases.length > 0 && (
        <FeatureGrid
          title={data?.useCasesHeadline}
          columns={2}
          items={useCases}
          bgWhite={false}
          small={true}
        />
      )}

      {roadmapSteps.length > 0 && (
        <FeatureGrid
          title={data?.roadmapHeadline}
          items={roadmapSteps}
          isRoadmap={true}
          bgWhite={true}
          small={true}
        />
      )}

      {engagementModels.length > 0 && (
        <FeatureGrid
          title={data?.modelsHeadline}
          items={engagementModels}
          columns={engagementModels.length >= 3 ? 3 : 2}
          bgWhite={true}
          small={true}
        />
      )}

      {(data?.testimonials?.length ?? 0) > 0 && (
        <TestimonialCarousel
          testimonials={data.testimonials}
          subtitle="CLIENT SUCCESS"
          title={data?.testimonialsTitle || "Powered by Innovation, Proven by Clients"}
        />
      )}

      {relatedPosts.length > 0 && (
        <RelatedInsights posts={relatedPosts} serviceName={data?.title || "Service"} />
      )}

      {faqs.length > 0 && (
        <section className="py-24 relative z-10" style={{ background: "#0A0F1F" }}>
          <div className="container-custom px-4 max-w-4xl mx-auto">
            <FAQ items={faqs} title="Frequently Asked Questions" />
          </div>
        </section>
      )}

      {finalCta && (
        <DarkCTA
          badgeText={finalCta.badgeText}
          title={finalCta.title}
          description={finalCta.description}
          buttonText={finalCta.buttonText}
          buttonHref={finalCta.buttonLink || "/contact"}
        />
      )}
    </div>
  );
}
