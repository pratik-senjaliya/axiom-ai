import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Use Cases | AxiomAI",
  description: "Real-world examples of our enterprise advisory impact.",
};

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="text-primary-500">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
  </svg>
);

export default function UseCasesPage() {
  const cases = [
    {
      title: "Demand Forecasting Engine",
      tools: "Azure ML, Power BI, Dynamics 365",
      approach: "Region-level predictive models with real-time data feeds.",
      impact: "25% improvement in forecast accuracy."
    },
    {
      title: "Executive Decision Dashboards",
      tools: "Power BI Premium, Azure Synapse, DAX",
      approach: "KPI-driven dashboards with AI-generated insights.",
      impact: "Real-time visibility into business performance."
    },
    {
      title: "Customer Analytics & Segmentation",
      tools: "Azure AI, Dynamics 365 Customer Insights, Power BI",
      approach: "ML-driven segmentation with predictive lifetime value models.",
      impact: "Improved targeting and personalization at scale."
    },
    {
      title: "Supply Chain Optimization",
      tools: "Azure Databricks, Dynamics 365 Supply Chain Management",
      approach: "End-to-end visibility models identifying bottlenecks and predicting delays.",
      impact: "18% reduction in inventory holding costs."
    }
  ];

  return (
    <div className="pt-24 pb-0">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-orange-50/40 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-multiply"></div>
        <div className="container-custom relative z-10 px-4">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-white/50 backdrop-blur-sm text-sm font-medium text-neutral-800 shadow-sm">
            <SparkleIcon />
            <span>Use Cases</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-[#26201D] max-w-4xl mx-auto">
            Success stories from the frontier
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10">
            Real-world results for enterprise leaders.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
             <button className="px-5 py-2 rounded-full bg-neutral-900 border border-neutral-900 text-white text-sm font-medium shadow-sm">All Cases</button>
             <button className="px-5 py-2 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50 text-sm font-medium shadow-sm transition-colors">Improve Operational Efficiency</button>
             <button className="px-5 py-2 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50 text-sm font-medium shadow-sm transition-colors">Reduce Manual Work</button>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 relative z-10">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((item, idx) => (
              <div key={idx} className="card p-10 bg-white border border-neutral-100 rounded-[2rem] hover:border-primary-200 transition-all shadow-sm hover:shadow-md flex flex-col items-start group">
                <div className="w-14 h-14 bg-[#FF821C] text-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-[#26201D] mb-8">{item.title}</h3>
                
                <div className="space-y-6 flex-grow mb-8 w-full">
                  <div>
                    <h4 className="text-xs font-bold text-[#FF821C] tracking-wider mb-2">TOOLS & TECH</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">{item.tools}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#FF821C] tracking-wider mb-2">APPROACH</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">{item.approach}</p>
                  </div>
                  <div className="pt-6 border-t border-neutral-100">
                    <h4 className="text-xs font-bold text-[#FF821C] tracking-wider mb-2">BUSINESS IMPACT</h4>
                    <p className="text-[#26201D] font-bold leading-relaxed">{item.impact}</p>
                  </div>
                </div>

                <Link href="/contact" className="flex items-center text-[#FF821C] font-semibold mt-auto group-hover:gap-2 transition-all">
                  Discuss This Use Case
                  <svg className="w-5 h-5 ml-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Layer */}
      <section className="py-24 relative overflow-hidden bg-[#26201D] mt-12">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>
        <div className="container-custom relative z-10 text-center flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-neutral-300">
            <SparkleIcon />
            <span>Partner With Us</span>
          </div>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-white mb-6">
            Face similar challenges?
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
            Let's talk about your strategic goals and how we can partner to achieve them.
          </p>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto px-8 h-14 text-base rounded-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF821C] to-[#AD58D9] text-white hover:opacity-90 transition-opacity shadow-md border-none">
              Book a Discovery Call
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
