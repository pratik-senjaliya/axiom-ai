"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { PortableText } from "@/components/ui/PortableText";
import { HoverCard } from "@/components/ui/animations/HoverCard";

import { SlideUp } from "@/components/ui/animations/SlideUp";

interface SolutionsGridProps {
  cases: any[];
  allTags: string[];
  initialTag?: string | null;
  heroData: any;
}

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" style={{ color: '#00E5FF' }}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
  </svg>
);

export function SolutionsGrid({ cases, allTags, initialTag, heroData }: SolutionsGridProps) {
  const searchParams = useSearchParams();
  const [activeTag, setActiveTag] = useState<string | null>(initialTag || null);

  // Sync state with URL without full page refresh
  useEffect(() => {
    const currentTag = searchParams.get('tag');
    if (currentTag !== activeTag) {
      setActiveTag(currentTag);
    }
  }, [searchParams, activeTag]);

  const handleTagClick = (tag: string | null) => {
    setActiveTag(tag);
    
    // SILENT URL UPDATE: Avoids Next.js Re-render Blink
    const url = new URL(window.location.href);
    if (tag) {
      url.searchParams.set('tag', tag);
    } else {
      url.searchParams.delete('tag');
    }
    window.history.pushState({}, '', url);
  };

  const filteredCases = useMemo(() => {
    if (!activeTag) return cases;
    
    const searchStr = activeTag.toLowerCase();
    
    return cases.filter((item: any) => {
      // 1. Check Title
      const titleMatch = item.title?.toLowerCase().includes(searchStr);
      
      // 2. Check Tools/Tags
      const itemTools = Array.isArray(item.tools) 
        ? item.tools 
        : item.tools ? [item.tools] : [];
        
      const toolsMatch = itemTools.some((t: string) => 
        t.toLowerCase().includes(searchStr)
      );

      return titleMatch || toolsMatch;
    });
  }, [cases, activeTag]);

  return (
    <div className="w-full">
      {/* ── Hero Section (Inside Client Component for seamless filtering) ── */}
      <section className="relative pt-20 pb-12 overflow-hidden text-center" style={{ background: 'linear-gradient(180deg, #0A0F1F 0%, #0D1B2A 100%)' }}>
        <div className="bg-grid opacity-60 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70rem] h-[40rem] rounded-full blur-[130px] pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)' }} />
        
        <SlideUp className="container-custom relative z-10 px-4 flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm" style={{ background: 'rgba(0,229,255,0.08)', borderColor: 'rgba(0,229,255,0.3)' }}>
            <SparkleIcon />
            <span className="tracking-wide uppercase text-xs font-semibold" style={{ color: '#00E5FF' }}>
              Strategic Solutions
            </span>
          </div>
          
          <h1 className="type-hero-title text-white mb-6 max-w-5xl mx-auto">
             World-Class Impact through <span className="gradient-text">Objective AI</span>
          </h1>

          <div className="type-body-large max-w-3xl mx-auto mb-10 text-[#8FA3BF] [&>p]:text-lg [&>p]:leading-relaxed" style={{ color: '#8FA3BF' }}>
            <PortableText value={heroData?.description} />
          </div>

          {/* ── Filter Bar (Moved into Hero) ── */}
          <div className="flex flex-wrap justify-center gap-3 relative z-20">
            <button 
              onClick={() => handleTagClick(null)}
              className="px-6 py-2 rounded-full text-[0.7rem] font-bold uppercase tracking-widest shadow-sm border transition-all duration-500" 
              style={{ 
                background: !activeTag ? 'linear-gradient(135deg, #1DA1F2, #00E5FF)' : 'rgba(26,46,71,0.6)', 
                color: !activeTag ? '#0A0F1F' : '#C5D1E0', 
                borderColor: !activeTag ? 'transparent' : 'rgba(0,229,255,0.15)',
                boxShadow: !activeTag ? '0 0 25px rgba(0,229,255,0.35)' : 'none',
                transform: !activeTag ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              All Solutions
            </button>
            {allTags.map((tag, idx) => (
              <button 
                key={idx} 
                onClick={() => handleTagClick(tag)}
                className="px-6 py-2 rounded-full text-[0.7rem] font-bold uppercase tracking-widest shadow-sm transition-all duration-500 border" 
                style={{ 
                  background: activeTag === tag ? 'linear-gradient(135deg, #1DA1F2, #00E5FF)' : 'rgba(26,46,71,0.6)', 
                  color: activeTag === tag ? '#0A0F1F' : '#C5D1E0', 
                  borderColor: activeTag === tag ? 'transparent' : 'rgba(0,229,255,0.15)',
                  boxShadow: activeTag === tag ? '0 0 25px rgba(0,229,255,0.35)' : 'none',
                  transform: activeTag === tag ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </SlideUp>
      </section>

      {/* ── Animated Grid section ── */}
      <section className="pb-32 pt-8 relative z-10" style={{ background: '#0A0F1F' }}>
        <div className="container-custom px-4 max-w-[95rem] mx-auto">
          <motion.div 
            layout
            className="flex flex-wrap justify-center gap-10 lg:gap-12 min-h-[600px]"
          >
        <AnimatePresence mode="popLayout">
          {filteredCases.map((item: any, idx: number) => (
            <motion.div
              layout
              key={item._id || item.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
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
                                <button 
                                  key={i} 
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleTagClick(tool);
                                    window.scrollTo({ top: 300, behavior: 'smooth' });
                                  }}
                                  className={`text-[0.6rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border transition-all ${activeTag === tool ? 'bg-[#00E5FF] text-black border-[#00E5FF]' : 'border-[#00E5FF]/10 bg-white/5 text-white/70 hover:bg-[#00E5FF]/20 hover:text-white hover:border-[#00E5FF]/30'}`}
                                >
                                  {tool}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="mt-auto">
                        <div className="relative p-5 md:p-6 rounded-[1.5rem] transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(0,229,255,0.1)] overflow-hidden" 
                          style={{ background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.2)' }}>
                          <div className="relative z-10 flex flex-col justify-between gap-2.5">
                              <div className="items-center flex gap-2 mb-0.5">
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
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  </section>
</div>
  );
}
