"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/testimonials/", label: "Testimonials" },
  { href: "/contact/", label: "Contact" },
];

function Wordmark() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold-500/60 bg-navy-900 font-serif text-xl font-semibold text-gold-300">
        E
      </span>
      <span className="leading-tight">
        <span className="block font-serif text-lg font-semibold tracking-tight text-navy-900">
          {site.shortName}
        </span>
        <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-soft">
          Educational Consulting
        </span>
      </span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header className="sticky top-0 z-40 border-b border-navy-100 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Wordmark />

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isActive(item.href)
                  ? "bg-navy-900 text-gold-100"
                  : "text-navy-800 hover:bg-navy-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact/"
            className="ml-3 rounded-full bg-gold-500 px-5 py-2 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-300"
          >
            Book a consult
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 hover:bg-navy-50 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-navy-100 bg-background px-5 pb-5 pt-2 md:hidden"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-4 py-3 text-base font-semibold ${
                isActive(item.href)
                  ? "bg-navy-900 text-gold-100"
                  : "text-navy-800 hover:bg-navy-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact/"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-gold-500 px-5 py-3 text-center text-base font-bold text-navy-950"
          >
            Book a consult
          </Link>
        </nav>
      )}
    </header>
  );
}
