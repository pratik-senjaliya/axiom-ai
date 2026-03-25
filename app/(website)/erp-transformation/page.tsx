import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { HorizontalFeature, HorizontalFeatureItem } from "@/components/services/HorizontalFeature";
import { FeatureGrid, FeatureItem } from "@/components/services/FeatureGrid";
import { FAQ } from "@/components/ui/FAQ";
import { DarkCTA } from "@/components/services/DarkCTA";
import { client } from "@/lib/sanity/client";
import { PortableText } from "@portabletext/react";

export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch(`*[_type == "erpTransformationPage"][0]{ seo }`);
  if (!data?.seo) return {
    title: "ERP Transformation | AxiomAI",
    description: "Microsoft Dynamics 365 implementations designed for business value, not just go-live.",
  };
  return {
    title: data.seo.metaTitle || "ERP Transformation | AxiomAI",
    description: data.seo.metaDescription || "Microsoft Dynamics 365 implementations designed for business value, not just go-live.",
  };
}

export default async function ERPTransformationPage() {
  const data = await client.fetch(`*[_type == "erpTransformationPage"][0]`);

  const hardcodedIcons = [
    (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
    (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  ];

  const erpServices: HorizontalFeatureItem[] = (data?.serviceAreas || []).map((service: any, index: number) => ({
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
        pills={["Dynamics 365 BC", "Dynamics 365 F&O", "ERP Migration", "Process Advisory"]}
        title={data?.title?.replace("Transformation", "").trim() || "ERP"}
        gradientTitlePart="Transformation"
        description={data?.description || "We design and deploy high-performance ERP ecosystems across Microsoft Dynamics 365, SAP S/4HANA, and Oracle NetSuite/Cloud."}
        primaryButtonText={data?.heroCTA?.text || "Get ERP Assessment"}
        primaryButtonLink={data?.heroCTA?.link || "/contact"}
        secondaryButtonText={data?.secondaryCTA?.text || "Talk to an Architect"}
        secondaryButtonLink="/services"
      />

      {erpServices.length > 0 && (
        <HorizontalFeature 
          items={erpServices}
          bgWhite={true}
        />
      )}

      {whyChooseUsItems.length > 0 && (
        <FeatureGrid 
          title="The AxiomAI Advantage"
          columns={3}
          items={whyChooseUsItems}
          bgWhite={false}
          small={true}
        />
      )}

      {faqs.length > 0 && (
        <section className="py-24 bg-white">
          <div className="container-custom px-4 max-w-4xl mx-auto">
            <FAQ items={faqs} title="Frequently Asked Questions" />
          </div>
        </section>
      )}

      <DarkCTA 
        title={data?.finalCTA?.title || "Stop Leaving ERP Value on the Table"}
        description={data?.finalCTA?.description || "Book a free strategy call. Get clarity on your Dynamics 365 or ERP modernization path."}
        buttonText={data?.finalCTA?.cta?.text || "Book Free Strategy Call"}
        useWhiteButton={true}
      />
    </div>
  );
}
