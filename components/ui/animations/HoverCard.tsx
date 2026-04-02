"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  scaleAmount?: number;
  style?: React.CSSProperties;
}

export function HoverCard({ 
  children, 
  className = "", 
  glowColor = "rgba(0,229,255,0.15)",
  scaleAmount = 1.02,
  style
}: HoverCardProps) {
  return (
    <motion.div
      style={style}
      whileHover={{ 
        scale: scaleAmount,
        y: -4,
        boxShadow: `0 20px 40px ${glowColor}, 0 0 0 1px ${glowColor} inset`
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
