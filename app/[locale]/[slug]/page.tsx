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
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-24 lg:px-8">
        <FadeIn>
          <SectionTitle title={dictionary.infoPage.title} text={dictionary.infoPage.intro} />
        </FadeIn>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {dictionary.infoPage.items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 50}>
              <article className="h-full rounded-2xl border border-navy/8 bg-white p-6 shadow-[0_10px_30px_rgb(18_52_71/0.04)] sm:p-7">
                <h2 className="font-display text-2xl text-navy">{item.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
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
