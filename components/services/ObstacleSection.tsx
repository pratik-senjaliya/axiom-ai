import React from "react";
import { cn } from "@/lib/utils";
import { PortableText } from "@/components/ui/PortableText";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { StaggerGroup, StaggerItem } from "@/components/ui/animations/StaggerGroup";
import { HoverCard } from "@/components/ui/animations/HoverCard";

interface ObstacleItemProps {
  title: string;
  description: string | any[];
}

const ObstacleItem: React.FC<ObstacleItemProps> = ({ title, description }) => (
  <HoverCard className="p-8 rounded-[2.5rem] h-full" style={{ background: 'rgba(26,46,71,0.7)', border: '1px solid rgba(0,229,255,0.15)', backdropFilter: 'blur(10px)' }}>
    <div className="w-11 h-11 rounded-full flex items-center justify-center mb-7 group-hover:scale-110 transition-all duration-300" style={{ background: 'rgba(0,229,255,0.1)', color: '#00E5FF' }}>
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-[#00E5FF] transition-colors">{title}</h3>
    <div className="text-sm leading-relaxed" style={{ color: '#8FA3BF' }}>
      <PortableText value={description} />
    </div>
  </HoverCard>
);

interface ObstacleSectionProps {
  title: string;
  subtitle?: React.ReactNode;
  items: ObstacleItemProps[];
  className?: string;
}

export const ObstacleSection: React.FC<ObstacleSectionProps> = ({ 
  title, 
  subtitle, 
  items,
  className 
}) => {
  return (
    <section className={cn("py-24 md:py-32 relative overflow-hidden", className)} style={{ background: '#0D1B2A' }}>
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      
      <div className="container-custom px-4 relative z-10">
        <SlideUp className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl font-medium leading-relaxed" style={{ color: '#8FA3BF' }}>
              {subtitle}
            </p>
          )}
        </SlideUp>
        
        <StaggerGroup className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-[95rem] mx-auto px-4">
          {items.map((item, index) => (
            <StaggerItem key={index} className="flex h-auto w-full sm:w-[calc(50%-1.5rem)] lg:basis-[calc(25%-2.5rem)] flex-grow flex-shrink-0 min-w-[280px] max-w-[400px]">
              <ObstacleItem 
                title={item.title} 
                description={item.description} 
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};
