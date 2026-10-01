import {
  Ambulance,
  BriefcaseMedical,
  HeartPulse,
  ScanLine,
  Stethoscope,
  TestTube2,
  Thermometer,
  Users,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import { serviceHighlights, site } from "@/lib/config/site";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

const iconMap: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  ambulance: Ambulance,
  heart: HeartPulse,
  scan: ScanLine,
  thermometer: Thermometer,
  briefcase: BriefcaseMedical,
  users: Users,
  flask: TestTube2,
};

type ServiceHighlightsProps = {
  dictionary: Dictionary;
};

export function ServiceHighlights({ dictionary }: ServiceHighlightsProps) {
  return (
    <section className="bg-warm py-12 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionTitle align="center" title={dictionary.serviceHighlights.title} />
        </FadeIn>
        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
          {serviceHighlights.map((item, index) => {
            const copy = dictionary.serviceHighlights.items[item.id];
            return (
              <FadeIn key={item.id} delay={index * 50}>
                <article className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-navy/8 bg-white p-5 pt-7 shadow-[0_10px_30px_rgb(18_52_71/0.04)] sm:p-6 sm:pt-8">
                  <span
                    className="absolute right-0 top-0 border-l-[20px] border-t-[20px] border-l-transparent border-t-navy"
                    aria-hidden
                  />
                  <div className="flex flex-wrap gap-2">
                    {item.icons.map((icon) => {
                      const Icon = iconMap[icon];
                      return (
                        <span
                          key={icon}
                          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-teal/25 bg-teal/8 text-navy"
                        >
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                      );
                    })}
                  </div>
                  <h3 className="font-display mt-6 text-xl leading-snug text-navy">{copy.title}</h3>
                  {copy.text ? <p className="mt-3 text-sm leading-relaxed text-muted">{copy.text}</p> : null}
                  {"showPhone" in item && item.showPhone ? (
                    <a href={site.phoneHref} className="mt-4 text-sm font-medium text-teal-dark hover:text-navy">
                      {site.phoneDisplay}
                    </a>
                  ) : null}
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
