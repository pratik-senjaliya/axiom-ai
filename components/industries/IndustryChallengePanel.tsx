"use client";

import React from "react";
import {
  ServerCrash,
  Network,
  ClipboardList,
  Clock3,
  ShieldAlert,
  Bot,
  type LucideIcon,
} from "lucide-react";
import { PortableText } from "@/components/ui/PortableText";
import { HoverCard } from "@/components/ui/animations/HoverCard";
import { StaggerGroup, StaggerItem } from "@/components/ui/animations/StaggerGroup";

type ChallengeItem = {
  title: string;
  description?: any;
};

const CHALLENGE_ICONS: LucideIcon[] = [
  ServerCrash,
  Network,
  ClipboardList,
  Clock3,
  ShieldAlert,
  Bot,
];

export function IndustryChallengePanel({
  title = "Finance Challenges We Solve",
  items,
}: {
  title?: string;
  items: ChallengeItem[];
}) {
  if (!items?.length) return null;

  return (
    <section className="py-24" style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-tight">
          {title}
        </h2>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((item, index) => {
            const Icon = CHALLENGE_ICONS[index % CHALLENGE_ICONS.length];
            return (
              <StaggerItem key={item.title}>
                <HoverCard
                  className="h-full rounded-2xl border p-6 md:p-7 text-left flex flex-col"
                  style={{
                    background: "rgba(26,46,71,0.7)",
                    borderColor: "rgba(0,229,255,0.16)",
                  }}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className="inline-flex h-12 w-12 items-center justify-center rounded-xl border shrink-0"
                      style={{
                        background: "rgba(0,229,255,0.1)",
                        color: "#00E5FF",
                        borderColor: "rgba(0,229,255,0.35)",
                        boxShadow: "0 0 16px rgba(0,229,255,0.18)",
                      }}
                    >
                      <Icon className="w-6 h-6" strokeWidth={1.75} />
                    </div>
                    <span
                      className="text-xs font-extrabold tracking-wider"
                      style={{ color: "rgba(0,229,255,0.55)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-lg font-bold text-white mb-3 leading-snug">{item.title}</p>
                  {item.description && (
                    <div className="text-sm leading-relaxed flex-grow" style={{ color: "#8FA3BF" }}>
                      <PortableText value={item.description} />
                    </div>
                  )}
                </HoverCard>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
