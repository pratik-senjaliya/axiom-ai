import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { generateMetadata as genMeta } from "@/lib/seo";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const revalidate = 60;

async function getTermsOfUsage() {
  try {
    const data = await client.fetch(`
      *[_type == "termsOfUsage" && _id == "termsOfUsageSingleton"][0]{
        title,
        lastUpdated,
        content,
        seo
      }
    `);
    return data;
  } catch (e) {
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getTermsOfUsage();
  const defaultTitle = "Terms of Usage - Website Policies & Conditions | SyncOrigins";
  const defaultDesc = "Review SyncOrigins’s terms of usage to understand website policies, user responsibilities, and conditions governing the use of our services.";

  if (page?.seo) {
    return genMeta({
      title: page.seo.metaTitle || defaultTitle,
      description: page.seo.metaDescription || defaultDesc,
      keywords: page.seo.metaKeywords,
      ogImage: page.seo.openGraphImage,
      slug: "/terms-of-usage",
    });
  }
  return genMeta({
    title: defaultTitle,
    description: defaultDesc,
    slug: "/terms-of-usage",
  });
}

function cleanContent(content: any) {
  if (!content) return content;
  try {
    const jsonString = JSON.stringify(content);
    const cleanedString = jsonString
      .replace(/\\\\\\\\/g, '')
      .replace(/\\\\\\/g, '')
      .replace(/\\\\/g, '')
      .replace(/\\ /g, ' ')
      .replace(/\\\./g, '.')
      .replace(/\\./g, '.');
    return JSON.parse(cleanedString);
  } catch (e) {
    return content;
  }
}

const FALLBACK_SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using SyncOrigins's services, you confirm that you are at least 18 years old and agree to these Terms. If you do not agree, please discontinue use immediately.",
  },
  {
    title: "2. Use of Services",
    body: "You agree to use our services only for lawful purposes and in a manner that does not infringe the rights of others.",
  },
  {
    title: "3. Intellectual Property",
    body: "All content, trademarks, and technology on this platform are the property of SyncOrigins or its licensors.",
  },
  {
    title: "4. Modifications",
    body: "We reserve the right to modify these Terms at any time. Continued use of the platform after changes constitutes your acceptance of the revised Terms.",
  },
];

export default async function TermsOfUsagePage() {
  const page = await getTermsOfUsage();

  const cleanedContent = page?.content ? cleanContent(page.content) : null;
  const title = page?.title || "Terms of Usage";
  const lastUpdated = page?.lastUpdated
    ? new Date(page.lastUpdated).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <LegalPageLayout
      title={title}
      lastUpdated={lastUpdated}
      content={cleanedContent}
      fallback={
        <div className="space-y-12">
          <div className="max-w-4xl">
            <p className="text-white text-lg leading-relaxed">
              Please read these Terms of Usage carefully before using the SyncOrigins platform. By accessing our
              services, you agree to be bound by these terms.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {FALLBACK_SECTIONS.map((s, i) => (
              <div key={i}>
                <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
                <p className="text-white leading-relaxed text-base">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}
