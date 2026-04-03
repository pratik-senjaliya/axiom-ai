import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/sanity/queries";
import { PortableText } from "@/components/ui/PortableText";
import { FAQ } from "@/components/ui/FAQ";
import { Button } from "@/components/ui/Button";
import { DarkCTA } from "@/components/services/DarkCTA";
import { User, Calendar, Clock, ChevronRight } from "lucide-react";

export const dynamic = "force-dynamic";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) return { title: "Post Not Found | AxiomAI" };
  
  return {
    title: `${post.title} | AxiomAI Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    }
  };
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const SERVICE_CTAS: Record<string, any> = {
  ai: {
    title: "Ready to Scale with Enterprise AI?",
    description: "Supercharge your operations with custom AI agents and automation. Book a strategy call today.",
    buttonText: "Launch Your AI Strategy",
    buttonHref: "/ai-implementation",
  },
  erp: {
    title: "Accelerate Your ERP Transformation",
    description: "Empower your organization with modern ERP solutions and seamless system integration.",
    buttonText: "Start Your ERP Journey",
    buttonHref: "/erp-transformation",
  },
  data: {
    title: "Unlock the Power of Your Data",
    description: "Turn raw data into actionable insights with enterprise analytics and predictive modeling.",
    buttonText: "Get Data-Driven Insights",
    buttonHref: "/data-analytics",
  },
  managed: {
    title: "Expert Managed Delivery Services",
    description: "Scale your engineering and product teams with our high-performing managed delivery models.",
    buttonText: "Explore Delivery Models",
    buttonHref: "/managed-delivery",
  },
  sustainability: {
    title: "Optimize for Sustainable Growth",
    description: "Leverage technology to drive ESG performance and long-term business resilience.",
    buttonText: "Build Sustainable Futures",
    buttonHref: "/sustainability",
  },
};

const DEFAULT_CTA = {
  title: "Need a Custom AI Strategy?",
  description: "We help enterprises architect and deploy production-grade AI solutions. Schedule your strategy session today.",
  buttonText: "Book a Discovery Call",
  buttonHref: "/contact",
};

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  // Privacy filter for author names
  const displayAuthor = (post.author?.toLowerCase().includes("pratik") || 
                        post.author?.toLowerCase().includes("senjaliya") || 
                        post.author?.toLowerCase().includes("xconcile") ||
                        !post.author) 
                        ? "AxiomAI Team" 
                        : post.author;

  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && (p.category === post.category))
    .slice(0, 3);
  
  const finalRelated = relatedPosts.length > 0 ? relatedPosts : allPosts.filter(p => p.slug !== slug).slice(0, 3);

  const headings = (post.content || [])
    .filter((block: any) => block._type === "block" && ["h2", "h3"].includes(block.style))
    .map((block: any) => ({
      text: block.children[0].text,
      level: block.style,
      id: slugify(block.children[0].text)
    }));

  return (
    <div className="pt-24" style={{ background: '#0A0F1F' }}>
      {/* 1. Hero Section - Title Left, Image Right */}
      <section className="py-8 md:py-12 border-b" style={{ background: '#0D1B2A', borderColor: 'rgba(0,229,255,0.1)' }}>
        <div className="container-custom px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="animate-fade-in-left">
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border" style={{ background: 'rgba(0,229,255,0.1)', borderColor: 'rgba(0,229,255,0.3)', color: '#00E5FF' }}>
                {post.category}
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest" style={{ color: '#8FA3BF' }}>
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                <span className="w-1 h-1 rounded-full" style={{ background: '#14243A' }} />
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
              </div>
            </div>
            <div className="relative aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg animate-fade-in-right">
              {post.image ? (
                <Image 
                  src={post.image} 
                  alt={post.imageAlt || post.title} 
                  fill 
                  className="object-cover"
                  priority
                  unoptimized
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold truncate p-8" style={{ background: 'rgba(0,229,255,0.05)', color: '#14243A' }}>
                  {post.title}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Metadata Bar - Simplified */}
      <section className="py-6 border-b sticky top-20 backdrop-blur-md z-30 hidden md:block" style={{ background: 'rgba(10,15,31,0.92)', borderColor: 'rgba(0,229,255,0.1)' }}>
        <div className="container-custom px-4 max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-[10px] border" style={{ background: 'rgba(0,229,255,0.1)', borderColor: 'rgba(0,229,255,0.3)', color: '#00E5FF' }}>
                {displayAuthor.charAt(0)}
              </div>
              <span className="text-xs font-bold text-white">{displayAuthor}</span>
            </div>
            <div className="h-4 w-[1px]" style={{ background: 'rgba(0,229,255,0.15)' }} />
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#8FA3BF' }}>
               <span>Share:</span>
               <div className="flex items-center gap-3 ml-1">
                 <button className="hover:text-[#00E5FF] transition-colors">Twitter</button>
                 <button className="hover:text-[#00E5FF] transition-colors">LinkedIn</button>
               </div>
            </div>
          </div>
          <a href="#article-start" className="text-[10px] font-bold uppercase tracking-widest border-b-2 border-transparent transition-all" style={{ color: '#00E5FF' }}>
            Back to Top
          </a>
        </div>
      </section>

      {/* 3. Main Content Area */}
      <section className="py-12 md:py-20" id="article-start" style={{ background: '#0A0F1F' }}>
        <div className="container-custom px-4 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Sticky Sidebar Left */}
          <aside className="lg:w-[320px] hidden lg:block flex-shrink-0">
            <div className="sticky top-40 space-y-10">
              {/* Table of Contents */}
              <div className="p-8 rounded-[2rem] border transition-all hover:border-[#00E5FF]/30" style={{ background: 'rgba(13,27,42,0.4)', borderColor: 'rgba(0,229,255,0.15)', backdropFilter: 'blur(10px)' }}>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 flex items-center justify-between" style={{ color: '#00E5FF' }}>
                  <span>In this article</span>
                  <ChevronRight className="w-3 h-3" />
                </h4>
                <nav className="flex flex-col gap-5 text-sm">
                  {headings.map((heading: any, i: number) => (
                    <a
                      key={i}
                      href={`#${heading.id}`}
                      className={`transition-all hover:text-[#00E5FF] leading-snug border-l-2 pl-4 -ml-[2px] ${
                        heading.level === 'h3' ? 'text-xs border-transparent pr-4' : 'font-bold border-[#00E5FF]/20 pr-4'
                      }`}
                      style={{ color: heading.level === 'h3' ? '#8FA3BF' : '#C5D1E0' }}
                    >
                      {heading.text}
                    </a>
                  ))}
                  <a href="#faqs" className="font-bold transition-colors hover:text-[#00E5FF] border-l-2 border-transparent pl-4 -ml-[2px]" style={{ color: '#C5D1E0' }}>
                    FAQs
                  </a>
                </nav>
              </div>

              {/* Related Reads Sidebar Widget */}
              <div className="p-8 rounded-[2rem] border" style={{ background: 'rgba(13,27,42,0.4)', borderColor: 'rgba(0,229,255,0.15)' }}>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8" style={{ color: '#8FA3BF' }}>Related Reads</h4>
                <div className="space-y-8">
                  {finalRelated.slice(0, 2).map((rp, i) => (
                    <Link key={i} href={`/insights/${rp.slug || ""}`} className="group block">
                      <div className="text-[10px] uppercase tracking-widest font-bold mb-2 transition-colors group-hover:text-[#00E5FF]" style={{ color: '#00E5FF' }}>{rp.category}</div>
                      <h5 className="text-sm font-bold text-white group-hover:text-[#00E5FF] transition-colors line-clamp-2 leading-snug">{rp.title}</h5>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Widget */}
              {(() => {
                const cta = (post.relatedService && SERVICE_CTAS[post.relatedService]) || DEFAULT_CTA;
                return (
                  <div className="p-8 rounded-[2rem] border text-white relative overflow-hidden group" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #14243A 100%)', borderColor: 'rgba(0,229,255,0.2)', boxShadow: '0 0 30px rgba(0,229,255,0.07)' }}>
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity" style={{ background: '#00E5FF' }} />
                      <h4 className="text-lg font-bold mb-3 relative z-10">{cta.title === DEFAULT_CTA.title ? "Need a Strategy?" : cta.title.replace("Ready to ", "Need a ").replace("?", "") + "?"}</h4>
                      <p className="text-xs mb-6 leading-relaxed relative z-10" style={{ color: 'rgba(255,255,255,0.6)' }}>{cta.description}</p>
                      <Link href={cta.buttonHref || "/contact"}>
                        <Button className="w-full font-bold rounded-xl text-xs py-3 h-auto relative z-10 border-0 hover:scale-105 transition-all text-[#0A0F1F]" style={{ background: 'linear-gradient(135deg, #1DA1F2, #00E5FF)', boxShadow: '0 0 15px rgba(0,229,255,0.3)' }}>
                          {cta.buttonText}
                        </Button>
                      </Link>
                  </div>
                );
              })()}
            </div>
          </aside>

          {/* Core Article Body */}
          <article className="lg:w-2/3 flex-grow">
            <div className="prose-clean max-w-4xl mx-auto lg:mx-0">
              <PortableText value={post.content} className="max-w-none" />
            </div>

            {/* Author Footer Card */}
            <div className="mt-16 p-8 md:p-12 rounded-[2rem] border flex flex-col md:flex-row gap-8 items-center text-center md:text-left" style={{ background: '#0D1B2A', borderColor: 'rgba(0,229,255,0.15)' }}>
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center font-bold text-3xl border" style={{ background: 'rgba(0,229,255,0.1)', borderColor: 'rgba(0,229,255,0.25)', color: '#00E5FF' }}>
                {displayAuthor.charAt(0)}
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                   <div>
                     <h4 className="text-xl font-bold text-white mb-1">{displayAuthor}</h4>
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: '#00E5FF' }}>Contributor</span>
                   </div>
                   <Link href="/insights">
                    <Button variant="outline" className="rounded-xl font-bold text-[10px] h-9 hover:text-[#00E5FF] transition-colors" style={{ borderColor: 'rgba(0,229,255,0.3)', color: '#C5D1E0', background: 'rgba(20,36,58,0.6)' }}>
                      Browse More Articles
                    </Button>
                   </Link>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#8FA3BF' }}>
                  The {displayAuthor} brings expertise from over a decade of enterprise technology leadership. Focusing on bridging the gap between strategic intent and technical delivery for global organizations.
                </p>
              </div>
            </div>

            {/* FAQs */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-20 scroll-mt-40" id="faqs">
                <FAQ items={post.faqs.map((f: any) => ({ question: f.question, answer: f.answer }))} title="Frequently Asked Questions" />
              </div>
            )}
          </article>
        </div>
      </section>

      {/* 4. Bottom CTA Section - Dynamic based on service */}
      {(() => {
        const cta = (post.relatedService && SERVICE_CTAS[post.relatedService]) || DEFAULT_CTA;
        return (
          <DarkCTA 
            title={cta.title}
            description={cta.description}
            buttonText={cta.buttonText}
            buttonHref={cta.buttonHref}
            badgeText={post.relatedService ? (post.relatedService === 'ai' ? "AI Strategy" : post.relatedService.toUpperCase()) : "Enterprise AI"}
          />
        );
      })()}

      {/* 5. Related Posts Section */}
      <section className="py-20" style={{ background: '#0D1B2A' }}>
        <div className="container-custom px-4 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Related Insights</h2>
              <div className="text-xs font-bold uppercase tracking-widest" style={{ color: '#8FA3BF' }}>More from the enterprise roadmap</div>
            </div>
            <Link href="/insights" className="text-xs font-bold uppercase tracking-widest border-b-2 border-transparent hover:border-current transition-all" style={{ color: '#00E5FF' }}>
              View All Insights
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {finalRelated.map((rp, i) => (
              <Link key={i} href={`/insights/${rp.slug || ""}`} className="group flex flex-col h-full rounded-[1.5rem] overflow-hidden transition-all hover:[border-color:rgba(0,229,255,0.35)]" style={{ background: 'rgba(26,46,71,0.6)', border: '1px solid rgba(0,229,255,0.12)' }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {rp.image ? (
                    <Image
                      src={rp.image}
                      alt={rp.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full" style={{ background: 'rgba(0,229,255,0.05)' }} />
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase" style={{ background: 'rgba(0,229,255,0.12)', color: '#00E5FF', border: '1px solid rgba(0,229,255,0.3)', backdropFilter: 'blur(8px)' }}>
                      {rp.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3 text-[9px] font-bold uppercase tracking-widest" style={{ color: '#8FA3BF' }}>
                    <span>{rp.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#00E5FF] transition-colors line-clamp-2 leading-snug mb-4">
                    {rp.title}
                  </h3>

                  <div className="mt-auto inline-flex items-center font-bold text-[11px] uppercase tracking-widest transition-all" style={{ color: '#00E5FF' }}>
                     Read Article
                     <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
