"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { StaggerGroup, StaggerItem } from "@/components/ui/animations/StaggerGroup";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  showMoreLink?: boolean;
  moreLinkHref?: string;
  moreLinkText?: string;
}

export const FAQ: React.FC<FAQProps> = ({
  items,
  title = "Frequently Asked Questions",
  showMoreLink = false,
  moreLinkHref = "/faq",
  moreLinkText = "More FAQs →",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {(title || showMoreLink) && (
        <SlideUp className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          {title && (
            <h2 className="type-section-title text-white mb-4 sm:mb-0">
              {title}
            </h2>
          )}
          {showMoreLink && (
            <a
              href={moreLinkHref}
              className="font-medium hover:text-[#00E5FF] transition-colors"
              style={{ color: '#C5D1E0' }}
            >
              {moreLinkText}
            </a>
          )}
        </SlideUp>
      )}

      <StaggerGroup className="space-y-4 max-w-4xl mx-auto">
        {items.map((item, index) => (
          <StaggerItem
            key={index}
            className="border overflow-hidden rounded-2xl transition-all duration-300"
            style={{ 
              borderColor: openIndex === index ? 'rgba(0,229,255,0.4)' : 'rgba(0,229,255,0.15)',
              background: openIndex === index ? 'rgba(0,229,255,0.05)' : 'rgba(26,46,71,0.6)',
              backdropFilter: 'blur(10px)',
              boxShadow: openIndex === index ? '0 0 20px rgba(0,229,255,0.1)' : 'none'
            }}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-5 text-left flex items-center justify-between transition-colors hover:bg-white/5"
            >
              <span className="font-semibold text-lg text-white pr-4">
                {item.question}
              </span>
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                style={{ background: 'rgba(0,229,255,0.1)', color: '#00E5FF', transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
            {openIndex === index && (
              <div className="px-6 py-5 border-t" style={{ borderColor: 'rgba(0,229,255,0.1)', background: 'rgba(10,15,31,0.3)' }}>
                <div className="text-[15px] leading-relaxed" style={{ color: '#8FA3BF' }}>
                  {item.answer}
                </div>
              </div>
            )}
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
};

