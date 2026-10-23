import React from "react";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";
import { ArrowIcon, Section, SectionHeader, TextLink } from "@/components/ui/kit";

interface RelatedInsightsProps {
  posts: BlogPost[];
  serviceName: string;
  compact?: boolean;
}

export function RelatedInsights({ posts, serviceName, compact = false }: RelatedInsightsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <Section tone="raised" size={compact ? "sm" : "md"} divider>
      <SectionHeader
        eyebrow="Related insights"
        title={`Expertise in ${serviceName}`}
        as="h5"
        layout="split"
        actions={<TextLink href="/insights">View all insights</TextLink>}
        className="mb-12"
      />

      <div className="grid gap-x-10 gap-y-2 md:grid-cols-3">
        {posts.map((post, index) => (
          <Link
            key={post.slug || index}
            href={`/insights/${post.slug || ""}`}
            className="reveal group flex flex-col border-t border-line py-8 transition-colors hover:border-line-accent"
          >
            <div className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.14em]">
              <span className="text-accent">{post.category || "Insight"}</span>
              <span className="h-1 w-1 rounded-full bg-muted/50" />
              <span className="text-muted">{post.readTime || "5 min read"}</span>
            </div>
            <h3 className="h-card transition-colors group-hover:text-white">{post.title}</h3>
            {post.excerpt && <p className="copy mt-3 line-clamp-3">{post.excerpt}</p>}
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-fg">
              Read article
              <ArrowIcon className="h-4 w-4 text-accent transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
