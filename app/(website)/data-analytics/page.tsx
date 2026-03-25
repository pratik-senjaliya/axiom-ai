import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { HorizontalFeature, HorizontalFeatureItem } from "@/components/services/HorizontalFeature";
import { FeatureGrid, FeatureItem } from "@/components/services/FeatureGrid";
import { DarkCTA } from "@/components/services/DarkCTA";
import { client } from "@/lib/sanity/client";
import { PortableText } from "@portabletext/react";

export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch(`*[_type == "dataAnalyticsPage"][0]{ seo }`);
  if (!data?.seo) return {
    title: "Data & Analytics | AxiomAI",
    description: "Building the data foundations that power autonomous enterprise decisions.",
  };
  return {
    title: data.seo.metaTitle || "Data & Analytics | AxiomAI",
    description: data.seo.metaDescription || "Building the data foundations that power autonomous enterprise decisions.",
  };
}

export default async function DataAnalyticsPage() {
  const data = await client.fetch(`*[_type == "dataAnalyticsPage"][0]`);

  const hardcodedIcons = [
    (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z M4 12h16 M12 4v16" />
      </svg>
    ),
    (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.312-2.841.872-4.084" />
      </svg>
    ),
    (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  ];

  const dataServices: HorizontalFeatureItem[] = (data?.serviceAreas || []).map((service: any, index: number) => ({
    title: service.name,
    description: service.focus,
    outcomeTitle: service.sections?.[0]?.title || "",
    outcomeDescription: service.sections?.[0]?.tasks?.[0] || "",
    icon: hardcodedIcons[index % hardcodedIcons.length]
  }));

  const roadmapSteps: FeatureItem[] = (data?.process || []).map((step: any, index: number) => ({
    stepNumber: index + 1,
    title: step.title,
    description: step.description,
  }));

  return (
    <div className="pt-0 pb-0 bg-white">
      <ServiceHero 
        align="left"
        backLink={{ href: "/services", label: "Back to Services" }}
        pills={["Power BI", "Data Warehousing", "Predictive Analytics", "KPI Reporting"]}
        title={data?.introTitle || data?.title || "Data & Analytics"}
        description={data?.description || data?.hero?.subHeadline || "Turn data into decisions. From Power BI dashboards to predictive intelligence, we build the foundations for an AI-driven business."}
        primaryButtonText={data?.heroCTA?.text || "Get Data Assessment"}
        primaryButtonLink={data?.heroCTA?.link || "/contact"}
        secondaryButtonText={data?.secondaryCTA?.text || "Talk to a Specialist"}
        secondaryButtonLink={data?.secondaryCTA?.link || "/contact"}
      />

      {dataServices.length > 0 && (
        <HorizontalFeature 
          items={dataServices}
          bgWhite={true}
        />
      )}

      {roadmapSteps.length > 0 && (
        <FeatureGrid 
          title="From Audit to Intelligence"
          description="Our structured 4-phase rollout ensures safe and measurable value at every stage."
          items={roadmapSteps}
          isRoadmap={true}
          bgWhite={false}
          small={true}
        />
      )}

      <DarkCTA 
        title={data?.finalCTA?.title || "Build Data That Powers Decisions"}
        description={data?.finalCTA?.description || "Book a free strategy call. Understand your analytics maturity and path forward."}
        buttonText={data?.finalCTA?.cta?.text || "Book Free Strategy Call"}
        buttonHref={data?.finalCTA?.cta?.link || "/contact"}
        useWhiteButton={true}
      />
    </div>
  );
}
