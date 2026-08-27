# Sites/nofins — nofins.com

Bridgetown static site for nofins freediving (Phuket, Thailand) — read this before any work in this folder. One-to-one freediving landing with a shared Why freediving page for adults and children, videos and the Finding Nama game. Тема одна — тёмная. Общий дизайн-слой, голос и грабли всех сайтов — `Sites/AGENTS.md`.

**Навигация единая** (`_components/shared/navbar.serb`) на всех страницах: **Why freediving** (`/why/`), **About** (`/about/`), **Friends** (`/friends/`), **Videos** (`/videos/`), **Phuket** (`/phuket/`) — только эти пять пунктов и в этом порядке (Friends добавлен 21.08.2026 по просьбе Ника). Не добавлять в неё якоря главной или внешние ссылки. Футер (`_partials/_footer.serb`) повторяет те же пять плюс Instagram. **Telegram снят отовсюду** (Ник, 26.08.2026) — и из футера, и со всех CTA «Get in touch»: единственный контакт — инстаграм `@nofinsfreediving`.

На мобиле пять пунктов влезают в одну строку только на `text-sm` (десктоп — `sm:text-lg`).

**`/about/` — «Relax harder.»** (2026-08-21). Заголовок и `title` страницы — слова Ника; под ним его же строка про то, как он тренирует: «We train calm and relaxation in your own headspace. Only that — on the surface and at depth, in every style, until that depth feels like home.» Это его формулировки, при правке — резать и переставлять, не переписывать (`me/writing-rules.md`).

**Главная не дублирует внутренние страницы** (2026-08-03). Она коротко представляет направление и ведёт дальше; `/why/` владеет кратким объяснением практики для взрослых и детей. `/senior/` остаётся совместимым редиректом на `/why/`.

**`/junior/` — отдельная страница с 2026-08-25** (Ник: «просто что это даёт детям»), больше не редирект. Только про пользу для ребёнка: dive reflex → спокойствие в жизни; осанка/лёгкие/сердце; фокус и внимание; поверхность + нырок + безопасное присутствие; 1:1 под этого ребёнка; видимый прогресс без гонки; родители в курсе; бережное отношение к воде. Референс-сырьё — [kids.molchanova.school](https://kids.molchanova.school/) → [[Projects/nofins/junior-copy-source]] (чужие цифры/Москва/методику Молчановой и Junior-сертификат на сайт не тащить до кроссовера). Без ECA/Headstart-питча. Ссылка на неё — из блока про детей на `/why/` («More for young divers»); в navbar не добавлять.

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

`yarn deploy` вызывает `bin/bridgetown` без `mise exec`. Если в шелле системный Ruby / нет бандла — падает `Bundler::GemNotFound`. Обход (2026-08-27): `mise exec -- env BRIDGETOWN_ENV=production bin/bridgetown frontend:build && mise exec -- env BRIDGETOWN_ENV=production bin/bridgetown build`, потом `cp .nojekyll CNAME output/` и commit+push внутри `output/` на `master`.

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

(Shoelace was removed 2026-07-13, #25 — the footer icon is an inline SVG now. С удалением тем-свитчера 26.08.2026 бандл стал 75B: JS на сайте фактически нет)

### Key Directories
- `src/` - Source content and templates
  - `_components/` - Reusable Ruby/Serbea components
  - `_layouts/` - Page templates in Serbea format
  - `index.md` - Homepage content. Секции могут сохранять `id=`, но навигация на них не ссылается
  - `why.serb` - `/why/`: одна короткая страница о практике для взрослых и детей; единственный владелец этой копии
  - `videos.md` - `/videos/`: инстаграм-эмбед (reel) + два ютуб-ифрейма + ссылка на канал think→forward
  - `phuket/index.html` - `/phuket/`: браузерная игра Finding Nama (three.js, ~155KB одним инлайн-файлом, без бандлера). Портфолио-карточка проекта живёт на **другом** сайте — `Sites/firedev/src/_projects/finding-nama.md` и ссылается сюда; правишь игру — проверь, не устарело ли описание там
  - `images/home/` - hero и секционные webp редизайна 2026-07
- `frontend/` - Frontend assets
  - `javascript/` - JS modules (сейчас только точка входа: бандл 75B)
  - `styles/` - CSS files including Tailwind and the dark base
- `output/` - Built static site (git-ignored in this repo; itself a separate git checkout of `firedev/nf-website` branch `master` — the deployment target)
- `plugins/` - Custom Bridgetown plugins

### Theme System
**Сайт тёмный, светлой версии нет** (Ник, 26.08.2026: «remove light version, the default body color should be dark»). Переключателя тоже нет — `frontend/javascript/theme-switcher.js` удалён, `<div id="theme-switcher">` из навбара снят, JS-бандл ушёл с ~7KB до 75B.
- `theme-dark` прибит гвоздями к `<html>` в `src/_layouts/default.serb`. Механизм `@custom-variant dark (&:where(.theme-dark, .theme-dark *));` в `frontend/styles/index.css` остался — все `dark:` утилиты в шаблонах работают как раньше, просто всегда
- Фон — градиент глубины из `.theme-dark body` (surface water #082f49 → #020617, `background-attachment: fixed`), поверх `dark:bg-slate-950`. `meta theme-color` — `#020617`
- Dark palette: bg slate-950, cards dark:bg-slate-900 (or bg-white/5), secondary text dark:text-slate-300/400, accents unchanged (sky-200 underlines read fine on dark)
- Новый элемент с захардкоженным светлым цветом (bg-white, text-slate-5xx/6xx/950) обязан получить `dark:` вариант, иначе он останется светлым пятном. Проверять скриншотом (`min-h-screen` на `<main>` уводит футер ниже вьюпорта — снимать высоким окном)
- Светлые правила ещё лежат в index.css мёртвым грузом (`code`, `blockquote.bubble`, `.gif-from-jpeg::before`) — не используются на этом сайте, сносить только если реально мешают

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

### `/friends/` (2026-08-21)
`src/friends.serb` — «Friends I love to train with», инструкторы, с которыми Ник ныряет. Порядок: **Пхукет** (Ben первым — прямое указание Ника, дальше Court, Victoria, Tony), **Бали** (Yan Tychkovskyi), **Москва** (Roman, Artur). Заводилась как скрытая, в тот же день Ник попросил вынести в меню — сейчас она в навбаре и футере, `noindex` снят.

- Механизм `noindex: true` во фронтматтере остался в `_partials/_head.serb` — пригодится, если снова понадобится непубличная страница
- Фото Yan — `src/images/yan.jpg` (селфи с рыбой, Ник прислал 2026-08-22). Фамилия **Tychkovskyi** — тоже от Ника в тот день. Личный инстаграм по-прежнему не дан — не додумывать
- Данные по Yan — с `balifreedivers.com` (школа Bali Freedivers, Amed; SSI Level 3 и Molchanovs; украинец, в Индонезии с 2013; пять стран, 500+ учеников)

- Данные восстановлены из коллекции `_instructors/`, снесённой в `7218c12` — имена, инстаграмы, сертификаты и тексты оттуда, ничего не придумано. Нужны старые исходники — `git show 7218c12^:src/_instructors/<имя>.md`
- Коллекцию и шаблоны `instructor.serb` / `_instructor_list.serb` **не восстанавливали**: шесть человек на одной странице не требуют коллекции, отдельных детальных страниц и фильтрованных хабов — всё это пришлось бы тоже прятать
- Флаг `junior_instructor` из старых данных снят: он стоял и у Court, и у Victoria (SSI **Senior** Instructor), то есть означал скорее «учит детей», а не «младший инструктор». Мимо-подписать живого человека хуже, чем потерять поле. Знаешь, что он значил, — верни осознанно
- Это страница про **других живых людей**: сертификаты и аффилиации протухают. Меняешь — сверяйся с источником, не досочиняй

### Share card, favicon, SEO (2026-08-21)
- **`bridgetown-seo-tag` читает `image` со страницы, не из `site.metadata`.** Поэтому карточка ссылки задана через `defaults:` в `bridgetown.config.yml` (`image.path` + `image.alt`). До этого `og:image` не было вообще — любая ссылка на nofins.com в инстаграме/телеграме превьюилась пустой, а `twitter:card` стоял `summary`. С `image` он сам становится `summary_large_image`
- **Пересобрать `src/images/og.jpg`** (1200×630): отрендерить HTML-карточку в headless Chrome и снять скрин, потом `sips -s format jpeg`. Композиция повторяет герой — фото справа, тип в тёмной зоне слева. Меняешь герой или таглайн — пересобери карточку
- **Фавиконки** — `src/favicon-32.png` / `-180.png` (apple-touch) / `-512.png`, дзен-круг на светлой плашке `#f8fafc`. Сделаны из `images/zen-circle-grunge-brush-stroke-2.png`. Раньше фавиконки не было совсем

### Design conventions (2026-08-21)
- **Кнопки и стрелка-ссылки — `.btn` и `.link-arrow`** из `@layer components` в `frontend/styles/index.css`. Не копировать длинный список утилит на каждую кнопку: фокус-ринг (`outline-sky-500`, читается и на светлом, и на тёмном) и тень заданы один раз
- **Никаких кикеров/надзаголовков** над h2/h1 (`text-sm uppercase tracking-[0.18em]`). Ник снял такой кикер с главного экрана (355d74d), 2026-08-21 сняты остальные восемь. Заголовок несёт себя сам; смысл кикера — в заголовок или в текст
- **Футер — тёмная плашка на всех страницах** (`footer { background: #020617 }`), не только на главной. Внутренние страницы короткие, `min-h-screen` на `<main>` оставляет серую пустоту — тёмная плашка даёт странице явный конец
- **Не резать абзацы по `max-w-[Nch]`.** Ник (21.08.2026): «wraps the line on the last word» — кап по мере оставлял последнее слово одиноким на строке. Вместо этого `text-wrap: pretty` на `p` в базовом слое `index.css` — браузер сам не даёт абзацу закончиться сиротой, на любой ширине. Ширину держит контейнер (`max-w-2xl`, колонка грида), а не класс на самом абзаце
- Секция-заглушка (заголовок без текста и без ссылки) — дефект, а не «воздух»: блок `#why` на главной висел тупиком, теперь ведёт на `/why/`
- **Портретный рил и ландшафтные ютубы не гридятся в одну сетку.** На `/videos/` рил стоит правой колонкой на две строки (`lg:row-span-2`), слева — шапка и 2×2 ютубов. Высоты колонок сходятся; любая попытка положить их в общий грид даёт дыру в 400px
- **`@resource.data.homepage` не существует** — проверять `@resource.data.layout == 'homepage'`. На этом условии висит скрытие лого на мобильной главной; пока условие было мёртвым, шапка на мобиле занимала 179px из 844
- `/phuket/` — самостоятельный HTML со своей палитрой (золото/навy). В нём есть `#backhome` — ссылка назад на сайт в стиле игры, а не тейлвиндовая кнопка. Игрок не должен оказываться в тупике

### Working with Components
Components are Ruby objects in `src/_components/`. When creating new components:
- Follow existing naming conventions (e.g., `shared/header.rb`)
- Use Serbea templates for rendering
- Components can accept props and render dynamic content

### Adding Content
- Static pages: Add Markdown or HTML files to `src/`
- Homepage copy lives in `src/index.md` — single content
- `src/videos.md` — video wall, shared with nikolayx.com (same four embeds on both). Раскладка: шапка + 2×2 ютубов слева, инстаграм-рил правой колонкой на две строки. **Не судить видео по названию** (2026-08-03): «Отлетевшие 4» читается как русская серия про сознание, но во фридайв-контенте она по теме — я её отфильтровал, Ник вернул. Русский язык сам по себе не дисквалифицирует: сайт en-only по копирайту, видео — нет. Сомневаешься, о чём ролик — посмотреть исходник (`OTLETEVSHIE/`, `Videos/`, `Transcripts/` в вальте) или спросить, не вырезать молча

### Frontend Development
- JavaScript modules go in `frontend/javascript/`
- Styles use Tailwind utilities in `frontend/styles/`
- No Shoelace / web-component library — icons are inline SVG (removed 2026-07-13, #25)
- Dark styling is Tailwind `dark:` utilities on elements; `theme-dark` is hardcoded on `<html>` (there is no toggle, no `data-theme` attribute, no separate dark stylesheet — see Theme System)

### Building and Testing Changes
1. Run `yarn start` for development server
2. Site rebuilds automatically on content changes
3. Frontend assets require restart if `esbuild.config.js` is modified
4. Проверять скриншотом — тема одна, тёмная
5. Verify responsive design with Tailwind breakpoints

**Gotcha — `bin/bridgetown build` alone leaves CSS STALE.** Tailwind/PostCSS runs in the esbuild step (`frontend:build`), NOT in `bin/bridgetown build`. So a **newly-added utility class** (e.g. `bg-sky-500` not used elsewhere) won't be in the CSS bundle after a bare `build` — it silently has no styling, and screenshots off `output/` mislead. To verify a new class locally: `bin/bridgetown frontend:build && bin/bridgetown build`, then `grep <class> output/_bridgetown/static/index.*.css`. `yarn start` and `yarn deploy` both run `frontend:build` first, so the real deploy is fine — this only bites local verification.

### Голос и правки копирайта (2026-08-26)
Ник прошёлся по всем страницам: «the english doesn't make sense». Что чинилось и что теперь нельзя ломать заново:

- **Не заявлять, что тренировка — это no-fins.** Ник: «don't claim we train no fins, it's just the brand». `nofins` — имя, а не дисциплина. Тренируется расслабление в любом стиле (bi-fins, monofin, no fins, руки по тросу). Блок «No fins. / Just breath, body, and attention.» с `/about/` снят, секция `#nofins` на главной переписана на «в любом стиле»
- **«Your character» — калька с русского «характер».** По-английски это персонаж книги, а не голос в голове. На `/why/` и `/about/` теперь «your head» / «switch off your head». Любой новый перевод внутренней речи Ника проверять этим тестом
- Заголовок не пересказывается абзацем дословно (было «One diver. One buoy.» + «One diver, one buoy and full instructor attention.»)
- Термин вводится до употребления: «The reflex» → «The dive reflex» на `/junior/`
- Безличный корпоративный залог режется: «trips are announced with confirmed dates», «practice uses an active, qualified buddy», «No-fins develops efficient movement through coordination and feel» — всё переписано живым английским
- Про Еву (реел на `/about/` подписан «EVA 13Y FREEFALL 20M`): блок «My daughter is thirteen» и строку «Five children, all of them freedivers» Ник велел снять, оставить только про падение. Не возвращать без его слова
