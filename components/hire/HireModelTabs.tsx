"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ChevronRight, ArrowRight } from "lucide-react";
import { PortableText } from "@/components/ui/PortableText";
import { cn } from "@/lib/utils";
import type { HiringModel } from "@/components/hire/HireSections";

type Props = {
  items: HiringModel[];
  ctaText: string;
  ctaLink: string;
  bestForLabel: string;
};

function ModelDetail({ item, index, ctaText, ctaLink, bestForLabel }: Omit<Props, "items"> & { item: HiringModel; index: number }) {
  return (
    <div
      className="relative h-full rounded-2xl border p-6 md:p-8 lg:p-10 flex flex-col overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 100% 0%, rgba(0,229,255,0.12), transparent 55%), rgba(20,36,58,0.75)",
        borderColor: "rgba(0,229,255,0.22)",
      }}
    >
      <span
        className="absolute -top-4 right-4 md:right-8 text-[7rem] md:text-[9rem] font-extrabold leading-none select-none pointer-events-none"
        style={{ color: "rgba(0,229,255,0.06)" }}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 relative" style={{ color: "#00E5FF" }}>
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight relative">{item.title}</h3>
      {item.bestFor?.trim() && (
        <p
          className="self-start inline-flex flex-wrap gap-1.5 rounded-full border px-3.5 py-1.5 text-sm mb-5 relative"
          style={{ background: "rgba(0,229,255,0.08)", borderColor: "rgba(0,229,255,0.25)" }}
        >
          <span className="font-bold" style={{ color: "#00E5FF" }}>{bestForLabel}</span>
          <span style={{ color: "#C5D1E0" }}>{item.bestFor}</span>
        </p>
      )}
      {item.description && (
        <div className="text-sm md:text-base leading-relaxed mb-6 max-w-2xl relative" style={{ color: "#8FA3BF" }}>
          <PortableText value={item.description} />
        </div>
      )}
      {(item.features?.length ?? 0) > 0 && (
        <ul className={cn("grid gap-3 mb-8 relative", item.features!.length % 2 === 0 && "sm:grid-cols-2")}>
          {item.features!.map((feature) => (
            <li
              key={feature}
              className="flex gap-3 rounded-xl border p-3.5 text-sm leading-snug"
              style={{ background: "rgba(10,15,31,0.45)", borderColor: "rgba(0,229,255,0.12)", color: "#C5D1E0" }}
            >
              <span
                className="h-5 w-5 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "rgba(0,229,255,0.15)", color: "#00E5FF" }}
              >
                <Check className="w-3 h-3" strokeWidth={3} />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      <Link
        href={ctaLink}
        className="mt-auto self-start inline-flex items-center gap-2 rounded-full px-6 h-11 text-sm font-bold transition-all hover:scale-105 relative"
        style={{
          background: "linear-gradient(135deg, #1DA1F2, #00E5FF)",
          color: "#0A0F1F",
          boxShadow: "0 0 22px rgba(0,229,255,0.3)",
        }}
      >
        {ctaText}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

/** Engagement models — tab list + detail panel on desktop, stacked cards on mobile */
export function HireModelTabs({ items, ctaText, ctaLink, bestForLabel }: Props) {
  const [active, setActive] = useState(0);
  const current = items[Math.min(active, items.length - 1)];

  return (
    <>
      {/* Desktop: tabs */}
      <div className="hidden lg:grid grid-cols-[340px_1fr] gap-6 items-stretch">
        <div role="tablist" aria-orientation="vertical" className="flex flex-col gap-3">
          {items.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(index)}
                className={cn(
                  "group flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all",
                  selected ? "shadow-[0_0_24px_rgba(0,229,255,0.15)]" : "hover:border-[rgba(0,229,255,0.35)]"
                )}
                style={{
                  background: selected ? "linear-gradient(135deg, rgba(0,229,255,0.16), rgba(29,161,242,0.08))" : "rgba(20,36,58,0.55)",
                  borderColor: selected ? "rgba(0,229,255,0.5)" : "rgba(0,229,255,0.14)",
                }}
              >
                <span
                  className="h-10 w-10 rounded-xl flex items-center justify-center text-sm font-extrabold shrink-0 transition-colors"
                  style={{
                    background: selected ? "#00E5FF" : "rgba(0,229,255,0.1)",
                    color: selected ? "#0A0F1F" : "#00E5FF",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={cn("flex-1 font-bold leading-snug", selected ? "text-white" : "text-[#C5D1E0]")}>
                  {item.title}
                </span>
                <ChevronRight
                  className={cn("w-4 h-4 shrink-0 transition-transform", selected ? "translate-x-0.5" : "opacity-50")}
                  style={{ color: "#00E5FF" }}
                />
              </button>
            );
          })}
        </div>
        <div role="tabpanel" key={active} className="animate-fade-in">
          <ModelDetail item={current} index={active} ctaText={ctaText} ctaLink={ctaLink} bestForLabel={bestForLabel} />
        </div>
      </div>

      {/* Mobile / tablet: every model as a card */}
      <div className="lg:hidden grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <ModelDetail key={item.title} item={item} index={index} ctaText={ctaText} ctaLink={ctaLink} bestForLabel={bestForLabel} />
        ))}
      </div>
    </>
  );
}
