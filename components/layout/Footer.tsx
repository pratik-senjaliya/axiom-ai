import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import { getNavigationHirePages, getNavigationIndustries, getNavigationServices, getSettings } from "@/lib/sanity/queries";
import { isFinanceListed, isSolutionsListed } from "@/lib/content-visibility";
import { portableTextToPlain } from "@/lib/seo";

const DEFAULT_DESCRIPTION =
  "Enterprise AI, ERP & Data engineering. Building the future of intelligent enterprise.";

const DEFAULT_SOCIAL_LINKS = [
  { platform: "email", url: "mailto:hello@syncorigins.com" },
  { platform: "linkedin", url: "https://www.linkedin.com/company/syncorigins/" },
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function getSocialHref(platform: string, url: string) {
  if (platform === "email") {
    return url.startsWith("mailto:") ? url : `mailto:${url}`;
  }
  return url;
}

function SocialIcon({ platform }: { platform: string }) {
  const className = "w-[18px] h-[18px]";
  const strokeWidth = 1.5;

  switch (platform) {
    case "email":
      return <Mail className={className} strokeWidth={strokeWidth} />;
    case "linkedin":
      return <Linkedin className={className} strokeWidth={strokeWidth} />;
    case "twitter":
      return <XIcon className={className} />;
    case "facebook":
      return <Facebook className={className} strokeWidth={strokeWidth} />;
    case "instagram":
      return <Instagram className={className} strokeWidth={strokeWidth} />;
    case "youtube":
      return <Youtube className={className} strokeWidth={strokeWidth} />;
    default:
      return <Mail className={className} strokeWidth={strokeWidth} />;
  }
}

function getPlatformLabel(platform: string) {
  switch (platform) {
    case "email":
      return "Email";
    case "linkedin":
      return "LinkedIn";
    case "twitter":
      return "Twitter";
    case "facebook":
      return "Facebook";
    case "instagram":
      return "Instagram";
    case "youtube":
      return "YouTube";
    default:
      return platform;
  }
}

const linkClass =
  "text-[15px] md:text-base hover:text-[#00E5FF] transition-colors text-[#C5D1E0] leading-snug";
const headingClass =
  "text-[#8FA3BF] font-semibold mb-5 text-[13px] md:text-sm uppercase tracking-[0.14em]";

export async function Footer() {
  const [dynamicServices, dynamicIndustries, hirePages, settings] = await Promise.all([
    getNavigationServices(),
    getNavigationIndustries(),
    getNavigationHirePages(),
    getSettings(),
  ]);
  const showIndustries = isFinanceListed() || dynamicIndustries.length > 0;
  const showHire = hirePages.length > 0;
  // 12-col grid: brand / services / industries / hire / company
  const extraColumns = Number(showIndustries) + Number(showHire);

  const companyName = settings?.companyName || "SyncOrigins";
  const footerDescription =
    (typeof settings?.footerDescription === "string"
      ? settings.footerDescription
      : portableTextToPlain(settings?.footerDescription)) || DEFAULT_DESCRIPTION;
  const socialLinks =
    settings?.socialLinks?.length > 0 ? settings.socialLinks : DEFAULT_SOCIAL_LINKS;
  const copyrightText =
    settings?.copyrightText ||
    `© ${new Date().getFullYear()} ${companyName}. All rights reserved.`;

  return (
    <footer className="bg-[#0D1B2A] text-[#C5D1E0] py-14 md:py-16 lg:py-20 border-t border-[#00E5FF]/10">
      {/* Same container as Header — keeps left/right edges aligned */}
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-10 lg:gap-12 mb-12 md:mb-14 items-start">
          {/* Brand */}
          <div className={`col-span-2 ${["md:col-span-5", "md:col-span-4", "md:col-span-3"][extraColumns]} flex flex-col items-start text-left pr-0 md:pr-6`}>
            <Link href="/" className="flex items-start mb-5 -mt-1.5">
              <div className="relative w-44 h-14 md:w-52 md:h-16">
                <Image
                  src="/SyncOrigin_Logo.png"
                  alt={`${companyName} Logo`}
                  fill
                  className="object-contain object-left object-top"
                  sizes="208px"
                />
              </div>
            </Link>
            <p className="text-[15px] md:text-base text-[#8FA3BF] mb-6 max-w-[300px] leading-relaxed whitespace-pre-line">
              {footerDescription}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link: { platform: string; url: string }, index: number) => (
                <a
                  key={`${link.platform}-${index}`}
                  href={getSocialHref(link.platform, link.url)}
                  target={link.platform === "email" ? undefined : "_blank"}
                  rel={link.platform === "email" ? undefined : "noopener noreferrer"}
                  className="w-10 h-10 rounded-xl bg-[#14243A] border border-[#00E5FF]/15 flex items-center justify-center text-[#8FA3BF] hover:border-[#00E5FF]/40 hover:text-[#00E5FF] transition-all"
                >
                  <SocialIcon platform={link.platform} />
                  <span className="sr-only">{getPlatformLabel(link.platform)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className={extraColumns > 0 ? "md:col-span-3" : "md:col-span-4"}>
            <p className={headingClass}>Services</p>
            <ul className="space-y-3.5">
              <li><Link href="/ai-implementation" className={linkClass}>AI Implementation</Link></li>
              <li><Link href="/erp-transformation" className={linkClass}>ERP Transformation</Link></li>
              <li><Link href="/data-analytics" className={linkClass}>Data & Analytics</Link></li>
              <li><Link href="/managed-delivery" className={linkClass}>Managed Delivery</Link></li>
              <li><Link href="/sustainability" className={linkClass}>AI for Sustainable Operations</Link></li>
              {dynamicServices.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}`} className={linkClass}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries — hidden until Finance (and other industries) are ready for launch */}
          {showIndustries && (
            <div className="md:col-span-2">
              <p className={headingClass}>Industries</p>
              <ul className="space-y-3.5">
                {isFinanceListed() && <li><Link href="/finance" className={linkClass}>Finance</Link></li>}
                {dynamicIndustries.map((industry) => (
                  <li key={industry.slug}>
                    <Link href={`/${industry.slug}`} className={linkClass}>
                      {industry.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {showHire && (
            <div className="md:col-span-2">
              <p className={headingClass}>Hire Developers</p>
              <ul className="space-y-3.5">
                {hirePages.map((page) => (
                  <li key={page.slug}>
                    <Link href={`/${page.slug}`} className={linkClass}>
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Company */}
          <div className={extraColumns === 2 ? "md:col-span-2" : "md:col-span-3"}>
            <p className={headingClass}>Company</p>
            <ul className="space-y-3.5">
              <li><Link href="/about" className={linkClass}>About</Link></li>
              {isSolutionsListed() && <li><Link href="/solutions" className={linkClass}>Solutions</Link></li>}
              <li><Link href="/insights" className={linkClass}>Insights</Link></li>
              <li><Link href="/contact" className={linkClass}>Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#00E5FF]/10 pt-7 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] md:text-[15px] text-[#8FA3BF]">{copyrightText}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-[14px] md:text-[15px] text-[#8FA3BF] hover:text-[#00E5FF] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-usage" className="text-[14px] md:text-[15px] text-[#8FA3BF] hover:text-[#00E5FF] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
