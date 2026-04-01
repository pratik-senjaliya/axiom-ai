'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

import { PortableText } from '@/components/ui/PortableText';

interface Testimonial {
  quote: any; // Changed from string to any for Portable Text support
  author: string;
  role: string;
  company: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

export function TestimonialCarousel({ 
  testimonials, 
  title = "Client Success Stories", 
  subtitle = "Impact" 
}: TestimonialCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    skipSnaps: false
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange-500/5 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none"></div>
      
      <div className="container-custom px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 text-[#FF821C] font-semibold text-xs tracking-wide uppercase">
            <span className="text-xl leading-none font-light block -mt-1">+</span>
            <span>{subtitle}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#26201D] tracking-tight">
            {title}
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] min-w-0 px-4"
                >
                  <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] border border-neutral-100 flex flex-col items-center text-center relative">
                    <div className="absolute top-10 left-10 text-orange-500/10 pointer-events-none">
                      <Quote size={80} fill="currentColor" />
                    </div>
                    
                    <div className="text-xl md:text-2xl text-[#26201D] font-light leading-relaxed mb-10 relative z-10 max-w-3xl italic">
                      <PortableText value={testimonial.quote} />
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full mb-6"></div>
                      <h4 className="text-lg font-bold text-[#26201D] mb-1">{testimonial.author}</h4>
                      <p className="text-sm text-neutral-400 font-medium">
                        {testimonial.role} <span className="text-orange-500/40 mx-2">|</span> {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-4 mt-12">
              <button 
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-[#26201D] hover:bg-white hover:border-orange-200 hover:text-orange-500 hover:shadow-lg transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={scrollNext}
                className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-[#26201D] hover:bg-white hover:border-orange-200 hover:text-orange-500 hover:shadow-lg transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
