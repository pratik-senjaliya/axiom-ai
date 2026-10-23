import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import { getNavigationIndustries, getNavigationServices, getSettings } from "@/lib/sanity/queries";
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

const linkClass = "inline-block py-1.5 text-[0.9375rem] text-body transition-colors hover:text-fg";
const headingClass = "mb-5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-muted";

export async function Footer() {
  const [dynamicServices, dynamicIndustries, settings] = await Promise.all([
    getNavigationServices(),
    getNavigationIndustries(),
    getSettings(),
  ]);
  const showIndustries = isFinanceListed() || dynamicIndustries.length > 0;

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
    <footer className="relative overflow-hidden border-t border-line bg-ink-950 text-body">
      <div aria-hidden className="rule-accent absolute inset-x-0 top-0" />
      {/* Same container as Header — keeps left/right edges aligned */}
      <div className="container-custom pb-10 pt-16 md:pt-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-12 md:gap-10">
          {/* Brand */}
          <div className={`col-span-2 ${showIndustries ? "md:col-span-4" : "md:col-span-5"} flex flex-col items-start`}>
            <Link href="/" className="mb-6 inline-flex" aria-label={`${companyName} home`}>
              <Image
                src="/SyncOrigin_Logo.png"
                alt={`${companyName} Logo`}
                width={168}
                height={42}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mb-8 max-w-xs whitespace-pre-line text-[0.9375rem] leading-relaxed text-muted">
              {footerDescription}
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((link: { platform: string; url: string }, index: number) => (
                <a
                  key={`${link.platform}-${index}`}
                  href={getSocialHref(link.platform, link.url)}
                  target={link.platform === "email" ? undefined : "_blank"}
                  rel={link.platform === "email" ? undefined : "noopener noreferrer"}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-body transition-colors hover:border-line-accent hover:text-accent"
                >
                  <SocialIcon platform={link.platform} />
                  <span className="sr-only">{getPlatformLabel(link.platform)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className={showIndustries ? "col-span-2 sm:col-span-1 md:col-span-3" : "col-span-2 sm:col-span-1 md:col-span-4"}>
            <p className={headingClass}>Services</p>
            <ul className="space-y-1">
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
              <ul className="space-y-1">
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

          {/* Company */}
          <div className="md:col-span-3">
            <p className={headingClass}>Company</p>
            <ul className="space-y-1">
              <li><Link href="/about" className={linkClass}>About</Link></li>
              {isSolutionsListed() && <li><Link href="/solutions" className={linkClass}>Solutions</Link></li>}
              <li><Link href="/insights" className={linkClass}>Insights</Link></li>
              <li><Link href="/contact" className={linkClass}>Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">{copyrightText}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="inline-block py-2 text-sm text-muted transition-colors hover:text-fg">
              Privacy Policy
            </Link>
            <Link href="/terms-of-usage" className="inline-block py-2 text-sm text-muted transition-colors hover:text-fg">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
