import type { Metadata } from "next";
import Link from "next/link";
import { PortableText } from "@/components/ui/PortableText";
import { getAboutPage } from "@/lib/sanity/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import { FeatureGrid, FeatureItem } from "@/components/services/FeatureGrid";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAboutPage();
  if (!data?.seo) return {
    title: "About Us | AxiomAI",
    description: "Who we are and our mission of engineering business success.",
  };

  return {
    title: data.seo.metaTitle,
    description: data.seo.metaDescription,
    keywords: data.seo.metaKeywords,
    openGraph: {
      title: data.seo.metaTitle,
      description: data.seo.metaDescription,
      images: data.seo.openGraphImage ? [{ url: data.seo.openGraphImage }] : [],
    },
  };
}

export default async function AboutPage() {
  const data = await getAboutPage();
  if (!data) notFound();

  const capabilitiesItems: FeatureItem[] = (data?.capabilities || []).map((cap: any) => ({
    title: cap.title,
    description: cap.description,
  }));

  const whyUsItems: FeatureItem[] = (data?.whyUsPoints || []).map((v: any) => ({
    title: v.title,
    description: v.description,
  }));

  return (
    <div className="pt-24 pb-0">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-[#FAF8F5]">
        <div className="absolute inset-0 z-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #FF821C 0%, transparent 40%), radial-gradient(circle at 0% 100%, #AD58D9 0%, transparent 40%)'}}></div>
        <div className="container-custom px-4 relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#F2ECE4] text-sm font-semibold text-[#FF821C] mb-8 shadow-sm">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="tracking-wide uppercase text-xs">{data?.hero?.badge || "About Us"}</span>
          </div>
          
          <h1 className="type-hero-title mb-8 max-w-5xl mx-auto">
            {data?.hero?.title || "Where Enterprise Systems Become"} <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF821C] to-[#AD58D9]">
              {data?.hero?.titleHighlight || "Intelligent"}
            </span>
          </h1>
          
          <div className="type-body-large text-neutral-500 max-w-3xl mx-auto">
            <PortableText value={data?.hero?.description} />
          </div>
        </div>
      </section>

      {/* Who We Are */}
      {data?.whoWeAreHeadline && (
        <section className="py-24 relative z-10 bg-white">
          <div className="container-custom px-4">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-5 relative">
                  <h2 className="type-section-title text-[#26201D] mb-8 sticky top-32">{data.whoWeAreHeadline}</h2>
                </div>
                <div className="lg:col-span-7">
                  <div className="prose prose-lg max-w-none text-neutral-500 [&>p]:mb-6 [&>ul]:mb-6 [&>ul>li]:mb-4 [&>ul>li]:flex [&>ul>li]:items-center [&>ul]:list-none [&>ul]:pl-0">
                    <PortableText value={data.whoWeAreBody} />
                  </div>
                </div>
            </div>
          </div>
        </section>
      )}

      {/* Philosophy Section */}
      {data?.philosophyHeadline && (
        <section className="py-24 relative z-10 bg-[#FAF8F5]">
          <div className="container-custom px-4 max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="type-section-title text-[#26201D] mb-6">{data.philosophyHeadline}</h2>
                <div className="prose prose-lg max-w-none text-neutral-500 mx-auto [&>ul]:list-none [&>ul]:pl-0 [&>ul>li]:bg-white [&>ul>li]:p-6 [&>ul>li]:rounded-2xl [&>ul>li]:border [&>ul>li]:border-neutral-100 [&>ul>li]:mb-4 [&>ul>li]:shadow-sm">
                  <PortableText value={data.philosophyBody} />
                </div>
            </div>

            {data.philosophyPrinciple && (
                <div className="bg-gradient-to-r from-[#FF821C] to-[#AD58D9] rounded-3xl p-10 md:p-14 text-center text-white shadow-lg transform -rotate-1 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8L3N2Zz4=')]"></div>
                    <p className="text-2xl md:text-3xl font-bold tracking-tight relative z-10 leading-snug">
                        "{data.philosophyPrinciple}"
                    </p>
                </div>
            )}
          </div>
        </section>
      )}

      {/* What We Do */}
      {capabilitiesItems.length > 0 && (
        <section className="py-24 relative z-10 bg-white">
          <div className="container-custom px-4 text-center">
            <h2 className="type-section-title text-[#26201D] mb-6">{data.whatWeDoHeadline}</h2>
            {data.whatWeDoIntro && (
                <div className="text-xl text-neutral-500 max-w-3xl mx-auto mb-16">
                    <PortableText value={data.whatWeDoIntro} />
                </div>
            )}
            <FeatureGrid 
              title=""
              items={capabilitiesItems}
              columns={2}
              bgWhite={true}
            />
          </div>
        </section>
      )}

      {/* Why Us */}
      {whyUsItems.length > 0 && (
        <section className="py-24 relative z-10 bg-[#FAF8F5]">
          <div className="container-custom px-4">
            <FeatureGrid 
              title={data.whyUsHeadline}
              items={whyUsItems}
              columns={2}
              bgWhite={true}
            />
            
            {data.visionStatement && (
                <div className="mt-20 max-w-4xl mx-auto text-center border-t border-neutral-200 pt-16">
                   <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#F2ECE4] text-sm font-semibold text-[#FF821C] mb-8 shadow-sm">
                     <span className="tracking-wide uppercase text-xs">Our Vision</span>
                   </div>
                   <div className="text-xl md:text-2xl text-[#26201D] font-medium leading-relaxed">
                       <PortableText value={data.visionStatement} />
                   </div>
                </div>
            )}
          </div>
        </section>
      )}

      {/* Final Multi-CTA Layer */}
      {data?.ctaHeadline && (
        <section className="py-24 relative overflow-hidden bg-[#26201D]">
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
                <p className="text-xl md:text-2xl text-neutral-400 font-medium max-w-3xl mx-auto">
                    {data.ctaClosing}
                </p>
            )}
            
          </div>
        </section>
      )}
    </div>
  );
}
