import React from "react";
import { cn } from "@/lib/utils";
import { PortableText } from "@/components/ui/PortableText";

interface ObstacleItemProps {
  title: string;
  description: string | any[];
}

const ObstacleItem: React.FC<ObstacleItemProps> = ({ title, description }) => (
  <div className="bg-[#FFF5F5]/80 p-8 rounded-[2.5rem] border border-[#FEE2E2] shadow-sm hover:shadow-md transition-all group animate-on-scroll" data-anim="fade-up">
    <div className="w-11 h-11 rounded-full bg-red-100/80 flex items-center justify-center text-red-600 mb-7 group-hover:scale-110 transition-all duration-300 shadow-sm">
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-[#26201D] mb-4 tracking-tight group-hover:text-red-700 transition-colors">{title}</h3>
    <div className="text-neutral-600 text-sm leading-relaxed">
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
    <section className={cn("py-24 md:py-32 bg-[#FAF8F5] relative overflow-hidden", className)}>
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none"></div>
      
      <div className="container-custom px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#26201D] mb-6 tracking-tight animate-on-scroll" data-anim="fade-up">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed animate-on-scroll" data-anim="fade-up" data-delay="1">
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
