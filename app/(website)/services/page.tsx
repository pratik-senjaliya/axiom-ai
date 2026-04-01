import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DarkCTA } from "@/components/services/DarkCTA";
import { PortableText } from "@/components/ui/PortableText";
import { 
  getServicesPage, 
  getAIImplementationPage, 
  getERPTransformationPage, 
  getDataAnalyticsPage, 
  getManagedDeliveryPage, 
  getSustainabilityPage 
} from "@/lib/sanity/queries";
import { Button } from "@/components/ui/Button";

export const dynamic = "force-dynamic";

const SparkleIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="text-[#FF821C]">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
    </svg>
);

export async function generateMetadata(): Promise<Metadata> {
  const data = await getServicesPage();
  const defaultTitle = "Our AI, ERP & Business Transformation Services | Axiom AI";
  const defaultDesc = "Explore Axiom AI’s services in AI implementation, ERP transformation, managed delivery, and sustainability to optimize operations and scale efficiently.";

  if (!data?.seo) {
    return {
      title: defaultTitle,
      description: defaultDesc,
    };
  }
  return {
    title: data.seo.metaTitle || defaultTitle,
    description: data.seo.metaDescription || defaultDesc,
  };
}

export default async function ServicesHubPage() {
  const [pageData, ai, erp, analytics, managed, sustainability] = await Promise.all([
    getServicesPage(),
    getAIImplementationPage(),
    getERPTransformationPage(),
    getDataAnalyticsPage(),
    getManagedDeliveryPage(),
    getSustainabilityPage(),
  ]);

  if (!pageData) notFound();

  const serviceCategories = [
    { page: ai, href: "/ai-implementation" },
    { page: erp, href: "/erp-transformation" },
    { page: analytics, href: "/data-analytics" },
    { page: managed, href: "/managed-delivery" },
    { page: sustainability, href: "/sustainability" },
  ]
    .filter((item) => item.page?.hero?.title && item.page?.hero?.description)
    .map((item) => ({
      title: item.page.hero.title as string,
      href: item.href,
      description: item.page.hero.description as string,
      tags: (item.page.tags || []).slice(0, 5),
    }));

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
              <span>{pageData.badgeText || "Strategic Advisory"}</span>
            </div>
            
            {/* Title */}
            <h1 className="type-hero text-[#26201D] mb-2">{pageData.title}</h1>
            <h1 className="type-hero gradient-text tracking-tight leading-[1.1] mb-6">
              <span className="bg-gradient-to-r from-[#FF821C] to-[#DE2297] bg-clip-text text-transparent">
                {pageData.titleHighlight}
              </span>
            </h1>
            
            {/* Description */}
            <div className="text-lg md:text-xl text-neutral-500 font-light mt-8 leading-relaxed max-w-2xl">
              <PortableText value={pageData.description} />
            </div>
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
                  <div className="w-12 h-12 rounded-2xl bg-[#FF821C] flex items-center justify-center text-white mb-6 shadow-sm transition-transform group-hover:scale-110">
                    <span className="font-bold text-sm tracking-tighter">0{idx + 1}</span>
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="type-card-title text-[#26201D] group-hover:text-[#FF821C] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <div className="text-neutral-500 text-base leading-relaxed mb-6 flex-grow">
                    <PortableText value={service.description} />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag: string) => (
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
        title={pageData?.finalCTA?.title}
        description={pageData?.finalCTA?.description}
        buttonText={pageData?.finalCTA?.cta?.text}
        buttonHref={pageData?.finalCTA?.cta?.link}
      />
    </div>
  );
}
