# Copilot instructions for this repository

**Purpose:** Personal portfolio webapp, migrated to **React + Vite** (see `Readme.md`). The primary goal is to showcase the author's work and secure freelance/contract work.

## What to know up-front ✅
- The repo is currently minimal (only `Readme.md`). Use the README as the source of truth for intent: "highlight strengths" and "help secure freelance work."
- Primary tech indicated: React + Vite (use this as the default stack for new work unless other files indicate otherwise).

## Developer workflows to follow 🔧
- If `package.json` and Vite project files are absent, propose scaffolding a Vite React app (ask before making the choice of JavaScript vs TypeScript).
  - Typical scripts to add: `dev` (`vite`), `build` (`vite build`), `preview` (`vite preview`).
- Prefer adding a small README section that documents how to run the dev server and how to build for production (include exact commands you added).

## Project-specific conventions & patterns to preserve or ask about 💡
- Content-first: pages should favour clear presentation of projects, role, tech used, links and short outcomes (impact/metrics when possible).
- Component decisions: default to React functional components + hooks. Only introduce TypeScript if the repository already contains `.ts`/`.tsx` or the owner confirms a preference.
- File & directory expectations: add `index.html`, `src/` (with `main.jsx`/`main.tsx`), `src/App.jsx`, `src/pages/Projects.jsx`, `src/components/ProjectCard.jsx` as an initial pattern for projects listing.

## Integration points & external dependencies to call out ⚠️
- No CI/CD or deployment config detected. If adding GitHub Actions, add a simple `ci: build` that runs `npm ci && npm run build` and `npm test` (ask first).
- Analytics, contact forms, or CMS should be added only after asking the owner for provider preferences (e.g., Netlify, Vercel, Formspree, Netlify Forms).

## How to propose changes (PR guidance) ✨
- When making a scaffold or structural change: open a PR with
  - a summary of high-level changes,
  - exact commands to run locally to verify, and
  - screenshots where UI changes are involved.
- Keep commits small and focused. Use clear titles like `chore(scaffold): add Vite + basic app` or `feat(projects): add projects page with sample data`.

## When you can't find an answer — ask, don't guess ❓
- Key questions to raise in an issue or PR comment:
  - JavaScript or TypeScript preference?
  - Preferred styling approach (CSS modules, Tailwind, plain CSS)?
  - Any deployment target or hosting provider already used?

## Examples & pointers to reference (from this repo)
- Intent: `Readme.md` — "This app will be a personal portfolio… highlight my strengths… help secure freelance programming work." Use this to prioritize features and content.

---
If you want, I can now:
- Scaffold a minimal Vite + React app with either JavaScript or TypeScript (ask which), or
- Add a short contributor checklist and PR template to guide future contributors.

Please review this guidance and tell me which preferences I should assume (JS vs TS, styling, CI/deploy). I will iterate the instructions based on your answers.