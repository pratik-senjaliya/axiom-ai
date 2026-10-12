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
import { DEMO_FINANCE_PAGE } from "@/lib/demo/financePage";

export const dynamic = "force-dynamic";

function mergeFinanceData(cms: any) {
  const fallback = DEMO_FINANCE_PAGE;
  if (!cms) return fallback;

  const merged: any = { ...fallback, ...cms };
  for (const key of Object.keys(fallback)) {
    if (Array.isArray((fallback as any)[key]) && (!cms[key] || cms[key].length === 0)) {
      merged[key] = (fallback as any)[key];
    }
  }
  merged.hero = { ...fallback.hero, ...(cms.hero || {}) };
  if (!merged.hero.description) merged.hero.description = fallback.hero.description;
  if (!merged.hero.primaryCta) merged.hero.primaryCta = fallback.hero.primaryCta;
  if (!merged.hero.secondaryCta) merged.hero.secondaryCta = fallback.hero.secondaryCta;
  merged.finalCta = { ...fallback.finalCta, ...(cms.finalCta || {}) };
  if (!merged.seo) merged.seo = fallback.seo;
  return merged;
}

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getFinancePage();
  const data = mergeFinanceData(cms);
  const defaultTitle = "Finance Transformation Services | SyncOrigins";
  const defaultDesc =
    "Transform finance through AI, data & intelligent enterprise systems. Process transformation, ERP modernisation, automation, and compliance.";

  return genMeta({
    title: data.seo?.metaTitle || defaultTitle,
    description: data.seo?.metaDescription || defaultDesc,
    keywords: data.seo?.metaKeywords,
    ogImage: data.seo?.openGraphImage,
    slug: "/finance",
  });
}

export default async function FinancePage() {
  const cms = await getFinancePage();
  const data = mergeFinanceData(cms);

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

  const toFeatures = (items: any[]): FeatureItem[] =>
    (items || []).map((item: any) => ({
      title: item.title,
      description: item.description,
    }));

  const solutions = toFeatures(data.solutions);
  const clients = toFeatures(data.clients);
  const outcomes = toFeatures(data.outcomes);
  const processSteps: FeatureItem[] = (data.process || []).map((step: any, index: number) => ({
    stepNumber: index + 1,
    title: step.title,
    description: step.description,
  }));
  const whyUs = toFeatures(data.whyUs);

  const faqs = (data.faqs || []).map((faq: any) => ({
    question: faq.question,
    answer: <PortableText value={faq.answer} />,
  }));

  const stories = data.successStories || [];
  const hero = data.hero;
  const finalCta = data.finalCta;

  return (
    <div className="pt-0 pb-0">
      <ServicePageSchemas
        title={data?.seo?.metaTitle || `${hero?.title || ""} ${hero?.titleHighlight || ""}`.trim() || "Finance Transformation"}
        description={portableTextToPlain(hero?.description) || String(hero?.description || "")}
        url={`${getSiteUrl()}/finance`}
        image={data?.seo?.openGraphImage || hero?.image}
        seo={data?.seo}
        faqs={data?.faqs}
      />

      {/* 1. Hero */}
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
          { label: "Industries" },
          { label: "Finance" },
        ]}
      />

      {/* 2. Finance Industry Challenges */}
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

      {/* 3. Our Finance Transformation Solutions */}
      <div id="solutions">
        <FeatureGrid
          title={data.solutionsHeadline || "Our Finance Transformation Solutions"}
          description={data.solutionsDescription}
          items={solutions}
          columns={3}
          bgWhite={true}
          small={true}
          titleAs="h2"
        />
      </div>

      {/* 3b. Clients We Serve */}
      {clients.length > 0 && (
        <FeatureGrid
          title={data.clientsHeadline || "Clients We Serve"}
          description={data.clientsDescription}
          items={clients}
          columns={2}
          bgWhite={false}
          small={true}
          titleAs="h2"
        />
      )}

      {/* 5. Business Outcomes */}
      <FeatureGrid
        title={data.outcomesHeadline || "Business Outcomes"}
        description={data.outcomesDescription}
        items={outcomes}
        columns={3}
        bgWhite={true}
        small={true}
        titleAs="h2"
      />

      {/* 6. Finance Transformation Success Stories */}
      {stories.length > 0 && (
        <section className="py-24 relative overflow-hidden" style={{ background: "#0D1B2A" }}>
          <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
          <div className="container-custom px-4 relative z-10 max-w-[95rem] mx-auto">
            <div className="text-center max-w-5xl mx-auto mb-16">
              <h2 className="text-3xl md:text-[2.5rem] font-bold text-white mb-6">
                {data.successStoriesHeadline || "Finance Transformation Success Stories"}
              </h2>
            </div>

            <StaggerGroup className="grid md:grid-cols-2 gap-8">
              {stories.map((story: any, index: number) => (
                <StaggerItem key={story._key || index} className="h-full">
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

      {/* 7. Process & Delivery */}
      <FeatureGrid
        title={data.processHeadline || "Finance Transformation Process & Delivery"}
        description={data.processDescription}
        items={processSteps}
        isRoadmap={true}
        bgWhite={true}
        small={true}
        titleAs="h2"
      />

      {/* 8. Why Choose SyncOrigins for Finance */}
      <FeatureGrid
        title={data.whyUsHeadline || "Why Choose SyncOrigins for Finance"}
        description={data.whyUsDescription}
        items={whyUs}
        columns={whyUs.length >= 3 ? 3 : 2}
        bgWhite={false}
        small={true}
        titleAs="h2"
      />

      {/* 9. Blogs & Insights */}
      <RelatedInsights posts={relatedPosts} serviceName="Finance" />

      {/* 10. FAQs + Final CTA */}
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
