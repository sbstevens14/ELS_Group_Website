import type { Metadata } from "next";
import { site } from "@/lib/site";
import PhoneLink from "@/components/PhoneLink";
import EmailLink from "@/components/EmailLink";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book an intro call or get in touch with ELS Group LLC — school psychology evaluations, MTSS consultation, professional development, and mentorship. St. Louis, MO and remote.",
};

const CalendarIcon = ({ className }: { className: string }) => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export default function ContactPage() {
  return (
    <>
      <section className="hero-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="rise rise-1 text-sm font-bold uppercase tracking-[0.22em] text-gold-300">
            Contact
          </p>
          <h1 className="rise rise-2 mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Let&apos;s find the right support{" "}
            <span className="text-gold-300">for your school</span>
          </h1>
          <p className="rise rise-3 mt-5 max-w-2xl text-lg text-navy-100">
            {site.bookingCta}. Whether you have a defined scope or just a
            challenge you&apos;re working through, a short conversation is the
            best place to start.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
          {/* Primary action: book a call */}
          <div className="flex flex-col rounded-2xl border border-gold-300 bg-gold-50 p-8 sm:p-10">
            <CalendarIcon className="h-10 w-10 text-gold-600" />
            <h2 className="mt-5 font-serif text-3xl font-semibold text-navy-900">
              Book an intro call
            </h2>
            <p className="mt-3 max-w-md text-[1.02rem] leading-relaxed text-ink-soft">
              A free 30-minute conversation about your school&apos;s needs — no
              preparation required. Pick a time that works and it lands on both
              calendars automatically.
            </p>
            {site.bookingUrl ? (
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block self-start rounded-full bg-gold-500 px-8 py-4 text-base font-bold text-navy-950 transition-colors hover:bg-gold-300"
              >
                Pick a time
              </a>
            ) : (
              <p className="mt-7 text-sm font-semibold text-ink-soft">
                The scheduling link is coming online — in the meantime, email
                works great: <EmailLink variant="contactCard" />
              </p>
            )}
            <p className="mt-6 border-t border-gold-300/60 pt-5 text-sm leading-relaxed text-ink-soft">
              Prefer to write instead? Email with your school or district, your
              role, and what you&apos;re working on — Ericka replies personally.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-navy-100 bg-white p-7 shadow-[0_1px_2px_rgba(18,32,54,0.06)]">
              <h2 className="font-serif text-xl font-semibold text-navy-900">
                Direct contact
              </h2>
              <ul className="mt-5 space-y-4">
                <li>
                  <PhoneLink variant="contactCard" />
                </li>
                <li>
                  <EmailLink variant="contactCard" />
                </li>
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-lg font-semibold text-navy-800 transition-colors hover:text-gold-600"
                  >
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-gold-600"
                      fill="currentColor"
                    >
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
                    </svg>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-navy-50/60 p-7">
              <h2 className="font-serif text-xl font-semibold text-navy-900">
                Service area
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {site.serviceArea}. Evaluations are typically conducted on-site;
                consultation, professional development, and supervision are
                available in person or virtually.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
