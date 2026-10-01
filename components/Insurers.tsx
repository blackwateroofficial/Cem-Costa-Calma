import { UserRound } from "lucide-react";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/lib/config/site";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type InsurersProps = {
  dictionary: Dictionary;
};

type InsurerLogo = {
  src: string;
  name: string;
  invert: boolean;
};

function LogoGrid({
  items,
  columns,
}: {
  items: readonly InsurerLogo[];
  columns: string;
}) {
  return (
    <ul className={`mt-6 grid gap-3 ${columns}`}>
      {items.map((logo) => (
        <li
          key={logo.name}
          className={`flex h-24 items-center justify-center rounded-xl border px-3 py-2 sm:h-28 sm:px-4 sm:py-3 ${
            logo.invert ? "border-white/10 bg-zinc-950" : "border-navy/8 bg-white shadow-[0_8px_24px_rgb(18_52_71/0.04)]"
          }`}
        >
          <div className="relative h-[56px] w-full sm:h-[72px]">
            <Image
              src={logo.src}
              alt={logo.name}
              fill
              sizes="200px"
              className="object-contain"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Insurers({ dictionary }: InsurersProps) {
  return (
    <section className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionTitle align="center" title={dictionary.insurers.title} text={dictionary.insurers.intro} />
        </FadeIn>
        <div className="mt-8 grid gap-10 sm:mt-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <h3 className="font-display text-xl text-navy sm:text-2xl">{dictionary.insurers.national}</h3>
            <LogoGrid items={site.insurers.national} columns="grid-cols-2 md:grid-cols-4" />
          </FadeIn>
          <FadeIn delay={60}>
            <h3 className="font-display text-xl text-navy sm:text-2xl">{dictionary.insurers.international}</h3>
            <LogoGrid items={site.insurers.international} columns="grid-cols-2 md:grid-cols-3" />
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-navy/8 bg-warm px-3 py-3 sm:mt-8 sm:gap-4 sm:px-4 sm:py-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-navy/15 bg-white text-navy sm:h-14 sm:w-14">
                <UserRound className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.75} aria-hidden />
              </span>
              <p className="text-sm font-medium leading-snug text-navy sm:text-lg">{dictionary.insurers.private}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
