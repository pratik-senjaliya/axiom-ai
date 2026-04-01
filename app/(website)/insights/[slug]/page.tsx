import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/sanity/queries";
import { PortableText } from "@/components/ui/PortableText";
import { FAQ } from "@/components/ui/FAQ";
import { Button } from "@/components/ui/Button";
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
    <div className="pt-24 bg-white">
      {/* 1. Hero Section - Title Left, Image Right */}
      <section className="bg-[#FAF8F5] py-8 md:py-12 border-b border-neutral-100">
        <div className="container-custom px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="animate-fade-in-left">
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF821C]/10 text-[#FF821C] text-[10px] font-bold tracking-widest uppercase border border-[#FF821C]/10">
                {post.category}
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#26201D] mb-6 leading-tight tracking-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-neutral-400 uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                <span className="w-1 h-1 bg-neutral-200 rounded-full" />
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
                <div className="w-full h-full bg-[#FF821C]/5 flex items-center justify-center text-neutral-200 text-4xl font-bold truncate p-8">
                  {post.title}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Metadata Bar - Simplified */}
      <section className="py-6 border-b border-neutral-50 sticky top-20 bg-white/80 backdrop-blur-md z-30 hidden md:block">
        <div className="container-custom px-4 max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FAF8F5] flex items-center justify-center font-bold text-[#FF821C] text-[10px] border border-neutral-100">
                {displayAuthor.charAt(0)}
              </div>
              <span className="text-xs font-bold text-[#26201D]">{displayAuthor}</span>
            </div>
            <div className="h-4 w-[1px] bg-neutral-100" />
            <div className="flex items-center gap-2 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
               <span>Share:</span>
               <div className="flex items-center gap-3 ml-1">
                 <button className="hover:text-[#FF821C] transition-colors">Twitter</button>
                 <button className="hover:text-[#FF821C] transition-colors">LinkedIn</button>
               </div>
            </div>
          </div>
          <a href="#article-start" className="text-[10px] font-bold text-[#FF821C] uppercase tracking-widest border-b-2 border-transparent hover:border-[#FF821C] transition-all">
            Back to Top
          </a>
        </div>
      </section>

      {/* 3. Main Content Area */}
      <section className="py-12 md:py-20" id="article-start">
        <div className="container-custom px-4 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Sticky Sidebar Left */}
          <aside className="lg:w-[300px] hidden lg:block flex-shrink-0">
            <div className="sticky top-40">
              <div className="p-8 rounded-[1.5rem] bg-[#FAF8F5] border border-neutral-100">
                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6">In this article</h4>
                <nav className="flex flex-col gap-4">
                  {headings.map((heading: any, i: number) => (
                    <a 
                      key={i} 
                      href={`#${heading.id}`}
                      className={`group flex items-start gap-3 transition-colors hover:text-[#FF821C] ${
                        heading.level === 'h3' ? 'pl-5 text-neutral-400 text-xs' : 'text-neutral-600 text-xs font-bold'
                      }`}
                    >
                      <span className="border-b border-transparent group-hover:border-[#FF821C]/20">{heading.text}</span>
                    </a>
                  ))}
                  <a href="#faqs" className="group flex items-start gap-3 text-xs font-bold text-neutral-600 transition-colors hover:text-[#FF821C]">
                    <span className="border-b border-transparent group-hover:border-[#FF821C]/20">Frequently Asked Questions</span>
                  </a>
                </nav>
              </div>

              <div className="mt-8 p-8 rounded-[1.5rem] bg-neutral-900 border border-neutral-800 text-white shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF821C] rounded-full blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity" />
                  <h4 className="text-lg font-bold mb-3 relative z-10 font-outfit">Need an AI Strategy?</h4>
                  <p className="text-xs text-white/60 mb-6 leading-relaxed relative z-10">We help enterprises architect and deploy production-grade AI solutions.</p>
                  <Button className="w-full bg-[#FF821C] hover:bg-[#FF821C]/90 text-white font-bold rounded-xl text-xs py-3 h-auto relative z-10 border-0">
                    Book a Discovery Call
                  </Button>
              </div>
            </div>
          </aside>

          {/* Core Article Body */}
          <article className="lg:w-2/3 max-w-none">
            <div className="prose-clean max-w-none">
              <PortableText value={post.content} className="max-w-none" />
            </div>

            {/* Author Footer Card */}
            <div className="mt-16 p-8 md:p-12 rounded-[2rem] bg-white border border-neutral-100 shadow-sm flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 bg-[#FAF8F5] border border-neutral-100 flex items-center justify-center text-[#FF821C] font-bold text-3xl shadow-inner">
                {displayAuthor.charAt(0)}
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                   <div>
                     <h4 className="text-xl font-bold text-[#26201D] mb-1">{displayAuthor}</h4>
                     <span className="text-[10px] font-bold text-[#FF821C] uppercase tracking-[0.2em]">Contributor</span>
                   </div>
                   <Link href="/insights">
                    <Button variant="outline" className="rounded-xl border-neutral-200 text-neutral-500 font-bold hover:bg-[#FAF8F5] text-[10px] h-9">
                      Browse More Articles
                    </Button>
                   </Link>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed">
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

      {/* 4. Related Posts Section */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="container-custom px-4 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#26201D] mb-2 font-outfit">Related Insights</h2>
              <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest">More from the enterprise roadmap</div>
            </div>
            <Link href="/insights" className="text-xs font-bold text-[#FF821C] uppercase tracking-widest border-b-2 border-[#FF821C]/20 hover:border-[#FF821C] transition-all">
              View All Insights
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {finalRelated.map((rp, i) => (
              <Link key={i} href={`/insights/${rp.slug}`} className="group flex flex-col h-full bg-white rounded-[1.5rem] border border-neutral-100 overflow-hidden hover:border-[#FF821C]/20 hover:shadow-xl transition-all">
                <div className="relative aspect-[16/10] overflow-hidden">
                  {rp.image ? (
                    <Image 
                      src={rp.image} 
                      alt={rp.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  ) : (
                    <div className="w-full h-full bg-[#FF821C]/5" />
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-full bg-white/95 text-[#FF821C] text-[9px] font-bold tracking-widest uppercase shadow-sm">
                      {rp.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3 text-[9px] font-bold text-neutral-400 uppercase tracking-widest">
                    <span>{rp.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#26201D] group-hover:text-[#FF821C] transition-colors line-clamp-2 leading-snug mb-4">
                    {rp.title}
                  </h3>

                  <div className="mt-auto inline-flex items-center text-[#FF821C] font-bold text-[11px] uppercase tracking-widest group-hover:gap-2 transition-all">
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
