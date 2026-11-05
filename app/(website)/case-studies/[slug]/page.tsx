import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getRelatedCaseStudies } from "@/lib/sanity/queries";
import { DarkCTA } from "@/components/services/DarkCTA";
import { ServicePageSchemas } from "@/components/seo/ServicePageSchemas";
import { generateMetadata as genMeta, getSiteUrl, portableTextToPlain } from "@/lib/seo";
import { areCaseStudiesListed } from "@/lib/content-visibility";
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

/** CMS only — empty sections are hidden rather than filled with sample content */
function mergeCaseStudy(cms: any) {
  if (!cms) return null;
  return {
    ...cms,
    outcomeCards: cms.outcomeItems?.length ? cms.outcomeItems : cms.outcomeCards || [],
  };
}

async function resolveCaseStudy(slug: string) {
  const cms = await getCaseStudyBySlug(slug);
  return mergeCaseStudy(cms);
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = await resolveCaseStudy(slug);
  const hideFromSearch = !areCaseStudiesListed();
  if (!study) {
    return genMeta({
      title: "Case Study Not Found | SyncOrigins",
      description: "",
      slug: `/case-studies/${slug}`,
      noindex: true,
      nofollow: true,
    });
  }
  return genMeta({
    title: study.seo?.metaTitle || `${study.title} | Case Study | SyncOrigins`,
    description: study.seo?.metaDescription || study.excerpt || "",
    keywords: study.seo?.metaKeywords,
    ogImage: study.seo?.openGraphImage || study.image,
    ogType: "article",
    slug: `/case-studies/${slug}`,
    noindex: hideFromSearch,
    nofollow: hideFromSearch,
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
    <div className="overflow-x-clip" style={{ background: "#0A0F1F" }}>
      <ServicePageSchemas
        title={study.seo?.metaTitle || study.title}
        description={description}
        url={pageUrl}
        image={study.seo?.openGraphImage || study.image}
        seo={study.seo}
      />

      {/* 1. Hero — title left, stats right, CTA */}
      <CaseStudyHero
        title={study.title}
        excerpt={study.excerpt}
        stats={study.heroStats}
        badge={study.heroBadge || "Case Study"}
        ctaText={study.heroCta?.buttonText || "Talk to Our Experts"}
        ctaHref={study.heroCta?.buttonHref || "/contact"}
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
        description={study.challengeDescription}
        items={study.challengeItems || []}
      />

      {/* 4. Solutions / Approach — dark numbered grid */}
      <CaseStudySolutionsGrid
        title={study.approachHeadline || "Our Solutions / Approach"}
        description={study.approachDescription}
        items={study.approachItems || []}
      />

      {/* Technologies Used */}
      <CaseStudyTechnologies items={study.technologies || []} />

      {/* 6. Outcomes — metric cards */}
      <CaseStudyOutcomesGrid
        title={study.outcomesHeadline || "Outcomes / Result"}
        description={study.outcomesDescription}
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

      {/* Soft-launch: hide related case study discovery until published */}
      {areCaseStudiesListed() && <CaseStudyMore items={related} />}

      <DarkCTA
        badgeText={study.finalCta?.badgeText || "Case Study"}
        title={study.finalCta?.title || "Ready to Write Your Transformation Story?"}
        description={
          study.finalCta?.description?.length
            ? study.finalCta.description
            : "Partner with SyncOrigins to turn operational challenges into measurable business outcomes."
        }
        buttonText={study.finalCta?.buttonText || "Talk to Our Experts"}
        buttonHref={study.finalCta?.buttonLink || "/contact"}
      />
    </div>
  );
}
