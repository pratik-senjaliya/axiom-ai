import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { getAboutPage } from "@/lib/sanity/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import { TestimonialCarousel } from "@/components/services/TestimonialCarousel";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAboutPage();
  if (!data?.seo) return {
    title: "About Us | AxiomAI",
    description: "Who we are and our mission of engineering business success.",
  };
  return {
    title: data.seo.metaTitle || "About Us | AxiomAI",
    description: data.seo.metaDescription || "Who we are and our mission of engineering business success.",
  };
}

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="text-primary-500">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
  </svg>
);

export default async function AboutPage() {
  const data = await getAboutPage();
  if (!data) notFound();

  return (
    <div className="pt-24 pb-0">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden flex flex-col items-center text-center">
        <div className="bg-grid opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-orange-50/40 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-multiply"></div>
        <div className="container-custom relative z-10 px-4">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-white/50 backdrop-blur-sm text-sm font-medium text-neutral-800 shadow-sm">
            <SparkleIcon />
            <span>{data?.hero?.badge || "About Us"}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#26201D] max-w-4xl mx-auto">
            {(() => {
              const rawTitle = data?.hero?.title || "Engineering Success through";
              const highlight = data?.hero?.titleHighlight || "Objective Intelligence";
              
              if (rawTitle.toLowerCase().includes(highlight.toLowerCase())) {
                const parts = rawTitle.split(new RegExp(`(${highlight})`, "gi"));
                return (
                  <>
                    {parts.map((part: string, i: number) => 
                      part.toLowerCase() === highlight.toLowerCase() ? (
                        <span key={i} className="gradient-text">{part}</span>
                      ) : part
                    )}
                  </>
                );
              }
              return (
                <>
                  {rawTitle} <span className="gradient-text">{highlight}</span>
                </>
              );
            })()}
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            {data?.hero?.description}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 relative z-10">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="type-section-title text-[#26201D] mb-8">{data?.whyTitle || "Our Story"}</h2>
              <div className="space-y-6 text-lg text-neutral-500 leading-relaxed whitespace-pre-wrap">
                {data?.whyBody}
              </div>
            </div>
            {data?.whyImage ? (
                <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl">
                    <Image 
                        src={urlForImage(data.whyImage).url()} 
                        alt={data.whyImageAlt || "Our Story"} 
                        fill 
                        className="object-cover"
                    />
                </div>
            ) : (
                <div className="bg-white rounded-[2rem] p-10 md:p-14 border border-neutral-100 text-center flex flex-col items-center justify-center min-h-[400px] shadow-sm">
                    <div className="bg-[#E6F3FF] text-[#0066CC] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#26201D] mb-4">Independent & Objective</h3>
                    <p className="text-neutral-500 leading-relaxed">
                        We take no commission from software vendors or systems integrators. Our only loyalty is to our clients' success.
                    </p>
                </div>
            )}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 relative z-10 bg-white">
        <div className="container-custom px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="type-section-title tracking-tight text-[#26201D] mb-6">{data?.valuesTitle || "Our Values"}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {data?.values?.map((v: any, i: number) => (
              <div key={i} className="card p-10 bg-white border border-neutral-100 rounded-[2rem] flex flex-col hover:border-primary-200 transition-all shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-[#FFF2E5] text-[#FF821C] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  {/* Defaulting to a check icon if icon is specified as name but we don't have dynamic icons here yet */}
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#26201D] mb-4">{v.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="py-24 relative z-10">
        <div className="container-custom px-4">
          <div className="max-w-3xl">
            <h2 className="type-section-title text-[#26201D] mb-8">{data?.teamTitle || "Our Team"}</h2>
            <p className="text-lg text-neutral-500 leading-relaxed mb-8">
                {data?.teamBody}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel 
        testimonials={data?.testimonials} 
        subtitle="Our Impact"
        title="What Our Partners Say"
      />

      {/* Bottom CTA Layer */}
      <section className="py-24 relative overflow-hidden bg-[#26201D] mt-12">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>
        <div className="container-custom relative z-10 text-center flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-neutral-300">
            <SparkleIcon />
            <span>Connect</span>
          </div>
          <h2 className="type-section-title text-white mb-6">
            {data?.finalCta?.title || "Ready to evolve?"}
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
            {data?.finalCta?.description || "Speak with an architect today."}
          </p>
          {data?.finalCta?.primaryCta?.link && (
            <Link href={data.finalCta.primaryCta.link} className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto px-8 h-14 text-base rounded-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF821C] to-[#AD58D9] text-white hover:opacity-90 transition-opacity shadow-md border-none">
                {data.finalCta.primaryCta.text || "Get in touch"}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                </Button>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
