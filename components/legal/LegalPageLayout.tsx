import React from "react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";

export const legalPtComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-white leading-relaxed mb-6 text-lg">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-12 mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mt-16 mb-6 pt-8 border-t border-[#00E5FF]/15">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold text-white mt-10 mb-5">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-white mt-8 mb-4">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="border-l-4 border-[#00E5FF] pl-6 my-8 text-white italic py-4 pr-4 rounded-r-lg"
        style={{ background: "rgba(0,229,255,0.05)" }}
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
      <li className="text-white leading-relaxed pl-2 text-lg">{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-white leading-relaxed pl-2 text-lg">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
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
  content: unknown[] | null;
  fallback: React.ReactNode;
}

export function LegalPageLayout({ title, lastUpdated, content, fallback }: LegalPageLayoutProps) {
  const hasContent = content && Array.isArray(content) && content.length > 0;

  return (
    <div className="min-h-screen pt-24 pb-24" style={{ background: "#0A0F1F" }}>
      <section
        className="relative pt-12 pb-16 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0A0F1F 0%, #0D1B2A 100%)" }}
      >
        <div className="bg-grid opacity-40 z-0 absolute inset-0 pointer-events-none" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[40rem] rounded-full blur-[120px] pointer-events-none z-0"
          style={{ background: "radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)" }}
        />

        <div className="container-custom px-4 relative z-10 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#8FA3BF] hover:text-[#00E5FF] transition-colors group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>

            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border leading-none"
              style={{ background: "rgba(0,229,255,0.08)", borderColor: "rgba(0,229,255,0.3)" }}
            >
              <svg className="w-3.5 h-3.5 shrink-0" style={{ color: "#00E5FF" }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
              </svg>
              <span className="tracking-wide uppercase text-xs font-semibold leading-none" style={{ color: "#00E5FF" }}>
                Legal
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            {title}
          </h1>
          <p className="text-sm text-white/80 font-medium">Effective Date: {lastUpdated}</p>
        </div>
      </section>

      <div className="container-custom px-4 -mt-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-[2.5rem] border p-10 md:p-16"
            style={{
              background: "rgba(20,36,58,0.7)",
              borderColor: "rgba(0,229,255,0.12)",
              backdropFilter: "blur(10px)",
            }}
          >
            {hasContent ? (
              <PortableText value={content} components={legalPtComponents} />
            ) : (
              fallback
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
