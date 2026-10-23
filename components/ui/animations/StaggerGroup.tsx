import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/** Layout wrapper; each StaggerItem reveals on its own as it scrolls in. */
export function StaggerGroup({ children, className = "", style }: Props) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

export function StaggerItem({ children, className = "", style }: Props) {
  return (
    <div className={cn("reveal", className)} style={style}>
      {children}
    </div>
  );
}
