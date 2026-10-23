import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  scaleAmount?: number;
  style?: React.CSSProperties;
}

/** Card wrapper with a quiet border highlight on hover (no scaling). */
export function HoverCard({ children, className = "", style }: HoverCardProps) {
  return (
    <div className={cn("group transition-colors duration-300", className)} style={style}>
      {children}
    </div>
  );
}
