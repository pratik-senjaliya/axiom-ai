import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services | AxiomAI",
  description: "Comprehensive advisory services for modern enterprise.",
};

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="text-primary-500">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
  </svg>
);

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-0">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-orange-50/40 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-multiply"></div>
        <div className="container-custom relative z-10 px-4">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-white/50 backdrop-blur-sm text-sm font-medium text-neutral-800 shadow-sm">
            <SparkleIcon />
            <span>Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-[#26201D] max-w-4xl mx-auto">
            AI, Data & ERP — <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF821C] to-[#AD58D9]">Done Right</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto">
            Advisory-led. Outcome-driven. Enterprise-grade.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative z-10">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            
            {/* Service 1 */}
            <Link href="/services" className="block focus:outline-none">
              <div className="card h-full flex flex-col bg-white border border-neutral-100 rounded-[2rem] p-10 hover:border-primary-200 transition-all shadow-sm hover:shadow-md group">
                <div className="w-16 h-16 bg-[#FFF2E5] text-[#FF821C] rounded-2xl flex items-center justify-center mb-8">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#26201D] mb-4">AI Implementation</h3>
                <p className="text-neutral-500 leading-relaxed mb-8 flex-grow">
                  Practical artificial intelligence strategies that drive real business value and operational efficiency.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm font-medium rounded-full">AI Strategy</span>
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm font-medium rounded-full">GenAI & LLM Integration</span>
                </div>
                <div className="flex items-center text-[#FF821C] font-semibold mt-auto group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-5 h-5 ml-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 2 */}
            <Link href="/services/erp-transformation" className="block focus:outline-none">
              <div className="card h-full flex flex-col bg-white border border-neutral-100 rounded-[2rem] p-10 hover:border-primary-200 transition-all shadow-sm hover:shadow-md group">
                <div className="w-16 h-16 bg-[#FFF2E5] text-[#FF821C] rounded-2xl flex items-center justify-center mb-8">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#26201D] mb-4">ERP Transformation</h3>
                <p className="text-neutral-500 leading-relaxed mb-8 flex-grow">
                  Strategic guidance for complex enterprise resource planning implementations and migrations.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                   <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm font-medium rounded-full">System Selection</span>
                   <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm font-medium rounded-full">Architecture Design</span>
                </div>
                <div className="flex items-center text-[#FF821C] font-semibold mt-auto group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-5 h-5 ml-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 3 */}
            <Link href="/services/data-analytics" className="block focus:outline-none">
              <div className="card h-full flex flex-col bg-white border border-neutral-100 rounded-[2rem] p-10 hover:border-primary-200 transition-all shadow-sm hover:shadow-md group">
                <div className="w-16 h-16 bg-[#FFF2E5] text-[#FF821C] rounded-2xl flex items-center justify-center mb-8">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#26201D] mb-4">Data & Analytics</h3>
                <p className="text-neutral-500 leading-relaxed mb-8 flex-grow">
                  Unlocking insights from your enterprise data to drive informed decision-making.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm font-medium rounded-full">Data Strategy</span>
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm font-medium rounded-full">Predictive Modeling</span>
                </div>
                <div className="flex items-center text-[#FF821C] font-semibold mt-auto group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-5 h-5 ml-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 4 */}
            <Link href="/services/managed-delivery" className="block focus:outline-none">
              <div className="card h-full flex flex-col bg-white border border-neutral-100 rounded-[2rem] p-10 hover:border-primary-200 transition-all shadow-sm hover:shadow-md group">
                <div className="w-16 h-16 bg-[#FFF2E5] text-[#FF821C] rounded-2xl flex items-center justify-center mb-8">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#26201D] mb-4">Managed Delivery</h3>
                <p className="text-neutral-500 leading-relaxed mb-8 flex-grow">
                  Expert technical program management to ensure your initiatives are delivered on time and within budget.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm font-medium rounded-full">Program Rescue</span>
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm font-medium rounded-full">Vendor Management</span>
                </div>
                <div className="flex items-center text-[#FF821C] font-semibold mt-auto group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-5 h-5 ml-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 relative overflow-hidden bg-[#26201D] mt-12">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>
        <div className="container-custom relative z-10 text-center flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-neutral-300">
            <SparkleIcon />
            <span>Get Started</span>
          </div>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-white mb-6">
            Not sure where to start?
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
            Book a free strategy call. We'll identify the highest-impact opportunities.
          </p>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto px-8 h-14 text-base rounded-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF821C] to-[#AD58D9] text-white hover:opacity-90 transition-opacity shadow-md border-none">
              Book Free Strategy Call
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
