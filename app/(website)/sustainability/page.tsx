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

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSustainabilityPage();
  if (!data?.seo) return {
    title: "AI for Sustainable Operations | AxiomAI",
    description: "Use AI and enterprise data to improve carbon visibility, reporting accuracy, and operational efficiency.",
  };
  return {
    title: data.seo.metaTitle || "AI for Sustainable Operations | AxiomAI",
    description: data.seo.metaDescription || "Use AI and enterprise data to improve carbon visibility, reporting accuracy, and operational efficiency.",
  };
}

export default async function SustainabilityPage() {
  const [data, relatedPosts] = await Promise.all([
    getSustainabilityPage(),
    getLatestPostsByService('sustainability')
  ]);
  
  if (!data) notFound();

  const obstacleItems = (data?.pitfalls || []).map((obs: any) => ({
    title: obs.title,
    description: obs.description
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
        secondaryButtonText={data?.hero?.secondaryCta?.text}
        secondaryButtonLink={data?.hero?.secondaryCta?.link}
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

      <FeatureGrid 
        title={data?.roadmapHeadline}
        items={methodologySteps.length > 0 ? methodologySteps : []}
        columns={3}
        isRoadmap={false}
        bgWhite={false}
        small={true}
      />

      <TestimonialCarousel 
        testimonials={data?.testimonials} 
        subtitle="Green AI"
        title="Impact Stories"
      />

      <RelatedInsights posts={relatedPosts} serviceName="Sustainability" />

      {faqs.length > 0 && (
        <section className="py-24 bg-white">
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
