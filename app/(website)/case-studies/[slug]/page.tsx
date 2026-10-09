import type { Metadata } from "next";
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

export const dynamic = "force-dynamic";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

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

const SERVICE_LABELS: Record<string, string> = {
  finance: "Finance",
  ai: "AI Implementation",
  erp: "ERP Transformation",
  data: "Data & Analytics",
  managed: "Managed Delivery",
  sustainability: "Sustainability",
};

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) notFound();

  const related = await getRelatedCaseStudies(slug, 3);
  const pageUrl = `${getSiteUrl()}/case-studies/${slug}`;
  const description =
    study.seo?.metaDescription ||
    study.excerpt ||
    portableTextToPlain(study.aboutClient) ||
    "";

  const sections = [
    {
      id: "about-client",
      headline: study.aboutClientHeadline || "About the Client",
      content: study.aboutClient,
    },
    {
      id: "challenge",
      headline: study.challengeHeadline || "The Challenge",
      content: study.challenge,
    },
    {
      id: "approach",
      headline: study.approachHeadline || "Our Solutions / Approach",
      content: study.approach,
    },
    {
      id: "outcomes",
      headline: study.outcomesHeadline || "Outcomes / Result",
      content: study.outcomes,
    },
  ].filter((section) => section.content);

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

      {/* Hero */}
      <section
        className="py-8 md:py-12 border-b"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
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
                <p className="text-base md:text-lg leading-relaxed" style={{ color: "#C5D1E0" }}>
                  {study.excerpt}
                </p>
              )}
            </div>
            <div className="relative aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
              {study.image ? (
                <Image
                  src={study.image}
                  alt={study.imageAlt || study.title}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-3xl font-bold p-8 text-center"
                  style={{ background: "rgba(0,229,255,0.05)", color: "#14243A" }}
                >
                  {study.title}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-16 md:py-24" style={{ background: "#0A0F1F" }}>
        <div className="container-custom px-4 max-w-4xl mx-auto space-y-16 md:space-y-20">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{section.headline}</h2>
              <div className="prose-blog max-w-none" style={{ color: "#C5D1E0" }}>
                <PortableText value={section.content} />
              </div>
            </div>
          ))}

          {metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {metrics.map((metric: { value?: string; label?: string }, index: number) => (
                <div
                  key={index}
                  className="rounded-2xl p-6 border text-center"
                  style={{
                    background: "rgba(26,46,71,0.6)",
                    borderColor: "rgba(0,229,255,0.15)",
                  }}
                >
                  <p
                    className="text-2xl md:text-3xl font-extrabold mb-2"
                    style={{ color: "#00E5FF" }}
                  >
                    {metric.value}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#8FA3BF" }}>
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <TestimonialCarousel
          testimonials={testimonials}
          title={study.testimonialsHeadline || "Testimonials"}
          subtitle="Client Voice"
        />
      )}

      {/* More Case Studies */}
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
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.imageAlt || item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full" style={{ background: "rgba(0,229,255,0.05)" }} />
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
