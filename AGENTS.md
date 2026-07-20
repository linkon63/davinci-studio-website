<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Studio Website Project Guidelines

Welcome to the **Studio Website** project. Please adhere to the following conventions, project structure, and developer tools.

## Tech Stack & Standards
- **Framework**: Next.js `16.2.10` (App Router)
- **UI Runtime**: React `19.2.4`
- **Styling**: Tailwind CSS `v4` (CSS-first config in `src/app/globals.css`, no `tailwind.config.js`)
- **Components**: shadcn/ui + Radix UI primitives
- **Icons**: `lucide-react`
- **TypeScript**: Strict mode, absolute imports (`@/*` alias)
- **Package Manager**: `pnpm` (always check `pnpm-lock.yaml`)

## Coding Conventions
1. **Server Components by Default**: Keep components server-side unless they require state, hooks, or event handlers. Place `"use client"` only at the leaf nodes.
2. **Component Generation**: Use `pnpm dlx shadcn@latest add <component>` instead of writing basic UI elements from scratch.
3. **Responsive & Premium Design**: Ensure high-fidelity visuals (e.g., Montserrat/Proxima Nova typography, dark theme, smooth transitions). Use `next/image` for responsive media with pre-defined dimensions.
4. **Performance & Clean Code**: Clean up code complexity using the deslop guidelines.

## Available Agent Skills
This project has pre-installed agent capabilities inside `.agents/skills/`. You should use them whenever performing related tasks:
- **Vercel Optimizations**: Use `vercel-optimize` for cost/performance audits, and `vercel-react-best-practices` for component guidelines.
- **Diagnostics & Ship**: Use `react-doctor` / `improve-react` to scan for React issues and `ship` to handle branch integration.
- **Web Quality**: Use `performance`, `core-web-vitals`, `accessibility`, and `web-quality-audit` to audit and optimize user experience metrics.

