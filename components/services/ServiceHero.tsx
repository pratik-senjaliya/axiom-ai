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
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
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
  primaryButtonLink,
  secondaryButtonLink,
  backLink
}) => {
  return (
    <section className="relative min-h-[70vh] pt-32 pb-28 flex flex-col items-center justify-center overflow-hidden bg-transparent text-center">
      {/* Grid Background Pattern */}
      <div className="bg-grid opacity-40"></div>
      
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-orange-100/40 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-[40%] right-[10%] w-[40rem] h-[40rem] bg-violet-100/30 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      <div className="container-custom relative z-10 px-4 max-w-4xl mx-auto flex flex-col items-center">
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
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
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
        <h1 className="type-hero text-[#26201D] mb-6 mx-auto">
          {title}{" "}
          {gradientTitlePart && (
            <span className="gradient-text">
              {gradientTitlePart}
            </span>
          )}
        </h1>
        
        {/* Description */}
        <p className="type-lead mb-10 max-w-2xl mx-auto">
          {description}
        </p>

        {/* Buttons */}
        {(primaryButtonText || secondaryButtonText) && (
          <div className="flex flex-col sm:flex-row gap-4 mt-10 md:mt-12 justify-center">
            {primaryButtonText && primaryButtonLink && (
              <Link href={primaryButtonLink} className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto px-8 h-12 text-[15px] rounded-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF821C] to-[#FFAA4C] text-white hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/20 border-none font-bold group">
                  {primaryButtonText}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </Link>
            )}
            {secondaryButtonText && secondaryButtonLink && (
              <Link href={secondaryButtonLink} className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 h-12 text-[15px] rounded-full border-neutral-200 text-[#26201D] hover:bg-neutral-50 font-bold">
                  {secondaryButtonText}
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
