import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FeatureGrid, FeatureItem } from "@/components/services/FeatureGrid";
import { LightCTA } from "@/components/services/LightCTA";
import { client } from "@/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import { FAQ } from "@/components/ui/FAQ";

export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch(`*[_type == "aiImplementationPage"][0]{ seo }`);
  if (!data?.seo) return {
    title: "AI Implementation & Strategy | AxiomAI",
    description: "From Generative AI to Agentic and Autonomous Systems — we design production-ready AI platforms.",
  };
  return {
    title: data.seo.metaTitle || "AI Implementation & Strategy | AxiomAI",
    description: data.seo.metaDescription || "From Generative AI to Agentic and Autonomous Systems — we design production-ready AI platforms.",
  };
}

const PitfallItem = ({ title, description }: { title: string; description: string }) => (
  <div className="flex items-start gap-5 p-6 bg-white border border-neutral-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500 shrink-0 mt-1">
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    </div>
    <div>
      <h3 className="text-[#26201D] font-bold mb-1">{title}</h3>
      <p className="text-neutral-500 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const BrainIcon = () => (
  <svg className="w-4 h-4 text-[#FF821C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9.5 2A1.5 1.5 0 0 0 8 3.5V6a2 2 0 0 1-2 2h-2.5A1.5 1.5 0 0 0 2 9.5v5A1.5 1.5 0 0 0 3.5 16H6a2 2 0 0 1 2 2v2.5A1.5 1.5 0 0 0 9.5 22h5a1.5 1.5 0 0 0 1.5-1.5V18a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 20.5 8H18a2 2 0 0 1-2-2V3.5A1.5 1.5 0 0 0 14.5 2h-5z" />
    <path d="M12 8v8" />
    <path d="M8 12h8" />
  </svg>
);

export default async function AIImplementationPage() {
  const data = await client.fetch(`*[_type == "aiImplementationPage"][0]`);

  const pitfallItems = data?.whyChooseUs || [];

  const aiLayers: FeatureItem[] = (data?.serviceAreas || []).map((layer: any) => ({
    title: layer.name,
    outcomeTitle: "Business Value",
    outcomeDescription: <p>{layer.focus}</p>
  }));

  const useCases: FeatureItem[] = (data?.industryUseCases || []).map((uc: any) => ({
    title: uc.title,
    description: uc.description,
  }));

  const roadmapSteps: FeatureItem[] = (data?.process || []).map((step: any, index: number) => ({
    stepNumber: index + 1,
    title: step.title,
    description: step.description,
  }));

  const engagementModels = (data?.engagement?.models || []).map((model: any, index: number) => {
    // Keep matching the hardcoded icons by index since Sanity doesn't store SVGs directly here
    const hardcodedIcons = [
      (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      ),
      (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 21v-7H6l9-12v7h5l-9 12z" />
        </svg>
      ),
      (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path d="M4 7L12 3L20 7L12 11L4 7Z" />
          <path d="M4 12L12 16L20 12" />
          <path d="M4 17L12 21L20 17" />
        </svg>
      ),
      (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    ];
    return {
      title: model.title,
      description: model.description,
      icon: hardcodedIcons[index % hardcodedIcons.length]
    };
  });

  const faqs = (data?.faqs || []).map((faq: any) => ({
    question: faq.question,
    answer: <PortableText value={faq.answer} />
  }));

  return (
    <div className="pt-0 pb-0 bg-white">
      <ServiceHero 
        badgeText={data?.hero?.badge || "Enterprise AI Platform"}
        badgeIcon={<BrainIcon />}
        title={data?.title || data?.hero?.headline?.replace("Measurable Business Value", "").trim() || "Turn AI Into"}
        gradientTitlePart={data?.hero?.headline?.includes("Measurable Business Value") ? "Measurable Business Value" : ""}
        description={data?.description || data?.hero?.subHeadline || "From Generative AI to Agentic and Autonomous Systems — we design production-ready AI platforms that integrate with enterprise systems and deliver real operational impact."}
        primaryButtonText={data?.hero?.primaryButtonText || "Start AI Pilot"}
        secondaryButtonText={data?.hero?.secondaryButtonText || "Book Strategy Call"}
      />

      {/* Why AI Initiatives Stall Section */}
      <section className="pb-24 bg-[#FAF8F5]">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#26201D] mb-4 tracking-tight">{data?.intro?.headline || "Why AI Initiatives Stall"}</h2>
            <p className="text-neutral-500 mb-12 italic">{data?.intro?.subHeadline || "Recognise the pattern. Then break it."}</p>
            <div className="grid gap-4 text-left max-w-2xl mx-auto">
              {pitfallItems.map((pitfall: any, idx: number) => (
                <PitfallItem key={idx} title={pitfall.title} description={pitfall.description} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <FeatureGrid 
        title={data?.layers?.headline || "Our Enterprise AI Stack"}
        description={data?.layers?.subHeadline || "Four integrated layers — from generative intelligence to autonomous decision-making."}
        columns={2}
        items={aiLayers.length > 0 ? aiLayers : []}
        small={true}
        bgWhite={true}
      />

      <FeatureGrid 
        title={data?.useCases?.headline || "Industry Use Cases with POC Model"}
        description={data?.useCases?.subHeadline || "Proven starting points. Each scoped for a 6–8 week proof of concept."}
        columns={2}
        items={useCases.length > 0 ? useCases : []}
        bgWhite={false}
        small={true}
      />

      <FeatureGrid 
        title={data?.roadmap?.headline || "From Pilot to Platform"}
        description={data?.roadmap?.subHeadline || "A structured path from proof-of-concept to enterprise-wide deployment."}
        items={roadmapSteps.length > 0 ? roadmapSteps : []}
        isRoadmap={true}
        bgWhite={true}
        small={true}
      />

      {/* Minimal Deployment Models */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="container-custom px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#26201D]">
            {data?.engagement?.headline || "Deployment Models"}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 max-w-5xl mx-auto">
            {engagementModels.map((item: any, index: number) => (
              <div key={index} className="flex flex-col items-center text-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-[#FF821C] flex items-center justify-center text-white shadow-[0_8px_16px_rgba(255,130,28,0.2)] transition-transform group-hover:scale-110 duration-300">
                  {item.icon}
                </div>
                <span className="font-bold text-base text-[#26201D] leading-[1.3] max-w-[180px]">
                  {item.title}
                </span>
                <p className="text-sm text-neutral-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      {faqs.length > 0 && (
        <section className="py-24 bg-white">
          <div className="container-custom px-4 max-w-4xl mx-auto">
            <FAQ items={faqs} title="Frequently Asked Questions" />
          </div>
        </section>
      )}

      <LightCTA 
        title={data?.finalCTA?.title || "Stop Experimenting. Start Implementing."}
        description={data?.finalCTA?.description || "Book a strategy session to see how we can turn your data into an autonomous competitive advantage."}
        primaryButtonText={data?.finalCTA?.cta?.text || "Schedule Executive Discussion"}
        primaryButtonLink={data?.finalCTA?.cta?.link || "/contact"}
      />
    </div>
  );
}
