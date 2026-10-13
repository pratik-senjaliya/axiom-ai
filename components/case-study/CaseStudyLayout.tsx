import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@/components/ui/PortableText";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ChevronRight } from "lucide-react";

const SECTION_PAD = "py-16 md:py-20";
const H2 = "text-3xl md:text-4xl font-bold text-white tracking-tight";
const BODY = "text-base leading-relaxed";
const MUTED = { color: "#C5D1E0" } as const;

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
    <section className="pt-24 md:pt-28 pb-12 md:pb-16" style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Case Studies" }, { label: title }]}
          className="mb-6"
        />
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-7">
            {badge && (
              <span
                className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md mb-5"
                style={{ background: "rgba(0,229,255,0.12)", color: "#00E5FF" }}
              >
                {badge}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight tracking-tight mb-4">
              {title}
            </h1>
            {excerpt && (
              <p className={`${BODY} max-w-2xl`} style={MUTED}>
                {excerpt}
              </p>
            )}
          </div>
          {stats && stats.length > 0 && (
            <div
              className="lg:col-span-5 rounded-2xl border p-6 md:p-7 space-y-5"
              style={{
                background: "rgba(0,229,255,0.08)",
                borderColor: "rgba(0,229,255,0.25)",
              }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-3">
                  <span className="text-3xl md:text-4xl font-extrabold" style={{ color: "#00E5FF" }}>
                    {stat.value}
                  </span>
                  <span className="text-base font-medium" style={MUTED}>
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

/** About the Client — headline + image + copy */
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
    <section className={SECTION_PAD} style={{ background: "#0D1B2A" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className={`${H2} mb-8 md:mb-10`}>{title}</h2>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {image && (
            <div className="lg:col-span-5">
              <div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden border"
                style={{ borderColor: "rgba(0,229,255,0.18)" }}
              >
                <Image
                  src={image}
                  alt={imageAlt || title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          )}
          <div className={image ? "lg:col-span-7" : "lg:col-span-12 max-w-3xl"}>
            <div className={BODY} style={MUTED}>
              <PortableText value={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** 2x2 numbered challenge cards */
export function CaseStudyChallengeGrid({ title, items }: { title: string; items: string[] }) {
  if (!items?.length) return null;
  return (
    <section className={SECTION_PAD} style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className={`${H2} mb-8 md:mb-10`}>{title}</h2>
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {items.map((text, index) => (
            <div
              key={index}
              className="rounded-2xl p-5 md:p-6 border"
              style={{
                background: "rgba(255, 180, 120, 0.06)",
                borderColor: "rgba(255, 180, 120, 0.18)",
              }}
            >
              <span
                className="text-lg font-extrabold mb-3 inline-block"
                style={{ color: "#00E5FF" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className={BODY} style={MUTED}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Dark numbered solutions grid */
export function CaseStudySolutionsGrid({ title, items }: { title: string; items: string[] }) {
  if (!items?.length) return null;
  return (
    <section className={SECTION_PAD} style={{ background: "#050910" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <div
          className="rounded-2xl border p-6 md:p-10"
          style={{ background: "#0A0F1F", borderColor: "rgba(0,229,255,0.15)" }}
        >
          <h2 className={`${H2} mb-8 md:mb-10`}>{title}</h2>
          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {items.map((text, index) => (
              <div
                key={index}
                className="rounded-2xl border p-5 md:p-6"
                style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
              >
                <span
                  className="text-2xl md:text-3xl font-extrabold mb-3 inline-block"
                  style={{ color: "#00E5FF" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className={`${BODY} text-white/90`}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Horizontal tech name row */
export function CaseStudyTechnologies({ items }: { items: string[] }) {
  if (!items?.length) return null;
  return (
    <section className={SECTION_PAD} style={{ background: "#0D1B2A" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className={`${H2} mb-8 md:mb-10 text-center`}>Technologies Used</h2>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {items.map((name) => (
            <div
              key={name}
              className="min-w-[120px] px-6 py-4 rounded-xl border text-center"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(0,229,255,0.18)",
              }}
            >
              <p className="text-base font-bold" style={MUTED}>
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Outcome cards grid */
export function CaseStudyOutcomesGrid({ title, items }: { title: string; items: string[] }) {
  if (!items?.length) return null;
  return (
    <section className={SECTION_PAD} style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className={`${H2} mb-8 md:mb-10`}>{title}</h2>
        <div
          className="rounded-2xl p-6 md:p-8 border"
          style={{
            background: "rgba(255, 200, 150, 0.06)",
            borderColor: "rgba(255, 200, 150, 0.15)",
          }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((text, index) => (
              <div
                key={index}
                className="rounded-xl border px-5 py-5 text-base leading-relaxed font-medium"
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

/** Client Feedback — quote mark left, text + attribution right */
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
    <section className={SECTION_PAD} style={{ background: "#0D1B2A" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <div
          className="rounded-2xl border grid md:grid-cols-[260px_1fr] overflow-hidden"
          style={{ background: "rgba(26,46,71,0.5)", borderColor: "rgba(0,229,255,0.15)" }}
        >
          <div
            className="p-6 md:p-8 border-b md:border-b-0 md:border-r flex flex-col"
            style={{ borderColor: "rgba(0,229,255,0.12)" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Client Feedback</h2>
            <span
              className="text-7xl font-serif leading-none mt-auto"
              style={{ color: "rgba(0,229,255,0.35)" }}
            >
              ”
            </span>
          </div>
          <div className="p-6 md:p-8">
            <div className={`${BODY} mb-6`} style={MUTED}>
              {typeof quote === "string" ? <p>{quote}</p> : <PortableText value={quote} />}
            </div>
            {author && (
              <p className="text-lg font-bold" style={{ color: "#00E5FF" }}>
                {author}
              </p>
            )}
            {role && (
              <p className="text-base mt-1" style={{ color: "#8FA3BF" }}>
                {role}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Explore More Case Studies */
export function CaseStudyMore({
  items,
}: {
  items: { slug: string; title: string; excerpt?: string; image?: string; imageAlt?: string }[];
}) {
  if (!items?.length) return null;
  return (
    <section className={SECTION_PAD} style={{ background: "#0A0F1F" }}>
      <div className="container-custom px-4 max-w-7xl mx-auto">
        <h2 className={`${H2} text-center mb-8 md:mb-10`}>Explore More Case Studies</h2>
        <div className="grid md:grid-cols-3 gap-5">
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
                className="group rounded-2xl border overflow-hidden transition-all hover:[border-color:rgba(0,229,255,0.35)]"
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
                      <p className="text-base font-bold text-white line-clamp-3">{item.title}</p>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-base font-bold text-white mb-3 line-clamp-3 group-hover:text-[#00E5FF] transition-colors">
                    {item.title}
                  </p>
                  <span
                    className="inline-flex items-center text-sm font-bold"
                    style={{ color: "#00E5FF" }}
                  >
                    View the Case Study
                    <ChevronRight className="w-4 h-4 ml-1" />
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
