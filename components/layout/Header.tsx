"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: false },
  { name: "Use Cases", href: "/use-cases" },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about" },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          isScrolled ? "bg-brand-bg/80 shadow-sm border-b border-neutral-200" : "bg-transparent border-b border-transparent",
          "backdrop-blur-[24px]"
        )}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#F97316] text-white font-bold text-xl shadow-sm">
                A
              </div>
              <span className="font-bold text-[1.35rem] tracking-tight text-[#26201D]">
                Axiom<span className="text-[#FF2E93]">AI</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-colors flex items-center gap-1.5",
                    item.name === "Home" 
                      ? "bg-orange-50 text-primary-500" 
                      : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                  )}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/contact" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
                Contact
              </Link>
              <Link href="/contact">
                <Button size="md" className="btn-primary rounded-full px-6 shadow-sm">
                  Book a Call
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-neutral-700 bg-neutral-100 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-24 px-6 overflow-y-auto">
          <nav className="flex flex-col gap-6 text-lg font-medium">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-neutral-900 border-b border-neutral-100 pb-4"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-neutral-900 border-b border-neutral-100 pb-4"
            >
              Contact
            </Link>
            <div className="mt-4">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="primary" className="w-full">
                  Book a Call
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
