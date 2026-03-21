import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Managed Delivery | AxiomAI",
  description: "End-to-end execution of complex technology initiatives.",
};

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="text-primary-500">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
  </svg>
);

export default function ManagedDeliveryPage() {
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
            Managed Delivery
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto">
            End-to-end execution of complex technology initiatives. From architecture design to production release, we take ownership of results.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 relative z-10">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#26201D] mb-6 tracking-tight">Certainty in execution</h2>
              <p className="text-lg text-neutral-500 mb-6 leading-relaxed">
                Strategy without execution is merely an illusion. When you need absolute certainty that a complex, high-stakes system will be delivered on time and architecture, you need proactive managed delivery.
              </p>
              <p className="text-lg text-neutral-500 leading-relaxed font-medium">
                AxiomAI fields dedicated, high-performance pods of principal engineers, product managers, and solution architects to guarantee project delivery.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="card bg-white border border-neutral-100 rounded-[2rem] p-8 shadow-sm flex flex-col justify-center">
                <div className="text-4xl font-black text-[#FF821C] mb-2">95%</div>
                <div className="text-sm font-medium text-neutral-500 leading-relaxed">On-time delivery rate for managed AxiomAI projects</div>
              </div>
              <div className="card bg-white border border-neutral-100 rounded-[2rem] p-8 shadow-sm translate-y-8 flex flex-col justify-center">
                <div className="text-4xl font-black text-[#FF821C] mb-2">Zero</div>
                <div className="text-sm font-medium text-neutral-500 leading-relaxed">Critical defect escapes in production deployments</div>
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
              We provide the specialized talent and rigorous methodologies needed to deliver complex systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-10 bg-white border border-neutral-100 rounded-[2rem] hover:border-primary-200 transition-all shadow-sm hover:shadow-md">
              <div className="w-14 h-14 bg-[#FFF2E5] text-[#FF821C] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#26201D] mb-3">Custom Build Pods</h3>
              <p className="text-neutral-500 leading-relaxed">Deploying specialized teams of principal engineers to rapidly build and scale custom software and AI agents.</p>
            </div>
            
            <div className="card p-10 bg-white border border-neutral-100 rounded-[2rem] hover:border-primary-200 transition-all shadow-sm hover:shadow-md">
              <div className="w-14 h-14 bg-[#FFF2E5] text-[#FF821C] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#26201D] mb-3">Program Turnaround</h3>
              <p className="text-neutral-500 leading-relaxed">Rescuing at-risk technology initiatives with immediate technical interventions and rigorous management.</p>
            </div>

            <div className="card p-10 bg-white border border-neutral-100 rounded-[2rem] hover:border-primary-200 transition-all shadow-sm hover:shadow-md">
              <div className="w-14 h-14 bg-[#FFF2E5] text-[#FF821C] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#26201D] mb-3">Post-Live Operations</h3>
              <p className="text-neutral-500 leading-relaxed">Ensuring sustained value through continuous optimization, refactoring, and proactive maintenance of systems.</p>
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
            <span>Guaranteed Execution</span>
          </div>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-white mb-6">
            Ready to secure delivery?
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
            Stop risking capital on failed execution. Deploy a specialized pod today.
          </p>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto px-8 h-14 text-base rounded-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF821C] to-[#AD58D9] text-white hover:opacity-90 transition-opacity shadow-md border-none">
              Speak with a Principal
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
