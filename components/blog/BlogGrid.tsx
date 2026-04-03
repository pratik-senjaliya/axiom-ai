"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { BlogPost } from "@/lib/blog";
import { BlogCard } from "./BlogCard";
import { StaggerGroup, StaggerItem } from "@/components/ui/animations/StaggerGroup";

import { PortableText } from "@/components/ui/PortableText";
import { SlideUp } from "@/components/ui/animations/SlideUp";

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

  const serviceMap: { [key: string]: string } = {
    "AI Implementation": "ai",
    "ERP Transformation": "erp",
    "Data & Analytics": "data",
    "Managed Delivery": "managed",
    "Sustainability": "sustainability"
  };

  // Sync with URL
  useEffect(() => {
    const currentCat = searchParams.get('category') || "All";
    if (currentCat !== activeCategory) {
      setActiveCategory(currentCat);
    }
  }, [searchParams, activeCategory]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    
    // SILENT URL UPDATE: Avoids Next.js Re-render Blink
    const url = new URL(window.location.href);
    if (category === "All") {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', category);
    }
    window.history.pushState({}, '', url);
  };

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter((p) => p.relatedService === serviceMap[activeCategory]);
  }, [posts, activeCategory]);

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const gridPosts = filteredPosts.slice(1);

  const allCategories = ["All", ...categories.filter(c => c && c !== "All")];

  return (
    <div className="w-full">
       {/* ── Hero Section (Inside Client Component for seamless filtering) ── */}
       <section className="relative pt-20 pb-20 overflow-hidden text-center" style={{ background: 'linear-gradient(180deg, #0A0F1F 0%, #0D1B2A 100%)' }}>
        <div className="bg-grid opacity-60 z-0" />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70rem] h-[40rem] rounded-full blur-[130px] pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)' }} />
        
        <SlideUp className="container-custom relative z-10 px-4 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8" style={{ background: 'rgba(0,229,255,0.08)', borderColor: 'rgba(0,229,255,0.3)', backdropFilter: 'blur(8px)' }}>
            <SparkleIcon />
            <span className="tracking-wide uppercase text-xs font-semibold" style={{ color: '#00E5FF' }}>
               Strategic Insights
            </span>
          </div>
          <h1 className="type-hero-title text-white mb-6 max-w-5xl mx-auto">
             Industry Insights through <span className="gradient-text">Agentic Thinking</span>
          </h1>
          <div className="type-body-large max-w-3xl mx-auto mb-10 text-[#8FA3BF] [&>p]:text-lg [&>p]:leading-relaxed" style={{ color: '#8FA3BF' }}>
            <PortableText value={pageData?.description} />
          </div>

          {/* ── Filter Bar (Moved into Hero) ── */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 relative z-20 mx-auto">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="px-6 py-2.5 rounded-full text-[0.7rem] font-bold uppercase tracking-widest transition-all duration-300 border flex-shrink-0"
                style={
                  activeCategory === category
                    ? {
                        background: 'linear-gradient(135deg, #1DA1F2, #00E5FF)',
                        color: '#0A0F1F',
                        borderColor: 'transparent',
                        boxShadow: '0 0 20px rgba(0,229,255,0.3)',
                        transform: 'scale(1.05)',
                      }
                    : {
                        background: 'rgba(20,36,58,0.7)',
                        borderColor: 'rgba(0,229,255,0.1)',
                        color: '#8FA3BF',
                      }
                }
              >
                {category}
              </button>
            ))}
          </div>
        </SlideUp>
      </section>

      {/* ── Animated Grid section ── */}
      <section className="pb-32 pt-16 relative z-10" style={{ background: '#0A0F1F' }}>
        <div className="px-4 relative z-10 max-w-[95rem] mx-auto w-full">
          <motion.div layout className="min-h-[800px]">
            <AnimatePresence mode="popLayout">
              {featuredPost && (
                <motion.div
                  layout
                  key={featuredPost.id || featuredPost.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  className="mb-16"
                >
                  <BlogCard post={featuredPost} featured={true} />
                </motion.div>
              )}

              {gridPosts.length > 0 ? (
                <motion.div 
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
                >
                  {gridPosts.map((post, idx) => (
                    <motion.div
                      layout
                      key={post.id || post.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                    >
                      <BlogCard post={post} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : !featuredPost && (
                <motion.div 
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-32 text-center border border-white/5 bg-white/[0.02] rounded-[3rem] backdrop-blur-sm"
                >
                  <p className="text-xl font-medium text-white/40 tracking-wide uppercase">No articles found in this category.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
