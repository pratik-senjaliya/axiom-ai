import type { Metadata } from "next";
import Link from "next/link";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FeatureGrid, FeatureItem } from "@/components/services/FeatureGrid";
import { DarkCTA } from "@/components/services/DarkCTA";
import { RelatedInsights } from "@/components/services/RelatedInsights";
import { ObstacleSection } from "@/components/services/ObstacleSection";
import { FAQ } from "@/components/ui/FAQ";
import { PortableText } from "@/components/ui/PortableText";
import { Button } from "@/components/ui/Button";
import { ServicePageSchemas } from "@/components/seo/ServicePageSchemas";
import { getFinancePage, getLatestPostsByService, getAllPosts } from "@/lib/sanity/queries";
import { generateMetadata as genMeta, getSiteUrl, portableTextToPlain } from "@/lib/seo";
import { HoverCard } from "@/components/ui/animations/HoverCard";
import { StaggerGroup, StaggerItem } from "@/components/ui/animations/StaggerGroup";

export const dynamic = "force-dynamic";

/** Fallback when the financePageSingleton has not been created/published in Studio yet */
const FINANCE_FALLBACK = {
  hero: {
    badge: "Finance Transformation",
    title: "Transform Finance Through AI, Data &",
    titleHighlight: "Intelligent Enterprise Systems",
    description:
      "Modernize finance operations with AI, data platforms, and intelligent enterprise systems — from process transformation to ERP, automation, and compliance.",
    primaryCta: { text: "Talk to Our Finance Experts", link: "/contact" },
    secondaryCta: { text: "Explore Finance Solutions", link: "#solutions" },
  },
  challengesHeadline: "Finance Industry Challenges",
  challenges: [
    { title: "Legacy finance systems" },
    { title: "Fragmented financial data" },
    { title: "Manual and inefficient processes" },
    { title: "Delayed financial insights" },
    { title: "Increasing compliance requirements" },
    { title: "Difficulty scaling AI initiatives" },
  ],
  solutionsHeadline: "Our Finance Transformation Solutions",
  solutions: [
    { title: "Finance Process Transformation" },
    { title: "AI-Powered Finance Operations" },
    { title: "Financial Data & Analytics" },
    { title: "ERP Modernisation & Integration" },
    { title: "Intelligent Automation" },
    { title: "Risk, Compliance & Reporting" },
  ],
  outcomesHeadline: "Business Outcomes",
  outcomes: [
    { title: "Faster financial decision-making" },
    { title: "Improved data visibility" },
    { title: "Reduced manual effort" },
    { title: "More accurate forecasting" },
    { title: "Greater operational efficiency" },
    { title: "Scalable, AI-ready finance operations" },
  ],
  successStoriesHeadline: "Finance Transformation Success Stories",
  successStories: [] as any[],
  processHeadline: "Finance Transformation Process & Delivery",
  process: [
    { title: "Discover & Assess" },
    { title: "Define Transformation Priorities" },
    { title: "Design the Solution" },
    { title: "Implement & Integrate" },
    { title: "Validate & Optimise" },
    { title: "Scale & Continuously Improve" },
  ],
  whyUsHeadline: "Why Choose SyncOrigins for Finance",
  whyUs: [
    { title: "AI, Data & ERP expertise" },
    { title: "Finance-focused transformation" },
    { title: "Business-first approach" },
    { title: "Production-focused execution" },
    { title: "Scalable enterprise solutions" },
  ],
  faqs: [] as any[],
  finalCta: {
    title: "Ready to Transform Your Finance Operations?",
    buttonText: "Talk to Our Finance Experts",
    buttonLink: "/contact",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const data = await getFinancePage();
  const defaultTitle = "Finance Transformation Services | SyncOrigins";
  const defaultDesc =
    "Transform finance through AI, data & intelligent enterprise systems. Process transformation, ERP modernisation, automation, and compliance.";

  if (!data?.seo) {
    return genMeta({
      title: defaultTitle,
      description: defaultDesc,
      slug: "/finance",
    });
  }

  return genMeta({
    title: data.seo.metaTitle || defaultTitle,
    description: data.seo.metaDescription || defaultDesc,
    keywords: data.seo.metaKeywords,
    ogImage: data.seo.openGraphImage,
    slug: "/finance",
  });
}

export default async function FinancePage() {
  const cms = await getFinancePage();
  const data = cms ? { ...FINANCE_FALLBACK, ...cms } : FINANCE_FALLBACK;

  let relatedPosts = await getLatestPostsByService("finance");
  if (!relatedPosts?.length) {
    const all = await getAllPosts();
    relatedPosts = (all || []).slice(0, 3);
  }

  const challengeItems = (data.challenges || []).map((item: any) => ({
    title: item.title,
    description: item.description || item.title,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  }));

  const solutions: FeatureItem[] = (data.solutions || []).map((item: any) => ({
    title: item.title,
    description: item.description,
  }));

  const outcomes: FeatureItem[] = (data.outcomes || []).map((item: any) => ({
    title: item.title,
    description: item.description,
  }));

  const processSteps: FeatureItem[] = (data.process || []).map((step: any, index: number) => ({
    stepNumber: index + 1,
    title: step.title,
    description: step.description,
  }));

  const whyUs: FeatureItem[] = (data.whyUs || []).map((item: any) => ({
    title: item.title,
    description: item.description,
  }));

  const faqs = (data.faqs || []).map((faq: any) => ({
    question: faq.question,
    answer: <PortableText value={faq.answer} />,
  }));

  const stories = data.successStories || [];
  const hero = data.hero || FINANCE_FALLBACK.hero;
  const finalCta = data.finalCta || FINANCE_FALLBACK.finalCta;

  return (
    <div className="pt-0 pb-0">
      <ServicePageSchemas
        title={data?.seo?.metaTitle || hero?.title || "Finance Transformation"}
        description={portableTextToPlain(hero?.description) || String(hero?.description || "")}
        url={`${getSiteUrl()}/finance`}
        image={data?.seo?.openGraphImage || hero?.image}
        seo={data?.seo}
        faqs={data?.faqs}
      />

      <ServiceHero
        badgeText={hero?.badge}
        title={hero?.title}
        gradientTitlePart={hero?.titleHighlight}
        description={hero?.description}
        primaryButtonText={hero?.primaryCta?.text || "Talk to Our Finance Experts"}
        primaryButtonLink={hero?.primaryCta?.link || "/contact"}
        secondaryButtonText={hero?.secondaryCta?.text || "Explore Finance Solutions"}
        secondaryButtonLink={hero?.secondaryCta?.link || "#solutions"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: "Finance" },
        ]}
      />

      {challengeItems.length > 0 && (
        <ObstacleSection
          title={data.challengesHeadline || "Finance Industry Challenges"}
          subtitle={
            data.challengesDescription ? (
              <PortableText value={data.challengesDescription} />
            ) : undefined
          }
          items={challengeItems}
        />
      )}

      <div id="solutions">
        <FeatureGrid
          title={data.solutionsHeadline || "Our Finance Transformation Solutions"}
          description={data.solutionsDescription}
          items={solutions}
          columns={3}
          bgWhite={true}
          small={true}
          titleAs="h3"
        />
      </div>

      <FeatureGrid
        title={data.outcomesHeadline || "Business Outcomes"}
        description={data.outcomesDescription}
        items={outcomes}
        columns={3}
        bgWhite={false}
        small={true}
        titleAs="h3"
      />

      {stories.length > 0 && (
        <section className="py-24 relative overflow-hidden" style={{ background: "#0D1B2A" }}>
          <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
          <div className="container-custom px-4 relative z-10 max-w-[95rem] mx-auto">
            <div className="text-center max-w-5xl mx-auto mb-16">
              <h3 className="text-3xl md:text-[2.5rem] font-bold text-white mb-6">
                {data.successStoriesHeadline || "Finance Transformation Success Stories"}
              </h3>
            </div>

            <StaggerGroup className="grid md:grid-cols-2 gap-8">
              {stories.map((story: any, index: number) => (
                <StaggerItem key={index} className="h-full">
                  <HoverCard
                    className="rounded-[2rem] p-8 md:p-10 h-full flex flex-col border"
                    style={{
                      background: "rgba(26,46,71,0.6)",
                      borderColor: "rgba(0,229,255,0.12)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {story.title && (
                      <p className="text-2xl font-bold text-white mb-8">{story.title}</p>
                    )}

                    <div className="space-y-5 flex-grow">
                      {story.clientChallenge && (
                        <div>
                          <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-2" style={{ color: "#00E5FF" }}>
                            Client Challenge
                          </p>
                          <div className="text-sm leading-relaxed" style={{ color: "#8FA3BF" }}>
                            <PortableText value={story.clientChallenge} />
                          </div>
                        </div>
                      )}
                      {story.solutionDelivered && (
                        <div>
                          <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-2" style={{ color: "#00E5FF" }}>
                            Solution Delivered
                          </p>
                          <div className="text-sm leading-relaxed" style={{ color: "#8FA3BF" }}>
                            <PortableText value={story.solutionDelivered} />
                          </div>
                        </div>
                      )}
                      {story.keyTransformation && (
                        <div>
                          <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-2" style={{ color: "#00E5FF" }}>
                            Key Transformation
                          </p>
                          <div className="text-sm leading-relaxed" style={{ color: "#8FA3BF" }}>
                            <PortableText value={story.keyTransformation} />
                          </div>
                        </div>
                      )}
                      {story.businessOutcomes && (
                        <div>
                          <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-2" style={{ color: "#00E5FF" }}>
                            Business Outcomes
                          </p>
                          <div className="text-sm leading-relaxed" style={{ color: "#8FA3BF" }}>
                            <PortableText value={story.businessOutcomes} />
                          </div>
                        </div>
                      )}
                    </div>

                    {story.ctaLink && (
                      <div className="mt-8">
                        <Link href={story.ctaLink}>
                          <Button
                            size="lg"
                            className="px-6 h-11 text-sm rounded-full font-bold border-none hover:scale-105 transition-all"
                            style={{
                              background: "linear-gradient(135deg, #1DA1F2, #00E5FF)",
                              color: "#0A0F1F",
                              boxShadow: "0 0 20px rgba(0,229,255,0.3)",
                            }}
                          >
                            {story.ctaText || "Read Case Study"}
                          </Button>
                        </Link>
                      </div>
                    )}
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}

      <FeatureGrid
        title={data.processHeadline || "Finance Transformation Process & Delivery"}
        description={data.processDescription}
        items={processSteps}
        isRoadmap={true}
        bgWhite={true}
        small={true}
        titleAs="h4"
      />

      <FeatureGrid
        title={data.whyUsHeadline || "Why Choose SyncOrigins for Finance"}
        description={data.whyUsDescription}
        items={whyUs}
        columns={whyUs.length >= 3 ? 3 : 2}
        bgWhite={false}
        small={true}
        titleAs="h4"
      />

      <RelatedInsights posts={relatedPosts} serviceName="Finance" />

      {faqs.length > 0 && (
        <section className="py-24 relative z-10" style={{ background: "#0A0F1F" }}>
          <div className="container-custom px-4 max-w-4xl mx-auto">
            <FAQ items={faqs} title="Frequently Asked Questions" />
          </div>
        </section>
      )}

      <DarkCTA
        badgeText={finalCta.badgeText}
        title={finalCta.title || "Ready to Transform Your Finance Operations?"}
        description={finalCta.description}
        buttonText={finalCta.buttonText || "Talk to Our Finance Experts"}
        buttonHref={finalCta.buttonLink || "/contact"}
      />
    </div>
  );
}
