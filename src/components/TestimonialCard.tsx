import type { Testimonial } from "@/lib/site";

export default function TestimonialCard({
  testimonial,
  tone = "light",
}: {
  testimonial: Testimonial;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <figure
      className={`relative flex h-full flex-col rounded-2xl border p-7 ${
        dark
          ? "border-white/10 bg-white/5 text-navy-100"
          : "border-navy-100 bg-white text-foreground shadow-[0_1px_2px_rgba(18,32,54,0.06)]"
      }`}
    >
      <span
        aria-hidden
        className={`font-serif text-6xl leading-none ${
          dark ? "text-gold-300/70" : "text-gold-500/60"
        }`}
      >
        “
      </span>
      <blockquote className="mt-1 flex-1 text-[0.97rem] leading-relaxed">
        {testimonial.quote}
      </blockquote>
      <figcaption
        className={`mt-5 border-t pt-4 text-sm ${
          dark ? "border-white/10" : "border-navy-100"
        }`}
      >
        <span
          className={`block font-bold ${dark ? "text-white" : "text-navy-900"}`}
        >
          {testimonial.author}
        </span>
        <span className={dark ? "text-navy-100/80" : "text-ink-soft"}>
          {[testimonial.title, testimonial.date].filter(Boolean).join(" · ")}
        </span>
      </figcaption>
    </figure>
  );
}
