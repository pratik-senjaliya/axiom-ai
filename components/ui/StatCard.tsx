import React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  className,
}) => {
  return (
    <div className={cn("text-center", className)}>
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
        {value}
      </div>
      <div className="text-sm md:text-base text-neutral-600">{label}</div>
    </div>
  );
};

