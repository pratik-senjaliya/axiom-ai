import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PortableText } from "@/components/ui/PortableText";
import { DarkCTA } from "@/components/services/DarkCTA";
import { getUseCasesPage } from "@/lib/sanity/queries";
import { TestimonialCarousel } from "@/components/services/TestimonialCarousel";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { StaggerGroup, StaggerItem } from "@/components/ui/animations/StaggerGroup";
import { HoverCard } from "@/components/ui/animations/HoverCard";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getUseCasesPage();
  const defaultTitle = "Enterprise AI Solutions Across Industries | Axiom AI";
  const defaultDesc = "Explore high-impact AI solutions across industries, leveraging automation and objective execution to drive measurable ROI.";
  
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

export default async function SolutionsPage({
  searchParams,
}: {
  searchParams: { tag?: string };
}) {
  const data = await getUseCasesPage();
  const activeTag = searchParams.tag || null;

  const allTags = (() => {
    if (!data?.cases) return [];
    const tags = new Set<string>();
    data.cases.forEach((item: any) => {
      if (item.tools) {
        const itemTools = Array.isArray(item.tools) ? item.tools : [item.tools];
        itemTools.forEach((tag: string) => tags.add(tag));
      }
    });
    return Array.from(tags).sort();
  })();

  const filteredCases = (() => {
    if (!data?.cases) return [];
    if (!activeTag) return data.cases;
    return data.cases.filter((item: any) => {
      const itemTools = Array.isArray(item.tools) ? item.tools : [item.tools];
      return itemTools.includes(activeTag);
    });
  })();

  return (
    <div className="pt-24 pb-0" style={{ background: '#0A0F1F' }}>
      
      {/* ── Hero Section ── */}
      <section className="relative pt-20 pb-28 overflow-hidden text-center" style={{ background: 'linear-gradient(180deg, #0A0F1F 0%, #0D1B2A 100%)' }}>
        <div className="bg-grid opacity-60 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70rem] h-[40rem] rounded-full blur-[130px] pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)' }} />
        
        <SlideUp className="container-custom relative z-10 px-4 flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm" style={{ background: 'rgba(0,229,255,0.08)', borderColor: 'rgba(0,229,255,0.3)' }}>
            <SparkleIcon />
            <span className="tracking-wide uppercase text-xs font-semibold" style={{ color: '#00E5FF' }}>
              {data?.hero?.badge || "Solutions"}
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

          <div className="type-body-large max-w-3xl mx-auto mb-10 text-[#8FA3BF] [&>p]:text-lg [&>p]:md:text-xl [&>p]:leading-relaxed" style={{ color: '#8FA3BF' }}>
            <PortableText value={data?.hero?.description} />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
             <Link 
              href="/solutions"
              scroll={false}
              className="px-5 py-2 rounded-full text-sm font-medium shadow-sm border transition-all duration-300" 
              style={{ 
                background: !activeTag ? 'linear-gradient(135deg, #1DA1F2, #00E5FF)' : 'rgba(26,46,71,0.6)', 
                color: !activeTag ? '#0A0F1F' : '#C5D1E0', 
                borderColor: !activeTag ? 'transparent' : 'rgba(0,229,255,0.15)',
                boxShadow: !activeTag ? '0 0 15px rgba(0,229,255,0.2)' : 'none'
              }}
             >
               All Solutions
             </Link>
             {allTags.map((tag, idx: number) => (
                <Link 
                  key={idx} 
                  href={`/solutions?tag=${encodeURIComponent(tag)}`}
                  scroll={false}
                  className="px-5 py-2 rounded-full text-sm font-medium shadow-sm transition-all duration-300 border" 
                  style={{ 
                    background: activeTag === tag ? 'linear-gradient(135deg, #1DA1F2, #00E5FF)' : 'rgba(26,46,71,0.6)', 
                    color: activeTag === tag ? '#0A0F1F' : '#C5D1E0', 
                    borderColor: activeTag === tag ? 'transparent' : 'rgba(0,229,255,0.15)',
                    boxShadow: activeTag === tag ? '0 0 15px rgba(0,229,255,0.2)' : 'none'
                  }}
                >
                  {tag}
                </Link>
             ))}
          </div>
        </SlideUp>
      </section>

      {/* ── Grid Section ── */}
      <section className="py-24 relative z-10" style={{ background: '#0A0F1F' }}>
        <div className="container-custom px-4 max-w-[95rem] mx-auto">
          <StaggerGroup className="flex flex-wrap justify-center gap-10 lg:gap-12" key={activeTag || 'all'}>
            {filteredCases.map((item: any, idx: number) => (
              <StaggerItem 
                key={item._id || idx} 
                className="flex flex-col w-full sm:w-[calc(50%-1.5rem)] lg:basis-[calc(50%-3rem)] min-w-[380px] max-w-[650px] flex-grow"
              >
                <HoverCard className="h-full rounded-[2rem] flex flex-col border transition-all duration-700 overflow-hidden group shadow-lg shadow-black/40" 
                  style={{ background: 'rgba(20,36,58,0.7)', borderColor: 'rgba(0,229,255,0.15)', backdropFilter: 'blur(20px)' }}
                >
                  <div className="flex flex-col h-full relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E5FF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="p-7 md:p-8 flex h-full">
                      <div className="hidden sm:flex flex-col items-center mr-8 pt-1 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mb-2.5 shadow-[0_0_10px_#00E5FF]" />
                        <div className="flex-grow w-px bg-gradient-to-b from-[#00E5FF]/40 via-[#00E5FF]/10 to-transparent" />
                      </div>

                      <div className="flex-grow flex flex-col text-left">
                        <div className="flex items-start justify-between mb-5">
                          <div className="max-w-[85%] min-h-[3rem]">
                            <h3 className="text-xl md:text-2xl font-bold text-white transition-all duration-500 group-hover:text-[#00E5FF] leading-tight">
                              {item.title}
                            </h3>
                          </div>
                          <span className="text-[0.55rem] font-black tracking-[0.1em] py-1 px-2.5 rounded-md bg-[#00E5FF]/10 border border-[#00E5FF]/20" style={{ color: '#00E5FF' }}>
                            {item.caseNumber || `S${idx + 1}`}
                          </span>
                        </div>

                        <div className="flex-grow flex flex-col gap-4 mb-6">
                          <div className="relative min-h-[50px]">
                            <div className="flex items-center gap-2.5 mb-2 group/label">
                              <div className="w-5 h-[2px] bg-[#00E5FF]" />
                              <h4 className="text-[0.65rem] font-black tracking-[0.2em] uppercase" style={{ color: '#00E5FF' }}>THE CHALLENGE</h4>
                            </div>
                            <div className="text-sm md:text-base leading-snug text-white font-normal">
                              <PortableText value={item.problem} />
                            </div>
                          </div>

                          <div className="relative min-h-[40px]">
                            <div className="flex items-center gap-2.5 mb-2 group/label">
                              <div className="w-5 h-[2px] bg-[#00E5FF]/40" />
                              <h4 className="text-[0.65rem] font-bold tracking-[0.2em] uppercase" style={{ color: '#00E5FF' }}>STRATEGIC APPROACH</h4>
                            </div>
                            <div className="text-sm md:text-base leading-snug text-white font-light opacity-85">
                              <PortableText value={item.approach} />
                            </div>
                          </div>

                          <div className="pt-0">
                             {item.tools && (
                              <div className="flex flex-wrap gap-2">
                                {(Array.isArray(item.tools) ? item.tools : [item.tools]).map((tool: string, i: number) => (
                                  <Link 
                                    key={i} 
                                    href={`/solutions?tag=${encodeURIComponent(tool)}`}
                                    scroll={false}
                                    className={`text-[0.6rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border transition-all ${activeTag === tool ? 'bg-[#00E5FF] text-black border-[#00E5FF]' : 'border-[#00E5FF]/10 bg-white/5 text-white/70 hover:bg-[#00E5FF]/20 hover:text-white hover:border-[#00E5FF]/30'}`}
                                  >
                                    {tool}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="mt-auto">
                          <div className="relative p-5 md:p-6 rounded-[1.5rem] transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(0,229,255,0.1)] overflow-hidden" 
                            style={{ background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.2)' }}>
                            <div className="relative z-10 flex flex-col justify-between gap-2.5">
                                <div className="flex items-center gap-2 mb-0.5">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                                  <h4 className="text-[0.6rem] font-bold tracking-[0.2em] uppercase" style={{ color: '#00E5FF' }}>VALUE DELIVERED</h4>
                                </div>
                                <div className="text-base md:text-lg font-bold text-white leading-tight">
                                  <PortableText value={item.impact} />
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <TestimonialCarousel 
        testimonials={data?.testimonials} 
        subtitle="Impact"
        title="Solutions Index"
      />

      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0A0F1F 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(to right, rgba(0,229,255,0.03) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[30rem] rounded-full blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)' }} />

        <SlideUp className="container-custom relative z-10 text-center flex flex-col items-center">
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
        </SlideUp>
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
