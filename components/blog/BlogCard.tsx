import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const serviceLabels: { [key: string]: string } = {
    "ai": "AI Implementation",
    "erp": "ERP Transformation",
    "data": "Data & Analytics",
    "managed": "Managed Delivery",
    "sustainability": "Sustainability"
  };

  const displayCategory = post.relatedService && serviceLabels[post.relatedService] 
    ? serviceLabels[post.relatedService] 
    : post.category;

  // Privacy filter for author names
  const displayAuthor = (post.author?.toLowerCase().includes("pratik") || 
                        post.author?.toLowerCase().includes("senjaliya") || 
                        post.author?.toLowerCase().includes("xconcile") ||
                        !post.author) 
                        ? "AxiomAI Team" 
                        : post.author;

  if (featured) {
    return (
      <Link href={`/insights/${post.slug}`} className="group block mb-12">
        <div className="relative h-[350px] md:h-[450px] w-full rounded-[2rem] overflow-hidden shadow-xl transition-transform duration-500 group-hover:scale-[1.005]">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          ) : (
            <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
              <span className="text-neutral-700">AxiomAI Insights</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#26201D] via-[#26201D]/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#FF821C] text-white text-[10px] font-bold tracking-wider uppercase shadow-lg">
                Featured
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase border border-white/20">
                {displayCategory}
              </span>
              <span className="text-white/70 text-xs font-medium">{post.readTime}</span>
            </div>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight transition-colors group-hover:text-[#FF821C]">
              {post.title}
            </h2>
            
            <p className="text-xs md:text-sm text-white/80 line-clamp-2 max-w-2xl mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white font-bold text-sm border border-white/20 shadow-lg">
                {displayAuthor.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="text-white text-sm font-bold">{displayAuthor}</span>
                <span className="text-white/50 text-[10px] uppercase tracking-wider font-semibold">{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/insights/${post.slug}`} className="group h-full flex flex-col">
      <div className="card h-full bg-white border border-neutral-100 rounded-[1.5rem] hover:border-[#FF821C]/30 transition-all shadow-sm hover:shadow-xl flex flex-col overflow-hidden">
        <div className="relative h-56 overflow-hidden">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-[#FAF8F5] flex items-center justify-center">
                <span className="text-neutral-200 font-bold truncate px-4">{post.title}</span>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#FF821C] text-[9px] font-bold tracking-wider uppercase border border-[#FF821C]/10 shadow-sm">
              {displayCategory}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-3 text-neutral-400 text-[9px] font-bold uppercase tracking-widest">
            <span>{post.date}</span>
            <span className="w-1 h-1 bg-neutral-200 rounded-full" />
            <span>{post.readTime}</span>
          </div>
          
          <h3 className="text-base md:text-lg font-bold text-[#26201D] mb-3 group-hover:text-[#FF821C] transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h3>
          
          <p className="text-neutral-500 leading-relaxed mb-6 flex-grow line-clamp-3 text-[13px]">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-5 border-t border-neutral-50">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#FAF8F5] flex items-center justify-center text-neutral-500 font-bold text-[10px] border border-neutral-100">
                {displayAuthor.charAt(0)}
              </div>
              <span className="text-xs font-bold text-[#26201D]">{displayAuthor}</span>
            </div>
            
            <div className="flex items-center text-[#FF821C] font-bold text-xs">
              <span className="mr-1">Read</span>
              <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
