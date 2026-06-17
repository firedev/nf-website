# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Bridgetown-based static website for Psychedelic Freediving, a business offering spiritual and psychedelic freediving experiences in Phuket, Thailand. The site features a unique dual-theme system where light and dark modes display different content and messaging.

## Development Commands

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
rake deploy    # Alternative build command
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
- `output/` - Built static site (git-ignored, deployment target)
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
- Deploys to GitHub Pages at nofins.com
- Uses custom deployment script that:
  1. Builds production assets
  2. Copies output to git repository
  3. Adds CNAME and .nojekyll files
  4. Commits and pushes to deployment branch

### Internationalization
- Supports English and Russian locales
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
- Use `data-theme="light"` or `data-theme="dark"` to show/hide content based on theme

### Building and Testing Changes
1. Run `yarn start` for development server
2. Site rebuilds automatically on content changes
3. Frontend assets require restart if `esbuild.config.js` is modified
4. Test both light and dark themes for any UI changes
5. Verify responsive design with Tailwind breakpoints