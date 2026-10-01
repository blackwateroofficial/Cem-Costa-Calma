import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeIn({ children, className = "", delay = 0 }: FadeInProps) {
  return (
    <div className={`fade-in ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
