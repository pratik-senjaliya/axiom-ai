import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { Facebook, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import { getNavigationServices, getSettings } from "@/lib/sanity/queries";
import { portableTextToPlain } from "@/lib/seo";

const DEFAULT_DESCRIPTION =
  "Enterprise AI, ERP & Data advisory. Building the future of intelligent enterprise.";

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
  const className = "w-4 h-4";
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

export async function Footer() {
  const [dynamicServices, settings] = await Promise.all([
    getNavigationServices(),
    getSettings(),
  ]);

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
    <footer className="bg-[#0D1B2A] text-[#C5D1E0] py-16 border-t border-[#00E5FF]/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 justify-items-start">
          <div className="md:col-span-5 lg:col-span-4 pr-4 flex flex-col items-start text-left">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-48 h-20">
                <Image
                  src="/SyncOrigin_Logo.png"
                  alt={`${companyName} Logo`}
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm text-[#8FA3BF] mb-8 max-w-[280px] leading-relaxed whitespace-pre-line">
              {footerDescription}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link: { platform: string; url: string }, index: number) => (
                <a
                  key={`${link.platform}-${index}`}
                  href={getSocialHref(link.platform, link.url)}
                  target={link.platform === "email" ? undefined : "_blank"}
                  rel={link.platform === "email" ? undefined : "noopener noreferrer"}
                  className="w-10 h-10 rounded-[12px] bg-[#14243A] border border-[#00E5FF]/15 flex items-center justify-center text-[#8FA3BF] hover:border-[#00E5FF]/40 hover:text-[#00E5FF] transition-all"
                >
                  <SocialIcon platform={link.platform} />
                  <span className="sr-only">{getPlatformLabel(link.platform)}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-start-7 lg:col-start-7 md:col-span-3">
            <h3 className="text-[#8FA3BF] font-semibold mb-6 text-[13px] uppercase tracking-wider">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/ai-implementation" className="text-sm hover:text-[#00E5FF] transition-colors text-[#C5D1E0]">AI Implementation</Link></li>
              <li><Link href="/erp-transformation" className="text-sm hover:text-[#00E5FF] transition-colors text-[#C5D1E0]">ERP Transformation</Link></li>
              <li><Link href="/data-analytics" className="text-sm hover:text-[#00E5FF] transition-colors text-[#C5D1E0]">Data & Analytics</Link></li>
              <li><Link href="/managed-delivery" className="text-sm hover:text-[#00E5FF] transition-colors text-[#C5D1E0]">Managed Delivery</Link></li>
              <li><Link href="/sustainability" className="text-sm hover:text-[#00E5FF] transition-colors text-[#C5D1E0]">AI for Sustainable Operations</Link></li>
              {dynamicServices.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}`} className="text-sm hover:text-[#00E5FF] transition-colors text-[#C5D1E0]">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-start-10 lg:col-start-10 md:col-span-3">
            <h3 className="text-[#8FA3BF] font-semibold mb-6 text-[13px] uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm hover:text-[#00E5FF] transition-colors text-[#C5D1E0]">About</Link></li>
              <li><Link href="/solutions" className="text-sm hover:text-[#00E5FF] transition-colors text-[#C5D1E0]">Solutions</Link></li>
              <li><Link href="/insights" className="text-sm hover:text-[#00E5FF] transition-colors text-[#C5D1E0]">Insights</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-[#00E5FF] transition-colors text-[#C5D1E0]">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#00E5FF]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-sm text-[#8FA3BF]">{copyrightText}</p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-sm text-[#8FA3BF] hover:text-[#00E5FF] transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-usage" className="text-sm text-[#8FA3BF] hover:text-[#00E5FF] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
