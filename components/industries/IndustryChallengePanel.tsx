"use client";

import React, { useState } from "react";
import { PortableText } from "@/components/ui/PortableText";
import { cn } from "@/lib/utils";

type ChallengeItem = {
  title: string;
  description?: any;
};

export function IndustryChallengePanel({
  title = "Finance Challenges We Solve",
  items,
}: {
  title?: string;
  items: ChallengeItem[];
}) {
  const [active, setActive] = useState(0);
  if (!items?.length) return null;
  const current = items[active] || items[0];

  return (
    <section className="py-16 md:py-20" style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 tracking-tight">
          {title}
        </h2>

        <div
          className="grid lg:grid-cols-2 rounded-2xl overflow-hidden border"
          style={{ borderColor: "rgba(0,229,255,0.18)" }}
        >
          <div style={{ background: "#0D1B2A" }}>
            {items.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "w-full text-left px-5 md:px-6 py-3.5 border-b transition-all text-sm",
                  active === index ? "font-bold" : "font-medium hover:bg-white/5"
                )}
                style={{
                  borderColor: "rgba(0,229,255,0.1)",
                  color: active === index ? "#FFFFFF" : "#8FA3BF",
                  background: active === index ? "rgba(0,229,255,0.08)" : "transparent",
                  borderLeft: active === index ? "3px solid #00E5FF" : "3px solid transparent",
                }}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="p-5 md:p-7" style={{ background: "rgba(0,229,255,0.06)" }}>
            <p className="text-lg font-bold text-white mb-3">{current.title}</p>
            <div className="text-sm md:text-base leading-relaxed" style={{ color: "#C5D1E0" }}>
              {current.description ? (
                <PortableText value={current.description} />
              ) : (
                <p>{current.title}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
