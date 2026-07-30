"use client";

import { useEffect, useState } from "react";

// Same scraper-resistance trick as PhoneLink: the address is stored as
// character codes and only assembled in the browser, so it never appears
// as a literal string in the static HTML or JS chunks.
// Decodes to the ELS Group contact address at elsgroupllc.com.
const CODES = [
  101, 114, 105, 99, 107, 97, 64, 101, 108, 115, 103, 114, 111, 117, 112, 108,
  108, 99, 46, 99, 111, 109,
];

type Variant = "contactCard" | "footer";

const MailIcon = ({ className }: { className: string }) => (
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
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

export default function EmailLink({ variant }: { variant: Variant }) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail(CODES.map((c) => String.fromCharCode(c)).join(""));
  }, []);

  if (variant === "footer") {
    const baseClass =
      "inline-flex items-center gap-2 text-navy-100 transition-colors hover:text-white";
    if (!email) {
      return (
        <span className={baseClass} aria-hidden>
          <MailIcon className="h-4 w-4" />
          Email
        </span>
      );
    }
    return (
      <a href={`mailto:${email}`} className={baseClass}>
        <MailIcon className="h-4 w-4" />
        {email}
      </a>
    );
  }

  // contactCard
  const baseClass =
    "inline-flex items-center gap-3 text-lg font-semibold text-navy-800 transition-colors hover:text-gold-600";
  if (!email) {
    return (
      <span className={baseClass} aria-hidden>
        <MailIcon className="h-5 w-5 text-gold-600" />
        Email
      </span>
    );
  }
  return (
    <a href={`mailto:${email}`} className={baseClass}>
      <MailIcon className="h-5 w-5 text-gold-600" />
      {email}
    </a>
  );
}
