# ELS Group LLC — elsgroupllc.com

Marketing site for ELS Group LLC (Ericka Stevens, Ed.S., NCSP — school psychology
& educational consulting, St. Louis, MO).

Next.js 16 (App Router, static export) + Tailwind v4, deployed to **GitHub Pages**
via GitHub Actions, with DNS/registrar/analytics/email on **Cloudflare**. Same
stack as the Bauer Landscaping site.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Where content lives

All copy is in **`src/lib/site.ts`** — mission, bio, services, testimonials,
contact links. Edit there, not in components.

Two things are deliberately *not* in `site.ts` (scraper protection — they are
stored as character codes and only assembled in the browser):

- Phone number → `src/components/PhoneLink.tsx`
- Email address → `src/components/EmailLink.tsx`

Images: `public/images/` (headshot + NCSP badge).

## Launch checklist (one-time)

- [x] **Phone number confirmed** — 314-467-8182 (encoded in `PhoneLink.tsx`).
- [x] **`elsgroupllc.com` registered** at Cloudflare Registrar (7/30/2026).
- [x] **Cloudflare Email Routing** — `ericka@elsgroupllc.com` →
      `ericka.elsgroup@gmail.com` is live. Optional: add Gmail "Send mail as"
      so replies come from the branded address.
- [x] **Calendly** — booking link live: `calendly.com/elsgroupllc/30min`.
      There is deliberately no contact form: the site is static (no server to
      receive submissions), so contact is booking-first + direct email/phone.
      If a form is ever wanted, add a service like Formspree or a Cloudflare
      Worker backend.
- [x] **GitHub Pages** — enabled with Source: **GitHub Actions** (done 7/30/2026).
- [x] **Custom domain** — bound via Pages settings, HTTPS enforced (7/30/2026).
      Note: Actions deploys ignore the `public/CNAME` file (kept as
      documentation). If the domain ever gets stuck at "DNS Check in Progress",
      unbind/rebind:
      `gh api repos/sbstevens14/ELS_Group_Website/pages -X PUT -f cname=elsgroupllc.com`
- [x] **Cloudflare DNS** — 4× `A @` GitHub Pages IPs + `CNAME www`, all
      **DNS only (grey cloud)** (zone file in `dns/`).
- [ ] **Cloudflare Web Analytics** — copy the beacon token from the dashboard
      (zone → Analytics → Web analytics → Manage RUM Settings → JS snippet) and
      paste into `cloudflareBeaconToken` in `src/lib/site.ts`.
- [ ] **Testimonials** — two pending additions ("from Lisa", "from Jeanne");
      add to `site.ts` when received.
- [ ] Google Search Console (verify via Cloudflare DNS TXT) + submit
      `/sitemap.xml`; Google Business Profile as a *service-area* business
      (home address hidden).

## Content-hygiene check (run before every deploy of content changes)

The built output must never contain the raw phone number, the maiden name, or
private business details:

```bash
npm run build
grep -ri "4678182\|467-8182\|9227979\|922-7979\|Marchbanks\|Granite Ridge\|ericka@elsgroupllc" out/ && echo "LEAK FOUND" || echo "clean"
```

## Deployment

Push to `main` → GitHub Actions builds and deploys `./out` to GitHub Pages
automatically. The custom domain is bound in the repo's Pages settings (not by
`public/CNAME` — Actions-based deploys ignore that file).
