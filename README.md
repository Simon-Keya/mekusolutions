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
