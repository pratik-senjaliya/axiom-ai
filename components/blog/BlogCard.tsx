"use client";

import Link from "next/link";
import Image from "next/image";
import { BlogPost, BLOG_INDUSTRY_CATEGORIES, BLOG_SERVICE_CATEGORIES } from "@/lib/blog";
import { AuthorAvatar } from "@/components/blog/AuthorAvatar";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

function resolveCategoryLabel(post: BlogPost): string {
  const service = BLOG_SERVICE_CATEGORIES.find((c) => c.value === post.relatedService);
  if (service) return service.label;
  const industry = BLOG_INDUSTRY_CATEGORIES.find((c) => c.value === post.relatedIndustry);
  if (industry) return industry.label;
  return post.category || "Insights";
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const displayCategory = resolveCategoryLabel(post);

  const displayAuthor = (post.author?.toLowerCase().includes("pratik") ||
    post.author?.toLowerCase().includes("senjaliya") ||
    post.author?.toLowerCase().includes("xconcile") ||
    !post.author)
    ? "SyncOrigins"
    : post.author;

  if (featured) {
    return (
      <Link href={`/insights/${post.slug || ""}`} className="group block w-full min-w-0">
        <div
          className="rounded-2xl md:rounded-[2rem] overflow-hidden transition-all duration-500 w-full"
          style={{
            background: "rgba(26,46,71,0.7)",
            border: "1px solid rgba(0,229,255,0.15)",
            boxShadow: "0 0 40px rgba(0,0,0,0.35)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            <div className="order-2 lg:order-1 p-4 sm:p-6 md:p-10 flex flex-col justify-center min-w-0">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span
                  className="px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold tracking-wider uppercase"
                  style={{ background: "linear-gradient(135deg, #1DA1F2, #00E5FF)", color: "#0A0F1F" }}
                >
                  Featured
                </span>
                <span
                  className="px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold tracking-wider uppercase border max-w-full truncate"
                  style={{ background: "rgba(0,229,255,0.1)", borderColor: "rgba(0,229,255,0.3)", color: "#00E5FF" }}
                >
                  {displayCategory}
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold" style={{ color: "#8FA3BF" }}>
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 leading-snug transition-colors group-hover:text-[#00E5FF]">
                {post.title}
              </h2>

              <p className="text-sm line-clamp-3 max-w-2xl mb-4 sm:mb-6 leading-relaxed" style={{ color: "#8FA3BF" }}>
                {post.excerpt}
              </p>

              <div className="flex items-center gap-3 min-w-0">
                <AuthorAvatar author={displayAuthor} size="md" />
                <div className="flex flex-col min-w-0">
                  <span className="text-white text-sm font-bold truncate">{displayAuthor}</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: "#8FA3BF" }}>
                    {post.date}
                  </span>
                </div>
              </div>
            </div>

            <div
              className="order-1 lg:order-2 relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[380px]"
              style={{ background: "rgba(13,27,42,0.9)" }}
            >
              {post.image ? (
                <Image
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  unoptimized
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #0D1B2A, #14243A)" }}
                >
                  <span style={{ color: "#14243A" }}>SyncOrigins Insights</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/insights/${post.slug || ""}`} className="group h-full flex flex-col min-w-0 w-full">
      <div
        className="h-full flex flex-col overflow-hidden rounded-2xl md:rounded-[1.5rem] transition-all duration-300 w-full"
        style={{
          background: "rgba(26,46,71,0.7)",
          border: "1px solid rgba(0,229,255,0.12)",
          backdropFilter: "blur(10px)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "rgba(0,229,255,0.35)";
          el.style.boxShadow = "0 0 25px rgba(0,229,255,0.1), 0 20px 40px rgba(0,0,0,0.4)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "rgba(0,229,255,0.12)";
          el.style.boxShadow = "";
        }}
      >
        <div className="relative aspect-[16/10] overflow-hidden shrink-0" style={{ background: "rgba(13,27,42,0.9)" }}>
          {post.image ? (
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              unoptimized
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center px-4"
              style={{ background: "linear-gradient(135deg, #0D1B2A, #14243A)" }}
            >
              <span className="font-bold text-center line-clamp-2 text-sm" style={{ color: "#5A6F8A" }}>
                {post.title}
              </span>
            </div>
          )}
        </div>

        <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2.5 sm:mb-3">
            <span
              className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] font-bold tracking-wider uppercase max-w-[70%] truncate"
              style={{
                background: "rgba(0,229,255,0.12)",
                color: "#00E5FF",
                border: "1px solid rgba(0,229,255,0.3)",
              }}
            >
              {displayCategory}
            </span>
            <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: "#8FA3BF" }}>
              {post.readTime}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 group-hover:text-[#00E5FF] transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h3>

          <p className="leading-relaxed mb-4 sm:mb-6 flex-grow line-clamp-3 text-sm" style={{ color: "#8FA3BF" }}>
            {post.excerpt}
          </p>

          <div
            className="flex items-center justify-between gap-3 pt-4 border-t mt-auto"
            style={{ borderColor: "rgba(0,229,255,0.1)" }}
          >
            <div className="flex items-center gap-2 min-w-0">
              <AuthorAvatar author={displayAuthor} size="xs" />
              <span className="text-xs font-bold text-white truncate">{displayAuthor}</span>
            </div>

            <div className="flex items-center font-bold text-xs shrink-0" style={{ color: "#00E5FF" }}>
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
