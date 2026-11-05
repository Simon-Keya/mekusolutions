# Meku Solutions — Corporate Website

Next.js 15 + TypeScript production codebase with a **premium light-theme** redesign.

**Primary goals:** qualified Restflow demo requests and custom software / integration enquiries.

## Quick start

```bash
npm install
cp .env.example .env.local   # fill values before production
npm run dev                  # http://localhost:3000
npm run typecheck && npm test && npm run build
```

## Environment variables

| Variable | Scope | Purpose |
|----------|--------|---------|
| `NEXT_PUBLIC_SITE_URL` | Public | Canonical URL, sitemap, robots |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Public | Digits with country code (e.g. `2547032063606`). **Leave empty until confirmed on WhatsApp.** |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Public | Optional Plausible domain |
| `RESEND_API_KEY` | Server | Resend API key for enquiry email |
| `ENQUIRY_TO_EMAIL` | Server | Destination (default mekusolutions@gmail.com) |
| `ENQUIRY_FROM_EMAIL` | Server | Verified sender in Resend |

Never commit real secrets. Never prefix server secrets with `NEXT_PUBLIC_`.

## Architecture

- `content/*.html` — page copy (edit here; add routes under `app/`)
- `app/api/enquiry` — validated, honeypot, rate-limited; sends via Resend; success only if provider accepts
- `components/EnquiryForm.tsx` — Restflow demo + project enquiry (shared Zod schema in `lib/enquiry.ts`)
- `public/trace.js` — conceptual Restflow Trace interaction
- `app/globals.css` — full design system (warm light theme)

## Design system (temporary until official brand codes)

- Canvas: `#FAF9F6` / secondary `#F1F3F0`
- Accent: forest green `#236B55` / dark `#174B3B`
- Warm highlight: `#D9A46A`
- Type: Bricolage Grotesque (display) + DM Sans (body)

Flagged for replacement when Meku supplies official logo colours.

## Content integrity

- Restflow is **in pilot**; no invented outcomes, testimonials, or metrics
- Integrations shown as “To be confirmed”
- Team: Michael Dondo (Founder), Simon Keya (CTO) only; ~30 people
- Screenshots are labelled placeholders

## Deploy (Vercel / Netlify)

1. Import repo  
2. Set environment variables  
3. Deploy + attach domain + HTTPS  
4. Submit a test enquiry in production and confirm email delivery  
5. Verify WhatsApp link only after number confirmation  

`netlify.toml` is included for Netlify users.

## Launch checklist (Meku must supply / confirm)

- [ ] Official logo (SVG preferred) + favicon  
- [ ] Official brand colour codes (replace temporary palette if different)  
- [ ] Photographs of Michael Dondo and Simon Keya  
- [ ] Genuine Restflow product screenshots  
- [ ] Confirm M-Pesa / printers / eTIMS status (live / in development / possible)  
- [ ] Confirm WhatsApp Business registration for `0703 206 3606` → set `NEXT_PUBLIC_WHATSAPP_NUMBER=2547032063606`  
- [ ] Legal review of `/privacy` for Kenyan (and other) requirements  
- [ ] Resend (or other) account: API key + verified FROM address  
- [ ] Production `NEXT_PUBLIC_SITE_URL`  
- [ ] Optional: Plausible domain  
- [ ] Domain DNS + HTTPS  
- [ ] Post-deploy: form delivery, Trace, mobile nav, Lighthouse / axe spot-check  

## Scripts

- `npm run dev` — development  
- `npm run build` — production build  
- `npm run start` — serve production build  
- `npm run typecheck` — TypeScript  
- `npm test` — Vitest (enquiry schema)  

## Redesign notes

See `REDESIGN_NOTES.md` for audit findings, composition principles, layout/spacing refinements, verification status, and what was intentionally not invented.
