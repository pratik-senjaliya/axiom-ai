import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Brain,
  Sparkles,
  MessagesSquare,
  FileSearch,
  Bot,
  Cpu,
  Server,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Network,
  TrendingUp,
  Zap,
  Workflow,
  Wallet,
  Layers,
  Users,
  Search,
  UserCheck,
  MessageSquare,
  Rocket,
  Blocks,
  Code2,
  Boxes,
  BrainCircuit,
  Database,
  Cloud,
  Plug,
  type LucideIcon,
} from "lucide-react";
import { PortableText } from "@/components/ui/PortableText";
import { Breadcrumb, type BreadcrumbItem } from "@/components/ui/Breadcrumb";
import { StaggerGroup, StaggerItem } from "@/components/ui/animations/StaggerGroup";
import { HoverCard } from "@/components/ui/animations/HoverCard";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { SparkleIcon } from "@/components/services/ServiceHero";
import { clientIcon } from "@/components/industries/IndustrySection";
import { HireModelTabs } from "@/components/hire/HireModelTabs";

type Item = { title: string; description?: any };
export type HiringModel = Item & { bestFor?: string; features?: string[] };
export type TechCategory = { category: string; tools?: string[] };
export type HireLink = { title: string; description?: string; link?: string };
type Cta = { text: string; link: string };

const ROLE_ICONS: LucideIcon[] = [Brain, Sparkles, MessagesSquare, FileSearch, Bot, Cpu, Server];
const BUILD_ICONS: LucideIcon[] = [Blocks, Sparkles, MessagesSquare, FileSearch, Workflow, Bot];
const WHY_ICONS: LucideIcon[] = [BadgeCheck, Network, TrendingUp, Zap, Workflow, Wallet];
const STEP_ICONS: LucideIcon[] = [Search, Users, MessageSquare, UserCheck, Rocket, TrendingUp];

const CARD_STYLE = { background: "rgba(26,46,71,0.7)", borderColor: "rgba(0,229,255,0.16)" };
const ICON_BOX_STYLE = { background: "rgba(0,229,255,0.1)", color: "#00E5FF" };
const GRADIENT_BUTTON_STYLE = {
  background: "linear-gradient(135deg, #1DA1F2, #00E5FF)",
  color: "#0A0F1F",
  boxShadow: "0 0 22px rgba(0,229,255,0.3)",
};

// Rich-text bullet lists rendered as cyan check rows
const CHECK_LIST =
  "[&_ul]:list-none [&_ul]:ml-0 [&_ul]:space-y-2.5 [&_li]:relative [&_li]:pl-7 " +
  "[&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-1 [&_li]:before:top-[0.4em] " +
  "[&_li]:before:h-[6px] [&_li]:before:w-[11px] [&_li]:before:-rotate-45 " +
  "[&_li]:before:border-l-2 [&_li]:before:border-b-2 [&_li]:before:border-[#00E5FF]";

const pad = (n: number) => String(n).padStart(2, "0");

function SectionHeader({ title, description, align = "center" }: { title: string; description?: any; align?: "center" | "left" }) {
  const centered = align === "center";
  return (
    <div className={`mb-8 md:mb-10 space-y-3 ${centered ? "text-center" : "text-left"}`}>
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight max-w-3xl ${centered ? "mx-auto" : ""}`}>
        {title}
      </h2>
      {description && (
        <div className={`text-sm sm:text-base leading-relaxed max-w-5xl ${centered ? "mx-auto" : ""}`} style={{ color: "#8FA3BF" }}>
          <PortableText value={description} />
        </div>
      )}
    </div>
  );
}

function GradientLink({ text, href, className = "" }: { text: string; href: string; className?: string }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 h-12 text-[15px] font-bold transition-all hover:scale-105 ${className}`}
      style={GRADIENT_BUTTON_STYLE}
    >
      {text}
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

function OutlineLink({ text, href }: { text: string; href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border px-7 h-12 text-[15px] font-medium transition-colors hover:text-[#00E5FF]"
      style={{ background: "rgba(20,36,58,0.7)", borderColor: "rgba(0,229,255,0.3)", color: "#C5D1E0" }}
    >
      {text}
    </Link>
  );
}

/** Highlight the CMS highlight text, or the last two words when there is none */
function HeroTitle({ title, highlight }: { title: string; highlight?: string }) {
  const hl = highlight?.trim();
  if (hl && title.toLowerCase().includes(hl.toLowerCase())) {
    const parts = title.split(new RegExp(`(${hl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"));
    return <>{parts.map((part, i) => (part.toLowerCase() === hl.toLowerCase() ? <span key={i} className="gradient-text">{part}</span> : part))}</>;
  }
  if (hl) return <>{title} <span className="gradient-text">{hl}</span></>;
  const words = title.split(" ");
  if (words.length <= 3) return <>{title}</>;
  return <>{words.slice(0, -2).join(" ")} <span className="gradient-text">{words.slice(-2).join(" ")}</span></>;
}

/** Split hero — copy and CTAs left, panel of hireable roles right */
export function HireHero({
  badge,
  title,
  highlight,
  description,
  primaryCta,
  secondaryCta,
  breadcrumbs,
  image,
  imageAlt,
}: {
  badge?: string;
  title: string;
  highlight?: string;
  description?: any;
  primaryCta: Cta;
  secondaryCta?: Cta;
  breadcrumbs: BreadcrumbItem[];
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section
      className="relative pt-32 pb-16 md:pb-20 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A0F1F 0%, #0D1B2A 100%)" }}
    >
      <div className="bg-grid opacity-60 z-0" />
      <div
        className="absolute top-1/3 right-0 w-[45rem] h-[45rem] rounded-full blur-[120px] pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.1) 0%, transparent 70%)" }}
      />

      <div className="container-custom relative z-10 px-4 max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <SlideUp className="lg:col-span-7 min-w-0">
          <Breadcrumb items={breadcrumbs} className="mb-6" />
          {badge && (
            <div
              className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border"
              style={{ background: "rgba(0,229,255,0.08)", borderColor: "rgba(0,229,255,0.3)" }}
            >
              <SparkleIcon className="w-4 h-4 text-[#00E5FF]" />
              <span className="text-sm font-semibold text-[#00E5FF] uppercase tracking-wide">{badge}</span>
            </div>
          )}
          <h1 className="type-hero text-white mb-6">
            <HeroTitle title={title} highlight={highlight} />
          </h1>
          {description && (
            <div className="text-lg md:text-xl leading-relaxed max-w-2xl mb-10" style={{ color: "#C5D1E0" }}>
              <PortableText value={description} />
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-4">
            <GradientLink text={primaryCta.text} href={primaryCta.link} />
            {secondaryCta?.text && <OutlineLink text={secondaryCta.text} href={secondaryCta.link} />}
          </div>
        </SlideUp>

        {image && (
          <SlideUp className="lg:col-span-5 min-w-0">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-[2rem] blur-2xl opacity-60 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,229,255,0.25), transparent 70%)" }}
              />
              <div
                className="relative aspect-[4/3] lg:aspect-square rounded-3xl border overflow-hidden"
                style={{ borderColor: "rgba(0,229,255,0.25)", boxShadow: "0 20px 60px rgba(0,0,0,0.45)" }}
              >
                <Image src={image} alt={imageAlt || ""} fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
            </div>
          </SlideUp>
        )}
      </div>
    </section>
  );
}

/** Grid spans for 4-up expertise cards so the last row always fills the width */
function expertiseSpan(index: number, total: number) {
  const lastRow = total % 4;
  const inLastRow = index >= total - lastRow;
  const lg = !inLastRow ? "lg:col-span-3" : lastRow === 3 ? "lg:col-span-4" : lastRow === 2 ? "lg:col-span-6" : "lg:col-span-12";
  const sm = total % 2 === 1 && index === total - 1 ? "sm:col-span-2" : "";
  return `${lg} ${sm}`;
}

/** Roles we staff — centred header, 4-up icon cards (last row stretches to fill) */
export function HireExpertiseGrid({
  title,
  description,
  items,
  cta,
}: {
  title: string;
  description?: any;
  items: Item[];
  cta?: Cta;
}) {
  if (!items.length) return null;
  return (
    <section id="expertise" className="py-14 md:py-20 scroll-mt-24 overflow-x-clip" style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <SectionHeader title={title} description={description} />
        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          {items.map((item, index) => {
            const Icon = ROLE_ICONS[index % ROLE_ICONS.length];
            return (
              <StaggerItem key={item.title} className={`min-w-0 ${expertiseSpan(index, items.length)}`}>
                <HoverCard
                  className="group relative h-full rounded-2xl border p-6 flex flex-col overflow-hidden min-w-0"
                  style={CARD_STYLE}
                >
                  <div
                    className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ background: "linear-gradient(90deg, #1DA1F2, #00E5FF)" }}
                  />
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="h-12 w-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={ICON_BOX_STYLE}
                    >
                      <Icon className="w-6 h-6" strokeWidth={1.75} />
                    </div>
                    <span className="text-2xl font-extrabold leading-none" style={{ color: "rgba(0,229,255,0.15)" }}>
                      {pad(index + 1)}
                    </span>
                  </div>
                  <p className="text-lg font-bold text-white mb-2 leading-snug">{item.title}</p>
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
        {cta && (
          <div className="mt-10 flex justify-center">
            <GradientLink text={cta.text} href={cta.link} />
          </div>
        )}
      </div>
    </section>
  );
}

/** What you can build — use-case cards with an accent bar and check lists */
export function HireBuild({ title, description, items }: { title: string; description?: any; items: Item[] }) {
  if (!items.length) return null;
  return (
    <section className="py-14 md:py-20 overflow-x-clip" style={{ background: "#0D1B2A" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <SectionHeader title={title} description={description} />
        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {items.map((item, index) => {
            const Icon = BUILD_ICONS[index % BUILD_ICONS.length];
            return (
              <StaggerItem key={item.title} className="min-w-0">
                <HoverCard className="group relative h-full rounded-2xl border overflow-hidden flex flex-col min-w-0" style={CARD_STYLE}>
                  <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #1DA1F2, #00E5FF, transparent)" }} />
                  <div className="p-6 md:p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="h-12 w-12 rounded-xl flex items-center justify-center shrink-0" style={ICON_BOX_STYLE}>
                        <Icon className="w-6 h-6" strokeWidth={1.75} />
                      </div>
                      <span className="text-4xl font-extrabold leading-none" style={{ color: "rgba(0,229,255,0.12)" }}>
                        {pad(index + 1)}
                      </span>
                    </div>
                    <p className="text-lg md:text-xl font-bold text-white mb-4 leading-snug">{item.title}</p>
                    {item.description && (
                      <div
                        className={`text-sm leading-relaxed pt-4 border-t ${CHECK_LIST}`}
                        style={{ color: "#C5D1E0", borderColor: "rgba(0,229,255,0.12)" }}
                      >
                        <PortableText value={item.description} />
                      </div>
                    )}
                  </div>
                </HoverCard>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}

/** Engagement models — tabbed comparison */
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
    <section id="hiring-models" className="py-14 md:py-20 scroll-mt-24 overflow-x-clip" style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <SectionHeader title={title} description={description} />
        <HireModelTabs items={items} ctaText={ctaText} ctaLink={ctaLink} bestForLabel={bestForLabel} />
      </div>
    </section>
  );
}

const TECH_ICONS: { match: RegExp; icon: LucideIcon }[] = [
  { match: /program|language|api/i, icon: Code2 },
  { match: /generative|llm|gen ?ai/i, icon: Sparkles },
  { match: /framework/i, icon: Boxes },
  { match: /machine|ml\b|model/i, icon: BrainCircuit },
  { match: /vector|database|storage/i, icon: Database },
  { match: /data/i, icon: Workflow },
  { match: /cloud|platform/i, icon: Cloud },
  { match: /mlops|deploy|devops/i, icon: Rocket },
  { match: /integration|enterprise/i, icon: Plug },
];
const techIcon = (category: string) => TECH_ICONS.find((entry) => entry.match.test(category))?.icon || Layers;

/** Tech stack — one panel, a row per category with its tools as pills */
export function HireTechStack({ title, description, items }: { title: string; description?: any; items: TechCategory[] }) {
  if (!items.length) return null;
  return (
    <section className="py-14 md:py-20 overflow-x-clip" style={{ background: "#0D1B2A" }}>
      <div className="container-custom px-4 max-w-6xl mx-auto">
        <SectionHeader title={title} description={description} />
        <div
          className="rounded-3xl border overflow-hidden"
          style={{ background: "rgba(20,36,58,0.55)", borderColor: "rgba(0,229,255,0.16)" }}
        >
          {items.map((row, index) => {
            const Icon = techIcon(row.category);
            return (
              <div
                key={row.category}
                className="group grid md:grid-cols-[280px_1fr] gap-4 md:gap-8 px-5 sm:px-8 py-5 sm:py-6 transition-colors hover:bg-[rgba(0,229,255,0.04)]"
                style={index > 0 ? { borderTop: "1px solid rgba(0,229,255,0.1)" } : undefined}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                    style={ICON_BOX_STYLE}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  <p className="font-bold text-white leading-snug">{row.category}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {(row.tools || []).map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors hover:border-[rgba(0,229,255,0.45)] hover:text-white"
                      style={{ background: "rgba(10,15,31,0.55)", borderColor: "rgba(0,229,255,0.18)", color: "#C5D1E0" }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Why hire — split header and icon-led reason cards (optional image beside them) */
export function HireWhy({
  title,
  description,
  items,
  image,
  imageAlt,
  imageLabel,
  imageTitle,
}: {
  title: string;
  description?: any;
  items: Item[];
  image?: string;
  imageAlt?: string;
  imageLabel?: string;
  imageTitle?: string;
}) {
  if (!items.length) return null;
  const cards = (
    <StaggerGroup className={`grid sm:grid-cols-2 gap-4 sm:gap-5 ${image ? "" : "lg:grid-cols-3"}`}>
      {items.map((item, index) => {
        const Icon = WHY_ICONS[index % WHY_ICONS.length];
        return (
          <StaggerItem key={item.title} className="min-w-0">
            <HoverCard className="group h-full rounded-2xl border p-6 md:p-7 min-w-0" style={CARD_STYLE}>
              <div
                className="mb-5 h-12 w-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, rgba(29,161,242,0.25), rgba(0,229,255,0.15))", color: "#00E5FF", boxShadow: "inset 0 0 0 1px rgba(0,229,255,0.3)" }}
              >
                <Icon className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <p className="text-lg font-bold text-white mb-2 leading-snug">{item.title}</p>
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
  );

  return (
    <section className="py-14 md:py-20 overflow-x-clip" style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-end mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
          {description && (
            <div className="text-sm sm:text-base leading-relaxed lg:border-l lg:pl-8" style={{ color: "#8FA3BF", borderColor: "rgba(0,229,255,0.25)" }}>
              <PortableText value={description} />
            </div>
          )}
        </div>
        {image ? (
          <div className="grid lg:grid-cols-[5fr_7fr] gap-6 items-start">
            <div className="relative rounded-2xl border overflow-hidden aspect-[4/3] lg:aspect-square lg:sticky lg:top-28 p-6 md:p-8 flex flex-col justify-end" style={{ borderColor: "rgba(0,229,255,0.2)" }}>
              <Image src={image} alt={imageAlt || imageTitle || ""} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(7,16,31,0.1) 30%, rgba(7,16,31,0.9) 100%)" }} />
              {imageLabel && (
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-2 relative" style={{ color: "#00E5FF" }}>{imageLabel}</p>
              )}
              {imageTitle && <p className="text-xl md:text-2xl font-bold text-white leading-snug relative">{imageTitle}</p>}
            </div>
            {cards}
          </div>
        ) : (
          cards
        )}
      </div>
    </section>
  );
}

const STEP_COLS: Record<number, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
};

/** Hiring process — connected stepper (horizontal on desktop, vertical on mobile) */
export function HireProcess({ title, description, items }: { title: string; description?: any; items: Item[] }) {
  if (!items.length) return null;
  const n = items.length;
  return (
    <section className="py-14 md:py-20 overflow-x-clip" style={{ background: "#0D1B2A" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <SectionHeader title={title} description={description} />
        <div className={`relative grid gap-5 ${STEP_COLS[n] || "lg:grid-cols-4"}`}>
          {/* Connector lines */}
          <div
            className="hidden lg:block absolute top-7 h-px"
            style={{ left: `calc(100% / ${n * 2})`, right: `calc(100% / ${n * 2})`, background: "linear-gradient(90deg, rgba(0,229,255,0.5), rgba(29,161,242,0.5))" }}
          />
          <div className="lg:hidden absolute left-7 top-7 bottom-7 w-px" style={{ background: "rgba(0,229,255,0.3)" }} />

          {items.map((item, index) => {
            const Icon = STEP_ICONS[index % STEP_ICONS.length];
            return (
              <div key={item.title} className="relative flex lg:flex-col lg:items-center gap-4 lg:gap-5 min-w-0">
                <div
                  className="relative z-10 h-14 w-14 rounded-full flex items-center justify-center border-2 shrink-0"
                  style={{ background: "#0A0F1F", borderColor: "#00E5FF", color: "#00E5FF", boxShadow: "0 0 20px rgba(0,229,255,0.25)" }}
                >
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <div className="flex-1 w-full rounded-2xl border p-5 min-w-0" style={CARD_STYLE}>
                  <span
                    className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider mb-3"
                    style={{ background: "rgba(0,229,255,0.12)", color: "#00E5FF" }}
                  >
                    Step {pad(index + 1)}
                  </span>
                  <p className="text-base font-bold text-white mb-2 leading-snug">{item.title}</p>
                  {item.description && (
                    <div className="text-sm leading-relaxed" style={{ color: "#8FA3BF" }}>
                      <PortableText value={item.description} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Industries — icon cards with the description visible */
export function HireIndustries({
  title,
  description,
  items,
}: {
  title: string;
  description?: any;
  items: { title: string; icon?: string }[];
}) {
  if (!items.length) return null;
  return (
    <section className="py-14 md:py-20 overflow-x-clip" style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <SectionHeader title={title} description={description} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {items.map((item) => {
            const Icon = clientIcon(item);
            return (
              <div
                key={item.title}
                className="group relative rounded-2xl border p-6 overflow-hidden transition-colors hover:border-[rgba(0,229,255,0.4)] min-w-0"
                style={CARD_STYLE}
              >
                <div
                  className="absolute -top-10 -right-10 h-32 w-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "rgba(0,229,255,0.15)" }}
                />
                <div className="relative flex items-center gap-3">
                  <span className="h-11 w-11 rounded-xl flex items-center justify-center shrink-0" style={ICON_BOX_STYLE}>
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  <p className="font-bold text-white leading-snug">{item.title}</p>
                </div>
              </div>
            );
          })}
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
    <section className="py-14 md:py-20 overflow-x-clip" style={{ background: "#0D1B2A" }}>
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
              <div className="flex items-start justify-between gap-3 mb-2">
                <p className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-[#00E5FF] transition-colors">
                  {item.title}
                </p>
                <ArrowUpRight className="w-5 h-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" style={{ color: "#00E5FF" }} />
              </div>
              {item.description && (
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#8FA3BF" }}>
                  {item.description}
                </p>
              )}
              <span className="mt-auto text-sm font-bold" style={{ color: "#00E5FF" }}>
                {linkText}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Final CTA — split panel: pitch and button left, key benefits right */
export function HireFinalCta({
  badge,
  title,
  description,
  cta,
}: {
  badge?: string;
  title: string;
  description?: any;
  cta: Cta;
}) {
  return (
    <section className="py-14 md:py-20 overflow-x-clip" style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <div
          className="relative rounded-3xl border overflow-hidden p-6 sm:p-10 lg:p-14 text-center"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(0,229,255,0.16), transparent 60%), linear-gradient(135deg, #0D1B2A 0%, #14243A 100%)",
            borderColor: "rgba(0,229,255,0.25)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "linear-gradient(to right, rgba(0,229,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,229,255,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          />
          <div className="relative flex flex-col items-center">
            {badge && (
              <div className="mb-5 inline-flex items-center gap-2 text-[#00E5FF] text-sm font-semibold tracking-wide">
                <SparkleIcon className="w-4 h-4 text-[#00E5FF]" />
                <span>{badge}</span>
              </div>
            )}
            <h5 className="text-3xl md:text-[2.5rem] font-bold text-white mb-5 leading-tight tracking-tight max-w-4xl">{title}</h5>
            {description && (
              <div className="text-base md:text-lg leading-relaxed mb-8 max-w-3xl" style={{ color: "#8FA3BF" }}>
                <PortableText value={description} />
              </div>
            )}
            <GradientLink text={cta.text} href={cta.link} className="h-14 px-9" />
          </div>
        </div>
      </div>
    </section>
  );
}
