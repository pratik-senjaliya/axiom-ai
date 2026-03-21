import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "AxiomAI | Enterprise AI, ERP & Data Advisory",
  description: "Building the future of intelligent enterprise. Strategic guidance for digital transformation.",
};

const SparkleIcon = () => (
  <svg className="w-4 h-4 text-primary-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden text-center">
        {/* Soft radial glows to emulate the background in Lovable */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-orange-100/40 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div className="absolute top-[40%] right-[10%] w-[40rem] h-[40rem] bg-violet-100/30 rounded-full blur-[100px] pointer-events-none -z-10"></div>

        <div className="container-custom relative z-10 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-neutral-200 shadow-sm mb-8">
            <SparkleIcon />
            <span className="text-sm font-medium text-neutral-800">Enterprise AI & Data Advisory</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-[#26201D] tracking-tight mb-8 leading-[1.1]">
            Building the future of
            <span className="block gradient-text mt-2">enterprise intelligence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-500 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            We architect GenAI, Data, and ERP transformations that scale — with governance, clarity, and measurable outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="btn-primary w-full sm:w-auto px-8 h-14 text-base rounded-full flex items-center justify-center gap-2">
                Start Your Journey
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="bg-white border text-neutral-800 border-neutral-200 rounded-full hover:bg-neutral-50 shadow-sm w-full sm:w-auto px-8 h-14 text-base">
                Explore Solutions
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {["GenAI & LLMs", "Agentic AI", "S/4HANA", "Data Fabric", "ML Ops", "AI Governance"].map((tag) => (
              <span key={tag} className="px-5 py-2.5 bg-white border border-neutral-200 text-neutral-500 rounded-full text-sm font-medium shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Why Digital Transformations Fail */}
      <section className="py-24 relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#26201D] mb-4">
              Why Digital Transformations Fail
            </h2>
            <p className="text-lg text-neutral-500">
              We've seen the patterns. Here's what we help you avoid.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between h-full">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-red-600 mb-1">85%</div>
                  <div className="text-xs font-medium text-neutral-400 uppercase tracking-wide">of AI projects fail</div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#26201D] mb-3">GenAI Pilots That Don't Scale</h3>
                <p className="text-neutral-500 leading-relaxed text-sm">LLM experiments without governance or production roadmaps.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between h-full">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-red-600 mb-1">75%</div>
                  <div className="text-xs font-medium text-neutral-400 uppercase tracking-wide">exceed timeline</div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#26201D] mb-3">ERP Projects Over Budget</h3>
                <p className="text-neutral-500 leading-relaxed text-sm">S/4HANA migrations driven by vendors, not value.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between h-full">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-red-600 mb-1">70%</div>
                  <div className="text-xs font-medium text-neutral-400 uppercase tracking-wide">lack data strategy</div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#26201D] mb-3">Data Silos Block AI</h3>
                <p className="text-neutral-500 leading-relaxed text-sm">Analytics disconnected from decision-making.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Enterprise-grade AI solutions */}
      <section className="py-24 relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary-500 font-medium mb-4">
              <SparkleIcon />
              <span className="text-sm font-medium">What We Do</span>
            </div>
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#26201D] mb-4">
              Enterprise-grade AI solutions
            </h2>
            <p className="text-lg text-neutral-500">
              We help organizations move from experiments to outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-neutral-200 rounded-3xl p-10 shadow-sm transition-all hover:shadow-md h-full flex flex-col">
              <div className="flex items-center gap-2 mb-8 text-primary-500 font-semibold">
                <SparkleIcon />
                <span>01</span>
              </div>
              <h3 className="text-2xl font-bold text-[#26201D] mb-4">GenAI & Agentic AI</h3>
              <p className="text-neutral-500 leading-relaxed mb-10 flex-grow">
                From LLM experiments to production-grade AI systems with governance built-in.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {['LLM Strategy', 'AI Copilots', 'RAG Systems'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-neutral-50 text-neutral-600 rounded-full text-xs font-medium border border-neutral-100">{tag}</span>
                ))}
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-3xl p-10 shadow-sm transition-all hover:shadow-md h-full flex flex-col">
              <div className="flex items-center gap-2 mb-8 text-primary-500 font-semibold">
                <SparkleIcon />
                <span>02</span>
              </div>
              <h3 className="text-2xl font-bold text-[#26201D] mb-4">Data & Analytics</h3>
              <p className="text-neutral-500 leading-relaxed mb-10 flex-grow">
                Build AI-ready data foundations with modern architectures.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {['Data Fabric', 'ML Ops', 'Decision Intelligence'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-neutral-50 text-neutral-600 rounded-full text-xs font-medium border border-neutral-100">{tag}</span>
                ))}
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-3xl p-10 shadow-sm transition-all hover:shadow-md h-full flex flex-col">
              <div className="flex items-center gap-2 mb-8 text-primary-500 font-semibold">
                <SparkleIcon />
                <span>03</span>
              </div>
              <h3 className="text-2xl font-bold text-[#26201D] mb-4">ERP Modernization</h3>
              <p className="text-neutral-500 leading-relaxed mb-10 flex-grow">
                S/4HANA and cloud ERP transformations designed for AI enablement.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {['S/4HANA', 'SAP AI', 'Cloud ERP'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-neutral-50 text-neutral-600 rounded-full text-xs font-medium border border-neutral-100">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Three phases to transformation */}
      <section className="py-24 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary-500 font-medium mb-4">
              <SparkleIcon />
              <span className="text-sm font-medium">Our Approach</span>
            </div>
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#26201D] mb-4">
              Three phases to transformation
            </h2>
            <p className="text-lg text-neutral-500">
              A structured methodology for GenAI, ERP, and Data initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative max-w-5xl mx-auto">
            {/* Dotted connecting line behind cards */}
            <div className="hidden md:block absolute top-[40%] left-10 right-10 h-0 border-t-2 border-dashed border-neutral-200 -z-10"></div>
            
            <div className="bg-gradient-to-br from-[#FFF4E5] to-[#FFE6CC] rounded-3xl p-10 shadow-sm border border-[#FFCD99]/30">
              <div className="text-[#FF9933]/40 text-6xl font-black mb-6 leading-none">01</div>
              <h3 className="text-2xl font-bold text-[#26201D] mb-4">Discovery</h3>
              <p className="text-[#6D5A4C] leading-relaxed">
                Align stakeholders, assess readiness, and identify quick wins.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F5EEFE] to-[#F1E0FA] rounded-3xl p-10 shadow-sm border border-[#E4BFFF]/30">
              <div className="text-[#D69EF5]/50 text-6xl font-black mb-6 leading-none">02</div>
              <h3 className="text-2xl font-bold text-[#26201D] mb-4">Blueprint</h3>
              <p className="text-[#63536D] leading-relaxed">
                Design roadmap with governance, metrics, and clear milestones.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#FFF0ED] to-[#FFE4DF] rounded-3xl p-10 shadow-sm border border-[#FFD0C7]/30">
              <div className="text-[#FFA18F]/40 text-6xl font-black mb-6 leading-none">03</div>
              <h3 className="text-2xl font-bold text-[#26201D] mb-4">Execution</h3>
              <p className="text-[#6D5450] leading-relaxed">
                Deliver with continuous value tracking and course correction.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/use-cases" className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors">
              Explore use cases
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Built for Enterprise Leaders */}
      <section className="py-24 relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#26201D] mb-4">
              Built for Enterprise Leaders
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              We work with decision-makers who understand transformation requires more than technology.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-bl from-orange-400 to-pink-500 flex items-center justify-center mb-6 text-white shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#26201D] mb-3">CXOs & Board</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Strategic clarity on GenAI, ERP, and data investments.
              </p>
            </div>

            <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-bl from-pink-500 to-rose-500 flex items-center justify-center mb-6 text-white shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#26201D] mb-3">CDOs & CTOs</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Execution frameworks and governance models.
              </p>
            </div>

            <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-bl from-rose-500 to-primary-500 flex items-center justify-center mb-6 text-white shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#26201D] mb-3">Enterprise Architects</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Integration blueprints for AI-ready architecture.
              </p>
            </div>

            <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-bl from-primary-500 to-orange-400 flex items-center justify-center mb-6 text-white shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#26201D] mb-3">Data Leaders</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Data strategy alignment with AI ambitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact CTA */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-pink-50/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-orange-100/40 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#26201D] mb-6">
            Get Clarity Before You Commit
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-10">
            45-minute strategy call. No sales pitch — just actionable insights on your GenAI, ERP, or data challenges.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-8 h-14 text-base rounded-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF821C] to-[#AD58D9] text-white hover:opacity-90 transition-opacity shadow-md border-none">
                Book Free Strategy Call
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="bg-white border-none text-[#26201D] rounded-full hover:bg-neutral-50 shadow-sm w-full sm:w-auto px-10 h-14 text-base font-medium">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
