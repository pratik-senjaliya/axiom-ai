import React from "react";
import { cn } from "@/lib/utils";
import { RichText, Section, SectionHeader, ButtonLink } from "@/components/ui/kit";
import { CellGrid, FeatureCell, Timeline } from "@/components/ui/blocks";
import { type HeadingTag } from "@/components/ui/SectionHeading";

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
  ctaText?: string;
  ctaHref?: string;
  /** Semantic tag for the section title (visual style unchanged). */
  titleAs?: HeadingTag;
  eyebrow?: string;
}

const Checkmark = () => (
  <svg className="mt-1 h-4 w-4 shrink-0 text-accent" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Pick a column count that keeps rows balanced for the number of items. */
function columnsFor(count: number, requested: 2 | 3 | 4): 2 | 3 | 4 {
  if (count <= 2) return 2;
  if (count === 3) return 3;
  if (count === 4) return requested === 4 ? 4 : 2;
  return 3;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  title,
  description,
  items,
  columns = 2,
  bgWhite = false,
  isRoadmap = false,
  ctaText,
  ctaHref = "/contact",
  titleAs = "h2",
  eyebrow,
}) => {
  if (!items?.length && !title) return null;

  return (
    <Section tone={bgWhite ? "raised" : "base"}>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        as={titleAs}
        layout={description ? "split" : "stack"}
        className="mb-14 lg:mb-16"
      />

      {isRoadmap ? (
        <Timeline items={items.map((item) => ({ title: item.title, description: item.description, label: item.badge }))} />
      ) : (
        <CellGrid cols={columnsFor(items.length, columns)}>
          {items.map((item, index) => {
            const showIndex = !item.icon && !item.useCaseLabel && !item.metricValue;
            return (
              <FeatureCell
                key={index}
                index={showIndex ? index : undefined}
                icon={item.icon}
                badge={item.badge ? <span className="chip border-line-accent text-accent">{item.badge}</span> : undefined}
                title={!item.metricValue || item.title ? item.title : undefined}
                description={item.description}
                footerLabel={item.outcomeTitle}
                footer={item.outcomeDescription}
                titleAs="h3"
              >
                {item.useCaseLabel && (
                  <p className="-order-1 mb-4 text-xs font-medium uppercase tracking-[0.14em] text-accent">{item.useCaseLabel}</p>
                )}

                {item.metricValue && (
                  <div className="mt-4">
                    <div className="font-display text-4xl font-semibold tracking-tight text-fg">{item.metricValue}</div>
                    {item.metricLabel && <div className="mt-1 text-sm text-accent">{item.metricLabel}</div>}
                  </div>
                )}

                {item.bullets && item.bullets.length > 0 && (
                  <ul className="mt-6 space-y-3">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-[0.9375rem] text-body">
                        <Checkmark />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {(item.pocText || item.impactText) && (
                  <dl className="mt-6 space-y-4">
                    {item.pocText && (
                      <div>
                        <dt className="mb-1 text-xs font-medium uppercase tracking-[0.14em] text-muted">POC focus</dt>
                        <dd><RichText value={item.pocText} className="text-[0.9375rem] text-body" /></dd>
                      </div>
                    )}
                    {item.impactText && (
                      <div>
                        <dt className="mb-1 text-xs font-medium uppercase tracking-[0.14em] text-muted">Business impact</dt>
                        <dd><RichText value={item.impactText} className="text-[0.9375rem] text-body" /></dd>
                      </div>
                    )}
                  </dl>
                )}
              </FeatureCell>
            );
          })}
        </CellGrid>
      )}

      {ctaText && (
        <div className={cn("mt-12 flex", isRoadmap ? "justify-start" : "justify-center")}>
          <ButtonLink href={ctaHref} arrow>
            {ctaText}
          </ButtonLink>
        </div>
      )}
    </Section>
  );
};
