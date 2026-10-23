import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BarChart3, Briefcase, Building2, Users } from "lucide-react";
import { PortableText } from "@/components/ui/PortableText";
import { getHomePage } from "@/lib/sanity/queries";
import { CaseStudySliderSection } from "@/components/case-study/CaseStudySliderSection";
import { generateMetadata as genMeta, getSiteUrl, SITE_SCHEMA_DESCRIPTION } from "@/lib/seo";
import { FAQSection } from "@/components/ui/FAQ";
import { HomePageSchemas } from "@/components/seo/PageSchemas";
import { isSolutionsListed } from "@/lib/content-visibility";
import { ButtonLink, Eyebrow, HighlightTitle, RichText, Section, SectionHeader } from "@/components/ui/kit";
import { CellGrid, FeatureCell, Timeline } from "@/components/ui/blocks";
import { StackDiagram } from "@/components/ui/StackDiagram";
import { DarkCTA } from "@/components/services/DarkCTA";

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

const PERSONA_ICONS = [Users, Briefcase, Building2, BarChart3];

export default async function HomePage() {
  const data = await getHomePage();
  if (!data) notFound();

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

  const secondaryHref = data?.hero?.secondaryCta?.link || "/solutions";
  // Soft-launch: hide the button while it would point to the hidden /solutions page
  const showSecondary =
    data?.hero?.secondaryCta?.text && (isSolutionsListed() || !secondaryHref.startsWith("/solutions"));

  return (
    <>
      <HomePageSchemas
        title={pageTitle}
        description={pageDescription}
        url={`${getSiteUrl()}/`}
        faqs={faqSchemaItems}
      />

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-ink-900 pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40">
        <div aria-hidden className="bg-grid-fade" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(0,229,255,0.10), transparent 65%)" }}
        />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-line" />

        <div className="container-custom relative grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Eyebrow className="mb-7">{data?.hero?.badge || "Enterprise AI & Data Advisory"}</Eyebrow>
            <h1 className="h-display">
              <HighlightTitle
                title={data?.hero?.title || "Architecting the"}
                highlight={data?.hero?.titleHighlight || "Intelligent Enterprise"}
              />
            </h1>
            <div className="lead mt-7 max-w-xl">
              <PortableText value={data?.hero?.description} />
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              {data?.hero?.primaryCta?.text && (
                <ButtonLink href={data.hero.primaryCta.link || "/contact"} size="lg" arrow>
                  {data.hero.primaryCta.text}
                </ButtonLink>
              )}
              {showSecondary && (
                <ButtonLink href={secondaryHref} size="lg" variant="secondary">
                  {data.hero.secondaryCta.text || "Explore Solutions"}
                </ButtonLink>
              )}
            </div>
          </div>

          <div className="hidden justify-end lg:col-span-5 lg:flex">
            <StackDiagram />
          </div>
        </div>
      </section>

      {/* 2. Why digital transformations fail — stat band */}
      {(data?.pitfallsHeadline || data?.pitfalls?.length > 0) && (
        <Section tone="raised">
          <SectionHeader
            eyebrow="Why initiatives stall"
            title={data?.pitfallsHeadline || "Escape the “Pilot Purgatory”"}
            description={data?.pitfallsBody}
            layout={data?.pitfallsBody ? "split" : "stack"}
            className="mb-14 lg:mb-20"
          />
          {data?.pitfalls?.length > 0 && (
            <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
              {data.pitfalls.map((card: any, index: number) => (
                <div key={index} className="reveal border-t border-line py-8 lg:border-l lg:border-t-0 lg:py-2 lg:pl-8 lg:first:border-l-0 lg:first:pl-0">
                  {card.stat && (
                    <p className="font-display text-5xl font-semibold tracking-tight text-fg lg:text-[3.5rem]">
                      <span className="gradient-text">{card.stat}</span>
                    </p>
                  )}
                  {card.stat && <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-muted">Business risk</p>}
                  <p className="h-card mt-6">{card.title}</p>
                  <RichText value={card.description} className="copy mt-3" />
                </div>
              ))}
            </div>
          )}
        </Section>
      )}

      {/* 3. Execution across AI, Data & ERP */}
      <Section tone="base" id="services">
        <SectionHeader
          eyebrow={data?.solutionsSubtitle || "What We Do"}
          title={data?.solutionsHeadline || "What We Build & Deliver"}
          description={data?.solutionsBody}
          as="h3"
          layout={data?.solutionsBody ? "split" : "stack"}
          className="mb-14 lg:mb-16"
        />
        {data?.solutions?.length > 0 && (
          <CellGrid cols={3}>
            {data.solutions.map((card: any, idx: number) => (
              <FeatureCell
                key={idx}
                index={idx}
                title={card.title}
                titleAs="p"
                description={card.description}
                footerLabel={card.outcome ? "Key outcome" : undefined}
                footer={card.outcome}
              />
            ))}
          </CellGrid>
        )}
        <div className="mt-12 flex justify-center">
          <ButtonLink href={data?.solutionsCta?.link || "/contact"} arrow>
            {data?.solutionsCta?.text || "Talk to Our AI Expert"}
          </ButtonLink>
        </div>
      </Section>

      {/* 4. Three phases to transformation */}
      {data?.roadmap?.length > 0 && (
        <Section tone="raised">
          <SectionHeader eyebrow="Our approach" title={data?.roadmapHeadline} as="h3" className="mb-14 lg:mb-16" />
          <Timeline
            items={data.roadmap.map((phase: any, index: number) => ({
              title: phase.title,
              description: phase.description,
              label: phase.step || `0${index + 1}`,
            }))}
          />
        </Section>
      )}

      {/* 5. Built for enterprise leaders */}
      {data?.personas?.length > 0 && (
        <Section tone="base">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="reveal lg:sticky lg:top-28">
                <Eyebrow className="mb-5">Who we work with</Eyebrow>
                <p className="h-section">{data?.personasHeadline}</p>
                <div className="mt-8">
                  <ButtonLink href={data?.personasCta?.link || "/contact"} arrow>
                    {data?.personasCta?.text || "Build Your AI-Ready Roadmap"}
                  </ButtonLink>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <CellGrid cols={2}>
                {data.personas.map((persona: any, index: number) => {
                  const Icon = PERSONA_ICONS[index % PERSONA_ICONS.length];
                  return (
                    <FeatureCell
                      key={index}
                      icon={<Icon strokeWidth={1.75} />}
                      title={persona.role}
                      titleAs="p"
                      description={persona.description}
                    />
                  );
                })}
              </CellGrid>
            </div>
          </div>
        </Section>
      )}

      <CaseStudySliderSection />

      {/* 6. Corporate affiliation */}
      {data?.affiliationTitle && data?.affiliationBody && (
        <Section tone="raised">
          <div className="reveal mx-auto max-w-4xl sm:text-center">
            {data?.affiliationHeadline && <Eyebrow className="mb-6 sm:justify-center">{data.affiliationHeadline}</Eyebrow>}
            <h5 className="h-section">{data.affiliationTitle}</h5>
            <RichText value={data.affiliationBody} className="lead mt-6" />
          </div>
        </Section>
      )}

      {/* FAQ */}
      <FAQSection items={faqs} title="Frequently Asked Questions" />

      {/* 7. Contact CTA */}
      {data?.finalCta?.title && (
        <DarkCTA
          title={data.finalCta.title}
          description={data.finalCta.description}
          buttonText={data.finalCta.primaryCta?.text}
          buttonHref={data.finalCta.primaryCta?.link || "/contact"}
          titleAs="h5"
        />
      )}
    </>
  );
}
