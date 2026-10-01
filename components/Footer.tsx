import { BrandMark } from "@/components/BrandMark";
import { SocialLinks } from "@/components/SocialLinks";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type FooterProps = {
  dictionary: Dictionary;
};

export function Footer({ dictionary }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-navy pt-12 text-white pb-[calc(7.5rem+env(safe-area-inset-bottom))] sm:pt-14 md:pb-14">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-4 text-center sm:px-6 md:flex-row md:justify-center md:gap-12 md:text-left">
        <div className="inline-flex w-fit shrink-0 rounded-xl bg-white px-4 py-3 shadow-card">
          <BrandMark className="h-10 w-auto max-w-[200px] sm:h-12 sm:max-w-[240px]" />
        </div>
        <span className="hidden h-20 w-px bg-white/15 md:block" aria-hidden />
        <div className="flex flex-col items-center md:items-start">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-sand/80">{dictionary.footer.socialTitle}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">{dictionary.footer.socialText}</p>
          <div className="mt-5">
            <SocialLinks dictionary={dictionary} variant="dark" />
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-3xl px-4 text-center text-xs text-white/40 sm:px-6">
        {dictionary.footer.rights}
      </p>
    </footer>
  );
}
