# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio for Swet Patel — swetpatel.ca. CS Honours @ Carleton, co-op seeking.

Two-mode site: a primary React/dark experience and a secondary PHP showcase, toggled via a floating pill UI with no page reload.

Deployed: Vercel (React side), GCP e2-micro (PHP side).

## Commands

```bash
npm run dev       # start dev server with HMR (Vite)
npm run build     # type-check then build for production (tsc -b && vite build)
npm run lint      # run ESLint across the project
npm run preview   # serve the production build locally
```

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS (utility-only — no component libraries)
- Framer Motion (animations only — no other animation libraries)

## Architecture

Single-page React app built with Vite and TypeScript.

- Entry: [index.html](index.html) → [src/main.tsx](src/main.tsx) mounts `<App />` into `#root`
- All application code lives in [src/](src/)
- Global styles in [src/index.css](src/index.css); component-level in [src/App.css](src/App.css)
- Static assets from [public/](public/) are served as-is; assets under `src/assets/` are fingerprinted by Vite

## Page Sections (in order)

1. **Hero** — name large, role, Ottawa timezone clock
2. **Projects** — card grid, 3–4 strongest projects only
3. **Skills** — tag cloud grouped by category
4. **Experience** — Loblaw Asset Protection
5. **Education** — Carleton CS Honours + Neuro minor
6. **Contact** — email, LinkedIn, GitHub only

## Design System

- Background: `#0a0a0a`, accent: amber `#f59e0b`
- Fonts: display = `DM Serif Display`, mono = `JetBrains Mono`, body = `DM Sans`
- Mobile-first responsive: 320px → 1440px
- Transitions: `200ms ease`; all animations via Framer Motion only
- No Inter, no purple gradients, no generic AI aesthetic

**Never use:** progress bars for skills, timeline components, stock photos, skill percentage bars, hero image of face, or heavy third-party UI kits.

## Code Style

- Functional components only
- Named exports preferred; no barrel files (`index.ts` re-export files)
- Guard clauses over nested if/else
- Minimal comments — code should be self-documenting

## TypeScript

`tsconfig.app.json` uses bundler module resolution with strict unused-variable checks (`noUnusedLocals`, `noUnusedParameters`). `erasableSyntaxOnly` is enabled — avoid `const enum`, decorator emit, or other non-erasable TypeScript syntax.
