"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Testimonial } from "./Testimonial";

interface TestimonialData {
    quote: string;
    author: string;
    role: string;
    company: string;
}

interface TestimonialSliderProps {
    testimonials: TestimonialData[];
    autoplayDelay?: number;
}

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
    testimonials,
    autoplayDelay = 5000,
}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    // Auto-play functionality
    useEffect(() => {
        if (!emblaApi || testimonials.length <= 1) return;

        const autoplay = setInterval(() => {
            emblaApi.scrollNext();
        }, autoplayDelay);

        return () => clearInterval(autoplay);
    }, [emblaApi, autoplayDelay, testimonials.length]);

    return (
        <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 px-2 md:px-4"
                        >
                            <Testimonial {...testimonial} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Dots */}
            {testimonials.length > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedIndex
                                ? "bg-primary-600 w-8"
                                : "bg-neutral-300 hover:bg-neutral-400"
                                }`}
                            onClick={() => scrollTo(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
