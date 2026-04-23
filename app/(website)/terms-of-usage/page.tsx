import type { Metadata } from "next";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { client } from "@/lib/sanity/client";
import { generateMetadata as genMeta } from "@/lib/seo";

export const revalidate = 60;

async function getTermsOfUsage() {
  try {
    const data = await client.fetch(`
      *[_type == "termsOfUsage"][0]{
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

/* ---------- Text Cleaning Utility ---------- */
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

/* ---------- Portable-Text component overrides ---------- */
const ptComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-neutral-600 leading-relaxed mb-6 text-lg">{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-3xl md:text-4xl font-bold text-[#26201D] tracking-tight mt-12 mb-6">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl font-bold text-[#26201D] tracking-tight mt-16 mb-6 pt-8 border-t border-neutral-100">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl md:text-2xl font-semibold text-[#26201D] mt-10 mb-5">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-semibold text-[#26201D] mt-8 mb-4">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#FF821C] pl-6 my-8 text-neutral-500 italic bg-neutral-50/50 py-4 pr-4 rounded-r-lg">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="my-6 ml-6 space-y-3 list-disc marker:text-[#FF821C]">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="my-6 ml-6 space-y-3 list-decimal marker:text-[#FF821C] marker:font-semibold">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="text-neutral-600 leading-relaxed pl-2 text-lg">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="text-neutral-600 leading-relaxed pl-2 text-lg">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-[#26201D]">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ value, children }: any) => (
      <a href={value?.href} className="text-[#FF821C] hover:underline font-medium" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

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
  const hasContent = cleanedContent && Array.isArray(cleanedContent) && cleanedContent.length > 0;
  
  const title = page?.title || "Terms of Usage";
  const lastUpdated = page?.lastUpdated
    ? new Date(page.lastUpdated).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="min-h-screen bg-[#FAFAF8] pt-32 pb-24">
      <div className="container-custom px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back link & Title Area */}
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-400 hover:text-primary-500 transition-colors mb-6 group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#26201D] tracking-tight mb-2">
              {title}
            </h1>
            <p className="text-sm text-neutral-400 font-medium">Effective Date: {lastUpdated}</p>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-neutral-200/50 shadow-xl shadow-neutral-200/10 p-10 md:p-16">
            {hasContent ? (
              <PortableText value={cleanedContent} components={ptComponents} />
            ) : (
              <div className="space-y-12">
                <div className="max-w-4xl">
                  <p className="text-neutral-600 text-lg leading-relaxed">
                    Please read these Terms of Usage carefully before using the SyncOrigins platform. By accessing our
                    services, you agree to be bound by these terms.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  {FALLBACK_SECTIONS.map((s, i) => (
                    <div key={i} className="">
                      <h3 className="text-xl font-bold text-[#26201D] mb-4">{s.title}</h3>
                      <p className="text-neutral-600 leading-relaxed text-base">{s.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
