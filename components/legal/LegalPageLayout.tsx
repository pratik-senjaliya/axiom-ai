import React from "react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";

export const legalPtComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-body leading-relaxed mb-6 text-[1.0625rem]">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-semibold text-fg tracking-tight mt-12 mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-[1.75rem] font-semibold text-fg tracking-tight mt-14 mb-5 pt-10 border-t border-line">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold text-fg mt-10 mb-4">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-fg mt-8 mb-3">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="border-l-2 border-accent pl-6 my-8 text-fg italic py-2"
      >
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-6 ml-6 space-y-3 list-disc marker:text-[#00E5FF]">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-6 ml-6 space-y-3 list-decimal marker:text-[#00E5FF] marker:font-semibold">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-body leading-relaxed pl-2 text-[1.0625rem]">{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-body leading-relaxed pl-2 text-[1.0625rem]">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-fg">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        className="text-[#00E5FF] hover:underline font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  content: TypedObject[] | null;
  fallback: React.ReactNode;
}

export function LegalPageLayout({ title, lastUpdated, content, fallback }: LegalPageLayoutProps) {
  const hasContent = content && Array.isArray(content) && content.length > 0;

  return (
    <div className="min-h-screen bg-ink-900 pt-[4.5rem]">
      <section className="relative overflow-hidden border-b border-line pb-14 pt-12 lg:pb-16 lg:pt-16">
        <div aria-hidden className="bg-grid-fade" />
        <div className="container-custom relative">
          <Link
            href="/"
            className="group mb-8 inline-flex items-center gap-1.5 py-2 text-sm font-medium text-muted transition-colors hover:text-fg"
          >
            <svg className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M13 8H3m0 0 4-4M3 8l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Home
          </Link>
          <p className="eyebrow mb-6">Legal</p>
          <h1 className="h-display">{title}</h1>
          <p className="mt-5 text-sm text-muted">Effective Date: {lastUpdated}</p>
        </div>
      </section>

      <div className="container-custom py-14 lg:py-20">
        <div className="max-w-3xl">
          {hasContent ? (
            <PortableText value={content} components={legalPtComponents} />
          ) : (
            fallback
          )}
        </div>
      </div>
    </div>
  );
}
