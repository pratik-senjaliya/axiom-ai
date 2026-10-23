import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  if (!items?.length) return null;

  return (
    <nav
      className={cn("flex items-center text-[0.8125rem]", className)}
      aria-label="Breadcrumb"
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2 min-w-0">
              {index > 0 && (
                <svg className="h-3 w-3 shrink-0 text-muted/60" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M4.5 3 7.5 6l-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {isLast ? (
                <span
                  className="font-medium text-body truncate max-w-[200px] sm:max-w-[360px]"
                  aria-current="page"
                  title={item.label}
                >
                  {item.label}
                </span>
              ) : item.href ? (
                <Link
                  href={item.href}
                  className="-my-2.5 inline-block py-2.5 text-muted hover:text-fg transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-muted whitespace-nowrap">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
