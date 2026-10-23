import { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { HorizontalFeature, HorizontalFeatureItem } from "@/components/services/HorizontalFeature";
import { FeatureGrid, FeatureItem } from "@/components/services/FeatureGrid";
import { getDataAnalyticsPage, getLatestPostsByService } from "@/lib/sanity/queries";
import { PortableText } from "@/components/ui/PortableText";
import { notFound } from "next/navigation";
import { ObstacleSection } from "@/components/services/ObstacleSection";
import { ButtonLink, Section, SectionHeader } from "@/components/ui/kit";
import { CellGrid, FeatureCell } from "@/components/ui/blocks";
import { DarkCTA } from "@/components/services/DarkCTA";
import { RelatedInsights } from "@/components/services/RelatedInsights";
import { CaseStudySliderSection } from "@/components/case-study/CaseStudySliderSection";

import { generateMetadata as genMeta, getSiteUrl, portableTextToPlain } from "@/lib/seo";
import { ServicePageSchemas } from "@/components/seo/ServicePageSchemas";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getDataAnalyticsPage();
  const defaultTitle = "Data Analytics Services for Insights & Business Growth";
  const defaultDesc = "Unlock insights with data analytics services. Turn data into smarter decisions, improve performance, and drive business growth with AI-powered analytics.";
  
  if (!data?.seo) return genMeta({
    title: defaultTitle,
    description: defaultDesc,
    slug: "/data-analytics",
  });

  return genMeta({
    title: data.seo.metaTitle || defaultTitle,
    description: data.seo.metaDescription || defaultDesc,
    keywords: data.seo.metaKeywords,
    ogImage: data.seo.openGraphImage,
    slug: "/data-analytics",
  });
}

export default async function DataAnalyticsPage() {
  const [data, relatedPosts] = await Promise.all([
    getDataAnalyticsPage(),
    getLatestPostsByService('data')
  ]);
  
  if (!data) notFound();

  const problemIcons = [
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6" />
    </svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2m10-10h-2M4 10H2" />
    </svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
    </svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 14h2m-1-1v2" />
    </svg>
  ];

  const capabilityIcons = [
    // Data Foundation & Engineering
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>,
    // Modern Data Platform
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
    </svg>,
    // Business Intelligence
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>,
    // AI & Predictive
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>,
    // Governance & Security
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>,
    // Data Activation
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
    </svg>
  ];

  const hardcodedCapabilities = [
    {
      title: "Data Foundation & Engineering",
      description: "Unify fragmented data from ERP, CRM, IoT, and external systems into a single, reliable pipeline built for scale.",
      outcome: "Up to 2x faster data processing and 90% reduction in manual data handling"
    },
    {
      title: "Modern Data Platform (Warehouse + Lakehouse)",
      description: "Build a centralized data layer that handles both structured and unstructured data—ready for analytics, AI, and growth.",
      outcome: "Reduce infrastructure costs by 30–50% with a scalable, future-ready architecture"
    },
    {
      title: "Business Intelligence & Decision Dashboards",
      description: "Turn raw data into clear, actionable insights with dashboards tailored for leadership and operational teams.",
      outcome: "Enable 3x faster decision-making with real-time, self-serve insights"
    },
    {
      title: "AI, Predictive Analytics & Automation",
      description: "Move beyond reporting—predict demand, detect patterns, and automate decisions using advanced analytics and AI.",
      outcome: "Improve forecasting accuracy by 25–40% and automate up to 60% of repetitive decisions"
    },
    {
      title: "Data Governance, Security & Compliance",
      description: "Ensure your data is accurate, secure, and compliant with defined policies, access controls, and audit frameworks.",
      outcome: "Achieve 99%+ data accuracy and reduce compliance risks by up to 70%"
    },
    {
      title: "Data Activation & Reverse ETL",
      description: "Push insights back into your business tools—CRMs, marketing platforms, and operations systems—to drive action, not just analysis.",
      outcome: "Increase campaign and operational efficiency by 2x with real-time data activation"
    }
  ];

  const engagementSteps: FeatureItem[] = (data?.engagementSteps || []).map((step: any, index: number) => ({
    stepNumber: index + 1,
    title: step.title,
    description: step.description,
  }));

  const problemItems = (data?.problems || []).map((p: any, index: number) => ({
    title: p.title,
    description: p.description,
    icon: problemIcons[index % problemIcons.length]
  }));

  const approachItems = (data?.approachCapabilities && data.approachCapabilities.length > 0) 
    ? data.approachCapabilities.map((l: any, index: number) => ({
        title: l.title,
        description: l.description,
        outcome: l.outcome,
        icon: capabilityIcons[index % capabilityIcons.length]
      }))
    : hardcodedCapabilities.map((l: any, index: number) => ({
        title: l.title,
        description: l.description,
        outcome: l.outcome,
        icon: capabilityIcons[index % capabilityIcons.length]
      }));

  const differentiatorItems: FeatureItem[] = (data?.differentiators || []).map((d: any) => ({
    title: d.title,
    description: d.description
  }));

  const useCaseItems: FeatureItem[] = (data?.useCases || []).map((u: any) => ({
    title: u.title,
    description: u.description
  }));

  return (
    <div className="pt-0 pb-0">
      <ServicePageSchemas
        title={data?.seo?.metaTitle || data?.hero?.title || "Data & Analytics"}
        description={portableTextToPlain(data?.hero?.description)}
        url={`${getSiteUrl()}/data-analytics`}
        image={data?.seo?.openGraphImage || data?.hero?.image}
        seo={data?.seo}
        faqs={data?.faqs}
      />
      <ServiceHero
        badgeText={data?.hero?.badge || "Data & Analytics"}
        title={data?.hero?.title}
        gradientTitlePart={data?.hero?.titleHighlight}
        layer="data"
        description={data?.hero?.description}
        primaryButtonText={data?.hero?.primaryCta?.text}
        primaryButtonLink={data?.hero?.primaryCta?.link}
        secondaryButtonText={data?.hero?.secondaryCta?.text}
        secondaryButtonLink={data?.hero?.secondaryCta?.link}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: "Data & Analytics" },
        ]}
      />

      {/* The Problem We Solve */}
      {data?.problemHeadline && (
        <ObstacleSection 
          title={data.problemHeadline}
          subtitle={data.problemIntro ? <PortableText value={data.problemIntro} /> : undefined}
          items={problemItems}
        />
      )}

      {/* Our Approach */}
      {data?.approachHeadline && (
        <HorizontalFeature
          eyebrow="Core capabilities"
          title={data?.approachHeadline || "Core Capabilities"}
          description={data.approachBody}
          titleAs="h3"
          bgWhite={true}
          items={approachItems.map((item: any) => ({
            ...item,
            outcomeTitle: "Key outcome",
            outcomeDescription: item.outcome
          }))}
          ctaText={data?.approachCta?.text || "Plan Your Data Architecture"}
          ctaHref={data?.approachCta?.link || "/contact"}
        />
      )}

      {differentiatorItems.length > 0 && (
        <FeatureGrid 
          title={data?.differentiatorsHeadline}
          description={data?.differentiatorsDescription}
          items={differentiatorItems}
          columns={2}
          bgWhite={false}
          titleAs="h3"
        />
      )}

      {/* ── Use Cases (Where Data Creates Immediate Impact) ── */}
      {useCaseItems.length > 0 && (
        <Section tone="raised">
          <SectionHeader
            eyebrow="Use cases"
            title={data?.useCasesHeadline}
            description={data?.useCasesDescription}
            as="h3"
            layout={data?.useCasesDescription ? "split" : "stack"}
            className="mb-14 lg:mb-16"
          />
          <CellGrid cols={3}>
            {useCaseItems.map((item: any, index: number) => (
              <FeatureCell key={index} index={index} title={item.title} description={item.description} />
            ))}
          </CellGrid>
        </Section>
      )}

      {data?.technologies && data.technologies.length > 0 && (
        <Section tone="base">
          <SectionHeader
            eyebrow="Technology"
            title={data.techHeadline}
            description={data.techBody}
            as="h4"
            layout={data.techBody ? "split" : "stack"}
            className="mb-14 lg:mb-16"
          />
          <dl className="reveal border-t border-line">
            {data.technologies.map((tech: any, i: number) => {
              const list = typeof tech.technologiesList === "string" ? tech.technologiesList : "";
              const chips = list.includes(",") ? list.split(",").map((t: string) => t.trim()).filter(Boolean) : [];
              return (
                <div key={i} className="grid gap-4 border-b border-line py-7 md:grid-cols-12 md:gap-10">
                  <dt className="h-card md:col-span-4">{tech.title}</dt>
                  <dd className="md:col-span-8">
                    {chips.length > 0 ? (
                      <ul className="flex flex-wrap gap-2">
                        {chips.map((chip: string) => (
                          <li key={chip} className="chip">{chip}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="copy">{tech.technologiesList}</p>
                    )}
                  </dd>
                </div>
              );
            })}
          </dl>

          <div className="mt-12 flex justify-center">
            <ButtonLink href={data?.techCta?.link || "/contact"} arrow>
              {data?.techCta?.text || "Build Your Data Stack"}
            </ButtonLink>
          </div>
        </Section>
      )}

      {engagementSteps.length > 0 && (
        <FeatureGrid 
          title={data?.engagementHeadline}
          description={data?.engagementDescription}
          items={engagementSteps}
          columns={4}
          isRoadmap={true}
          bgWhite={true}
          small={false}
          titleAs="p"
        />
      )}

      <CaseStudySliderSection />

      <RelatedInsights posts={relatedPosts} serviceName="Data & Analytics" />

      {/* Final Multi-CTA Layer */}
      {data?.ctaHeadline && (
        <DarkCTA
          title={data.ctaHeadline}
          buttonText={data.ctaOptions?.[0]?.text}
          buttonHref={data.ctaOptions?.[0]?.link || "/contact"}
          secondaryActions={(data.ctaOptions || []).slice(1)}
          footnote={data.ctaClosing}
        />
      )}
    </div>
  );
}
