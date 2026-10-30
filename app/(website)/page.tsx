import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PortableText } from "@/components/ui/PortableText";
import { notFound } from "next/navigation";
import { getHomePage, getLatestPosts } from "@/lib/sanity/queries";
import { CaseStudySliderSection } from "@/components/case-study/CaseStudySliderSection";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { StaggerGroup, StaggerItem } from "@/components/ui/animations/StaggerGroup";
import { HoverCard } from "@/components/ui/animations/HoverCard";
import { generateMetadata as genMeta, getSiteUrl, portableTextToPlain, SITE_SCHEMA_DESCRIPTION } from "@/lib/seo";
import { FAQ } from "@/components/ui/FAQ";
import { HomePageSchemas } from "@/components/seo/PageSchemas";
import { areCaseStudiesListed } from "@/lib/content-visibility";
import { TestimonialCarousel } from "@/components/services/TestimonialCarousel";
import { RelatedInsights } from "@/components/services/RelatedInsights";
import { ArrowRight, Boxes, Brain, Building2, Database, Layers, Rocket, SlidersHorizontal, Users } from "lucide-react";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomePage();
  const defaultTitle = "AI & Digital Transformation Solutions for Businesses | SyncOrigins";
  const defaultDesc = "Drive growth with SyncOrigins digital transformation solutions, including ERP transformation, managed delivery, and sustainable strategies to improve efficiency and performance.";
  
  if (!data?.seo) return genMeta({
    title: defaultTitle,
    description: defaultDesc,
    slug: "/",
  });
  return genMeta({
    title: data.seo.metaTitle || defaultTitle,
    description: data.seo.metaDescription || defaultDesc,
    keywords: data.seo.metaKeywords,
    ogImage: data.seo.openGraphImage,
    slug: "/",
  });
}

const SparkleIcon = () => (
  <svg className="w-4 h-4" style={{ color: '#00E5FF' }} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
  </svg>
);

/** Grid spans for the "What We Build" cards so the last row always fills the width */
function solutionSpan(index: number, total: number) {
  const lastRow = total % 3;
  const inLastRow = index >= total - lastRow;
  const lg = !inLastRow ? "lg:col-span-2" : lastRow === 2 ? "lg:col-span-3" : "lg:col-span-6";
  const md = total % 2 === 1 && index === total - 1 ? "md:col-span-2" : "";
  return `${lg} ${md}`;
}

export default async function HomePage() {
  const data = await getHomePage();
  if (!data) notFound();

  const featureStats = [
    { value: "85%", label: "of AI projects fail", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
    { value: "75%", label: "exceed timeline", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg> },
    { value: "70%", label: "lack data strategy", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg> },
    { value: "60%", label: "budget burn", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> }
  ];

  const processStyles = [
    { bg: 'rgba(0,229,255,0.07)', border: 'rgba(0,229,255,0.2)', num: 'rgba(0,229,255,0.15)' },
    { bg: 'rgba(29,161,242,0.07)', border: 'rgba(29,161,242,0.2)', num: 'rgba(29,161,242,0.15)' },
    { bg: 'rgba(102,252,241,0.07)', border: 'rgba(102,252,241,0.2)', num: 'rgba(102,252,241,0.12)' },
  ];

  const hireIcons = [Brain, Database, Boxes, Users];
  const whyIcons = [Layers, Building2, SlidersHorizontal, Rocket];
  const showCaseStudies = data?.showCaseStudies === true;
  const testimonials = data?.testimonials || [];
  const latestPosts = data?.showInsights !== false ? await getLatestPosts(data?.insightsCount || 3) : [];

  const personaGradients = [
    'linear-gradient(135deg, #1DA1F2, #00E5FF)',
    'linear-gradient(135deg, #00E5FF, #66FCF1)',
    'linear-gradient(135deg, #66FCF1, #1DA1F2)',
    'linear-gradient(135deg, #1DA1F2, #66FCF1)',
  ];

  const fallbackFaqs = [
    {
      question: "What does SyncOrigins specialize in?",
      answer: "We help enterprises turn AI, data, and ERP initiatives into production-ready systems—with governance, measurable ROI, and clear execution paths beyond pilots.",
    },
    {
      question: "How is SyncOrigins different from typical AI consultancies?",
      answer: "We focus on outcomes, not demos. Our work spans strategy through delivery—integrating GenAI, data platforms, and ERP so solutions scale in real operating environments.",
    },
    {
      question: "Who do you typically work with?",
      answer: "We partner with CXOs, transformation leaders, and delivery teams who need reliable execution across AI implementation, ERP transformation, data & analytics, and managed delivery.",
    },
    {
      question: "How do engagements usually start?",
      answer: "Most clients begin with a focused pilot or assessment to define scope, risks, and success metrics—then move into a phased roadmap toward production.",
    },
    {
      question: "Can you work with our existing ERP and data stack?",
      answer: "Yes. We design and deliver within your current systems and processes so new capabilities integrate cleanly instead of creating parallel silos.",
    },
  ];

  const faqs = (data?.faqs?.length ? data.faqs : fallbackFaqs).map((faq: any) => ({
    question: faq.question,
    answer: data?.faqs?.length ? <PortableText value={faq.answer} /> : faq.answer,
  }));

  const faqSchemaItems = (data?.faqs?.length ? data.faqs : fallbackFaqs).map((faq: any) => ({
    question: faq.question,
    answer: data?.faqs?.length ? faq.answer : faq.answer,
  }));

  const pageTitle = data?.seo?.metaTitle || "AI & Digital Transformation Solutions for Businesses | SyncOrigins";
  const pageDescription = data?.seo?.metaDescription || SITE_SCHEMA_DESCRIPTION;

  return (
    <>
      <HomePageSchemas
        title={pageTitle}
        description={pageDescription}
        url={`${getSiteUrl()}/`}
        faqs={faqSchemaItems}
      />
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-12 overflow-hidden text-center" style={{ background: 'linear-gradient(180deg, #0A0F1F 0%, #0D1B2A 100%)' }}>
        <div className="bg-grid opacity-60 z-0" />
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70rem] h-[50rem] rounded-full blur-[120px] pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)' }} />
        <div className="absolute top-[30%] right-[5%] w-[35rem] h-[35rem] rounded-full blur-[100px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(29,161,242,0.09) 0%, transparent 70%)' }} />

        <SlideUp className="container-custom relative z-10 flex flex-col items-center">

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

          <div className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed font-light" style={{ color: '#8FA3BF' }}>
            <PortableText value={data?.hero?.description} className="prose-tight" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {data?.hero?.primaryCta?.text && (
              <Link href={data.hero.primaryCta.link || "/contact"} className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto px-8 h-12 text-lg rounded-full flex items-center justify-center gap-2 font-bold border-none hover:scale-105 transition-all" style={{ background: 'linear-gradient(135deg, #1DA1F2, #00E5FF)', color: '#0A0F1F', boxShadow: '0 0 30px rgba(0,229,255,0.45)' }}>
                  {data.hero.primaryCta.text}
                  <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
            )}
            {/* Soft-launch: hide the button while it would point to the hidden case studies page */}
            {data?.hero?.secondaryCta?.text &&
              (areCaseStudiesListed() || !/^\/(solutions|case-studies)/.test(data.hero.secondaryCta.link || "/case-studies")) && (
              <Link href={data.hero.secondaryCta.link || "/case-studies"} className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto px-8 h-12 text-lg font-medium hover:text-[#00E5FF] transition-colors" style={{ background: 'rgba(20,36,58,0.7)', borderColor: 'rgba(0,229,255,0.3)', color: '#C5D1E0' }}>
                  {data.hero.secondaryCta.text || "Explore Solutions"}
                </Button>
              </Link>
            )}
          </div>
        </SlideUp>
      </section>

      {/* 2. Why Digital Transformations Fail */}
      <section className="py-12 md:py-16 relative" style={{ background: '#14243A' }}>
        <div className="container-custom">
          <div className="text-center mb-20 max-w-5xl mx-auto">
            <h2 className="type-section-title text-white mb-6">
              {data?.pitfallsHeadline || "Escape the “Pilot Purgatory”"}
            </h2>
            {data?.pitfallsBody && (
              <div className="type-lead text-[#8FA3BF] max-w-5xl mx-auto">
                <PortableText value={data.pitfallsBody} />
              </div>
            )}
          </div>

          <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data?.pitfalls?.map((card: any, index: number) => {
              const staticInfo = featureStats[index % featureStats.length];
              return (
                <StaggerItem key={index} className="h-full">
                  <HoverCard className="rounded-3xl p-8 h-full group flex flex-col" style={{ background: 'rgba(26,46,71,0.6)', border: '1px solid rgba(0,229,255,0.15)', backdropFilter: 'blur(10px)' }}>
                    {/* Top Row: Icon and Stat */}
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg" style={{ background: 'rgba(0,229,255,0.1)', color: '#00E5FF', boxShadow: '0 0 20px rgba(0,229,255,0.1)' }}>
                        {staticInfo.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold mb-1 tracking-tight" style={{ color: '#00E5FF' }}>{card.stat}</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest opacity-60" style={{ color: '#8FA3BF' }}>Business Risk</div>
                      </div>
                    </div>

                    {/* Bottom Section: Title and Description */}
                    <div className="flex flex-col flex-grow">
                      <div className="min-h-[4rem] flex flex-col justify-end mb-4">
                        <p className="text-xl font-bold text-white leading-tight group-hover:text-[#00E5FF] transition-colors">
                          {card.title}
                        </p>
                      </div>
                      <div className="leading-relaxed text-sm opacity-80" style={{ color: '#8FA3BF' }}>
                        <PortableText value={card.description} />
                      </div>
                    </div>
                  </HoverCard>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* 3. Execution Across AI, Data & ERP */}
      <section id="services" className="py-12 md:py-16 relative" style={{ background: '#0A0F1F' }}>
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-12 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 font-medium mb-4" style={{ color: '#00E5FF' }}>
              <SparkleIcon />
              <span className="text-sm font-medium uppercase tracking-widest">{data?.solutionsSubtitle || "What We Do"}</span>
            </div>
            <h3 className="type-section-title text-white mb-6">
              {data?.solutionsHeadline || "What We Build & Deliver"}
            </h3>
            {data?.solutionsBody && (
              <div className="type-lead text-[#8FA3BF] max-w-5xl mx-auto">
                <PortableText value={data.solutionsBody} />
              </div>
            )}
          </div>

          <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
            {data?.solutions?.map((card: any, idx: number) => (
              <StaggerItem key={idx} className={`h-full ${solutionSpan(idx, data.solutions.length)}`}>
                <HoverCard className="group rounded-[32px] p-8 sm:p-10 h-full flex flex-col transition-all duration-300" style={{ background: 'rgba(20,36,58,0.7)', border: '1px solid rgba(0,229,255,0.1)', backdropFilter: 'blur(10px)' }}>
                  <div className="flex items-center gap-2 mb-8 font-semibold text-[0.95rem]" style={{ color: '#00E5FF' }}>
                    <SparkleIcon />
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-[#00E5FF] transition-colors">{card.title}</p>
                  <div className="leading-relaxed text-sm sm:text-[0.95rem] mb-8" style={{ color: '#8FA3BF' }}>
                    <PortableText value={card.description} />
                  </div>

                  {card.outcome && (
                    <div className="mt-auto">
                      <div className="p-5 rounded-2xl transition-all duration-300 group-hover:bg-[#00E5FF]/10" style={{ background: 'rgba(0,229,255,0.05)', border: '1px solid rgba(0,229,255,0.15)' }}>
                        <div className="text-[10px] uppercase tracking-widest font-black mb-2" style={{ color: '#00E5FF' }}>Key Outcome</div>
                        <div className="text-white text-sm font-bold leading-snug">{card.outcome}</div>
                      </div>
                    </div>
                  )}
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div className="flex justify-center mt-10 md:mt-12">
            <Link href={data?.solutionsCta?.link || "/contact"}>
              <Button size="lg" className="px-8 h-12 text-base rounded-full flex items-center justify-center gap-2 font-bold border-none hover:scale-105 transition-all" style={{ background: 'linear-gradient(135deg, #1DA1F2, #00E5FF)', color: '#0A0F1F', boxShadow: '0 0 30px rgba(0,229,255,0.4)' }}>
                {data?.solutionsCta?.text || "Talk to Our AI Expert"}
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3.5 Hire Vetted Engineers */}
      {data?.hireCards?.length > 0 && (
        <section id="hire" className="py-12 md:py-16 relative" style={{ background: '#14243A' }}>
          <div className="container-custom">
            <div className="text-center mb-10 md:mb-12 max-w-5xl mx-auto">
              {data?.hireBadge && (
                <div className="inline-flex items-center gap-2 font-medium mb-4" style={{ color: '#00E5FF' }}>
                  <SparkleIcon />
                  <span className="text-sm font-medium">{data.hireBadge}</span>
                </div>
              )}
              <h2 className="type-section-title text-white mb-6">
                {data?.hireHeadline || "Extend Your Engineering Capabilities with Specialist Talent"}
              </h2>
              {data?.hireBody && (
                <div className="type-lead text-[#8FA3BF] max-w-5xl mx-auto">
                  <PortableText value={data.hireBody} />
                </div>
              )}
            </div>

            <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.hireCards.map((card: any, index: number) => {
                const Icon = hireIcons[index % hireIcons.length];
                return (
                  <StaggerItem key={index} className="h-full">
                    <HoverCard className="group rounded-3xl p-7 h-full flex flex-col" style={{ background: 'rgba(26,46,71,0.6)', border: '1px solid rgba(0,229,255,0.12)', backdropFilter: 'blur(10px)' }}>
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(0,229,255,0.1)', color: '#00E5FF' }}>
                        <Icon className="w-6 h-6" strokeWidth={1.75} />
                      </div>
                      <p className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-[#00E5FF] transition-colors">{card.title}</p>
                      <div className="text-sm leading-relaxed mb-6" style={{ color: '#8FA3BF' }}>
                        <PortableText value={card.description} />
                      </div>
                      {card.cta?.text && (
                        <Link href={card.cta.link || "/contact"} className="mt-auto inline-flex items-center gap-2 text-sm font-bold transition-colors hover:text-white" style={{ color: '#00E5FF' }}>
                          {card.cta.text}
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      )}
                    </HoverCard>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </section>
      )}

      {/* 4. Three phases to transformation */}
      <section className="py-12 md:py-16 relative overflow-hidden" style={{ background: '#0D1B2A' }}>
        <div className="container-custom relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 font-medium mb-4" style={{ color: '#00E5FF' }}>
              <SparkleIcon />
              <span className="text-sm font-medium">Our Approach</span>
            </div>
            <h3 className="type-section-title text-white mb-4">
              {data?.roadmapHeadline}
            </h3>
          </div>

          {data?.roadmap && data.roadmap.length > 0 && (
            <StaggerGroup className="grid md:grid-cols-3 gap-6 relative max-w-5xl mx-auto">

              {data.roadmap.map((phase: any, index: number) => {
                const style = processStyles[index % processStyles.length];
                return (
                  <StaggerItem key={index} className="relative z-10 w-full max-w-[340px] mx-auto">
                    <HoverCard className="rounded-[24px] h-full min-h-[230px] p-7 flex flex-col justify-center" style={{ background: `linear-gradient(${style.bg}, ${style.bg}), #0D1B2A`, border: `1px solid ${style.border}` }}>
                      <div className="text-[4.25rem] font-black mb-3 leading-none select-none" style={{ color: style.num }}>
                        {phase.step || `0${index + 1}`}
                      </div>
                      <p className="text-xl font-bold text-white mb-2">{phase.title}</p>
                      <div className="leading-relaxed text-sm" style={{ color: '#8FA3BF' }}>
                        <PortableText value={phase.description} />
                      </div>
                    </HoverCard>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          )}
        </div>
      </section>

      {/* 5. Built for Enterprise Leaders */}
      <section className="py-12 md:py-16 relative" style={{ background: '#14243A' }}>
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-3xl md:text-[2.5rem] font-bold text-white mb-4">
              {data?.personasHeadline}
            </p>
          </div>

          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data?.personas?.map((persona: any, index: number) => {
              const gradient = personaGradients[index % personaGradients.length];
              const personaIcon = [
                <svg key="0" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
                <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
              ][index % 4];
              return (
                <StaggerItem key={index} className="h-full">
                  <HoverCard className="rounded-3xl p-8 h-full" style={{ background: 'rgba(26,46,71,0.6)', border: '1px solid rgba(0,229,255,0.12)', backdropFilter: 'blur(10px)' }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-[#0A0F1F]" style={{ background: gradient, boxShadow: '0 0 15px rgba(0,229,255,0.3)' }}>
                      {personaIcon}
                    </div>
                    <p className="text-lg font-bold text-white mb-3">{persona.role}</p>
                    <div className="text-sm leading-relaxed" style={{ color: '#8FA3BF' }}>
                      <PortableText value={persona.description} />
                    </div>
                  </HoverCard>
                </StaggerItem>
              );
            })}
          </StaggerGroup>

          <div className="flex justify-center mt-10 md:mt-12">
            <Link href={data?.personasCta?.link || "/contact"}>
              <Button size="lg" className="px-8 h-12 text-base rounded-full flex items-center justify-center gap-2 font-bold border-none hover:scale-105 transition-all" style={{ background: 'linear-gradient(135deg, #1DA1F2, #00E5FF)', color: '#0A0F1F', boxShadow: '0 0 30px rgba(0,229,255,0.4)' }}>
                {data?.personasCta?.text || "Build Your AI-Ready Roadmap"}
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5.5 Why SyncOrigins: split layout so it reads differently from the persona cards above */}
      {data?.whyCards?.length > 0 && (
        <section id="why-syncorigins" className="py-14 md:py-20 relative overflow-hidden" style={{ background: '#0A0F1F' }}>
          <div className="absolute top-0 left-0 right-0 h-px pointer-events-none" style={{ background: 'linear-gradient(to right, transparent, rgba(0,229,255,0.35), transparent)' }} />
          <div className="absolute top-1/2 -left-40 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full blur-[110px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)' }} />

          <div className="container-custom relative z-10 grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-14 items-center">
            <SlideUp>
              {data?.whyBadge && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{ background: 'rgba(0,229,255,0.08)', borderColor: 'rgba(0,229,255,0.3)' }}>
                  <SparkleIcon />
                  <span className="text-sm font-semibold" style={{ color: '#00E5FF' }}>{data.whyBadge}</span>
                </div>
              )}
              <h2 className="type-section-title text-white mb-6">
                {data?.whyHeadline || "Engineering Intelligence Into Every Layer"}
              </h2>
              {data?.whyBody && (
                <div className="type-lead text-[#8FA3BF]">
                  <PortableText value={data.whyBody} />
                </div>
              )}
            </SlideUp>

            <StaggerGroup className="grid sm:grid-cols-2 gap-5">
              {data.whyCards.map((card: any, index: number) => {
                const Icon = whyIcons[index % whyIcons.length];
                return (
                  <StaggerItem key={index} className="h-full">
                    <HoverCard className="group relative rounded-2xl p-6 h-full overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(20,36,58,0.9), rgba(13,27,42,0.9))', border: '1px solid rgba(0,229,255,0.15)' }}>
                      <span className="absolute top-4 right-5 text-4xl font-black leading-none select-none" style={{ color: 'rgba(0,229,255,0.12)' }}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-[#0A0F1F]" style={{ background: personaGradients[index % personaGradients.length], boxShadow: '0 0 15px rgba(0,229,255,0.3)' }}>
                        <Icon className="w-5 h-5" strokeWidth={2} />
                      </div>
                      <p className="text-lg font-bold text-white mb-2 pr-10 group-hover:text-[#00E5FF] transition-colors">{card.title}</p>
                      <div className="text-sm leading-relaxed" style={{ color: '#8FA3BF' }}>
                        <PortableText value={card.description} />
                      </div>
                    </HoverCard>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </section>
      )}

      {/* 5.6 Success Stories & Testimonials (case studies toggled in the CMS) */}
      {showCaseStudies && (
        <CaseStudySliderSection
          title={data?.storiesHeadline}
          subtitle={data?.storiesBadge}
          description={data?.storiesBody}
          ignoreSiteFlag
          featuredOnly
        />
      )}
      {testimonials.length > 0 && (
        <TestimonialCarousel
          testimonials={testimonials}
          title={showCaseStudies ? data?.testimonialsHeadline || "What Our Clients Say" : data?.storiesHeadline || "What Our Clients Say"}
          subtitle={showCaseStudies ? "Testimonials" : data?.storiesBadge || "Testimonials"}
        />
      )}

      {/* 5.7 Latest Insights */}
      <RelatedInsights
        posts={latestPosts}
        label={data?.insightsBadge || "Insights & Resources"}
        title={data?.insightsHeadline || "Ideas & Insights for Enterprise Innovation"}
        description={
          data?.insightsBody ||
          "Explore practical insights on AI implementation, data engineering, ERP modernisation and the delivery approaches that help enterprise technology initiatives scale."
        }
        linkText={data?.insightsLinkText || "View all insights"}
      />

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-12 md:py-16 relative z-10" style={{ background: '#0A0F1F' }}>
          <div className="container-custom px-4 max-w-4xl mx-auto">
            <FAQ items={faqs} title={data?.faqsHeadline || "Frequently Asked Questions"} />
          </div>
        </section>
      )}

      {/* 6. Contact CTA */}
      <section className="py-12 md:py-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0F1F 0%, #0D1B2A 50%, #14243A 100%)' }}>
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[30rem] rounded-full blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)' }} />
        {/* Top border accent */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(0,229,255,0.4), transparent)' }} />

        <SlideUp className="container-custom text-center relative z-10">
          <h5 className="type-section-title text-white mb-6">
            {data?.finalCta?.title}
          </h5>
          <div className="text-lg max-w-4xl mx-auto mb-10" style={{ color: '#8FA3BF' }}>
            <PortableText value={data?.finalCta?.description} />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {data?.finalCta?.primaryCta?.text && (
              <Link href={data.finalCta.primaryCta.link || "/contact"} className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto px-8 h-12 text-base rounded-2xl flex items-center justify-center gap-2 font-bold border-none hover:scale-105 transition-all" style={{ background: 'linear-gradient(135deg, #1DA1F2, #00E5FF)', color: '#0A0F1F', boxShadow: '0 0 30px rgba(0,229,255,0.4)' }}>
                  {data.finalCta.primaryCta.text}
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </Link>
            )}
          </div>
        </SlideUp>
      </section>
    </>
  );
}
