import { Facebook, Instagram } from "lucide-react";
import { site } from "@/lib/config/site";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.56l-5.14-6.72L5.2 22H1.94l8.02-9.16L1.5 2h6.72l4.64 6.18L18.244 2Zm-1.15 18.08h1.82L7.01 3.82H5.06l12.03 16.26Z"
      />
    </svg>
  );
}

type SocialLinksProps = {
  dictionary: Dictionary;
  variant?: "light" | "dark";
  size?: "md" | "lg" | "top";
};

export function SocialLinks({ dictionary, variant = "light", size = "md" }: SocialLinksProps) {
  const items = [
    { href: site.social.facebook, label: dictionary.social.facebook, icon: Facebook, showName: true },
    { href: site.social.instagram, label: dictionary.social.instagram, icon: Instagram, showName: true },
    { href: site.social.twitter, label: dictionary.social.twitter, icon: XIcon, showName: true },
  ];

  const box =
    size === "lg"
      ? "min-h-14 gap-3 px-5 text-base"
      : size === "top"
        ? "h-9"
        : "min-h-12 px-3";

  const color =
    size === "top"
      ? "border-white/0 text-white/90 hover:bg-white/10 hover:text-sand"
      : variant === "dark"
        ? "border-white/20 text-white hover:border-sand hover:text-sand"
        : "border-navy/15 text-navy hover:border-teal hover:text-teal";

  return (
    <ul className={`flex items-center ${size === "lg" ? "w-full flex-col gap-3 sm:flex-row" : size === "top" ? "gap-1" : "flex-wrap gap-3"}`}>
      {items.map((item) => {
        const Icon = item.icon;
        const withName = item.showName || size === "lg";
        return (
          <li key={item.href} className={size === "lg" ? "flex-1" : ""}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className={`inline-flex items-center justify-center gap-1.5 rounded-full border transition-colors ${box} ${color} ${
                size === "lg" ? "w-full" : withName ? "px-2.5" : "w-9"
              }`}
            >
              <Icon className={size === "top" ? "h-4 w-4" : "h-5 w-5"} />
              {withName ? (
                <span className={size === "top" ? "text-[11px] font-medium tracking-wide" : ""}>{item.label}</span>
              ) : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
