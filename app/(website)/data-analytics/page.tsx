import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/services/ServiceHero";
import { HorizontalFeature, HorizontalFeatureItem } from "@/components/services/HorizontalFeature";
import { FeatureGrid, FeatureItem } from "@/components/services/FeatureGrid";
import { getDataAnalyticsPage } from "@/lib/sanity/queries";
import { PortableText } from "@/components/ui/PortableText";
import { notFound } from "next/navigation";
import { ObstacleSection } from "@/components/services/ObstacleSection";
import Link from 'next/link';
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { StaggerGroup, StaggerItem } from "@/components/ui/animations/StaggerGroup";
import { HoverCard } from "@/components/ui/animations/HoverCard";

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
  const data = await getDataAnalyticsPage();
  if (!data) notFound();

  const engagementSteps: FeatureItem[] = (data?.engagementSteps || []).map((step: any, index: number) => ({
    stepNumber: index + 1,
    title: step.title,
    description: step.description,
  }));

  const problemItems = (data?.problems || []).map((p: any) => ({
    title: p.title,
    description: p.description
  }));

  const approachItems = (data?.approachCapabilities || []).map((l: any) => ({
    title: l.title,
    description: l.description,
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
        secondaryButtonText={data?.hero?.secondaryCta?.text}
        secondaryButtonLink={data?.hero?.secondaryCta?.link}
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
            <div className="max-w-4xl mb-16 text-left">
              <h2 className="type-section-title text-white mb-6">
                {data?.approachHeadline}
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
                outcomeTitle: "Key Capability",
                outcomeDescription: "" // Can be mapped if exists
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

      {useCaseItems.length > 0 && (
        <FeatureGrid 
          title={data?.useCasesHeadline}
          items={useCaseItems}
          columns={2}
          bgWhite={false}
          small={true}
        />
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
                   <Link href={cta.link || '#'} key={index}>
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
