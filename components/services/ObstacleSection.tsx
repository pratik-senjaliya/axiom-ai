import React from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/kit";
import { NumberedRows } from "@/components/ui/blocks";

interface ObstacleItemProps {
  title: string;
  description: string | any[];
  icon?: React.ReactNode;
}

interface ObstacleSectionProps {
  title: string;
  subtitle?: React.ReactNode;
  items: ObstacleItemProps[];
  className?: string;
  eyebrow?: string;
}

/** Problem statement: sticky heading on the left, numbered editorial rows on the right. */
export const ObstacleSection: React.FC<ObstacleSectionProps> = ({
  title,
  subtitle,
  items,
  className,
  eyebrow = "The challenge",
}) => {
  if (!title && !items?.length) return null;

  return (
    <section className={cn("relative overflow-x-clip bg-ink-900 section-y", className)}>
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="reveal lg:sticky lg:top-28">
              <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
              <h2 className="h-section">{title}</h2>
              {subtitle && <div className="lead mt-6">{subtitle}</div>}
            </div>
          </div>
          <div className="lg:col-span-7">
            <NumberedRows items={items} />
          </div>
        </div>
      </div>
    </section>
  );
};
