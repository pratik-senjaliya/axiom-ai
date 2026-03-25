"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 sm:mb-0">
              {title}
            </h2>
          )}
          {showMoreLink && (
            <a
              href={moreLinkHref}
              className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              {moreLinkText}
            </a>
          )}
        </div>
      )}

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-neutral-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
            >
              <span className="font-semibold text-neutral-900 pr-4">
                {item.question}
              </span>
              <svg
                className={cn(
                  "w-5 h-5 text-neutral-600 flex-shrink-0 transition-transform",
                  openIndex === index && "rotate-180"
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200">
                <p className="text-neutral-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

