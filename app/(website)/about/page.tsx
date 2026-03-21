import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us | AxiomAI",
  description: "Who we are and our mission of engineering business success.",
};

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="text-primary-500">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
  </svg>
);

export default function AboutPage() {
  const values = [
    {
      title: "Radical Honesty",
      desc: "We tell the truth, even when it's uncomfortable. We evaluate platforms and vendors based purely on their merits and your needs.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      title: "Pragmatic Execution",
      desc: "We favor working software and tangible business value over elaborate slide decks and perfectionism.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Shared Stewardship",
      desc: "We treat your capital as our own. We look for the most efficient path to value and actively work to reduce waste.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Continuous Learning",
      desc: "In a rapidly evolving technological landscape, past expertise expires quickly. We remain humble students of the industry.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
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
            <span>About Us</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-[#26201D] max-w-4xl mx-auto">
            The Architects of Enterprise
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto">
            A partner, not just a provider. We build the future.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 relative z-10">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#26201D] mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-neutral-500 leading-relaxed">
                <p>
                  AxiomAI was founded on a simple observation: the gap between technology strategy and execution is where most enterprise value is lost.
                </p>
                <p>
                  We saw too many organizations commit millions to new platforms—ERP systems, AI capabilities, data infrastructures—only to realize a fraction of the intended benefits. The problem wasn't the technology; it was the structural disconnect between business intent and technical delivery.
                </p>
                <p className="font-medium text-neutral-800">
                  Our mission is to bridge that gap. We act as independent, objective advisors who sit on your side of the table, ensuring that technology investments translate into measurable business outcomes.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[2rem] p-10 md:p-14 border border-neutral-100 text-center flex flex-col items-center justify-center min-h-[400px] shadow-sm">
              <div className="bg-[#E6F3FF] text-[#0066CC] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#26201D] mb-4">Independent & Objective</h3>
              <p className="text-neutral-500 leading-relaxed">
                We take no commission from software vendors or systems integrators. Our only loyalty is to our clients' success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 relative z-10 bg-white">
        <div className="container-custom px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight text-[#26201D] mb-6">Our Values</h2>
            <p className="text-lg text-neutral-500">
              What drives us forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div key={i} className="card p-10 bg-white border border-neutral-100 rounded-[2rem] flex flex-col hover:border-primary-200 transition-all shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-[#FFF2E5] text-[#FF821C] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-[#26201D] mb-4">{v.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{v.desc}</p>
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
            <span>Connect</span>
          </div>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-white mb-6">
            Ready to evolve?
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
            Speak with an architect today.
          </p>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto px-8 h-14 text-base rounded-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF821C] to-[#AD58D9] text-white hover:opacity-90 transition-opacity shadow-md border-none">
              Get in touch
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
