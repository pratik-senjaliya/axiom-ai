import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PortableText } from "@/components/ui/PortableText";
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

export function IndustryHero({
  industryLabel = "Industries · Finance",
  title,
  titleHighlight,
  description,
  primaryButtonText,
  primaryButtonLink = "/contact",
  secondaryButtonText,
  secondaryButtonLink = "#solutions",
  breadcrumbs,
  metrics = [],
}: IndustryHeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, rgba(0,229,255,0.18) 0%, transparent 55%), linear-gradient(135deg, #07101f 0%, #0D1B2A 45%, #14243A 100%)",
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div
        className="absolute -right-20 top-10 w-[28rem] h-[28rem] rounded-full blur-[100px] pointer-events-none opacity-40"
        style={{ background: "rgba(29,161,242,0.35)" }}
      />

      <div className="container-custom px-4 relative z-10 max-w-7xl mx-auto pb-6 md:pb-8">
        {breadcrumbs && <Breadcrumb items={breadcrumbs} className="mb-5" />}

        <p
          className="text-[11px] font-bold uppercase tracking-[0.28em] mb-3"
          style={{ color: "#00E5FF" }}
        >
          {industryLabel}
        </p>

        <h1 className="max-w-4xl text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.15rem] font-extrabold text-white leading-[1.1] tracking-tight mb-4">
          {title}
          {titleHighlight ? (
            <>
              {" "}
              <span className="gradient-text">{titleHighlight}</span>
            </>
          ) : null}
        </h1>

        {description && (
          <div
            className="max-w-2xl text-sm md:text-base leading-relaxed mb-6"
            style={{ color: "#C5D1E0" }}
          >
            <PortableText value={description} className="text-inherit" />
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          {primaryButtonText && (
            <Link href={primaryButtonLink} className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto px-7 h-11 text-[14px] rounded-full font-bold border-none hover:scale-105 transition-all"
                style={{
                  background: "linear-gradient(135deg, #1DA1F2, #00E5FF)",
                  color: "#0A0F1F",
                  boxShadow: "0 0 24px rgba(0,229,255,0.35)",
                }}
              >
                {primaryButtonText}
              </Button>
            </Link>
          )}
          {secondaryButtonText && (
            <Link href={secondaryButtonLink} className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-7 h-11 text-[14px] rounded-full font-bold"
                style={{
                  borderColor: "rgba(0,229,255,0.4)",
                  color: "#C5D1E0",
                  background: "rgba(20,36,58,0.45)",
                }}
              >
                {secondaryButtonText}
              </Button>
            </Link>
          )}
        </div>

        {metrics.length > 0 && (
          <div
            className="grid sm:grid-cols-3 gap-3 md:gap-4 rounded-2xl border p-4 md:p-5"
            style={{
              background: "rgba(10,15,31,0.55)",
              borderColor: "rgba(0,229,255,0.2)",
              backdropFilter: "blur(12px)",
            }}
          >
            {metrics.map((metric) => (
              <div key={metric.label} className="flex items-start gap-2.5">
                <div
                  className="mt-0.5 h-8 w-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(0,229,255,0.12)", color: "#00E5FF" }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-base font-extrabold text-white leading-tight">{metric.value}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#8FA3BF" }}>
                    {metric.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
