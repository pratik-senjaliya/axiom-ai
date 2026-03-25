import type { Metadata } from "next";
import { DarkCTA } from "@/components/services/DarkCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enterprise Solutions & Services | AxiomAI",
  description: "Comprehensive GenAI, Data, and ERP transformation capabilities.",
};

export default function ServicesHubPage() {
  const serviceCategories = [
    {
      title: "AI Implementation",
      href: "/ai-implementation",
      description: "Strategy-to-production AI delivery for the enterprise.",
      tags: ["AI Strategy", "GenAI & LLM Integration", "Agentic Systems", "Automation", "AI Governance"],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 2C7.51088 2 5.60322 2.79018 4.1967C2.79018 5.60322 2 7.51088 2 9.5C2 11.23 2.61 12.82 3.63 14.1C4.34 14.99 4.63 16.14 4.45 17.27C4.33 18.06 4.45 18.87 4.79 19.59C5.13 20.31 5.67 20.91 6.34 21.29C7.01 21.67 7.78 21.82 8.54 21.72C9.3 21.62 10.01 21.27 10.58 20.72L11 20.31V12H3.1C3.03 11.19 3 10.36 3 9.5C3 5.91 5.91 3 9.5 3V2ZM14.5 2C16.4891 2 18.3968 2.79018 19.8033 4.1967C21.2098 5.60322 22 7.51088 22 9.5C22 11.23 21.39 12.82 20.37 14.1C19.66 14.99 19.37 16.14 19.55 17.27C19.67 18.06 19.55 18.87 19.21 19.59C18.87 20.31 18.33 20.91 17.66 21.29C16.99 21.67 16.22 21.82 15.46 21.72C14.7 21.62 13.99 21.27 13.42 20.72L13 20.31V12H20.9C20.97 11.19 21 10.36 21 9.5C21 5.91 18.09 3 14.5 3V2Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: "ERP Transformation",
      href: "/erp-transformation",
      description: "Microsoft Dynamics 365 implementations and ERP modernization.",
      tags: ["Dynamics 365 BC", "Dynamics 365 F&O", "ERP Migration", "Process Advisory", "Optimization & Support"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 1.105 3.582 2 8 2s8-.895 8-2V7m0 0c0 1.105-3.582 2-8 2s-8-.895-8-2m16 0c0-1.105-3.582-2-8-2s-8 .895-8 2m16 5c0 1.105-3.582 2-8 2s-8-.895-8-2" />
        </svg>
      )
    },
    {
      title: "Data & Analytics",
      href: "/data-analytics",
      description: "Turn data into decisions with modern analytics foundations.",
      tags: ["Power BI", "Data Warehousing", "Data Architecture", "Predictive Analytics", "KPI Reporting"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Managed Delivery",
      href: "/managed-delivery",
      description: "Pre-vetted specialists and managed teams for enterprise projects.",
      tags: ["ERP Consultants", "BI Developers", "AI Engineers", "Offshore Teams", "Project Execution"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "AI for Sustainable Operations",
      href: "/sustainability",
      description: "AI-enabled sustainability improvements for carbon visibility, reporting, and operational efficiency.",
      tags: ["Carbon Dashboard", "ESG Reporting", "Emission Forecasting", "Green Supply Chain"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="pt-0 pb-0">
      {/* Custom Hero Section for Hub */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#FAF8F5]">
        {/* Blueprint Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>
        
        <div className="container-custom relative z-10 px-4">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 text-[#FF821C] font-semibold text-xs tracking-wide uppercase">
              <span className="text-xl leading-none font-light block -mt-1">+</span>
              <span>Services</span>
            </div>
            
            {/* Title - Decreased to 6xl from 7xl */}
            <h1 className="type-hero text-[#26201D] mb-2">
              AI, Data & ERP —
            </h1>
            <h1 className="type-hero gradient-text tracking-tight leading-[1.1] mb-6">
              <span className="bg-gradient-to-r from-[#FF821C] to-[#DE2297] bg-clip-text text-transparent">
                Done Right
              </span>
            </h1>
            
            {/* Description - Decreased to lg from xl/2xl */}
            <p className="text-lg md:text-xl text-neutral-500 font-light mt-8">
              Advisory-led. Outcome-driven. Enterprise-grade.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of Cards */}
      <section className="py-20 relative bg-[#FAF8F5] -mt-1">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none -mt-4"></div>

        <div className="container-custom px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((service, idx) => (
              <Link 
                key={idx} 
                href={service.href} 
                className="group block focus:outline-none focus:ring-2 focus:ring-[#FF821C] rounded-[2rem] h-full"
              >
                <div className="bg-white rounded-[2rem] p-8 sm:p-9 shadow-sm flex flex-col h-full border border-neutral-100 group-hover:border-orange-200 group-hover:shadow-[0_8px_30px_rgba(249,118,31,0.06)] transition-all duration-300">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-[#FF821C] flex items-center justify-center text-white mb-6 shadow-sm">
                    {service.icon}
                  </div>
                  
                  {/* Title & Description - Decreased font sizes */}
                  <h3 className="type-card-title text-[#26201D] group-hover:text-[#FF821C] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-500 text-base leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Tags - Decreased to text-xs */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-[#F4F4F4] group-hover:bg-[#FFF5ED] text-neutral-500 group-hover:text-[#FF821C] rounded-full text-[12px] font-medium transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Learn More */}
                  <div className="flex items-center text-[#FF821C] font-semibold text-sm mt-auto w-fit">
                    Learn more
                    <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DarkCTA 
        badgeText="Get Started"
        title="Not sure where to start?"
        description="Book a free strategy call. We'll identify the highest-impact opportunities."
        buttonText="Book Free Strategy Call"
      />
    </div>
  );
}
