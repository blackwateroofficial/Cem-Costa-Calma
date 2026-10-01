type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  light?: boolean;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  text,
  light = false,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p
          className={`mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] sm:text-xs ${
            light ? "text-sand" : "text-teal"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-display text-[1.7rem] leading-tight sm:text-4xl lg:text-[2.75rem] ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {align === "center" ? (
        <span className={`mx-auto mt-5 block h-px w-12 ${light ? "bg-sand/70" : "bg-sand"}`} aria-hidden />
      ) : (
        <span className={`mt-5 block h-px w-10 ${light ? "bg-sand/70" : "bg-sand"}`} aria-hidden />
      )}
      {text ? (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? "text-white/80" : "text-muted"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
