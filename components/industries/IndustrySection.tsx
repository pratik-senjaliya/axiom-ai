import React from "react";
import Image from "next/image";
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
  Wallet,
  PiggyBank,
  PieChart,
  Handshake,
  Store,
  ShoppingCart,
  Factory,
  Truck,
  Package,
  Hospital,
  HeartPulse,
  GraduationCap,
  Plane,
  Zap,
  Leaf,
  Globe,
  Server,
  Cpu,
  Scale,
  type LucideIcon,
} from "lucide-react";
import type { IndustryIconName } from "@/lib/industry-icons";
import { ButtonLink, Eyebrow, RichText, Section, SectionHeader, indexLabel } from "@/components/ui/kit";
import { CellGrid, FeatureCell, Timeline } from "@/components/ui/blocks";

type Item = { title: string; description?: any };
type ClientItem = Item & { icon?: string; iconImage?: string };
export type SectionCta = { text?: string; link?: string; hidden?: boolean };

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

/** Icons selectable in the CMS — keys must match INDUSTRY_ICON_OPTIONS */
const PICKABLE_ICONS: Record<IndustryIconName, LucideIcon> = {
  Building2, Landmark, CreditCard, HandCoins, Wallet, PiggyBank, Home, Shield, LineChart, BarChart3,
  PieChart, Briefcase, Users, Handshake, Store, ShoppingCart, Factory, Truck, Package, Hospital,
  HeartPulse, GraduationCap, Plane, Zap, Leaf, Globe, Server, Database, Cpu, Bot, Cog, Workflow,
  FileCheck, Scale, Rocket,
};

function clientIcon(item: ClientItem): LucideIcon {
  const picked = item.icon && PICKABLE_ICONS[item.icon as IndustryIconName];
  return picked || CLIENT_ICONS.find((entry) => entry.match.test(item.title))?.icon || Building2;
}

const ContactCta = ({ cta }: { cta?: SectionCta }) => {
  if (cta?.hidden) return null;
  return (
    <div className="mt-12 flex justify-center">
      <ButtonLink href={cta?.link || "/contact"} arrow>
        {cta?.text || "Contact us"}
      </ButtonLink>
    </div>
  );
};

/** Transformation solutions — icon feature panel */
export function IndustryServiceCards({
  title,
  description,
  items,
  cta,
}: {
  title: string;
  description?: any;
  items: Item[];
  cta?: SectionCta;
  solutionsTitle?: string;
  solutions?: Item[];
}) {
  if (!items?.length) return null;
  return (
    <Section tone="raised" id="services">
      <SectionHeader
        eyebrow="Solutions"
        title={title}
        description={description}
        layout={description ? "split" : "stack"}
        className="mb-14 lg:mb-16"
      />
      <CellGrid cols={3}>
        {items.map((item, index) => {
          const Icon = SOLUTION_ICONS[index % SOLUTION_ICONS.length];
          return (
            <FeatureCell
              key={item.title}
              index={index}
              icon={<Icon strokeWidth={1.75} />}
              title={item.title}
              titleAs="p"
              description={item.description}
            />
          );
        })}
      </CellGrid>
      <ContactCta cta={cta} />
    </Section>
  );
}

/** @deprecated */
export function IndustrySolutionsList() {
  return null;
}

/** Client types — compact icon grid */
export function IndustryClientsGrid({
  title,
  description,
  items,
}: {
  title: string;
  description?: any;
  items: ClientItem[];
}) {
  if (!items?.length) return null;
  return (
    <Section tone="base" id="clients">
      <SectionHeader
        eyebrow="Who we serve"
        title={title}
        description={description}
        layout={description ? "split" : "stack"}
        className="mb-12"
      />
      <ul className="reveal grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line xs:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = clientIcon(item);
          return (
            <li key={item.title} className="flex items-center gap-4 bg-[#0B1222] px-6 py-5 transition-colors hover:bg-[#0E182B]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-accent">
                {item.iconImage ? (
                  <Image src={item.iconImage} alt="" width={20} height={20} unoptimized className="h-5 w-5 object-contain" />
                ) : (
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                )}
              </span>
              <span className="font-display text-[0.9375rem] font-medium leading-snug text-fg">{item.title}</span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

/** Business outcomes — icon feature panel */
export function IndustryPillars({
  title,
  description,
  items,
  cta,
}: {
  title: string;
  description?: any;
  items: Item[];
  cta?: SectionCta;
  outcomesTitle?: string;
  outcomes?: Item[];
}) {
  if (!items?.length) return null;
  return (
    <Section tone="raised">
      <SectionHeader
        eyebrow="Outcomes"
        title={title}
        description={description}
        layout={description ? "split" : "stack"}
        className="mb-14 lg:mb-16"
      />
      <CellGrid cols={3}>
        {items.map((item, index) => {
          const Icon = PILLAR_ICONS[index % PILLAR_ICONS.length];
          return (
            <FeatureCell
              key={item.title}
              icon={<Icon strokeWidth={1.75} />}
              title={item.title}
              titleAs="p"
              description={item.description}
            />
          );
        })}
      </CellGrid>
      <ContactCta cta={cta} />
    </Section>
  );
}

/** @deprecated */
export function IndustryOutcomes() {
  return null;
}

/** Success stories — challenge / solution with a case study link */
export function IndustrySuccessStories({
  title,
  stories,
}: {
  title: string;
  stories: any[];
}) {
  if (!stories?.length) return null;
  return (
    <Section tone="base">
      <SectionHeader eyebrow="Success stories" title={title} className="mb-12" />
      <div className={`grid gap-6 ${stories.length === 1 ? "max-w-3xl" : "lg:grid-cols-2"}`}>
        {stories.map((story: any, index: number) => (
          <article key={story._key || index} className="panel panel-hover reveal flex flex-col p-7 sm:p-9">
            {(story.badges || []).length > 0 && (
              <ul className="mb-6 flex flex-wrap gap-2">
                {story.badges.map((badge: string) => (
                  <li key={badge} className="chip border-line-accent text-accent">{badge}</li>
                ))}
              </ul>
            )}
            {story.title && <p className="h-card">{story.title}</p>}
            <dl className="mt-6 space-y-5">
              {story.clientChallenge && (
                <div>
                  <dt className="mb-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted">Challenge</dt>
                  <dd><RichText value={story.clientChallenge} className="copy" /></dd>
                </div>
              )}
              {story.solutionDelivered && (
                <div>
                  <dt className="mb-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted">Solution</dt>
                  <dd><RichText value={story.solutionDelivered} className="copy" /></dd>
                </div>
              )}
            </dl>
            {story.ctaLink && (
              <div className="mt-auto pt-8">
                <ButtonLink href={story.ctaLink} variant="secondary" size="sm" arrow>
                  {story.ctaText || "View the Case Study"}
                </ButtonLink>
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

/** Process & delivery steps */
export function IndustryLifecycle({
  title,
  description,
  items,
}: {
  title: string;
  description?: any;
  items: Item[];
  processTitle?: string;
  process?: Item[];
}) {
  if (!items?.length) return null;
  return (
    <Section tone="base">
      <SectionHeader
        eyebrow="How we deliver"
        title={title}
        description={description}
        layout={description ? "split" : "stack"}
        className="mb-14 lg:mb-16"
      />
      {items.length <= 5 ? (
        <Timeline items={items} />
      ) : (
        <CellGrid cols={3}>
          {items.map((item, index) => {
            const Icon = PROCESS_ICONS[index % PROCESS_ICONS.length];
            return (
              <FeatureCell
                key={item.title}
                index={index}
                icon={<Icon strokeWidth={1.75} />}
                title={item.title}
                titleAs="p"
                description={item.description}
              />
            );
          })}
        </CellGrid>
      )}
    </Section>
  );
}

/** @deprecated */
export function IndustryProcess() {
  return null;
}

/** Why choose us — visual panel left, benefits list right */
export function IndustryWhyUs({
  title,
  description,
  items,
  image,
  imageAlt,
  imageLabel = "Finance expertise",
  imageTitle = "AI, data, and ERP delivery built for finance transformation",
  listTitle = "Benefits of partnering with SyncOrigins for Finance",
}: {
  title: string;
  description?: any;
  items: Item[];
  image?: string;
  imageAlt?: string;
  imageLabel?: string;
  imageTitle?: string;
  listTitle?: string;
}) {
  if (!items?.length) return null;
  return (
    <Section tone="raised">
      <SectionHeader
        eyebrow="Why SyncOrigins"
        title={title}
        description={description}
        layout={description ? "split" : "stack"}
        className="mb-14 lg:mb-16"
      />
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="panel-accent reveal relative flex min-h-[20rem] flex-col justify-end overflow-hidden p-8 lg:sticky lg:top-28 lg:min-h-[26rem]">
            {image ? (
              <>
                <Image
                  src={image}
                  alt={imageAlt || imageTitle || ""}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent" />
              </>
            ) : (
              <>
                <div aria-hidden className="bg-grid-fade" />
                <div
                  aria-hidden
                  className="absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl"
                  style={{ background: "radial-gradient(circle, rgba(0,229,255,0.25), transparent 70%)" }}
                />
              </>
            )}
            <div className="relative">
              {imageLabel && <Eyebrow className="mb-4">{imageLabel}</Eyebrow>}
              {imageTitle && <p className="font-display text-2xl font-semibold leading-snug tracking-tight text-fg">{imageTitle}</p>}
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          {listTitle && <p className="mb-6 text-sm font-medium text-muted">{listTitle}</p>}
          <ul className="border-t border-line">
            {items.map((item, index) => (
              <li key={item.title} className="reveal grid grid-cols-[2.75rem_1fr] gap-4 border-b border-line py-6 sm:grid-cols-[3.5rem_1fr]">
                <span className="pt-0.5 font-display text-sm font-medium tabular-nums text-accent">{indexLabel(index)}</span>
                <div>
                  <p className="h-card">{item.title}</p>
                  <RichText value={item.description} className="copy mt-2" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/** @deprecated alias kept for any leftover imports */
export const IndustrySolutionCards = IndustryServiceCards;
