import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PortableText } from "@/components/ui/PortableText";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { Breadcrumb, type BreadcrumbItem } from "@/components/ui/Breadcrumb";

interface Metric {
  value: string;
  label: string;
}

interface IndustryHeroProps {
  industryLabel?: string;
  title: string;
  titleHighlight?: string;
  description?: string | any[];
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  breadcrumbs?: BreadcrumbItem[];
  metrics?: Metric[];
}

/** Industry hero — matches service page centered layout + metrics bar */
export function IndustryHero({
  industryLabel = "Industries · Finance",
  title,
  titleHighlight,
  description,
  primaryButtonText,
  primaryButtonLink = "/contact",
  secondaryButtonText,
  secondaryButtonLink = "#services",
  breadcrumbs,
  metrics = [],
}: IndustryHeroProps) {
  return (
    <section
      className="relative min-h-[auto] sm:min-h-[70vh] pt-28 sm:pt-32 pb-14 sm:pb-20 md:pb-24 flex flex-col items-center justify-center overflow-x-clip overflow-hidden text-center"
      style={{ background: "linear-gradient(180deg, #0A0F1F 0%, #0D1B2A 100%)" }}
    >
      <div className="bg-grid opacity-60 z-0" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full blur-[120px] pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-[30%] right-[10%] w-[35rem] h-[35rem] rounded-full blur-[100px] pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(29,161,242,0.08) 0%, transparent 70%)" }}
      />

      <SlideUp className="container-custom relative z-10 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col items-center w-full">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumb items={breadcrumbs} className="mb-4 sm:mb-6 justify-center" />
        )}

        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide mb-4 sm:mb-6" style={{ color: "#00E5FF" }}>
          {industryLabel}
        </p>

        <h1 className="type-hero text-white mb-4 sm:mb-6 mx-auto px-1">
          {title}
          {titleHighlight ? (
            <>
              {" "}
              <span className="gradient-text">{titleHighlight}</span>
            </>
          ) : null}
        </h1>

        {description && (
          <div className="type-lead mb-8 sm:mb-10 max-w-4xl mx-auto px-1" style={{ color: "#C5D1E0" }}>
            <PortableText value={description} className="text-inherit" />
          </div>
        )}

        {(primaryButtonText || secondaryButtonText) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            {primaryButtonText && (
              <Link href={primaryButtonLink} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto px-8 h-12 text-[15px] rounded-full flex items-center justify-center gap-2 text-[#0A0F1F] font-bold group border-none hover:scale-105 transition-all"
                  style={{
                    background: "linear-gradient(135deg, #1DA1F2, #00E5FF)",
                    boxShadow: "0 0 25px rgba(0,229,255,0.4)",
                  }}
                >
                  {primaryButtonText}
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Button>
              </Link>
            )}
            {secondaryButtonText && (
              <Link href={secondaryButtonLink} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto px-8 h-12 text-[15px] rounded-full font-bold transition-all hover:scale-105"
                  style={{
                    borderColor: "rgba(0,229,255,0.35)",
                    color: "#C5D1E0",
                    background: "rgba(20,36,58,0.6)",
                  }}
                >
                  {secondaryButtonText}
                </Button>
              </Link>
            )}
          </div>
        )}

        {metrics.length > 0 && (
          <div
            className="w-full grid sm:grid-cols-2 gap-3 md:gap-4 rounded-2xl border p-4 md:p-5 text-left"
            style={{
              background: "rgba(10,15,31,0.55)",
              borderColor: "rgba(0,229,255,0.2)",
              backdropFilter: "blur(12px)",
            }}
          >
            {metrics.map((metric) => (
              <div key={metric.label} className="flex items-start gap-3">
                <div
                  className="mt-0.5 h-9 w-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(0,229,255,0.12)", color: "#00E5FF" }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-extrabold text-white leading-tight">{metric.value}</p>
                  <p className="text-sm mt-0.5" style={{ color: "#8FA3BF" }}>
                    {metric.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </SlideUp>
    </section>
  );
}
