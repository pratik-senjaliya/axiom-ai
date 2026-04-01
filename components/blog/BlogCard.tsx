"use client";

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

  const displayAuthor = (post.author?.toLowerCase().includes("pratik") ||
    post.author?.toLowerCase().includes("senjaliya") ||
    post.author?.toLowerCase().includes("xconcile") ||
    !post.author)
    ? "AxiomAI Team"
    : post.author;

  if (featured) {
    return (
      <Link href={`/insights/${post.slug}`} className="group block mb-12">
        <div className="relative h-[350px] md:h-[450px] w-full rounded-[2rem] overflow-hidden transition-transform duration-500 group-hover:scale-[1.005]" style={{ boxShadow: '0 0 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,229,255,0.15)' }}>
          {post.image ? (
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
              unoptimized
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0D1B2A, #14243A)' }}>
              <span style={{ color: '#14243A' }}>AxiomAI Insights</span>
            </div>
          )}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,15,31,0.95) 0%, rgba(10,15,31,0.5) 40%, transparent 100%)' }} />

          {/* Cyan glow line on hover */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(to right, transparent, #00E5FF, transparent)' }} />

          <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase" style={{ background: 'linear-gradient(135deg, #1DA1F2, #00E5FF)', color: '#0A0F1F' }}>
                Featured
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border" style={{ background: 'rgba(0,229,255,0.1)', borderColor: 'rgba(0,229,255,0.3)', color: '#00E5FF' }}>
                {displayCategory}
              </span>
              <span className="text-[10px] font-semibold" style={{ color: '#8FA3BF' }}>{post.readTime}</span>
            </div>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight transition-colors group-hover:text-[#00E5FF]">
              {post.title}
            </h2>

            <p className="text-xs md:text-sm line-clamp-2 max-w-2xl mb-6 leading-relaxed" style={{ color: '#8FA3BF' }}>
              {post.excerpt}
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border" style={{ background: 'rgba(0,229,255,0.1)', borderColor: 'rgba(0,229,255,0.3)', color: '#00E5FF' }}>
                {displayAuthor.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="text-white text-sm font-bold">{displayAuthor}</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: '#8FA3BF' }}>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/insights/${post.slug}`} className="group h-full flex flex-col">
      <div className="h-full flex flex-col overflow-hidden rounded-[1.5rem] transition-all duration-300" style={{ background: 'rgba(26,46,71,0.7)', border: '1px solid rgba(0,229,255,0.12)', backdropFilter: 'blur(10px)' }}
        onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(0,229,255,0.35)'; el.style.boxShadow = '0 0 25px rgba(0,229,255,0.1), 0 20px 40px rgba(0,0,0,0.4)'; }}
        onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(0,229,255,0.12)'; el.style.boxShadow = ''; }}
      >
        <div className="relative h-56 overflow-hidden">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0D1B2A, #14243A)' }}>
              <span className="font-bold truncate px-4" style={{ color: '#14243A' }}>{post.title}</span>
            </div>
          )}
          {/* Cyan shimmer overlay on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(0,229,255,0.15) 100%)' }} />
          <div className="absolute top-4 left-4">
            <span className="px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase" style={{ background: 'rgba(0,229,255,0.12)', color: '#00E5FF', border: '1px solid rgba(0,229,255,0.3)', backdropFilter: 'blur(8px)' }}>
              {displayCategory}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-3 text-[9px] font-bold uppercase tracking-widest" style={{ color: '#8FA3BF' }}>
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full" style={{ background: '#14243A' }} />
            <span>{post.readTime}</span>
          </div>

          <h3 className="text-base md:text-lg font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h3>

          <p className="leading-relaxed mb-6 flex-grow line-clamp-3 text-[13px]" style={{ color: '#8FA3BF' }}>
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-5 border-t" style={{ borderColor: 'rgba(0,229,255,0.1)' }}>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-[10px] border" style={{ background: 'rgba(0,229,255,0.08)', borderColor: 'rgba(0,229,255,0.2)', color: '#00E5FF' }}>
                {displayAuthor.charAt(0)}
              </div>
              <span className="text-xs font-bold text-white">{displayAuthor}</span>
            </div>

            <div className="flex items-center font-bold text-xs" style={{ color: '#00E5FF' }}>
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
