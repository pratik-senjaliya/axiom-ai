"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { PortableText } from "@/components/ui/PortableText";

export interface HorizontalFeatureItem {
  title: string;
  description: string | any[];
  icon: React.ReactNode;
  outcomeTitle?: string;
  outcomeDescription?: string | any[];
}

interface HorizontalFeatureProps {
  title?: string;
  description?: string | any[];
  items: HorizontalFeatureItem[];
  bgWhite?: boolean;
}

export const HorizontalFeature: React.FC<HorizontalFeatureProps> = ({
  title,
  description,
  items,
  bgWhite = false
}) => {
  return (
    <section className="py-16" style={{ background: bgWhite ? '#0A0F1F' : '#14243A' }}>
      <div className="container-custom px-4">
        {(title || description) && (
          <div className="max-w-3xl mb-16">
            {title && <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>}
            {description && (
              <div className="text-lg leading-relaxed" style={{ color: '#8FA3BF' }}>
                <PortableText value={description} />
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group rounded-[2rem] p-8 md:p-10 flex flex-col items-start gap-8 transition-all duration-300 h-full"
              style={{ background: 'rgba(26,46,71,0.6)', border: '1px solid rgba(0,229,255,0.12)', backdropFilter: 'blur(10px)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,229,255,0.35)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(0,229,255,0.1), 0 20px 40px rgba(0,0,0,0.3)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,229,255,0.12)'; (e.currentTarget as HTMLElement).style.boxShadow = ''; }}
            >
              {/* Icon */}
              <div className="w-16 h-16 shrink-0 rounded-[1.5rem] flex items-center justify-center text-[#0A0F1F] group-hover:scale-105 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #1DA1F2, #00E5FF)', boxShadow: '0 0 25px rgba(0,229,255,0.35)' }}>
                {item.icon}
              </div>
 
              {/* Content */}
              <div className="flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00E5FF] transition-colors">
                  {item.title}
                </h3>
                <div className="text-base md:text-lg leading-relaxed mb-6 flex-grow" style={{ color: '#8FA3BF' }}>
                  <PortableText value={item.description} />
                </div>
 
                {/* Outcome Footer */}
                {item.outcomeTitle && (
                  <div className="mt-auto inline-flex flex-col gap-2 rounded-2xl px-6 py-4" style={{ background: 'rgba(0,229,255,0.07)', border: '1px solid rgba(0,229,255,0.2)' }}>
                    <span className="text-xs font-bold uppercase tracking-wider shrink-0" style={{ color: '#00E5FF' }}>
                      {item.outcomeTitle}
                    </span>
                    <div className="text-sm font-medium" style={{ color: '#C5D1E0' }}>
                      <PortableText value={item.outcomeDescription} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
