import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { HorizontalFeature, HorizontalFeatureItem } from "@/components/services/HorizontalFeature";
import { DarkCTA } from "@/components/services/DarkCTA";

export const metadata: Metadata = {
  title: "Managed Delivery | AxiomAI",
  description: "Flexible, high-performance engineering teams that scale with your enterprise ambitions.",
};

export default function ManagedDeliveryPage() {
  const deliveryServices: HorizontalFeatureItem[] = [
    {
      title: "Specialist Talent Augmentation",
      description: "Direct access to senior AI, ERP, and data engineers to plug critical skill gaps.",
      outcomeTitle: "Business Impact",
      outcomeDescription: "Immediate capacity and specialized expertise.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Managed Project Teams",
      description: "End-to-end delivery teams including project management, QA, and DevOps.",
      outcomeTitle: "Business Impact",
      outcomeDescription: "Outcome-focused delivery with reduced management overhead.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Offshore Delivery Centers",
      description: "High-quality, cost-effective engineering hubs tailored to your technical standards.",
      outcomeTitle: "Business Impact",
      outcomeDescription: "Significant cost reduction without quality compromise.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Agile Transformation Advisory",
      description: "Optimizing your internal delivery culture for speed, transparency, and quality.",
      outcomeTitle: "Business Impact",
      outcomeDescription: "Sustained improvement in delivery velocity.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <div className="pt-0 pb-0 bg-white">
      <ServiceHero 
        align="left"
        backLink={{ href: "/services", label: "Back to Services" }}
        pills={["Staff Augmentation", "Managed Teams", "Offshore Delivery", "Project Execution"]}
        title="Managed Delivery"
        description="Pre-vetted specialists and managed teams for your AI, ERP & Data projects. Fast, flexible, outcome-driven delivery that scales with your roadmap."
        primaryButtonText="Build Your Team"
        secondaryButtonText="View Case Studies"
      />

      {/* Built for Enterprise Speed - Metric Section */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="container-custom px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#26201D] mb-6">Built for Enterprise Speed</h2>
            <p className="text-lg text-neutral-500 leading-relaxed">We eliminate the friction of scaling technical teams, allowing you to focus on the roadmap.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-black text-[#FF821C] mb-4 tracking-tight">48-72h</div>
              <h3 className="text-xl font-bold text-[#26201D] mb-2 text-neutral-400">Shortlist Speed</h3>
              <p className="text-neutral-500">Average time to present pre-vetted specialists for technical interview.</p>
            </div>
            <div>
              <div className="text-5xl font-black text-[#FF821C] mb-4 tracking-tight">95%</div>
              <h3 className="text-xl font-bold text-[#26201D] mb-2 text-neutral-400">Pod Retention</h3>
              <p className="text-neutral-500">Long-term consistency across our managed delivery hub engagements.</p>
            </div>
            <div>
              <div className="text-5xl font-black text-[#FF821C] mb-4 tracking-tight">100%</div>
              <h3 className="text-xl font-bold text-[#26201D] mb-2 text-neutral-400">Sync Rate</h3>
              <p className="text-neutral-500">Timezone alignment and cultural integration for seamless collaboration.</p>
            </div>
          </div>
        </div>
      </section>

      <HorizontalFeature 
        items={deliveryServices}
        bgWhite={true}
      />

      <DarkCTA 
        title="Need the Right Talent, Fast?"
        description="Tell us what you need. We'll match you with specialists in 48 hours."
        buttonText="Book Free Consultation"
        useWhiteButton={true}
      />
    </div>
  );
}
