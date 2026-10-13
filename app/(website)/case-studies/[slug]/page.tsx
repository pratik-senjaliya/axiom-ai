import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getRelatedCaseStudies } from "@/lib/sanity/queries";
import { DarkCTA } from "@/components/services/DarkCTA";
import { ServicePageSchemas } from "@/components/seo/ServicePageSchemas";
import { generateMetadata as genMeta, getSiteUrl, portableTextToPlain } from "@/lib/seo";
import { DEMO_CASE_STUDY_SLUG } from "@/lib/demo/financePage";
import { DEMO_CASE_STUDY_VIEW } from "@/lib/demo/caseStudy";
import {
  CaseStudyHero,
  CaseStudyAbout,
  CaseStudyChallengeGrid,
  CaseStudySolutionsGrid,
  CaseStudyTechnologies,
  CaseStudyOutcomesGrid,
  CaseStudyFeedback,
  CaseStudyMore,
} from "@/components/case-study/CaseStudyLayout";

export const dynamic = "force-dynamic";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

function mergeCaseStudy(cms: any, slug: string) {
  if (cms) {
    return {
      ...DEMO_CASE_STUDY_VIEW,
      ...cms,
      heroStats: cms.heroStats?.length ? cms.heroStats : DEMO_CASE_STUDY_VIEW.heroStats,
      aboutClientImage: cms.aboutClientImage || DEMO_CASE_STUDY_VIEW.aboutClientImage,
      aboutClientImageAlt: cms.aboutClientImageAlt || DEMO_CASE_STUDY_VIEW.aboutClientImageAlt,
      challengeItems: cms.challengeItems?.length
        ? cms.challengeItems
        : DEMO_CASE_STUDY_VIEW.challengeItems,
      approachItems: cms.approachItems?.length
        ? cms.approachItems
        : DEMO_CASE_STUDY_VIEW.approachItems,
      technologies: cms.technologies?.length ? cms.technologies : DEMO_CASE_STUDY_VIEW.technologies,
      outcomeCards: cms.outcomeCards?.length ? cms.outcomeCards : DEMO_CASE_STUDY_VIEW.outcomeCards,
      testimonials: cms.testimonials?.length ? cms.testimonials : DEMO_CASE_STUDY_VIEW.testimonials,
    };
  }
  if (slug === DEMO_CASE_STUDY_SLUG) return DEMO_CASE_STUDY_VIEW;
  return null;
}

async function resolveCaseStudy(slug: string) {
  const cms = await getCaseStudyBySlug(slug);
  return mergeCaseStudy(cms, slug);
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = await resolveCaseStudy(slug);
  if (!study) {
    return genMeta({ title: "Case Study Not Found | SyncOrigins", description: "", slug: `/case-studies/${slug}` });
  }
  return genMeta({
    title: study.seo?.metaTitle || `${study.title} | Case Study | SyncOrigins`,
    description: study.seo?.metaDescription || study.excerpt || "",
    keywords: study.seo?.metaKeywords,
    ogImage: study.seo?.openGraphImage || study.image,
    ogType: "article",
    slug: `/case-studies/${slug}`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = await resolveCaseStudy(slug);
  if (!study) notFound();

  const related = await getRelatedCaseStudies(slug, 3);
  const pageUrl = `${getSiteUrl()}/case-studies/${slug}`;
  const description =
    study.seo?.metaDescription || study.excerpt || portableTextToPlain(study.aboutClient) || "";

  const feedback = study.testimonials?.[0];

  return (
    <div style={{ background: "#0A0F1F" }}>
      <ServicePageSchemas
        title={study.seo?.metaTitle || study.title}
        description={description}
        url={pageUrl}
        image={study.seo?.openGraphImage || study.image}
        seo={study.seo}
      />

      {/* 1. Hero — title left, stats right */}
      <CaseStudyHero
        title={study.title}
        excerpt={study.excerpt}
        stats={study.heroStats}
        badge={study.heroBadge || "Case Study · Finance"}
      />

      {/* 2. About the Client */}
      {study.aboutClient && (
        <CaseStudyAbout
          title={study.aboutClientHeadline || "About the Client"}
          content={study.aboutClient}
          image={study.aboutClientImage || study.image}
          imageAlt={study.aboutClientImageAlt || study.imageAlt || study.title}
        />
      )}

      {/* 3. The Challenges — 2x2 numbered cards */}
      <CaseStudyChallengeGrid
        title={study.challengeHeadline || "The Challenges"}
        items={study.challengeItems || []}
      />

      {/* 4. Solutions / Approach — dark numbered grid */}
      <CaseStudySolutionsGrid
        title={study.approachHeadline || "Our Solutions / Approach"}
        items={study.approachItems || []}
      />

      {/* Technologies Used */}
      <CaseStudyTechnologies items={study.technologies || []} />

      {/* 6. Outcomes — metric cards */}
      <CaseStudyOutcomesGrid
        title={study.outcomesHeadline || "Outcomes / Result"}
        items={study.outcomeCards || []}
      />

      {/* 7. Client Feedback */}
      {feedback && (
        <CaseStudyFeedback
          quote={feedback.quote}
          author={feedback.author}
          role={[feedback.role, feedback.company].filter(Boolean).join(" · ")}
        />
      )}

      {/* 8. More Case Studies */}
      <CaseStudyMore items={related} />

      <DarkCTA
        badgeText="Case Study"
        title="Ready to Write Your Transformation Story?"
        description="Partner with SyncOrigins to turn operational challenges into measurable business outcomes."
        buttonText="Talk to Our Experts"
        buttonHref="/contact"
      />
    </div>
  );
}
