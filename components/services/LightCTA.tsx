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
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #14243A 0%, #0D1B2A 60%, #0A0F1F 100%)' }}>
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(0,229,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,229,255,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[30rem] rounded-full blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(0,229,255,0.06) 0%, transparent 70%)' }} />

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(0,229,255,0.3), transparent)' }} />

      <div className="container-custom relative z-10 text-center flex flex-col items-center px-4">
        <h2 className="text-3xl md:text-[2.5rem] font-bold text-white mb-4 tracking-tight">
          {title}
        </h2>

        <div className="text-lg mb-10 max-w-2xl font-light" style={{ color: '#8FA3BF' }}>
          <PortableText value={description} />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link href={primaryButtonLink} className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto px-10 h-14 text-[15px] rounded-full flex items-center justify-center gap-2 font-bold border-none hover:scale-105 transition-all" style={{ background: 'linear-gradient(135deg, #1DA1F2, #00E5FF)', color: '#0A0F1F', boxShadow: '0 0 25px rgba(0,229,255,0.4)' }}>
              {primaryButtonText}
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </Link>

          {secondaryButtonText && (
            <Link href={secondaryButtonLink} className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 h-14 text-[15px] rounded-full font-bold transition-all" style={{ borderColor: 'rgba(0,229,255,0.3)', color: '#C5D1E0', background: 'rgba(20,36,58,0.6)' }}>
                {secondaryButtonText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
