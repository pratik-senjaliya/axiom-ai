"use client";

import React, { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { PortableText } from "@/components/ui/PortableText";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

function renderAnswer(answer: React.ReactNode) {
  // Sanity simpleBlockContent arrives as an array/object — never render it raw
  if (Array.isArray(answer) || (answer && typeof answer === "object" && !React.isValidElement(answer))) {
    return <PortableText value={answer} />;
  }
  return answer;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  showMoreLink?: boolean;
  moreLinkHref?: string;
  moreLinkText?: string;
}

/** Accordion list. Answers stay in the DOM (collapsed with CSS) so they are crawlable. */
export function FAQList({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="border-t border-line">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div key={index} className="border-b border-line">
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : index)}
                aria-expanded={open}
                aria-controls={panelId}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span className={cn("font-display text-base font-medium leading-snug transition-colors sm:text-lg", open ? "text-fg" : "text-body group-hover:text-fg")}>
                  {item.question}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "relative mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors",
                    open ? "border-line-accent text-accent" : "border-line text-muted group-hover:text-fg"
                  )}
                >
                  <span className="absolute h-px w-3 bg-current" />
                  <span className={cn("absolute h-3 w-px bg-current transition-transform duration-300", open && "scale-y-0")} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              className={cn("grid transition-[grid-template-rows] duration-300 ease-out", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
            >
              <div className="overflow-hidden">
                <div className="copy max-w-3xl pb-7 pr-12">{renderAnswer(item.answer)}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const FAQ: React.FC<FAQProps> = ({
  items,
  title = "Frequently Asked Questions",
  showMoreLink = false,
  moreLinkHref = "/faq",
  moreLinkText = "More FAQs →",
}) => {
  return (
    <div className="w-full">
      {(title || showMoreLink) && (
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          {title && <h2 className="h-section">{title}</h2>}
          {showMoreLink && (
            <a href={moreLinkHref} className="font-medium text-body transition-colors hover:text-accent">
              {moreLinkText}
            </a>
          )}
        </div>
      )}
      <FAQList items={items} />
    </div>
  );
};

/** Full-width FAQ section: heading on the left, accordion on the right. */
export function FAQSection({
  items,
  title = "Frequently Asked Questions",
  eyebrow = "FAQ",
  description,
}: {
  items: FAQItem[];
  title?: string;
  eyebrow?: string;
  description?: React.ReactNode;
}) {
  if (!items?.length) return null;
  return (
    <section className="relative overflow-x-clip bg-ink-900 section-y">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-line" />
      <div className="container-custom">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-5">{eyebrow}</p>
              <h2 className="h-section">{title}</h2>
              {description && <div className="copy mt-5">{description}</div>}
            </div>
          </div>
          <div className="lg:col-span-8">
            <FAQList items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}
