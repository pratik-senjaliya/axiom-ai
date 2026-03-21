import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Insights | AxiomAI",
  description: "Expert perspectives on enterprise technology and digital transformation.",
};

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="text-primary-500">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
  </svg>
);

export default function InsightsPage() {
  const articles = [
    {
      category: "Artificial Intelligence",
      title: "The Enterprise Guide to LLM Implementation",
      excerpt: "Navigating the complexities of deploying large language models securely and effectively within corporate environments.",
      date: "Nov 15, 2025"
    },
    {
      category: "ERP Strategy",
      title: "Why Post-Modern ERP Strategy Matters",
      excerpt: "Moving beyond monolithic architectures to composable business systems that drive agility.",
      date: "Nov 02, 2025"
    },
    {
      category: "Data & Analytics",
      title: "Building Data Foundations for AI",
      excerpt: "Your AI initiatives will fail without the right data infrastructure. Here is how to prepare.",
      date: "Oct 28, 2025"
    },
    {
      category: "Tech Leadership",
      title: "Managing the Human Cost of Transformation",
      excerpt: "Digital initiatives are 80% change management. Strategies for leading teams through technological shifts.",
      date: "Oct 15, 2025"
    },
    {
      category: "Artificial Intelligence",
      title: "Evaluating AI Vendors: A Framework",
      excerpt: "How to cut through the marketing noise and assess enterprise AI platforms for real capability.",
      date: "Oct 01, 2025"
    },
    {
      category: "Case Study",
      title: "Rescuing a $50M SAP Implementation",
      excerpt: "The critical interventions that turned a failing program into a success story.",
      date: "Sep 20, 2025"
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
            <span>Insights</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-[#26201D] max-w-4xl mx-auto">
            Articles & Perspective
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10">
            Thought leadership on the future of enterprise intelligence.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
             <button className="px-5 py-2 rounded-full bg-neutral-900 border border-neutral-900 text-white text-sm font-medium shadow-sm">All</button>
             <button className="px-5 py-2 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50 text-sm font-medium shadow-sm transition-colors">Artificial Intelligence</button>
             <button className="px-5 py-2 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50 text-sm font-medium shadow-sm transition-colors">ERP & business apps</button>
             <button className="px-5 py-2 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50 text-sm font-medium shadow-sm transition-colors">Data strategy</button>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 relative z-10">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((item, idx) => (
              <div key={idx} className="card p-10 bg-white border border-neutral-100 rounded-[2rem] hover:border-primary-200 transition-all shadow-sm hover:shadow-md flex flex-col group">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-sm font-bold text-[#FF821C] bg-[#FFF2E5] px-3 py-1 rounded-full">{item.category}</span>
                  <span className="text-sm font-medium text-neutral-400">{item.date}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-[#26201D] mb-4 group-hover:text-[#FF821C] transition-colors line-clamp-2">{item.title}</h3>
                
                <p className="text-neutral-500 leading-relaxed mb-8 flex-grow line-clamp-3">{item.excerpt}</p>

                <div className="flex items-center text-[#FF821C] font-semibold mt-auto group-hover:gap-2 transition-all">
                  Read Article
                  <svg className="w-5 h-5 ml-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Layer */}
      <section className="py-24 relative overflow-hidden bg-white mt-12 border-t border-neutral-100">
        <div className="container-custom relative z-10 text-center flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-50 border border-neutral-200 text-sm font-medium text-neutral-800 shadow-sm">
            <SparkleIcon />
            <span>Apply Findings</span>
          </div>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#26201D] mb-6 max-w-2xl mx-auto">
            Want These Insights Applied to Your Business?
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-10">
            Move from reading to action. Let's map your AI or transformation strategy together.
          </p>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto px-8 h-14 text-base rounded-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF821C] to-[#AD58D9] text-white hover:opacity-90 transition-opacity shadow-md border-none">
              Book a Strategy Call
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
