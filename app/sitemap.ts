import type { MetadataRoute } from "next";
import { locales, pageSlugs, type PageKey } from "@/lib/i18n/config";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = Object.keys(pageSlugs.es) as PageKey[];

  return locales.flatMap((locale) =>
    pages.map((page) => {
      const slug = pageSlugs[locale][page];
      const path = slug ? `/${locale}/${slug}` : `/${locale}`;
      return {
        url: `${siteUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: page === "home" ? "weekly" : "monthly",
        priority: page === "home" ? 1 : 0.7,
      };
    }),
  );
}
