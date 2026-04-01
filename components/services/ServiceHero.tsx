import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { PortableText } from "@/components/ui/PortableText";

interface ServiceHeroProps {
  badgeText?: string;
  badgeIcon?: React.ReactNode;
  pills?: string[];
  title: string;
  gradientTitlePart?: string;
  description: string | any[];
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
    <section className="relative min-h-[70vh] pt-32 pb-28 flex flex-col items-center justify-center overflow-hidden text-center" style={{ background: 'linear-gradient(180deg, #0A0F1F 0%, #0D1B2A 100%)' }}>
      {/* Cyan grid pattern */}
      <div className="bg-grid opacity-60 z-0" />

      {/* Radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full blur-[120px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)' }} />
      <div className="absolute top-[30%] right-[10%] w-[35rem] h-[35rem] rounded-full blur-[100px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(29,161,242,0.08) 0%, transparent 70%)' }} />

      <div className="container-custom relative z-10 px-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* Back Link */}
        {backLink && (
          <Link href={backLink.href} className="inline-flex items-center text-sm font-medium text-[#8FA3BF] hover:text-[#00E5FF] transition-colors mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {backLink.label}
          </Link>
        )}

        {/* Badge or Pills */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {badgeText && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/08 backdrop-blur-sm" style={{ background: 'rgba(0,229,255,0.08)' }}>
              {badgeIcon || <SparkleIcon className="w-4 h-4 text-[#00E5FF]" />}
              <span className="text-sm font-semibold text-[#00E5FF] uppercase tracking-wide">{badgeText}</span>
            </div>
          )}
          {pills?.map((pill, i) => (
            <div key={i} className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium text-[#C5D1E0] border border-[#00E5FF]/15" style={{ background: 'rgba(20,36,58,0.6)' }}>
              {pill}
            </div>
          ))}
        </div>

        {/* Title */}
        <h1 className="type-hero text-white mb-6 mx-auto">
          {(() => {
            const rawTitle = title || "";
            const highlight = gradientTitlePart || "";

            if (highlight && rawTitle.toLowerCase().includes(highlight.toLowerCase())) {
              const parts = rawTitle.split(new RegExp(`(${highlight})`, "gi"));
              return (
                <>
                  {parts.map((part, i) =>
                    part.toLowerCase() === highlight.toLowerCase() ? (
                      <span key={i} className="gradient-text">{part}</span>
                    ) : part
                  )}
                </>
              );
            }

            if (highlight) {
              return (
                <>
                  {rawTitle}{" "}
                  <span className="gradient-text">{highlight}</span>
                </>
              );
            }

            if (rawTitle.includes(":")) {
              const [prefix, suffix] = rawTitle.split(":");
              return (
                <>
                  {prefix}: <span className="gradient-text">{suffix}</span>
                </>
              );
            }

            const words = rawTitle.split(" ");
            if (words.length > 3) {
              const mainText = words.slice(0, -2).join(" ");
              const highlightedText = words.slice(-2).join(" ");
              return (
                <>
                  {mainText} <span className="gradient-text">{highlightedText}</span>
                </>
              );
            }

            return rawTitle;
          })()}
        </h1>

        {/* Description */}
        <div className="type-lead mb-10 max-w-2xl mx-auto" style={{ color: '#C5D1E0' }}>
          <PortableText value={description} />
        </div>

        {/* Buttons */}
        {(primaryButtonText || secondaryButtonText) && (
          <div className="flex flex-col sm:flex-row gap-4 mt-10 md:mt-12 justify-center">
            {primaryButtonText && primaryButtonLink && (
              <Link href={primaryButtonLink} className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto px-8 h-12 text-[15px] rounded-full flex items-center justify-center gap-2 text-[#0A0F1F] font-bold group border-none hover:scale-105 transition-all" style={{ background: 'linear-gradient(135deg, #1DA1F2, #00E5FF)', boxShadow: '0 0 25px rgba(0,229,255,0.4)' }}>
                  {primaryButtonText}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </Link>
            )}
            {secondaryButtonText && secondaryButtonLink && (
              <Link href={secondaryButtonLink} className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 h-12 text-[15px] rounded-full font-bold text-[#C5D1E0] hover:text-[#00E5FF] transition-colors" style={{ borderColor: 'rgba(0,229,255,0.3)', background: 'rgba(20,36,58,0.6)' }}>
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
