import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

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
    process.env.NEXT_PUBLIC_SITE_URL || "https://syncorigins.ai"
  ),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://syncorigin.ai",
    siteName: "SyncOrigins",
    title: "SyncOrigins | Professional AI, ERP & Data Services",
    description:
      "Strategic B2B partnerships and professional solutions for your business. We deliver expert guidance, global expertise, and innovative strategies for growth.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SyncOrigins - Professional Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SyncOrigins | Professional AI, ERP & Data Services",
    description:
      "Strategic B2B partnerships and professional solutions for your business. We deliver expert guidance, global expertise, and innovative strategies for growth.",
    images: ["/og-image.png"],
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
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
