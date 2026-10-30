import { TestimonialCarousel } from "@/components/services/TestimonialCarousel";
import { FAQ } from "@/components/ui/FAQ";
import { PortableText } from "@/components/ui/PortableText";
import { ServicePageSchemas } from "@/components/seo/ServicePageSchemas";
import {
  HireHero,
  HireExpertiseGrid,
  HireBuild,
  HireModels,
  HireTechStack,
  HireWhy,
  HireProcess,
  HireIndustries,
  HireExploreMore,
  HireFinalCta,
} from "@/components/hire/HireSections";
import { getSiteUrl, portableTextToPlain } from "@/lib/seo";

interface HirePageLayoutProps {
  data: any;
  /** Route path, e.g. "/hire-ai-engineers" */
  path: string;
}

/** Layout for CMS-created "Hire <role>" pages */
export function HirePageLayout({ data, path }: HirePageLayoutProps) {
  const role = data.title || "Developers";
  const hero = data.hero || {};

  const mapItems = (items: any[] = []) =>
    items.map((item: any) => ({ title: item.title, description: item.description }));

  const primaryCta = { text: hero.primaryCta?.text || `Hire ${role}`, link: hero.primaryCta?.link || "/contact" };

  const faqs = (data.faqs || []).map((faq: any) => ({
    question: faq.question,
    answer: <PortableText value={faq.answer} />,
  }));

  return (
    <div className="overflow-x-clip">
      <ServicePageSchemas
        title={data?.seo?.metaTitle || `${hero?.title || ""} ${hero?.titleHighlight || ""}`.trim() || `Hire ${role}`}
        description={portableTextToPlain(hero?.description) || ""}
        url={`${getSiteUrl()}${path}`}
        image={data?.seo?.openGraphImage || hero?.image}
        seo={data?.seo}
        faqs={data?.faqs}
      />

      <HireHero
        badge={hero.badge}
        title={hero.title || `Hire Vetted ${role} for`}
        highlight={hero.titleHighlight}
        description={hero.description}
        primaryCta={primaryCta}
        secondaryCta={{ text: hero.secondaryCta?.text || "Explore Hiring Models", link: hero.secondaryCta?.link || "#hiring-models" }}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: data.breadcrumbLabel || "Hire Developers" },
          { label: role },
        ]}
        image={hero.image || data.whyImage}
        imageAlt={hero.imageAlt || data.whyImageAlt || `Hire ${role}`}
      />

      <HireExpertiseGrid
        title={data.expertiseHeadline || `${role} Expertise We Offer`}
        description={data.expertiseDescription}
        items={mapItems(data.expertise)}
        cta={primaryCta}
      />

      <HireBuild
        title={data.buildHeadline || `What You Can Build with ${role}`}
        description={data.buildDescription}
        items={mapItems(data.buildItems)}
      />

      <HireModels
        title={data.modelsHeadline || `Flexible ${role} Hiring Models`}
        description={data.modelsDescription}
        items={data.models || []}
        ctaText={data.modelsCta?.text || `Hire ${role}`}
        ctaLink={data.modelsCta?.link || "/contact"}
        bestForLabel={data.modelsBestForLabel || undefined}
      />

      <HireTechStack
        title={data.techHeadline || `${role} Tech Stack`}
        description={data.techDescription}
        items={data.techStack || []}
      />

      <HireWhy
        title={data.whyHeadline || `Why Hire ${role} from SyncOrigins`}
        description={data.whyDescription}
        items={mapItems(data.whyItems)}
        image={data.whyImage}
        imageAlt={data.whyImageAlt}
        imageLabel={data.whyImageLabel || "Hire with SyncOrigins"}
        imageTitle={data.whyImageTitle || `Pre-vetted ${role} ready to join your team`}
      />

      <HireProcess
        title={data.processHeadline || `Our ${role} Hiring Process`}
        description={data.processDescription}
        items={mapItems(data.process)}
      />

      <HireIndustries
        title={data.industriesHeadline || "Industries We Support"}
        description={data.industriesDescription}
        items={(data.industries || []).map((item: any) => ({ title: item.title, icon: item.icon }))}
      />

      {(data.testimonials?.length ?? 0) > 0 && (
        <TestimonialCarousel
          testimonials={data.testimonials}
          title={data.testimonialsHeadline || "What Our Clients Say"}
          subtitle={data.testimonialsBadge || "Testimonials"}
        />
      )}

      <HireExploreMore
        title={data.moreHeadline || "Explore More Developers to Hire"}
        items={data.moreLinks || []}
        linkText={data.moreLinkText || undefined}
      />

      {faqs.length > 0 && (
        <section className="py-12 md:py-16 overflow-x-clip" style={{ background: "#0A0F1F" }}>
          <div className="container-custom px-4 max-w-4xl mx-auto">
            <FAQ items={faqs} title={data.faqsHeadline || "Frequently Asked Questions"} />
          </div>
        </section>
      )}

      <HireFinalCta
        badge={data.finalCta?.badgeText || `Hire ${role}`}
        title={data.finalCta?.title || `Build Your ${role} Team with SyncOrigins`}
        description={data.finalCta?.description}
        cta={{ text: data.finalCta?.buttonText || "Discuss Your Hiring Requirements", link: data.finalCta?.buttonLink || "/contact" }}
      />
    </div>
  );
}
