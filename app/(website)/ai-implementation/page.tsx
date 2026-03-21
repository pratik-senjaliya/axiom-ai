import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FeatureGrid, FeatureItem } from "@/components/services/FeatureGrid";
import { LightCTA } from "@/components/services/LightCTA";

export const metadata: Metadata = {
  title: "AI Implementation & Strategy | AxiomAI",
  description: "From Generative AI to Agentic and Autonomous Systems — we design production-ready AI platforms.",
};

const PitfallItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-5 p-6 bg-white border border-neutral-100 rounded-2xl text-[#26201D] font-medium shadow-sm hover:shadow-md transition-shadow">
    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500 shrink-0">
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    </div>
    {text}
  </div>
);

const BrainIcon = () => (
  <svg className="w-4 h-4 text-[#FF821C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9.5 2A1.5 1.5 0 0 0 8 3.5V6a2 2 0 0 1-2 2h-2.5A1.5 1.5 0 0 0 2 9.5v5A1.5 1.5 0 0 0 3.5 16H6a2 2 0 0 1 2 2v2.5A1.5 1.5 0 0 0 9.5 22h5a1.5 1.5 0 0 0 1.5-1.5V18a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 20.5 8H18a2 2 0 0 1-2-2V3.5A1.5 1.5 0 0 0 14.5 2h-5z" />
    <path d="M12 8v8" />
    <path d="M8 12h8" />
  </svg>
);

export default function AIImplementationPage() {
  const aiLayers: FeatureItem[] = [
    {
      badge: "Layer 1",
      title: "Generative AI & RAG",
      bullets: [
        "Enterprise copilots",
        "Retrieval-Augmented Generation (RAG) knowledge assistants",
        "Document intelligence and workflow automation"
      ],
      outcomeTitle: "Business Outcome",
      outcomeDescription: "Faster decisions, reduced manual workload, better use of enterprise knowledge."
    },
    {
      badge: "Layer 2",
      title: "Agentic AI",
      bullets: [
        "Task-driven AI agents",
        "Multi-agent workflow orchestration",
        "Intelligent process automation"
      ],
      outcomeTitle: "Business Outcome",
      outcomeDescription: "Improved operational speed and reduced human intervention in repetitive processes."
    },
    {
      badge: "Layer 3",
      title: "Autonomous AI Systems",
      bullets: [
        "Predictive planning engines",
        "Self-optimizing scheduling",
        "AI-driven decision support systems"
      ],
      outcomeTitle: "Business Outcome",
      outcomeDescription: "Higher forecast accuracy, proactive planning, reduced cost leakage."
    },
    {
      badge: "Layer 4",
      title: "AI Governance & Observability",
      bullets: [
        "Model monitoring dashboards",
        "Audit logs and compliance controls",
        "KPI tracking and ROI measurement"
      ],
      outcomeTitle: "Business Outcome",
      outcomeDescription: "Accountable, scalable, and secure enterprise AI deployment."
    }
  ];

  const useCases: FeatureItem[] = [
    {
      useCaseLabel: "MANUFACTURING",
      title: "AI Production Scheduling Agent",
      description: "Optimizing shop floor throughput and material allocation using autonomous agentic workflows.",
      pocText: "6-week ERP-integrated pilot",
      impactText: "Reduce planning cycle time and improve delivery reliability."
    },
    {
      useCaseLabel: "FINANCIAL SERVICES",
      title: "Regulatory Knowledge Assistant",
      description: "RAG-based systems for high-precision compliance auditing and document review automation.",
      pocText: "Compliance chatbot prototype",
      impactText: "Reduce manual review workload and improve response time."
    },
    {
      useCaseLabel: "RETAIL",
      title: "Demand Forecasting Autonomous Engine",
      description: "Self-correcting forecasting models that react to live market signals and inventory shifts.",
      pocText: "Region-level forecasting pilot",
      impactText: "Improve forecast accuracy and reduce stock imbalance."
    },
    {
      useCaseLabel: "SUPPLY CHAIN",
      title: "Vendor Risk Prediction Agent",
      description: "Multi-agent framework monitoring global risk signals and supplier reliability in real-time.",
      pocText: "AI monitoring dashboard for top suppliers",
      impactText: "Early disruption alerts and improved resilience."
    }
  ];

  const roadmapSteps: FeatureItem[] = [
    {
      stepNumber: 1,
      title: "6–8 week proof-of-concept focus",
    },
    {
      stepNumber: 2,
      title: "Defined measurable KPIs before deployment",
    },
    {
      stepNumber: 3,
      title: "ERP & Enterprise Integration strategy",
    },
    {
      stepNumber: 4,
      title: "Enterprise-wide rollout with Governance",
    },
    {
      stepNumber: 5,
      title: "Continuous ROI monitoring & support",
    }
  ];

  const engagementModels = [
    {
      title: "Strategic AI Roadmap Advisory",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "6–8 Week AI Pilot",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 21v-7H6l9-12v7h5l-9 12z" />
        </svg>
      )
    },
    {
      title: "Enterprise Rollout",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path d="M4 7L12 3L20 7L12 11L4 7Z" />
          <path d="M4 12L12 16L20 12" />
          <path d="M4 17L12 21L20 17" />
        </svg>
      )
    },
    {
      title: "Subscription-based AI Platform",
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
        badgeText="Enterprise AI Platform"
        badgeIcon={<BrainIcon />}
        title="Turn AI Into"
        gradientTitlePart="Measurable Business Value"
        description="From Generative AI to Agentic and Autonomous Systems — we design production-ready AI platforms that integrate with enterprise systems and deliver real operational impact."
        primaryButtonText="Start AI Pilot"
        secondaryButtonText="Book Strategy Call"
      />

      {/* Why AI Initiatives Stall Section */}
      <section className="pb-24 bg-[#FAF8F5]">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#26201D] mb-4 tracking-tight">Why AI Initiatives Stall</h2>
            <p className="text-neutral-500 mb-12 italic">Recognise the pattern. Then break it.</p>
            <div className="grid gap-4 text-left max-w-2xl mx-auto">
              <PitfallItem text="LLM experiments without production roadmap" />
              <PitfallItem text="RAG systems disconnected from core workflows" />
              <PitfallItem text="No ERP or enterprise data integration" />
              <PitfallItem text="Lack of governance, monitoring, and ROI tracking" />
              <PitfallItem text="Pilots that never scale beyond the initial 'chat' interface" />
            </div>
          </div>
        </div>
      </section>

      <FeatureGrid 
        title="Our Enterprise AI Stack"
        description="Four integrated layers — from generative intelligence to autonomous decision-making."
        columns={2}
        items={aiLayers}
        small={true}
        bgWhite={true}
      />

      <FeatureGrid 
        title="Industry Use Cases with POC Model"
        description="Proven starting points. Each scoped for a 6–8 week proof of concept."
        columns={2}
        items={useCases}
        bgWhite={false}
        small={true}
      />

      <FeatureGrid 
        title="From Pilot to Platform"
        description="A structured path from proof-of-concept to enterprise-wide deployment."
        items={roadmapSteps}
        isRoadmap={true}
        bgWhite={true}
        small={true}
      />

      {/* Minimal Deployment Models */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="container-custom px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#26201D]">
            Deployment Models
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
        title="Design Your AI Roadmap with Clear ROI"
        description="Start small. Measure impact. Scale with confidence."
        primaryButtonText="Start AI Pilot"
        secondaryButtonText="Schedule Executive Discussion"
      />
    </div>
  );
}
