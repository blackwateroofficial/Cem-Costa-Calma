import { Star } from "lucide-react";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/lib/config/site";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type ReviewsProps = {
  dictionary: Dictionary;
};

export function Reviews({ dictionary }: ReviewsProps) {
  return (
    <section className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="rounded-3xl border border-navy/8 bg-warm px-4 py-10 text-center shadow-[0_10px_30px_rgb(18_52_71/0.04)] sm:px-12 sm:py-16">
            <SectionTitle title={dictionary.reviews.title} align="center" />
            <p className="font-display mt-6 text-5xl text-navy sm:mt-8 sm:text-7xl">{dictionary.reviews.score}</p>
            <div className="mt-4 flex justify-center gap-1 text-sand" aria-hidden>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-muted">{dictionary.reviews.basedOn}</p>
            <div className="mt-8 flex justify-center">
              <Button href={site.googleReviewsUrl} variant="ghost">
                {dictionary.reviews.cta}
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
