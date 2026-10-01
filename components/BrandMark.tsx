import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  priority?: boolean;
};

export function BrandMark({
  className = "h-10 w-auto",
  priority = false,
}: BrandMarkProps) {
  return (
    <Image
      src="/images/logo-cem-costa-calma.png"
      alt="CEM Costa Calma"
      width={420}
      height={120}
      priority={priority}
      className={`object-contain object-left ${className}`}
    />
  );
}
