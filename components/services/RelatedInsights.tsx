import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { BlogPost } from '@/lib/blog';

interface RelatedInsightsProps {
  posts: BlogPost[];
  serviceName: string;
}

export function RelatedInsights({ posts, serviceName }: RelatedInsightsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-orange-500/5 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none"></div>
      
      <div className="container-custom px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4 text-[#FF821C] font-semibold text-xs tracking-wide uppercase">
              <span className="text-xl leading-none font-light block -mt-1">+</span>
              <span>Related Insights</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#26201D] tracking-tight">
              Expertise In {serviceName}
            </h2>
          </div>
          
          <Link 
            href="/insights" 
            className="group flex items-center text-[#FF821C] font-bold text-[15px] hover:text-[#DE2297] transition-all"
          >
            View all insights
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link 
              key={index} 
              href={`/insights/${post.slug}`}
              className="group block bg-white rounded-[2rem] overflow-hidden border border-neutral-100 hover:border-orange-200 hover:shadow-[0_20px_40px_-15px_rgba(255,130,28,0.08)] transition-all duration-300"
            >
              {/* Blog Card Content */}
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6 text-[12px] font-semibold text-[#FF821C]">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-orange-50 rounded-full">
                    <Tag size={12} fill="currentColor" className="opacity-40" />
                    {post.category || "Insight"}
                  </span>
                  <span className="flex items-center gap-1.5 text-neutral-400">
                    <Clock size={12} />
                    {post.readTime || "5 min read"}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-[#26201D] mb-4 group-hover:text-[#FF821C] transition-colors leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-neutral-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="pt-6 border-t border-neutral-50 flex items-center justify-between text-sm font-bold text-[#26201D]">
                  <span className="group-hover:text-[#FF821C] transition-colors">Read case study</span>
                  <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center group-hover:bg-[#FF821C] group-hover:text-white transition-all">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
