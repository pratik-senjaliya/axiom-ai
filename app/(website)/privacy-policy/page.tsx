import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { generateMetadata as genMeta } from "@/lib/seo";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const revalidate = 60;

async function getPrivacyPolicy() {
  try {
    const data = await client.fetch(`
      *[_type == "privacyPolicy" && _id == "privacyPolicySingleton"][0]{
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
  const page = await getPrivacyPolicy();
  const defaultTitle = "Privacy Policy - Data Protection & Security | SyncOrigins";
  const defaultDesc = "Read SyncOrigins’s privacy policy to understand how we collect, use, and protect your data while ensuring transparency and security.";

  if (page?.seo) {
    return genMeta({
      title: page.seo.metaTitle || defaultTitle,
      description: page.seo.metaDescription || defaultDesc,
      keywords: page.seo.metaKeywords,
      ogImage: page.seo.openGraphImage,
      slug: "/privacy-policy",
    });
  }
  return genMeta({
    title: defaultTitle,
    description: defaultDesc,
    slug: "/privacy-policy",
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
    title: "1. Data Collection",
    body: "We collect information you provide directly (name, email, company) and data generated through your use of our platform (usage logs, preferences, IP address).",
  },
  {
    title: "2. How We Use Your Data",
    body: "Your data is used to deliver our services, send relevant communications, improve our platform, and fulfil legal or contractual obligations.",
  },
  {
    title: "3. Data Sharing",
    body: "We do not sell your personal information. We share data only with trusted service providers, legal authorities when required, or as part of a business transfer.",
  },
  {
    title: "4. Your Rights",
    body: "Depending on your location you may have the right to access, correct, delete, or restrict processing of your personal data. Contact us to exercise these rights.",
  },
];

export default async function PrivacyPolicyPage() {
  const page = await getPrivacyPolicy();

  const cleanedContent = page?.content ? cleanContent(page.content) : null;
  const title = page?.title || "Privacy Policy";
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
              We value your privacy and are committed to protecting your personal data. This Privacy Policy
              explains how we collect, use, and safeguard your information when you interact with our website,
              products, and services.
            </p>
            <p className="text-white text-lg leading-relaxed mt-6">
              By using our platform, you agree to the practices described in this policy.
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
