import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import TestimonialCard from "@/components/TestimonialCard";
import CtaBand from "@/components/CtaBand";

function ValueCard({
  index,
  name,
  description,
}: {
  index: number;
  name: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-7 shadow-[0_1px_2px_rgba(18,32,54,0.06)]">
      <span className="font-serif text-sm font-semibold text-gold-600">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-2 font-serif text-xl font-semibold text-navy-900">
        {name}
      </h3>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  const featured = site.testimonials.filter((t) => t.featured).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="hero-surface">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:items-center md:pb-24 md:pt-20">
          <div>
            <p className="rise rise-1 text-sm font-bold uppercase tracking-[0.22em] text-gold-300">
              School Psychology · Educational Consulting · St. Louis, MO
            </p>
            <h1 className="rise rise-2 mt-5 font-serif text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
              Stronger systems.
              <br />
              Empowered educators.
              <br />
              <span className="text-gold-300">Thriving students.</span>
            </h1>
            <p className="rise rise-3 mt-6 max-w-xl text-lg leading-relaxed text-navy-100">
              {site.mission}
            </p>
            <div className="rise rise-4 mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact/"
                className="rounded-full bg-gold-500 px-7 py-3.5 text-base font-bold text-navy-950 transition-colors hover:bg-gold-300"
              >
                Book a consult
              </Link>
              <Link
                href="/services/"
                className="rounded-full border border-navy-100/40 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore services
              </Link>
            </div>
          </div>

          <div className="rise rise-3 relative mx-auto w-full max-w-xs md:max-w-sm">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] border border-gold-500/40"
            />
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-navy-700 to-navy-900">
              <Image
                src="/images/ericka-stevens.png"
                alt={`${site.owner}, founder of ${site.name}`}
                width={600}
                height={750}
                priority
                className="w-full"
              />
            </div>
            <div className="absolute -bottom-5 -right-4 flex items-center gap-3 rounded-2xl border border-navy-100 bg-white px-4 py-3 shadow-lg">
              <Image
                src="/images/ncsp-badge.png"
                alt="Nationally Certified School Psychologist badge"
                width={44}
                height={44}
              />
              <span className="text-xs font-bold leading-tight text-navy-900">
                Nationally Certified
                <br />
                School Psychologist
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / vision */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
              The vision
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-snug text-navy-900 sm:text-4xl">
              {site.vision}
            </h2>
          </div>
          <div className="border-l-2 border-gold-300 pl-8">
            <p className="text-lg leading-relaxed text-ink-soft">
              {site.tagline} ELS Group works alongside your team — not around it
              — so the systems, skills, and confidence stay long after the
              engagement ends.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              {site.serviceArea}.
            </p>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="border-y border-navy-100 bg-navy-50/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
            Core values
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-navy-900 sm:text-4xl">
            Four commitments behind every engagement
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.values.map((value, i) => (
              <ValueCard key={value.name} index={i} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
              Services
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-navy-900 sm:text-4xl">
              Three ways schools partner with ELS Group
            </h2>
          </div>
          <Link
            href="/services/"
            className="text-sm font-bold text-navy-700 underline decoration-gold-300 underline-offset-4 hover:text-gold-600"
          >
            See the full menu of services →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {site.serviceCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/services/#${category.slug}`}
              className="group rounded-2xl border border-navy-100 bg-white p-7 shadow-[0_1px_2px_rgba(18,32,54,0.06)] transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-md"
            >
              <h3 className="font-serif text-xl font-semibold text-navy-900">
                {category.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                {category.summary}
              </p>
              <span className="mt-5 inline-block text-sm font-bold text-gold-600 transition-transform group-hover:translate-x-1">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured testimonials */}
      <section className="border-t border-navy-100 bg-navy-50/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
            What partners say
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-navy-900 sm:text-4xl">
            Trusted by the schools she serves
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featured.map((t) => (
              <TestimonialCard key={t.quote.slice(0, 40)} testimonial={t} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/testimonials/"
              className="text-sm font-bold text-navy-700 underline decoration-gold-300 underline-offset-4 hover:text-gold-600"
            >
              Read all testimonials →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
