import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  icons: {
    icon: "/favicon.svg",
  },
  other: {
    "color-scheme": "only light",
    "supported-color-schemes": "light",
    nightmode: "disable",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f6f5" },
    { media: "(prefers-color-scheme: dark)", color: "#f3f6f5" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
