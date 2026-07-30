import type { Metadata } from "next";
import { site } from "@/lib/site";
import TestimonialCard from "@/components/TestimonialCard";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What school leaders, colleagues, and mentees say about working with Ericka Stevens and ELS Group LLC.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="hero-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="rise rise-1 text-sm font-bold uppercase tracking-[0.22em] text-gold-300">
            Testimonials &amp; recognition
          </p>
          <h1 className="rise rise-2 mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            In the words of the schools and colleagues{" "}
            <span className="text-gold-300">she works with</span>
          </h1>

          <div className="rise rise-3 mt-8 flex max-w-3xl flex-wrap gap-2.5">
            <span className="py-1.5 text-sm font-semibold uppercase tracking-[0.14em] text-navy-100">
              Colleagues and clients describe Ericka as
            </span>
            {site.adjectives.map((adjective) => (
              <span
                key={adjective}
                className="rounded-full border border-gold-500/40 bg-white/5 px-4 py-1.5 text-sm font-semibold text-gold-100"
              >
                {adjective}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {site.testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.quote.slice(0, 40)}
              testimonial={testimonial}
            />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
