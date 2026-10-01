import { Clock, Moon, Stethoscope, Sun } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type QuickInfoProps = {
  dictionary: Dictionary;
};

export function QuickInfo({ dictionary }: QuickInfoProps) {
  const hours = dictionary.quickInfo;

  return (
    <section className="relative z-10 -mt-8 px-3 pb-2 sm:-mt-12 sm:px-6 sm:pb-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-card sm:grid-cols-2">
        <div className="border-b border-navy/8 sm:border-b-0 sm:border-r">
          <FadeIn className="h-full px-5 py-5 sm:px-8 sm:py-8">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-teal">
                <Clock className="h-5 w-5" aria-hidden />
              </span>
              <span className="inline-flex items-center rounded-full bg-teal px-3 py-1 text-xs font-semibold tracking-[0.14em] text-white">
                {hours.alwaysOpen}
              </span>
            </div>
            <p className="mt-4 text-[0.7rem] uppercase tracking-[0.2em] text-muted">{hours.hoursLabel}</p>
            <p className="mt-1 text-sm text-navy/70">{hours.everyDay}</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-3 rounded-xl bg-teal/10 px-3 py-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-teal shadow-sm">
                  <Sun className="h-4 w-4" aria-hidden />
                </span>
                <span>
                  <span className="block font-display text-[1.15rem] leading-none text-navy">{hours.openHours}</span>
                  <span className="mt-1 block text-sm text-teal-dark">{hours.openLabel}</span>
                </span>
              </li>
              <li className="flex items-center gap-3 rounded-xl bg-navy/[0.05] px-3 py-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-sm">
                  <Moon className="h-4 w-4" aria-hidden />
                </span>
                <span>
                  <span className="block font-display text-[1.15rem] leading-none text-navy">{hours.onCallHours}</span>
                  <span className="mt-1 block text-sm text-muted">{hours.onCallLabel}</span>
                </span>
              </li>
            </ul>
          </FadeIn>
        </div>
        <FadeIn delay={50} className="flex h-full flex-col justify-center px-5 py-5 sm:px-8 sm:py-8">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-teal">
            <Stethoscope className="h-5 w-5" aria-hidden />
          </span>
          <p className="mt-4 text-[0.7rem] uppercase tracking-[0.2em] text-muted">{hours.careLabel}</p>
          <p className="mt-2 text-[1.05rem] leading-snug text-navy">{hours.careValue}</p>
        </FadeIn>
      </div>
    </section>
  );
}
