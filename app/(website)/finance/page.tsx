import type { Metadata } from "next";
import { DarkCTA } from "@/components/services/DarkCTA";
import { RelatedInsights } from "@/components/services/RelatedInsights";
import { FAQ } from "@/components/ui/FAQ";
import { PortableText } from "@/components/ui/PortableText";
import { ServicePageSchemas } from "@/components/seo/ServicePageSchemas";
import { IndustryHero } from "@/components/industries/IndustryHero";
import { IndustryChallengePanel } from "@/components/industries/IndustryChallengePanel";
import {
  IndustryServiceCards,
  IndustryClientsGrid,
  IndustryPillars,
  IndustrySuccessStories,
  IndustryLifecycle,
  IndustryWhyUs,
} from "@/components/industries/IndustrySection";
import { getFinancePage, getLatestPostsByService, getAllPosts } from "@/lib/sanity/queries";
import { generateMetadata as genMeta, getSiteUrl, portableTextToPlain } from "@/lib/seo";
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
  // Always drop the removed "70+" metric if present in CMS
  if (Array.isArray(merged.heroMetrics)) {
    merged.heroMetrics = merged.heroMetrics.filter(
      (m: any) => !String(m?.value || "").includes("70") && !/programs supported/i.test(m?.label || "")
    );
  }
  return merged;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = mergeFinanceData(await getFinancePage());
  return genMeta({
    title: data.seo?.metaTitle || "Finance Transformation | Industry | SyncOrigins",
    description:
      data.seo?.metaDescription ||
      "Transform finance through AI, data & intelligent enterprise systems.",
    keywords: data.seo?.metaKeywords,
    ogImage: data.seo?.openGraphImage,
    slug: "/finance",
  });
}

export default async function FinancePage() {
  const data = mergeFinanceData(await getFinancePage());

  let relatedPosts = await getLatestPostsByService("finance");
  if (!relatedPosts?.length) {
    relatedPosts = ((await getAllPosts()) || []).slice(0, 3);
  }

  const mapItems = (items: any[] = []) =>
    items.map((item: any) => ({ title: item.title, description: item.description }));

  const hero = data.hero;
  const faqs = (data.faqs || []).map((faq: any) => ({
    question: faq.question,
    answer: <PortableText value={faq.answer} />,
  }));

  return (
    <div>
      <ServicePageSchemas
        title={data?.seo?.metaTitle || `${hero?.title || ""} ${hero?.titleHighlight || ""}`.trim()}
        description={portableTextToPlain(hero?.description) || ""}
        url={`${getSiteUrl()}/finance`}
        image={data?.seo?.openGraphImage || hero?.image}
        seo={data?.seo}
        faqs={data?.faqs}
      />

      <IndustryHero
        industryLabel="Industries · Finance"
        title={hero?.title || "Transform Finance Through AI, Data &"}
        titleHighlight={hero?.titleHighlight || "Intelligent Enterprise Systems"}
        description={hero?.description}
        primaryButtonText={hero?.primaryCta?.text || "Talk to Our Finance Experts"}
        primaryButtonLink={hero?.primaryCta?.link || "/contact"}
        secondaryButtonText={hero?.secondaryCta?.text || "Explore Finance Solutions"}
        secondaryButtonLink={hero?.secondaryCta?.link || "#services"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries" },
          { label: "Finance" },
        ]}
        metrics={data.heroMetrics || DEMO_FINANCE_PAGE.heroMetrics}
      />

      <IndustryChallengePanel
        title={data.challengesHeadline || "Finance Challenges We Solve"}
        items={mapItems(data.challenges)}
      />

      {/* Services slot → real Solutions content (placeholders removed) */}
      <IndustryServiceCards
        title={data.solutionsHeadline || "Our Finance Transformation Solutions"}
        items={mapItems(data.solutions)}
      />

      <IndustryClientsGrid
        title={data.clientsHeadline || "Finance Clients We Serve"}
        items={mapItems(data.clients)}
      />

      {/* How We Drive Success slot → real Outcomes content (pillars placeholders removed) */}
      <IndustryPillars
        title={data.pillarsHeadline || "How We Drive the Success of Your Finance Transformation"}
        description={data.pillarsDescription}
        items={mapItems(data.outcomes)}
      />

      <IndustrySuccessStories
        title={data.successStoriesHeadline || "Finance Transformation Success Stories"}
        stories={data.successStories || []}
      />

      {/* Process slot → real Process & Delivery content (lifecycle placeholders removed) */}
      <IndustryLifecycle
        title={data.processHeadline || "Finance Transformation Process & Delivery"}
        items={mapItems(data.process)}
      />

      <IndustryWhyUs
        title={data.whyUsHeadline || "Why Choose SyncOrigins for Finance"}
        description={data.whyUsDescription}
        items={mapItems(data.whyUs)}
      />

      <RelatedInsights posts={relatedPosts} serviceName="Finance" compact />

      {faqs.length > 0 && (
        <section className="py-16 md:py-20" style={{ background: "#0A0F1F" }}>
          <div className="container-custom px-4 max-w-4xl mx-auto">
            <FAQ items={faqs} title="Frequently Asked Questions" />
          </div>
        </section>
      )}

      <DarkCTA
        badgeText={data.finalCta?.badgeText || "Finance"}
        title={data.finalCta?.title || "Ready to Transform Your Finance Operations?"}
        description={data.finalCta?.description}
        buttonText={data.finalCta?.buttonText || "Talk to Our Finance Experts"}
        buttonHref={data.finalCta?.buttonLink || "/contact"}
      />
    </div>
  );
}
