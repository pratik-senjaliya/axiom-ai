"use client";

import { useState } from "react";
import { BlogPost } from "@/lib/blog";
import { BlogCard } from "./BlogCard";
import { BlogFilter } from "./BlogFilter";

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const serviceMap: { [key: string]: string } = {
    "AI Implementation": "ai",
    "ERP Transformation": "erp",
    "Data & Analytics": "data",
    "Managed Delivery": "managed",
    "Sustainability": "sustainability"
  };

  const categories = Object.keys(serviceMap);
  
  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter((p) => p.relatedService === serviceMap[activeCategory]);

  const featuredPost = activeCategory === "All" ? filteredPosts[0] : null;
  const gridPosts = activeCategory === "All" ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div className="container-custom px-4 relative z-10">
      <BlogFilter 
        categories={categories} 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      {featuredPost && (
        <div className="animate-fade-up">
          <BlogCard post={featuredPost} featured={true} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {gridPosts.map((post, idx) => (
          <div key={post.id || idx} className="animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            <BlogCard post={post} />
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-xl text-neutral-400">No articles found in this category.</p>
        </div>
      )}
    </div>
  );
}
