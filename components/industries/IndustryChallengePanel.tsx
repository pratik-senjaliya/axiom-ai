"use client";

import React from "react";
import { PortableText } from "@/components/ui/PortableText";
import { StaggerGroup, StaggerItem } from "@/components/ui/animations/StaggerGroup";

type ChallengeItem = {
  title: string;
  description?: any;
};

/**
 * Challenges — editorial numbered list (distinct from Solutions card grid)
 * Colors match SyncOrigins navy/cyan theme.
 */
export function IndustryChallengePanel({
  title = "Finance Challenges We Solve",
  description,
  items,
}: {
  title?: string;
  description?: any;
  items: ChallengeItem[];
}) {
  if (!items?.length) return null;

  return (
    <section className="py-12 md:py-16 overflow-x-clip" style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-8 md:mb-10">
          <div className="lg:col-span-4">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.22em] mb-3"
              style={{ color: "#00E5FF" }}
            >
              Pain points
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              {title}
            </h2>
          </div>
          {description && (
            <div className="lg:col-span-8 lg:pt-8">
              <div className="text-sm sm:text-base leading-relaxed max-w-2xl" style={{ color: "#8FA3BF" }}>
                <PortableText value={description} />
              </div>
            </div>
          )}
        </div>

        <StaggerGroup className="border-t" style={{ borderColor: "rgba(0,229,255,0.18)" }}>
          {items.map((item, index) => (
            <StaggerItem key={item.title}>
              <div
                className="group grid grid-cols-[auto_1fr] sm:grid-cols-[4.5rem_1fr] gap-4 sm:gap-6 md:gap-8 py-5 sm:py-6 md:py-7 border-b transition-colors"
                style={{ borderColor: "rgba(0,229,255,0.1)" }}
              >
                <span
                  className="text-2xl sm:text-3xl font-extrabold leading-none pt-0.5 tabular-nums transition-colors"
                  style={{ color: "rgba(0,229,255,0.55)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 grid md:grid-cols-[minmax(0,14rem)_1fr] lg:grid-cols-[minmax(0,18rem)_1fr] gap-2 md:gap-6 items-start">
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-[#00E5FF] transition-colors">
                    {item.title}
                  </h3>
                  {item.description && (
                    <div className="text-sm leading-relaxed" style={{ color: "#8FA3BF" }}>
                      <PortableText value={item.description} />
                    </div>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
