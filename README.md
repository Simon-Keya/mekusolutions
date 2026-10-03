# Meku Solutions website (Next.js 15, TypeScript)

## Run
    npm install
    cp .env.example .env.local   # fill in values
    npm run dev                  # http://localhost:3000
    npm run typecheck && npm test && npm run build

## Environment variables (see .env.example)
- NEXT_PUBLIC_SITE_URL: production URL (used for canonical, sitemap, robots)
- RESEND_API_KEY, ENQUIRY_TO_EMAIL, ENQUIRY_FROM_EMAIL: enquiry email (server only). FROM must be a sender verified in Resend.
- NEXT_PUBLIC_PLAUSIBLE_DOMAIN: enables cookie-free analytics. Events: demo_form_submit_success, project_form_submit_success.
- NEXT_PUBLIC_WHATSAPP_NUMBER: digits with country code. Empty = no WhatsApp link. Confirm the number first (the brief's has 11 digits).

## Structure
- content/*.html: page copy (edit here; add pages with a folder under app/)
- app/api/enquiry: validated, honeypot, rate-limited, sends via Resend; returns success only if the provider accepts
- components/EnquiryForm.tsx: demo and project enquiry form (shared schema in lib/enquiry.ts)

## Deploy (Vercel)
Import the repo, add the env vars, deploy, attach the domain, then submit a test enquiry in production and confirm it arrives.

## Status (nothing here has been run; the build environment had no network)
Not yet verified: npm install, typecheck, tests, build, rendering, accessibility, Lighthouse, real email delivery.
Not built: per-page OG images, CTA-click analytics events, Turnstile/durable rate limiting (the in-memory limiter resets per serverless instance), CSP header, Playwright tests, CMS, final logo and favicon (app/icon.svg is a placeholder), real screenshots, team photos.
Content open items: integration statuses (shown as "To be confirmed"), legal review of /privacy, brand colours (proposed, not official), phone number.

## Design notes
Light theme: warm off-white #FAF9F6, tinted greens, deep teal-green #1A6B5A primary, warm #D9A46A highlight (proposed, not official brand colours). Bricolage Grotesque for headings, DM Sans for body. Tokens live at the top of app/globals.css. The redesign was not rendered or built in the authoring environment.
