import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { DarkCTA } from "@/components/services/DarkCTA";
import { getUseCasesPage } from "@/lib/sanity/queries";
import { notFound } from "next/navigation";
import { TestimonialCarousel } from "@/components/services/TestimonialCarousel";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getUseCasesPage();
  if (!data) return {
    title: "Use Cases | AxiomAI",
    description: "Real-world examples of our enterprise advisory impact.",
  };
  return {
    title: `${data.hero?.title} | AxiomAI`,
    description: data.hero?.description,
  };
}

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="text-primary-500">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
  </svg>
);

export default async function UseCasesPage() {
  const data = await getUseCasesPage();
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
            <span>{data?.hero?.badge || "Use Cases"}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#26201D] max-w-4xl mx-auto">
            {data?.hero?.title} <span className="gradient-text">{data?.hero?.titleHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10">
            {data?.hero?.description}
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
             <button className="px-5 py-2 rounded-full bg-neutral-900 border border-neutral-900 text-white text-sm font-medium shadow-sm">All Cases</button>
             {data?.tabs?.map((tab: string, idx: number) => (
                <button key={idx} className="px-5 py-2 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50 text-sm font-medium shadow-sm transition-colors">{tab}</button>
             ))}
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 relative z-10">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(data?.cases || []).map((item: any, idx: number) => (
              <div key={idx} className="card p-10 bg-white border border-neutral-100 rounded-[2rem] hover:border-primary-200 transition-all shadow-sm hover:shadow-md flex flex-col items-start group">
                <div className="flex items-center justify-between w-full mb-8">
                    <div className="w-14 h-14 bg-[#FF821C] text-white rounded-xl flex items-center justify-center shadow-sm">
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <span className="text-xs font-bold text-neutral-300 tracking-widest">{item.caseNumber}</span>
                </div>
                
                <h3 className="type-card-title text-[#26201D] mb-8">{item.title}</h3>
                
                <div className="space-y-6 flex-grow mb-8 w-full">
                  <div>
                    <h4 className="text-xs font-bold text-[#FF821C] tracking-wider mb-2">THE PROBLEM</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">{item.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#FF821C] tracking-wider mb-2">TOOLS & TECH</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                        {Array.isArray(item.tools) ? item.tools.join(", ") : item.tools}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#FF821C] tracking-wider mb-2">APPROACH</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">{item.approach}</p>
                  </div>
                  <div className="pt-6 border-t border-neutral-100">
                    <h4 className="text-xs font-bold text-[#FF821C] tracking-wider mb-2">BUSINESS IMPACT</h4>
                    <p className="text-[#26201D] font-bold leading-relaxed">{item.impact}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel 
        testimonials={data?.testimonials} 
        subtitle="Impact"
        title="Case Results"
      />

      {/* Bottom CTA Layer */}
      <section className="py-24 relative overflow-hidden bg-[#26201D] mt-12">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>
        <div className="container-custom relative z-10 text-center flex flex-col items-center">
          <h2 className="type-section-title text-white mb-6">
            {data?.midPageCta?.title}
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
            {data?.midPageCta?.description}
          </p>
          {data?.midPageCta?.primaryCta?.text && data?.midPageCta?.primaryCta?.link && (
          <Link href={data.midPageCta.primaryCta.link} className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto px-8 h-14 text-base rounded-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF821C] to-[#AD58D9] text-white hover:opacity-90 transition-opacity shadow-md border-none">
              {data.midPageCta.primaryCta.text}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </Link>
          )}
        </div>
      </section>

      {data?.pocOffer && (
        <DarkCTA 
            title={data.pocOffer.title}
            description={data.pocOffer.description}
            buttonText="Start Your Pilot"
            buttonHref="/contact"
        />
      )}
    </div>
  );
}
