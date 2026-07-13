---
name: new-route
description: Scaffold a new App Router route, page, layout, or route group in this Next.js 16 project. Use when asked to "add a page", "create a route", "new /about|/contact|... page", "add a layout", "make a dynamic route", or set page metadata. Enforces Next 16 conventions.
---

# New App Router route (Next.js 16)

IMPORTANT: This is Next.js 16 — APIs differ from older training data. Before writing, skim the relevant guide under `node_modules/next/dist/docs/01-app/`.

## Where things go

Routes live under `src/app`. A route is a folder; the URL segment is the folder name.

```
src/app/about/page.tsx          → /about
src/app/blog/[slug]/page.tsx    → /blog/:slug
src/app/(marketing)/layout.tsx  → shared layout, no URL segment
```

Special files: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx` (`"use client"`), `not-found.tsx`, `route.ts` (handlers).

## Conventions

- **Server Component by default.** Add `"use client"` only for hooks/state/effects/events. Keep client code at the leaves.
- **Metadata:** export `metadata` (static) or `generateMetadata` (dynamic) from `page.tsx`/`layout.tsx` — do not hand-write `<head>`.
- **Dynamic params are async in Next 16.** Type and await them:
  ```tsx
  export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const { slug } = await params
    // ...
  }
  ```
  Same for `searchParams`.
- **Styling:** Tailwind utilities + `cn()`; reuse tokens from `globals.css`. Compose shadcn primitives (see the `shadcn-ui` skill) rather than raw markup where a primitive exists.
- **Images:** `next/image` with explicit `width`/`height`; `priority` for above-the-fold.
- Use the `@/*` alias for imports.

Before finishing: `pnpm lint`, then verify the route renders (see the `run` / `verify` skills).
