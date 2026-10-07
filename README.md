# Meku Solutions — Corporate Website

Next.js 15 + TypeScript production codebase for the Meku Solutions corporate website.

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
- `app/globals.css` — production Meku brand design system

## Content integrity

Restflow remains in pilot. No fabricated customer outcomes, testimonials, metrics or integrations were added.
