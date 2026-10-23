"use client";

import Link from "next/link";
import { BlogPost, BLOG_INDUSTRY_CATEGORIES, BLOG_SERVICE_CATEGORIES } from "@/lib/blog";
import { AuthorAvatar } from "@/components/blog/AuthorAvatar";
import { BlogCoverImage } from "@/components/blog/BlogCoverImage";

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

  const cover = post.imageCard || post.image;

  if (featured) {
    return (
      <Link href={`/insights/${post.slug || ""}`} className="group grid w-full min-w-0 items-center gap-8 lg:grid-cols-12 lg:gap-14">
        <div className="min-w-0 overflow-hidden rounded-2xl border border-line lg:order-2 lg:col-span-7">
          {cover ? (
            <BlogCoverImage
              src={cover}
              alt={post.imageAlt || post.title}
              variant="card"
              aspectClassName="aspect-[16/10]"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
              hoverZoom
            />
          ) : (
            <div className="flex aspect-[16/10] w-full items-center justify-center bg-ink-800">
              <span className="font-display text-muted">SyncOrigins Insights</span>
            </div>
          )}
        </div>

        <div className="min-w-0 lg:order-1 lg:col-span-5">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.14em]">
            <span className="rounded-full bg-accent/10 px-2.5 py-1 text-accent">Featured</span>
            <span className="text-accent">{displayCategory}</span>
            {post.readTime && (
              <>
                <span className="h-1 w-1 rounded-full bg-muted/50" />
                <span className="text-muted">{post.readTime}</span>
              </>
            )}
          </div>

          <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight text-fg transition-colors group-hover:text-white sm:text-3xl lg:text-[2.125rem]">
            {post.title}
          </h2>

          {post.excerpt && <p className="copy mt-4 line-clamp-3">{post.excerpt}</p>}

          <div className="mt-8 flex items-center gap-3">
            <AuthorAvatar author={displayAuthor} size="md" />
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-semibold text-fg">{displayAuthor}</span>
              <span className="text-xs text-muted">{post.date}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/insights/${post.slug || ""}`} className="group flex h-full w-full min-w-0 flex-col">
      <div className="overflow-hidden rounded-xl border border-line">
        {cover ? (
          <BlogCoverImage
            src={cover}
            alt={post.imageAlt || post.title}
            variant="card"
            aspectClassName="aspect-[16/10]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            hoverZoom
          />
        ) : (
          <div className="flex aspect-[16/10] w-full items-center justify-center bg-ink-800 px-6">
            <span className="line-clamp-2 text-center font-display text-sm text-muted">{post.title}</span>
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-grow flex-col pt-6">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.14em]">
          <span className="max-w-[70%] truncate text-accent">{displayCategory}</span>
          {post.date && (
            <>
              <span className="h-1 w-1 rounded-full bg-muted/50" />
              <span className="text-muted">{post.date}</span>
            </>
          )}
          {post.readTime && (
            <>
              <span className="h-1 w-1 rounded-full bg-muted/50" />
              <span className="text-muted">{post.readTime}</span>
            </>
          )}
        </div>

        <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-fg transition-colors line-clamp-2 group-hover:text-white sm:text-xl">
          {post.title}
        </h3>

        {post.excerpt && <p className="copy mt-3 line-clamp-3 flex-grow">{post.excerpt}</p>}

        <div className="mt-6 flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <AuthorAvatar author={displayAuthor} size="xs" />
            <span className="truncate text-sm text-body">{displayAuthor}</span>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-fg">
            Read article
            <svg className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
