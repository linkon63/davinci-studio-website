---
name: design-review
description: Review a page or component for visual/UX quality — responsive layout, spacing rhythm, typography, dark mode, motion, and accessibility. Use when asked to "review the design", "polish the UI", "make it look better", "check responsiveness", "is this accessible", or before shipping a visible change.
---

# Design review

Audit the target component/page against the checklist below. Report findings grouped by severity (blocking → polish), each with the file:line and a concrete fix. Where useful, run the app (see the `run` skill) and check real breakpoints rather than reasoning from the markup alone.

## Layout & responsiveness
- Works from ~320px up to wide desktop; no horizontal scroll on the body.
- Uses fluid/relative units and Tailwind responsive prefixes (`sm: md: lg:`); no fixed pixel widths that break small screens.
- Content has a sensible `max-w-*` and is centered; images use `next/image` with `max-w-full`.

## Spacing & rhythm
- Consistent spacing scale (multiples of the Tailwind scale) — no arbitrary one-off gaps unless justified.
- Vertical rhythm between sections is even; related items grouped, unrelated separated.

## Typography
- Clear hierarchy (size/weight/tracking); body text stays readable (line length ~45–75ch, adequate `leading-*`).
- Uses the project's font tokens/classes consistently.

## Color & dark mode
- Colors come from CSS-variable tokens in `globals.css`, not hard-coded hex. (See the `tailwind-theme` skill.)
- Verify both light and dark themes; contrast meets WCAG AA (4.5:1 text, 3:1 large text/UI).

## Motion
- Animations are subtle and purposeful; nothing janky or infinite-distracting.
- Respects `prefers-reduced-motion` for non-essential animation.

## Accessibility
- Semantic elements (`main`, `nav`, `header`, `footer`, headings in order).
- Interactive elements are focusable with visible focus rings; images have meaningful `alt` (or `alt=""` + `aria-hidden` when decorative).
- Sufficient tap-target size on mobile (~44px).

Deliver: prioritized findings + concrete edits. Offer to apply the fixes.
