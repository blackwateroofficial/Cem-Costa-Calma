import type { Metadata } from "next";
import { defaultLocale, locales, type Locale, getLocalizedPath, type PageKey } from "./i18n/config";
import { getDictionary } from "./i18n/get-dictionary";
import { site } from "./config/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export function buildMetadata(locale: Locale, page: PageKey): Metadata {
  const dictionary = getDictionary(locale);
  const seo = dictionary.seo[page];
  const path = getLocalizedPath(locale, page);
  const canonical = `${siteUrl}${path}`;

  const languages = Object.fromEntries(
    locales.map((item) => [item, `${siteUrl}${getLocalizedPath(item, page)}`]),
  );

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": `${siteUrl}${getLocalizedPath(defaultLocale, page)}`,
      },
    },
    openGraph: {
      type: "website",
      locale,
      url: canonical,
      siteName: site.name,
      title: seo.title,
      description: seo.description,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}
