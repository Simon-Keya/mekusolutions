# Meku Solutions — Brand-aligned redesign notes

## Direction

The interface has been migrated from the previous temporary forest-green/warm off-white system to the supplied Meku Solutions logo language.

### Core palette

- Pure white canvas: `#FFFFFF`
- Meku black: `#211F20`
- Meku yellow: `#FAC513`
- Meku orange: `#EC693D`
- Warm signature gradient: yellow → golden yellow → orange

## Design principles

- White space is the dominant visual field.
- Black provides typography and structural contrast.
- Yellow and orange provide energy and interaction feedback.
- The brand gradient is used selectively for emphasis rather than everywhere.
- Motion is subtle, purposeful and disabled/reduced for users who request reduced motion.
- Existing business content and functionality are preserved; no unsupported business claims were introduced.

## Implemented areas

- Repository-wide UI colour migration.
- Official supplied logo added as `public/meku-logo.jpg` and used in the global header.
- Brand-aligned favicon in `app/icon.svg`.
- New global design tokens and responsive layout system in `app/globals.css`.
- Premium white/black/yellow/orange header, hero, CTA, service, process, form, footer and interior-page treatments.
- Restflow Trace presentation migrated to the new brand system while preserving `public/trace.js` behaviour.
- Existing reveal motion retained and restyled through `public/motion.js`.
- Existing enquiry API and validation were not changed.

## Content integrity

Restflow remains in pilot. No fabricated customer outcomes, testimonials, metrics or integration statuses were added.
