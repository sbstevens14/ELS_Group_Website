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

- [ ] **Confirm phone number** — draft copy said 314-467-8182, resume says
      314-922-7979. `PhoneLink.tsx` currently encodes **314-467-8182**; update
      `CODES` if wrong.
- [ ] **Register `elsgroupllc.com`** at Cloudflare Registrar.
- [ ] **Cloudflare Email Routing** — route `ericka@elsgroupllc.com` →
      `ericka.elsgroup@gmail.com`; add Gmail "Send mail as" for replies.
      (`EmailLink.tsx` already encodes the branded address.)
- [ ] **Formspree** — create a form, paste its ID into `formspreeId` in
      `src/lib/site.ts` (form is hidden until set; an email fallback shows).
- [ ] **Calendly** — create a scheduling link, paste into `bookingUrl` in
      `src/lib/site.ts` (booking card is hidden until set).
- [x] **GitHub Pages** — enabled with Source: **GitHub Actions** (done 7/30/2026).
- [ ] **Custom domain** — after the domain is registered, set it on the Pages
      config (Actions deploys ignore the `public/CNAME` file; it's kept only as
      documentation):
      `gh api repos/sbstevens14/ELS_Group_Website/pages -X PUT -f cname=elsgroupllc.com`
      Then Enforce HTTPS in Settings → Pages once the cert issues. Until then
      the interim URL https://sbstevens14.github.io/ELS_Group_Website/ renders
      broken (no basePath) — that's expected.
- [ ] **Cloudflare DNS** — `A @` → 185.199.108.153 / 185.199.109.153 /
      185.199.110.153 / 185.199.111.153, `CNAME www` → `sbstevens14.github.io`.
      **DNS only (grey cloud)** so GitHub can issue the certificate.
- [ ] **Cloudflare Web Analytics** — add a site for elsgroupllc.com, paste the
      beacon token into `cloudflareBeaconToken` in `src/lib/site.ts`.
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
