import Link from "next/link";
import { site } from "@/lib/site";
import PhoneLink from "@/components/PhoneLink";
import EmailLink from "@/components/EmailLink";

export default function Footer() {
  return (
    <footer className="hero-surface text-navy-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl font-semibold text-white">
            {site.name}
          </p>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-gold-300">
            {site.role}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-100/90">
            {site.tagline} {site.serviceArea}.
          </p>
        </div>

        <nav aria-label="Footer" className="md:justify-self-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-300">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { href: "/about/", label: "About Ericka" },
              { href: "/services/", label: "Services" },
              { href: "/testimonials/", label: "Testimonials" },
              { href: "/contact/", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:justify-self-end">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-300">
            Get in touch
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <PhoneLink variant="footer" />
            </li>
            <li>
              <EmailLink variant="footer" />
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
                </svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-navy-100/70 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.owner} · Nationally Certified School Psychologist</p>
        </div>
      </div>
    </footer>
  );
}
