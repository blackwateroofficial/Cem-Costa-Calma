import { FadeIn } from "@/components/FadeIn";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type LegalDocument = Dictionary["legal"]["legalNotice"];

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-24 lg:px-8">
      <FadeIn>
        <h1 className="font-display text-3xl text-navy sm:text-5xl">{document.title}</h1>
        <span className="mt-5 block h-px w-12 bg-sand" aria-hidden />
        <p className="mt-6 text-lg leading-relaxed text-muted">{document.intro}</p>
      </FadeIn>
      <div className="mt-12 space-y-10">
        {document.sections.map((section) => (
          <FadeIn key={section.title}>
            <h2 className="font-display text-2xl text-navy">{section.title}</h2>
            <p className="mt-3 leading-relaxed text-ink/80">{section.text}</p>
          </FadeIn>
        ))}
      </div>
    </article>
  );
}
