"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { BarChart3, Boxes, BrainCircuit, Landmark, Leaf, Users, Zap, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { CORE_SERVICE_PATHS } from "@/lib/core-services";
import { isFinanceListed, isSolutionsListed } from "@/lib/content-visibility";
import { DynamicServiceIcon } from "@/components/layout/DynamicServiceIcon";
import { ArrowIcon, ButtonLink } from "@/components/ui/kit";

type DynamicNavService = {
  title: string;
  slug: string;
  href: string;
  navTags?: string[];
};

type HeaderLink = { text?: string; link?: string };

type NavItem = {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownKey?: "services" | "industries";
};

type MenuCategory = {
  title: string;
  href: string;
  icon: LucideIcon;
  tags: string[];
};

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services", hasDropdown: true, dropdownKey: "services" },
  { name: "Industries", href: "#industries", hasDropdown: true, dropdownKey: "industries" },
  ...(isSolutionsListed() ? [{ name: "Solutions", href: "/solutions" }] : []),
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about" },
];

const industryPaths = isFinanceListed() ? ["/finance"] : [];

const servicePaths = [
  ...CORE_SERVICE_PATHS.filter((path) => !industryPaths.includes(path)),
  "/services",
];

const serviceCategories: MenuCategory[] = [
  {
    title: "AI Implementation",
    href: "/ai-implementation",
    icon: BrainCircuit,
    tags: ["AI Strategy", "GenAI & LLM Integration", "Agentic Systems", "AI Automation", "AI Governance"],
  },
  {
    title: "ERP Transformation",
    href: "/erp-transformation",
    icon: Boxes,
    tags: ["Dynamics 365 BC", "Dynamics 365 F&O", "ERP Migration", "Process Advisory", "Optimization & Support"],
  },
  {
    title: "Data & Analytics",
    href: "/data-analytics",
    icon: BarChart3,
    tags: ["Power BI", "Data Warehousing", "Data Architecture", "Predictive Analytics", "KPI Reporting"],
  },
  {
    title: "Managed Delivery",
    href: "/managed-delivery",
    icon: Users,
    tags: ["ERP Consultants", "BI Developers", "AI Engineers", "Offshore Teams", "Project Execution"],
  },
  {
    title: "Sustainability",
    href: "/sustainability",
    icon: Leaf,
    tags: ["Carbon Dashboard", "ESG Reporting", "Emission Forecasting", "Green Supply Chain"],
  },
];

const industryCategories: MenuCategory[] = isFinanceListed()
  ? [
      {
        title: "Finance",
        href: "/finance",
        icon: Landmark,
        tags: ["Finance Process Transformation", "AI-Powered Finance", "Financial Analytics", "ERP Modernisation", "Compliance & Reporting"],
      },
    ]
  : [];

function MenuEntry({
  href,
  title,
  tags,
  icon,
  active,
}: {
  href: string;
  title: string;
  tags?: string[];
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group/item flex gap-4 rounded-xl p-3.5 transition-colors hover:bg-white/[0.04]",
        active && "bg-white/[0.04]"
      )}
    >
      {icon}
      <div className="min-w-0">
        <p className="flex items-center gap-1.5 font-display text-[0.9375rem] font-semibold text-fg">
          {title}
          <ArrowIcon className="h-3.5 w-3.5 -translate-x-1 text-accent opacity-0 transition-all group-hover/item:translate-x-0 group-hover/item:opacity-100" />
        </p>
        {tags && tags.length > 0 && (
          <p className="mt-1 text-[0.8125rem] leading-relaxed text-muted line-clamp-2">{tags.join(" · ")}</p>
        )}
      </div>
    </Link>
  );
}

function CategoryIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-accent">
      <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
    </div>
  );
}

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"services" | "industries" | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<"services" | "industries" | null>(null);
  const [dynamicServices, setDynamicServices] = useState<DynamicNavService[]>([]);
  const [dynamicIndustries, setDynamicIndustries] = useState<DynamicNavService[]>([]);
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
        setHeaderContactLink(data?.headerContactLink || null);
        setHeaderCta(data?.headerCta || null);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Lock page scroll behind the mobile menu
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Escape closes any open menu; clicking outside closes a dropdown
  useEffect(() => {
    if (!openDropdown && !isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (openDropdown && !(e.target as Element)?.closest?.("header")) setOpenDropdown(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [openDropdown, isMobileMenuOpen]);

  const handleMouseEnter = (key: "services" | "industries") => {
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
  const solid = isScrolled || dropdownOpen || isMobileMenuOpen;

  const contactText = headerContactLink?.text || "Contact";
  const contactHref = headerContactLink?.link || "/contact";
  const ctaText = headerCta?.text || "Book a Call";
  const ctaHref = headerCta?.link || "/contact";

  // Hide the Industries menu entirely when there is nothing to list
  const navItems = navigation.filter(
    (item) => item.dropdownKey !== "industries" || industryCategories.length + dynamicIndustries.length > 0
  );

  const navLinkClass = (item: NavItem) =>
    cn(
      "relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.9375rem] font-medium transition-colors xl:px-4",
      isActive(item) || openDropdown === item.dropdownKey ? "text-fg" : "text-body hover:text-fg",
      isActive(item) &&
        "after:absolute after:bottom-0.5 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-accent"
    );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full border-b transition-[background-color,border-color,backdrop-filter] duration-300",
          solid ? "border-line bg-ink-900/85 backdrop-blur-xl" : "border-transparent bg-transparent"
        )}
      >
        <div className="container-custom">
          <div className="flex h-[4.5rem] items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" onClick={handleHomeClick} className="flex shrink-0 items-center" aria-label="SyncOrigins home">
              <Image
                src="/SyncOrigin_Logo.png"
                alt="SyncOrigins Logo"
                width={152}
                height={38}
                className="h-[34px] w-auto sm:h-[38px]"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center lg:flex" aria-label="Main">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={item.dropdownKey ? () => handleMouseEnter(item.dropdownKey!) : undefined}
                  onMouseLeave={item.hasDropdown ? handleMouseLeave : undefined}
                >
                  {item.hasDropdown ? (
                    <button
                      type="button"
                      className={navLinkClass(item)}
                      aria-expanded={openDropdown === item.dropdownKey}
                      onClick={(e) => {
                        // Mouse/touch already opened it on hover — only keyboard (detail 0) toggles
                        if (e.detail === 0) setOpenDropdown(openDropdown === item.dropdownKey ? null : item.dropdownKey!);
                        else handleMouseEnter(item.dropdownKey!);
                      }}
                    >
                      {item.name}
                      <svg
                        className={cn("h-3 w-3 text-muted transition-transform duration-200", openDropdown === item.dropdownKey && "rotate-180")}
                        fill="none"
                        viewBox="0 0 12 12"
                        aria-hidden
                      >
                        <path d="M3 4.5 6 7.5l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={item.href === "/" ? handleHomeClick : undefined}
                      className={navLinkClass(item)}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Services mega menu */}
                  {item.dropdownKey === "services" && openDropdown === "services" && (
                    <div
                      className="absolute left-1/2 top-full w-max -translate-x-1/2 pt-3 animate-scale-in"
                      onMouseEnter={() => handleMouseEnter("services")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="w-[44rem] overflow-hidden rounded-2xl border border-line bg-ink-850 shadow-panel">
                        <div className="grid grid-cols-2 gap-1 p-3">
                          {serviceCategories.map((category) => (
                            <MenuEntry
                              key={category.title}
                              href={category.href}
                              title={category.title}
                              tags={category.tags}
                              icon={<CategoryIcon icon={category.icon} />}
                              active={pathname.startsWith(category.href)}
                            />
                          ))}
                          {dynamicServices.map((service) => (
                            <MenuEntry
                              key={service.slug}
                              href={service.href}
                              title={service.title}
                              tags={service.navTags}
                              icon={<DynamicServiceIcon />}
                              active={pathname.startsWith(service.href)}
                            />
                          ))}
                        </div>
                        <div className="flex items-center justify-between gap-4 border-t border-line bg-white/[0.02] px-6 py-4">
                          <p className="text-sm text-muted">Not sure where to start?</p>
                          <Link href={ctaHref} className="group/cta inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-soft">
                            {ctaText}
                            <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Industries dropdown */}
                  {item.dropdownKey === "industries" && openDropdown === "industries" && (
                    <div
                      className="absolute left-1/2 top-full w-max -translate-x-1/2 pt-3 animate-scale-in"
                      onMouseEnter={() => handleMouseEnter("industries")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="w-[24rem] rounded-2xl border border-line bg-ink-850 p-3 shadow-panel">
                        {industryCategories.map((category) => (
                          <MenuEntry
                            key={category.title}
                            href={category.href}
                            title={category.title}
                            tags={category.tags}
                            icon={<CategoryIcon icon={category.icon} />}
                            active={pathname.startsWith(category.href)}
                          />
                        ))}
                        {dynamicIndustries.map((industry) => (
                          <MenuEntry
                            key={industry.slug}
                            href={industry.href}
                            title={industry.title}
                            tags={industry.navTags}
                            icon={<DynamicServiceIcon />}
                            active={pathname.startsWith(industry.href)}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden shrink-0 items-center gap-2 lg:flex">
              <Link href={contactHref} className="rounded-full px-4 py-2 text-[0.9375rem] font-medium text-body transition-colors hover:text-fg">
                {contactText}
              </Link>
              <ButtonLink href={ctaHref} size="sm">
                {ctaText}
              </ButtonLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg lg:hidden"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 20 20" aria-hidden>
                {isMobileMenuOpen ? (
                  <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                ) : (
                  <path d="M3 6.5h14M3 13.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-ink-900 pt-[4.5rem] lg:hidden">
          <nav className="container-custom flex min-h-full flex-col pb-10 pt-4" aria-label="Mobile">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-line">
                {item.hasDropdown && item.dropdownKey ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setMobileExpanded((prev) => (prev === item.dropdownKey ? null : item.dropdownKey!))}
                      className={cn(
                        "flex w-full items-center justify-between py-4 text-left font-display text-xl font-medium",
                        isActive(item) ? "text-accent" : "text-fg"
                      )}
                      aria-expanded={mobileExpanded === item.dropdownKey}
                    >
                      {item.name}
                      <svg
                        className={cn("h-4 w-4 text-muted transition-transform", mobileExpanded === item.dropdownKey && "rotate-180")}
                        fill="none"
                        viewBox="0 0 12 12"
                        aria-hidden
                      >
                        <path d="M3 4.5 6 7.5l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {mobileExpanded === item.dropdownKey && (
                      <div className="flex flex-col pb-4">
                        {(item.dropdownKey === "services" ? serviceCategories : industryCategories).map((cat) => (
                          <Link
                            key={cat.title}
                            href={cat.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 rounded-lg py-2.5 text-base text-body hover:text-fg"
                          >
                            <cat.icon className="h-4 w-4 text-accent" strokeWidth={1.75} />
                            {cat.title}
                          </Link>
                        ))}
                        {(item.dropdownKey === "services" ? dynamicServices : dynamicIndustries).map((service) => (
                          <Link
                            key={service.slug}
                            href={service.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 rounded-lg py-2.5 text-base text-body hover:text-fg"
                          >
                            <Zap className="h-4 w-4 text-accent" strokeWidth={1.75} />
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
                    className={cn("block py-4 font-display text-xl font-medium", isActive(item) ? "text-accent" : "text-fg")}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href={contactHref}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block border-b border-line py-4 font-display text-xl font-medium text-fg"
            >
              {contactText}
            </Link>
            <div className="mt-8">
              <ButtonLink href={ctaHref} size="lg" arrow className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                {ctaText}
              </ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
