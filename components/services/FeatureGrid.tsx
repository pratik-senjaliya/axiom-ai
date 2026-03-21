import React from "react";
import { cn } from "@/lib/utils";

export interface FeatureItem {
  /* Common */
  title: string;
  description?: string;
  badge?: string;
  icon?: React.ReactNode;
  
  /* Layer Cards (Checkmarks + Outcome Footer) */
  bullets?: string[];
  outcomeTitle?: string;
  outcomeDescription?: string;

  /* Industry Use Case Cards */
  useCaseLabel?: string;
  pocText?: string;
  impactText?: string;
  
  /* Roadmap Items (numbered circle on the left) */
  stepNumber?: number;

  /* Basic Stats Items */
  metricValue?: string;
  metricLabel?: string;
}

interface FeatureGridProps {
  title?: string;
  description?: string;
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  bgWhite?: boolean;
  isRoadmap?: boolean; // Renders items as a vertical roadmap
  small?: boolean; // Smaller cards and text
}

const Checkmark = () => (
  <svg className="w-5 h-5 text-[#FF821C] shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
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
  const containerClass = bgWhite ? "bg-[#FDFDFC]" : "bg-[#FAF8F5]";
  
  const gridClass = cn(
    "gap-8",
    !isRoadmap && "grid",
    !isRoadmap && {
      "md:grid-cols-2": columns === 2,
      "md:grid-cols-3": columns === 3,
      "md:grid-cols-4": columns === 4,
    },
    isRoadmap && "flex flex-col gap-12 max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-[31px] md:before:ml-[50%] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-orange-100 before:via-orange-500/20 before:to-transparent"
  );

  return (
    <section className={cn("py-24 relative overflow-hidden", containerClass)}>
      <div className="container-custom px-4 relative z-10">
        
        {(title || description) && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            {title && <h2 className={cn("tracking-tight font-bold text-[#26201D] mb-6", small ? "text-2xl md:text-3xl" : "text-3xl md:text-[2.5rem]")}>{title}</h2>}
            {description && <p className={cn("text-neutral-500 leading-relaxed", small ? "text-base" : "text-lg")}>{description}</p>}
          </div>
        )}

        <div className={gridClass}>
          {items.map((item, index) => {
            // ... roadmap rendering ...
            if (isRoadmap) {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-[#FAF8F5] bg-orange-100 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 text-orange-600 font-bold text-xl">
                    {item.stepNumber || index + 1}
                  </div>
                  <div className={cn("w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] bg-white rounded-[2rem] shadow-sm border border-neutral-100 hover:border-orange-200 transition-colors", small ? "p-6" : "p-8")}>
                    {item.badge && <span className="inline-block px-3 py-1 bg-orange-50 text-[#FF821C] text-xs font-bold uppercase tracking-wider rounded-full mb-4">{item.badge}</span>}
                    <h3 className={cn("font-bold text-[#26201D] mb-4", small ? "text-xl" : "text-2xl")}>{item.title}</h3>
                    {item.description && <p className="text-neutral-500 leading-relaxed text-sm">{item.description}</p>}
                  </div>
                </div>
              );
            }

            // Standard / Layer / Use Case Card Rendering
            return (
              <div key={index} className={cn("bg-white border border-neutral-100 rounded-[2rem] shadow-sm flex flex-col h-full hover:border-neutral-200 hover:shadow-md transition-all duration-300", small ? "p-6 md:p-8" : "p-8 sm:p-10")}>
                {/* Header (Badge or Icon) */}
                <div className="mb-6 flex items-center gap-3">
                  {item.badge && (
                    <span className="inline-block px-3 py-1 bg-[#FF821C] text-white text-xs font-bold rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {item.useCaseLabel && (
                    <>
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-[#FF821C]">
                        {item.icon || (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        )}
                      </div>
                      <span className="text-xs sm:text-sm font-bold tracking-widest text-[#FF821C]">
                        {item.useCaseLabel}
                      </span>
                    </>
                  )}
                  {!item.useCaseLabel && item.icon && !item.badge && (
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-[#FF821C] mb-2">
                      {item.icon}
                    </div>
                  )}
                  {item.metricValue && (
                     <div className="mb-4">
                       <div className="text-4xl font-black text-[#26201D] mb-1">{item.metricValue}</div>
                       <div className="text-sm font-medium text-[#FF821C] tracking-wide">{item.metricLabel}</div>
                     </div>
                  )}
                </div>

                {/* Title and Description */}
                {(!item.metricValue || item.title) && <h3 className={cn("font-bold text-[#26201D] mb-4", small ? "text-xl" : "text-2xl")}>{item.title}</h3>}
                {item.description && <p className={cn("text-neutral-500 leading-relaxed mb-6", small ? "text-sm sm:text-base" : "text-base sm:text-lg")}>{item.description}</p>}

                {/* Checkmark Bullets */}
                {item.bullets && item.bullets.length > 0 && (
                  <ul className="space-y-4 mb-8 flex-grow">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Checkmark />
                        <span className="text-neutral-600">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Use Case Details */}
                {(item.pocText || item.impactText) && (
                  <div className="space-y-4 mb-8 flex-grow">
                    {item.pocText && (
                      <div className="flex gap-3">
                        <svg className="w-5 h-5 text-[#FF821C] shrink-0 fill-current" viewBox="0 0 24 24">
                          <path d="M11 21v-7H6l9-12v7h5l-9 12z" />
                        </svg>
                        <div>
                          <span className="block text-xs font-bold text-neutral-400 uppercase mb-0.5">POC Focus</span>
                          <span className="text-neutral-600">{item.pocText}</span>
                        </div>
                      </div>
                    )}
                    {item.impactText && (
                      <div className="flex gap-3">
                        <svg className="w-5 h-5 text-[#3B82F6] shrink-0 fill-current" viewBox="0 0 24 24">
                          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div>
                          <span className="block text-xs font-bold text-neutral-400 uppercase mb-0.5">Business Impact</span>
                          <span className="text-neutral-600">{item.impactText}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Outcome Footer */}
                {item.outcomeTitle && (
                  <div className="mt-auto bg-[#FDF9F2] p-5 rounded-xl border border-orange-100/50">
                    <div className="text-sm font-bold text-[#FF821C] mb-1">{item.outcomeTitle}</div>
                    <div className="text-neutral-600 text-sm leading-relaxed">{item.outcomeDescription}</div>
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
