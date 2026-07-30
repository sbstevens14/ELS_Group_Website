import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About Ericka Stevens",
  description:
    "Meet Ericka Stevens, Ed.S., NCSP — Nationally Certified School Psychologist, educational consultant, and UMSL adjunct professor behind ELS Group LLC.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="rise rise-1 text-sm font-bold uppercase tracking-[0.22em] text-gold-300">
            About
          </p>
          <h1 className="rise rise-2 mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Meet Ericka Stevens,{" "}
            <span className="text-gold-300">Ed.S., NCSP</span>
          </h1>
          <p className="rise rise-3 mt-5 max-w-2xl text-lg text-navy-100">
            {site.role} — partnering with public, charter, and private schools
            across the St. Louis region and beyond.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <div className="relative mx-auto max-w-xs md:sticky md:top-24">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[2rem] border border-gold-300"
              />
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-navy-100 to-navy-200">
                <Image
                  src="/images/ericka-stevens.png"
                  alt={`Portrait of ${site.owner}`}
                  width={600}
                  height={750}
                  priority
                  className="w-full"
                />
              </div>

              <div className="relative mt-10 rounded-2xl border border-navy-100 bg-white p-6 shadow-[0_1px_2px_rgba(18,32,54,0.06)]">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/ncsp-badge.png"
                    alt="Nationally Certified School Psychologist badge"
                    width={56}
                    height={56}
                  />
                  <p className="font-serif text-lg font-semibold leading-snug text-navy-900">
                    Credentials
                  </p>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm leading-snug text-ink-soft">
                  {site.credentials.map((credential) => (
                    <li key={credential} className="flex gap-2.5">
                      <span aria-hidden className="mt-0.5 text-gold-600">
                        ✦
                      </span>
                      {credential}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-navy-100 pt-4 text-xs leading-relaxed text-ink-soft">
                  {site.memberships}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-5 text-[1.05rem] leading-relaxed text-foreground">
              {site.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-navy-50/60 p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
                Teaching philosophy
              </p>
              <p className="mt-4 font-serif text-lg leading-relaxed text-navy-900">
                {site.teachingPhilosophy}
              </p>
            </div>

            <div className="mt-12">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
                Beyond the office
              </p>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-navy-900">
                A few fun facts
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {site.funFacts.map((fact) => (
                  <li
                    key={fact.slice(0, 40)}
                    className="rounded-xl border border-navy-100 bg-white p-5 text-sm leading-relaxed text-ink-soft"
                  >
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
