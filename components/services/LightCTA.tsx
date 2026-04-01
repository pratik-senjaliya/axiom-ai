import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { PortableText } from '@/components/ui/PortableText';

interface LightCTAProps {
  title: string;
  description: string | any[];
  primaryButtonText: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
}

export function LightCTA({ 
  title, 
  description, 
  primaryButtonText,
  secondaryButtonText,
  primaryButtonLink = "/contact",
  secondaryButtonLink = "/contact"
}: LightCTAProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#FFF5F1] via-white to-[#F5F3FF]">
      <div className="container-custom relative z-10 text-center flex flex-col items-center px-4">
        <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#26201D] mb-4 tracking-tight">
          {title}
        </h2>
        
        <div className="text-lg text-neutral-500 mb-10 max-w-2xl font-light">
          <PortableText value={description} />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link href={primaryButtonLink} className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto px-10 h-14 text-[15px] rounded-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF821C] to-[#FFAA4C] text-white hover:opacity-90 transition-opacity shadow-[0_8px_20px_rgba(255,130,28,0.25)] border-none font-bold">
              {primaryButtonText}
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </Link>

          {secondaryButtonText && (
            <Link href={secondaryButtonLink} className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 h-14 text-[15px] rounded-full border-neutral-200 text-[#26201D] hover:bg-neutral-50 font-bold">
                {secondaryButtonText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
