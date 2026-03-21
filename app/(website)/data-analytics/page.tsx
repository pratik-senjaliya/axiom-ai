import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { HorizontalFeature, HorizontalFeatureItem } from "@/components/services/HorizontalFeature";
import { DarkCTA } from "@/components/services/DarkCTA";

export const metadata: Metadata = {
  title: "Data & Analytics | AxiomAI",
  description: "Building the data foundations that power autonomous enterprise decisions.",
};

export default function DataAnalyticsPage() {
  const dataServices: HorizontalFeatureItem[] = [
    {
      title: "Enterprise Data Architecture",
      description: "Modern data warehousing and lakehouse designs for scalable enterprise analytics.",
      outcomeTitle: "Business Impact",
      outcomeDescription: "Unified data source for all business units.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z M4 12h16 M12 4v16" />
        </svg>
      )
    },
    {
      title: "Power BI & Dashboarding",
      description: "Interactive, real-time dashboards that turn complex data into actionable insights.",
      outcomeTitle: "Business Impact",
      outcomeDescription: "Faster decision making with real-time visibility.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Data Strategy & Governance",
      description: "Frameworks for data quality, security, and enterprise-wide data literacy.",
      outcomeTitle: "Business Impact",
      outcomeDescription: "Trusted data foundations for AI and reporting.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.312-2.841.872-4.084" />
        </svg>
      )
    },
    {
      title: "Prescriptive Analytics",
      description: "Moving beyond 'what happened' to 'what should we do next' with ML models.",
      outcomeTitle: "Business Impact",
      outcomeDescription: "Proactive operational optimization.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <div className="pt-0 pb-0 bg-white">
      <ServiceHero 
        align="left"
        backLink={{ href: "/services", label: "Back to Services" }}
        pills={["Power BI", "Data Warehousing", "Predictive Analytics", "KPI Reporting"]}
        title="Data & Analytics"
        description="Turn data into decisions. From Power BI dashboards to predictive intelligence, we build the foundations for an AI-driven business."
        primaryButtonText="Get Data Assessment"
        secondaryButtonText="Talk to a Specialist"
      />

      <HorizontalFeature 
        items={dataServices}
        bgWhite={true}
      />

      <DarkCTA 
        title="Build Data That Powers Decisions"
        description="Book a free strategy call. Understand your analytics maturity and path forward."
        buttonText="Book Free Strategy Call"
        useWhiteButton={true}
      />
    </div>
  );
}
