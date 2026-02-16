# Next.js Guide for This Project

## What is Next.js?

Next.js is a React framework that adds file-based routing, server-side rendering, and build optimizations on top of React. This project uses **Next.js 15** with the **App Router**.

## Running the Project

```bash
# Install dependencies (first time only)
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## App Router Basics

The `src/app/` directory defines routes through its file structure:

| File | Purpose |
|------|---------|
| `layout.tsx` | Root HTML wrapper — applies to every page |
| `page.tsx` | The home page content (route: `/`) |
| `error.tsx` | Shown when an error occurs |
| `not-found.tsx` | Shown for 404 routes |
| `loading.tsx` | Shown while content loads |
| `globals.css` | Global styles and Tailwind theme |

This is a single-page portfolio, so there's only one route (`/`). If you wanted to add a `/blog` page, you'd create `src/app/blog/page.tsx`.

## Server Components vs Client Components

By default, Next.js components are **server components** — they render on the server and send HTML to the browser. They cannot use:
- `useState`, `useEffect`, or other React hooks
- Browser APIs (`window`, `document`)
- Event handlers (`onClick`, `onChange`)

To use any of these, add `"use client"` at the top of the file. This makes it a **client component** that runs in the browser.

```tsx
// Server component (default) — no hooks, no interactivity
export default function Skills() {
  return <div>...</div>;
}

// Client component — can use hooks and interactivity
"use client";
import { useState } from "react";
export default function Contact() {
  const [sent, setSent] = useState(false);
  // ...
}
```

## The `@/` Import Alias

The `@/` prefix maps to `src/`. So:
- `@/components/Hero` → `src/components/Hero.tsx`
- `@/data/loaders` → `src/data/loaders.ts`
- `@/types` → `src/types/index.ts`

This is configured in `tsconfig.json` under `paths`.

## Tailwind CSS v4

This project uses Tailwind v4, which is configured entirely in `globals.css` using `@theme` blocks (no `tailwind.config.js`). Custom colors, fonts, and utilities are defined there.

## Adding a New Page

1. Create `src/app/your-page/page.tsx`
2. Export a default component
3. Visit `http://localhost:3000/your-page`

## Environment Variables

If you need environment variables (e.g., for a contact form API), create a `.env.local` file in the project root:

```
NEXT_PUBLIC_API_URL=https://api.example.com
```

Variables prefixed with `NEXT_PUBLIC_` are accessible in client components.
