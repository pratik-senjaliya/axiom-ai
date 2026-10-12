import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@/components/ui/PortableText";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ChevronRight } from "lucide-react";

/** Mockup: title left + KPI stats card right, optional badge */
export function CaseStudyHero({
  title,
  excerpt,
  stats,
  badge,
}: {
  title: string;
  excerpt?: string;
  stats?: { value: string; label: string }[];
  badge?: string;
}) {
  return (
    <section className="pt-24 md:pt-28 pb-10 md:pb-14" style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Case Studies" }, { label: title }]}
          className="mb-6"
        />
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-7">
            {badge && (
              <span
                className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded mb-4"
                style={{ background: "rgba(0,229,255,0.12)", color: "#00E5FF" }}
              >
                {badge}
              </span>
            )}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight mb-3">
              {title}
            </h1>
            {excerpt && (
              <p className="text-sm md:text-base leading-relaxed max-w-2xl" style={{ color: "#C5D1E0" }}>
                {excerpt}
              </p>
            )}
          </div>
          {stats && stats.length > 0 && (
            <div
              className="lg:col-span-5 rounded-2xl border p-5 md:p-6 space-y-4"
              style={{
                background: "rgba(0,229,255,0.08)",
                borderColor: "rgba(0,229,255,0.25)",
              }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2.5">
                  <span className="text-2xl md:text-3xl font-extrabold" style={{ color: "#00E5FF" }}>
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium" style={{ color: "#C5D1E0" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/** Mockup: title + icon left, description right */
export function CaseStudyAbout({ title, content }: { title: string; content: any }) {
  return (
    <section className="py-14 md:py-16" style={{ background: "#0D1B2A" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr] gap-5 md:gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
            <div
              className="h-12 w-12 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(0,229,255,0.12)", color: "#00E5FF" }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7l3-7z"
                />
              </svg>
            </div>
          </div>
          <div className="text-sm md:text-base leading-relaxed" style={{ color: "#C5D1E0" }}>
            <PortableText value={content} />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Mockup: 2x2 numbered challenge cards (warm tint adapted to brand) */
export function CaseStudyChallengeGrid({ title, items }: { title: string; items: string[] }) {
  if (!items?.length) return null;
  return (
    <section className="py-14 md:py-16" style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{title}</h2>
        <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
          {items.map((text, index) => (
            <div
              key={index}
              className="rounded-xl p-4 md:p-5 border"
              style={{
                background: "rgba(255, 180, 120, 0.06)",
                borderColor: "rgba(255, 180, 120, 0.18)",
              }}
            >
              <span
                className="text-sm font-extrabold mb-2 inline-block"
                style={{ color: "#00E5FF" }}
              >
                {index + 1}
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "#C5D1E0" }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Mockup: dark block, 2x2 large numbered solutions */
export function CaseStudySolutionsGrid({ title, items }: { title: string; items: string[] }) {
  if (!items?.length) return null;
  return (
    <section className="py-14 md:py-16" style={{ background: "#050910" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <div
          className="rounded-2xl border p-5 md:p-8"
          style={{ background: "#0A0F1F", borderColor: "rgba(0,229,255,0.15)" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{title}</h2>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {items.map((text, index) => (
              <div
                key={index}
                className="rounded-xl border p-4 md:p-5"
                style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
              >
                <span
                  className="text-2xl font-extrabold mb-2 inline-block"
                  style={{ color: "#00E5FF" }}
                >
                  {index + 1}
                </span>
                <p className="text-sm md:text-base leading-relaxed text-white/90">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Mockup: horizontal tech logo/name row */
export function CaseStudyTechnologies({ items }: { items: string[] }) {
  if (!items?.length) return null;
  return (
    <section className="py-12 md:py-14" style={{ background: "#0D1B2A" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
          Technologies Used
        </h2>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {items.map((name) => (
            <div
              key={name}
              className="min-w-[100px] px-5 py-4 rounded-xl border text-center"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(0,229,255,0.18)",
              }}
            >
              <p className="text-sm font-bold" style={{ color: "#C5D1E0" }}>
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Mockup: tinted container + white-style outcome cards 3x2 */
export function CaseStudyOutcomesGrid({ title, items }: { title: string; items: string[] }) {
  if (!items?.length) return null;
  return (
    <section className="py-14 md:py-16" style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{title}</h2>
        <div
          className="rounded-2xl p-5 md:p-7 border"
          style={{
            background: "rgba(255, 200, 150, 0.06)",
            borderColor: "rgba(255, 200, 150, 0.15)",
          }}
        >
          <p className="text-base font-bold text-white mb-4">Outcomes</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {items.map((text, index) => (
              <div
                key={index}
                className="rounded-xl border px-4 py-4 text-sm leading-relaxed font-medium"
                style={{
                  background: "rgba(13,27,42,0.95)",
                  borderColor: "rgba(255,255,255,0.08)",
                  color: "#C5D1E0",
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Mockup: Client Feedback split — quote mark left, text + attribution right */
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
    <section className="py-14 md:py-16" style={{ background: "#0D1B2A" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <div
          className="rounded-2xl border grid md:grid-cols-[240px_1fr] overflow-hidden"
          style={{ background: "rgba(26,46,71,0.5)", borderColor: "rgba(0,229,255,0.15)" }}
        >
          <div
            className="p-6 md:p-7 border-b md:border-b-0 md:border-r flex flex-col"
            style={{ borderColor: "rgba(0,229,255,0.12)" }}
          >
            <h2 className="text-xl font-bold text-white mb-4">Client Feedback</h2>
            <span
              className="text-6xl font-serif leading-none mt-auto"
              style={{ color: "rgba(0,229,255,0.35)" }}
            >
              ”
            </span>
          </div>
          <div className="p-6 md:p-7">
            <div className="text-sm md:text-base leading-relaxed mb-6" style={{ color: "#C5D1E0" }}>
              {typeof quote === "string" ? <p>{quote}</p> : <PortableText value={quote} />}
            </div>
            {author && (
              <p className="text-base font-bold" style={{ color: "#00E5FF" }}>
                {author}
              </p>
            )}
            {role && (
              <p className="text-sm mt-0.5" style={{ color: "#8FA3BF" }}>
                {role}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Mockup: Explore More Case Studies — 3 cards with image + link */
export function CaseStudyMore({
  items,
}: {
  items: { slug: string; title: string; excerpt?: string; image?: string; imageAlt?: string }[];
}) {
  if (!items?.length) return null;
  return (
    <section className="py-14 md:py-20" style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          Explore More Case Studies
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((item, index) => {
            const accents = [
              "rgba(255,120,160,0.25)",
              "rgba(0,200,180,0.25)",
              "rgba(140,120,255,0.25)",
            ];
            return (
              <Link
                key={item.slug}
                href={`/case-studies/${item.slug}`}
                className="group rounded-xl border overflow-hidden transition-all hover:[border-color:rgba(0,229,255,0.35)]"
                style={{
                  background: "rgba(26,46,71,0.55)",
                  border: "1px solid rgba(0,229,255,0.12)",
                }}
              >
                <div
                  className="relative aspect-[16/10]"
                  style={{ background: accents[index % accents.length] }}
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.imageAlt || item.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                      <p className="text-sm font-bold text-white line-clamp-3">{item.title}</p>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-white mb-2 line-clamp-3 group-hover:text-[#00E5FF] transition-colors">
                    {item.title}
                  </p>
                  <span
                    className="inline-flex items-center text-xs font-bold"
                    style={{ color: "#00E5FF" }}
                  >
                    View the Case Study
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
