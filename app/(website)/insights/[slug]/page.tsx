import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/sanity/queries";
import { PortableText } from "@/components/ui/PortableText";
import { FAQ } from "@/components/ui/FAQ";
import { DarkCTA } from "@/components/services/DarkCTA";
import { Button } from "@/components/ui/Button";
import { User, Calendar, Clock, ChevronRight } from "lucide-react";

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
      <section className="bg-[#FAF8F5] py-10 border-b border-neutral-100">
        <div className="container-custom px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#26201D] mb-5 leading-[1.1] tracking-tight">
                {post.title}
              </h1>
              <Button variant="outline" className="rounded-full border-neutral-300 text-neutral-600 font-bold hover:bg-neutral-50 flex items-center gap-2">
                Cite This Web Page
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor font-bold">
                   <path d="M8 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2v-2M16 4h2a2 2 0 012 2v4M16 4V2m0 2l2-2" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Button>
            </div>
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] animate-fade-in-right">
              {post.image ? (
                <Image 
                  src={post.image} 
                  alt={post.imageAlt || post.title} 
                  fill 
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-[#FF821C]/5" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Metadata Section - Icon-based 3 Column Layout */}
      <section className="py-12 border-b border-neutral-50">
        <div className="container-custom px-4 max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-100 border border-neutral-200">
               <div className="w-full h-full flex items-center justify-center font-bold text-[#FF821C] bg-[#FFF2E5]">
                 {post.author?.charAt(0)}
               </div>
            </div>
            <div>
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-0.5 whitespace-nowrap">Written by</span>
              <span className="text-base font-bold text-[#26201D] whitespace-nowrap">{post.author}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center text-[#FF821C]">
               <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-0.5 whitespace-nowrap">Published on</span>
              <span className="text-base font-bold text-[#26201D] whitespace-nowrap">{post.date}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center text-[#FF821C]">
               <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-0.5 whitespace-nowrap">Read time</span>
              <span className="text-base font-bold text-[#26201D] whitespace-nowrap">{post.readTime}</span>
            </div>
          </div>

          <div className="md:ml-auto flex items-center gap-2">
             <span className="px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-600 text-[10px] font-bold tracking-wider uppercase border border-neutral-200">
               {post.category}
             </span>
             <span className="px-4 py-1.5 rounded-full bg-[#FFF2E5] text-[#FF821C] text-[10px] font-bold tracking-wider uppercase border border-[#FF821C]/10">
               Editor's Pick
             </span>
          </div>
        </div>
      </section>

      {/* 3. Main Content Area - TOC Sidebar Left, Content Right */}
      <section className="py-16">
        <div className="container-custom px-4 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Sticky Sidebar Left */}
          <aside className="lg:w-1/3 hidden lg:block">
            <div className="sticky top-32">
              <div className="p-6 rounded-[2rem] border border-neutral-100 bg-white shadow-sm">
                <h4 className="text-lg font-extrabold text-[#26201D] mb-6">What You'll Learn</h4>
                <nav className="flex flex-col gap-4">
                  {headings.map((heading: any, i: number) => (
                    <a 
                      key={i} 
                      href={`#${heading.id}`}
                      className={`group flex items-start gap-3 text-[14px] leading-snug transition-colors hover:text-[#FF821C] font-bold ${
                        heading.level === 'h3' ? 'pl-6 text-neutral-500' : 'text-[#26201D]'
                      }`}
                    >
                      <span className="text-[#FF821C] mt-0.5 font-bold">{i + 1}.</span>
                      <span className="border-b border-transparent group-hover:border-[#FF821C]/30">{heading.text}</span>
                    </a>
                  ))}
                  <a href="#faqs" className="group flex items-start gap-3 text-[14px] leading-snug transition-colors hover:text-[#FF821C] font-bold text-[#26201D]">
                    <span className="text-[#FF821C] mt-0.5 font-bold">{headings.length + 1}.</span>
                    <span className="border-b border-transparent group-hover:border-[#FF821C]/30">Frequently Asked Questions</span>
                  </a>
                </nav>
              </div>

              {/* Sidebar Promo */}
              <div className="mt-8 p-6 rounded-[2rem] bg-gradient-to-br from-[#26201D] to-neutral-800 text-white relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF821C]/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#FF821C]/40 transition-colors duration-500" />
                 <h4 className="text-xl font-bold mb-3 relative z-10">Scale Faster with AI</h4>
                 <p className="text-white/60 text-sm mb-6 relative z-10 font-medium leading-relaxed">Let us handle the technical complexity while you lead the business transformation.</p>
                 <Link href="/contact" className="btn-secondary w-full rounded-2xl py-4 flex items-center justify-center gap-2 group/btn relative z-10">
                   Get Your Free Proposal
                   <ChevronRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                 </Link>
              </div>
            </div>
          </aside>

          {/* Core Article Body */}
          <div className="lg:w-2/3 max-w-4xl">
            <div className="prose-luxury leading-[1.8] text-[1.125rem] text-neutral-700">
              <PortableText value={post.content} className="max-w-none" />
            </div>

            {/* Final Author Section */}
            <div className="mt-20 p-8 md:p-10 rounded-[2.5rem] bg-[#FAF8F5] border border-neutral-100 flex flex-col md:flex-row gap-8 items-center text-center md:text-left animate-fade-up">
              <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-xl flex-shrink-0 border-4 border-white">
                <div className="w-full h-full bg-[#FF821C]/10 flex items-center justify-center text-[#FF821C] font-bold text-4xl">
                  {post.author?.charAt(0)}
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                   <div>
                     <h4 className="text-2xl font-extrabold text-[#26201D] mb-1">{post.author}</h4>
                     <span className="text-[#FF821C] font-bold uppercase tracking-wider text-xs">{post.authorRole || "Digital Strategist"}</span>
                   </div>
                   <Button variant="outline" className="rounded-2xl border-neutral-300 text-neutral-600 font-bold hover:bg-white text-sm">
                     Browse All Articles ({allPosts.length})
                   </Button>
                </div>
                <p className="text-neutral-500 text-base leading-relaxed max-w-3xl">
                  {post.author} has over a decade of experience in {post.category?.toLowerCase() || "strategic technology implementation"} and business transformation. They specialize in bridging the gap between complex engineering and measurable business outcomes for enterprise clients.
                </p>
              </div>
            </div>

            {/* FAQs */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-20 scroll-mt-32" id="faqs">
                <FAQ items={post.faqs.map((f: any) => ({ question: f.question, answer: f.answer }))} title="Frequently Asked Questions" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Related Posts Section - "Read Next" */}
      <section className="py-20 bg-white">
        <div className="container-custom px-4 max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#26201D] mb-4">Read Next</h2>
            <div className="w-16 h-1 bg-[#FF821C] rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {finalRelated.map((rp, i) => (
              <Link key={i} href={`/insights/${rp.slug}`} className="group flex flex-col h-full animate-fade-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="relative aspect-[1.5/1] rounded-[2rem] overflow-hidden mb-8 shadow-sm">
                  {rp.image ? (
                    <Image 
                      src={rp.image} 
                      alt={rp.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  ) : (
                    <div className="w-full h-full bg-[#FF821C]/5 flex items-center justify-center text-[#FF821C]/20 font-bold text-4xl">
                       {rp.title.charAt(0)}
                    </div>
                  )}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#FF821C] text-[10px] font-bold tracking-widest uppercase shadow-sm">
                      {rp.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mb-4 text-xs font-bold text-neutral-400 uppercase tracking-widest">
                  <span>{rp.date}</span>
                  <span className="w-1 h-1 bg-neutral-200 rounded-full" />
                  <span className="text-neutral-500">{rp.author}</span>
                </div>

                <h3 className="text-2xl font-bold text-[#26201D] group-hover:text-[#FF821C] transition-colors line-clamp-2 leading-tight flex-grow mb-6">
                  {rp.title}
                </h3>

                <div className="inline-flex items-center text-[#FF821C] font-bold text-[15px] group-hover:gap-2 transition-all">
                   Read Article
                   <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DarkCTA 
        title="Ready to Transform Your Business?"
        description="Connect with our experts today for a personalized strategy session."
        buttonText="Get Started Now"
        buttonHref="/contact"
      />
    </div>
  );
}
