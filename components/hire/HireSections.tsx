import React from "react";
import Link from "next/link";
import {
  Brain,
  Sparkles,
  MessagesSquare,
  FileSearch,
  Bot,
  Cpu,
  Server,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { PortableText } from "@/components/ui/PortableText";
import { Button } from "@/components/ui/Button";
import { StaggerGroup, StaggerItem } from "@/components/ui/animations/StaggerGroup";
import { HoverCard } from "@/components/ui/animations/HoverCard";

type Item = { title: string; description?: any };
export type HiringModel = Item & { bestFor?: string; features?: string[] };
export type TechCategory = { category: string; tools?: string[] };
export type HireLink = { title: string; description?: string; link?: string };

const ROLE_ICONS: LucideIcon[] = [Brain, Sparkles, MessagesSquare, FileSearch, Bot, Cpu, Server];

const CARD_STYLE = { background: "rgba(26,46,71,0.7)", borderColor: "rgba(0,229,255,0.16)" };

function SectionHeader({ title, description }: { title: string; description?: any }) {
  return (
    <div className="text-center mb-6 md:mb-8 space-y-3">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight max-w-3xl mx-auto">
        {title}
      </h2>
      {description && (
        <div className="text-sm sm:text-base leading-relaxed max-w-3xl mx-auto" style={{ color: "#8FA3BF" }}>
          <PortableText value={description} />
        </div>
      )}
    </div>
  );
}

const GradientButton = ({ text, href }: { text: string; href: string }) => (
  <div className="flex justify-center mt-8">
    <Link href={href}>
      <Button
        className="rounded-full px-8 h-11 text-[15px] font-bold border-none hover:scale-105 transition-all"
        style={{
          background: "linear-gradient(135deg, #1DA1F2, #00E5FF)",
          color: "#0A0F1F",
          boxShadow: "0 0 22px rgba(0,229,255,0.3)",
        }}
      >
        {text}
      </Button>
    </Link>
  </div>
);

/** Roles we staff — compact 4-up icon cards */
export function HireExpertiseGrid({ title, description, items }: { title: string; description?: any; items: Item[] }) {
  if (!items.length) return null;
  return (
    <section id="expertise" className="py-12 md:py-16 scroll-mt-24 overflow-x-clip" style={{ background: "#0D1B2A" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <SectionHeader title={title} description={description} />
        {/* Flex so an incomplete last row stays centred (e.g. 7 roles → 4 + 3) */}
        <StaggerGroup className="flex flex-wrap justify-center gap-4 sm:gap-5">
          {items.map((item, index) => {
            const Icon = ROLE_ICONS[index % ROLE_ICONS.length];
            return (
              <StaggerItem key={item.title} className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)]">
                <HoverCard className="h-full rounded-2xl border p-5 sm:p-6 text-left flex flex-col min-w-0" style={CARD_STYLE}>
                  <div
                    className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: "rgba(0,229,255,0.1)", color: "#00E5FF" }}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <p className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">{item.title}</p>
                  {item.description && (
                    <div className="text-sm leading-relaxed" style={{ color: "#8FA3BF" }}>
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

/** Engagement models — side-by-side plans with "best for" and key points */
export function HireModels({
  title,
  description,
  items,
  ctaText,
  ctaLink,
  bestForLabel = "Best for:",
}: {
  title: string;
  description?: any;
  items: HiringModel[];
  ctaText: string;
  ctaLink: string;
  bestForLabel?: string;
}) {
  if (!items.length) return null;
  return (
    <section id="hiring-models" className="py-12 md:py-16 scroll-mt-24 overflow-x-clip" style={{ background: "#0D1B2A" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <SectionHeader title={title} description={description} />
        <StaggerGroup className={`grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 ${items.length % 2 === 0 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
          {items.map((item, index) => (
            <StaggerItem key={item.title}>
              <HoverCard className="h-full rounded-2xl border p-6 md:p-7 text-left flex flex-col min-w-0" style={CARD_STYLE}>
                <p className="text-3xl md:text-4xl font-extrabold leading-none mb-4" style={{ color: "#00E5FF" }}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-xl font-bold text-white mb-2 leading-snug">{item.title}</p>
                {item.bestFor?.trim() && (
                  <p className="text-sm font-semibold mb-4" style={{ color: "#C5D1E0" }}>
                    {bestForLabel} <span style={{ color: "#8FA3BF" }}>{item.bestFor}</span>
                  </p>
                )}
                {item.description && (
                  <div className="text-sm leading-relaxed mb-5" style={{ color: "#8FA3BF" }}>
                    <PortableText value={item.description} />
                  </div>
                )}
                {(item.features?.length ?? 0) > 0 && (
                  <ul className="mt-auto space-y-2.5 pt-5 border-t" style={{ borderColor: "rgba(0,229,255,0.12)" }}>
                    {item.features!.map((feature) => (
                      <li key={feature} className="flex gap-2.5 text-sm" style={{ color: "#C5D1E0" }}>
                        <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#00E5FF" }} strokeWidth={2.5} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <GradientButton text={ctaText} href={ctaLink} />
      </div>
    </section>
  );
}

/** Tech stack — category label + technology chips per row */
export function HireTechStack({ title, description, items }: { title: string; description?: any; items: TechCategory[] }) {
  if (!items.length) return null;
  return (
    <section className="py-12 md:py-16 overflow-x-clip" style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-6xl mx-auto">
        <SectionHeader title={title} description={description} />
        <div className="rounded-2xl border divide-y" style={{ ...CARD_STYLE, background: "rgba(26,46,71,0.45)" }}>
          {items.map((row) => (
            <div
              key={row.category}
              className="grid md:grid-cols-[220px_1fr] gap-3 md:gap-6 p-5 md:p-6"
              style={{ borderColor: "rgba(0,229,255,0.1)" }}
            >
              <p className="text-sm font-bold text-white md:pt-1.5">{row.category}</p>
              <div className="flex flex-wrap gap-2">
                {(row.tools || []).map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border px-3 py-1.5 text-xs sm:text-sm font-medium"
                    style={{ background: "rgba(0,229,255,0.06)", borderColor: "rgba(0,229,255,0.2)", color: "#C5D1E0" }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Links to other hire pages */
export function HireExploreMore({
  title,
  items,
  linkText = "Hire now",
}: {
  title: string;
  items: HireLink[];
  linkText?: string;
}) {
  if (!items.length) return null;
  return (
    <section className="py-12 md:py-16 overflow-x-clip" style={{ background: "#0D1B2A" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <SectionHeader title={title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.link || "/contact"}
              className="group rounded-2xl border p-5 sm:p-6 flex flex-col transition-colors hover:border-[rgba(0,229,255,0.4)] min-w-0"
              style={CARD_STYLE}
            >
              <p className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#00E5FF] transition-colors">
                {item.title}
              </p>
              {item.description && (
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#8FA3BF" }}>
                  {item.description}
                </p>
              )}
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: "#00E5FF" }}>
                {linkText}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
