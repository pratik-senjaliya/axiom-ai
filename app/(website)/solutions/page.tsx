import type { Metadata } from "next";
import { DarkCTA } from "@/components/services/DarkCTA";
import { ServiceHero } from "@/components/services/ServiceHero";
import { getAllCaseStudies, getUseCasesPage } from "@/lib/sanity/queries";
import { CaseStudyMore } from "@/components/case-study/CaseStudyLayout";
import { DEMO_CASE_STUDY_VIEW } from "@/lib/demo/caseStudy";
import { isSolutionsListed } from "@/lib/content-visibility";
import { generateMetadata as genMeta } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getUseCasesPage();
  const defaultTitle = "Enterprise AI Solutions Across Industries | SyncOrigins";
  const defaultDesc = "Explore high-impact AI solutions across industries, leveraging automation and objective execution to drive measurable ROI.";

  return genMeta({
    title: data?.seo?.metaTitle || defaultTitle,
    description: data?.seo?.metaDescription || defaultDesc,
    keywords: data?.seo?.metaKeywords,
    ogImage: data?.seo?.openGraphImage,
    slug: "/solutions",
    noindex: !isSolutionsListed(),
    nofollow: !isSolutionsListed(),
  });
}

export default async function SolutionsPage() {
  const [data, cmsCaseStudies] = await Promise.all([
    getUseCasesPage(),
    getAllCaseStudies(),
  ]);
  // Solutions (use cases) are kept in the CMS but hidden from the UI for now;
  // the page lists case studies instead.
  const caseStudies = cmsCaseStudies?.length ? cmsCaseStudies : [DEMO_CASE_STUDY_VIEW];
  const hero = data?.hero;

  return (
    <div className="bg-ink-900">
      <ServiceHero
        badgeText={hero?.badge || "Strategic Solutions"}
        title={hero?.title || "World-Class Impact through"}
        gradientTitlePart={hero?.titleHighlight}
        description={hero?.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions" },
        ]}
      />

      {/* ── Case Studies ── */}
      <CaseStudyMore items={caseStudies} title="Case Studies" />

      {data?.midPageCta?.title && (
        <DarkCTA
          title={data.midPageCta.title}
          description={data.midPageCta.description}
          buttonText={data.midPageCta.primaryCta?.text}
          buttonHref={data.midPageCta.primaryCta?.link || "/contact"}
          titleAs="h4"
        />
      )}

      {data?.pocOffer && (
        <DarkCTA
          title={data.pocOffer.title}
          description={data.pocOffer.description}
          buttonText={data.pocOffer.buttonText || "Start Your Pilot"}
          buttonHref={data.pocOffer.buttonLink || "/contact"}
          useWhiteButton
          titleAs="h4"
        />
      )}
    </div>
  );
}
