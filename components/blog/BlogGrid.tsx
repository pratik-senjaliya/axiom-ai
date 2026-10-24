"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { BlogPost, BLOG_SERVICE_CATEGORIES, BLOG_INDUSTRY_CATEGORIES, postMatchesCategory } from "@/lib/blog";
import { BlogCard } from "./BlogCard";
import { PortableText } from "@/components/ui/PortableText";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

interface BlogGridProps {
  posts: BlogPost[];
  categories: string[];
  initialCategory?: string;
  pageData: any;
}

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00E5FF">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="#00E5FF"/>
  </svg>
);

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
      <section
        className="relative pt-8 sm:pt-12 pb-10 sm:pb-16 overflow-hidden text-center"
        style={{ background: "linear-gradient(180deg, #0A0F1F 0%, #0D1B2A 100%)" }}
      >
        <div className="bg-grid opacity-60 z-0" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70rem] h-[40rem] rounded-full blur-[130px] pointer-events-none z-0"
          style={{ background: "radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)" }}
        />

        <SlideUp className="container-custom relative z-10 px-4 flex flex-col items-center">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Insights" },
            ]}
            className="mb-4 sm:mb-6 justify-center"
          />
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border mb-5 sm:mb-8"
            style={{
              background: "rgba(0,229,255,0.08)",
              borderColor: "rgba(0,229,255,0.3)",
              backdropFilter: "blur(8px)",
            }}
          >
            <SparkleIcon />
            <span className="tracking-wide uppercase text-[10px] sm:text-xs font-semibold" style={{ color: "#00E5FF" }}>
              Strategic Insights
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 max-w-5xl mx-auto leading-tight px-1">
            Industry Insights through <span className="gradient-text">Agentic Thinking</span>
          </h1>
          <div
            className="max-w-3xl mx-auto mb-6 sm:mb-10 text-[#8FA3BF] text-sm sm:text-base [&>p]:text-sm sm:[&>p]:text-base [&>p]:leading-relaxed px-1"
            style={{ color: "#8FA3BF" }}
          >
            <PortableText value={pageData?.description} />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2.5 md:gap-3 relative z-20 mx-auto w-full max-w-5xl px-0">
            {allCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryClick(category)}
                className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-[0.58rem] sm:text-[0.65rem] font-bold uppercase tracking-wider sm:tracking-widest transition-all duration-300 border"
                style={
                  activeCategory === category
                    ? {
                        background: "linear-gradient(135deg, #1DA1F2, #00E5FF)",
                        color: "#0A0F1F",
                        borderColor: "transparent",
                        boxShadow: "0 0 16px rgba(0,229,255,0.28)",
                      }
                    : {
                        background: "rgba(20,36,58,0.7)",
                        borderColor: "rgba(0,229,255,0.1)",
                        color: "#8FA3BF",
                      }
                }
              >
                {category}
              </button>
            ))}
          </div>
        </SlideUp>
      </section>

      <section className="pb-12 sm:pb-16 md:pb-20 pt-8 sm:pt-10 md:pt-12 relative z-10" style={{ background: "#0A0F1F" }}>
        <div className="px-4 sm:px-5 relative z-10 max-w-[95rem] mx-auto w-full">
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
                  className="mb-8 sm:mb-12 md:mb-16"
                >
                  <BlogCard post={featuredPost} featured />
                </motion.div>
              )}

              {gridPosts.length > 0 ? (
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-8 mb-8 sm:mb-10 md:mb-12"
                >
                  {gridPosts.map((post, idx) => (
                    <motion.div
                      layout
                      key={post.id || post.title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.2) }}
                      className="min-w-0 h-full"
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
                    className="py-12 sm:py-16 md:py-20 text-center border border-white/5 bg-white/[0.02] rounded-2xl sm:rounded-[2rem] backdrop-blur-sm px-4"
                  >
                    <p className="text-sm sm:text-base md:text-xl font-medium text-white/40 tracking-wide uppercase">
                      No articles found in this category.
                    </p>
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
