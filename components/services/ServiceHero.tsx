import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ServiceHeroProps {
  badgeText?: string;
  badgeIcon?: React.ReactNode;
  pills?: string[];
  title: string;
  gradientTitlePart?: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  align?: "center" | "left";
  backLink?: { href: string; label: string };
}

export const SparkleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
  </svg>
);

export const ServiceHero: React.FC<ServiceHeroProps> = ({
  badgeText,
  badgeIcon,
  pills,
  title,
  gradientTitlePart,
  description,
  primaryButtonText,
  secondaryButtonText,
  align = "center",
  backLink
}) => {
  const isLeft = align === "left";

  return (
    <section className={cn(
      "relative pt-32 pb-24 overflow-hidden bg-[#FAF8F5]",
      isLeft ? "text-left" : "text-center"
    )}>
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      {/* Radial Glow */}
      <div className={cn(
        "absolute w-[40rem] h-[40rem] bg-gradient-to-tr from-orange-400/10 to-purple-400/10 rounded-full blur-[80px] pointer-events-none",
        isLeft ? "top-0 -left-20" : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      )}></div>
      
      <div className={cn(
        "container-custom relative z-10 px-4",
        isLeft ? "max-w-6xl mx-auto" : "max-w-4xl mx-auto"
      )}>
        {/* Back Link */}
        {backLink && (
          <Link href={backLink.href} className="inline-flex items-center text-sm font-medium text-neutral-400 hover:text-[#FF821C] transition-colors mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {backLink.label}
          </Link>
        )}

        {/* Badge or Pills */}
        <div className={cn(
          "flex flex-wrap gap-3 mb-8",
          isLeft ? "justify-start" : "justify-center"
        )}>
          {badgeText && (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 rounded-full shadow-sm">
              {badgeIcon || <SparkleIcon className="w-4 h-4 text-[#FF821C]" />}
              <span className="text-sm font-semibold text-[#FF821C] uppercase tracking-wide">{badgeText}</span>
            </div>
          )}
          {pills?.map((pill, i) => (
            <div key={i} className="inline-flex items-center px-4 py-1 bg-white border border-neutral-100 rounded-full shadow-sm text-sm font-medium text-neutral-600">
              {pill}
            </div>
          ))}
        </div>
        
        {/* Title */}
        <h1 className={cn(
          "text-5xl md:text-6xl lg:text-[4.5rem] font-black text-[#26201D] tracking-tight leading-[1.05] mb-6",
          isLeft ? "max-w-3xl" : "mx-auto"
        )}>
          {title}{" "}
          {gradientTitlePart && (
            <span className={cn(
              "bg-clip-text text-transparent bg-gradient-to-r",
              title === "Turn AI Into" 
                ? "from-[#F97316] via-[#F97316] to-[#9333EA]" 
                : "from-[#FF821C] to-[#9333EA]"
            )}>
              {gradientTitlePart}
            </span>
          )}
        </h1>
        
        {/* Description */}
        <p className={cn(
          "text-xl text-neutral-500 leading-relaxed mb-10",
          isLeft ? "max-w-2xl" : "max-w-2xl mx-auto"
        )}>
          {description}
        </p>

        {/* Buttons */}
        <div className={cn(
          "flex flex-col sm:flex-row items-center gap-4",
          isLeft ? "justify-start" : "justify-center"
        )}>
          {primaryButtonText && (
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#FF821C] to-[#FF2E93] text-white border-none rounded-full h-14 px-8 text-[15px] font-bold shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition-transform">
                {primaryButtonText}
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </Link>
          )}
          {secondaryButtonText && (
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/80 backdrop-blur-sm border-neutral-200 text-neutral-800 rounded-full hover:bg-white h-14 px-8 text-[15px] font-bold">
                {secondaryButtonText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
