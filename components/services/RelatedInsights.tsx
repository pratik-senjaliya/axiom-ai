"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { BlogPost } from '@/lib/blog';
import { SlideUp } from '@/components/ui/animations/SlideUp';
import { StaggerGroup, StaggerItem } from '@/components/ui/animations/StaggerGroup';

interface RelatedInsightsProps {
  posts: BlogPost[];
  serviceName: string;
}

export function RelatedInsights({ posts, serviceName }: RelatedInsightsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#0A0F1F' }}>
      {/* Glow */}
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)' }} />

      <div className="container-custom px-4 relative z-10">
        <SlideUp className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4 font-semibold text-xs tracking-wide uppercase" style={{ color: '#00E5FF' }}>
              <span className="text-xl leading-none font-light block -mt-1">+</span>
              <span>Related Insights</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Expertise In {serviceName}
            </h2>
          </div>

          <Link
            href="/insights"
            className="group flex items-center font-bold text-[15px] transition-all"
            style={{ color: '#00E5FF' }}
          >
            View all insights
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </SlideUp>

        <StaggerGroup className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <StaggerItem key={index} className="h-full">
            <Link
              href={`/insights/${post.slug}`}
              className="group block rounded-[2rem] overflow-hidden transition-all duration-300 h-full"
              style={{ background: 'rgba(26,46,71,0.6)', border: '1px solid rgba(0,229,255,0.12)', backdropFilter: 'blur(10px)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,229,255,0.35)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(0,229,255,0.1), 0 20px 40px rgba(0,0,0,0.3)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,229,255,0.12)'; (e.currentTarget as HTMLElement).style.boxShadow = ''; }}
            >
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6 text-[12px] font-semibold" style={{ color: '#00E5FF' }}>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full" style={{ background: 'rgba(0,229,255,0.1)' }}>
                    <Tag size={12} fill="currentColor" className="opacity-60" />
                    {post.category || "Insight"}
                  </span>
                  <span className="flex items-center gap-1.5" style={{ color: '#8FA3BF' }}>
                    <Clock size={12} />
                    {post.readTime || "5 min read"}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00E5FF] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-sm leading-relaxed mb-8 flex-grow line-clamp-3" style={{ color: '#8FA3BF' }}>
                  {post.excerpt}
                </p>

                <div className="pt-6 flex items-center justify-between text-sm font-bold border-t" style={{ borderColor: 'rgba(0,229,255,0.1)' }}>
                  <span className="group-hover:text-[#00E5FF] transition-colors" style={{ color: '#C5D1E0' }}>Read case study</span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all" style={{ background: 'rgba(0,229,255,0.1)', color: '#00E5FF' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#00E5FF'; (e.currentTarget as HTMLElement).style.color = '#0A0F1F'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,229,255,0.1)'; (e.currentTarget as HTMLElement).style.color = '#00E5FF'; }}
                  >
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
