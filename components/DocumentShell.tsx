import type { ReactNode } from "react";
import { DM_Sans, Inter } from "next/font/google";

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

type DocumentShellProps = {
  locale: string;
  children: ReactNode;
};

export function DocumentShell({ locale, children }: DocumentShellProps) {
  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${dmSans.variable} ${inter.variable} overflow-x-hidden`}
      style={{ colorScheme: "only light", backgroundColor: "#f3f6f5" }}
      suppressHydrationWarning
    >
      <body className="min-h-dvh min-w-0 bg-warm text-ink antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
