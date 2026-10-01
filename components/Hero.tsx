import { FadeIn } from "@/components/FadeIn";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type HeroProps = {
  dictionary: Dictionary;
};

export function Hero({ dictionary }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        className="absolute inset-0 bg-[linear-gradient(165deg,#0c2430_0%,#123447_42%,#1a5360_74%,#2d7c7b_100%)]"
        aria-hidden
      />
      <div
        className="absolute -right-16 top-[-28%] h-[120%] w-[55%] rounded-full bg-[radial-gradient(circle,rgba(216,199,165,0.2),transparent_62%)]"
        aria-hidden
      />
      <div
        className="absolute -left-24 bottom-[-36%] h-[80%] w-[50%] rounded-full bg-[radial-gradient(circle,rgba(45,124,123,0.4),transparent_68%)]"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-10 text-center sm:px-6 sm:pb-28 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-24">
        <FadeIn className="max-w-3xl">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-sand sm:text-xs">
            {dictionary.hero.welcome}
          </p>
          <h1 className="font-display mt-3 text-balance text-[1.85rem] leading-[1.12] text-white sm:mt-4 sm:text-5xl lg:text-6xl">
            {dictionary.hero.title}
          </h1>
          <span className="mx-auto mt-5 block h-px w-12 bg-sand/80 sm:mt-8 sm:w-16" aria-hidden />
          <p className="mt-5 text-pretty px-1 text-base leading-relaxed text-white/80 sm:mt-7 sm:text-xl">
            {dictionary.hero.text}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
