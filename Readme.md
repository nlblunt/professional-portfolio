# Summary
This app will be a personal portfolio to display the different websites I've built. I want to highlight my strengths. I want this to help secure freelance programming work or part time contract work.

# Known tech stacks
C++, C#, Javascript, Typescript, Ruby, Ruby on Rails, Angular.
Github Copilot (AI coding with any language).

# Tech
This repository has been migrated to **React + Vite**.

# Tech stack (current)
- React + Vite (TypeScript)
- Tailwind CSS

# Development
- Install dependencies: `npm ci`
- Run dev server: `npm run dev` (Vite, default http://localhost:5173)
- Build for production: `npm run build`
- Preview built site: `npm run preview`

# Project structure
- `index.html` — app entry
- `src/`
  - `main.tsx` — app bootstrap
  - `App.tsx` — top-level app
  - `pages/Projects.tsx` — projects listing
  - `components/ProjectCard.tsx` — project card UI
  - `data/projects.ts` — sample project data
  - `index.css` — Tailwind entry
- `tsconfig.json`, `tailwind.config.cjs`, `postcss.config.cjs`

# Conventions & patterns
- Use **React functional components** + **hooks** (TypeScript). Keep types in `src/types.d.ts`.
- Styling is **Tailwind-first**. Prefer utility classes; add small custom CSS to `src/index.css` for edge cases.
- Add sample projects to `src/data/projects.ts` — these are used directly by `Projects` page.

# PR guidance
- Keep PRs small and focused. For UI changes include screenshots and steps to verify locally.
- Use clear commit messages like `chore(scaffold): add Vite + TS` or `feat(projects): add projects page`.

# Next steps
- When ready I can add CI (build/test) and a deployment workflow; ask before adding a hosting provider.