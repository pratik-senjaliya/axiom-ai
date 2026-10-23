import React from "react";
import { ServiceHero } from "@/components/services/ServiceHero";
import type { BreadcrumbItem } from "@/components/ui/Breadcrumb";

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

/** Industry hero — same layout as service pages, plus an optional metrics row */
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
    <>
      <ServiceHero
        badgeText={industryLabel}
        title={title}
        gradientTitlePart={titleHighlight}
        description={description || ""}
        primaryButtonText={primaryButtonText}
        primaryButtonLink={primaryButtonLink}
        secondaryButtonText={secondaryButtonText}
        secondaryButtonLink={secondaryButtonLink}
        breadcrumbs={breadcrumbs}
      />
      {metrics.length > 0 && (
        <div className="border-b border-line bg-ink-900">
          <dl className="container-custom grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-sm text-muted">{metric.label}</dt>
                <dd className="font-display text-2xl font-semibold text-fg">{metric.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </>
  );
}
