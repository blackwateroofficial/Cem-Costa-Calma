import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { defaultLocale, isLocale } from "@/lib/i18n/config";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  colorScheme: "light",
  themeColor: "#f3f6f5",
};

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  const headerList = await headers();
  const headerLocale = headerList.get("x-locale") ?? defaultLocale;
  const locale = isLocale(headerLocale) ? headerLocale : defaultLocale;

  return (
    <html lang={locale} className={`${dmSans.variable} ${inter.variable} overflow-x-hidden`} suppressHydrationWarning>
      <body className="min-h-dvh min-w-0 bg-warm antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
