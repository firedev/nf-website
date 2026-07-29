# Sites/nofins — nofins.com

Bridgetown static site for nofins freediving (Phuket, Thailand) — read this before any work in this folder. Freediving-instructorship landing: hero «Learn to just be», junior/senior programs, 3 partner schools (Nama / ScubaNicks / Molchanova) + 7 instructors, dark-mode via Tailwind `dark:` classes. Общий дизайн-слой, голос и грабли всех сайтов — `Sites/CLAUDE.md`.

## Development Commands

All commands run from `/Users/nick/obsidian/obsidian-life/Sites/nofins/`. Ruby — через mise, системный ruby 2.6 Bridgetown не потянет.

### Initial Setup
```bash
bundle install  # Install Ruby dependencies
yarn install   # Install Node.js dependencies
```

### Development
```bash
yarn start     # Build frontend and start development server
```

### Build & Deploy
```bash
yarn deploy    # Build production site and deploy to GitHub Pages
rake deploy    # Alternative: build only, no push
```

`yarn deploy` requires `output/` to be an initialized git repo (`ls output/.git`). If `.git` is missing, restore it by cloning the live repo first (do NOT force-push):

```bash
rm -rf output && git clone git@github.com:firedev/nf-website.git output && yarn deploy
```

### Other Useful Commands
```bash
bin/bridgetown build           # Build static site only
bin/bridgetown clean           # Clean output directory
yarn esbuild-dev              # Watch and rebuild frontend assets
rake frontend:build           # Build frontend assets for production
```

## Architecture & Structure

### Technology Stack
- **Bridgetown** - Modern Ruby-based static site generator
- **Serbea** - Template engine for layouts and components
- **Tailwind CSS** - Utility-first CSS framework
- **esbuild** - JavaScript bundler

(Shoelace was removed 2026-07-13, #25 — the footer icon is an inline SVG now; JS bundle went 177KB → ~7KB)

### Key Directories
- `src/` - Source content and templates
  - `_components/` - Reusable Ruby/Serbea components
  - `_layouts/` - Page templates in Serbea format
  - `_instructors/` - Instructor profiles collection
  - `schools/` - One page per partner school (`namafreediving`, `scubanicks`, `molchanova`) + `index.serb` hub. Each school page reuses the `instructor_list` partial filtered by `affiliation:` — so a new school needs its page + instructors carrying the matching `affiliation`, or it renders empty. The `/schools/` hub is linked from the footer only (deliberately out of primary nav, #24 — it routed premium traffic to cheaper substitutes); individual school pages are reachable via that hub and inline mentions on about/junior (instructor cards link to the school's EXTERNAL site via `affiliation_url`, not the internal page — deliberate)
  - `index.md` - Homepage content (single copy, no per-theme variations)
  - `_partials/_booking.serb` - shared «Every weekend» booking card (`id="book"`), included on homepage, junior/senior/about and the instructor layout (#2)
- `frontend/` - Frontend assets
  - `javascript/` - JS modules (theme switcher, etc.)
  - `styles/` - CSS files including Tailwind and theme styles
- `output/` - Built static site (git-ignored in this repo; itself a separate git checkout of `firedev/nf-website` branch `master` — the deployment target)
- `plugins/` - Custom Bridgetown plugins

### Content Collections
The site uses a single Bridgetown collection:
- `instructors` - Instructor profiles, grouped onto school pages by `affiliation:`. Currently 7: nikolay-ostrovsky, ben, tony, court (Nama Freediving); artur, roman (Molchanova Freediving School); victoria (ScubaNicks)

### Theme System
Plain light/dark **appearance** toggle, ONE mechanism (#27, 2026-07-13; the old dual-*content* system and the 433-line `theme-dark.css` gradient stylesheet are both gone):
- Switcher in `frontend/javascript/theme-switcher.js` — toggles `theme-dark` on `:root`, respects `prefers-color-scheme`, persists localStorage key `theme`
- `frontend/styles/index.css` wires Tailwind 4 to that class: `@custom-variant dark (&:where(.theme-dark, .theme-dark *));` — so every `dark:` utility keys off `.theme-dark`, not `prefers-color-scheme`
- Dark base lives in index.css only: `body … dark:bg-slate-950 dark:text-slate-100` + zen-circle `invert(1)`. Everything else is per-element `dark:` utilities in templates — do NOT reintroduce a parallel dark stylesheet
- Dark palette: bg slate-950, cards dark:bg-slate-900 (or bg-white/5 for the booking card), secondary text dark:text-slate-300/400, accents unchanged (sky-200 underlines read fine on dark)
- New/changed elements with hardcoded light colors (bg-white, text-slate-5xx/6xx/950) MUST get a `dark:` variant — verify both themes by screenshot (inject `localStorage.setItem("theme","dark")` after `<head>` in an output copy; note `min-h-screen` on `<main>` pushes the footer below any viewport-sized screenshot)

### Deployment
- Deploys to legacy GitHub Pages at nofins.com: repo `firedev/nf-website`, Pages serves branch `master` path `/`. Source code lives on branch `source` of the same repo
- **Repo must stay public** — a private repo on the free plan silently stops building Pages while serving the stale site (`Sites/CLAUDE.md` § Деплой — грабли GitHub Pages)
- `yarn deploy` (the `deploy` script in `package.json`):
  1. Builds production assets into `output/`
  2. Adds CNAME and .nojekyll files
  3. Commits and pushes `output/` to `master` of `firedev/nf-website`

### Internationalization
- **en-only.** `available_locales: [en]` in `bridgetown.config.yml` (ru was declared but never had content — dropped 2026-07-13, #25). Re-add `ru` only alongside real ru content
- Prefix URLs disabled for cleaner paths

## Development Guidelines

### Working with Components
Components are Ruby objects in `src/_components/`. When creating new components:
- Follow existing naming conventions (e.g., `shared/header.rb`)
- Use Serbea templates for rendering
- Components can accept props and render dynamic content

### Adding Content
- Instructors: Add to `src/_instructors/` collection
- Static pages: Add Markdown or HTML files to `src/`
- Homepage copy lives in `src/index.md` — single content (no per-theme copy swap)
- Schools: one page per school in `src/schools/`, grouped by instructor `affiliation:`; add the school to `src/schools/index.serb` hub too (nothing else links the page)
- `src/next-dive.ics` is **hand-maintained** — recurring RRULE (SA deep water / SU pool). If the weekend schedule pauses or shifts, edit this file, else it becomes a standing false promise. Homepage «Every weekend» block in `index.md` must stay in sync

### Frontend Development
- JavaScript modules go in `frontend/javascript/`
- Styles use Tailwind utilities in `frontend/styles/`
- No Shoelace / web-component library — icons are inline SVG (removed 2026-07-13, #25)
- Dark styling is Tailwind `dark:` utilities on elements; the toggle hangs `theme-dark` on `:root` (there is no `data-theme` attribute, no per-theme content blocks, no separate dark stylesheet — see Theme System)

### Building and Testing Changes
1. Run `yarn start` for development server
2. Site rebuilds automatically on content changes
3. Frontend assets require restart if `esbuild.config.js` is modified
4. Test both light and dark themes for any UI changes
5. Verify responsive design with Tailwind breakpoints

**Gotcha — `bin/bridgetown build` alone leaves CSS STALE.** Tailwind/PostCSS runs in the esbuild step (`frontend:build`), NOT in `bin/bridgetown build`. So a **newly-added utility class** (e.g. `bg-sky-500` not used elsewhere) won't be in the CSS bundle after a bare `build` — it silently has no styling, and screenshots off `output/` mislead. To verify a new class locally: `bin/bridgetown frontend:build && bin/bridgetown build`, then `grep <class> output/_bridgetown/static/index.*.css`. `yarn start` and `yarn deploy` both run `frontend:build` first, so the real deploy is fine — this only bites local verification.