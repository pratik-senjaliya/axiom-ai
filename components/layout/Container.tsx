import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizeClasses = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-[100rem]",
  xl: "max-w-[112.5rem]",
  full: "max-w-full",
};

export const Container: React.FC<ContainerProps> = ({
  children,
  size = "lg",
  className,
  ...props
}) => {
  return (
    <div
      className={cn("container-custom", sizeClasses[size], className)}
      {...props}
    >
      {children}
    </div>
  );
};

