export const locales = ["es", "en", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const localeCookieName = "NEXT_LOCALE";

export const localeLabels: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  de: "DE",
};

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  de: "Deutsch",
};

export type PageKey =
  | "home"
  | "services"
  | "center"
  | "info"
  | "contact"
  | "legal"
  | "privacy"
  | "cookies";

export const pageSlugs: Record<Locale, Record<PageKey, string>> = {
  es: {
    home: "",
    services: "servicios",
    center: "el-centro",
    info: "informacion",
    contact: "contacto",
    legal: "aviso-legal",
    privacy: "privacidad",
    cookies: "cookies",
  },
  en: {
    home: "",
    services: "services",
    center: "the-centre",
    info: "information",
    contact: "contact",
    legal: "legal-notice",
    privacy: "privacy",
    cookies: "cookies",
  },
  de: {
    home: "",
    services: "leistungen",
    center: "das-zentrum",
    info: "informationen",
    contact: "kontakt",
    legal: "impressum",
    privacy: "datenschutz",
    cookies: "cookies",
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getPageKeyFromSlug(locale: Locale, slug?: string): PageKey | null {
  if (!slug) return "home";
  const entries = Object.entries(pageSlugs[locale]) as [PageKey, string][];
  const match = entries.find(([, value]) => value === slug);
  return match ? match[0] : null;
}

export function getLocalizedPath(locale: Locale, page: PageKey, hash?: string) {
  const slug = pageSlugs[locale][page];
  const path = slug ? `/${locale}/${slug}` : `/${locale}`;
  return hash ? `${path}#${hash}` : path;
}
