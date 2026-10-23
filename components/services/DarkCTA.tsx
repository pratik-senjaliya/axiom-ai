import React from "react";
import { ButtonLink, Eyebrow, RichText } from "@/components/ui/kit";
import { SectionHeading, type HeadingTag } from "@/components/ui/SectionHeading";

interface DarkCTAProps {
  badgeText?: string;
  title: string;
  description?: string | any[];
  buttonText?: string;
  buttonHref?: string;
  useWhiteButton?: boolean;
  titleAs?: HeadingTag;
  /** Extra buttons (e.g. CMS "ctaOptions"); rendered after the main button */
  secondaryActions?: { text: string; link?: string }[];
  /** Closing line under the panel copy */
  footnote?: string;
}

/** Closing call to action: contained panel with gradient hairline and a soft glow. */
export function DarkCTA({
  badgeText,
  title,
  description,
  buttonText,
  buttonHref,
  useWhiteButton = false,
  titleAs = "h5",
  secondaryActions = [],
  footnote,
}: DarkCTAProps) {
  if (!title && !buttonText) return null;
  const hasActions = Boolean(buttonText) || secondaryActions.length > 0;

  return (
    <section className="relative overflow-x-clip bg-ink-900 section-y-sm">
      <div className="container-custom">
        <div className="panel-accent reveal relative overflow-hidden px-6 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full opacity-60 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(0,229,255,0.22), transparent 70%)" }}
          />
          <div aria-hidden className="bg-grid-fade opacity-60" />

          <div className="relative grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              {badgeText && <Eyebrow className="mb-5">{badgeText}</Eyebrow>}
              <SectionHeading as={titleAs} className="h-section max-w-3xl">
                {title}
              </SectionHeading>
              <RichText value={description} className="lead mt-5 max-w-2xl" />
              {footnote && <p className="mt-6 font-display text-lg font-medium text-fg">{footnote}</p>}
            </div>

            {hasActions && (
              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-end">
                {buttonText && (
                  <ButtonLink href={buttonHref || "/contact"} size="lg" variant={useWhiteButton ? "white" : "primary"} arrow className="w-full sm:w-auto">
                    {buttonText}
                  </ButtonLink>
                )}
                {secondaryActions.map((action, i) => (
                  <ButtonLink key={i} href={action.link || "/contact"} size="lg" variant="secondary" className="w-full sm:w-auto">
                    {action.text}
                  </ButtonLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
