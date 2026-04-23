import type { Metadata } from "next";
import Link from "next/link";
import { PortableText } from "@/components/ui/PortableText";
import { getAboutPage } from "@/lib/sanity/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import { FeatureGrid, FeatureItem } from "@/components/services/FeatureGrid";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { FadeIn } from "@/components/ui/animations/FadeIn";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAboutPage();
  const defaultTitle = "About SyncOrigins - Driving Innovation with AI Solutions";
  const defaultDesc = "Learn about SyncOrigins, our mission, expertise, and commitment to delivering AI-driven solutions that transform businesses and accelerate growth.";

  if (!data?.seo) return {
    title: defaultTitle,
    description: defaultDesc,
  };
  return {
    title: (data.seo.metaTitle || defaultTitle).replace(/Axiom AI|AxiomAI|Sync Origin/g, "SyncOrigins"),
    description: (data.seo.metaDescription || defaultDesc).replace(/Axiom AI|AxiomAI|Sync Origin/g, "SyncOrigins"),
    keywords: data.seo.metaKeywords,
    openGraph: {
      title: (data.seo.metaTitle || defaultTitle).replace(/Axiom AI|AxiomAI|Sync Origin/g, "SyncOrigins"),
      description: (data.seo.metaDescription || defaultDesc).replace(/Axiom AI|AxiomAI|Sync Origin/g, "SyncOrigins"),
      images: data.seo.openGraphImage ? [{ url: data.seo.openGraphImage }] : [],
    },
  };
}

const SparkleIcon = () => (
  <svg className="w-4 h-4" style={{ color: '#00E5FF' }} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
  </svg>
);

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
    <div className="pt-24 pb-0" style={{ background: '#0A0F1F' }}>

      {/* ── Hero Section ── */}
      <section className="relative pt-20 pb-32 overflow-hidden text-center" style={{ background: 'linear-gradient(180deg, #0A0F1F 0%, #0D1B2A 100%)' }}>
        <div className="bg-grid opacity-60 z-0" />
        {/* Glow radials */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70rem] h-[50rem] rounded-full blur-[130px] pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)' }} />
        <div className="absolute top-[20%] right-[5%] w-[35rem] h-[35rem] rounded-full blur-[100px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(29,161,242,0.07) 0%, transparent 70%)' }} />

        <SlideUp className="container-custom px-4 relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8" style={{ background: 'rgba(0,229,255,0.08)', borderColor: 'rgba(0,229,255,0.3)' }}>
            <SparkleIcon />
            <span className="tracking-wide uppercase text-xs font-semibold" style={{ color: '#00E5FF' }}>
              {data?.hero?.badge || "About Us"}
            </span>
          </div>

          <h1 className="type-hero-title text-white mb-8 max-w-5xl mx-auto">
            {data?.hero?.title || "Where Enterprise Systems Become"}{" "}
            <br className="hidden md:block" />
            <span className="gradient-text">
              {data?.hero?.titleHighlight || "Intelligent"}
            </span>
          </h1>

          <div className="type-body-large max-w-3xl mx-auto" style={{ color: '#8FA3BF' }}>
            <PortableText value={data?.hero?.description} />
          </div>
        </SlideUp>
      </section>

      {/* ── Who We Are ── */}
      {data?.whoWeAreHeadline && (
        <section className="py-24 relative z-10" style={{ background: '#14243A' }}>
          <FadeIn className="container-custom px-4">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 relative">
                <h2 className="type-section-title text-white mb-8 sticky top-32">{data.whoWeAreHeadline}</h2>
              </div>
              <div className="lg:col-span-7">
                <div className="prose prose-lg max-w-none [&>p]:mb-6 [&>ul]:mb-6 [&>ul>li]:mb-4 [&>ul>li]:flex [&>ul>li]:items-center [&>ul]:list-none [&>ul]:pl-0" style={{ color: '#8FA3BF' }}>
                  <PortableText value={data.whoWeAreBody} />
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      )}

      {/* ── Philosophy Section ── */}
      {data?.philosophyHeadline && (
        <section className="py-24 relative z-10" style={{ background: '#0A0F1F' }}>
          <SlideUp className="container-custom px-4 max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="type-section-title text-white mb-6">{data.philosophyHeadline}</h2>
              <div className="max-w-3xl mx-auto text-lg leading-relaxed" style={{ color: '#8FA3BF' }}>
                <style>{`
                  .philosophy-body p {
                    margin-bottom: 2rem;
                    text-align: center;
                  }
                  .philosophy-body ul {
                    list-style: none;
                    padding: 0;
                    margin: 2rem 0;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                  }
                  .philosophy-body ul li {
                    background: rgba(26,46,71,0.6);
                    border: 1px solid rgba(0,229,255,0.15);
                    backdrop-filter: blur(10px);
                    border-radius: 1rem;
                    padding: 1.25rem 2rem;
                    color: white;
                    font-weight: 500;
                  }
                `}</style>
                <div className="philosophy-body">
                  <PortableText value={data.philosophyBody} />
                </div>
              </div>
            </div>

            {data.philosophyPrinciple && (
              <div className="rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden transition-transform duration-500 hover:scale-[1.02]" style={{ background: 'linear-gradient(135deg, #1DA1F2 0%, #00E5FF 100%)', boxShadow: '0 0 40px rgba(0,229,255,0.25)' }}>
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                <p className="text-2xl md:text-3xl font-bold tracking-tight relative z-10 leading-snug text-[#0A0F1F]">
                  &ldquo;{data.philosophyPrinciple}&rdquo;
                </p>
              </div>
            )}
          </SlideUp>
        </section>
      )}

      {/* ── What We Do ── */}
      {capabilitiesItems.length > 0 && (
        <FeatureGrid
          title={data.whatWeDoHeadline}
          description={data.whatWeDoIntro}
          items={capabilitiesItems}
          columns={2}
          bgWhite={true}
        />
      )}

      {/* ── Why Us ── */}
      {(whyUsItems.length > 0 || data.visionStatement) && (
        <>
          {whyUsItems.length > 0 && (
            <FeatureGrid
              title={data.whyUsHeadline}
              items={whyUsItems}
              columns={2}
              bgWhite={false}
            />
          )}

          {data.visionStatement && (
            <section className="pb-24 relative z-10" style={{ background: '#14243A' }}>
              <div className="container-custom px-4">
                <div className="max-w-4xl mx-auto text-center border-t pt-16" style={{ borderColor: 'rgba(0,229,255,0.15)' }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8" style={{ background: 'rgba(0,229,255,0.08)', borderColor: 'rgba(0,229,255,0.3)', color: '#00E5FF' }}>
                    <SparkleIcon />
                    <span className="tracking-wide uppercase text-xs font-semibold">Our Vision</span>
                  </div>
                  <div className="text-xl md:text-2xl font-medium leading-relaxed text-white">
                    <PortableText value={data.visionStatement} />
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* ── Final CTA ── */}
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
                      }
                    >
                      {cta.text}
                    </button>
                  </Link>
                ))}
              </div>
            )}

            {data.ctaClosing && (
              <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto" style={{ color: '#8FA3BF' }}>
                {data.ctaClosing}
              </p>
            )}
          </SlideUp>
        </section>
      )}
    </div>
  );
}
