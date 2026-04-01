import React from "react";
import { cn } from "@/lib/utils";
import { PortableText } from "@/components/ui/PortableText";

interface ObstacleItemProps {
  title: string;
  description: string | any[];
}

const ObstacleItem: React.FC<ObstacleItemProps> = ({ title, description }) => (
  <div className="p-8 rounded-[2.5rem] transition-all group animate-on-scroll duration-300 hover:[border-color:rgba(0,229,255,0.35)] hover:[box-shadow:0_0_25px_rgba(0,229,255,0.1)] hover:-translate-y-1" data-anim="fade-up" style={{ background: 'rgba(26,46,71,0.7)', border: '1px solid rgba(0,229,255,0.15)', backdropFilter: 'blur(10px)' }}>
    <div className="w-11 h-11 rounded-full flex items-center justify-center mb-7 group-hover:scale-110 transition-all duration-300" style={{ background: 'rgba(0,229,255,0.1)', color: '#00E5FF' }}>
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-[#00E5FF] transition-colors">{title}</h3>
    <div className="text-sm leading-relaxed" style={{ color: '#8FA3BF' }}>
      <PortableText value={description} />
    </div>
  </div>
);

interface ObstacleSectionProps {
  title: string;
  subtitle?: string;
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
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight animate-on-scroll" data-anim="fade-up">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl font-medium leading-relaxed animate-on-scroll" data-anim="fade-up" data-delay="1" style={{ color: '#8FA3BF' }}>
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex">
              <ObstacleItem 
                title={item.title} 
                description={item.description} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
