import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { SocialLinks } from "@/components/SocialLinks";
import { getLocalizedPath, type Locale, type PageKey } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type FooterProps = {
  locale: Locale;
  dictionary: Dictionary;
  page: PageKey;
};

export function Footer({ locale, dictionary }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-navy pt-12 text-white pb-[calc(7.5rem+env(safe-area-inset-bottom))] sm:pt-16 md:pb-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="inline-flex rounded-xl bg-white px-4 py-3 shadow-card">
            <BrandMark className="h-10 w-auto max-w-[200px] sm:h-12 sm:max-w-[240px]" />
          </div>
        </div>
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-sand/80">{dictionary.footer.legal}</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link className="text-white/75 transition-colors hover:text-white" href={getLocalizedPath(locale, "legal")}>
                {dictionary.footer.legalNotice}
              </Link>
            </li>
            <li>
              <Link className="text-white/75 transition-colors hover:text-white" href={getLocalizedPath(locale, "privacy")}>
                {dictionary.footer.privacy}
              </Link>
            </li>
            <li>
              <Link className="text-white/75 transition-colors hover:text-white" href={getLocalizedPath(locale, "cookies")}>
                {dictionary.footer.cookies}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-sand/80">{dictionary.footer.socialTitle}</p>
          <p className="mt-5 max-w-[16rem] text-sm leading-relaxed text-white/70">{dictionary.footer.socialText}</p>
          <div className="mt-6">
            <SocialLinks dictionary={dictionary} variant="dark" />
          </div>
        </div>
      </div>
      <p className="mx-auto mt-14 max-w-6xl px-4 text-xs text-white/40 sm:px-6 lg:px-8">
        {dictionary.footer.rights}
      </p>
    </footer>
  );
}
