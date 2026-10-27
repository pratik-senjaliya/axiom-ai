"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { CORE_SERVICE_PATHS } from "@/lib/core-services";
import { isFinanceListed, isSolutionsListed } from "@/lib/content-visibility";
import { DynamicServiceIcon } from "@/components/layout/DynamicServiceIcon";

type DynamicNavService = {
  title: string;
  slug: string;
  href: string;
  navTags?: string[];
};

type HeaderLink = { text?: string; link?: string };

type DropdownKey = "services" | "industries" | "hire";

type NavItem = {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownKey?: DropdownKey;
};

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services", hasDropdown: true, dropdownKey: "services" },
  { name: "Industries", href: "#industries", hasDropdown: true, dropdownKey: "industries" },
  { name: "Hire Developers", href: "#hire", hasDropdown: true, dropdownKey: "hire" },
  ...(isSolutionsListed() ? [{ name: "Solutions", href: "/solutions" }] : []),
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about" },
];

const industryPaths = isFinanceListed() ? ["/finance"] : [];

const servicePaths = [
  ...CORE_SERVICE_PATHS.filter((path) => !industryPaths.includes(path)),
  "/services",
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
    tags: ["AI Strategy", "GenAI & LLM Integration", "Agentic Systems", "AI Automation", "AI Governance"]
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
  },
];

const industryCategories = isFinanceListed()
  ? [
      {
        title: "Finance",
        href: "/finance",
        icon: (
          <div className="w-10 h-10 rounded-full bg-[#1DA1F2]/20 border border-[#1DA1F2]/30 flex items-center justify-center text-[#1DA1F2] shrink-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        ),
        tags: ["Finance Process Transformation", "AI-Powered Finance", "Financial Analytics", "ERP Modernisation", "Compliance & Reporting"],
      },
    ]
  : [];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey | null>(null);
  const [dynamicServices, setDynamicServices] = useState<DynamicNavService[]>([]);
  const [dynamicIndustries, setDynamicIndustries] = useState<DynamicNavService[]>([]);
  const [hirePages, setHirePages] = useState<DynamicNavService[]>([]);
  const [headerContactLink, setHeaderContactLink] = useState<HeaderLink | null>(null);
  const [headerCta, setHeaderCta] = useState<HeaderLink | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetch("/api/navigation")
      .then((res) => res.json())
      .then((data) => {
        if (data?.services) {
          setDynamicServices(data.services);
        }
        if (data?.industryPages) {
          setDynamicIndustries(data.industryPages);
        }
        if (data?.hirePages) {
          setHirePages(data.hirePages);
        }
        setHeaderContactLink(data?.headerContactLink || null);
        setHeaderCta(data?.headerCta || null);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (key: DropdownKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const isActive = (item: NavItem) => {
    if (item.dropdownKey === "services") {
      const dynamicPaths = dynamicServices.map((s) => s.href);
      return [...servicePaths, ...dynamicPaths].some((path) => pathname.startsWith(path));
    }
    if (item.dropdownKey === "industries") {
      const dynamicPaths = dynamicIndustries.map((i) => i.href);
      return [...industryPaths, ...dynamicPaths].some((path) => pathname.startsWith(path));
    }
    if (item.dropdownKey === "hire") {
      return hirePages.some((page) => pathname.startsWith(page.href));
    }
    return pathname === item.href;
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
    }
  };

  const dropdownOpen = openDropdown !== null;

  const contactText = headerContactLink?.text || "Contact";
  const contactHref = headerContactLink?.link || "/contact";
  const ctaText = headerCta?.text || "Book a Call";
  const ctaHref = headerCta?.link || "/contact";

  // Hide the Industries / Hire menus entirely when there is nothing to list
  const navItems = navigation.filter((item) => {
    if (item.dropdownKey === "industries") return industryCategories.length + dynamicIndustries.length > 0;
    if (item.dropdownKey === "hire") return hirePages.length > 0;
    return true;
  });

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          (isScrolled || dropdownOpen)
            ? "bg-[#0A0F1F]/95 border-b border-[#00E5FF]/15 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link href="/" onClick={handleHomeClick} className="flex items-center gap-3">
              <div className="relative w-48 h-20">
                <Image
                  src="/SyncOrigin_Logo.png"
                  alt="SyncOrigins Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-2">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={item.dropdownKey ? () => handleMouseEnter(item.dropdownKey!) : undefined}
                  onMouseLeave={item.hasDropdown ? handleMouseLeave : undefined}
                >
                  {item.hasDropdown ? (
                    <div
                      className={cn(
                        "px-6 py-2.5 text-base font-medium rounded-full transition-all flex items-center gap-1.5 tracking-tight whitespace-nowrap cursor-pointer",
                        isActive(item)
                          ? "text-[#00E5FF] bg-[#00E5FF]/10 border border-[#00E5FF]/25"
                          : "text-[#C5D1E0] hover:text-white hover:bg-white/5"
                      )}
                    >
                      {item.name}
                      <svg
                        className={cn(
                          "w-3.5 h-3.5 text-[#8FA3BF] transition-transform duration-200",
                          openDropdown === item.dropdownKey && "rotate-180"
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={item.href === "/" ? handleHomeClick : undefined}
                      className={cn(
                        "px-6 py-2.5 text-base font-medium rounded-full transition-all flex items-center gap-1.5 tracking-tight whitespace-nowrap",
                        isActive(item)
                          ? "text-[#00E5FF] bg-[#00E5FF]/10 border border-[#00E5FF]/25"
                          : "text-[#C5D1E0] hover:text-white hover:bg-white/5"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Services mega menu */}
                  {item.dropdownKey === "services" && openDropdown === "services" && (
                    <div
                      className="absolute top-full left-0 pt-4 w-max animate-scale-in"
                      onMouseEnter={() => handleMouseEnter("services")}
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
                        {dynamicServices.map((service) => (
                          <Link
                            key={service.slug}
                            href={service.href}
                            className="group/item flex gap-4 p-5 -m-5 rounded-2xl hover:bg-[#00E5FF]/5 transition-all duration-200 border border-transparent hover:border-[#00E5FF]/20"
                          >
                            <DynamicServiceIcon />
                            <div>
                              <h3 className="text-lg font-bold text-white group-hover/item:text-[#00E5FF] transition-colors mb-2">
                                {service.title}
                              </h3>
                              {(service.navTags?.length ?? 0) > 0 && (
                                <div className="flex flex-wrap gap-2">
                                  {service.navTags!.map((tag) => (
                                    <span
                                      key={tag}
                                      className="px-3 py-1 bg-[#14243A] text-[#8FA3BF] text-[0.75rem] font-medium rounded-full cursor-default border border-[#00E5FF]/10"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Industries dropdown */}
                  {item.dropdownKey === "industries" && openDropdown === "industries" && (
                    <div
                      className="absolute top-full left-0 pt-4 w-max animate-scale-in"
                      onMouseEnter={() => handleMouseEnter("industries")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="bg-[#0D1B2A]/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-[#00E5FF]/15 p-6 relative z-[60] w-[360px]">
                        {industryCategories.map((category) => (
                          <Link
                            key={category.title}
                            href={category.href}
                            className="group/item flex gap-4 p-5 rounded-2xl hover:bg-[#00E5FF]/5 transition-all duration-200 border border-transparent hover:border-[#00E5FF]/20"
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
                        {dynamicIndustries.map((industry) => (
                          <Link
                            key={industry.slug}
                            href={industry.href}
                            className="group/item flex gap-4 p-5 rounded-2xl hover:bg-[#00E5FF]/5 transition-all duration-200 border border-transparent hover:border-[#00E5FF]/20"
                          >
                            <DynamicServiceIcon />
                            <div>
                              <h3 className="text-lg font-bold text-white group-hover/item:text-[#00E5FF] transition-colors mb-2">
                                {industry.title}
                              </h3>
                              {(industry.navTags?.length ?? 0) > 0 && (
                                <div className="flex flex-wrap gap-2">
                                  {industry.navTags!.map((tag) => (
                                    <span
                                      key={tag}
                                      className="px-3 py-1 bg-[#14243A] text-[#8FA3BF] text-[0.75rem] font-medium rounded-full cursor-default border border-[#00E5FF]/10"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Hire Developers dropdown */}
                  {item.dropdownKey === "hire" && openDropdown === "hire" && (
                    <div
                      className="absolute top-full left-0 pt-4 w-max animate-scale-in"
                      onMouseEnter={() => handleMouseEnter("hire")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="bg-[#0D1B2A]/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-[#00E5FF]/15 p-6 relative z-[60] w-[360px]">
                        {hirePages.map((page) => (
                          <Link
                            key={page.slug}
                            href={page.href}
                            className="group/item flex gap-4 p-5 rounded-2xl hover:bg-[#00E5FF]/5 transition-all duration-200 border border-transparent hover:border-[#00E5FF]/20"
                          >
                            <DynamicServiceIcon />
                            <div>
                              <h3 className="text-lg font-bold text-white group-hover/item:text-[#00E5FF] transition-colors mb-2">
                                {page.title}
                              </h3>
                              {(page.navTags?.length ?? 0) > 0 && (
                                <div className="flex flex-wrap gap-2">
                                  {page.navTags!.map((tag) => (
                                    <span
                                      key={tag}
                                      className="px-3 py-1 bg-[#14243A] text-[#8FA3BF] text-[0.75rem] font-medium rounded-full cursor-default border border-[#00E5FF]/10"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
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
            <div className="hidden xl:flex items-center gap-8">
              <Link href={contactHref} className="text-base font-medium text-[#8FA3BF] hover:text-white transition-colors">
                {contactText}
              </Link>
              <Link href={ctaHref}>
                <Button size="md" className="rounded-full px-8 h-12 whitespace-nowrap text-base font-bold text-[#0A0F1F] bg-gradient-to-r from-[#1DA1F2] to-[#00E5FF] border-none hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                  {ctaText}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-[#C5D1E0] bg-[#14243A] border border-[#00E5FF]/20 rounded-full"
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
        <div className="xl:hidden fixed inset-0 z-40 bg-[#0A0F1F]/98 backdrop-blur-xl pt-24 px-6 overflow-y-auto border-r border-[#00E5FF]/10">
          <nav className="flex flex-col gap-6 text-lg font-medium">
            {navItems.map((item) => (
              <React.Fragment key={item.name}>
                {item.hasDropdown && item.dropdownKey ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded((prev) => (prev === item.dropdownKey ? null : item.dropdownKey!))
                      }
                      className={cn(
                        "border-b border-[#00E5FF]/10 pb-4 flex justify-between items-center w-full text-left",
                        isActive(item) ? "text-[#00E5FF]" : "text-[#C5D1E0]"
                      )}
                    >
                      {item.name}
                      <svg
                        className={cn(
                          "w-5 h-5 text-[#8FA3BF] transition-transform",
                          mobileExpanded === item.dropdownKey && "rotate-180"
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileExpanded === item.dropdownKey && (
                      <div className="pl-4 flex flex-col gap-4 -mt-2">
                        {(item.dropdownKey === "services" ? serviceCategories : item.dropdownKey === "industries" ? industryCategories : []).map((cat) => (
                          <Link
                            key={cat.title}
                            href={cat.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-[#8FA3BF] text-base hover:text-[#00E5FF] transition-colors"
                          >
                            {cat.title}
                          </Link>
                        ))}
                        {(item.dropdownKey === "services" ? dynamicServices : item.dropdownKey === "industries" ? dynamicIndustries : hirePages).map((service) => (
                          <Link
                            key={service.slug}
                            href={service.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-[#8FA3BF] text-base hover:text-[#00E5FF] transition-colors"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      if (item.href === "/") handleHomeClick(e);
                      else setIsMobileMenuOpen(false);
                    }}
                    className={cn(
                      "border-b border-[#00E5FF]/10 pb-4 flex justify-between items-center",
                      isActive(item) ? "text-[#00E5FF]" : "text-[#C5D1E0]"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
            <Link
              href={contactHref}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#C5D1E0] border-b border-[#00E5FF]/10 pb-4"
            >
              {contactText}
            </Link>
            <div className="mt-4">
              <Link href={ctaHref} onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full rounded-full bg-gradient-to-r from-[#1DA1F2] to-[#00E5FF] text-[#0A0F1F] border-none h-12 font-bold">
                  {ctaText}
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
