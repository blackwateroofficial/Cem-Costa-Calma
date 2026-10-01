import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl text-navy">404</h1>
      <p className="mt-4 text-muted">Esta página no existe.</p>
      <Link href="/es" className="mt-8 inline-block text-teal">
        Centro Médico Ever Grillo
      </Link>
    </div>
  );
}
