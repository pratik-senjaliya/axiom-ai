"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  mobile?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className,
  mobile = false,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors duration-200",
        mobile
          ? "block px-4 py-3 text-base font-medium border-b border-neutral-200"
          : "px-3 py-2 text-base font-medium",
        isActive
          ? mobile
            ? "text-primary-600 bg-primary-50"
            : "text-primary-600"
          : mobile
            ? "text-neutral-700 hover:text-primary-600 hover:bg-neutral-50"
            : "text-neutral-700 hover:text-primary-600",
        className
      )}
    >
      {children}
    </Link>
  );
};

