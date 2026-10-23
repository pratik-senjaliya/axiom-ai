import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { PortableText } from "@/components/ui/PortableText";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ArrowIcon, ButtonLink, Eyebrow, RichText, Section, SectionHeader, indexLabel } from "@/components/ui/kit";
import { CellGrid } from "@/components/ui/blocks";

/** Hero — title left, KPI stats right, CTA */
export function CaseStudyHero({
  title,
  excerpt,
  stats,
  badge,
  ctaText = "Talk to Our Experts",
  ctaHref = "/contact",
}: {
  title: string;
  excerpt?: string;
  stats?: { value: string; label: string }[];
  badge?: string;
  ctaText?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-900 pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36">
      <div aria-hidden className="bg-grid-fade" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-line" />
      <div className="container-custom relative">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Case Studies" },
            { label: title.length > 40 ? `${title.slice(0, 40)}…` : title },
          ]}
          className="mb-10 lg:mb-12"
        />
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-7">
            {badge && <Eyebrow className="mb-6">{badge}</Eyebrow>}
            <h1 className="h-display">{title}</h1>
            {excerpt && <p className="lead mt-6 max-w-2xl">{excerpt}</p>}
            {ctaText && ctaHref && (
              <div className="mt-10">
                <ButtonLink href={ctaHref} size="lg" arrow>
                  {ctaText}
                </ButtonLink>
              </div>
            )}
          </div>
          {stats && stats.length > 0 && (
            <dl className="panel-accent min-w-0 divide-y divide-line px-7 py-2 sm:px-9 lg:col-span-5">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse py-6">
                  <dt className="mt-2 text-[0.9375rem] text-body">{stat.label}</dt>
                  <dd className="break-words font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                    <span className="gradient-text">{stat.value}</span>
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </section>
  );
}

/** About the Client — image left, title + copy on the right */
export function CaseStudyAbout({
  title,
  content,
  image,
  imageAlt,
}: {
  title: string;
  content: any;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <Section tone="base">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        {image && (
          <div className="reveal min-w-0 lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
              <Image src={image} alt={imageAlt || title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" unoptimized />
            </div>
          </div>
        )}
        <div className={`reveal min-w-0 ${image ? "lg:col-span-7" : "lg:col-span-12 max-w-3xl"}`}>
          <Eyebrow className="mb-5">The client</Eyebrow>
          <h2 className="h-section">{title}</h2>
          <div className="lead mt-6">
            <PortableText value={content} />
          </div>
        </div>
      </div>
    </Section>
  );
}

/** Challenges — sticky heading with numbered rows */
export function CaseStudyChallengeGrid({
  title,
  description,
  items,
}: {
  title: string;
  description?: string;
  items: string[];
}) {
  if (!items?.length) return null;
  return (
    <Section tone="raised">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="reveal lg:sticky lg:top-28">
            <Eyebrow className="mb-5">The challenge</Eyebrow>
            <h2 className="h-section">{title}</h2>
            {description && <p className="lead mt-6">{description}</p>}
          </div>
        </div>
        <ol className="border-t border-line lg:col-span-7">
          {items.map((text, index) => (
            <li key={index} className="reveal grid grid-cols-[2.75rem_1fr] gap-4 border-b border-line py-7 sm:grid-cols-[4rem_1fr] sm:gap-6">
              <span className="pt-0.5 font-display text-sm font-medium tabular-nums text-accent">{indexLabel(index)}</span>
              <p className="text-base leading-relaxed text-body sm:text-[1.0625rem]">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/** Solutions / approach — numbered steps in a shared-border panel */
export function CaseStudySolutionsGrid({
  title,
  description,
  items,
}: {
  title: string;
  description?: string;
  items: string[];
}) {
  if (!items?.length) return null;
  return (
    <Section tone="base">
      <SectionHeader
        eyebrow="Our approach"
        title={title}
        description={description}
        layout={description ? "split" : "stack"}
        className="mb-14 lg:mb-16"
      />
      <ol className="cell-grid reveal grid-cols-1 md:grid-cols-2">
        {items.map((text, index) => (
          <li
            key={index}
            className={`flex flex-col gap-6 p-7 sm:p-9 ${items.length % 2 === 1 && index === items.length - 1 ? "md:col-span-2" : ""}`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line-accent font-display text-sm font-semibold text-accent">
              {indexLabel(index)}
            </span>
            <p className="text-base leading-relaxed text-body sm:text-[1.0625rem]">{text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/** Technologies used — chip row */
export function CaseStudyTechnologies({ items }: { items: string[] }) {
  if (!items?.length) return null;
  return (
    <Section tone="raised" size="sm">
      <div className="reveal grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-16">
        <h2 className="h-card lg:col-span-4">Technologies Used</h2>
        <ul className="flex flex-wrap gap-2 lg:col-span-8">
          {items.map((name) => (
            <li key={name} className="chip px-4 py-2 text-sm text-fg">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/** Outcomes — checklist panel */
export function CaseStudyOutcomesGrid({
  title,
  description,
  items,
}: {
  title: string;
  description?: string;
  items: string[];
}) {
  if (!items?.length) return null;
  return (
    <Section tone="base">
      <SectionHeader
        eyebrow="Results"
        title={title}
        description={description}
        layout={description ? "split" : "stack"}
        className="mb-14 lg:mb-16"
      />
      <CellGrid cols={3}>
        {items.map((text, index) => (
          <div key={index} className="flex h-full gap-4 p-7 sm:p-8">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Check className="h-3.5 w-3.5" strokeWidth={2.25} />
            </span>
            <p className="text-[0.9375rem] font-medium leading-relaxed text-fg sm:text-base">{text}</p>
          </div>
        ))}
      </CellGrid>
    </Section>
  );
}

/** Client feedback — large quote */
export function CaseStudyFeedback({
  quote,
  author,
  role,
}: {
  quote: any;
  author?: string;
  role?: string;
}) {
  if (!quote) return null;
  return (
    <Section tone="raised">
      <figure className="reveal mx-auto max-w-4xl">
        <Eyebrow className="mb-8">Client Feedback</Eyebrow>
        <blockquote className="font-display text-2xl font-medium leading-snug tracking-tight text-fg sm:text-3xl lg:text-[2.125rem]">
          {typeof quote === "string" ? <p>&ldquo;{quote}&rdquo;</p> : <PortableText value={quote} />}
        </blockquote>
        {(author || role) && (
          <figcaption className="mt-10 flex items-center gap-4 border-t border-line pt-6">
            <span aria-hidden className="h-px w-8 bg-accent" />
            <span>
              {author && <span className="block font-semibold text-fg">{author}</span>}
              {role && <span className="mt-0.5 block text-sm text-muted">{role}</span>}
            </span>
          </figcaption>
        )}
      </figure>
    </Section>
  );
}

/** Case study cards — used by "Explore More" and the Solutions page */
export function CaseStudyMore({
  items,
  title = "Explore More Case Studies",
  as = "h2",
  description,
}: {
  items: { slug: string; title: string; excerpt?: string; image?: string; imageAlt?: string }[];
  title?: string;
  as?: "h2" | "h3";
  description?: any;
}) {
  if (!items?.length) return null;
  return (
    <Section tone="base">
      <SectionHeader title={title} as={as} description={description} className="mb-12" />
      <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link key={item.slug} href={`/case-studies/${item.slug}`} className="reveal group flex min-w-0 flex-col">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-ink-800">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.imageAlt || item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <div aria-hidden className="bg-grid-fade" />
                  <p className="relative line-clamp-3 font-display text-base font-semibold text-fg">{item.title}</p>
                </div>
              )}
            </div>
            <p className="mt-6 font-display text-lg font-semibold leading-snug tracking-tight text-fg line-clamp-3 sm:text-xl">
              {item.title}
            </p>
            <RichText value={item.excerpt} className="copy mt-3 line-clamp-3" />
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-fg">
              View the Case Study
              <ArrowIcon className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
