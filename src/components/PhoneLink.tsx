"use client";

import { useEffect, useState } from "react";

// ASCII codes for the 10 digits of the phone number, stored individually so
// the literal number string never appears in any built JS chunk. Decoded only
// at runtime inside useEffect, which prevents the bundler from constant-folding
// the fragments back into a recognizable phone number.
const CODES = [51, 49, 52, 52, 54, 55, 56, 49, 56, 50];

type Variant = "inline" | "contactCard" | "footer";

interface Props {
  variant: Variant;
}

const PhoneIcon = ({ className }: { className: string }) => (
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
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function PhoneLink({ variant }: Props) {
  const [phone, setPhone] = useState<{ display: string; tel: string } | null>(
    null,
  );

  useEffect(() => {
    const digits = CODES.map((c) => String.fromCharCode(c)).join("");
    setPhone({
      display: `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`,
      tel: `+1${digits}`,
    });
  }, []);

  if (variant === "contactCard") {
    const baseClass =
      "inline-flex items-center gap-3 text-lg font-semibold text-navy-800 transition-colors hover:text-gold-600";
    if (!phone) {
      return (
        <span className={baseClass} aria-hidden>
          <PhoneIcon className="h-5 w-5 text-gold-600" />
          Call or text
        </span>
      );
    }
    return (
      <a href={`tel:${phone.tel}`} className={baseClass}>
        <PhoneIcon className="h-5 w-5 text-gold-600" />
        {phone.display}
      </a>
    );
  }

  if (variant === "footer") {
    const baseClass =
      "inline-flex items-center gap-2 text-navy-100 transition-colors hover:text-white";
    if (!phone) {
      return (
        <span className={baseClass} aria-hidden>
          <PhoneIcon className="h-4 w-4" />
          Call or text
        </span>
      );
    }
    return (
      <a href={`tel:${phone.tel}`} className={baseClass}>
        <PhoneIcon className="h-4 w-4" />
        {phone.display}
      </a>
    );
  }

  // inline
  const baseClass =
    "font-semibold text-navy-700 underline decoration-gold-300 underline-offset-4 transition-colors hover:text-gold-600";
  if (!phone) {
    return (
      <span className={baseClass} aria-hidden>
        call or text
      </span>
    );
  }
  return (
    <a href={`tel:${phone.tel}`} className={baseClass}>
      {phone.display}
    </a>
  );
}
