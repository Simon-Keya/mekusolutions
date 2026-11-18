# Meku Solutions — Corporate Website

Next.js 15 + TypeScript production codebase for the Meku Solutions corporate website.

## Design system v2 (dark, product-led)

The site now follows a dark, cinematic shell with the logo gradient reserved for key moments:
black `#211F20` header/hero/footer, white reading sections, yellow `#FAC513` actions and marquee band, yellow-to-orange gradient for the closing call to action.
Real Restflow screenshots are framed in product windows, with cropped UI tiles floating over the hero. Illustrations are inline SVG (no stock photos).
New assets: `public/images/ui/` (transparent logo marks, product crops) and `public/og.png` (social share image).
Motion is limited to one hero entrance and the status marquee, and is disabled for reduced-motion users.

## Brand system

The current interface is aligned to the supplied Meku Solutions logo:

- Canvas: pure white `#FFFFFF`
- Brand black: `#211F20`
- Brand yellow: `#FAC513`
- Brand orange: `#EC693D`
- Signature gradient: yellow → golden yellow → orange
- Typography: Bricolage Grotesque + DM Sans

The previous forest-green design system has been removed from the UI.

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Production verification:

```bash
npm run typecheck
npm test
npm run build
```

## Architecture

- `content/*.html` — page copy
- `app/api/enquiry` — validated, honeypot-protected, rate-limited enquiry endpoint using Resend
- `components/EnquiryForm.tsx` — Restflow demo + custom project enquiry form
- `public/trace.js` — conceptual Restflow Trace interaction
- `public/motion.js` — progressive reveal motion system
- `public/meku-logo.jpg` — cropped supplied Meku Solutions wordmark
- `public/images/restflow-*.webp` — six prepared Restflow product screenshots used in the home and product showcases
- `app/globals.css` — production Meku brand design system

## Content integrity

Restflow remains in pilot. No fabricated customer outcomes, testimonials, metrics or integrations were added.


## Restflow product imagery

The supplied Restflow screenshots are cropped to remove browser chrome, the operating-system taskbar and the account footer. The dashboard and variance previews also soften visible staff names. The actual application interface and product colour scheme are retained. The six WebP assets cover the dashboard, inventory overview, batch details, POS overview, recent orders and stock variance.

## Photography

`public/images/photos/` holds four supplied stock photos (optimised to WebP): `restaurant-table`, `team-laptops`, `team-collab`, `business-owner`.
They are stand-ins: confirm each photo's licence, and replace the team and founder imagery with real photos of Meku when available
(edit the `src` in `content/home.html`, `content/about.html` and `app/contact/page.tsx`).


## Growing the site (v3)

Everything Meku offers is defined in `lib/registry.ts`.

**Add a product**
1. Add an entry to `products` (slug, name, status, tagline, summary, cta, preview image, `href: '/products/<slug>'`).
2. Copy `content/products/_template.html` to `content/products/<slug>.html` and fill it with real, verified content.
3. Done: navigation switches to a Products index, and the footer, sitemap, `/products`, home products section and the enquiry form's product selector update automatically. `/restflow` keeps its own URL.

**Add a service**: add an entry to `services`; the home and Solutions grids rebalance automatically. Add an illustration key in `components/ServiceArt.tsx` if you want bespoke art (a generic one is used otherwise).

**Embed dynamic modules in content files** with `<!--@services-home-->`, `<!--@services-full-->`, `<!--@products-home-->`.

## Contact form and WhatsApp

Set `NEXT_PUBLIC_WHATSAPP_NUMBER` (digits only, country code included, e.g. `254XXXXXXXXX`) and rebuild. On submit the form opens WhatsApp with a pre-filled message and also sends a silent email record (requires the Resend variables). With no number set, the form submits by email only and the WhatsApp options are hidden.

## Design system v3

Shape system "soft, precise": 6 / 10 / 12 / 14 / 20 / 24px by role (`--r-xs` … `--r-xl`, controls use `--r-ctl`), with concentric inner/outer corners and no pills. See `docs/SHAPE_SYSTEM_PROMPT.md`, `docs/UI_UX_AUDIT.md` and `docs/REFINEMENT_PROMPT.md`.
