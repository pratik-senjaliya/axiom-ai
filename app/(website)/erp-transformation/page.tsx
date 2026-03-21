import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { HorizontalFeature, HorizontalFeatureItem } from "@/components/services/HorizontalFeature";
import { DarkCTA } from "@/components/services/DarkCTA";

export const metadata: Metadata = {
  title: "ERP Transformation | AxiomAI",
  description: "Microsoft Dynamics 365 implementations designed for business value, not just go-live.",
};

export default function ERPTransformationPage() {
  const erpServices: HorizontalFeatureItem[] = [
    {
      title: "Dynamics 365 Business Central",
      description: "End-to-end implementation, customization, and optimization for SMEs and mid-market.",
      outcomeTitle: "Business Impact",
      outcomeDescription: "Streamline operations and improve financial visibility.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Dynamics 365 Finance & Operations",
      description: "Enterprise-grade F&O deployments for complex, multi-entity organizations.",
      outcomeTitle: "Business Impact",
      outcomeDescription: "Scaling global operations with absolute control.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "ERP Migration",
      description: "Seamless migration from legacy ERP systems to Dynamics 365 with zero business disruption.",
      outcomeTitle: "Business Impact",
      outcomeDescription: "Modernize with zero data loss or downtime.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      )
    },
    {
      title: "Process Advisory",
      description: "Business process re-engineering and optimization before and during ERP transformation.",
      outcomeTitle: "Business Impact",
      outcomeDescription: "Optimized workflows for maximum ROI.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Optimization & Support",
      description: "Ongoing managed support, performance tuning, and continuous improvement post go-live.",
      outcomeTitle: "Business Impact",
      outcomeDescription: "Continuous platform value and reliability.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="pt-0 pb-0 bg-white">
      <ServiceHero 
        align="left"
        backLink={{ href: "/services", label: "Back to Services" }}
        pills={["Dynamics 365 BC", "Dynamics 365 F&O", "ERP Migration", "Process Advisory"]}
        title="ERP Transformation"
        description="Microsoft Dynamics 365 implementations designed for business value, not just go-live."
        primaryButtonText="Get ERP Assessment"
        secondaryButtonText="Talk to an Architect"
      />

      <HorizontalFeature 
        items={erpServices}
        bgWhite={true}
      />

      <DarkCTA 
        title="Stop Leaving ERP Value on the Table"
        description="Book a free strategy call. Get clarity on your Dynamics 365 or ERP modernization path."
        buttonText="Book Free Strategy Call"
        useWhiteButton={true}
      />
    </div>
  );
}
