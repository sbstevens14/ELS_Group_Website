import Link from "next/link";
import { site } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="hero-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-300">
            {site.bookingCta}
          </p>
          <h2 className="mt-2 max-w-xl font-serif text-3xl font-semibold text-white sm:text-4xl">
            Let&apos;s talk about what your school community needs.
          </h2>
        </div>
        <Link
          href="/contact/"
          className="shrink-0 rounded-full bg-gold-500 px-7 py-3.5 text-base font-bold text-navy-950 transition-colors hover:bg-gold-300"
        >
          Start the conversation
        </Link>
      </div>
    </section>
  );
}
