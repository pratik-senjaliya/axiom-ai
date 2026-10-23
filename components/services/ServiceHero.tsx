import React from "react";
import { PortableText } from "@/components/ui/PortableText";
import { Breadcrumb, type BreadcrumbItem } from "@/components/ui/Breadcrumb";
import { ButtonLink, Eyebrow } from "@/components/ui/kit";
import { StackDiagram, type StackLayer } from "@/components/ui/StackDiagram";

interface ServiceHeroProps {
  badgeText?: string;
  badgeIcon?: React.ReactNode;
  pills?: string[];
  title: string;
  gradientTitlePart?: string;
  description: string | any[];
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backLink?: { href: string; label: string };
  breadcrumbs?: BreadcrumbItem[];
  /** Layer of the AI / Data / ERP stack to highlight in the hero visual */
  layer?: StackLayer;
  /** Replace the default stack diagram */
  visual?: React.ReactNode;
}

export const SparkleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
  </svg>
);

/** Highlight logic kept from the original hero so CMS titles render the same words in accent. */
function HeroTitle({ title, highlight }: { title: string; highlight?: string }) {
  // Display-layer hotfix for persistent typo in dataset
  const rawTitle = (title || "").replace(/Intelligient/g, "Intelligent");

  if (highlight && rawTitle.toLowerCase().includes(highlight.toLowerCase())) {
    const escaped = highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const parts = rawTitle.split(new RegExp(`(${escaped})`, "gi"));
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
        {rawTitle} <span className="gradient-text">{highlight}</span>
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
    return (
      <>
        {words.slice(0, -2).join(" ")} <span className="gradient-text">{words.slice(-2).join(" ")}</span>
      </>
    );
  }

  return <>{rawTitle}</>;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({
  badgeText,
  pills,
  title,
  gradientTitlePart,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  breadcrumbs,
  layer,
  visual,
}) => {
  return (
    <section className="relative overflow-hidden bg-ink-900 pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36">
      <div aria-hidden className="bg-grid-fade" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-line" />

      <div className="container-custom relative">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumb items={breadcrumbs} className="mb-10 lg:mb-12" />
        )}

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            {badgeText && <Eyebrow className="mb-6">{badgeText}</Eyebrow>}

            <h1 className="h-display">
              <HeroTitle title={title} highlight={gradientTitlePart} />
            </h1>

            {description && (
              <div className="lead mt-6 max-w-2xl">
                <PortableText value={description} />
              </div>
            )}

            {(primaryButtonText || secondaryButtonText) && (
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                {primaryButtonText && (
                  <ButtonLink href={primaryButtonLink || "/contact"} size="lg" arrow>
                    {primaryButtonText}
                  </ButtonLink>
                )}
                {secondaryButtonText && (
                  <ButtonLink href={secondaryButtonLink || "#"} variant="secondary" size="lg">
                    {secondaryButtonText}
                  </ButtonLink>
                )}
              </div>
            )}

            {pills && pills.length > 0 && (
              <ul className="mt-10 flex flex-wrap gap-2" aria-label="Focus areas">
                {pills.map((pill) => (
                  <li key={pill} className="chip">{pill}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="hidden justify-center lg:col-span-5 lg:flex lg:justify-end">
            {visual ?? <StackDiagram highlight={layer} />}
          </div>
        </div>
      </div>
    </section>
  );
};
