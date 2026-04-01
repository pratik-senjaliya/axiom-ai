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
    <div className="pt-24 pb-0">
      <ServiceHero 
        badgeText={data?.hero?.badge || "Data & Analytics"}
        title={data?.hero?.title || "From Raw Data to"}
        gradientTitlePart={data?.hero?.titleHighlight || "Intelligent Systems"}
        description={data?.hero?.description}
        primaryButtonText={data?.hero?.primaryCta?.text}
        primaryButtonLink={data?.hero?.primaryCta?.link}
        secondaryButtonText={data?.hero?.secondaryCta?.text}
        secondaryButtonLink={data?.hero?.secondaryCta?.link}
      />

      {/* The Problem We Solve */}
      {data?.problemHeadline && (
        <section className="py-24 relative z-10 bg-[#1A1A1A] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>
          <div className="container-custom px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16 px-4">
              <h2 className="type-section-title text-white mb-6">
                {data.problemHeadline}
              </h2>
              {data.problemIntro && (
                <div className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
                    <PortableText value={data.problemIntro} />
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto px-4 lg:px-0">
              {problemItems.map((item: any, i: number) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                    <div className="text-neutral-400 leading-relaxed type-body-large">
                      <PortableText value={item.description} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {data.problemConclusion && (
                <div className="mt-16 text-center text-xl md:text-2xl font-semibold text-white max-w-4xl mx-auto">
                    <PortableText value={data.problemConclusion} />
                </div>
            )}
          </div>
        </section>
      )}

      {/* Our Approach */}
      {(data?.approachHeadline) && (
        <section className="py-24 relative z-10 bg-white">
          <div className="container-custom px-4">
            <div className="max-w-4xl mb-16 text-left">
              <h2 className="type-section-title text-[#26201D] mb-6">{data?.approachHeadline}</h2>
              {data.approachBody && (
                <div className="text-xl text-neutral-600 leading-relaxed font-medium">
                  <PortableText value={data.approachBody} />
                </div>
              )}
            </div>
            
            <div className="space-y-6 max-w-6xl">
              {approachItems.map((item: any, index: number) => (
                <div key={index} className="flex flex-col md:flex-row gap-8 bg-[#FAF8F5] rounded-[2rem] p-8 md:p-12 hover:bg-[#F2ECE4] transition-colors border border-neutral-100">
                  <div className="md:w-1/3 flex-shrink-0">
                    <h3 className="text-2xl font-bold text-[#26201D] mb-4">{item.title}</h3>
                  </div>
                  <div className="md:w-2/3">
                    <div className="text-lg text-neutral-600 leading-relaxed">
                      <PortableText value={item.description} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
          bgWhite={true}
          small={true}
        />
      )}

      {data?.technologies && data.technologies.length > 0 && (
        <section className="py-24 relative z-10 bg-[#FAF8F5]">
          <div className="container-custom px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="type-section-title tracking-tight text-[#26201D] mb-6">{data.techHeadline}</h2>
              {data.techBody && (
                <div className="text-lg text-neutral-500 max-w-3xl mx-auto">
                    <PortableText value={data.techBody} />
                </div>
              )}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {data.technologies.map((tech: any, i: number) => (
                <div key={i} className="card p-8 bg-white border border-neutral-100 rounded-3xl flex flex-col items-center text-center shadow-sm">
                  <h3 className="text-xl font-bold text-[#26201D] mb-4">{tech.title}</h3>
                  <div className="text-neutral-500 font-medium">
                    {tech.technologiesList}
                  </div>
                </div>
              ))}
            </div>
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
        <section className="py-24 relative overflow-hidden bg-[#26201D] mt-12">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>
          <div className="container-custom px-4 relative z-10 text-center flex flex-col items-center">
            
            <h2 className="type-section-title text-white mb-10 max-w-3xl">
              {data.ctaHeadline}
            </h2>
            
            {data.ctaOptions && data.ctaOptions.length > 0 && (
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center mb-12">
                {data.ctaOptions.map((cta: any, index: number) => (
                   <Link href={cta.link || '#'} key={index}>
                     <button className={`px-8 h-14 text-base rounded-full flex items-center justify-center gap-2 transition-all shadow-md ${
                       index === 0 
                       ? 'bg-gradient-to-r from-[#FF821C] to-[#AD58D9] text-white hover:opacity-90 border-none' 
                       : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                     }`}>
                       {cta.text}
                     </button>
                   </Link>
                ))}
              </div>
            )}

            {data.ctaClosing && (
                <p className="text-xl md:text-2xl text-[#FF821C] font-semibold max-w-2xl mx-auto">
                    {data.ctaClosing}
                </p>
            )}
            
          </div>
        </section>
      )}
    </div>
  );
}
