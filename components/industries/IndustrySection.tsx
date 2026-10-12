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
  Search,
  PenTool,
  Code2,
  ClipboardCheck,
  Rocket,
  Lightbulb,
  MonitorSmartphone,
  RefreshCw,
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

const SERVICE_ICONS = [Lightbulb, MonitorSmartphone, RefreshCw];
const LIFECYCLE_ICONS = [Search, PenTool, Code2, ClipboardCheck, Rocket];

function clientIcon(title: string): LucideIcon {
  return CLIENT_ICONS.find((entry) => entry.match.test(title))?.icon || Building2;
}

const IconBox = ({
  children,
  className = "mb-4",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${className}`}
    style={{ background: "rgba(0,229,255,0.12)", color: "#00E5FF" }}
  >
    {children}
  </div>
);

/** Mockup: 3 service cards (Consulting / Custom / Modernization) */
export function IndustryServiceCards({
  title,
  items,
}: {
  title: string;
  items: Item[];
}) {
  return (
    <section className="py-12 md:py-16" style={{ background: "#0D1B2A" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 tracking-tight max-w-3xl mx-auto">
          {title}
        </h2>
        <StaggerGroup className="grid md:grid-cols-3 gap-4 md:gap-5">
          {items.slice(0, 3).map((item, index) => {
            const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];
            return (
              <StaggerItem key={item.title}>
                <HoverCard
                  className="h-full rounded-2xl border p-6 md:p-7 text-center"
                  style={{ background: "rgba(26,46,71,0.65)", borderColor: "rgba(0,229,255,0.14)" }}
                >
                  <IconBox className="mb-4 mx-auto">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </IconBox>
                  <p className="text-base md:text-lg font-bold text-white mb-3 leading-snug">
                    {item.title}
                  </p>
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

/** Mockup: Solutions as compact 2-col checklist (not oversized cards) */
export function IndustrySolutionsList({
  id,
  title,
  items,
}: {
  id?: string;
  title: string;
  items: Item[];
}) {
  return (
    <section id={id} className="py-12 md:py-14 scroll-mt-24" style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">{title}</h2>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
          {items.map((item) => (
            <div key={item.title} className="flex items-start gap-3 py-2 border-b border-white/5">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "#00E5FF" }} />
              <div>
                <p className="font-bold text-white text-sm md:text-base">{item.title}</p>
                {item.description && (
                  <div className="text-sm mt-1 leading-relaxed" style={{ color: "#8FA3BF" }}>
                    <PortableText value={item.description} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Mockup: 3x3 clients grid with filled cards + distinct icons */
export function IndustryClientsGrid({ title, items }: { title: string; items: Item[] }) {
  return (
    <section id="clients" className="py-12 md:py-14 scroll-mt-24" style={{ background: "#0D1B2A" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-7 tracking-tight">
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

/** Mockup: 3 centered pillars with icons */
export function IndustryPillars({
  title,
  description,
  items,
}: {
  title: string;
  description?: any;
  items: Item[];
}) {
  return (
    <section className="py-12 md:py-16" style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">{title}</h2>
          {description && (
            <div className="text-sm md:text-base leading-relaxed" style={{ color: "#8FA3BF" }}>
              <PortableText value={description} />
            </div>
          )}
        </div>
        <StaggerGroup className="grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <div className="text-center px-2">
                <IconBox className="mb-3 mx-auto">
                  <Shield className="w-5 h-5" strokeWidth={1.75} />
                </IconBox>
                <p className="text-base font-bold text-white mb-2">{item.title}</p>
                {item.description && (
                  <div className="text-sm leading-relaxed" style={{ color: "#8FA3BF" }}>
                    <PortableText value={item.description} />
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/** Mockup: Business Outcomes as simple bullet list */
export function IndustryOutcomes({ title, items }: { title: string; items: Item[] }) {
  return (
    <section className="py-12 md:py-14" style={{ background: "#0D1B2A" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">{title}</h2>
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 max-w-4xl">
          {items.map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "#00E5FF" }} />
              <span className="text-sm md:text-base font-medium text-white leading-snug">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
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
    <section className="py-12 md:py-16" style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 tracking-tight">
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

/** Mockup: 5-stage lifecycle with circular icons */
export function IndustryLifecycle({ title, items }: { title: string; items: Item[] }) {
  return (
    <section className="py-12 md:py-16" style={{ background: "#0D1B2A" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10 tracking-tight">
          {title}
        </h2>
        <div className="relative">
          <div
            className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-px"
            style={{ background: "rgba(0,229,255,0.25)" }}
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-4">
            {items.slice(0, 5).map((item, index) => {
              const Icon = LIFECYCLE_ICONS[index % LIFECYCLE_ICONS.length];
              return (
                <div key={item.title} className="text-center relative z-10">
                  <div
                    className="mx-auto mb-3 h-14 w-14 rounded-full flex items-center justify-center border-2"
                    style={{
                      background: "#0A0F1F",
                      borderColor: "#00E5FF",
                      color: "#00E5FF",
                      boxShadow: "0 0 18px rgba(0,229,255,0.2)",
                    }}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
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

/** Mockup: Process as numbered vertical/compact steps list */
export function IndustryProcess({ title, items }: { title: string; items: Item[] }) {
  return (
    <section className="py-12 md:py-14" style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">{title}</h2>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {items.map((item, index) => (
            <li
              key={item.title}
              className="rounded-xl border px-4 py-4 flex gap-3"
              style={{ background: "rgba(26,46,71,0.45)", borderColor: "rgba(0,229,255,0.12)" }}
            >
              <span className="text-sm font-extrabold shrink-0" style={{ color: "#00E5FF" }}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-sm font-bold text-white mb-1">{item.title}</p>
                {item.description && (
                  <div className="text-xs leading-relaxed" style={{ color: "#8FA3BF" }}>
                    <PortableText value={item.description} />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
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
    <section className="py-12 md:py-16" style={{ background: "#14243A" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3 max-w-3xl">
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
