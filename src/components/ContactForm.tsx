import { site } from "@/lib/site";
import EmailLink from "@/components/EmailLink";

const inputClass =
  "w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-[0.95rem] text-foreground placeholder:text-ink-soft/60 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-300/50";

// Plain-HTML Formspree form — works with the static export, no API routes.
// Until site.formspreeId is set, an email fallback card renders instead.
export default function ContactForm() {
  if (!site.formspreeId) {
    return (
      <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-[0_1px_2px_rgba(18,32,54,0.06)]">
        <h2 className="font-serif text-2xl font-semibold text-navy-900">
          Send a message
        </h2>
        <p className="mt-3 leading-relaxed text-ink-soft">
          The contact form is being set up — in the meantime, the fastest way to
          reach Ericka is by email:
        </p>
        <div className="mt-5">
          <EmailLink variant="contactCard" />
        </div>
      </div>
    );
  }

  return (
    <form
      action={`https://formspree.io/f/${site.formspreeId}`}
      method="POST"
      className="rounded-2xl border border-navy-100 bg-white p-8 shadow-[0_1px_2px_rgba(18,32,54,0.06)]"
    >
      <h2 className="font-serif text-2xl font-semibold text-navy-900">
        Send a message
      </h2>
      <p className="mt-2 text-sm text-ink-soft">
        Share a bit about your school and what you&apos;re working on — Ericka
        will follow up personally.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-bold text-navy-900">
          Name
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className={`mt-1.5 font-normal ${inputClass}`}
          />
        </label>
        <label className="block text-sm font-bold text-navy-900">
          Email
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className={`mt-1.5 font-normal ${inputClass}`}
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-bold text-navy-900">
        School / organization
        <input
          type="text"
          name="organization"
          autoComplete="organization"
          className={`mt-1.5 font-normal ${inputClass}`}
        />
      </label>

      <label className="mt-5 block text-sm font-bold text-navy-900">
        How can ELS Group help?
        <textarea
          name="message"
          required
          rows={5}
          className={`mt-1.5 font-normal ${inputClass}`}
        />
      </label>

      <input
        type="hidden"
        name="_subject"
        value="New inquiry from elsgroupllc.com"
      />

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-navy-900 px-7 py-3.5 text-base font-bold text-gold-100 transition-colors hover:bg-navy-800 sm:w-auto"
      >
        Send message
      </button>
    </form>
  );
}
