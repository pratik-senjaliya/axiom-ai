import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import { getContactPage } from "@/lib/sanity/queries";
import { ContactForm } from "@/components/contact/ContactForm";

// Enable into ISR
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const sanityData = await getContactPage().catch(() => null);
  const defaultTitle = "Contact Us for AI & Digital Solutions | Axiom AI";
  const defaultDesc = "Get in touch with Axiom AI for expert AI, ERP, and data solutions. Let’s discuss how we can transform your business with tailored strategies.";

  if (sanityData?.seo) {
    return genMeta({
      title: sanityData.seo.metaTitle || defaultTitle,
      description: sanityData.seo.metaDescription || defaultDesc,
      keywords: sanityData.seo.metaKeywords,
      ogImage: sanityData.seo.openGraphImage,
      slug: "/contact"
    });
  }

  return genMeta({
    title: defaultTitle,
    description: defaultDesc,
    keywords: ["contact", "support", "help", "message"],
    slug: "/contact"
  });
}

export default async function ContactPage() {
  const sanityData = await getContactPage().catch(() => null);
  const data = sanityData || {
    title: "Let's Talk Transformation",
    description: "Ready to discuss your GenAI, ERP, or data challenges? We'd love to hear from you."
  };

  return (
    <ContactForm data={data} />
  )
}

