import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { HorizontalFeature, HorizontalFeatureItem } from "@/components/services/HorizontalFeature";
import { FeatureGrid, FeatureItem } from "@/components/services/FeatureGrid";
import { FAQ } from "@/components/ui/FAQ";
import { DarkCTA } from "@/components/services/DarkCTA";
import { client } from "@/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch(`*[_type == "managedDeliveryPage"][0]{ seo }`);
  if (!data?.seo) return {
    title: "Managed Delivery | AxiomAI",
    description: "Flexible, high-performance engineering teams that scale with your enterprise ambitions.",
  };
  return {
    title: data.seo.metaTitle || "Managed Delivery | AxiomAI",
    description: data.seo.metaDescription || "Flexible, high-performance engineering teams that scale with your enterprise ambitions.",
  };
}

export default async function ManagedDeliveryPage() {
  const data = await client.fetch(`*[_type == "managedDeliveryPage"][0]`);
  if (!data) notFound();

  const hardcodedIcons = [
    (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  ];

  const deliveryServices: HorizontalFeatureItem[] = (data?.serviceAreas || []).map((service: any, index: number) => ({
    title: service.name,
    description: service.focus,
    outcomeTitle: service.sections?.[0]?.title || "",
    outcomeDescription: service.sections?.[0]?.tasks?.[0] || "",
    icon: hardcodedIcons[index % hardcodedIcons.length]
  }));

  const whyChooseUsItems: FeatureItem[] = (data?.whyChooseUs || []).map((item: any) => ({
    title: item.title,
    description: item.description,
  }));

  const faqs = (data?.faqs || []).map((faq: any) => ({
    question: faq.question,
    answer: <PortableText value={faq.answer} />
  }));

  return (
    <div className="pt-0 pb-0">
      <ServiceHero 
        backLink={{ href: "/services", label: "Back to Services" }}
        pills={["Staff Augmentation", "Managed Teams", "Offshore Delivery", "Project Execution"]}
        title={data?.introTitle?.replace("Delivery", "").trim() || data?.title?.replace("Delivery", "").trim()}
        gradientTitlePart="Delivery"
        description={data?.description || data?.hero?.subHeadline}
        primaryButtonText={data?.heroCTA?.text}
        primaryButtonLink={data?.heroCTA?.link}
        secondaryButtonText={data?.secondaryCTA?.text}
        secondaryButtonLink={data?.secondaryCTA?.link}
      />

      {deliveryServices.length > 0 && (
        <HorizontalFeature 
          items={deliveryServices}
          bgWhite={true}
        />
      )}

      {whyChooseUsItems.length > 0 && (
        <FeatureGrid 
          title={data?.whyChooseSectionTitle}
          columns={3}
          items={whyChooseUsItems}
          bgWhite={false}
          small={true}
        />
      )}

      {faqs.length > 0 && (
        <section className="py-24 bg-white">
          <div className="container-custom px-4 max-w-4xl mx-auto">
            <FAQ items={faqs} title={data?.faqSectionTitle} />
          </div>
        </section>
      )}

      <DarkCTA 
        title={data?.finalCTA?.title}
        description={data?.finalCTA?.description}
        buttonText={data?.finalCTA?.cta?.text}
        buttonHref={data?.finalCTA?.cta?.link}
        useWhiteButton={true}
      />
    </div>
  );
}
