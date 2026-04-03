import { BlogPost } from "@/lib/blog";
import { BlogCard } from "./BlogCard";
import { BlogFilter } from "./BlogFilter";
import { StaggerGroup, StaggerItem } from "@/components/ui/animations/StaggerGroup";

interface BlogListProps {
  posts: BlogPost[];
  activeCategory: string;
  categories: string[];
}

export function BlogList({ posts, activeCategory, categories }: BlogListProps) {
  const featuredPost = posts.length > 0 ? posts[0] : null;
  const gridPosts = posts.slice(1);

  return (
    <div className="px-4 relative z-10 max-w-[95rem] mx-auto w-full">
      <BlogFilter 
        categories={categories} 
        activeCategory={activeCategory} 
      />

      {featuredPost && (
        <div className="mb-16">
          <BlogCard post={featuredPost} featured={true} />
        </div>
      )}

      {posts.length > 0 ? (
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {gridPosts.map((post, idx) => (
            <StaggerItem key={post.id || idx}>
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      ) : (
        <div className="py-32 text-center border border-white/5 bg-white/[0.02] rounded-[3rem] backdrop-blur-sm">
          <p className="text-xl font-medium text-white/40 tracking-wide uppercase">No articles found in this category.</p>
        </div>
      )}
    </div>
  );
}
