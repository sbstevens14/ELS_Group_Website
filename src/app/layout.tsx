import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`${site.url}/`),
  title: {
    default:
      "ELS Group LLC — School Psychology & Educational Consulting in St. Louis",
    template: "%s — ELS Group LLC",
  },
  description:
    "ELS Group LLC partners with schools to strengthen educational systems, empower educators, and improve student outcomes. Special education evaluations, MTSS consultation, professional development, and mentorship from a Nationally Certified School Psychologist in St. Louis, MO.",
  openGraph: {
    title: "ELS Group LLC",
    description:
      "School psychology and educational consulting: evaluations, MTSS and systems-level support, professional development, and mentorship. St. Louis, MO — on-site and remote.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {site.cloudflareBeaconToken && (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            strategy="afterInteractive"
            data-cf-beacon={`{"token": "${site.cloudflareBeaconToken}"}`}
          />
        )}
      </body>
    </html>
  );
}
