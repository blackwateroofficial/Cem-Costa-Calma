import type { ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "sand" | "white";
type ButtonSize = "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-navy text-white hover:bg-navy-deep shadow-none",
  secondary: "bg-teal text-white hover:bg-teal-dark shadow-[0_8px_20px_rgb(45_124_123/0.25)]",
  ghost: "bg-transparent text-navy border border-navy/15 hover:border-navy/40 hover:bg-white",
  sand: "bg-sand text-navy hover:bg-[#cbb892]",
  white: "bg-white text-navy hover:bg-warm",
};

const sizes: Record<ButtonSize, string> = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external,
  ariaLabel,
}: ButtonProps) {
  const isHash = href.startsWith("#");
  const isExternal =
    external ?? (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:"));
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (isExternal || isHash) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} prefetch aria-label={ariaLabel} className={classes}>
      {children}
    </Link>
  );
}
