"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function SlideUp({ children, delay = 0, duration = 0.6, y = 40, className = "", style }: SlideUpProps) {
  return (
    <motion.div
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }} // Custom highly-responsive easing
      className={className}
    >
      {children}
    </motion.div>
  );
}
