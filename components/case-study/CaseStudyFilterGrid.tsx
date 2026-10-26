"use client";

import React, { useEffect, useMemo, useState } from "react";
import { CaseStudyCards } from "@/components/case-study/CaseStudyLayout";
import { BLOG_INDUSTRY_CATEGORIES, BLOG_SERVICE_CATEGORIES } from "@/lib/blog";

type CaseStudyItem = {
  slug: string;
  title: string;
  excerpt?: string;
  image?: string;
  imageAlt?: string;
  relatedService?: string;
  relatedIndustry?: string;
};

const ALL = "All";
const CATEGORIES = [...BLOG_SERVICE_CATEGORIES, ...BLOG_INDUSTRY_CATEGORIES];

/** Case study listing with the same category pills as Insights (kept in the URL as ?category=) */
export function CaseStudyFilterGrid({ items, title = "Case Studies" }: { items: CaseStudyItem[]; title?: string }) {
  const [active, setActive] = useState(ALL);

  useEffect(() => {
    const category = new URLSearchParams(window.location.search).get("category");
    if (category && CATEGORIES.some((c) => c.label === category)) setActive(category);
  }, []);

  const select = (category: string) => {
    setActive(category);
    const url = new URL(window.location.href);
    if (category === ALL) url.searchParams.delete("category");
    else url.searchParams.set("category", category);
    window.history.replaceState({}, "", url);
  };

  const filtered = useMemo(() => {
    const value = CATEGORIES.find((c) => c.label === active)?.value;
    if (!value) return items;
    return items.filter((item) => item.relatedService === value || item.relatedIndustry === value);
  }, [items, active]);

  if (!items?.length) return null;

  return (
    <section className="py-12 md:py-16 overflow-x-clip" style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight text-center mb-6 sm:mb-8">
          {title}
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2.5 md:gap-3 mx-auto w-full max-w-5xl mb-8 sm:mb-10">
          {[ALL, ...CATEGORIES.map((c) => c.label)].map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={active === category}
              onClick={() => select(category)}
              className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-[0.58rem] sm:text-[0.65rem] font-bold uppercase tracking-wider sm:tracking-widest transition-all duration-300 border"
              style={
                active === category
                  ? {
                      background: "linear-gradient(135deg, #1DA1F2, #00E5FF)",
                      color: "#0A0F1F",
                      borderColor: "transparent",
                      boxShadow: "0 0 16px rgba(0,229,255,0.28)",
                    }
                  : {
                      background: "rgba(20,36,58,0.7)",
                      borderColor: "rgba(0,229,255,0.1)",
                      color: "#8FA3BF",
                    }
              }
            >
              {category}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <CaseStudyCards items={filtered} />
        ) : (
          <div className="text-center py-12 rounded-2xl border" style={{ borderColor: "rgba(0,229,255,0.1)", color: "#8FA3BF" }}>
            <p className="mb-4">No case studies in this category yet.</p>
            <button
              type="button"
              onClick={() => select(ALL)}
              className="text-sm font-bold"
              style={{ color: "#00E5FF" }}
            >
              View all case studies
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
