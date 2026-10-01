"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/Button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getLocalizedPath, type Locale, type PageKey } from "@/lib/i18n/config";
import { site } from "@/lib/config/site";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

const navItems: { key: keyof Dictionary["nav"]; page: PageKey }[] = [
  { key: "home", page: "home" },
  { key: "services", page: "services" },
  { key: "center", page: "center" },
  { key: "info", page: "info" },
  { key: "contact", page: "contact" },
];

type NavbarProps = {
  locale: Locale;
  dictionary: Dictionary;
  page: PageKey;
};

export function Navbar({ locale, dictionary, page }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className={`border-b bg-white/90 backdrop-blur-md ${scrolled ? "border-navy/10 shadow-[0_8px_24px_rgb(18_52_71/0.06)]" : "border-navy/8"}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-3 sm:gap-3 sm:px-6 sm:py-3.5 lg:px-8">
          <Link href={getLocalizedPath(locale, "home")} className="flex min-w-0 shrink items-center">
            <BrandMark
              priority
              className="h-7 w-auto max-w-[42vw] sm:h-10 sm:max-w-[200px] lg:h-11 lg:max-w-[240px]"
            />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={getLocalizedPath(locale, item.page)}
                aria-current={page === item.page ? "page" : undefined}
                className={`text-sm transition-colors ${
                  page === item.page ? "font-bold text-navy" : "font-normal text-ink/70 hover:text-navy"
                }`}
              >
                {dictionary.nav[item.key]}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center lg:flex">
            <LanguageSwitcher locale={locale} page={page} />
          </div>

          <div className="flex shrink-0 items-center gap-0.5 lg:hidden">
            <LanguageSwitcher locale={locale} page={page} />
            <button
              type="button"
              className="inline-flex h-11 w-11 min-h-11 min-w-11 items-center justify-center rounded-full border border-navy/15 text-navy sm:h-12 sm:w-12"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? dictionary.common.closeMenu : dictionary.common.openMenu}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div
            id="mobile-menu"
            className="max-h-[min(32rem,calc(100dvh-5.5rem-env(safe-area-inset-bottom)))] overflow-y-auto border-t border-navy/10 bg-white/95 px-4 py-5 backdrop-blur lg:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={getLocalizedPath(locale, item.page)}
                  aria-current={page === item.page ? "page" : undefined}
                  className={`rounded-xl px-3 py-3 text-lg ${
                    page === item.page ? "bg-warm font-bold text-navy" : "font-normal text-navy"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {dictionary.nav[item.key]}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-3">
              <Button href={site.phoneHref} variant="secondary" size="lg" className="w-full">
                {dictionary.common.callNow}
              </Button>
              <Button href={site.mapsSearchUrl} variant="ghost" size="lg" className="w-full">
                {dictionary.common.directions}
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
