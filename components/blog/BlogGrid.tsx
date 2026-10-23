"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { BlogPost, BLOG_SERVICE_CATEGORIES, BLOG_INDUSTRY_CATEGORIES, postMatchesCategory } from "@/lib/blog";
import { BlogCard } from "./BlogCard";
import { PortableText } from "@/components/ui/PortableText";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Eyebrow } from "@/components/ui/kit";
import { cn } from "@/lib/utils";

interface BlogGridProps {
  posts: BlogPost[];
  categories: string[];
  initialCategory?: string;
  pageData: any;
}

export function BlogGrid({ posts, categories, initialCategory = "All", pageData }: BlogGridProps) {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    const currentCat = searchParams.get("category") || "All";
    if (currentCat !== activeCategory) {
      setActiveCategory(currentCat);
    }
  }, [searchParams, activeCategory]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    const url = new URL(window.location.href);
    if (category === "All") {
      url.searchParams.delete("category");
    } else {
      url.searchParams.set("category", category);
    }
    window.history.pushState({}, "", url);
  };

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter((p) => postMatchesCategory(p, activeCategory));
  }, [posts, activeCategory]);

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const gridPosts = filteredPosts.slice(1);

  const serviceLabels = BLOG_SERVICE_CATEGORIES.map((c) => c.label).filter((l) =>
    categories.includes(l)
  );
  const industryLabels = BLOG_INDUSTRY_CATEGORIES.map((c) => c.label).filter((l) =>
    categories.includes(l)
  );
  const allCategories = ["All", ...serviceLabels, ...industryLabels];

  return (
    <div className="w-full overflow-x-clip">
      <section className="relative overflow-hidden bg-ink-900 pb-12 pt-10 sm:pt-12 lg:pb-16">
        <div aria-hidden className="bg-grid-fade" />
        <div className="container-custom relative">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Insights" },
            ]}
            className="mb-10 lg:mb-12"
          />
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow className="mb-6">Strategic Insights</Eyebrow>
              <h1 className="h-display">
                Industry Insights through <span className="gradient-text">Agentic Thinking</span>
              </h1>
            </div>
            <div className="lead lg:col-span-5">
              <PortableText value={pageData?.description} />
            </div>
          </div>

          <div className="-mx-5 mt-12 overflow-x-auto px-5 hide-scrollbar sm:mx-0 sm:px-0">
            <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap" role="tablist" aria-label="Filter insights">
              {allCategories.map((category) => {
                const active = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => handleCategoryClick(category)}
                    className={cn(
                      "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                      active
                        ? "border-fg bg-fg text-ink-900"
                        : "border-line text-body hover:border-line-strong hover:text-fg"
                    )}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-ink-900 pb-20 pt-4 lg:pb-28">
        <div className="container-custom">
          <motion.div layout className="min-h-0 md:min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {featuredPost && (
                <motion.div
                  layout
                  key={featuredPost.id || featuredPost.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                  className="mb-14 border-b border-line pb-14 lg:mb-16 lg:pb-16"
                >
                  <BlogCard post={featuredPost} featured />
                </motion.div>
              )}

              {gridPosts.length > 0 ? (
                <motion.div layout className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                  {gridPosts.map((post, idx) => (
                    <motion.div
                      layout
                      key={post.id || post.title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.2) }}
                      className="h-full min-w-0"
                    >
                      <BlogCard post={post} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                !featuredPost && (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="panel px-6 py-16 text-center"
                  >
                    <p className="font-display text-lg text-body">No articles found in this category yet.</p>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
