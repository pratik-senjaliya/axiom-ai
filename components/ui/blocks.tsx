import React from "react";
import { cn } from "@/lib/utils";
import { RichText, indexLabel } from "@/components/ui/kit";

/* ------------------------------------------------------------------ */
/* Cell grid — items share hairline borders, so a set of features      */
/* reads as one composed panel instead of separate floating cards.     */
/* ------------------------------------------------------------------ */

const LG_COLS: Record<number, string> = { 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4" };
const LG_SPAN: Record<number, string> = { 1: "lg:col-span-1", 2: "lg:col-span-2", 3: "lg:col-span-3", 4: "lg:col-span-4" };

/** Span for the last cell so rows never end with an empty gap. */
function lastCellSpan(count: number, cols: number) {
  const classes: string[] = [];
  const mdOdd = count % 2 === 1;
  if (mdOdd) classes.push("md:col-span-2");
  const rem = count % cols;
  if (cols > 2) {
    if (rem !== 0) classes.push(LG_SPAN[cols - rem + 1]);
    else if (mdOdd) classes.push("lg:col-span-1");
  }
  return classes.join(" ");
}

export function CellGrid({
  children,
  cols = 3,
  className,
}: {
  children: React.ReactNode;
  cols?: 2 | 3 | 4;
  className?: string;
}) {
  const items = React.Children.toArray(children).filter(Boolean);
  const span = lastCellSpan(items.length, cols);
  return (
    <div className={cn("cell-grid reveal grid-cols-1 md:grid-cols-2", LG_COLS[cols], className)}>
      {items.map((child, i) => (
        <div key={i} className={cn("min-w-0", i === items.length - 1 && span)}>
          {child}
        </div>
      ))}
    </div>
  );
}

/** One feature inside a CellGrid (or on its own). */
export function FeatureCell({
  index,
  icon,
  badge,
  title,
  description,
  footerLabel,
  footer,
  children,
  className,
  titleAs: TitleTag = "h3",
}: {
  index?: number;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  title?: React.ReactNode;
  description?: any;
  footerLabel?: React.ReactNode;
  footer?: any;
  children?: React.ReactNode;
  className?: string;
  titleAs?: "h3" | "h4" | "p";
}) {
  const hasFooter = footer && !(Array.isArray(footer) && footer.length === 0);
  return (
    <div className={cn("group flex h-full flex-col p-7 transition-colors duration-300 hover:bg-[#0E182B] sm:p-8 lg:p-9", className)}>
      {(icon || index !== undefined || badge) && (
        <div className="mb-8 flex items-center justify-between gap-4">
          {icon ? (
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-accent [&_svg]:h-5 [&_svg]:w-5 [&_svg]:text-accent">
              {icon}
            </div>
          ) : (
            badge || <span />
          )}
          {index !== undefined && <span className="font-display text-sm font-medium tabular-nums text-muted">{indexLabel(index)}</span>}
        </div>
      )}
      {title && <TitleTag className="h-card">{title}</TitleTag>}
      <RichText value={description} className="copy mt-3" />
      {children}
      {hasFooter && (
        <div className="mt-auto pt-8">
          <div className="border-t border-line pt-5">
            {footerLabel && <p className="mb-1.5 text-xs font-medium uppercase tracking-[0.14em] text-accent">{footerLabel}</p>}
            <RichText value={footer} className="text-[0.9375rem] font-medium leading-relaxed text-fg" />
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Numbered rows — editorial list for problems / challenges            */
/* ------------------------------------------------------------------ */

export function NumberedRows({
  items,
  className,
}: {
  items: { title: string; description?: any }[];
  className?: string;
}) {
  return (
    <ol className={cn("border-t border-line", className)}>
      {items.map((item, i) => (
        <li key={`${item.title}-${i}`} className="reveal group grid grid-cols-[2.75rem_1fr] gap-4 border-b border-line py-7 sm:grid-cols-[4rem_1fr] sm:gap-6 sm:py-8">
          <span className="pt-0.5 font-display text-sm font-medium tabular-nums text-accent">{indexLabel(i)}</span>
          <div className="min-w-0">
            <h3 className="h-card transition-colors group-hover:text-white">{item.title}</h3>
            <RichText value={item.description} className="copy mt-2.5 max-w-2xl" />
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ */
/* Timeline — process / roadmap steps                                  */
/* Horizontal on large screens (up to 5 steps), vertical otherwise.    */
/* ------------------------------------------------------------------ */

const TIMELINE_COLS: Record<number, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
};

export function Timeline({
  items,
  className,
}: {
  items: { title: string; description?: any; label?: string }[];
  className?: string;
}) {
  const horizontal = items.length >= 2 && items.length <= 5;
  return (
    <ol
      className={cn(
        "relative grid gap-0",
        horizontal ? cn("lg:gap-8", TIMELINE_COLS[items.length]) : "max-w-3xl",
        className
      )}
    >
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <li key={`${item.title}-${i}`} className={cn("reveal relative pl-14 sm:pl-16", !last && "pb-10", horizontal && "lg:pb-0 lg:pl-0")}>
            {/* connector */}
            {!last && (
              <span
                aria-hidden
                className={cn(
                  "absolute left-[1.1875rem] top-11 bottom-0 w-px bg-gradient-to-b from-accent/50 to-line",
                  horizontal && "lg:left-12 lg:right-[-2rem] lg:top-[1.1875rem] lg:bottom-auto lg:h-px lg:w-auto lg:bg-gradient-to-r"
                )}
              />
            )}
            <span
              className={cn(
                "absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-line-accent bg-ink-900 font-display text-sm font-semibold text-accent",
                horizontal && "lg:static lg:mb-6"
              )}
            >
              {item.label || indexLabel(i)}
            </span>
            <h3 className={cn("h-card pt-1.5", horizontal && "lg:pt-0")}>{item.title}</h3>
            <RichText value={item.description} className="copy mt-2.5" />
          </li>
        );
      })}
    </ol>
  );
}

/* ------------------------------------------------------------------ */
/* Layer rows — a stack of layers (e.g. the enterprise AI stack)       */
/* ------------------------------------------------------------------ */

export function LayerRows({
  items,
  outcomeLabel = "Business value",
  className,
}: {
  items: { title: string; description?: any; outcome?: string }[];
  outcomeLabel?: string;
  className?: string;
}) {
  return (
    <ol className={cn("reveal overflow-hidden rounded-2xl border border-line", className)}>
      {items.map((item, i) => (
        <li
          key={`${item.title}-${i}`}
          className="group relative grid gap-4 border-b border-line bg-[#0B1222] p-7 transition-colors last:border-b-0 hover:bg-[#0E182B] sm:p-8 lg:grid-cols-12 lg:gap-10 lg:p-10"
        >
          <span aria-hidden className="absolute inset-y-0 left-0 w-px bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="lg:col-span-4">
            <p className="mb-3 font-display text-sm font-medium tabular-nums text-accent">Layer {indexLabel(i)}</p>
            <h3 className="h-card">{item.title}</h3>
          </div>
          <RichText value={item.description} className="copy lg:col-span-5" />
          {item.outcome && (
            <div className="lg:col-span-3">
              <p className="mb-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted">{outcomeLabel}</p>
              <p className="text-[0.9375rem] font-medium leading-relaxed text-fg">{item.outcome}</p>
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
