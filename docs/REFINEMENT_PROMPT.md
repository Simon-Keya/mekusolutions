# Master prompt — Meku Solutions UI/UX refinement

Use this prompt with any capable engineering assistant (or as a brief for a designer-developer) against the Meku codebase. It is written to be re-runnable: when a new product or service launches, run it again.

---

## ROLE

You are a principal product designer and senior front-end engineer at a B2B software company. You are refining an existing Next.js 15 / TypeScript marketing site for **Meku Solutions**, a Kenyan software company that connects inventory, operations and business data. The site must read as credible, precise and enterprise-ready, never as a template or consumer app.

## NON-NEGOTIABLES

1. **Preserve identity.** Keep the logo, palette (`#211F20`, `#FAC513`, `#F6A52D`, `#EC693D`, white), typefaces (Bricolage Grotesque, DM Sans), routes, page copy, real product screenshots and the Trace logic.
2. **Content integrity.** Never add invented metrics, customers, testimonials, integrations, prices or timelines. Restflow is in pilot. Unconfirmed items stay marked as such.
3. **Do not break behaviour.** Enquiry validation, honeypot, rate limit, security headers, analytics hooks and reduced-motion support must keep working. `npm run typecheck`, `npm test` and `npm run build` must pass.
4. **No new heavy dependencies.** Prefer CSS and small TypeScript modules.

## PHASE 1 — AUDIT (output a written report first)

Render every route at 1440px and 390px and read the code. Report, with severity P0/P1/P2:

- Shape language, spacing rhythm, typographic hierarchy, colour use, hover/focus/active consistency.
- Conversion paths: every page's primary action, form friction, mobile ergonomics.
- Information architecture and **extensibility**: what has to change to add a second product, a sixth service, a new page.
- Accessibility (WCAG 2.2 AA): keyboard, focus, labelling, error association, contrast, motion.
- Performance and asset hygiene: unused or oversized images, layout shift, render-blocking.
- Trust and legal: claims, privacy coverage of every data channel.

Record what is already good so it is preserved.

## PHASE 2 — DESIGN DIRECTION

- **Shape:** precise, engineered, slightly soft. Use one radius scale: 6px (small/tags), 8px (controls, buttons, inputs), 12px (cards, panels), 16px (large feature surfaces). No pill buttons, no circular icon holders except where a circle carries meaning. Nested radii must be consistent (outer = inner + padding).
- **Hierarchy:** one clear focal point per screen; section rhythm that varies (hero > feature > supporting) instead of identical padding everywhere; headings 1.05–1.15 line-height, body 1.6–1.7, measure 60–68ch.
- **Colour:** black carries structure and product, white carries reading, yellow marks the single primary action, orange/gradient is an accent for emphasis only.
- **Interaction:** every interactive element has distinct hover, focus-visible and active states; motion is subtle, purposeful and disabled for `prefers-reduced-motion`.
- **Imagery:** real product UI over stock photography. Remove decorative stock people from functional pages (contact, forms).

## PHASE 3 — ARCHITECTURE FOR GROWTH

Make the site data-driven so growth is a content change, not a redesign:

- A **product registry** (name, slug, status `pilot | live | coming-soon`, tagline, summary, href, demo CTA label, preview image) drives: header navigation, footer, sitemap, a `/products` index, the home products section, the enquiry form's product selector and metadata. With one product the UI links straight to it; with two or more it automatically switches to a Products index.
- A **service registry** drives the home and solutions grids. The grid must stay balanced for any count (featured pair + adaptive grid).
- A **product page template**: `app/products/[slug]` renders `content/products/<slug>.html`, with a starter template file. Existing `/restflow` URL stays.
- Content files may embed dynamic modules with `<!--@module-name-->` tokens; keep authoring in HTML.
- Document, in the README, exactly how to add a product, a service and a case study.

## PHASE 4 — CONTACT & CONVERSION

- **Remove the photograph** from the contact page.
- **Form leads to WhatsApp.** On valid submit, open `https://wa.me/<number>?text=<encoded message>` with a clean, human-readable pre-filled message (enquiry type, name, company, role, email, phone, message). Open it synchronously in the click handler so mobile popup blockers allow it; fall back to same-tab navigation. Also send the enquiry to the email endpoint as a silent, best-effort record (never block or fail the user on it). If no WhatsApp number is configured, degrade gracefully to email-only submission with honest copy. Never hard-code or invent a phone number: read `NEXT_PUBLIC_WHATSAPP_NUMBER`, sanitise to digits, validate length.
- **Form UX:** full-width two-column field grid on desktop, single column on mobile; segmented control for enquiry type; product selector when more than one product exists; visible required legend; labels always visible; `autocomplete`, `inputMode`, `enterKeyHint`; errors linked with `aria-describedby`, announced once, focus moved to the first invalid field; clear loading, success and error states; success state offers a manual "Open WhatsApp" link in case the app did not open.
- **Contact column:** WhatsApp (when configured), email, Instagram as clear action rows, followed by a short "what happens next" list. No timing promises.
- Update the privacy page so it covers WhatsApp as a channel.

## PHASE 5 — PAGE-LEVEL REFINEMENT

Apply the system to every route:

- Home: remove inconsistent tiles, tighten hero floats on small screens, vary section rhythm, pause the marquee on hover/focus.
- Solutions: same registry-driven grid, process rail, closing CTA.
- Restflow: keep content; apply new shape and spacing system.
- Work: fix spacing between the product card and the case-study placeholder; add closing CTA; ready for case studies.
- Text-only pages (work, contact, privacy, 404): compact page header instead of the tall hero.
- Remove inline `style=""` from content where a class belongs in the design system.

## PHASE 6 — QUALITY GATES

- Skip-to-content link; server-rendered `aria-current`; visible focus everywhere; AA contrast on all text; `prefers-reduced-motion` respected.
- No horizontal scroll at 320, 390, 768, 1024, 1440px.
- Unit tests for the WhatsApp message/URL builder, number sanitiser and registry invariants (unique slugs, valid hrefs).
- Remove assets and CSS that are no longer used.
- Update README and add a changelog. Report what changed, what was deliberately left alone, and any follow-ups needing a human decision (for example confirming the WhatsApp number).

## OUTPUT FORMAT

1. Audit report. 2. Prioritised plan. 3. The implemented changes. 4. Verification results (typecheck, tests, build, screenshots at two widths). 5. Open questions.
