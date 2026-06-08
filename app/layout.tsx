import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_HEIGHT,
  DEFAULT_OG_IMAGE_WIDTH,
} from "@/lib/seo";
import "./globals.css";

const GTM_ID = "GTM-KQDC3WHF";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#0A0F1F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "SyncOrigins | Professional AI, ERP & Data Services",
  description:
    "Strategic B2B partnerships and professional solutions for your business. We deliver expert guidance, global expertise, and innovative strategies for growth.",
  keywords: ["business", "consulting", "professional services", "solutions", "strategy", "growth", "B2B"],
  authors: [{ name: "SyncOrigins" }],
  creator: "SyncOrigins",
  publisher: "SyncOrigins",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://syncorigins.com"
  ),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://syncorigins.com",
    siteName: "SyncOrigins",
    title: "SyncOrigins | Professional AI, ERP & Data Services",
    description:
      "Strategic B2B partnerships and professional solutions for your business. We deliver expert guidance, global expertise, and innovative strategies for growth.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: DEFAULT_OG_IMAGE_WIDTH,
        height: DEFAULT_OG_IMAGE_HEIGHT,
        alt: "SyncOrigins - Professional Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SyncOrigins | Professional AI, ERP & Data Services",
    description:
      "Strategic B2B partnerships and professional solutions for your business. We deliver expert guidance, global expertise, and innovative strategies for growth.",
    images: [DEFAULT_OG_IMAGE],
    creator: "@syncorigin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "zzIyWkg7jUhAgdRPn1TfTvBUkaG3cB5dIuXgsK4Dv9A",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sora.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
