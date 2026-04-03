import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { SparkleIcon } from './ServiceHero';
import { PortableText } from '@/components/ui/PortableText';
import { SlideUp } from '@/components/ui/animations/SlideUp';

interface DarkCTAProps {
  badgeText?: string;
  title: string;
  description: string | any[];
  buttonText?: string;
  buttonHref?: string;
  useWhiteButton?: boolean;
}

export function DarkCTA({
  badgeText,
  title,
  description,
  buttonText,
  buttonHref,
  useWhiteButton = false
}: DarkCTAProps) {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0A0F1F 50%, #14243A 100%)' }}>
      {/* Cyan grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(0,229,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,229,255,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Glow */}
      <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] rounded-full blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-[25rem] h-[25rem] rounded-full blur-[80px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(29,161,242,0.07) 0%, transparent 70%)' }} />

      {/* Cyan border line on top */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(0,229,255,0.4), transparent)' }} />

      <SlideUp className="container-custom relative z-10 text-center flex flex-col items-center">
        {badgeText && (
          <div className="mb-6 inline-flex items-center gap-2 text-[#00E5FF] text-sm font-semibold tracking-wide">
            <SparkleIcon className="w-4 h-4 text-[#00E5FF]" />
            <span>{badgeText}</span>
          </div>
        )}

        <h2 className="text-3xl md:text-[2.5rem] font-bold text-white mb-6">
          {title}
        </h2>

        <div className="text-lg max-w-2xl mx-auto mb-10" style={{ color: '#8FA3BF' }}>
          <PortableText value={description} />
        </div>

        {buttonText && (
          <Link href={buttonHref || "/contact"} className="w-full sm:w-auto">
            {useWhiteButton ? (
              <Button size="lg" className="w-full sm:w-auto px-10 h-14 text-[15px] rounded-full flex items-center justify-center gap-2 font-bold border-none hover:scale-105 transition-all" style={{ background: 'rgba(255,255,255,0.95)', color: '#0A0F1F' }}>
                {buttonText}
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            ) : (
              <Button size="lg" className="w-full sm:w-auto px-10 h-14 text-[15px] rounded-full flex items-center justify-center gap-2 font-bold border-none hover:scale-105 transition-all" style={{ background: 'linear-gradient(135deg, #1DA1F2, #00E5FF)', color: '#0A0F1F', boxShadow: '0 0 30px rgba(0,229,255,0.4), 0 8px 20px rgba(0,0,0,0.3)' }}>
                {buttonText}
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            )}
          </Link>
        )}
      </SlideUp>
    </section>
  );
}
