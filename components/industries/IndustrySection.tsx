import React from "react";
import Link from "next/link";
import {
  Building2,
  CreditCard,
  HandCoins,
  Home,
  Shield,
  LineChart,
  Briefcase,
  Users,
  Landmark,
  Workflow,
  Bot,
  BarChart3,
  Database,
  Cog,
  FileCheck,
  Search,
  ListChecks,
  PenTool,
  Blocks,
  TestTube2,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { PortableText } from "@/components/ui/PortableText";
import { Button } from "@/components/ui/Button";
import { StaggerGroup, StaggerItem } from "@/components/ui/animations/StaggerGroup";
import { HoverCard } from "@/components/ui/animations/HoverCard";

type Item = { title: string; description?: any };

const CLIENT_ICONS: { match: RegExp; icon: LucideIcon }[] = [
  { match: /bank/i, icon: Building2 },
  { match: /payment/i, icon: CreditCard },
  { match: /lend/i, icon: HandCoins },
  { match: /mortgage|home/i, icon: Home },
  { match: /insur/i, icon: Shield },
  { match: /invest|wealth/i, icon: LineChart },
  { match: /corporate|personal finance/i, icon: Briefcase },
  { match: /shared|service/i, icon: Users },
  { match: /fintech|defi|platform/i, icon: Landmark },
];

const SOLUTION_ICONS = [Workflow, Bot, BarChart3, Database, Cog, FileCheck];
const PILLAR_ICONS = [Shield, ListChecks, BarChart3, Cog, LineChart, Rocket];
const PROCESS_ICONS = [Search, ListChecks, PenTool, Blocks, TestTube2, Rocket];

function clientIcon(title: string): LucideIcon {
  return CLIENT_ICONS.find((entry) => entry.match.test(title))?.icon || Building2;
}

const IconBox = ({ children }: { children: React.ReactNode }) => (
  <div
    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border"
    style={{
      background: "rgba(0,229,255,0.1)",
      color: "#00E5FF",
      borderColor: "rgba(0,229,255,0.35)",
      boxShadow: "0 0 16px rgba(0,229,255,0.18)",
    }}
  >
    {children}
  </div>
);

const ContactCta = ({ href = "/contact" }: { href?: string }) => (
  <div className="flex justify-center mt-12">
    <Link href={href}>
      <Button
        className="rounded-full px-8 h-11 text-[15px] font-bold border-none hover:scale-105 transition-all"
        style={{
          background: "linear-gradient(135deg, #1DA1F2, #00E5FF)",
          color: "#0A0F1F",
          boxShadow: "0 0 22px rgba(0,229,255,0.3)",
        }}
      >
        Contact us
      </Button>
    </Link>
  </div>
);

/**
 * Doc design: vertical service cards (icon + title + details)
 * SyncOrigins content: Finance Transformation Solutions
 */
export function IndustryServiceCards({
  title,
  items,
}: {
  title: string;
  items: Item[];
  solutionsTitle?: string;
  solutions?: Item[];
}) {
  return (
    <section id="services" className="py-24 scroll-mt-24" style={{ background: "#0D1B2A" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-tight max-w-3xl mx-auto">
          {title}
        </h2>
        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((item, index) => {
            const Icon = SOLUTION_ICONS[index % SOLUTION_ICONS.length];
            return (
              <StaggerItem key={item.title}>
                <HoverCard
                  className="h-full rounded-2xl border p-6 md:p-7 text-left flex flex-col"
                  style={{ background: "rgba(26,46,71,0.7)", borderColor: "rgba(0,229,255,0.16)" }}
                >
                  <IconBox>
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </IconBox>
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
        <ContactCta />
      </div>
    </section>
  );
}

/** @deprecated */
export function IndustrySolutionsList() {
  return null;
}

/** Mockup: 3x3 clients grid with filled cards + distinct icons */
export function IndustryClientsGrid({ title, items }: { title: string; items: Item[] }) {
  return (
    <section id="clients" className="py-24 scroll-mt-24" style={{ background: "#0D1B2A" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-tight">
          {title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
          {items.map((item) => {
            const Icon = clientIcon(item.title);
            return (
              <div
                key={item.title}
                className="flex flex-col items-center justify-center text-center gap-3 rounded-2xl border px-4 py-6 md:py-7 transition-colors hover:border-[rgba(0,229,255,0.35)]"
                style={{
                  background: "rgba(26,46,71,0.55)",
                  borderColor: "rgba(0,229,255,0.14)",
                }}
              >
                <div
                  className="h-12 w-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(0,229,255,0.12)", color: "#00E5FF" }}
                >
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <p className="text-sm md:text-[15px] font-bold text-white leading-snug">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * Doc design: How We Drive Success — vertical cards with details
 * SyncOrigins content: Business Outcomes
 */
export function IndustryPillars({
  title,
  description,
  items,
}: {
  title: string;
  description?: any;
  items: Item[];
  outcomesTitle?: string;
  outcomes?: Item[];
}) {
  return (
    <section className="py-24" style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">{title}</h2>
          {description && (
            <div className="text-base leading-relaxed" style={{ color: "#8FA3BF" }}>
              <PortableText value={description} />
            </div>
          )}
        </div>
        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((item, index) => {
            const Icon = PILLAR_ICONS[index % PILLAR_ICONS.length];
            return (
              <StaggerItem key={item.title}>
                <HoverCard
                  className="h-full rounded-2xl border p-6 md:p-7 text-left flex flex-col"
                  style={{ background: "rgba(26,46,71,0.7)", borderColor: "rgba(0,229,255,0.16)" }}
                >
                  <IconBox>
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </IconBox>
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
        <ContactCta />
      </div>
    </section>
  );
}

/** @deprecated */
export function IndustryOutcomes() {
  return null;
}

/** Mockup: Project cards with visual header, Challenge / Solution, CTA */
export function IndustrySuccessStories({
  title,
  stories,
}: {
  title: string;
  stories: any[];
}) {
  if (!stories?.length) return null;
  return (
    <section className="py-24" style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-tight">
          {title}
        </h2>
        <StaggerGroup className={`grid gap-5 ${stories.length === 1 ? "max-w-xl mx-auto" : "lg:grid-cols-2"}`}>
          {stories.map((story: any, index: number) => (
            <StaggerItem key={story._key || index}>
              <HoverCard
                className="h-full rounded-2xl border overflow-hidden flex flex-col"
                style={{ background: "rgba(26,46,71,0.55)", borderColor: "rgba(0,229,255,0.15)" }}
              >
                <div
                  className="relative h-36 flex items-center justify-center overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(29,161,242,0.3) 0%, rgba(13,27,42,0.95) 55%, rgba(0,229,255,0.12) 100%)",
                  }}
                >
                  <div
                    className="absolute inset-x-8 bottom-4 top-6 rounded-t-lg border border-b-0 opacity-80"
                    style={{
                      background: "rgba(10,15,31,0.85)",
                      borderColor: "rgba(0,229,255,0.25)",
                    }}
                  >
                    <div className="h-2 border-b" style={{ borderColor: "rgba(0,229,255,0.15)" }} />
                    <div className="p-3 grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((n) => (
                        <div
                          key={n}
                          className="h-6 rounded"
                          style={{ background: "rgba(0,229,255,0.08)" }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="relative z-10 flex gap-2">
                    {(story.badges || ["~40%", "Faster", "Close"]).map((badge: string) => (
                      <span
                        key={badge}
                        className="px-2.5 py-1 rounded-full text-[11px] font-bold"
                        style={{
                          background: "rgba(10,15,31,0.85)",
                          color: "#00E5FF",
                          border: "1px solid rgba(0,229,255,0.4)",
                        }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  {story.title && (
                    <p className="text-lg font-bold text-white mb-4 leading-snug">{story.title}</p>
                  )}
                  {story.clientChallenge && (
                    <div className="mb-3">
                      <p className="text-sm font-bold mb-1" style={{ color: "#00E5FF" }}>
                        Challenges
                      </p>
                      <div className="text-sm leading-relaxed" style={{ color: "#8FA3BF" }}>
                        <PortableText value={story.clientChallenge} />
                      </div>
                    </div>
                  )}
                  {story.solutionDelivered && (
                    <div className="mb-5">
                      <p className="text-sm font-bold mb-1" style={{ color: "#00E5FF" }}>
                        Solutions
                      </p>
                      <div className="text-sm leading-relaxed" style={{ color: "#8FA3BF" }}>
                        <PortableText value={story.solutionDelivered} />
                      </div>
                    </div>
                  )}
                  {story.ctaLink && (
                    <div className="mt-auto">
                      <Link href={story.ctaLink}>
                        <Button
                          className="rounded-full px-5 h-9 text-sm font-bold border-none"
                          style={{
                            background: "linear-gradient(135deg, #1DA1F2, #00E5FF)",
                            color: "#0A0F1F",
                          }}
                        >
                          {story.ctaText || "View the Case Study"}
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/**
 * Doc design: Lifecycle circular stages
 * SyncOrigins content: Process & Delivery steps (fills that design)
 */
export function IndustryLifecycle({
  title,
  items,
}: {
  title: string;
  items: Item[];
  processTitle?: string;
  process?: Item[];
}) {
  return (
    <section className="py-24" style={{ background: "#0D1B2A" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-tight">
          {title}
        </h2>
        <div className="relative">
          <div
            className="hidden lg:block absolute top-8 left-[6%] right-[6%] h-px"
            style={{ background: "rgba(0,229,255,0.25)" }}
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {items.map((item, index) => {
              const Icon = PROCESS_ICONS[index % PROCESS_ICONS.length];
              return (
                <div key={item.title} className="text-center relative z-10">
                  <div
                    className="mx-auto mb-3 h-16 w-16 rounded-full flex items-center justify-center border-2"
                    style={{
                      background: "#0A0F1F",
                      borderColor: "#00E5FF",
                      color: "#00E5FF",
                      boxShadow: "0 0 18px rgba(0,229,255,0.2)",
                    }}
                  >
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <p className="text-[11px] font-extrabold mb-1" style={{ color: "#00E5FF" }}>
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="text-sm font-bold text-white mb-1.5 leading-snug">{item.title}</p>
                  {item.description && (
                    <div className="text-[11px] leading-relaxed px-1" style={{ color: "#8FA3BF" }}>
                      <PortableText value={item.description} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/** @deprecated */
export function IndustryProcess() {
  return null;
}

/** Mockup: Why Choose — visual left + benefits list right */
export function IndustryWhyUs({
  title,
  description,
  items,
}: {
  title: string;
  description?: any;
  items: Item[];
}) {
  return (
    <section className="py-24" style={{ background: "#14243A" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3 max-w-3xl">
          {title}
        </h2>
        {description && (
          <div className="text-sm md:text-base leading-relaxed mb-8 max-w-3xl" style={{ color: "#8FA3BF" }}>
            <PortableText value={description} />
          </div>
        )}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <div
            className="rounded-2xl border min-h-[260px] p-6 md:p-8 flex flex-col justify-end relative overflow-hidden"
            style={{
              background:
                "radial-gradient(ellipse at 30% 20%, rgba(0,229,255,0.2), transparent 55%), linear-gradient(160deg, #0D1B2A, #07101F)",
              borderColor: "rgba(0,229,255,0.2)",
            }}
          >
            <div
              className="absolute top-6 right-6 h-24 w-24 rounded-full opacity-30 blur-2xl"
              style={{ background: "#00E5FF" }}
            />
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-2" style={{ color: "#00E5FF" }}>
              Finance expertise
            </p>
            <p className="text-xl md:text-2xl font-bold text-white leading-snug relative z-10">
              AI, data, and ERP delivery built for finance transformation
            </p>
          </div>
          <div
            className="rounded-2xl border p-5 md:p-6"
            style={{ background: "rgba(10,15,31,0.45)", borderColor: "rgba(0,229,255,0.12)" }}
          >
            <p className="text-sm font-bold text-white mb-4">
              Benefits of partnering with SyncOrigins for Finance
            </p>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.title} className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "#00E5FF" }} />
                  <div>
                    <p className="font-bold text-white text-sm">{item.title}</p>
                    {item.description && (
                      <div className="text-sm leading-relaxed mt-0.5" style={{ color: "#8FA3BF" }}>
                        <PortableText value={item.description} />
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/** @deprecated alias kept for any leftover imports */
export const IndustrySolutionCards = IndustryServiceCards;
