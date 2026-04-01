import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PortableText } from "@/components/ui/PortableText";
import { DarkCTA } from "@/components/services/DarkCTA";
import { getUseCasesPage } from "@/lib/sanity/queries";
import { notFound } from "next/navigation";
import { TestimonialCarousel } from "@/components/services/TestimonialCarousel";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getUseCasesPage();
  const defaultTitle = "AI Use Cases Across Industries & Business Functions | Axiom AI";
  const defaultDesc = "Explore real-world AI use cases across industries, leveraging automation and intelligent strategies to improve efficiency and outcomes.";
  
  if (!data?.seo) return {
    title: defaultTitle,
    description: defaultDesc,
  };
  return {
    title: data.seo.metaTitle || defaultTitle,
    description: data.seo.metaDescription || defaultDesc,
  };
}

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" style={{ color: '#00E5FF' }}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
  </svg>
);

export default async function UseCasesPage() {
  const data = await getUseCasesPage();
  if (!data) notFound();

  return (
    <div className="pt-24 pb-0" style={{ background: '#0A0F1F' }}>
      
      {/* ── Hero Section ── */}
      <section className="py-24 relative overflow-hidden flex flex-col items-center text-center" style={{ background: 'linear-gradient(180deg, #0A0F1F 0%, #0D1B2A 100%)' }}>
        <div className="bg-grid opacity-60 z-0" />
        {/* Glow radials */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70rem] h-[50rem] rounded-full blur-[130px] pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)' }} />
        <div className="absolute top-[20%] right-[5%] w-[35rem] h-[35rem] rounded-full blur-[100px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(29,161,242,0.07) 0%, transparent 70%)' }} />

        <div className="container-custom relative z-10 px-4">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm" style={{ background: 'rgba(0,229,255,0.08)', borderColor: 'rgba(0,229,255,0.3)' }}>
            <SparkleIcon />
            <span className="tracking-wide uppercase text-xs font-semibold" style={{ color: '#00E5FF' }}>
              {data?.hero?.badge || "Use Cases"}
            </span>
          </div>
          
          <h1 className="type-hero-title text-white mb-8 max-w-5xl mx-auto">
            {(() => {
              const rawTitle = data?.hero?.title || "Real-World Impact through";
              const highlight = data?.hero?.titleHighlight || "Objective Execution";
              
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

          <div className="type-body-large max-w-3xl mx-auto mb-10" style={{ color: '#8FA3BF' }}>
            <PortableText value={data?.hero?.description} />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
             <button className="px-5 py-2 rounded-full text-sm font-medium shadow-sm border transition-colors" style={{ background: 'linear-gradient(135deg, #1DA1F2, #00E5FF)', color: '#0A0F1F', borderColor: 'transparent', boxShadow: '0 0 15px rgba(0,229,255,0.2)' }}>
               All Cases
             </button>
             {data?.tabs?.map((tab: string, idx: number) => (
                <button key={idx} className="px-5 py-2 rounded-full text-sm font-medium shadow-sm transition-colors border" style={{ background: 'rgba(26,46,71,0.6)', color: '#C5D1E0', borderColor: 'rgba(0,229,255,0.15)' }}
                  // In a real app we'd add interactive state, for now styling as inactive
                >
                  {tab}
                </button>
             ))}
          </div>
        </div>
      </section>

      {/* ── Grid Section ── */}
      <section className="py-24 relative z-10" style={{ background: '#14243A' }}>
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(data?.cases || []).map((item: any, idx: number) => (
              <div key={idx} className="group p-10 rounded-[2rem] flex flex-col items-start shadow-sm transition-all" style={{ background: 'rgba(26,46,71,0.5)', border: '1px solid rgba(0,229,255,0.12)', backdropFilter: 'blur(10px)' }}>
                <div className="flex items-center justify-between w-full mb-8">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-sm" style={{ background: 'rgba(0,229,255,0.1)', color: '#00E5FF', border: '1px solid rgba(0,229,255,0.2)' }}>
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <span className="text-xs font-bold tracking-widest" style={{ color: '#8FA3BF' }}>
                      {item.caseNumber}
                    </span>
                </div>
                
                <h3 className="type-card-title text-white mb-8 group-hover:text-[#00E5FF] transition-colors">{item.title}</h3>
                
                <div className="space-y-6 flex-grow mb-8 w-full">
                  <div>
                    <h4 className="text-xs font-bold tracking-wider mb-2" style={{ color: '#00E5FF' }}>THE PROBLEM</h4>
                    <div className="text-sm leading-relaxed" style={{ color: '#C5D1E0' }}>
                      <PortableText value={item.problem} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-wider mb-2" style={{ color: '#00E5FF' }}>TOOLS & TECH</h4>
                    <p className="text-sm leading-relaxed" style={{ color: '#C5D1E0' }}>
                        {Array.isArray(item.tools) ? item.tools.join(", ") : item.tools}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-wider mb-2" style={{ color: '#00E5FF' }}>APPROACH</h4>
                    <div className="text-sm leading-relaxed" style={{ color: '#C5D1E0' }}>
                      <PortableText value={item.approach} />
                    </div>
                  </div>
                  <div className="pt-6 border-t" style={{ borderColor: 'rgba(0,229,255,0.15)' }}>
                    <h4 className="text-xs font-bold tracking-wider mb-2" style={{ color: '#00E5FF' }}>BUSINESS IMPACT</h4>
                    <div className="font-bold leading-relaxed text-white">
                      <PortableText value={item.impact} />
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <TestimonialCarousel 
        testimonials={data?.testimonials} 
        subtitle="Impact"
        title="Case Results"
      />

      {/* ── Bottom CTA Layer ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0A0F1F 100%)' }}>
        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(to right, rgba(0,229,255,0.03) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[30rem] rounded-full blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)' }} />

        <div className="container-custom relative z-10 text-center flex flex-col items-center">
          <h2 className="type-section-title text-white mb-6">
            {data?.midPageCta?.title}
          </h2>
          <div className="text-lg max-w-2xl mx-auto mb-10" style={{ color: '#8FA3BF' }}>
            <PortableText value={data?.midPageCta?.description} />
          </div>
          {data?.midPageCta?.primaryCta?.text && data?.midPageCta?.primaryCta?.link && (
            <Link href={data.midPageCta.primaryCta.link} className="w-full sm:w-auto">
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
