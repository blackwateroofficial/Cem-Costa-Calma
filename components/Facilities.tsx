import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/lib/config/site";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type FacilitiesProps = {
  dictionary: Dictionary;
};

export function Facilities({ dictionary }: FacilitiesProps) {
  return (
    <section className="scroll-mt-28 bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionTitle align="center" title={dictionary.facilities.title} text={dictionary.facilities.text} />
        </FadeIn>
        <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-12 sm:gap-5 md:grid-cols-4">
          {site.facilities.map((src, index) => (
            <FadeIn key={src} delay={index * 40}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy/5 shadow-[0_10px_30px_rgb(18_52_71/0.06)]">
                <Image
                  src={src}
                  alt={dictionary.facilities.alts[index] ?? dictionary.facilities.title}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.04]"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
