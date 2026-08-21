# Sites/nofins — nofins.com

Bridgetown static site for nofins freediving (Phuket, Thailand) — read this before any work in this folder. One-to-one freediving landing with a shared Why freediving page for adults and children, videos, the Finding Nama game and light/dark appearance. Общий дизайн-слой, голос и грабли всех сайтов — `Sites/AGENTS.md`.

**Навигация единая** (`_components/shared/navbar.serb`) на всех страницах: **Why freediving** (`/why/`), **About** (`/about/`), **Videos** (`/videos/`), **Phuket** (`/phuket/`) — только эти четыре пункта и в этом порядке. Не добавлять в неё якоря главной или внешние ссылки. Пункт **Why freediving** дублируется в `_partials/_footer.serb`.

**Главная не дублирует внутренние страницы** (2026-08-03). Она коротко представляет направление и ведёт дальше; `/why/` владеет кратким объяснением практики для взрослых и детей. `/senior/` и `/junior/` — только совместимые редиректы на `/why/`; не возвращать туда копию.

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

`yarn deploy` requires `output/` to be an initialized git repo (`ls output/.git`). **`bin/bridgetown clean` сносит `output/` целиком вместе с `.git`** — после него деплой падает, пока чекаут не восстановлен (проверено 2026-08-21). If `.git` is missing, restore it by cloning the live repo first (do NOT force-push):

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
  - `index.md` - Homepage content (single copy, no per-theme variations). Секции могут сохранять `id=`, но навигация на них не ссылается
  - `why.serb` - `/why/`: одна короткая страница о практике для взрослых и детей; единственный владелец этой копии
  - `videos.md` - `/videos/`: инстаграм-эмбед (reel) + два ютуб-ифрейма + ссылка на канал think→forward
  - `phuket/index.html` - `/phuket/`: браузерная игра Finding Nama (three.js, ~155KB одним инлайн-файлом, без бандлера). Портфолио-карточка проекта живёт на **другом** сайте — `Sites/firedev/src/_projects/finding-nama.md` и ссылается сюда; правишь игру — проверь, не устарело ли описание там
  - `images/home/` - hero и секционные webp редизайна 2026-07
- `frontend/` - Frontend assets
  - `javascript/` - JS modules (theme switcher, etc.)
  - `styles/` - CSS files including Tailwind and theme styles
- `output/` - Built static site (git-ignored in this repo; itself a separate git checkout of `firedev/nf-website` branch `master` — the deployment target)
- `plugins/` - Custom Bridgetown plugins

### Theme System
Plain light/dark **appearance** toggle, ONE mechanism (#27, 2026-07-13; the old dual-*content* system and the 433-line `theme-dark.css` gradient stylesheet are both gone):
- Switcher in `frontend/javascript/theme-switcher.js` — toggles `theme-dark` on `:root`, respects `prefers-color-scheme`, persists localStorage key `theme`
- **Нужен `<div id="theme-switcher">` в разметке** — скрипт монтирует кнопку только туда. Точка монтирования живёт в `_components/shared/navbar.serb`, последним элементом `nav`. Была потеряна до 2026-08-21: скрипт грузился, кнопки не было, тёмная тема включалась только системной настройкой. Тронул навбар — проверь, что див на месте
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

### Share card, favicon, SEO (2026-08-21)
- **`bridgetown-seo-tag` читает `image` со страницы, не из `site.metadata`.** Поэтому карточка ссылки задана через `defaults:` в `bridgetown.config.yml` (`image.path` + `image.alt`). До этого `og:image` не было вообще — любая ссылка на nofins.com в инстаграме/телеграме превьюилась пустой, а `twitter:card` стоял `summary`. С `image` он сам становится `summary_large_image`
- **Пересобрать `src/images/og.jpg`** (1200×630): отрендерить HTML-карточку в headless Chrome и снять скрин, потом `sips -s format jpeg`. Композиция повторяет герой — фото справа, тип в тёмной зоне слева. Меняешь герой или таглайн — пересобери карточку
- **Фавиконки** — `src/favicon-32.png` / `-180.png` (apple-touch) / `-512.png`, дзен-круг на светлой плашке `#f8fafc`. Сделаны из `images/zen-circle-grunge-brush-stroke-2.png`. Раньше фавиконки не было совсем

### Design conventions (2026-08-21)
- **Кнопки и стрелка-ссылки — `.btn` и `.link-arrow`** из `@layer components` в `frontend/styles/index.css`. Не копировать длинный список утилит на каждую кнопку: фокус-ринг (`outline-sky-500`, читается и на светлом, и на тёмном) и тень заданы один раз
- **Никаких кикеров/надзаголовков** над h2/h1 (`text-sm uppercase tracking-[0.18em]`). Ник снял такой кикер с главного экрана (355d74d), 2026-08-21 сняты остальные восемь. Заголовок несёт себя сам; смысл кикера — в заголовок или в текст
- **Футер — тёмная плашка на всех страницах** (`footer { background: #020617 }`), не только на главной. Внутренние страницы короткие, `min-h-screen` на `<main>` оставляет серую пустоту — тёмная плашка даёт странице явный конец
- **Мера строки** ~62ch (`max-w-[62ch]`) для абзацев. До этого текст на `/why/` шёл на ~85ch
- Секция-заглушка (заголовок без текста и без ссылки) — дефект, а не «воздух»: блок `#why` на главной висел тупиком, теперь ведёт на `/why/`
- **Портретный рил и ландшафтные ютубы не гридятся в одну сетку.** На `/videos/` рил стоит правой колонкой на две строки (`lg:row-span-2`), слева — шапка и 2×2 ютубов. Высоты колонок сходятся; любая попытка положить их в общий грид даёт дыру в 400px
- **Размер кнопки темы живёт в стилях, не в `button.style.cssText`.** Инлайн-стиль бьёт медиазапрос — мобильное правило в `theme-switcher.js` годами не работало
- **`@resource.data.homepage` не существует** — проверять `@resource.data.layout == 'homepage'`. На этом условии висит скрытие лого на мобильной главной; пока условие было мёртвым, шапка на мобиле занимала 179px из 844
- `/phuket/` — самостоятельный HTML со своей палитрой (золото/навy). В нём есть `#backhome` — ссылка назад на сайт в стиле игры, а не тейлвиндовая кнопка. Игрок не должен оказываться в тупике

### Working with Components
Components are Ruby objects in `src/_components/`. When creating new components:
- Follow existing naming conventions (e.g., `shared/header.rb`)
- Use Serbea templates for rendering
- Components can accept props and render dynamic content

### Adding Content
- Static pages: Add Markdown or HTML files to `src/`
- Homepage copy lives in `src/index.md` — single content (no per-theme copy swap)
- `src/videos.md` — video wall, shared with nikolayx.com (same four embeds on both). Раскладка: шапка + 2×2 ютубов слева, инстаграм-рил правой колонкой на две строки. **Не судить видео по названию** (2026-08-03): «Отлетевшие 4» читается как русская серия про сознание, но во фридайв-контенте она по теме — я её отфильтровал, Ник вернул. Русский язык сам по себе не дисквалифицирует: сайт en-only по копирайту, видео — нет. Сомневаешься, о чём ролик — посмотреть исходник (`OTLETEVSHIE/`, `Videos/`, `Transcripts/` в вальте) или спросить, не вырезать молча

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
