import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Special education evaluations, MTSS and systems-level consultation, professional development, and mentorship for schools — from ELS Group LLC in St. Louis, MO.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="hero-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="rise rise-1 text-sm font-bold uppercase tracking-[0.22em] text-gold-300">
            Services
          </p>
          <h1 className="rise rise-2 mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Practical support for the work your school{" "}
            <span className="text-gold-300">already cares about</span>
          </h1>
          <p className="rise rise-3 mt-5 max-w-2xl text-lg text-navy-100">
            {site.servicesIntro}
          </p>
        </div>
      </section>

      {/* Category jump nav */}
      <nav
        aria-label="Service categories"
        className="border-b border-navy-100 bg-navy-50/60"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-5 py-4 sm:px-8">
          {site.serviceCategories.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-semibold text-navy-800 transition-colors hover:border-gold-300 hover:text-gold-700"
            >
              {category.title}
            </a>
          ))}
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="space-y-16">
          {site.serviceCategories.map((category, i) => (
            <article
              key={category.slug}
              id={category.slug}
              className="scroll-mt-24 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-14"
            >
              <div>
                <span className="font-serif text-sm font-semibold text-gold-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 font-serif text-3xl font-semibold leading-snug text-navy-900">
                  {category.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                  {category.summary}
                </p>
              </div>
              <ul className="space-y-4">
                {category.items.map((item) => (
                  <li
                    key={item.slice(0, 40)}
                    className="flex gap-4 rounded-xl border border-navy-100 bg-white p-5 text-[0.95rem] leading-relaxed text-foreground shadow-[0_1px_2px_rgba(18,32,54,0.06)]"
                  >
                    <span aria-hidden className="mt-0.5 shrink-0 text-gold-600">
                      ✦
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Who I work with */}
      <section className="border-y border-navy-100 bg-navy-50/60">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
                Who ELS Group serves
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-navy-900">
                Partnerships across the education landscape
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                Engagements are tailored to each organization&apos;s needs,
                goals, and culture — delivered on-site or remotely.{" "}
                <Link
                  href="/contact/"
                  className="font-bold text-navy-700 underline decoration-gold-300 underline-offset-4 hover:text-gold-600"
                >
                  Not sure where to start? Reach out.
                </Link>
              </p>
            </div>
            <ul className="flex flex-wrap gap-3">
              {site.targetClients.map((client) => (
                <li
                  key={client}
                  className="rounded-full border border-navy-200 bg-white px-5 py-2.5 text-sm font-semibold text-navy-800"
                >
                  {client}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Areas of expertise */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
          Areas of expertise
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-navy-900">
          Deep experience where it matters
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {site.expertise.map((area) => (
            <li
              key={area}
              className="rounded-xl border border-navy-100 bg-white px-4 py-3.5 text-center text-sm font-semibold text-navy-800 shadow-[0_1px_2px_rgba(18,32,54,0.06)]"
            >
              {area}
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
