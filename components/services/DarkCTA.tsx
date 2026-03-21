import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { SparkleIcon } from './ServiceHero';

interface DarkCTAProps {
  badgeText?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  useWhiteButton?: boolean;
}

export function DarkCTA({ 
  badgeText = "Next Steps", 
  title, 
  description, 
  buttonText = "Schedule an Assessment", 
  buttonHref = "/contact",
  useWhiteButton = false
}: DarkCTAProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-[#1A1512]">
      {/* Refined Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      {/* Subtle Glow */}
      <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container-custom relative z-10 text-center flex flex-col items-center">
        {badgeText && (
          <div className="mb-6 inline-flex items-center text-[#FF821C] text-sm font-semibold tracking-wide">
            <span className="text-xl leading-none font-light block -mt-1 mr-2">+</span>
            <span>{badgeText}</span>
          </div>
        )}
        
        <h2 className="text-3xl md:text-[2.5rem] font-bold text-white mb-6">
          {title}
        </h2>
        
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
          {description}
        </p>
        
        <Link href={buttonHref} className="w-full sm:w-auto">
          {useWhiteButton ? (
            <Button size="lg" className="w-full sm:w-auto px-10 h-14 text-[15px] rounded-full flex items-center justify-center gap-2 bg-white text-[#26201D] hover:bg-neutral-100 transition-colors shadow-md border-none font-bold">
              {buttonText}
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          ) : (
            <Button size="lg" className="w-full sm:w-auto px-10 h-14 text-[15px] rounded-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF821C] to-[#FFAA4C] text-white hover:opacity-90 transition-opacity shadow-[0_8px_20px_rgba(255,130,28,0.25)] border-none font-bold">
              {buttonText}
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          )}
        </Link>
      </div>
    </section>
  );
}
