import type { Metadata } from "next";
import { PortableText } from '@portabletext/react'
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { client } from "@/lib/sanity/client";
import { generateMetadata as genMeta } from "@/lib/seo";

// Enable ISR with 1-hour revalidation
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

    if (page?.seo) {
        return genMeta({
            title: page.seo.metaTitle || page.title,
            description: page.seo.metaDescription,
            keywords: page.seo.metaKeywords,
            ogImage: page.seo.openGraphImage,
            slug: "/terms-of-usage"
        });
    }

    return genMeta({
        title: "Terms of Usage",
        description: "Our terms of usage outline the rules for using our platform.",
        slug: "/terms-of-usage"
    });
}

export default async function TermsOfUsagePage() {
    const page = await getTermsOfUsage();

    if (!page) {
        return (
            <div className="pt-24 pb-0 bg-white min-h-screen">
                <div className="container-custom py-24">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#26201D] mb-4">Terms of Usage</h1>
                        <p className="text-neutral-500 font-medium">Content not yet available. Please check back later.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-0 bg-white min-h-screen relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[30rem] bg-orange-50/30 blur-[100px] pointer-events-none -z-10"></div>
            
            {/* Hero Section */}
            <section className="pt-24 pb-12 relative z-10">
                <div className="container-custom px-4 relative">
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Terms of Usage" },
                        ]}
                        className="mb-8 text-neutral-500"
                    />
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#26201D] tracking-tight mb-6">{page.title}</h1>
                        {page.lastUpdated && (
                            <p className="text-lg font-medium text-neutral-500 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-100 bg-white/80 shadow-sm">
                                Last Updated: {new Date(page.lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 relative z-10">
                <div className="container-custom px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-[2rem] border border-neutral-100 p-8 md:p-12 shadow-sm prose prose-lg prose-neutral
            prose-headings:font-bold prose-headings:text-[#26201D] prose-headings:tracking-tight
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
            prose-p:text-neutral-600 prose-p:leading-relaxed prose-p:mb-5 prose-p:font-medium
            prose-ul:my-6 prose-li:my-2 prose-li:text-neutral-600 prose-li:font-medium
            prose-strong:text-[#26201D] prose-strong:font-bold
            prose-a:text-[#FF821C] prose-a:no-underline hover:prose-a:underline
            marker:text-[#FF821C]">
                        <PortableText value={page.content} />
                    </div>
                </div>
            </section>
        </div>
    );
}
