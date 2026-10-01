import type { Locale } from "@/lib/i18n/config";

export function FlagIcon({ locale, className = "h-3.5 w-5" }: { locale: Locale; className?: string }) {
  if (locale === "es") {
    return (
      <svg className={className} viewBox="0 0 21 15" aria-hidden>
        <rect width="21" height="15" fill="#c60b1e" />
        <rect y="3.75" width="21" height="7.5" fill="#ffc400" />
      </svg>
    );
  }

  if (locale === "en") {
    return (
      <svg className={className} viewBox="0 0 21 15" aria-hidden>
        <rect width="21" height="15" fill="#012169" />
        <path d="M0 0 L21 15 M21 0 L0 15" stroke="#fff" strokeWidth="3" />
        <path d="M0 0 L21 15 M21 0 L0 15" stroke="#c8102e" strokeWidth="1.4" />
        <path d="M10.5 0 V15 M0 7.5 H21" stroke="#fff" strokeWidth="5" />
        <path d="M10.5 0 V15 M0 7.5 H21" stroke="#c8102e" strokeWidth="3" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 21 15" aria-hidden>
      <rect width="21" height="5" fill="#000" />
      <rect y="5" width="21" height="5" fill="#d00" />
      <rect y="10" width="21" height="5" fill="#ffce00" />
    </svg>
  );
}
