import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FeatureGrid, FeatureItem } from "@/components/services/FeatureGrid";
import { LightCTA } from "@/components/services/LightCTA";

export const metadata: Metadata = {
  title: "AI for Sustainable Operations | AxiomAI",
  description: "Use AI and enterprise data to improve carbon visibility, reporting accuracy, and operational efficiency.",
};

const ObstacleItem = ({ title, text }: { title: string; text: string }) => (
  <div className="bg-[#FFF5F5] p-8 rounded-[2rem] border border-[#FEE2E2] shadow-sm hover:shadow-md transition-all group">
    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-[#26201D] mb-3">{title}</h3>
    <p className="text-neutral-600 text-sm leading-relaxed">{text}</p>
  </div>
);

export default function SustainabilityPage() {
  const serviceItems: FeatureItem[] = [
    {
      title: "Carbon Visibility Dashboard",
      description: "Real-time tracking of emissions across Scope 1, 2, and 3 with direct ERP integration.",
      outcomeTitle: "Business Impact",
      outcomeDescription: "Improve transparency and reporting accuracy.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "ESG Reporting Automation",
      description: "Automated, audit-ready ESG reporting aligned to global transparency standards (CSRD, SEC).",
      outcomeTitle: "Business Impact",
      outcomeDescription: "Reduce reporting effort and compliance risk.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Emission Forecasting",
      description: "ML-powered models to simulate the impact of operational changes on your future carbon footprint.",
      outcomeTitle: "Business Impact",
      outcomeDescription: "Support better planning and resource allocation.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Green Supply Chain Insights",
      description: "Identifying high-emission nodes in your vendor network for targeted reduction strategies.",
      outcomeTitle: "Business Impact",
      outcomeDescription: "Improve supplier evaluation and long-term sustainability planning.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    }
  ];

  const methodologySteps: FeatureItem[] = [
    {
      stepNumber: 1,
      title: "Limited-scope dashboard or reporting prototype",
      description: "Connecting to 1–2 key data sources to prove visibility in week 2."
    },
    {
      stepNumber: 2,
      title: "6–8 week pilot engagement",
      description: "Deploying a targeted AI optimization in one facility to prove immediate impact."
    },
    {
      stepNumber: 3,
      title: "Defined success metrics before scale",
      description: "Establishing clear carbon and cost-saving KPIs to justify further investment."
    },
    {
      stepNumber: 4,
      title: "Expand only if ROI is clear",
      description: "Scaling the proven model across the enterprise with absolute confidence."
    }
  ];

  const engagementModels = [
    {
      title: "Sustainability Readiness Assessment",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "AI-Powered Pilot",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 21v-7H6l9-12v7h5l-9 12z" />
        </svg>
      )
    },
    {
      title: "Gradual Enterprise Rollout",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path d="M4 7L12 3L20 7L12 11L4 7Z" />
          <path d="M4 12L12 16L20 12" />
          <path d="M4 17L12 21L20 17" />
        </svg>
      )
    },
    {
      title: "Optional Subscription Model",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ];

  return (
    <div className="pt-0 pb-0 bg-white">
      <ServiceHero 
        badgeText="AI for Sustainable Operations"
        title="Make Sustainability"
        gradientTitlePart="Operational and Measurable"
        description="Use AI and enterprise data to improve carbon visibility, reporting accuracy, and operational efficiency."
        primaryButtonText="Explore Sustainability Pilot"
      />

      {/* Obstacles Section */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="container-custom px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#26201D] mb-6">Why Sustainability Efforts Struggle</h2>
            <p className="text-lg text-neutral-500">Traditional reporting can't keep up with the demands of modern enterprise green targets.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ObstacleItem 
              title="Manual ESG and carbon reporting" 
              text="Relying on spreadsheets and manual data entry leads to errors and significant audit risks." 
            />
            <ObstacleItem 
              title="Emission data scattered across systems" 
              text="Sustainability data is often siloed across utility bills, ERP systems, and vendor emails." 
            />
            <ObstacleItem 
              title="Limited operational visibility" 
              text="Lack of real-time tracking makes it impossible to react to emission spikes or energy waste." 
            />
            <ObstacleItem 
              title="No measurable ROI tracking" 
              text="Sustainability is seen as a cost center rather than an efficiency and value driver." 
            />
          </div>
        </div>
      </section>

      <FeatureGrid 
        title="Sustainable AI Modules"
        description="Combining deep data engineering with specialized AI agents to accelerate your journey to Net Zero."
        columns={2}
        items={serviceItems}
        bgWhite={true}
        small={true}
      />

      <FeatureGrid 
        title="Start Small, Measure Impact"
        description="Our proven 4-step approach to moving from fragmented data to autonomous optimization."
        items={methodologySteps}
        isRoadmap={true}
        bgWhite={false}
        small={true}
      />

      {/* Deployment Approach */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="container-custom px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#26201D]">
            Deployment Approach
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 max-w-5xl mx-auto">
            {engagementModels.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-[#FF821C] flex items-center justify-center text-white shadow-[0_8px_16px_rgba(255,130,28,0.2)] transition-transform group-hover:scale-110 duration-300">
                  {item.icon}
                </div>
                <span className="font-bold text-base text-[#26201D] leading-[1.3] max-w-[180px]">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LightCTA 
        title="Explore Practical Sustainability Innovation"
        description="Start with visibility. Scale with confidence."
        primaryButtonText="Schedule Sustainability Discussion"
      />
    </div>
  );
}
