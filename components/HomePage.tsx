import { Facilities } from "@/components/Facilities";
import { Hero } from "@/components/Hero";
import { Insurers } from "@/components/Insurers";
import { QuickInfo } from "@/components/QuickInfo";
import { Reviews } from "@/components/Reviews";
import { ServiceHighlights } from "@/components/ServiceHighlights";
import { Services } from "@/components/Services";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type HomePageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function HomePage({ locale, dictionary }: HomePageProps) {
  return (
    <>
      <Hero dictionary={dictionary} />
      <QuickInfo dictionary={dictionary} />
      <ServiceHighlights dictionary={dictionary} />
      <Insurers dictionary={dictionary} />
      <Services locale={locale} dictionary={dictionary} compact />
      <Facilities dictionary={dictionary} defer />
      <Reviews dictionary={dictionary} />
    </>
  );
}
