# Sites/nofins — nofins.com

Bridgetown static site for Psychedelic Freediving (Phuket, Thailand) — read this before any work in this folder. The site features a unique dual-theme system where light and dark modes display different content and messaging. Общий дизайн-слой, голос и грабли всех сайтов — `Sites/CLAUDE.md`.

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
- **Shoelace** - Web component library for UI elements

### Key Directories
- `src/` - Source content and templates
  - `_components/` - Reusable Ruby/Serbea components
  - `_layouts/` - Page templates in Serbea format
  - `_instructors/` - Instructor profiles collection
  - `index.md` - Homepage content (contains both light/dark theme variations)
- `frontend/` - Frontend assets
  - `javascript/` - JS modules (theme switcher, testimonials, etc.)
  - `styles/` - CSS files including Tailwind and theme styles
- `output/` - Built static site (git-ignored in this repo; itself a separate git checkout of `firedev/nf-website` branch `master` — the deployment target)
- `plugins/` - Custom Bridgetown plugins

### Content Collections
The site uses a single Bridgetown collection:
- `instructors` - Instructor profiles (currently one: nick-plekhanov)

### Theme System
The site implements a unique dual-content theme system:
- Light theme ("Spiritual Pool") - Beginner-friendly messaging
- Dark theme ("Psychedelic Wave") - Advanced/psychedelic messaging
- Theme switcher in `frontend/javascript/theme-switcher.js` (toggles `theme-dark` class on `:root`, persists in localStorage)
- Different content blocks shown via `.light-content` / `.dark-content` classes (`{:.light-content}` markers in `index.md`)

### Deployment
- Deploys to legacy GitHub Pages at nofins.com: repo `firedev/nf-website`, Pages serves branch `master` path `/`. Source code lives on branch `source` of the same repo
- **Repo must stay public** — a private repo on the free plan silently stops building Pages while serving the stale site (`Sites/CLAUDE.md` § Деплой — грабли GitHub Pages)
- `yarn deploy` (the `deploy` script in `package.json`):
  1. Builds production assets into `output/`
  2. Adds CNAME and .nojekyll files
  3. Commits and pushes `output/` to `master` of `firedev/nf-website`

### Internationalization
- English and Russian locales declared in `bridgetown.config.yml` (`available_locales`); ru content does not exist yet — the site is en-only in practice
- Configured in `bridgetown.config.yml`
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
- Homepage copy lives in `src/index.md` — every block exists twice (`{:.light-content}` + `{:.dark-content}`)

### Frontend Development
- JavaScript modules go in `frontend/javascript/`
- Styles use Tailwind utilities in `frontend/styles/`
- Shoelace components are available globally after build
- To show/hide content based on theme use `.light-content` / `.dark-content` classes; dark styles hang off `:root.theme-dark` (there is no `data-theme` attribute in this codebase)

### Building and Testing Changes
1. Run `yarn start` for development server
2. Site rebuilds automatically on content changes
3. Frontend assets require restart if `esbuild.config.js` is modified
4. Test both light and dark themes for any UI changes
5. Verify responsive design with Tailwind breakpoints