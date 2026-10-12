import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { getCaseStudyBySlug, getRelatedCaseStudies } from "@/lib/sanity/queries";
import { PortableText } from "@/components/ui/PortableText";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { DarkCTA } from "@/components/services/DarkCTA";
import { TestimonialCarousel } from "@/components/services/TestimonialCarousel";
import { ServicePageSchemas } from "@/components/seo/ServicePageSchemas";
import { generateMetadata as genMeta, getSiteUrl, portableTextToPlain } from "@/lib/seo";
import { DEMO_CASE_STUDY_SLUG } from "@/lib/demo/financePage";
import { DEMO_CASE_STUDY_VIEW } from "@/lib/demo/caseStudy";

export const dynamic = "force-dynamic";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

const SERVICE_LABELS: Record<string, string> = {
  finance: "Finance",
  ai: "AI Implementation",
  erp: "ERP Transformation",
  data: "Data & Analytics",
  managed: "Managed Delivery",
  sustainability: "Sustainability",
};

async function resolveCaseStudy(slug: string) {
  const study = await getCaseStudyBySlug(slug);
  if (study) return study;
  if (slug === DEMO_CASE_STUDY_SLUG) return DEMO_CASE_STUDY_VIEW;
  return null;
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = await resolveCaseStudy(slug);

  if (!study) {
    return genMeta({
      title: "Case Study Not Found | SyncOrigins",
      description: "",
      slug: `/case-studies/${slug}`,
    });
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

function CaseSection({
  id,
  eyebrow,
  headline,
  children,
}: {
  id: string;
  eyebrow: string;
  headline: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32 py-14 md:py-16 border-b" style={{ borderColor: "rgba(0,229,255,0.1)" }}>
      <div className="max-w-4xl">
        <p className="text-[0.7rem] font-bold tracking-[0.22em] uppercase mb-3" style={{ color: "#00E5FF" }}>
          {eyebrow}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{headline}</h2>
        <div className="prose-blog max-w-none text-base leading-relaxed" style={{ color: "#C5D1E0" }}>
          {children}
        </div>
      </div>
    </section>
  );
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = await resolveCaseStudy(slug);

  if (!study) notFound();

  let related = await getRelatedCaseStudies(slug, 3);
  if (!related.length && slug === DEMO_CASE_STUDY_SLUG) {
    related = [];
  }

  const pageUrl = `${getSiteUrl()}/case-studies/${slug}`;
  const description =
    study.seo?.metaDescription ||
    study.excerpt ||
    portableTextToPlain(study.aboutClient) ||
    "";

  const metrics = study.outcomeMetrics || [];
  const testimonials = study.testimonials || [];
  const serviceLabel = study.relatedService
    ? SERVICE_LABELS[study.relatedService] || study.relatedService
    : null;

  return (
    <div className="pt-24" style={{ background: "#0A0F1F" }}>
      <ServicePageSchemas
        title={study.seo?.metaTitle || study.title}
        description={description}
        url={pageUrl}
        image={study.seo?.openGraphImage || study.image}
        seo={study.seo}
      />

      {/* 1. Hero */}
      <section
        className="py-10 md:py-14 border-b"
        style={{ background: "#0D1B2A", borderColor: "rgba(0,229,255,0.1)" }}
      >
        <div className="container-custom px-4 max-w-7xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Case Studies" },
              { label: study.title },
            ]}
            className="mb-6"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div
                className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border"
                style={{
                  background: "rgba(0,229,255,0.1)",
                  borderColor: "rgba(0,229,255,0.3)",
                  color: "#00E5FF",
                }}
              >
                {study.heroBadge || "Case Study"}
                {serviceLabel ? ` · ${serviceLabel}` : ""}
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                {study.title}
              </h1>
              {study.excerpt && (
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: "#C5D1E0" }}>
                  {study.excerpt}
                </p>
              )}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #1DA1F2, #00E5FF)",
                  color: "#0A0F1F",
                  boxShadow: "0 0 20px rgba(0,229,255,0.3)",
                }}
              >
                Talk to Our Experts
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div
              className="relative aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg"
              style={{ background: "rgba(13,27,42,0.9)", border: "1px solid rgba(0,229,255,0.15)" }}
            >
              {study.image ? (
                <Image
                  src={study.image}
                  alt={study.imageAlt || study.title}
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center gap-3">
                  <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#00E5FF" }}>
                    SyncOrigins Case Study
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-white leading-snug">{study.title}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2–6 Content sections */}
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-16">
          <article>
            {study.aboutClient && (
              <CaseSection id="about-client" eyebrow="01" headline={study.aboutClientHeadline || "About the Client"}>
                <PortableText value={study.aboutClient} />
              </CaseSection>
            )}

            {study.challenge && (
              <CaseSection id="challenge" eyebrow="02" headline={study.challengeHeadline || "The Challenge"}>
                <PortableText value={study.challenge} />
              </CaseSection>
            )}

            {study.approach && (
              <CaseSection
                id="approach"
                eyebrow="03"
                headline={study.approachHeadline || "Our Solutions / Approach"}
              >
                <PortableText value={study.approach} />
              </CaseSection>
            )}

            {study.outcomes && (
              <CaseSection id="outcomes" eyebrow="04" headline={study.outcomesHeadline || "Outcomes / Result"}>
                <PortableText value={study.outcomes} />
              </CaseSection>
            )}

            {metrics.length > 0 && (
              <div className="py-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {metrics.map((metric: { value?: string; label?: string }, index: number) => (
                  <div
                    key={index}
                    className="rounded-2xl p-6 border text-center"
                    style={{
                      background: "rgba(26,46,71,0.6)",
                      borderColor: "rgba(0,229,255,0.15)",
                    }}
                  >
                    <p className="text-2xl md:text-3xl font-extrabold mb-2" style={{ color: "#00E5FF" }}>
                      {metric.value}
                    </p>
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#8FA3BF" }}>
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </article>

          <aside className="hidden lg:block py-14">
            <div
              className="sticky top-32 rounded-2xl border p-6 space-y-4"
              style={{ background: "rgba(13,27,42,0.6)", borderColor: "rgba(0,229,255,0.15)" }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "#00E5FF" }}>
                In this case study
              </p>
              <nav className="flex flex-col gap-3 text-sm">
                {study.aboutClient && (
                  <a href="#about-client" className="hover:text-[#00E5FF] transition-colors" style={{ color: "#C5D1E0" }}>
                    About the Client
                  </a>
                )}
                {study.challenge && (
                  <a href="#challenge" className="hover:text-[#00E5FF] transition-colors" style={{ color: "#C5D1E0" }}>
                    The Challenge
                  </a>
                )}
                {study.approach && (
                  <a href="#approach" className="hover:text-[#00E5FF] transition-colors" style={{ color: "#C5D1E0" }}>
                    Solutions / Approach
                  </a>
                )}
                {study.outcomes && (
                  <a href="#outcomes" className="hover:text-[#00E5FF] transition-colors" style={{ color: "#C5D1E0" }}>
                    Outcomes / Result
                  </a>
                )}
                {testimonials.length > 0 && (
                  <a href="#testimonials" className="hover:text-[#00E5FF] transition-colors" style={{ color: "#C5D1E0" }}>
                    Testimonials
                  </a>
                )}
              </nav>
            </div>
          </aside>
        </div>
      </div>

      {/* 7. Testimonials */}
      {testimonials.length > 0 && (
        <div id="testimonials">
          <TestimonialCarousel
            testimonials={testimonials}
            title={study.testimonialsHeadline || "Testimonials"}
            subtitle="Client Voice"
          />
        </div>
      )}

      {/* 8. More Case Studies */}
      {related.length > 0 && (
        <section className="py-20" style={{ background: "#0D1B2A" }}>
          <div className="container-custom px-4 max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">More Case Studies</h2>
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#8FA3BF" }}>
                Explore related transformation stories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((item: any) => (
                <Link
                  key={item.id || item.slug}
                  href={`/case-studies/${item.slug}`}
                  className="group flex flex-col h-full rounded-[1.5rem] overflow-hidden transition-all hover:[border-color:rgba(0,229,255,0.35)]"
                  style={{
                    background: "rgba(26,46,71,0.6)",
                    border: "1px solid rgba(0,229,255,0.12)",
                  }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden" style={{ background: "rgba(13,27,42,0.9)" }}>
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.imageAlt || item.title}
                        fill
                        className="object-contain p-1.5 transition-transform duration-700 group-hover:scale-[1.02]"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center p-6 text-center">
                        <p className="text-sm font-bold text-white line-clamp-3">{item.title}</p>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-base font-bold text-white group-hover:text-[#00E5FF] transition-colors line-clamp-2 leading-snug mb-4">
                      {item.title}
                    </p>
                    {item.excerpt && (
                      <p className="text-sm line-clamp-2 mb-4 flex-grow" style={{ color: "#8FA3BF" }}>
                        {item.excerpt}
                      </p>
                    )}
                    <div
                      className="mt-auto inline-flex items-center font-bold text-[11px] uppercase tracking-widest"
                      style={{ color: "#00E5FF" }}
                    >
                      Read Case Study
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
