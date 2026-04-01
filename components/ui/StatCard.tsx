import React from "react";
import { cn } from "@/lib/utils";
import { PortableText } from "@/components/ui/PortableText";

interface StatCardProps {
  value: string;
  label: string;
  description?: string | any[];
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  description,
  className,
}) => {
  return (
    <div className={cn("text-center", className)}>
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
        {value}
      </div>
      <div className="text-sm md:text-base text-neutral-600 mb-2">{label}</div>
      {description && (
        <div className="text-xs text-neutral-400 max-w-[200px] mx-auto">
          <PortableText value={description} />
        </div>
      )}
    </div>
  );
};

