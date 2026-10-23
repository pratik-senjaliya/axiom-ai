import type { Metadata } from "next";
import { PortableText } from "@/components/ui/PortableText";
import { getAboutPage } from "@/lib/sanity/queries";
import { notFound } from "next/navigation";
import { FeatureGrid, FeatureItem } from "@/components/services/FeatureGrid";
import { ServiceHero } from "@/components/services/ServiceHero";
import { DarkCTA } from "@/components/services/DarkCTA";
import { Eyebrow, RichText, Section } from "@/components/ui/kit";

import { generateMetadata as genMeta, getSiteUrl } from "@/lib/seo";
import { InnerPageSchemas } from "@/components/seo/PageSchemas";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAboutPage();
  const defaultTitle = "About SyncOrigins - Driving Innovation with AI Solutions";
  const defaultDesc = "Learn about SyncOrigins, our mission, expertise, and commitment to delivering AI-driven solutions that transform businesses and accelerate growth.";

  if (!data?.seo) return genMeta({
    title: defaultTitle,
    description: defaultDesc,
    slug: "/about",
  });
  return genMeta({
    title: data.seo.metaTitle || defaultTitle,
    description: data.seo.metaDescription || defaultDesc,
    keywords: data.seo.metaKeywords,
    ogImage: data.seo.openGraphImage,
    slug: "/about",
  });
}

export default async function AboutPage() {
  const data = await getAboutPage();
  if (!data) notFound();

  const capabilitiesItems: FeatureItem[] = (data?.capabilities || []).map((cap: any) => ({
    title: cap.title,
    description: cap.description,
  }));

  const whyUsItems: FeatureItem[] = (data?.whyUsPoints || []).map((v: any) => ({
    title: v.title,
    description: v.description,
  }));

  return (
    <div className="bg-ink-900">
      <InnerPageSchemas
        title={data?.seo?.metaTitle || "About SyncOrigins - Driving Innovation with AI Solutions"}
        description={data?.seo?.metaDescription || "Learn about SyncOrigins, our mission, expertise, and commitment to delivering AI-driven solutions that transform businesses and accelerate growth."}
        url={`${getSiteUrl()}/about`}
        breadcrumbs={[
          { name: "Home", item: `${getSiteUrl()}/` },
          { name: "About", item: `${getSiteUrl()}/about` },
        ]}
      />

      {/* ── Hero ── */}
      <ServiceHero
        badgeText={data?.hero?.badge || "About Us"}
        title={data?.hero?.title || "Where Enterprise Systems Become"}
        gradientTitlePart={data?.hero?.titleHighlight || "Intelligent"}
        description={data?.hero?.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* ── Who We Are ── */}
      {data?.whoWeAreHeadline && (
        <Section tone="base">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="reveal lg:sticky lg:top-28">
                <Eyebrow className="mb-5">Who we are</Eyebrow>
                <h2 className="h-section">{data.whoWeAreHeadline}</h2>
              </div>
            </div>
            <div className="reveal lg:col-span-7">
              <RichText value={data.whoWeAreBody} className="lead [&_li]:mb-2 [&_p]:mb-6" />
            </div>
          </div>
        </Section>
      )}

      {/* ── Philosophy ── */}
      {data?.philosophyHeadline && (
        <Section tone="raised">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="reveal lg:sticky lg:top-28">
                <Eyebrow className="mb-5">Our philosophy</Eyebrow>
                <h3 className="h-section">{data.philosophyHeadline}</h3>
              </div>
            </div>
            <div className="reveal lg:col-span-7">
              <div className="about-philosophy copy">
                <PortableText value={data.philosophyBody} />
              </div>
            </div>
          </div>

          {data.philosophyPrinciple && (
            <figure className="panel-accent reveal relative mt-16 overflow-hidden px-8 py-12 sm:px-14 sm:py-16 lg:mt-20">
              <div
                aria-hidden
                className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(0,229,255,0.2), transparent 70%)" }}
              />
              <span aria-hidden className="absolute right-8 top-2 font-display text-[8rem] leading-none text-accent/15 sm:right-14">
                &rdquo;
              </span>
              <blockquote className="relative max-w-4xl font-display text-2xl font-medium leading-snug tracking-tight text-fg sm:text-3xl lg:text-[2.25rem]">
                {data.philosophyPrinciple}
              </blockquote>
            </figure>
          )}
        </Section>
      )}

      {/* ── What We Do ── */}
      {capabilitiesItems.length > 0 && (
        <FeatureGrid
          eyebrow="What we do"
          title={data.whatWeDoHeadline}
          description={data.whatWeDoIntro}
          items={capabilitiesItems}
          columns={2}
          bgWhite={false}
          titleAs="h3"
        />
      )}

      {/* ── Why Us ── */}
      {whyUsItems.length > 0 && (
        <FeatureGrid
          eyebrow="Why SyncOrigins"
          title={data.whyUsHeadline}
          items={whyUsItems}
          columns={2}
          bgWhite={true}
          titleAs="h4"
        />
      )}

      {data.visionStatement && (
        <Section tone={whyUsItems.length > 0 ? "raised" : "base"} className="!pt-0">
          <div className="reveal grid gap-8 border-t border-line pt-16 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow>Our vision</Eyebrow>
            </div>
            <RichText
              value={data.visionStatement}
              className="font-display text-2xl font-medium leading-snug tracking-tight text-fg sm:text-[1.75rem] lg:col-span-8"
            />
          </div>
        </Section>
      )}

      {/* ── Final CTA ── */}
      {data?.ctaHeadline && (
        <DarkCTA
          title={data.ctaHeadline}
          buttonText={data.ctaOptions?.[0]?.text}
          buttonHref={data.ctaOptions?.[0]?.link || "/contact"}
          secondaryActions={(data.ctaOptions || []).slice(1)}
          footnote={data.ctaClosing}
        />
      )}
    </div>
  );
}
