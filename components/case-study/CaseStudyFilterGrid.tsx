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

type Option = { label: string; value: string };

const ALL = "all";

function FilterRow({
  label,
  options,
  active,
  onChange,
}: {
  label: string;
  options: Option[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
      <span className="text-[0.65rem] font-bold uppercase tracking-widest sm:w-20 shrink-0" style={{ color: "#8FA3BF" }}>
        {label}
      </span>
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5">
        {[{ label: "All", value: ALL }, ...options].map((option) => {
          const selected = active === option.value;
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option.value)}
              className="px-3 sm:px-4 md:px-5 py-2 rounded-full text-[0.62rem] sm:text-[0.65rem] font-bold uppercase tracking-wider sm:tracking-widest transition-all duration-300 border"
              style={
                selected
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
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Case study listing with industry + service filters (kept in the URL as ?industry=&service=) */
export function CaseStudyFilterGrid({ items, title = "Case Studies" }: { items: CaseStudyItem[]; title?: string }) {
  const [industry, setIndustry] = useState(ALL);
  const [service, setService] = useState(ALL);

  // Only offer filters that match at least one case study
  const industryOptions = BLOG_INDUSTRY_CATEGORIES.filter((c) => items.some((i) => i.relatedIndustry === c.value));
  const serviceOptions = BLOG_SERVICE_CATEGORIES.filter((c) => items.some((i) => i.relatedService === c.value));

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const i = params.get("industry");
    const s = params.get("service");
    if (i && industryOptions.some((o) => o.value === i)) setIndustry(i);
    if (s && serviceOptions.some((o) => o.value === s)) setService(s);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const update = (key: "industry" | "service", value: string) => {
    if (key === "industry") setIndustry(value);
    else setService(value);
    const url = new URL(window.location.href);
    if (value === ALL) url.searchParams.delete(key);
    else url.searchParams.set(key, value);
    window.history.replaceState({}, "", url);
  };

  const filtered = useMemo(
    () =>
      items.filter(
        (item) =>
          (industry === ALL || item.relatedIndustry === industry) &&
          (service === ALL || item.relatedService === service)
      ),
    [items, industry, service]
  );

  if (!items?.length) return null;

  return (
    <section className="py-12 md:py-16 overflow-x-clip" style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight text-center mb-6 sm:mb-8">
          {title}
        </h2>

        {(industryOptions.length > 0 || serviceOptions.length > 0) && (
          <div
            className="mb-8 sm:mb-10 rounded-xl sm:rounded-2xl border p-4 sm:p-5 space-y-4"
            style={{ background: "rgba(13,27,42,0.6)", borderColor: "rgba(0,229,255,0.1)" }}
          >
            {industryOptions.length > 0 && (
              <FilterRow label="Industry" options={industryOptions} active={industry} onChange={(v) => update("industry", v)} />
            )}
            {serviceOptions.length > 0 && (
              <FilterRow label="Service" options={serviceOptions} active={service} onChange={(v) => update("service", v)} />
            )}
          </div>
        )}

        {filtered.length > 0 ? (
          <CaseStudyCards items={filtered} />
        ) : (
          <div className="text-center py-12 rounded-2xl border" style={{ borderColor: "rgba(0,229,255,0.1)", color: "#8FA3BF" }}>
            <p className="mb-4">No case studies match these filters yet.</p>
            <button
              type="button"
              onClick={() => {
                update("industry", ALL);
                update("service", ALL);
              }}
              className="text-sm font-bold"
              style={{ color: "#00E5FF" }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
