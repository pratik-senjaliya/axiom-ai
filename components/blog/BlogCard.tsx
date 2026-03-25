import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Link href={`/insights/${post.slug}`} className="group block mb-12">
        <div className="relative h-[400px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
          ) : (
            <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
              <span className="text-neutral-400">No Image</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#26201D] via-[#26201D]/30 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-6 md:p-8 lg:p-10 w-full max-w-4xl">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-[#FF821C] text-white text-xs font-bold tracking-wider uppercase shadow-lg">
                Featured Article
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase border border-white/20">
                {post.category}
              </span>
              <span className="text-white/80 text-sm font-medium">{post.readTime}</span>
            </div>
            
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight transition-colors group-hover:text-[#FF821C]">
              {post.title}
            </h2>
            
            <p className="text-sm md:text-base text-white/80 line-clamp-2 max-w-2xl mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FF821C] to-[#AD58D9] p-0.5 shadow-lg">
                <div className="w-full h-full rounded-full bg-[#26201D] flex items-center justify-center text-white font-bold text-lg">
                  {post.author?.charAt(0)}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold">{post.author}</span>
                <span className="text-white/60 text-sm">{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/insights/${post.slug}`} className="group h-full flex flex-col">
      <div className="card h-full bg-white border border-neutral-100 rounded-[2rem] hover:border-primary-200 transition-all shadow-sm hover:shadow-xl flex flex-col overflow-hidden">
        <div className="relative h-64 overflow-hidden">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-neutral-100" />
          )}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#FF821C] text-[10px] font-bold tracking-wider uppercase border border-[#FF821C]/20 shadow-sm">
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-3 text-neutral-400 text-[10px] font-semibold uppercase tracking-wider">
            <span>{post.date}</span>
            <span className="w-1 h-1 bg-neutral-300 rounded-full" />
            <span>{post.readTime}</span>
          </div>
          
          <h3 className="text-lg md:text-xl font-bold text-[#26201D] mb-3 group-hover:text-[#FF821C] transition-colors line-clamp-2 leading-tight">
            {post.title}
          </h3>
          
          <p className="text-neutral-500 leading-relaxed mb-6 flex-grow line-clamp-3 text-sm">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-neutral-50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 font-bold text-xs border border-neutral-200">
                {post.author?.charAt(0)}
              </div>
              <span className="text-sm font-bold text-[#26201D]">{post.author}</span>
            </div>
            
            <div className="flex items-center text-[#FF821C] font-bold text-sm group-hover:gap-2 transition-all">
              Read More
              <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
