import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Data & Analytics | AxiomAI",
  description: "Turning raw data into strategic advantage through modern data architecture.",
};

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="text-primary-500">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
  </svg>
);

export default function DataAnalyticsPage() {
  return (
    <div className="pt-24 pb-0">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-orange-50/40 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-multiply"></div>
        <div className="container-custom relative z-10 px-4">
          <Link href="/services" className="inline-flex items-center text-neutral-500 hover:text-neutral-800 font-medium mb-8 transition-colors text-sm">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Services
          </Link>
          <div className="mb-6 mx-auto inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-white/50 backdrop-blur-sm text-sm font-medium text-neutral-800 shadow-sm">
            <SparkleIcon />
            <span>Service Detail</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-[#26201D] max-w-4xl mx-auto">
            Data & Analytics
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto">
            Turning raw enterprise data into a strategic advantage. We design and implement modern data architectures that power autonomous AI.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 relative z-10">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#26201D] mb-6 tracking-tight">The foundation of true AI</h2>
              <p className="text-lg text-neutral-500 mb-6 leading-relaxed">
                You cannot deploy autonomous AI agents on top of fragmented, undocumented, or poor-quality data. Modern data strategy requires moving beyond traditional data warehouses to unified platforms.
              </p>
              <p className="text-lg text-neutral-500 leading-relaxed font-medium">
                AxiomAI helps enterprises design modern data stacks, establish rigorous governance, and build the foundational data models required for advanced analytics and AI.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="card bg-white border border-neutral-100 rounded-[2rem] p-8 shadow-sm flex flex-col justify-center">
                <div className="text-4xl font-black text-[#FF821C] mb-2">85%</div>
                <div className="text-sm font-medium text-neutral-500 leading-relaxed">Of AI projects fail due to poor data foundations</div>
              </div>
              <div className="card bg-white border border-neutral-100 rounded-[2rem] p-8 shadow-sm translate-y-8 flex flex-col justify-center">
                <div className="text-4xl font-black text-[#FF821C] mb-2">10x</div>
                <div className="text-sm font-medium text-neutral-500 leading-relaxed">ROI achieved by leaders with unified data structures</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-white relative z-10 border-t border-neutral-100">
        <div className="container-custom px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-[2.5rem] tracking-tight font-bold text-[#26201D] mb-6">Core Capabilities</h2>
            <p className="text-lg text-neutral-500 leading-relaxed">
              We design robust pipelines and architectures that turn isolated datasets into unified intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-10 bg-white border border-neutral-100 rounded-[2rem] hover:border-primary-200 transition-all shadow-sm hover:shadow-md">
              <div className="w-14 h-14 bg-[#FFF2E5] text-[#FF821C] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#26201D] mb-3">Modern Architecture</h3>
              <p className="text-neutral-500 leading-relaxed">Designing scalable data lakes, lakehouses, and warehouses on modern cloud infrastructures.</p>
            </div>
            
            <div className="card p-10 bg-white border border-neutral-100 rounded-[2rem] hover:border-primary-200 transition-all shadow-sm hover:shadow-md">
              <div className="w-14 h-14 bg-[#FFF2E5] text-[#FF821C] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H4a2 2 0 00-2 2v6a2 2 0 002 2h3a2 2 0 002-2zm0 0V9a2 2 0 012-2h3a2 2 0 012 2v10m-6 0a2 2 0 002 2h3a2 2 0 002-2m0 0V5a2 2 0 012-2h3a2 2 0 012 2v14a2 2 0 01-2 2h-3a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#26201D] mb-3">Data Governance</h3>
              <p className="text-neutral-500 leading-relaxed">Establishing data dictionaries, quality checks, and governance structures to ensure enterprise trust.</p>
            </div>

            <div className="card p-10 bg-white border border-neutral-100 rounded-[2rem] hover:border-primary-200 transition-all shadow-sm hover:shadow-md">
              <div className="w-14 h-14 bg-[#FFF2E5] text-[#FF821C] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#26201D] mb-3">AI Readiness</h3>
              <p className="text-neutral-500 leading-relaxed">Structuring unorganized and unstructured data to be consumed effectively by LLMs and predictive models.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Layer */}
      <section className="py-24 relative overflow-hidden bg-[#26201D] mt-12">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>
        <div className="container-custom relative z-10 text-center flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-neutral-300">
            <SparkleIcon />
            <span>Unlock Your Data</span>
          </div>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-white mb-6">
            Prepare your data for the AI era
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
            Let's assess your current infrastructure and map the journey to an intelligence-ready architecture.
          </p>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto px-8 h-14 text-base rounded-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF821C] to-[#AD58D9] text-white hover:opacity-90 transition-opacity shadow-md border-none">
              Schedule an Assessment
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
