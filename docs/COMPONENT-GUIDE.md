# Component Guide

## Component Overview

| Component | File | Data Source | Client? | Description |
|-----------|------|-------------|---------|-------------|
| `BootSequence` | `components/BootSequence.tsx` | `boot-sequence.json` | Yes | Animated boot screen with skip button |
| `Navbar` | `components/Navbar.tsx` | `nav.json` | Yes | Fixed top nav, scroll-aware, mobile hamburger |
| `Hero` | `components/Hero.tsx` | `site.config.json`, `hero.json` | No | Name, role, location, social links |
| `About` | `components/About.tsx` | `about.json` | Yes | Bio paragraphs, "What I Do" list |
| `Skills` | `components/Skills.tsx` | `skills.json` | No | Skill categories in folder-tree style |
| `Experience` | `components/Experience.tsx` | `experience.json` | Yes | Timeline of jobs |
| `Projects` | `components/Projects.tsx` | `projects.json` | Yes | Expandable project cards |
| `Education` | `components/Education.tsx` | `education.json` | Yes | Degrees + certification cards |
| `Contact` | `components/Contact.tsx` | `site.config.json` | Yes | Contact links + message form |
| `Footer` | `components/Footer.tsx` | `site.config.json` | No | Social links + copyright |
| `TerminalWindow` | `components/TerminalWindow.tsx` | None | Yes | Reusable terminal chrome wrapper |
| `ErrorBoundary` | `components/ErrorBoundary.tsx` | None | Yes | Catches React errors |

## How Components Use Data

All components import from `@/data/loaders`, never directly from JSON files. Example:

```tsx
import { jobs } from "@/data/loaders";
```

The loader file (`src/data/loaders.ts`) imports each JSON file, casts it to its TypeScript type, and re-exports it.

## TerminalWindow

Most section components are wrapped in `TerminalWindow`, which provides:
- A title bar with colored dots (macOS terminal style)
- An animated typing effect for the `command` prop
- Scroll-triggered fade-in animation

```tsx
<TerminalWindow title="zakaria — skills" command="ls ~/skills/">
  {/* Section content */}
</TerminalWindow>
```

## Modifying a Component

1. Find the component in `src/components/`
2. If it reads data, the data lives in `src/data/json/` — edit there first
3. If you need to change layout/styling, edit the component's JSX/Tailwind classes
4. Run `npm run dev` to see changes live
