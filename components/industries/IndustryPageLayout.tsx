import { DarkCTA } from "@/components/services/DarkCTA";
import { RelatedInsights } from "@/components/services/RelatedInsights";
import { FAQ } from "@/components/ui/FAQ";
import { PortableText } from "@/components/ui/PortableText";
import { ServicePageSchemas } from "@/components/seo/ServicePageSchemas";
import { IndustryHero } from "@/components/industries/IndustryHero";
import { IndustryChallengePanel } from "@/components/industries/IndustryChallengePanel";
import {
  IndustryServiceCards,
  IndustryClientsGrid,
  IndustryPillars,
  IndustrySuccessStories,
  IndustryLifecycle,
  IndustryWhyUs,
} from "@/components/industries/IndustrySection";
import { areCaseStudiesListed } from "@/lib/content-visibility";
import { getSiteUrl, portableTextToPlain } from "@/lib/seo";

interface IndustryPageLayoutProps {
  data: any;
  /** Display name, e.g. "Finance" — used for breadcrumbs and default headings */
  industryName: string;
  /** Route path, e.g. "/finance" */
  path: string;
  relatedPosts: any[];
}

/** Shared layout for the Finance page and CMS-created industry pages */
export function IndustryPageLayout({ data, industryName, path, relatedPosts }: IndustryPageLayoutProps) {
  const name = industryName;
  const lower = name.toLowerCase();

  const mapItems = (items: any[] = []) =>
    items.map((item: any) => ({ title: item.title, description: item.description }));

  const hero = data.hero || {};
  const faqs = (data.faqs || []).map((faq: any) => ({
    question: faq.question,
    answer: <PortableText value={faq.answer} />,
  }));

  return (
    <div className="overflow-x-clip">
      <ServicePageSchemas
        title={data?.seo?.metaTitle || `${hero?.title || ""} ${hero?.titleHighlight || ""}`.trim()}
        description={portableTextToPlain(hero?.description) || ""}
        url={`${getSiteUrl()}${path}`}
        image={data?.seo?.openGraphImage || hero?.image}
        seo={data?.seo}
        faqs={data?.faqs}
      />

      <IndustryHero
        industryLabel={`Industries · ${name}`}
        title={hero?.title || `Transform ${name} Through AI, Data &`}
        titleHighlight={hero?.titleHighlight || "Intelligent Enterprise Systems"}
        description={hero?.description}
        primaryButtonText={hero?.primaryCta?.text || `Talk to Our ${name} Experts`}
        primaryButtonLink={hero?.primaryCta?.link || "/contact"}
        secondaryButtonText={hero?.secondaryCta?.text || `Explore ${name} Solutions`}
        secondaryButtonLink={hero?.secondaryCta?.link || "#services"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries" },
          { label: name },
        ]}
      />

      <IndustryChallengePanel
        title={data.challengesHeadline || `${name} Challenges We Solve`}
        description={data.challengesDescription}
        items={mapItems(data.challenges)}
      />

      <IndustryServiceCards
        title={data.solutionsHeadline || `Our ${name} Transformation Solutions`}
        description={data.solutionsDescription}
        items={mapItems(data.solutions)}
      />

      <IndustryClientsGrid
        title={data.clientsHeadline || `${name} Clients We Serve`}
        description={data.clientsDescription}
        items={mapItems(data.clients)}
      />

      <IndustryPillars
        title={data.outcomesHeadline || `How We Drive the Success of Your ${name} Transformation`}
        description={data.outcomesDescription}
        items={mapItems(data.outcomes)}
      />

      {/* Soft-launch: success stories link to case studies — hide until published */}
      {areCaseStudiesListed() && (
        <IndustrySuccessStories
          title={data.successStoriesHeadline || `${name} Transformation Success Stories`}
          stories={data.successStories || []}
        />
      )}

      <IndustryLifecycle
        title={data.processHeadline || `${name} Transformation Process & Delivery`}
        description={data.processDescription}
        items={mapItems(data.process)}
      />

      <IndustryWhyUs
        title={data.whyUsHeadline || `Why Choose SyncOrigins for ${name}`}
        description={data.whyUsDescription}
        items={mapItems(data.whyUs)}
        image={data.whyUsImage}
        imageAlt={data.whyUsImageAlt}
        imageLabel={data.whyUsImageLabel || `${name} expertise`}
        imageTitle={data.whyUsImageTitle || `AI, data, and ERP delivery built for ${lower} transformation`}
        listTitle={data.whyUsListTitle || `Benefits of partnering with SyncOrigins for ${name}`}
      />

      <RelatedInsights posts={relatedPosts} serviceName={name} />

      {faqs.length > 0 && (
        <section className="py-12 md:py-16 overflow-x-clip" style={{ background: "#0A0F1F" }}>
          <div className="container-custom px-4 max-w-4xl mx-auto">
            <FAQ items={faqs} title="Frequently Asked Questions" />
          </div>
        </section>
      )}

      <DarkCTA
        badgeText={data.finalCta?.badgeText || name}
        title={data.finalCta?.title || `Ready to Transform Your ${name} Operations?`}
        description={data.finalCta?.description}
        buttonText={data.finalCta?.buttonText || `Talk to Our ${name} Experts`}
        buttonHref={data.finalCta?.buttonLink || "/contact"}
      />
    </div>
  );
}
