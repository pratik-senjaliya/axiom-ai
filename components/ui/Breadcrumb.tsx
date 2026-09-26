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
      className={cn("flex items-center text-sm", className)}
      aria-label="Breadcrumb"
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2 min-w-0">
              {index > 0 && (
                <span className="text-[#8FA3BF]/50 select-none" aria-hidden="true">
                  /
                </span>
              )}
              {isLast ? (
                <span
                  className="font-medium text-[#C5D1E0] truncate max-w-[220px] sm:max-w-[360px]"
                  aria-current="page"
                  title={item.label}
                >
                  {item.label}
                </span>
              ) : item.href ? (
                <Link
                  href={item.href}
                  className="text-[#8FA3BF] hover:text-[#00E5FF] transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#8FA3BF] whitespace-nowrap">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
