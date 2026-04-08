import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/services/ServiceHero";
import { HorizontalFeature, HorizontalFeatureItem } from "@/components/services/HorizontalFeature";
import { FeatureGrid, FeatureItem } from "@/components/services/FeatureGrid";
import { getDataAnalyticsPage, getLatestPostsByService } from "@/lib/sanity/queries";
import { PortableText } from "@/components/ui/PortableText";
import { notFound } from "next/navigation";
import { ObstacleSection } from "@/components/services/ObstacleSection";
import Link from 'next/link';
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { StaggerGroup, StaggerItem } from "@/components/ui/animations/StaggerGroup";
import { HoverCard } from "@/components/ui/animations/HoverCard";
import { RelatedInsights } from "@/components/services/RelatedInsights";
import { TestimonialCarousel } from "@/components/services/TestimonialCarousel";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getDataAnalyticsPage();
  const defaultTitle = "Data Analytics Services for Insights & Business Growth";
  const defaultDesc = "Unlock insights with data analytics services. Turn data into smarter decisions, improve performance, and drive business growth with AI-powered analytics.";
  
  if (!data?.seo) return {
    title: defaultTitle,
    description: defaultDesc,
  };

  return {
    title: data.seo.metaTitle || defaultTitle,
    description: data.seo.metaDescription || defaultDesc,
    keywords: data.seo.metaKeywords,
    openGraph: {
      title: data.seo.metaTitle,
      description: data.seo.metaDescription,
      images: data.seo.openGraphImage ? [{ url: data.seo.openGraphImage }] : [],
    },
  };
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
      <ServiceHero 
        badgeText={data?.hero?.badge || "Data & Analytics"}
        title={data?.hero?.title}
        gradientTitlePart={data?.hero?.titleHighlight}
        description={data?.hero?.description}
        primaryButtonText={data?.hero?.primaryCta?.text}
        primaryButtonLink={data?.hero?.primaryCta?.link}
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
        <section className="py-24 relative z-10" style={{ background: '#14243A' }}>
          <div className="container-custom">
            <div className="max-w-4xl text-left">
              <h2 className="type-section-title text-white mb-6">
                {data?.approachHeadline || "Core Capabilities"}
              </h2>
              {data.approachBody && (
                <div className="type-lead" style={{ color: '#8FA3BF' }}>
                  <PortableText value={data.approachBody} />
                </div>
              )}
            </div>      
            <HorizontalFeature 
              items={approachItems.map((item: any) => ({
                ...item,
                outcomeTitle: "KEY OUTCOME",
                outcomeDescription: item.outcome
              }))}
            />
          </div>
        </section>
      )}

      {differentiatorItems.length > 0 && (
        <FeatureGrid 
          title={data?.differentiatorsHeadline}
          items={differentiatorItems}
          columns={2}
          bgWhite={false}
        />
      )}

      {/* ── Use Cases (Where Data Creates Immediate Impact) ── */}
      {useCaseItems.length > 0 && (
        <section className="py-24 relative overflow-hidden" style={{ background: '#14243A' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,229,255,0.03) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

          <div className="container-custom px-4 relative z-10 max-w-[90rem] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="tracking-tight font-bold text-white text-2xl md:text-[2.25rem]">
                {data?.useCasesHeadline}
              </h2>
            </div>

            <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {useCaseItems.map((item: any, index: number) => (
                <StaggerItem key={index} className="h-full">
                  <HoverCard 
                    className="rounded-[2rem] flex flex-col h-full p-6 border border-white/5 bg-[#1A2E47]/40 hover:bg-[#1A2E47]/60 group transition-all duration-300 items-start justify-start"
                    style={{ backdropFilter: 'blur(8px)' }}
                  >
                    {item.icon && (
                      <div className="h-10 mb-6 flex items-center">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#00E5FF]/10 text-[#00E5FF] group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                      </div>
                    )}
                    <div className="min-h-[3.5rem] mb-3">
                      <h3 className="text-lg font-bold text-white leading-snug group-hover:text-[#00E5FF] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <div className="text-[0.9rem] leading-relaxed text-[#8FA3BF] flex-grow">
                      <PortableText value={item.description} />
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}

      {data?.technologies && data.technologies.length > 0 && (
        <section className="py-24 relative z-10" style={{ background: '#0D1B2A' }}>
          <div className="container-custom px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="type-section-title tracking-tight text-white mb-6">{data.techHeadline}</h2>
              {data.techBody && (
                <div className="text-lg max-w-3xl mx-auto" style={{ color: '#8FA3BF' }}>
                    <PortableText value={data.techBody} />
                </div>
              )}
            </div>
            <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {data.technologies.map((tech: any, i: number) => (
                <StaggerItem key={i} className="h-full">
                  <HoverCard className="card p-8 rounded-3xl flex flex-col items-center text-center shadow-sm h-full" style={{ background: 'rgba(26,46,71,0.5)', border: '1px solid rgba(0,229,255,0.12)' }}>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00E5FF] transition-colors">{tech.title}</h3>
                    <div className="font-medium" style={{ color: '#C5D1E0' }}>
                      {tech.technologiesList}
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}

      {engagementSteps.length > 0 && (
        <FeatureGrid 
          title={data?.engagementHeadline}
          items={engagementSteps}
          columns={4}
          bgWhite={false}
          small={false}
        />
      )}

      <TestimonialCarousel 
        testimonials={data?.testimonials} 
        subtitle="AI SUCCESS"
        title="Powered by AI, Proven by Clients"
      />

      <RelatedInsights posts={relatedPosts} serviceName="Data & Analytics" />

      {/* Final Multi-CTA Layer */}
      {data?.ctaHeadline && (
        <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0F1F 0%, #0D1B2A 50%, #14243A 100%)' }}>
          {/* Grid overlay */}
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(to right, rgba(0,229,255,0.03) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[30rem] rounded-full blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)' }} />
          {/* Top border accent */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(0,229,255,0.4), transparent)' }} />
          
          <SlideUp className="container-custom px-4 relative z-10 text-center flex flex-col items-center">
            
            <h2 className="type-section-title text-white mb-10 max-w-3xl">
              {data.ctaHeadline}
            </h2>
            
            {data.ctaOptions && data.ctaOptions.length > 0 && (
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center mb-12">
                {data.ctaOptions.map((cta: any, index: number) => (
                   <Link href={cta.link || '/contact'} key={index}>
                     <button className="px-8 h-14 text-base rounded-full flex items-center justify-center gap-2 transition-all font-bold hover:scale-105"
                     style={index === 0
                       ? { background: 'linear-gradient(135deg, #1DA1F2, #00E5FF)', color: '#0A0F1F', border: 'none', boxShadow: '0 0 25px rgba(0,229,255,0.4)' }
                       : { background: 'rgba(20,36,58,0.7)', color: '#C5D1E0', border: '1px solid rgba(0,229,255,0.3)', boxShadow: '0 0 15px rgba(0,229,255,0.1) inset' }
                     }>
                       {cta.text}
                     </button>
                   </Link>
                ))}
              </div>
            )}

            {data.ctaClosing && (
                <p className="text-xl md:text-2xl font-semibold max-w-2xl mx-auto" style={{ color: '#8FA3BF' }}>
                    {data.ctaClosing}
                </p>
            )}
            
          </SlideUp>
        </section>
      )}
    </div>
  );
}
