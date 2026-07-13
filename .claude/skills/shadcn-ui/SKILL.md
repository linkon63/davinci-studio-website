---
name: shadcn-ui
description: Add, update, or compose shadcn/ui components in this project. Use whenever the task involves installing a shadcn component, building UI from primitives (button, input, dialog, dropdown, card, form, etc.), or restyling shadcn parts. Triggers on "add a component", "shadcn", "install button/dialog/...", "build a form", "UI primitive".
---

# shadcn/ui in this project

This project uses shadcn/ui with **style `radix-nova`**, `rsc: true`, base color `neutral`, icons from `lucide`. Config is in `components.json`. Components live in `src/components/ui`.

## Install a component (preferred over hand-writing)

```bash
pnpm dlx shadcn@latest add <component>   # e.g. dialog dropdown-menu card form
```

- Never write a primitive by hand if shadcn provides it — install it so it matches the registry and the `radix-nova` style.
- Installed files land in `src/components/ui/` and may be edited, but treat them as generated: prefer re-running `add` to hand-patching when upgrading.
- After installing, import via the alias: `import { Button } from "@/components/ui/button"`.

## Compose, don't fork

- Build feature components in `src/components/` that compose the `ui/` primitives.
- Merge/branch classes with `cn()` from `@/lib/utils`. Define variants with `class-variance-authority` (see `src/components/ui/button.tsx` for the pattern).
- Icons: `lucide-react` only. Size with Tailwind (`className="size-4"`), not props.

## Rules

- Keep primitives Server Component-friendly; only the interactive leaf gets `"use client"`.
- Don't introduce another component library or icon set.
- Use `pnpm` for every command.

Before finishing: run `pnpm lint` and confirm the component renders (see the `run` skill).
