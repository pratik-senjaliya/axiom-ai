import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PortableText } from "@/components/ui/PortableText";
import type { HeadingTag } from "@/components/ui/SectionHeading";

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */

type ButtonVariant = "primary" | "secondary" | "white" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const buttonSizes: Record<ButtonSize, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-11 px-6 text-[0.9375rem]",
  lg: "h-12 px-7 text-[0.9375rem] sm:h-[3.25rem] sm:px-8",
};

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  className?: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">) {
  return (
    <Link
      href={href}
      className={cn("btn group/btn", `btn-${variant}`, buttonSizes[size], className)}
      {...props}
    >
      {children}
      {arrow && <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />}
    </Link>
  );
}

/** Text link with arrow, for secondary actions inside sections. */
export function TextLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "group/link -my-2.5 inline-flex items-center gap-2 py-2.5 text-[0.9375rem] font-semibold text-accent hover:text-accent-soft",
        className
      )}
    >
      {children}
      <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5" />
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Layout                                                              */
/* ------------------------------------------------------------------ */

type SectionTone = "base" | "raised" | "deep";

const sectionTones: Record<SectionTone, string> = {
  base: "bg-ink-900",
  raised: "bg-ink-850",
  deep: "bg-ink-950",
};

export function Section({
  children,
  tone = "base",
  size = "md",
  divider = false,
  className,
  containerClassName,
  id,
}: {
  children: React.ReactNode;
  tone?: SectionTone;
  size?: "sm" | "md";
  /** Hairline across the top edge */
  divider?: boolean;
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-x-clip",
        sectionTones[tone],
        size === "sm" ? "section-y-sm" : "section-y",
        id && "scroll-mt-24",
        className
      )}
    >
      {divider && <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-line" />}
      <div className={cn("container-custom relative", containerClassName)}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("eyebrow", className)}>{children}</p>;
}

/** Renders CMS rich text or a plain string with consistent body styling. */
export function RichText({ value, className }: { value: any; className?: string }) {
  if (!value || (Array.isArray(value) && value.length === 0)) return null;
  return (
    <div className={className}>
      {typeof value === "string" ? <p>{value}</p> : <PortableText value={value} />}
    </div>
  );
}

/**
 * Section heading block.
 * - `stack`: eyebrow, title, description stacked (left or centered)
 * - `split`: title left, description + actions right on large screens
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  as = "h2",
  align = "left",
  layout = "stack",
  actions,
  className,
}: {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  description?: any;
  as?: HeadingTag;
  align?: "left" | "center";
  layout?: "stack" | "split";
  actions?: React.ReactNode;
  className?: string;
}) {
  const Tag = as;
  if (!title && !description) return null;

  if (layout === "split") {
    return (
      <div className={cn("reveal grid gap-6 lg:grid-cols-12 lg:gap-12 items-end", className)}>
        <div className="lg:col-span-7">
          {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
          {title && <Tag className="h-section">{title}</Tag>}
        </div>
        {(description || actions) && (
          <div className="lg:col-span-5">
            <RichText value={description} className="copy" />
            {actions && <div className={cn(description && "mt-6")}>{actions}</div>}
          </div>
        )}
      </div>
    );
  }

  const centered = align === "center";
  return (
    <div className={cn("reveal max-w-3xl", centered && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow className={cn("mb-5", centered && "justify-center")}>{eyebrow}</Eyebrow>}
      {title && <Tag className="h-section">{title}</Tag>}
      <RichText value={description} className={cn("lead mt-5", centered && "mx-auto")} />
      {actions && <div className={cn("mt-8 flex flex-wrap gap-3", centered && "justify-center")}>{actions}</div>}
    </div>
  );
}

/** Splits a hero title so the highlighted phrase gets the accent gradient. */
export function HighlightTitle({ title, highlight }: { title?: string; highlight?: string }) {
  const raw = (title || "").replace(/Intelligient/g, "Intelligent");
  if (!highlight) return <>{raw}</>;
  const escaped = highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (raw.toLowerCase().includes(highlight.toLowerCase())) {
    const parts = raw.split(new RegExp(`(${escaped})`, "gi"));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="gradient-text">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  }
  return (
    <>
      {raw} <span className="gradient-text">{highlight}</span>
    </>
  );
}

/** Two-digit index, e.g. 01, 02 */
export function indexLabel(i: number) {
  return String(i + 1).padStart(2, "0");
}
