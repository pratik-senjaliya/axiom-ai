import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <nav
      className={cn("flex items-center gap-2 text-sm", className)}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <span className="opacity-60" aria-hidden="true">
                  /
                </span>
              )}
              {isLast ? (
                <span className="font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-primary-600 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

