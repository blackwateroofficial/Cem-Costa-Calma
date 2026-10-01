"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getLocalizedPath, getPageKeyFromSlug, type Locale, type PageKey } from "@/lib/i18n/config";
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
};

export function Navbar({ locale, dictionary }: NavbarProps) {
  const pathname = usePathname() ?? "";
  const slug = pathname.split("/").filter(Boolean)[1];
  const page: PageKey = getPageKeyFromSlug(locale, slug) ?? "home";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const next = window.scrollY > 8;
        setScrolled((current) => (current === next ? current : next));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className={`border-b bg-white ${scrolled ? "border-navy/10 shadow-[0_8px_24px_rgb(18_52_71/0.06)]" : "border-navy/8"}`}>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-3 px-3 py-3 sm:px-6 sm:py-3.5 lg:px-8">
          <Link href={getLocalizedPath(locale, "home")} prefetch className="mr-auto flex min-w-0 shrink items-center">
            <BrandMark
              priority
              className="h-7 w-auto max-w-[42vw] sm:h-10 sm:max-w-[200px] lg:h-11 lg:max-w-[240px]"
            />
          </Link>

          <div className="order-2 shrink-0 sm:order-3">
            <LanguageSwitcher locale={locale} page={page} />
          </div>

          <nav
            className="order-3 flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:order-2 sm:w-auto sm:flex-1 sm:gap-x-5"
            aria-label="Primary"
          >
            {navItems.map((item) => {
              const current = page === item.page;
              return (
                <Link
                  key={item.key}
                  href={getLocalizedPath(locale, item.page)}
                  prefetch
                  aria-current={current ? "page" : undefined}
                  className={`text-sm underline-offset-4 transition-colors ${
                    current
                      ? "font-bold text-navy underline decoration-2 decoration-teal"
                      : "font-normal text-ink/70 hover:text-navy"
                  }`}
                >
                  {dictionary.nav[item.key]}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
