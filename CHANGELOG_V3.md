# v3 refinement changelog

- Shape system tightened (pills and 28-36px corners replaced with a 6/8/12/16px scale).
- Contact: stock photo removed; form rebuilt (two-column, segmented type control, linked errors, focus on first error); form leads to WhatsApp with a pre-filled message and a silent email record; graceful email-only fallback.
- Product and service registries drive nav, footer, sitemap, home, solutions, /products and the form; `/products/[slug]` template added.
- Home: consistent solutions grid, mobile hero floats removed, marquee pauses on hover.
- Work: spacing fixed, closing CTA added. Compact headers on text-only pages.
- Accessibility: skip link, server-rendered aria-current, linked field errors.
- Privacy page covers WhatsApp. Inline styles removed from content. Unused contact photo deleted.
- Tests: 18 passing (WhatsApp builder, number sanitiser, registry invariants, schema).
