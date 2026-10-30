import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PortableText } from "@/components/ui/PortableText";
import { DarkCTA } from "@/components/services/DarkCTA";
import { getAllCaseStudies, getUseCasesPage } from "@/lib/sanity/queries";
import { CaseStudyFilterGrid } from "@/components/case-study/CaseStudyFilterGrid";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { DEMO_CASE_STUDY_VIEW } from "@/lib/demo/caseStudy";
import { areCaseStudiesListed } from "@/lib/content-visibility";

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
    slug: "/case-studies",
    noindex: !areCaseStudiesListed(),
    nofollow: !areCaseStudiesListed(),
  });
}

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" style={{ color: '#00E5FF' }}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
  </svg>
);

export default async function CaseStudiesPage() {
  const [data, cmsCaseStudies] = await Promise.all([
    getUseCasesPage(),
    getAllCaseStudies(),
  ]);
  // Solutions (use cases) are kept in the CMS but hidden from the UI for now;
  // the page lists case studies instead.
  const caseStudies = cmsCaseStudies?.length ? cmsCaseStudies : [DEMO_CASE_STUDY_VIEW];
  const hero = data?.hero;

  return (
    <div className="pt-24 pb-0" style={{ background: '#0A0F1F' }}>

      {/* ── Hero ── */}
      <section className="relative pt-20 pb-12 overflow-hidden text-center" style={{ background: 'linear-gradient(180deg, #0A0F1F 0%, #0D1B2A 100%)' }}>
        <div className="bg-grid opacity-60 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70rem] h-[40rem] rounded-full blur-[130px] pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)' }} />

        <SlideUp className="container-custom relative z-10 px-4 flex flex-col items-center">
          {(hero?.badge || hero?.title) && (
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm" style={{ background: 'rgba(0,229,255,0.08)', borderColor: 'rgba(0,229,255,0.3)' }}>
              <SparkleIcon />
              <span className="tracking-wide uppercase text-xs font-semibold" style={{ color: '#00E5FF' }}>
                {hero?.badge || "Strategic Solutions"}
              </span>
            </div>
          )}

          <h1 className="type-hero-title text-white mb-6 max-w-5xl mx-auto">
            {hero?.title || "World-Class Impact through"}{" "}
            {hero?.titleHighlight && (
              <span className="gradient-text">{hero.titleHighlight}</span>
            )}
          </h1>

          <div className="type-body-large max-w-5xl mx-auto text-[#8FA3BF] [&>p]:text-lg [&>p]:leading-relaxed" style={{ color: '#8FA3BF' }}>
            <PortableText value={hero?.description} />
          </div>
        </SlideUp>
      </section>

      {/* ── Case Studies ── */}
      <CaseStudyFilterGrid items={caseStudies} title="Case Studies" />

      <section className="py-12 md:py-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0A0F1F 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(to right, rgba(0,229,255,0.03) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[30rem] rounded-full blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)' }} />

        <SlideUp className="container-custom relative z-10 text-center flex flex-col items-center">
          <h4 className="type-section-title text-white mb-6">
            {data?.midPageCta?.title}
          </h4>
          <div className="text-lg max-w-4xl mx-auto mb-10" style={{ color: '#8FA3BF' }}>
            <PortableText value={data?.midPageCta?.description} />
          </div>
          {data?.midPageCta?.primaryCta?.text && (
            <Link href={data.midPageCta.primaryCta.link || "/contact"} className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-8 h-14 text-base rounded-full flex items-center justify-center gap-2 border-none transition-all hover:scale-[1.02] shadow-md hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #1DA1F2, #00E5FF)', color: '#0A0F1F', boxShadow: '0 0 20px rgba(0,229,255,0.3)' }}
              >
                {data.midPageCta.primaryCta.text}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </Link>
          )}
        </SlideUp>
      </section>

      {data?.pocOffer && (
        <DarkCTA 
            title={data.pocOffer.title}
            description={data.pocOffer.description}
            buttonText={data.pocOffer.buttonText || "Start Your Pilot"}
            buttonHref={data.pocOffer.buttonLink || "/contact"}
            titleAs="h4"
        />
      )}
    </div>
  );
}
