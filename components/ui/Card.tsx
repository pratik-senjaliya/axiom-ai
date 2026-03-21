import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  hover = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn("card", hover && "card-hover", className)}
      {...props}
    >
      {children}
    </div>
  );
};

