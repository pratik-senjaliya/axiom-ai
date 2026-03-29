import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { getHomePage } from "@/lib/sanity/queries";
import { TestimonialCarousel } from "@/components/services/TestimonialCarousel";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomePage();
  if (!data?.seo) return {
    title: "AxiomAI | Enterprise AI, ERP & Data Advisory",
    description: "Building the future of intelligent enterprise. Strategic guidance for digital transformation.",
  };
  return {
    title: data.seo.metaTitle || "AxiomAI | Enterprise AI, ERP & Data Advisory",
    description: data.seo.metaDescription || "Building the future of intelligent enterprise. Strategic guidance for digital transformation.",
  };
}

const SparkleIcon = () => (
  <svg className="w-4 h-4 text-primary-500" viewBox="0 0 24 24" fill="currentColor">
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
    { bg: "from-primary-500/20 to-primary-500/5", text: "text-primary-500/40" },
    { bg: "from-purple-500/20 to-purple-500/5", text: "text-purple-500/40" },
    { bg: "from-rose-500/20 to-rose-500/5", text: "text-rose-500/40" }
  ];

  const personaIcons = [
    { bg: "from-orange-400 to-pink-500", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
    { bg: "from-pink-500 to-rose-500", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
    { bg: "from-rose-500 to-primary-500", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
    { bg: "from-primary-500 to-orange-400", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> }
  ];

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden text-center">
        <div className="bg-grid opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-orange-100/40 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div className="absolute top-[40%] right-[10%] w-[40rem] h-[40rem] bg-violet-100/30 rounded-full blur-[100px] pointer-events-none -z-10"></div>

        <div className="container-custom relative z-10 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-neutral-200 shadow-sm mb-8">
            <SparkleIcon />
            <span className="text-sm font-medium text-neutral-800">{data?.hero?.badge || "Enterprise AI & Data Advisory"}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#26201D] tracking-tight mb-8 leading-[1.05]">
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
          
          <p className="text-lg md:text-xl text-neutral-500 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            {data?.hero?.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            {data?.hero?.primaryCta?.text && data?.hero?.primaryCta?.link && (
            <Link href={data.hero.primaryCta.link} className="w-full sm:w-auto">
              <Button size="lg" className="btn-primary w-full sm:w-auto px-8 h-12 text-lg rounded-full flex items-center justify-center gap-2 font-medium">
                {data.hero.primaryCta.text}
                <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
            )}
            {data?.hero?.secondaryCta?.text && data?.hero?.secondaryCta?.link && (
            <Link href={data.hero.secondaryCta.link} className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="bg-white border text-neutral-800 border-neutral-200 rounded-full hover:bg-neutral-50 shadow-sm w-full sm:w-auto px-8 h-12 text-lg font-medium">
                {data.hero.secondaryCta.text}
              </Button>
            </Link>
            )}
          </div>
        </div>
      </section>

      {/* 2. Why Digital Transformations Fail */}
      <section className="py-24 relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#26201D] mb-4">
              {data?.pitfallsHeadline}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data?.pitfalls?.map((card: any, index: number) => {
              const staticInfo = featureStats[index % featureStats.length];
              return (
                <div key={index} className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between h-full">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center">
                      {staticInfo.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-red-600 mb-1">{card.stat}</div>
                      <div className="text-xs font-medium text-neutral-400 uppercase tracking-wide">Business Risk</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#26201D] mb-3">{card.title}</h3>
                    <p className="text-neutral-500 leading-relaxed text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Enterprise-grade AI solutions */}
      <section id="services" className="py-24 relative bg-[#FDFDFC]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary-500 font-medium mb-4">
              <SparkleIcon />
              <span className="text-sm font-medium">What We Do</span>
            </div>
            <h2 className="type-section-title text-[#26201D] mb-4">
              {data?.solutionsHeadline || "Enterprise-grade AI Solutions"}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data?.solutions?.map((card: any, idx: number) => (
                <div key={idx} className="bg-[#FAF8F5] border border-transparent rounded-[32px] p-8 sm:p-10 transition-all duration-300 hover:bg-white hover:border-primary-500/30 hover:shadow-[0_8px_30px_rgba(249,118,31,0.12)] h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-8 text-primary-500 font-semibold text-[0.95rem]">
                    <SparkleIcon />
                    <span>0{idx + 1}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#26201D] mb-4 leading-tight">{card.title}</h3>
                  <p className="text-neutral-500 leading-relaxed text-sm sm:text-[0.95rem]">
                    {card.description}
                  </p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Three phases to transformation */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary-500 font-medium mb-4">
              <SparkleIcon />
              <span className="text-sm font-medium">Our Approach</span>
            </div>
            <h2 className="type-section-title text-[#26201D] mb-4">
              {data?.roadmapHeadline}
            </h2>
          </div>

          {data?.roadmap && data.roadmap.length > 0 && (
            <div className={`grid md:grid-cols-3 gap-6 relative max-w-5xl mx-auto`}>
              <div className="hidden md:block absolute top-[50%] left-10 right-10 h-0 border-t border-dashed border-neutral-300 -z-10"></div>
              
              {data.roadmap.map((phase: any, index: number) => {
                const style = processStyles[index % processStyles.length];
                return (
                  <div key={index} className={`bg-gradient-to-br ${style.bg} rounded-[24px] w-full max-w-[340px] h-[230px] p-7 shadow-sm mx-auto flex flex-col justify-center`}>
                    <div className={`${style.text} text-[4.25rem] font-black mb-3 leading-none`}>{phase.step || `0${index + 1}`}</div>
                    <h3 className="text-xl font-bold text-[#26201D] mb-2">{phase.title}</h3>
                    <p className="text-neutral-500 leading-relaxed text-sm">
                      {phase.description}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 5. Built for Enterprise Leaders */}
      <section className="py-24 relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#26201D] mb-4">
              {data?.personasHeadline}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data?.personas?.map((persona: any, index: number) => {
              const style = personaIcons[index % personaIcons.length];
              return (
                <div key={index} className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-bl ${style.bg} flex items-center justify-center mb-6 text-white shadow-inner`}>
                    {style.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#26201D] mb-3">{persona.role}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {persona.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5.5 Testimonials */}
      <TestimonialCarousel 
        testimonials={data?.testimonials} 
        subtitle="Success"
        title="Client Stories"
      />

      {/* 6. Contact CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(255, 130, 28, 0.08), rgba(173, 88, 217, 0.08))' }}>
        <div className="container-custom text-center relative z-10">
          <h2 className="type-section-title text-[#26201D] mb-6">
            {data?.finalCta?.title}
          </h2>
          <p className="text-lg text-[#6D5A4C] max-w-2xl mx-auto mb-10">
            {data?.finalCta?.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {data?.finalCta?.primaryCta?.text && data?.finalCta?.primaryCta?.link && (
            <Link href={data.finalCta.primaryCta.link} className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-8 h-12 text-base rounded-2xl flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF821C] to-[#D122E3] text-white hover:opacity-90 transition-colors shadow-sm border-none font-medium">
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
