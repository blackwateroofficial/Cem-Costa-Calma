import type { ReactNode } from "react";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { Navbar } from "@/components/Navbar";
import {
  getPageKeyFromSlug,
  isLocale,
  locales,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const headerList = await headers();
  const pathname = headerList.get("x-pathname") ?? `/${locale}`;
  const slug = pathname.split("/").filter(Boolean)[1];
  const page = getPageKeyFromSlug(locale, slug) ?? "home";
  const dictionary = getDictionary(locale as Locale);

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2"
      >
        {dictionary.common.skipToContent}
      </a>
      <Navbar locale={locale} dictionary={dictionary} page={page} />
      <main id="contenido" className="min-w-0 pb-[calc(6.75rem+env(safe-area-inset-bottom))] md:pb-0">
        {children}
      </main>
      <Footer dictionary={dictionary} />
      <MobileBottomBar dictionary={dictionary} />
    </>
  );
}
