---
name: tailwind-theme
description: Work with the Tailwind CSS v4 theme and design tokens in this project. Use when asked to add/change a color, font, radius, spacing token, dark-mode value, keyframe/animation, or "update the theme". Tailwind v4 is CSS-first — there is no tailwind.config.js.
---

# Tailwind v4 theme (CSS-first)

This project uses Tailwind CSS v4. There is **no `tailwind.config.js`** — configuration lives in CSS at `src/app/globals.css`. Read that file before editing.

## How it works

- `@import "tailwindcss";` pulls in the framework.
- Design tokens are declared as CSS variables and registered with the `@theme` directive so they generate utilities:
  ```css
  @theme {
    --color-background: …;
    --color-foreground: …;
    --radius: …;
  }
  ```
  A `--color-brand` token, for example, makes `bg-brand` / `text-brand` available.
- Light/dark values are set via CSS variables (base `:root` + a dark override). Reference tokens through the generated utilities or `var(--…)`; never hard-code hex in components.

## Rules

- Add or change tokens in `globals.css`, then use the resulting utility class in components — do not sprinkle raw hex or inline styles.
- Keep light and dark in sync: any new color token needs both values.
- Custom animations: define `@keyframes` and an `--animate-*` token in `globals.css`, then use the `animate-*` utility (see the existing `animate-aurora`, `animate-fade-up`, `animate-shimmer` in this project for the pattern).
- Merge conditional classes with `cn()` from `@/lib/utils`.

After changes: run `pnpm lint` and view the result in both light and dark mode (see the `run` skill).
