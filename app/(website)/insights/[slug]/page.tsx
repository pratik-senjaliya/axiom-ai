import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/sanity/queries";
import { PortableText } from "@/components/ui/PortableText";
import { FAQ } from "@/components/ui/FAQ";
import { DarkCTA } from "@/components/services/DarkCTA";
import { BlogCard } from "@/components/blog/BlogCard";
import { ButtonLink, Eyebrow, Section, SectionHeader, TextLink } from "@/components/ui/kit";
import { AuthorAvatar } from "@/components/blog/AuthorAvatar";
import { ArticleShareLinks } from "@/components/blog/ArticleShareLinks";
import { BlogCoverImage } from "@/components/blog/BlogCoverImage";
import { BlogPageSchemas } from "@/components/seo/BlogPageSchemas";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

import { generateMetadata as genMeta } from "@/lib/seo";

export const dynamic = "force-dynamic";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) return genMeta({ title: "Post Not Found | SyncOrigins", description: "", slug: `/insights/${slug}` });
  
  return genMeta({
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt || "",
    keywords: post.seo?.metaKeywords,
    ogImage: post.seo?.openGraphImage || post.imageDetail || post.image,
    ogType: "article",
    slug: `/insights/${slug}`,
  });
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const SERVICE_CTAS: Record<string, {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}> = {
  ai: {
    title: "Ready to Scale with Enterprise AI?",
    description: "Supercharge your operations with custom AI agents and automation. Book a strategy call today.",
    buttonText: "Launch Your AI Strategy",
    buttonHref: "/contact",
  },
  erp: {
    title: "Accelerate Your ERP Transformation",
    description: "Empower your organization with modern ERP solutions and seamless system integration.",
    buttonText: "Start Your ERP Journey",
    buttonHref: "/contact",
  },
  data: {
    title: "Unlock the Power of Your Data",
    description: "Turn raw data into actionable insights with enterprise analytics and predictive modeling.",
    buttonText: "Get Data-Driven Insights",
    buttonHref: "/contact",
  },
  managed: {
    title: "Expert Managed Delivery Services",
    description: "Scale your engineering and product teams with our high-performing managed delivery models.",
    buttonText: "Explore Delivery Models",
    buttonHref: "/contact",
  },
  sustainability: {
    title: "Optimize for Sustainable Growth",
    description: "Leverage technology to drive ESG performance and long-term business resilience.",
    buttonText: "Build Sustainable Futures",
    buttonHref: "/contact",
  },
  finance: {
    title: "Ready to Transform Finance?",
    description: "Modernize close, reporting, and finance operations with AI, data, and ERP expertise.",
    buttonText: "Talk to Our Finance Experts",
    buttonHref: "/contact",
  },
};

const DEFAULT_CTA = {
  title: "Need a Custom AI Strategy?",
  description: "We help enterprises architect and deploy production-grade AI solutions. Schedule your strategy session today.",
  buttonText: "Book a Discovery Call",
  buttonHref: "/contact",
};

function resolvePostCta(post: any) {
  const fromCms = post?.cta || {};
  const fromService =
    (post?.relatedService && SERVICE_CTAS[post.relatedService]) ||
    (post?.relatedIndustry && SERVICE_CTAS[post.relatedIndustry]) ||
    DEFAULT_CTA;

  return {
    title: fromCms.title || fromService.title,
    description: fromCms.description || fromService.description,
    buttonText: fromCms.buttonText || fromService.buttonText,
    buttonHref: fromCms.buttonHref || fromService.buttonHref || "/contact",
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  // Privacy filter for author names
  const displayAuthor = (post.author?.toLowerCase().includes("pratik") || 
                        post.author?.toLowerCase().includes("senjaliya") || 
                        post.author?.toLowerCase().includes("xconcile") ||
                        !post.author) 
                        ? "SyncOrigins" 
                        : post.author;

  const displayAuthorRole =
    post.authorRole && post.authorRole.toLowerCase() !== 'admin'
      ? post.authorRole
      : null;

  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && (p.category === post.category))
    .slice(0, 3);
  
  const finalRelated = relatedPosts.length > 0 ? relatedPosts : allPosts.filter(p => p.slug !== slug).slice(0, 3);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://syncorigins.com";
  const articleUrl = `${siteUrl}/insights/${slug}`;

  const headings = (post.content || [])
    .filter((block: any) => block._type === "block" && block.style === "h2")
    .map((block: any) => ({
      text: block.children?.[0]?.text || "",
      level: block.style,
      id: slugify(block.children?.[0]?.text || ""),
    }))
    .filter((heading: any) => heading.text.trim() && heading.id);

  const cta = resolvePostCta(post);
  const sidebarCtaTitle =
    cta.title === DEFAULT_CTA.title ? "Need a Strategy?" : cta.title;
  const badge =
    post.relatedIndustry === "finance"
      ? "Finance"
      : post.relatedService === "ai"
        ? "AI Strategy"
        : post.relatedService
          ? String(post.relatedService).toUpperCase()
          : "Enterprise AI";

  return (
    <div className="bg-ink-900 pt-[4.5rem]">
      <BlogPageSchemas
        title={post.title}
        description={post.excerpt || ""}
        url={articleUrl}
        image={post.seo?.openGraphImage || post.imageDetail || post.image}
        datePublished={post.date}
        authorName={displayAuthor}
        seo={post.seo}
        faqs={post.faqs}
      />

      {/* 1. Article header */}
      <header id="top" className="relative scroll-mt-24 overflow-hidden pt-10 sm:pt-12">
        <div aria-hidden className="bg-grid-fade" />
        <div className="container-custom relative">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
              { label: post.title },
            ]}
            className="mb-10 lg:mb-12"
          />
          <div className="max-w-4xl">
            {post.category && <Eyebrow className="mb-6">{post.category}</Eyebrow>}
            <h1 className="font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.03em] text-fg sm:text-[2.75rem] lg:text-[3.25rem]">
              {post.title}
            </h1>
            {post.excerpt && <p className="lead mt-6 max-w-3xl">{post.excerpt}</p>}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
              <span className="flex items-center gap-3">
                <AuthorAvatar author={displayAuthor} size="sm" />
                <span className="font-medium text-fg">{displayAuthor}</span>
              </span>
              {post.date && <span>{post.date}</span>}
              {post.readTime && (
                <span className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-muted/60" />
                  {post.readTime}
                </span>
              )}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2 lg:hidden">
              <span className="mr-1 text-xs font-medium uppercase tracking-[0.18em] text-muted">Share</span>
              <ArticleShareLinks
                title={post.title}
                url={articleUrl}
                linkClassName="chip transition-colors hover:border-line-accent hover:text-fg"
              />
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-line lg:mt-14">
            {(post.imageDetail || post.image) ? (
              <BlogCoverImage
                src={post.imageDetail || post.image}
                alt={post.imageAlt || post.title}
                variant="natural"
                sizes="(max-width: 1280px) 100vw, 1200px"
                priority
              />
            ) : (
              <div className="flex h-48 w-full items-center justify-center bg-ink-800 p-8 font-display text-2xl text-muted">
                SyncOrigins Insights
              </div>
            )}
          </div>
        </div>
      </header>

      {/* 2. Body */}
      <section className="py-14 lg:py-20" id="article-start">
        <div className="container-custom grid gap-12 lg:grid-cols-12 lg:gap-10">
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28 space-y-10">
              {(headings.length > 0 || post.faqs?.length > 0) && (
                <nav aria-label="In this article">
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted">In this article</p>
                  <ul className="space-y-1 border-l border-line">
                    {headings.map((heading: any, i: number) => (
                      <li key={i}>
                        <a
                          href={`#${heading.id}`}
                          className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm leading-snug text-body transition-colors hover:border-accent hover:text-fg"
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                    {post.faqs?.length > 0 && (
                      <li>
                        <a href="#faqs" className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-body transition-colors hover:border-accent hover:text-fg">
                          FAQs
                        </a>
                      </li>
                    )}
                  </ul>
                </nav>
              )}

              <div>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted">Share</p>
                <div className="flex flex-wrap items-center gap-2">
                  <ArticleShareLinks
                    title={post.title}
                    url={articleUrl}
                    linkClassName="chip transition-colors hover:border-line-accent hover:text-fg"
                  />
                </div>
              </div>

              <div className="panel-accent relative overflow-hidden p-6">
                <p className="font-display text-lg font-semibold text-fg">{sidebarCtaTitle}</p>
                <p className="mt-2 text-sm leading-relaxed text-body">{cta.description}</p>
                <ButtonLink href={cta.buttonHref || "/contact"} size="sm" className="mt-5 w-full">
                  {cta.buttonText}
                </ButtonLink>
              </div>

              <a href="#top" className="inline-flex items-center gap-2 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent">
                <span aria-hidden>↑</span> Back to top
              </a>
            </div>
          </aside>

          <article className="min-w-0 lg:col-span-8 lg:col-start-5">
            <PortableText value={post.content} className="max-w-none prose-blog" />

            {/* Author */}
            <div className="panel mt-14 flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
              <AuthorAvatar author={displayAuthor} size="md" />
              <div className="flex-grow">
                <p className="font-display text-lg font-semibold text-fg">{displayAuthor}</p>
                {displayAuthorRole && (
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.14em] text-accent">{displayAuthorRole}</p>
                )}
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {displayAuthor} brings expertise from over a decade of enterprise technology leadership. Focusing on bridging the gap between strategic intent and technical delivery for global organizations.
                </p>
              </div>
              <ButtonLink href="/insights" variant="secondary" size="sm" className="shrink-0">
                Browse More Articles
              </ButtonLink>
            </div>

            {/* FAQs */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-20 scroll-mt-28" id="faqs">
                <FAQ
                  items={post.faqs.map((f: any) => ({
                    question: f.question,
                    answer:
                      typeof f.answer === "string" ? (
                        f.answer
                      ) : (
                        <PortableText value={f.answer} />
                      ),
                  }))}
                  title="Frequently Asked Questions"
                />
              </div>
            )}
          </article>
        </div>
      </section>

      {/* 3. Bottom CTA — CMS editable, defaults to /contact */}
      <DarkCTA
        title={cta.title}
        description={cta.description}
        buttonText={cta.buttonText}
        buttonHref={cta.buttonHref}
        badgeText={badge}
      />

      {/* 4. Related posts */}
      {finalRelated.length > 0 && (
        <Section tone="raised" divider>
          <SectionHeader
            eyebrow="More from the enterprise roadmap"
            title="Related Insights"
            layout="split"
            actions={<TextLink href="/insights">View all insights</TextLink>}
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {finalRelated.map((rp, i) => (
              <BlogCard key={rp.slug || i} post={rp} />
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}
