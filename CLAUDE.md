@AGENTS.md

# Skill Set & Conventions

Instructions for working in this repo. Follow them exactly. When they conflict with your training data, these win — and remember the warning in `AGENTS.md`: this is Next.js 16, read `node_modules/next/dist/docs/` before writing framework code.

## Tech Stack

| Concern      | Choice                                    | Notes |
| ------------ | ----------------------------------------- | ----- |
| Framework    | Next.js `16.2.10` (App Router)            | Files live in `src/app`. |
| UI runtime   | React `19`                                | Server Components by default. |
| Language     | TypeScript `5` (`strict: true`)           | No `any`; type everything. |
| Styling      | Tailwind CSS `v4`                         | CSS-first config in `src/app/globals.css` — no `tailwind.config.js`. |
| Components   | shadcn/ui (style `radix-nova`, `rsc: true`) | Generated into `src/components/ui`. |
| Primitives   | `radix-ui`                                | Underlies shadcn components. |
| Icons        | `lucide-react`                            | Sole icon library. |
| Class utils  | `cn()` from `@/lib/utils`                 | `clsx` + `tailwind-merge`; variants via `class-variance-authority`. |
| Package mgr  | `pnpm`                                    | `pnpm-lock.yaml` is the source of truth. |

## Project Structure

```
src/
  app/            # App Router: routes, layouts, pages, globals.css
  components/     # Shared app components
  components/ui/  # shadcn/ui primitives — treat as generated, prefer regenerating over hand-editing
  lib/            # Helpers (e.g. utils.ts → cn())
  hooks/          # Custom React hooks (create when needed)
```

Import alias: `@/*` → `./src/*`. Always use `@/…`, never long relative paths (`../../..`).

## Rules

- **Server Components by default.** Only add `"use client"` when a file needs hooks, state, effects, refs, or browser/event handlers. Keep client components small and push them to the leaves of the tree.
- **Adding UI:** install shadcn components with `pnpm dlx shadcn@latest add <name>` rather than writing primitives by hand. Compose from `src/components/ui`.
- **Styling:** Tailwind utility classes only. Merge conditional classes with `cn(...)`. No inline `style` objects and no standalone CSS files except `globals.css`. Design tokens (colors, radii) are CSS variables defined in `globals.css`.
- **Icons:** import from `lucide-react`.
- **Images:** use `next/image` (`Image`) with explicit `width`/`height` and `priority` for above-the-fold assets.
- **TypeScript:** strict mode. Prefer explicit prop types/interfaces for components; no `any`.
- **Package manager:** use `pnpm` for every install/script. Do not introduce `npm`/`yarn` lockfiles.

## Commands

```bash
pnpm dev     # start dev server
pnpm build   # production build
pnpm start   # serve the production build
pnpm lint    # eslint (eslint-config-next, flat config)
```

Before considering a change done, run `pnpm lint` and `pnpm build` and fix anything they report.
