import type { Metadata } from "next";
import { IndustryPageLayout } from "@/components/industries/IndustryPageLayout";
import { getFinancePage, getLatestPostsByService } from "@/lib/sanity/queries";
import { isFinanceListed } from "@/lib/content-visibility";
import { generateMetadata as genMeta } from "@/lib/seo";
import { DEMO_FINANCE_PAGE } from "@/lib/demo/financePage";

export const dynamic = "force-dynamic";

function hasTextContent(value: unknown): boolean {
  if (!value) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return true;
}

/** Keep CMS titles, fill missing item descriptions from demo by matching title. */
function mergeTitledItems(cmsItems: any[] | undefined, fallbackItems: any[] = []) {
  if (!cmsItems?.length) return fallbackItems;
  return cmsItems.map((item, index) => {
    const fallback =
      fallbackItems.find((f) => f.title && f.title === item.title) || fallbackItems[index];
    return {
      ...item,
      description: hasTextContent(item.description) ? item.description : fallback?.description,
    };
  });
}

function mergeFinanceData(cms: any) {
  const fallback = DEMO_FINANCE_PAGE;
  if (!cms) return fallback;

  const merged: any = { ...fallback, ...cms };

  const descriptionKeys = [
    "challengesDescription",
    "solutionsDescription",
    "clientsDescription",
    "outcomesDescription",
    "processDescription",
    "whyUsDescription",
  ] as const;

  for (const key of descriptionKeys) {
    if (!hasTextContent(merged[key])) merged[key] = (fallback as any)[key];
  }

  merged.challenges = mergeTitledItems(cms.challenges, fallback.challenges);
  merged.solutions = mergeTitledItems(cms.solutions, fallback.solutions);
  merged.clients = mergeTitledItems(cms.clients, fallback.clients);
  merged.outcomes = mergeTitledItems(cms.outcomes, fallback.outcomes);
  merged.process = mergeTitledItems(cms.process, fallback.process);
  merged.whyUs = mergeTitledItems(cms.whyUs, fallback.whyUs);

  if (!cms.successStories?.length) {
    merged.successStories = fallback.successStories;
  }

  merged.hero = { ...fallback.hero, ...(cms.hero || {}) };
  if (!hasTextContent(merged.hero.description)) merged.hero.description = fallback.hero.description;
  if (!merged.hero.primaryCta) merged.hero.primaryCta = fallback.hero.primaryCta;
  if (!merged.hero.secondaryCta) merged.hero.secondaryCta = fallback.hero.secondaryCta;
  merged.finalCta = { ...fallback.finalCta, ...(cms.finalCta || {}) };
  if (!hasTextContent(merged.finalCta?.description)) {
    merged.finalCta.description = fallback.finalCta.description;
  }
  if (!merged.seo) merged.seo = fallback.seo;
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
    noindex: !isFinanceListed(),
    nofollow: !isFinanceListed(),
  });
}

export default async function FinancePage() {
  const data = mergeFinanceData(await getFinancePage());
  const relatedPosts = await getLatestPostsByService("finance");

  return <IndustryPageLayout data={data} industryName="Finance" path="/finance" relatedPosts={relatedPosts} />;
}
