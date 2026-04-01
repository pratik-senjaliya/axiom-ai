"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Use Cases", href: "/use-cases" },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about" },
];

const servicePaths = [
  "/ai-implementation",
  "/erp-transformation",
  "/data-analytics",
  "/managed-delivery",
  "/sustainability",
  "/services"
];

const serviceCategories = [
  {
    title: "AI Implementation",
    href: "/ai-implementation",
    icon: (
      <div className="w-10 h-10 rounded-full bg-[#00E5FF]/20 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shrink-0">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 2C7.51088 2 5.60322 2.79018 4.1967 4.1967C2.79018 5.60322 2 7.51088 2 9.5C2 11.23 2.61 12.82 3.63 14.1C4.34 14.99 4.63 16.14 4.45 17.27C4.33 18.06 4.45 18.87 4.79 19.59C5.13 20.31 5.67 20.91 6.34 21.29C7.01 21.67 7.78 21.82 8.54 21.72C9.3 21.62 10.01 21.27 10.58 20.72L11 20.31V12H3.1C3.03 11.19 3 10.36 3 9.5C3 5.91 5.91 3 9.5 3V2ZM14.5 2C16.4891 2 18.3968 2.79018 19.8033 4.1967C21.2098 5.60322 22 7.51088 22 9.5C22 11.23 21.39 12.82 20.37 14.1C19.66 14.99 19.37 16.14 19.55 17.27C19.67 18.06 19.55 18.87 19.21 19.59C18.87 20.31 18.33 20.91 17.66 21.29C16.99 21.67 16.22 21.82 15.46 21.72C14.7 21.62 13.99 21.27 13.42 20.72L13 20.31V12H20.9C20.97 11.19 21 10.36 21 9.5C21 5.91 18.09 3 14.5 3V2Z" fill="currentColor"/>
        </svg>
      </div>
    ),
    tags: ["AI Strategy", "GenAI & LLM Integration", "Agentic Systems", "Automation", "AI Governance"]
  },
  {
    title: "ERP Transformation",
    href: "/erp-transformation",
    icon: (
      <div className="w-10 h-10 rounded-full bg-[#1DA1F2]/20 border border-[#1DA1F2]/30 flex items-center justify-center text-[#1DA1F2] shrink-0">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 1.105 3.582 2 8 2s8-.895 8-2V7m0 0c0 1.105-3.582 2-8 2s-8-.895-8-2m16 0c0-1.105-3.582-2-8-2s-8 .895-8 2m16 5c0 1.105-3.582 2-8 2s-8-.895-8-2" />
        </svg>
      </div>
    ),
    tags: ["Dynamics 365 BC", "Dynamics 365 F&O", "ERP Migration", "Process Advisory", "Optimization & Support"]
  },
  {
    title: "Data & Analytics",
    href: "/data-analytics",
    icon: (
      <div className="w-10 h-10 rounded-full bg-[#66FCF1]/20 border border-[#66FCF1]/30 flex items-center justify-center text-[#66FCF1] shrink-0">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </div>
    ),
    tags: ["Power BI", "Data Warehousing", "Data Architecture", "Predictive Analytics", "KPI Reporting"]
  },
  {
    title: "Managed Delivery",
    href: "/managed-delivery",
    icon: (
      <div className="w-10 h-10 rounded-full bg-[#1DA1F2]/20 border border-[#1DA1F2]/30 flex items-center justify-center text-[#1DA1F2] shrink-0">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </div>
    ),
    tags: ["ERP Consultants", "BI Developers", "AI Engineers", "Offshore Teams", "Project Execution"]
  },
  {
    title: "Sustainability",
    href: "/sustainability",
    icon: (
      <div className="w-10 h-10 rounded-full bg-[#00E5FF]/20 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shrink-0">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>
    ),
    tags: ["Carbon Dashboard", "ESG Reporting", "Emission Forecasting", "Green Supply Chain"]
  }
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const isActive = (item: { name: string; href: string }) => {
    if (item.name === "Services") {
      return servicePaths.some(path => pathname.startsWith(path));
    }
    return pathname === item.href;
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          (isScrolled || isServicesOpen)
            ? "bg-[#0A0F1F]/95 border-b border-[#00E5FF]/15 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#00E5FF] to-[#1DA1F2] text-[#0A0F1F] font-bold text-xl shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                A
              </div>
              <span className="font-bold text-[1.4rem] tracking-tight text-white">
                Axiom<span className="bg-gradient-to-r from-[#00E5FF] to-[#66FCF1] bg-clip-text text-transparent">AI</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={item.hasDropdown ? handleMouseEnter : undefined}
                  onMouseLeave={item.hasDropdown ? handleMouseLeave : undefined}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "px-6 py-2.5 text-base font-medium rounded-full transition-all flex items-center gap-1.5 tracking-tight",
                      isActive(item)
                        ? "text-[#00E5FF] bg-[#00E5FF]/10 border border-[#00E5FF]/25"
                        : "text-[#C5D1E0] hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <svg className={cn("w-3.5 h-3.5 text-[#8FA3BF] transition-transform duration-200", isServicesOpen && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Mega Menu */}
                  {item.hasDropdown && isServicesOpen && (
                    <div
                      className="absolute top-full left-0 pt-4 w-max animate-scale-in"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="bg-[#0D1B2A]/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-[#00E5FF]/15 p-10 grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 relative z-[60] w-[900px]">
                        {serviceCategories.map((category) => (
                          <Link
                            key={category.title}
                            href={category.href}
                            className="group/item flex gap-4 p-5 -m-5 rounded-2xl hover:bg-[#00E5FF]/5 transition-all duration-200 border border-transparent hover:border-[#00E5FF]/20"
                          >
                            {category.icon}
                            <div>
                              <h3 className="text-lg font-bold text-white group-hover/item:text-[#00E5FF] transition-colors mb-2">
                                {category.title}
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {category.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-3 py-1 bg-[#14243A] text-[#8FA3BF] text-[0.75rem] font-medium rounded-full cursor-default border border-[#00E5FF]/10"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/contact" className="text-base font-medium text-[#8FA3BF] hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/contact">
                <Button size="md" className="rounded-full px-8 h-12 text-base font-bold text-[#0A0F1F] bg-gradient-to-r from-[#1DA1F2] to-[#00E5FF] border-none hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                  Book a Call
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#C5D1E0] bg-[#14243A] border border-[#00E5FF]/20 rounded-full"
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
        <div className="md:hidden fixed inset-0 z-40 bg-[#0A0F1F]/98 backdrop-blur-xl pt-24 px-6 overflow-y-auto border-r border-[#00E5FF]/10">
          <nav className="flex flex-col gap-6 text-lg font-medium">
            {navigation.map((item) => (
              <React.Fragment key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "border-b border-[#00E5FF]/10 pb-4 flex justify-between items-center",
                    isActive(item) ? "text-[#00E5FF]" : "text-[#C5D1E0]"
                  )}
                >
                  {item.name}
                  {item.hasDropdown && <svg className="w-5 h-5 text-[#8FA3BF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>}
                </Link>
                {item.hasDropdown && (
                  <div className="pl-4 flex flex-col gap-4 -mt-2">
                    {serviceCategories.map((cat) => (
                      <Link
                        key={cat.title}
                        href={cat.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-[#8FA3BF] text-base hover:text-[#00E5FF] transition-colors"
                      >
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#C5D1E0] border-b border-[#00E5FF]/10 pb-4"
            >
              Contact
            </Link>
            <div className="mt-4">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full rounded-full bg-gradient-to-r from-[#1DA1F2] to-[#00E5FF] text-[#0A0F1F] border-none h-12 font-bold">
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
