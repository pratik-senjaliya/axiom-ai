import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PortableText } from "@/components/ui/PortableText";
import { notFound } from "next/navigation";
import { getHomePage } from "@/lib/sanity/queries";
import { TestimonialCarousel } from "@/components/services/TestimonialCarousel";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomePage();
  const defaultTitle = "AI & Digital Transformation Solutions for Businesses | Axiom AI";
  const defaultDesc = "Drive growth with Axiom AI digital transformation solutions, including ERP transformation, managed delivery, and sustainable strategies to improve efficiency and performance.";
  
  if (!data?.seo) return {
    title: defaultTitle,
    description: defaultDesc,
  };
  return {
    title: data.seo.metaTitle || defaultTitle,
    description: data.seo.metaDescription || defaultDesc,
  };
}

const SparkleIcon = () => (
  <svg className="w-4 h-4" style={{ color: '#00E5FF' }} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
  </svg>
);

export default async function HomePage() {
  const data = await getHomePage();
  if (!data) notFound();

  const featureStats = [
    { value: "85%", label: "of AI projects fail", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
    { value: "75%", label: "exceed timeline", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg> },
    { value: "70%", label: "lack data strategy", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg> }
  ];

  const processStyles = [
    { bg: 'rgba(0,229,255,0.07)', border: 'rgba(0,229,255,0.2)', num: 'rgba(0,229,255,0.15)' },
    { bg: 'rgba(29,161,242,0.07)', border: 'rgba(29,161,242,0.2)', num: 'rgba(29,161,242,0.15)' },
    { bg: 'rgba(102,252,241,0.07)', border: 'rgba(102,252,241,0.2)', num: 'rgba(102,252,241,0.12)' },
  ];

  const personaGradients = [
    'linear-gradient(135deg, #1DA1F2, #00E5FF)',
    'linear-gradient(135deg, #00E5FF, #66FCF1)',
    'linear-gradient(135deg, #66FCF1, #1DA1F2)',
    'linear-gradient(135deg, #1DA1F2, #66FCF1)',
  ];

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden text-center" style={{ background: 'linear-gradient(180deg, #0A0F1F 0%, #0D1B2A 100%)' }}>
        <div className="bg-grid opacity-60 z-0" />
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70rem] h-[50rem] rounded-full blur-[120px] pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)' }} />
        <div className="absolute top-[30%] right-[5%] w-[35rem] h-[35rem] rounded-full blur-[100px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(29,161,242,0.09) 0%, transparent 70%)' }} />

        <div className="container-custom relative z-10 flex flex-col items-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8" style={{ background: 'rgba(0,229,255,0.08)', borderColor: 'rgba(0,229,255,0.3)' }}>
            <SparkleIcon />
            <span className="text-sm font-medium" style={{ color: '#00E5FF' }}>{data?.hero?.badge || "Enterprise AI & Data Advisory"}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8 leading-[1.05]">
            {(() => {
              const rawTitle = data?.hero?.title || "Architecting the";
              const highlight = data?.hero?.titleHighlight || "Intelligent Enterprise";

              if (rawTitle.toLowerCase().includes(highlight.toLowerCase())) {
                const parts = rawTitle.split(new RegExp(`(${highlight})`, "gi"));
                return (
                  <>
                    {parts.map((part: string, i: number) =>
                      part.toLowerCase() === highlight.toLowerCase() ? (
                        <span key={i} className="gradient-text">{part}</span>
                      ) : part
                    )}
                  </>
                );
              }
              return (
                <>
                  {rawTitle} <span className="gradient-text">{highlight}</span>
                </>
              );
            })()}
          </h1>

          <div className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-light" style={{ color: '#8FA3BF' }}>
            <PortableText value={data?.hero?.description} />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            {data?.hero?.primaryCta?.text && data?.hero?.primaryCta?.link && (
              <Link href={data.hero.primaryCta.link} className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto px-8 h-12 text-lg rounded-full flex items-center justify-center gap-2 font-bold border-none hover:scale-105 transition-all" style={{ background: 'linear-gradient(135deg, #1DA1F2, #00E5FF)', color: '#0A0F1F', boxShadow: '0 0 30px rgba(0,229,255,0.45)' }}>
                  {data.hero.primaryCta.text}
                  <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
            )}
            {data?.hero?.secondaryCta?.text && data?.hero?.secondaryCta?.link && (
              <Link href={data.hero.secondaryCta.link} className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto px-8 h-12 text-lg font-medium hover:text-[#00E5FF] transition-colors" style={{ background: 'rgba(20,36,58,0.7)', borderColor: 'rgba(0,229,255,0.3)', color: '#C5D1E0' }}>
                  {data.hero.secondaryCta.text}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* 2. Why Digital Transformations Fail */}
      <section className="py-24 relative" style={{ background: '#14243A' }}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-white mb-4">
              {data?.pitfallsHeadline}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data?.pitfalls?.map((card: any, index: number) => {
              const staticInfo = featureStats[index % featureStats.length];
              return (
                <div key={index} className="rounded-3xl p-8 flex flex-col justify-between h-full group transition-all duration-300 hover:[border-color:rgba(0,229,255,0.35)] hover:[box-shadow:0_0_25px_rgba(0,229,255,0.1)]" style={{ background: 'rgba(26,46,71,0.6)', border: '1px solid rgba(0,229,255,0.15)', backdropFilter: 'blur(10px)' }}>
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ background: 'rgba(0,229,255,0.1)', color: '#00E5FF' }}>
                      {staticInfo.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold mb-1" style={{ color: '#00E5FF' }}>{card.stat}</div>
                      <div className="text-xs font-medium uppercase tracking-wide" style={{ color: '#8FA3BF' }}>Business Risk</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                    <div className="leading-relaxed text-sm" style={{ color: '#8FA3BF' }}>
                      <PortableText value={card.description} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Enterprise-grade AI solutions */}
      <section id="services" className="py-24 relative" style={{ background: '#0A0F1F' }}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 font-medium mb-4" style={{ color: '#00E5FF' }}>
              <SparkleIcon />
              <span className="text-sm font-medium">What We Do</span>
            </div>
            <h2 className="type-section-title text-white mb-4">
              {data?.solutionsHeadline || "Enterprise-grade AI Solutions"}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data?.solutions?.map((card: any, idx: number) => (
              <div key={idx} className="group rounded-[32px] p-8 sm:p-10 transition-all duration-300 h-full flex flex-col hover:[border-color:rgba(0,229,255,0.35)] hover:[box-shadow:0_0_25px_rgba(0,229,255,0.12)]" style={{ background: 'rgba(20,36,58,0.7)', border: '1px solid rgba(0,229,255,0.1)', backdropFilter: 'blur(10px)' }}
              >
                <div className="flex items-center gap-2 mb-8 font-semibold text-[0.95rem]" style={{ color: '#00E5FF' }}>
                  <SparkleIcon />
                  <span>0{idx + 1}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">{card.title}</h3>
                <div className="leading-relaxed text-sm sm:text-[0.95rem]" style={{ color: '#8FA3BF' }}>
                  <PortableText value={card.description} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Three phases to transformation */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#0D1B2A' }}>
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 font-medium mb-4" style={{ color: '#00E5FF' }}>
              <SparkleIcon />
              <span className="text-sm font-medium">Our Approach</span>
            </div>
            <h2 className="type-section-title text-white mb-4">
              {data?.roadmapHeadline}
            </h2>
          </div>

          {data?.roadmap && data.roadmap.length > 0 && (
            <div className="grid md:grid-cols-3 gap-6 relative max-w-5xl mx-auto">
              {/* Dashed connector line */}
              <div className="hidden md:block absolute top-[50%] left-10 right-10 h-0 border-t border-dashed pointer-events-none" style={{ borderColor: 'rgba(0,229,255,0.2)' }} />

              {data.roadmap.map((phase: any, index: number) => {
                const style = processStyles[index % processStyles.length];
                return (
                  <div key={index} className="rounded-[24px] w-full max-w-[340px] h-[230px] p-7 mx-auto flex flex-col justify-center" style={{ background: style.bg, border: `1px solid ${style.border}` }}>
                    <div className="text-[4.25rem] font-black mb-3 leading-none select-none" style={{ color: style.num }}>
                      {phase.step || `0${index + 1}`}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                    <div className="leading-relaxed text-sm" style={{ color: '#8FA3BF' }}>
                      <PortableText value={phase.description} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 5. Built for Enterprise Leaders */}
      <section className="py-24 relative" style={{ background: '#14243A' }}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-white mb-4">
              {data?.personasHeadline}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data?.personas?.map((persona: any, index: number) => {
              const gradient = personaGradients[index % personaGradients.length];
              const personaIcon = [
                <svg key="0" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
                <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
              ][index % 4];
              return (
                <div key={index} className="rounded-3xl p-8" style={{ background: 'rgba(26,46,71,0.6)', border: '1px solid rgba(0,229,255,0.12)', backdropFilter: 'blur(10px)' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-[#0A0F1F]" style={{ background: gradient, boxShadow: '0 0 15px rgba(0,229,255,0.3)' }}>
                    {personaIcon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{persona.role}</h3>
                  <div className="text-sm leading-relaxed" style={{ color: '#8FA3BF' }}>
                    <PortableText value={persona.description} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5.5 Corporate Affiliation */}
      {data?.affiliationTitle && data?.affiliationBody && (
        <section className="py-24 relative overflow-hidden" style={{ background: '#0A0F1F' }}>
          <div className="absolute top-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.3), transparent)' }} />
          <div className="container-custom max-w-5xl mx-auto text-center relative z-10 px-4">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border" style={{ background: 'rgba(0,229,255,0.05)', borderColor: 'rgba(0,229,255,0.2)' }}>
              <SparkleIcon />
              <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#00E5FF' }}>
                {data?.affiliationHeadline || "Backed By"}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
              {data.affiliationTitle}
            </h2>
            <div className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto font-light" style={{ color: '#8FA3BF' }}>
              <PortableText value={data.affiliationBody} />
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.1), transparent)' }} />
        </section>
      )}

      {/* 5.75 Testimonials */}
      <TestimonialCarousel
        testimonials={data?.testimonials}
        subtitle="Success"
        title="Client Stories"
      />

      {/* 6. Contact CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0F1F 0%, #0D1B2A 50%, #14243A 100%)' }}>
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[30rem] rounded-full blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)' }} />
        {/* Top border accent */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(0,229,255,0.4), transparent)' }} />

        <div className="container-custom text-center relative z-10">
          <h2 className="type-section-title text-white mb-6">
            {data?.finalCta?.title}
          </h2>
          <div className="text-lg max-w-2xl mx-auto mb-10" style={{ color: '#8FA3BF' }}>
            <PortableText value={data?.finalCta?.description} />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {data?.finalCta?.primaryCta?.text && data?.finalCta?.primaryCta?.link && (
              <Link href={data.finalCta.primaryCta.link} className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto px-8 h-12 text-base rounded-2xl flex items-center justify-center gap-2 font-bold border-none hover:scale-105 transition-all" style={{ background: 'linear-gradient(135deg, #1DA1F2, #00E5FF)', color: '#0A0F1F', boxShadow: '0 0 30px rgba(0,229,255,0.4)' }}>
                  {data.finalCta.primaryCta.text}
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
