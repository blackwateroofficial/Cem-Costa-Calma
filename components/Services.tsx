import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceHighlights } from "@/components/ServiceHighlights";
import { servicesCatalog } from "@/lib/config/site";
import { getLocalizedPath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type ServicesProps = {
  locale: Locale;
  dictionary: Dictionary;
  compact?: boolean;
};

export function Services({ locale, dictionary, compact = false }: ServicesProps) {
  const items = compact ? servicesCatalog.slice(0, 4) : servicesCatalog;

  return (
    <>
      {compact ? null : <ServiceHighlights dictionary={dictionary} />}
      <section className="bg-warm py-12 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionTitle title={dictionary.services.title} />
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
            {items.map((item, index) => {
              const copy = dictionary.services.items[item.id];
              return (
                <FadeIn key={item.id} delay={index * 60}>
                  <ServiceCard name={copy.name} description={copy.description} />
                </FadeIn>
              );
            })}
          </div>
          {compact ? (
            <div className="mt-8 flex justify-center sm:justify-start">
              <Button href={getLocalizedPath(locale, "services")} variant="ghost" className="w-full sm:w-auto">
                {dictionary.services.viewAll}
              </Button>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
