"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

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
  style,
}: HoverCardProps) {
  const reduceMotion = useReducedMotion();
  const [canHoverAnimate, setCanHoverAnimate] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (min-width: 768px)");
    const sync = () => setCanHoverAnimate(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const animateHover =
    !reduceMotion && canHoverAnimate
      ? {
          scale: scaleAmount,
          y: -4,
          boxShadow: `0 20px 40px ${glowColor}, 0 0 0 1px ${glowColor} inset`,
        }
      : {
          boxShadow: `0 12px 28px ${glowColor}`,
        };

  return (
    <motion.div
      style={style}
      whileHover={animateHover}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
