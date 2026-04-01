import React from "react";
import { cn } from "@/lib/utils";
import { PortableText } from "@/components/ui/PortableText";

export interface HorizontalFeatureItem {
  title: string;
  description: string | any[];
  icon: React.ReactNode;
  outcomeTitle?: string;
  outcomeDescription?: string | any[];
}

interface HorizontalFeatureProps {
  title?: string;
  description?: string | any[];
  items: HorizontalFeatureItem[];
  bgWhite?: boolean;
}

export const HorizontalFeature: React.FC<HorizontalFeatureProps> = ({
  title,
  description,
  items,
  bgWhite = false
}) => {
  const containerClass = bgWhite ? "bg-white" : "bg-[#FAF8F5]";

  return (
    <section className={cn("py-24", containerClass)}>
      <div className="container-custom px-4">
        {(title || description) && (
          <div className="max-w-3xl mb-16">
            {title && <h2 className="text-3xl md:text-4xl font-bold text-[#26201D] mb-6">{title}</h2>}
            {description && (
              <div className="text-lg text-neutral-500 leading-relaxed">
                <PortableText value={description} />
              </div>
            )}
          </div>
        )}

        <div className="space-y-6">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white border border-neutral-100 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-start gap-8 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-[1.5rem] bg-[#FF821C] flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[#26201D] mb-3 group-hover:text-[#FF821C] transition-colors">
                  {item.title}
                </h3>
                <div className="text-lg text-neutral-500 leading-relaxed mb-6">
                  <PortableText value={item.description} />
                </div>

                {/* Outcome Footer */}
                {item.outcomeTitle && (
                  <div className="inline-flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 bg-orange-50/50 rounded-2xl px-6 py-4 border border-orange-100/50">
                    <span className="text-sm font-bold text-[#FF821C] uppercase tracking-wider shrink-0">
                      {item.outcomeTitle}:
                    </span>
                    <div className="text-neutral-600 text-[15px]">
                      <PortableText value={item.outcomeDescription} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
