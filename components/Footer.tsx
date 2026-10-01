import { BrandMark } from "@/components/BrandMark";
import { SocialLinks } from "@/components/SocialLinks";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type FooterProps = {
  dictionary: Dictionary;
};

export function Footer({ dictionary }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-navy pt-12 text-white pb-[calc(7.5rem+env(safe-area-inset-bottom))] sm:pt-16 md:pb-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-16 lg:px-8">
        <div className="inline-flex w-fit rounded-xl bg-white px-4 py-3 shadow-card">
          <BrandMark className="h-10 w-auto max-w-[200px] sm:h-12 sm:max-w-[240px]" />
        </div>
        <div className="md:max-w-sm md:text-right">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-sand/80">{dictionary.footer.socialTitle}</p>
          <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-white/70 md:ml-auto">
            {dictionary.footer.socialText}
          </p>
          <div className="mt-5 md:flex md:justify-end">
            <SocialLinks dictionary={dictionary} variant="dark" />
          </div>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl px-4 text-center text-xs text-white/40 sm:px-6 lg:px-8">
        {dictionary.footer.rights}
      </p>
    </footer>
  );
}
