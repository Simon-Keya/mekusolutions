# Prompt — Meku shape system: "soft, precise"

Use with the Meku codebase after `REFINEMENT_PROMPT.md`. Goal: correct the swing from too round (pills, 28–36px cards) to too boxed (6–8px everywhere) by establishing a principled corner system.

## Diagnosis

- Corner radius communicates personality. Pills read playful/consumer; 6–8px reads rigid/technical. Meku should read **confident and modern: soft enough to feel approachable, precise enough to feel engineered**.
- A single value cannot do this. Radius must be chosen by **role** and **size**, and nested shapes must be **concentric**.

## Principles

1. **Role scale, not one number.** Micro (tags, dots) → small (icon holders, step numerals) → control (buttons, inputs, nav items) → inset (floating cards, product windows) → surface (cards, tiles, panels) → large surface (hero panels, form card, CTA card).
2. **Concentric radii.** `inner radius = outer radius − padding`. A nav container with 12px items and 5px padding gets ~17px. A segmented control with 12px items and 4px padding gets ~16px. Never give a child the same radius as its parent unless padding is zero.
3. **Proportion.** Small elements must not look like pills by accident: keep radius ≤ ~30% of height unless a full-round is deliberate.
4. **Family consistency.** Everything in a family (all buttons, all inputs, all nav items) shares one radius. No one-off values.
5. **Full-round is reserved** for status dots, switches and avatars of people. Nothing else.
6. **Larger = rounder.** Radius grows with surface size, so a hero card is softer than a tag.

## The scale (tokens)

| Token | Value | Used for |
|-------|-------|----------|
| `--r-xs` | 6px | focus ring, micro marks |
| `--r-sm` | 10px | tags, status chips, icon holders, step numerals, inner buttons |
| `--r-ctl` | 12px | buttons, inputs, selects, nav items, chips, segmented items |
| `--r-md` | 14px | floating cards, product windows, path cards, notes |
| `--r-lg` | 20px | cards, tiles, panels, menus |
| `--r-xl` | 24px | large surfaces: form card, CTA card, work card, Trace |
| derived | 17px | nav container (12 + 5) |
| derived | 16px | segmented control container (12 + 4) |

## Acceptance checks

- No `border-radius: 999px` and no unexplained literal radii in the stylesheet; shapes use tokens.
- Nav: container visibly softer than its items; active item reads as a soft rounded key, not a box and not a pill.
- Buttons: soft rectangles (≈25% of height), the inner arrow badge is concentric with the button.
- Cards, tiles, form card: noticeably softer than controls but far less round than the old 28–36px.
- Screenshot desktop and mobile; compare against the previous pass and confirm the system reads consistently across header, hero, grids, forms, footer.
