import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FeatureGrid, FeatureItem } from "@/components/services/FeatureGrid";
import { FAQ } from "@/components/ui/FAQ";
import { DarkCTA } from "@/components/services/DarkCTA";
import { client } from "@/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import { ObstacleSection } from "@/components/services/ObstacleSection";

export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch(`*[_type == "sustainabilityPage"][0]{ seo }`);
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
  const data = await client.fetch(`*[_type == "sustainabilityPage"][0]`);

  const obstacleItems = (data?.whyChooseUs || []).length > 0 ? data.whyChooseUs.map((obs: any) => ({
    title: obs.title,
    description: obs.description
  })) : [
    {
      title: "Manual ESG & Carbon Reporting",
      description: "Heavy reliance on spreadsheets and disconnected workflows leads to errors, delays, and audit risks."
    },
    {
      title: "Fragmented Emissions Data",
      description: "Carbon data is scattered across ERP systems, vendors, utilities, and manual inputs."
    },
    {
      title: "Limited Operational Visibility",
      description: "Lack of real-time tracking makes it difficult to act on emissions, inefficiencies, or waste."
    },
    {
      title: "No Measurable ROI Tracking",
      description: "Sustainability is often treated as a compliance cost rather than a performance driver."
    }
  ];

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

  const serviceItems: FeatureItem[] = (data?.serviceAreas || []).map((service: any, index: number) => ({
    title: service.name,
    description: service.focus,
    outcomeTitle: service.sections?.[0]?.title || "",
    outcomeDescription: service.sections?.[0]?.tasks?.[0] || "",
    icon: hardcodedIcons[index % hardcodedIcons.length]
  }));

  const methodologySteps: FeatureItem[] = (data?.process || []).map((step: any, index: number) => {
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

  const engagementModels = (data?.engagement?.models || []).map((model: any, index: number) => {
    const hardcodedEngIcons = [
      (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
    return {
      title: model.title,
      icon: hardcodedEngIcons[index % hardcodedEngIcons.length]
    };
  });

  const faqs = (data?.faqs || []).map((faq: any) => ({
    question: faq.question,
    answer: <PortableText value={faq.answer} />
  }));

  return (
    <div className="pt-0 pb-0">
      <ServiceHero 
        badgeText={data?.hero?.badge || "AI for Sustainable Operations"}
        title={data?.title?.split("Optimal and Measurable")[0] || "Make Sustainability"}
        gradientTitlePart="Operational and Measurable"
        description={data?.description || data?.hero?.subHeadline || "Use AI and enterprise data to improve carbon visibility, reporting accuracy, and operational efficiency."}
        primaryButtonText={data?.heroCTA?.text || "Explore Sustainability Pilot"}
        primaryButtonLink={data?.heroCTA?.link || "/contact"}
        secondaryButtonText={data?.secondaryCTA?.text || "Talk to a Sustainability Expert"}
        secondaryButtonLink={data?.secondaryCTA?.link || "/services"}
      />

      {/* Obstacles Section */}
      <ObstacleSection 
        title={data?.introTitle || "Why Sustainability Efforts Struggle"}
        subtitle="Traditional reporting can't keep up with the demands of modern enterprise green targets."
        items={obstacleItems}
      />

      <FeatureGrid 
        title="Sustainable AI Modules"
        description="Combining deep data engineering with specialized AI agents to accelerate your journey to Net Zero."
        columns={2}
        items={serviceItems.length > 0 ? serviceItems : []}
        bgWhite={true}
        small={true}
      />

      <FeatureGrid 
        title="Core Sustainability Pillars"
        description="Our comprehensive framework for integrating AI and data strategy to achieve measurable ESG outcomes."
        items={methodologySteps.length > 0 ? methodologySteps : []}
        columns={3}
        isRoadmap={false}
        bgWhite={false}
        small={true}
      />

      {/* Deployment Approach (Only render if provided) */}
      {engagementModels.length > 0 && (
        <section className="py-24 bg-[#FAF8F5]">
          <div className="container-custom px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#26201D]">
              {data?.engagement?.headline || "Deployment Approach"}
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
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="py-24 bg-white">
          <div className="container-custom px-4 max-w-4xl mx-auto">
            <FAQ items={faqs} title="Frequently Asked Questions" />
          </div>
        </section>
      )}

      <DarkCTA 
        title={data?.finalCTA?.title || "Turn Sustainability Into a Business Advantage"}
        description={data?.finalCTA?.description || "Start with a focused pilot. Measure real impact. Scale sustainability across your enterprise with confidence."}
        buttonText={data?.finalCTA?.cta?.text || "Schedule Sustainability Discussion"}
        buttonHref={data?.finalCTA?.cta?.link || "/contact"}
      />
    </div>
  );
}
