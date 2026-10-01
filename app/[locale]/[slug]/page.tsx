import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Facilities } from "@/components/Facilities";
import { LegalPage } from "@/components/LegalPage";
import { Services } from "@/components/Services";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";
import { site } from "@/lib/config/site";
import {
  getPageKeyFromSlug,
  isLocale,
  locales,
  pageSlugs,
  type Locale,
  type PageKey,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    (Object.keys(pageSlugs[locale]) as PageKey[])
      .filter((key) => key !== "home")
      .map((key) => ({ locale, slug: pageSlugs[locale][key] })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const page = getPageKeyFromSlug(locale, slug);
  if (!page) return {};
  return buildMetadata(locale, page);
}

export default async function SlugPage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const page = getPageKeyFromSlug(locale as Locale, slug);
  if (!page) notFound();

  const dictionary = getDictionary(locale as Locale);

  if (page === "services") {
    return <Services locale={locale} dictionary={dictionary} />;
  }

  if (page === "center") {
    return (
      <>
        <Facilities dictionary={dictionary} />
      </>
    );
  }

  if (page === "info") {
    return (
      <section className="px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <FadeIn className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-navy/8 bg-white shadow-card">
          <div className="relative overflow-hidden bg-navy px-6 py-10 sm:px-12 sm:py-14">
            <div
              className="absolute inset-0 bg-[linear-gradient(145deg,#0c2430_0%,#123447_48%,#1a5360_100%)]"
              aria-hidden
            />
            <div
              className="absolute -right-10 top-[-40%] h-[140%] w-[55%] rounded-full bg-[radial-gradient(circle,rgba(216,199,165,0.22),transparent_64%)]"
              aria-hidden
            />
            <div
              className="absolute -left-16 bottom-[-50%] h-[90%] w-[46%] rounded-full bg-[radial-gradient(circle,rgba(45,124,123,0.45),transparent_68%)]"
              aria-hidden
            />
            <span
              className="absolute right-0 top-0 border-l-[28px] border-t-[28px] border-l-transparent border-t-sand"
              aria-hidden
            />
            <div className="relative">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-sand sm:text-xs">
                {dictionary.nav.info}
              </p>
              <h1 className="font-display mt-3 text-[2rem] leading-[1.12] text-white sm:text-5xl">
                {dictionary.infoPage.title}
              </h1>
              <span className="mt-6 block h-px w-14 bg-sand/80" aria-hidden />
            </div>
          </div>
          <div className="space-y-6 px-6 py-8 sm:space-y-8 sm:px-12 sm:py-12">
            {dictionary.infoPage.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="border-l-2 border-sand pl-4 text-base leading-relaxed text-ink/80 sm:pl-5 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>
      </section>
    );
  }

  if (page === "contact") {
    return (
      <section className="px-4 py-12 sm:px-6 sm:py-24 lg:px-8">
        <FadeIn className="mx-auto max-w-xl rounded-3xl border border-navy/8 bg-white px-5 py-10 text-center shadow-card sm:px-10 sm:py-16">
          <SectionTitle align="center" title={dictionary.contact.title} />
          <a href={site.phoneHref} className="mt-6 block font-display text-2xl text-navy sm:mt-8 sm:text-3xl">
            {site.phoneDisplay}
          </a>
          <div className="mt-6 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <Button href={site.phoneHref} variant="secondary" size="lg" className="w-full sm:w-auto">
              {dictionary.common.callNow}
            </Button>
            <Button href={site.mapsSearchUrl} variant="ghost" size="lg" className="w-full sm:w-auto">
              {dictionary.common.directions}
            </Button>
          </div>
        </FadeIn>
      </section>
    );
  }

  if (page === "legal") return <LegalPage document={dictionary.legal.legalNotice} />;
  if (page === "privacy") return <LegalPage document={dictionary.legal.privacy} />;
  if (page === "cookies") return <LegalPage document={dictionary.legal.cookies} />;

  notFound();
}
