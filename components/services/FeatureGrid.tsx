"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { PortableText } from "@/components/ui/PortableText";

export interface FeatureItem {
  /* Common */
  title: string;
  description?: any;
  badge?: string;
  icon?: React.ReactNode;

  /* Layer Cards (Checkmarks + Outcome Footer) */
  bullets?: string[];
  outcomeTitle?: string;
  outcomeDescription?: any;

  /* Industry Use Case Cards */
  useCaseLabel?: string;
  pocText?: any;
  impactText?: any;

  /* Roadmap Items (numbered circle on the left) */
  stepNumber?: number;

  /* Basic Stats Items */
  metricValue?: string;
  metricLabel?: string;
}

interface FeatureGridProps {
  title?: string;
  description?: any;
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  bgWhite?: boolean;
  isRoadmap?: boolean;
  small?: boolean;
}

const Checkmark = () => (
  <svg className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#00E5FF' }} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  title,
  description,
  items,
  columns = 2,
  bgWhite = false,
  isRoadmap = false,
  small = false
}) => {
  const gridClass = cn(
    "gap-8",
    !isRoadmap && "grid",
    !isRoadmap && {
      "md:grid-cols-2": columns === 2,
      "md:grid-cols-3": columns === 3,
      "md:grid-cols-4": columns === 4,
    },
    isRoadmap && "flex flex-col gap-12 max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-[31px] md:before:ml-[50%] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#00E5FF]/30 before:to-transparent"
  );

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: bgWhite ? '#0D1B2A' : '#14243A' }}>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,229,255,0.03) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div className="container-custom px-4 relative z-10">

        {(title || description) && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            {title && <h2 className={cn("tracking-tight font-bold text-white mb-6", small ? "text-2xl md:text-3xl" : "text-3xl md:text-[2.5rem]")}>{title}</h2>}
            {description && (
              <div className={cn("leading-relaxed", small ? "text-base" : "text-lg")} style={{ color: '#8FA3BF' }}>
                <PortableText value={description} />
              </div>
            )}
          </div>
        )}

        <div className={gridClass}>
          {items.map((item, index) => {
            if (isRoadmap) {
              return (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-xl border-2" style={{ background: 'rgba(0,229,255,0.15)', borderColor: '#00E5FF', color: '#00E5FF', boxShadow: '0 0 15px rgba(0,229,255,0.3)' }}>
                    {item.stepNumber || index + 1}
                  </div>
                  <div className={cn("w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] rounded-[2rem] border transition-all", small ? "p-6" : "p-8")} style={{ background: 'rgba(26,46,71,0.7)', borderColor: 'rgba(0,229,255,0.15)', backdropFilter: 'blur(10px)' }}>
                    {item.badge && <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full mb-4" style={{ background: 'rgba(0,229,255,0.1)', color: '#00E5FF', border: '1px solid rgba(0,229,255,0.25)' }}>{item.badge}</span>}
                    <h3 className={cn("font-bold text-white mb-4", small ? "text-xl" : "text-2xl")}>{item.title}</h3>
                    {item.description && (
                      <div className="leading-relaxed text-sm" style={{ color: '#8FA3BF' }}>
                        <PortableText value={item.description} />
                      </div>
                    )}
                  </div>
                </div>
              );
            }

            // Standard / Layer / Use Case Card
            return (
              <div key={index} className={cn("rounded-[2rem] flex flex-col h-full transition-all duration-300", small ? "p-6 md:p-8" : "p-8 sm:p-10")} style={{ background: 'rgba(26,46,71,0.6)', border: '1px solid rgba(0,229,255,0.12)', backdropFilter: 'blur(10px)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,229,255,0.35)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(0,229,255,0.1), 0 20px 40px rgba(0,0,0,0.3)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,229,255,0.12)'; (e.currentTarget as HTMLElement).style.boxShadow = ''; }}
              >
                {/* Header (Badge or Icon) */}
                <div className="mb-6 flex items-center gap-3">
                  {item.badge && (
                    <span className="inline-block px-3 py-1 text-xs font-bold rounded-full" style={{ background: '#00E5FF', color: '#0A0F1F' }}>
                      {item.badge}
                    </span>
                  )}
                  {item.useCaseLabel && (
                    <>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,229,255,0.12)', color: '#00E5FF' }}>
                        {item.icon || (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        )}
                      </div>
                      <span className="text-xs sm:text-sm font-bold tracking-widest" style={{ color: '#00E5FF' }}>
                        {item.useCaseLabel}
                      </span>
                    </>
                  )}
                  {!item.useCaseLabel && item.icon && !item.badge && (
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-2" style={{ background: 'rgba(0,229,255,0.1)', color: '#00E5FF' }}>
                      {item.icon}
                    </div>
                  )}
                  {item.metricValue && (
                    <div className="mb-4">
                      <div className="text-4xl font-black text-white mb-1">{item.metricValue}</div>
                      <div className="text-sm font-medium tracking-wide" style={{ color: '#00E5FF' }}>{item.metricLabel}</div>
                    </div>
                  )}
                </div>

                {/* Title and Description */}
                {(!item.metricValue || item.title) && <h3 className={cn("font-bold text-white mb-4", small ? "text-xl" : "text-2xl")}>{item.title}</h3>}
                {item.description && (
                  <div className={cn("leading-relaxed mb-6", small ? "text-sm sm:text-base" : "text-base sm:text-lg")} style={{ color: '#8FA3BF' }}>
                    <PortableText value={item.description} />
                  </div>
                )}

                {/* Checkmark Bullets */}
                {item.bullets && item.bullets.length > 0 && (
                  <ul className="space-y-4 mb-8 flex-grow">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Checkmark />
                        <span style={{ color: '#C5D1E0' }}>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Use Case Details */}
                {(item.pocText || item.impactText) && (
                  <div className="space-y-4 mb-8 flex-grow">
                    {item.pocText && (
                      <div className="flex gap-3">
                        <svg className="w-5 h-5 shrink-0 fill-current" style={{ color: '#00E5FF' }} viewBox="0 0 24 24">
                          <path d="M11 21v-7H6l9-12v7h5l-9 12z" />
                        </svg>
                        <div>
                          <span className="block text-xs font-bold uppercase mb-0.5" style={{ color: '#8FA3BF' }}>POC Focus</span>
                          <div style={{ color: '#C5D1E0' }}>
                            <PortableText value={item.pocText} />
                          </div>
                        </div>
                      </div>
                    )}
                    {item.impactText && (
                      <div className="flex gap-3">
                        <svg className="w-5 h-5 shrink-0 fill-current" style={{ color: '#1DA1F2' }} viewBox="0 0 24 24">
                          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div>
                          <span className="block text-xs font-bold uppercase mb-0.5" style={{ color: '#8FA3BF' }}>Business Impact</span>
                          <div style={{ color: '#C5D1E0' }}>
                            <PortableText value={item.impactText} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Outcome Footer */}
                {item.outcomeTitle && (
                  <div className="mt-auto p-5 rounded-xl" style={{ background: 'rgba(0,229,255,0.07)', border: '1px solid rgba(0,229,255,0.2)' }}>
                    <div className="text-sm font-bold mb-1" style={{ color: '#00E5FF' }}>{item.outcomeTitle}</div>
                    <div className="text-sm leading-relaxed" style={{ color: '#8FA3BF' }}>
                      <PortableText value={item.outcomeDescription} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
