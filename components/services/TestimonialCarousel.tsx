'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { PortableText } from '@/components/ui/PortableText';

interface Testimonial {
  quote: any;
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
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0F1F 0%, #0D1B2A 50%, #14243A 100%)' }}>
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none" style={{ background: 'linear-gradient(to right, transparent, rgba(0,229,255,0.4), transparent)' }} />

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(29,161,242,0.07) 0%, transparent 70%)' }} />

      <div className="container-custom px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 font-semibold text-xs tracking-wide uppercase" style={{ color: '#00E5FF' }}>
            <span className="text-xl leading-none font-light block -mt-1">+</span>
            <span>{subtitle}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
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
                  <div className="rounded-[2.5rem] p-10 md:p-16 flex flex-col items-center text-center relative" style={{ background: 'rgba(26,46,71,0.7)', border: '1px solid rgba(0,229,255,0.15)', backdropFilter: 'blur(16px)', boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,229,255,0.08) inset' }}>
                    {/* Big quote icon */}
                    <div className="absolute top-10 left-10 pointer-events-none" style={{ color: 'rgba(0,229,255,0.07)' }}>
                      <Quote size={90} fill="currentColor" />
                    </div>

                    <div className="text-xl md:text-2xl text-white font-light leading-relaxed mb-10 relative z-10 max-w-3xl italic" style={{ color: 'rgba(255,255,255,0.92)' }}>
                      <PortableText value={testimonial.quote} />
                    </div>

                    <div className="flex flex-col items-center">
                      {/* Cyan divider line */}
                      <div className="w-12 h-1 rounded-full mb-6" style={{ background: 'linear-gradient(to right, #1DA1F2, #00E5FF)' }} />
                      <h4 className="text-lg font-bold text-white mb-1">{testimonial.author}</h4>
                      <p className="text-sm font-medium" style={{ color: '#8FA3BF' }}>
                        {testimonial.role}
                        <span className="mx-2" style={{ color: 'rgba(0,229,255,0.3)' }}>|</span>
                        {testimonial.company}
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
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                style={{ border: '1px solid rgba(0,229,255,0.25)', color: '#C5D1E0', background: 'rgba(20,36,58,0.7)' }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = '#00E5FF'; el.style.color = '#00E5FF'; el.style.boxShadow = '0 0 15px rgba(0,229,255,0.3)'; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(0,229,255,0.25)'; el.style.color = '#C5D1E0'; el.style.boxShadow = ''; }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={scrollNext}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                style={{ border: '1px solid rgba(0,229,255,0.25)', color: '#C5D1E0', background: 'rgba(20,36,58,0.7)' }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = '#00E5FF'; el.style.color = '#00E5FF'; el.style.boxShadow = '0 0 15px rgba(0,229,255,0.3)'; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(0,229,255,0.25)'; el.style.color = '#C5D1E0'; el.style.boxShadow = ''; }}
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
