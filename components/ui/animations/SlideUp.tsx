import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SlideUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
}

/** Scroll reveal via CSS (see `.reveal` in globals.css). Content is never hidden. */
export function SlideUp({ children, className = "", style }: SlideUpProps) {
  return (
    <div className={cn("reveal", className)} style={style}>
      {children}
    </div>
  );
}
