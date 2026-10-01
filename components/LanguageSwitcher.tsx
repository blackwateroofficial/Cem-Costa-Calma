import Link from "next/link";
import { FlagIcon } from "@/components/FlagIcon";
import { getLocalizedPath, localeNames, locales, type Locale, type PageKey } from "@/lib/i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
  page: PageKey;
};

export function LanguageSwitcher({ locale, page }: LanguageSwitcherProps) {
  return (
    <nav aria-label="Language" className="flex items-center gap-0.5">
      {locales.map((item) => {
        const active = item === locale;
        return (
          <Link
            key={item}
            href={getLocalizedPath(item, page)}
            prefetch
            hrefLang={item}
            aria-label={localeNames[item]}
            aria-current={active ? "true" : undefined}
            className={`inline-flex min-h-10 min-w-8 items-center justify-center rounded-full px-1 transition-opacity sm:min-h-11 sm:min-w-9 sm:px-1.5 ${
              active ? "opacity-100" : "opacity-45 hover:opacity-100"
            }`}
          >
            <FlagIcon
              locale={item}
              className={`h-4 w-[1.35rem] shrink-0 overflow-hidden rounded-[2px] ring-1 ${
                active ? "ring-navy/35" : "ring-black/10"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
