import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import { SocialLinks } from "@/components/SocialLinks";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export function SocialSection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionTitle title={dictionary.social.title} text={dictionary.social.text} />
          <div className="mt-8">
            <SocialLinks dictionary={dictionary} size="lg" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
