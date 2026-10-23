import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

/** Scroll reveal via CSS (see `.reveal` in globals.css). Content is never hidden. */
export function FadeIn({ children, className = "", style }: FadeInProps) {
  return (
    <div className={cn("reveal", className)} style={style}>
      {children}
    </div>
  );
}
