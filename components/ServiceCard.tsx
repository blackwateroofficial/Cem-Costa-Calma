type ServiceCardProps = {
  name: string;
  description: string;
};

export function ServiceCard({ name, description }: ServiceCardProps) {
  return (
    <article className="flex h-full min-w-0 flex-col rounded-2xl border border-navy/8 bg-white p-5 shadow-[0_10px_30px_rgb(18_52_71/0.04)] transition-shadow duration-200 hover:shadow-card sm:p-7">
      <div className="mb-5 h-px w-10 bg-sand" />
      <h3 className="font-display text-xl text-navy sm:text-2xl">{name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]">{description}</p>
    </article>
  );
}
