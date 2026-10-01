import { MapPin, Phone } from "lucide-react";
import { site } from "@/lib/config/site";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type MobileBottomBarProps = {
  dictionary: Dictionary;
};

export function MobileBottomBar({ dictionary }: MobileBottomBarProps) {
  return (
    <div className="fixed inset-x-3 z-50 md:hidden bottom-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-2 gap-2 rounded-2xl border border-navy/10 bg-white p-1.5 shadow-card sm:p-2">
        <a
          href={site.mapsSearchUrl}
          className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-navy/12 px-2 text-center text-[13px] font-medium leading-tight text-navy sm:gap-2 sm:text-sm"
        >
          <MapPin className="h-4 w-4 shrink-0" aria-hidden />
          <span className="truncate">{dictionary.common.directions}</span>
        </a>
        <a
          href={site.phoneHref}
          className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl bg-teal px-2 text-center text-[13px] font-medium leading-tight text-white sm:gap-2 sm:text-sm"
        >
          <Phone className="h-4 w-4 shrink-0" aria-hidden />
          <span className="truncate">{dictionary.common.call}</span>
        </a>
      </div>
    </div>
  );
}
