import React from "react";
import { cn } from "@/lib/utils";

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLElement> {
  as?: HeadingTag;
  children: React.ReactNode;
}

/** Renders a semantic heading (or paragraph) while preserving visual styles. */
export function SectionHeading({
  as = "h2",
  className,
  children,
  ...props
}: SectionHeadingProps) {
  const Tag = as;
  return (
    <Tag className={cn(className)} {...props}>
      {children}
    </Tag>
  );
}
