# Meku Solutions — UI / UX Audit

Scope: every route (`/`, `/restflow`, `/solutions`, `/work`, `/about`, `/contact`, `/privacy`, 404), desktop (1440px) and mobile (390px), plus the component, content and styling architecture.
Method: the production build was rendered in a real browser and reviewed page by page, then the code was read for structure, accessibility and extensibility.

Severity: **P0** blocks a stated goal · **P1** visibly hurts professionalism or usability · **P2** polish.

---

## 1. What is already strong (keep)

- Clear brand system: black `#211F20`, yellow `#FAC513`, orange `#EC693D`, gradient used sparingly. Bricolage Grotesque + DM Sans pairing.
- Real Restflow screenshots framed as product windows; no fabricated metrics or testimonials. Content integrity is a genuine asset.
- Good accessibility foundations: `:focus-visible` ring, reduced-motion handling, semantic headings, `aria-current` on navigation.
- Lean architecture: static content in `content/*.html`, validated and honeypot-protected enquiry endpoint.

## 2. Findings

### A. Shape language is too soft and generic — P1
- Every control is a full pill (`border-radius: 999px`): buttons, nav, chips, badges, tags, section labels.
- Cards use 28–36px corners (`--r-lg 1.75rem`, `--r-xl 2.25rem`); icon holders, avatars, FAQ toggles and step markers are all circles.
- Effect: the interface reads as a template/consumer app rather than a B2B software company. Corner radii are not nested (outer vs inner), so some components look inflated.
- Fix: a tighter, systematic scale (6 / 8 / 12 / 16px), rectangular-soft controls, circles reserved for nothing decorative.

### B. Contact page — P0 (explicit requests)
1. **Stock photo of an unrelated person** sits under the contact methods. It pushes the form below the fold on mobile (form starts ~1,100px down), adds ~145KB, and is off-brand for a software company. Remove.
2. **Form does not lead to WhatsApp.** WhatsApp support exists only as a footer link gated by an environment variable; the primary conversion path is email via Resend, which silently fails (503) if keys are missing.
3. Form is capped at 560px inside a wider card, leaving a ragged empty right edge; every field is a single full-width row (6 stacked rows on desktop).
4. Enquiry type is a pair of pill "chips" with no visible grouping; type change does not explain what will happen next.
5. No expectation setting (what happens after submit), no required-field legend, errors are not programmatically tied to fields (`aria-describedby`), focus is not moved to the first error, no `inputMode`/`enterKeyHint` for mobile.

### C. Not built to grow — P0 (explicit request)
- "Restflow" is hard-coded in the header, footer, hero, contact form labels, sitemap and CTA copy. A second product would require edits in ~10 places.
- The five services are copy-pasted markup, twice (home and `/solutions`) with diverging copy and inconsistent tiles (one tile uses a screenshot crop, others use art). Adding a sixth service breaks the bento grid.
- Navigation is a fixed array; there is no products index and no template for a new product page.
- The enquiry form can only express "Restflow demo" or "custom build"; it has no concept of a product.

### D. Layout, spacing and hierarchy — P1/P2
- `/work`: "Future case studies" box touches the dark card above it (1.2rem gap), the page ends abruptly with no closing call to action.
- Text-only pages (`/work`, `/contact`, `/privacy`) reuse the full-height dark hero, so the first screen is mostly empty.
- Section rhythm is uniform (`--sec` everywhere) which flattens hierarchy; heading-to-body spacing varies between sections.
- The home hero floats (`float-a`, `float-b`) are unreadable on mobile (text ~5px); `float-b` is hidden on mobile but `float-a` still crowds the screenshot.
- Inline `style="..."` attributes in content files (margins, colours, `max-width`) bypass the design system.
- Homepage inventory tile uses a hard-clipped screenshot crop that looks cropped by accident.

### E. Visual polish — P2
- Marquee band: no pause on hover/focus; relies on yellow full-bleed which competes with the hero CTA.
- Avatar initials with double ring (`box-shadow: 0 0 0 3px #fff, 0 0 0 5px orange`) feel decorative.
- Hover affordances are inconsistent: tiles have underline only; cards have none.
- Inline SVG illustrations use pill radii (`rx=23`) that clash with the new shape language.

### F. Accessibility and quality — P1/P2
- No skip-to-content link.
- Mobile menu relies on `<details>`; closes via script only.
- Form errors announced with `role="alert"` on empty spans for every field (noisy) and not linked to inputs.
- `aria-current` set only by script after load (flash of unmarked nav).
- No unit tests for anything beyond the schema.

### G. Content and trust — P2
- Privacy page does not mention WhatsApp as a channel; must before WhatsApp becomes the main path.
- `.env.example` WhatsApp sample (`2547032063606`) has 13 digits; Kenyan numbers are `254` + 9 digits (12 digits). Confirm the real number before launch.

---

## 3. Prioritised improvement plan

| # | Change | Priority |
|---|--------|----------|
| 1 | Replace the shape system (tokens + components) | P1 |
| 2 | Remove contact photo; rebuild contact page layout | P0 |
| 3 | Form → WhatsApp (pre-filled message), email kept as silent record, graceful fallback when no number is set | P0 |
| 4 | Product + service registries driving nav, footer, sitemap, homepage, solutions page, products index, enquiry form | P0 |
| 5 | `/products` index and `/products/[slug]` template for future products | P0 |
| 6 | Fix `/work` spacing and add closing CTA; compact heroes for text-only pages | P1 |
| 7 | Accessibility pass: skip link, linked field errors, focus-on-error, server-side active nav | P1 |
| 8 | Consistent hover/focus/active states; marquee pause | P2 |
| 9 | Tests for the WhatsApp message builder and registry invariants | P2 |
| 10 | Docs: how to add a product, a service, set up WhatsApp | P2 |

## 4. Out of scope (deliberately untouched)

Brand colours, logo, typefaces, page copy and product claims, real screenshots, Trace logic and ingredient data, the enquiry validation rules, security headers.
