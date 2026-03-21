import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "ERP Transformation | AxiomAI",
  description: "Strategic guidance for complex enterprise resource planning implementations and migrations.",
};

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="text-primary-500">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
  </svg>
);

export default function ERPTransformationPage() {
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
            ERP Transformation
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto">
            Strategic guidance for complex enterprise resource planning implementations and migrations. We ensure your system architecture aligns with your business goals.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 relative z-10">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#26201D] mb-6 tracking-tight">Navigating the complexity of ERP</h2>
              <p className="text-lg text-neutral-500 mb-6 leading-relaxed">
                Implementing or upgrading an ERP system is one of the most high-risk, high-reward initiatives an enterprise can undertake. 
                Without proper strategic alignment, projects often run over budget, miss deadlines, and fail to deliver the promised value.
              </p>
              <p className="text-lg text-neutral-500 leading-relaxed font-medium">
                AxiomAI provides independent, vendor-agnostic advisory services to help you select the right platform, design the optimal architecture, and govern the implementation process.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="card bg-white border border-neutral-100 rounded-[2rem] p-8 shadow-sm flex flex-col justify-center">
                <div className="text-4xl font-black text-[#FF821C] mb-2">70%</div>
                <div className="text-sm font-medium text-neutral-500 leading-relaxed">Of ERP projects fail to meet their original objectives</div>
              </div>
              <div className="card bg-white border border-neutral-100 rounded-[2rem] p-8 shadow-sm translate-y-8 flex flex-col justify-center">
                <div className="text-4xl font-black text-[#FF821C] mb-2">2.5x</div>
                <div className="text-sm font-medium text-neutral-500 leading-relaxed">Average cost overrun on enterprise deployments</div>
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
              We guide organizations through every phase of the ERP lifecycle, from initial strategy to post-go-live optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-10 bg-white border border-neutral-100 rounded-[2rem] hover:border-primary-200 transition-all shadow-sm hover:shadow-md">
              <div className="w-14 h-14 bg-[#FFF2E5] text-[#FF821C] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#26201D] mb-3">System Selection</h3>
              <p className="text-neutral-500 leading-relaxed">Independent evaluation of tier-1 and tier-2 ERP vendors against your specific business requirements and technical architecture.</p>
            </div>
            
            <div className="card p-10 bg-white border border-neutral-100 rounded-[2rem] hover:border-primary-200 transition-all shadow-sm hover:shadow-md">
              <div className="w-14 h-14 bg-[#FFF2E5] text-[#FF821C] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#26201D] mb-3">Architecture Design</h3>
              <p className="text-neutral-500 leading-relaxed">Designing the future-state technical architecture, including integration patterns, data flows, and infrastructure requirements.</p>
            </div>

            <div className="card p-10 bg-white border border-neutral-100 rounded-[2rem] hover:border-primary-200 transition-all shadow-sm hover:shadow-md">
              <div className="w-14 h-14 bg-[#FFF2E5] text-[#FF821C] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#26201D] mb-3">Implementation Governance</h3>
              <p className="text-neutral-500 leading-relaxed">Protecting your interests throughout the deployment with rigorous program management and quality assurance over vendor delivery.</p>
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
            <span>Ensure Success</span>
          </div>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-white mb-6">
            Ensure your ERP success
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
            Before committing millions to a new platform, let's discuss how to structure your program for success.
          </p>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto px-8 h-14 text-base rounded-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF821C] to-[#AD58D9] text-white hover:opacity-90 transition-opacity shadow-md border-none">
              Schedule an Advisory Call
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
