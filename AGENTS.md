# Sites/nofins — nofins.com

Bridgetown static site for nofins freediving (Phuket, Thailand) — read this before any work in this folder. One-to-one freediving landing with a shared Why freediving page for adults and children, videos and the Finding Nama game. Тема одна — тёмная. Общий дизайн-слой, голос и грабли всех сайтов — `Sites/AGENTS.md`.

**Навигация единая** (`_components/shared/navbar.serb`) на всех страницах: **Why freediving** (`/why/`), **About** (`/about/`), **Friends** (`/friends/`), **Videos** (`/videos/`), **Phuket** (`/phuket/`) — только эти пять пунктов и в этом порядке (Friends добавлен 21.08.2026 по просьбе Ника). Не добавлять в неё якоря главной или внешние ссылки. Футер (`_partials/_footer.serb`) повторяет те же пять плюс Instagram. **Telegram снят отовсюду** (Ник, 26.08.2026) — и из футера, и со всех CTA: единственный контакт — инстаграм `@nofinsfreediving`. Кнопка — «Let’s freedive» или «Let’s go.», не «Write me», не «Get in touch». Не повторять Write me дважды.

**Тон — с любовью, без давления** (2026-09-08). Канон: «Friends I love to train with.» / «Instructors I love to share water with.» Не «Go and find them», не «sign up, and let’s go», не urgency («already gathering»). Приглашение, не воронка. Safety-императивы («never hold your breath alone») оставлять.

**Не хвастаться** (Коля, 12.10.2026: «не надо хвастаться»). Никаких «все мои ученики бьют свои рекорды» и прочих результатов учеников как рекламы. Строка «Everyone who trains with me breaks their own records…» с `/about/` снята — не возвращать. Факты о друзьях на `/friends/` (их PB) — не хвастовство, это их данные.

На мобиле пять пунктов влезают в одну строку только на `text-sm` (десктоп — `sm:text-lg`).

**`/about/` — «Relax harder.»** (2026-08-21). Заголовок и `title` страницы — слова Ника; под ним — его мысль про то, как он тренирует, в английском пересказе 12.10.2026: «We train one thing: staying calm and relaxed inside your own head.» / «On the surface, at depth, in every discipline.» / «Until depth feels like home.» Прежняя калька «We train calm and relaxation in your own headspace. Only that» снята по просьбе Коли («перепиши весь текст» после «это не английский»). В блоке фактов у имени — ссылка на визитку `nikolayx.com` (2026-09-08).

**Структура по образцу theunderwatertherapist.com** (Коля, 15.10.2026: «i want the similar just drawn from my writings», «the whole site»). Главная: hero → `#head` «It is all in your head.» (четыре карточки 2×2 «проблема читателя → обещание → ссылка»: две для новичков, две для ныряющих — Коля выбрал «Mix») → `#why` → `#start` «Try freediving.» (Adults → инстаграм, Kids → `/junior/`; без номеров и без трипов — они в `#trips`) → `#trips` → `#about` → `#where` → `#join`. `/why/`: три канонические пары → эссе `.essay` с липким оглавлением справа (`.essay-toc`, от 1024px); пункт раздела, который читаешь, подсвечивается (`aria-current`, скрипт в `frontend/javascript/index.js` — раздел активен, когда его верх прошёл 30% экрана). Между текстом и оглавлением висит белый трос («line is white, marks - black») (`.dive-line`, от 1024px; Коля 15.10.2026: «фоном нарисуешь трос а внизу candy cane и стоппер и дальше он уходит до конца страницы», «отметки напротив глав»): метка на тросе напротив каждого h2 — чёрный отрезок ровно в ширину троса, не шире («depth marks are ON the line, they can't be wider») (ставит тот же скрипт; Коля 15.10.2026: «the marks should be just black squares on the line»), внизу эссе candy cane — белый трос с чёрными штрихами, как на схеме дайв-лайна, и под ним стоппер — просто жёлто-лаймовый круг `#d9f53b` («stopper just yellow-lime circle») (Коля 15.10.2026: «candycane just like dashed line»). Candy cane и стоппер висят ниже последней главы, на продолжении троса к футеру: «no marks on candycane»; трос идёт сквозь футер до самого низа страницы (`--tail` считает скрипт), поэтому футер прижат влево и не пересекается с тросом («so the rope goes all the way») и вверх от эссе до верха страницы, под текстом (`--head`; «make the rope go thru the top»). Останавливается под меню: на 1456px трос резал пункт «Why freediving». Верх троса растворяется в воде на первых 14rem (`mask-image`; «fade the top of the rope»). Левая колонка шапки и блоки Deeper/Kids — `max-w-[42rem]`, как эссе, чтобы текст не упирался в трос («join these to the left»), трос уходит ниже эссе к футеру → «Deeper means calmer.» / «One-to-one for kids.» → кнопка (Коля 15.10.2026: «make sure the page tells the story» — практические блоки после истории, вывод «On land.» ведёт к ним; раньше стояли между крючком и историей и рвали её). Разделы эссе с якорями: `#twelve`, `#breath`, `#letting-go`, `#wall`, `#thoughts`, `#water`, `#land`; каждая строка — пересказ постов think→forward 2023-12-04…2026-09-08 (`Telegram/Thinkforward/`). Ревью `/impeccable` 15.10.2026: «Then I was gone.» читался как блэкаут, «Only the water.» — непонятно; раздел зовётся «Free fall.» (Коля 15.10.2026: заголовки «не понятны» — «Thoughts that are not yours.» → «The voice in your head.», «On land.» → «The same on land.»; «Fear speaks in your voice.» и «Where the fear ended.» он отклонил; «The urge to breathe.», «Letting go.», «The wall.» оставить); «seventy-five metres» без «pool» новичок читает как глубину. Карточки не цитируют эссе, а называют проблему и обещание. Кикеры «01 / RECOGNITION» с образца не взяты. Первый раздел — «Unplug.» (Коля 15.10.2026 выбрал из вариантов вместо «First contact.», его же «3 minutes to first touch or something»; заголовки «The voice in your head.» и «Free fall.» он подтвердил; строка Коли дословно: «Once I understood that you need to unplug in your head, I held my breath for over four minutes.» (было 4:15, точную цифру не ставить)); калька «My calm went down to twelve metres» / «Mine went down to twelve metres» (его «мой уровень пофигизма 12 метров») снята, Коля 15.10.2026: «прекрати писать» — не возвращать.

**Главная не дублирует внутренние страницы** (2026-08-03). Она коротко представляет направление и ведёт дальше; `/why/` владеет кратким объяснением практики для взрослых и детей. `/senior/` остаётся совместимым редиректом на `/why/`.

**`/why/` — не паковать русский в одну английскую строку** (2026-09-08). Ник: «английский текст нечитаем, я слишком плотно пишу на русском». Канон питча — встреча с Никитой 21.08: «как только ты начинаешь погружаться, задерживать дыхание, в голову лезет все подряд… начинаешь фильтровать базар… он затихает, и внутри у тебя освобождается место для тебя самого.» На сайте это три шага, не один абзац-калька. Не возвращать «every thought you own arrives together» / «You start filtering. The noise drops.»

**`#where` после фото — текст Ника про выходные на Пхукете** (2026-09-08): короткие абзацы, первая строка — «I dive and instruct on the weekends.» (Коля, 12.10.2026; было «We dive every weekend.»), про воду — «The water around Phuket is always quiet. Some days we go out to 50 m and beyond.» (Коля, 12.10.2026; оговорка «for divers with Wave 3 or equivalent» снята), финал «We do what we want.» как display (надиктовка: «делаем что хотим»). Не подменять калькой «We set the day as we go.» Не возвращать простыню «It all opens up» / «Independent training, Wave 3 certificate». Racha остаётся на `/about/`.

**`#why` на главной — «Freediving is life.»** (2026-09-08). Текст Ника: снимаешь персонажа, неделька в океане в компании. Deeper/Kids с главной сняты — они живут на `/why/`. С 12.10.2026 там же абзац «Freediving is a mental lab.» (Коля попросил; его «лаборатория сознания» из «Отлетевших 4»: «просто добавь воды, всё увеличивается», «никаких рекордов… просто пробуем») Первая версия «Just add water and everything gets bigger. No records, we just try. What works, I tell others.» — пословная калька, Коля (12.10.2026): «это не английский… я даже сам не понимаю о чём тут». Теперь: «Hold your breath underwater and you reach corners of your mind you never knew were there. Your sense of time shifts. Nobody is chasing records here. We experiment. What works, I share on tellothers.com.» (промежуточная «you notice parts of your mind you never paid attention to» была верной, но бледной — см. `me/writing-rules.md` § «Каждый язык — как носитель») — ссылка на карточку `tellothers.com/try-freediving`. Его русские обороты («просто добавь воды», «всё увеличивается») на английский не переносить словами — пересказывать смысл. Ссылку держать на карточку, не на главную tellothers. Не возвращать «Freediving gives your life back» на hero-блок главной (это h1 страницы `/why/`).

**`#trips` на главной — «The next trips.»** (2026-09-08). Стоит сразу после `#why`. Календарь вылазок Ника, его текст: Deep Week Malaysia 7–14.11.2026 (отменён — Коля 15.10.2026: зачёркнут, сверху бейдж «Cancelled», `.home-trip-cancelled` / `.home-trip-badge`), Wonderfruit 3–7.12.2026, Сурин февраль–март 2027 → nonduality.today, Deep Week Bali 3–10.04.2027, Комодо 12–15.04.2027 с Яном. Свадьбу 31.10 на сайт не класть. Финал секции — одна кнопка «Let’s go.» (погнали), без «Write me». Контакт — Instagram `@nofinsfreediving`, без формы и без бэкенда (GitHub Pages). В навбар пункт не добавлять. Даты менять только из его списка, ссылки — живые страницы событий.

**`/junior/` — отдельная страница с 2026-08-25** (Ник: «просто что это даёт детям»), больше не редирект. Только про пользу для ребёнка. Четыре блока с kids.molchanova.school: осанка/лёгкие; фокус; плавать и нырять безопасно; любовь к воде. Плюс dive reflex → спокойствие в жизни; 1:1; видимый прогресс; родители в курсе. Канон сырья — [[Freediving/junior/AGENTS]] ([kids.molchanova.school](https://kids.molchanova.school/); чужие цифры/Москва/методику Молчановой и Junior-сертификат на сайт не тащить до кроссовера). Без ECA/Headstart-питча. Ссылка на неё — из блока про детей на `/why/` («More for young divers»); в navbar не добавлять.

## Development Commands

All commands run from `/Users/nick/Life/Sites/nofins/`. Ruby — через mise, системный ruby 2.6 Bridgetown не потянет.

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

`bin/bridgetown build` не чистит `output/_bridgetown/static/`: старые `index.*.css/js` копятся и уезжают в деплой (12.10.2026 там лежали пять мёртвых CSS-бандлов). Перед коммитом в `output/` удалить всё, на что не ссылается `output/index.html` (`grep -ho 'index\.[A-Z0-9]*\.\(css\|js\)' output/index.html`).

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
- Фон — градиент глубины из `.theme-dark body` (одно непрерывное погружение от поверхности до футера: #0c4a6e → #082f49 → #0c1a33 → #020617, растянут на всю высоту страницы и скроллится вместе с ней — вода темнеет по мере прокрутки; `fixed` снят, Коля 15.10.2026: «непрерывный градиент а не fixed от поверхности до футера, ты скроллишь и темнеет вода»), поверх `dark:bg-slate-950`. `meta theme-color` — `#020617`
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
`src/friends.serb` — «Friends I love to train with», инструкторы, с которыми Ник ныряет. Порядок: **Пхукет** (Ben первым — прямое указание Ника, дальше Court, Victoria, Tony), **Бангкок** (Ploy Pairin, `@ploy_prn` — Коля 15.10.2026. Не Ploy Scott, основательница Bangkok Freedivers: я спутал их по имени и поставил чужие регалии и фото, Коля: «not ploy scott! ploy pairin!!!». Человека сверять по хэндлу, который дал Коля. В справочнике Molchanovs она «Ploy Phairintr», Wave 2 Instructor; SSI и био — из её инстаграма; фото — её аватар), **Паттайя** (Eline Postma — Коля 15.10.2026, ссылка на её профиль в справочнике Molchanovs; регалии, био и фото оттуда), **Бали** (Yan Tychkovskyi), **Дахаб** (Roman — Коля 15.10.2026: «roman in dahab»; в справочнике Molchanovs у него до сих пор Moskva — верить Коле; Elie Galabert, `@apneelie.bre`, с Реюньона — фото и строка про Дахаб из инстаграма; фамилия, уровень AIDA Master Instructor и курсы AIDA 1–4 + Monofin — из профиля в справочнике AIDA, ссылку дал Коля 15.10.2026; в справочнике Molchanovs Elie нет), **Москва** (Artur; Olga Lukova — Коля 15.10.2026, ссылка на её профиль в справочнике Molchanovs: Wave 3 Instructor Trainer, фото оттуда, био и инстаграма в профиле нет; инстаграм `@kidsfreediving` нашёлся поиском по имени в Instagram (Коля: «insta - yes»), из её био — Aqua Show Academy и подводные танцы. Что она автор Junior-системы и врач — из заметок вальта, не из её публичных страниц; на сайт не ставили). Под h1 две строки блоками «These are the instructors I recommend.» / «Wherever you are, train with them.» — подзаголовок не переносится посреди фразы (Коля 15.10.2026: «don't wrap subtitles!») (Коля 15.10.2026: «make it clear that these are the people I recommend»). Заводилась как скрытая, в тот же день Ник попросил вынести в меню — сейчас она в навбаре и футере, `noindex` снят.

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
- **Футер выровнен влево, по левому краю текста внутренних страниц** (Коля 15.10.2026: «move footer to the left», «align footer with the text»). Отступ `px-8 lg:px-14` = `main` (`px-2 lg:px-8`) + `.page` (`px-6`). `max-w-6xl` у `.page` не работает — `.page { max-width: 100% }` в `index.css` его перебивает, текст стоит от левого края, а не по центру
- **Шапка и футер без своих плашек** (Коля 15.10.2026: «без полос на меню и футере»). Фон у `footer` и у шапки внутренних страниц прозрачный — через них идёт тот же градиент глубины; низ градиента #020617 и так даёт странице тёмный конец. Прежнее правило «футер — тёмная плашка» снято. Шапка главной — отдельный случай: она лежит на фото героя, её затемнение остаётся
- **Не резать абзацы по `max-w-[Nch]`.** Ник (21.08.2026): «wraps the line on the last word» — кап по мере оставлял последнее слово одиноким на строке. Вместо этого `text-wrap: pretty` на `p` в базовом слое `index.css` — браузер сам не даёт абзацу закончиться сиротой, на любой ширине. Ширину держит контейнер (`max-w-2xl`, колонка грида), а не класс на самом абзаце
- **Фокус и skip-link** (12.10.2026, `/impeccable harden`). Одно кольцо фокуса на всё — `:focus-visible` в базовом слое `index.css` (2px sky-400, отступ 3px), `.btn` и постеры держат своё sky-500. Первый Tab на любой странице — кнопка «Skip to content» (`default.serb`, `.btn` уезжает за верх экрана через `-translate-y-24`, `sr-only` не годится: снимает паддинги `.btn`); `<main id="main" tabindex="-1">`. Замер цвета кольца сразу после Tab врёт: `transition` у ссылок анимирует и `outline-color`, ждать ≥200 мс
- **Видео — постер, плеер по клику** (12.10.2026, `/impeccable optimize`). Инстаграм-рилы (`/why/`, `/about/`, `/videos/`) и ютубы на `/videos/` стоят как `.embed` → `a.embed-poster` (локальный постер + кнопка ▶) + `<template>` с настоящим `blockquote`/`iframe`; обработчик клика — `frontend/javascript/index.js`, `embed.js` инстаграма грузится только после клика. Без этого `/why/` и `/about/` тянули по ~5,6 МБ, `/videos/` — 12,4 МБ; стало 140–240 КБ. Постеры — `src/images/video/`: ютуб — `i.ytimg.com/vi/<id>/maxresdefault.jpg` (нет — `sddefault`, обрезать до 16:9), инстаграм — `src` самого большого `img` внутри отрендеренного эмбеда (9:16), всё в webp. Новое видео — тем же способом, не голым эмбедом. У инстаграма после клика всё равно второй тап по его собственному ▶ — так устроен эмбед
- **Лого** — `src/images/zen-circle.webp` (128px, 4 КБ). Исходник `zen-circle-grunge-brush-stroke-2.png` (2299px, 450 КБ) остаётся только для фавиконок — в разметку и CSS его не ставить. Фото Коли — `nick.webp` (1000px, 40 КБ), `nick.jpg` удалён
- Секция-заглушка (заголовок без текста и без ссылки) — дефект, а не «воздух»: блок `#why` на главной ведёт на `/why/`
- **Портретный рил и ландшафтные ютубы не гридятся в одну сетку.** На `/videos/` рил стоит правой колонкой на две строки (`lg:row-span-2`), слева — шапка и 2×2 ютубов. Высоты колонок сходятся; любая попытка положить их в общий грид даёт дыру в 400px
- **`@resource.data.homepage` не существует** — проверять `@resource.data.layout == 'homepage'`. На этом условии висит скрытие лого на мобильной главной; пока условие было мёртвым, шапка на мобиле занимала 179px из 844
- `/phuket/` — самостоятельный HTML со своей палитрой (золото/navy). `#backhome` — ссылка `nofins.com` на `/` в стиле игры (не `.btn`). Без неё игрок в тупике (пропала, вернули 2026-09-08)

**`/about/` — весь текст в одну колонку напротив фото** (Коля, 12.10.2026: «текста три строчки буквально размазано на всю страницу»). «Relax harder.», лид и три пары заголовок+строка стоят слева от фото, заголовки пар `text-2xl sm:text-3xl`, не display-размер на всю ширину. Короткий текст не растягивать отдельными секциями на экран. В тот же день Коля про пары-обрывки («On the surface, at depth, in every discipline. / Until depth feels like home.», «Pool or open sea.»): «плохой текст, ничего не ясно». Теперь там три абзаца прозой из его строк с карточки tellothers `try-freediving` («turned out not to be swimming, but training the ability to stay calm», «can't dive angry or upset — you instantly run out of breath», «the best dive is when you don't think at all»). Блок «Then you fall.» — из его поста 2024-Q4 (глубина, где начинается свободное падение; «фридайвинг вымывает всё ненужное»); строку «The stiller you are, the faster you fall» Коля не узнал («откуда») — источника за ней не было. Заголовок от текста отделён: h1 `mb-8`, «Then you fall.» `mb-6`.

**«Повеселее и поинформативней» (Коля, 12.10.2026).** Рил Евы (`DcFTJ_nv7jm`) переехал с `/about/` на `/junior/` («Eva goes well with Junior freediving») — блок «Twenty metres in one session.» + её слова из поста канала 16.08.2026 («сначала мне стало страшно, что я падаю… заиграла музыка в голове»); «my daughter» по-прежнему не писать. На `/about/` у «Then you fall.» теперь рил с `@_nikolayx_` (`DPwQd2dEzGN`, тот же, что на `/videos/`) и четыре пары по фазам погружения — заголовки Коли 12.10.2026: «First metres.» / «Neutral buoyancy.» / «Negative buoyancy.» / «Deeper.» (без цифры 12 м: «не first 12 meters, just first meters»). Тексты из его постов: «хороший дайв — лёгкий» (2026-Q3), невесомость (его набросок), «вода обнимает плотнее» и «выбираешь, что впустить обратно» (2024-Q4), стена внутри (2026-Q3; строку про рекорды учеников Коля снял 12.10.2026). Блоки «Then you fall.», «Old limits go.», «It is all in your head.» влиты в эти четыре. На главной в `#about` — «Why nofins? Where we are going, into ourselves, we do not need fins.» (его шутка из «Назад в будущее», пост 03.09.2026: «Там, куда мы отправляемся, внутрь себя, ласты не нужны». «Внутрь себя» не выкидывать — без него фраза читается как обещание нырять без ласт), в `#where` — «You are alone in your own head, and someone always has an eye on you.» (там же). Хочешь ещё — бери из `Telegram/Thinkforward/` и карточки tellothers `try-freediving`, не сочиняй.

**Аудит 12.10.2026 (`/impeccable audit`).** `/why/` собран как `/about/`: h1 и три пары заголовок+абзац одной колонкой, рил справа. `/junior/` — восемь пар сеткой в две колонки (`md:grid-cols-2`), а не восемь display-заголовков столбиком. Подзаголовки страниц — настоящие `<h2 class="page-display">`, не `<p>`. Тач-цели ≥44px: пункты меню `py-3`, ссылки футера `py-2.5`, `.link-arrow` `min-h-11`. `/friends/`: колонка текста `min-w-0`, строка инстаграм·школа `[overflow-wrap:anywhere]` — без них на 390px длинный хэндл резался справа. У `.btn` нейтральная тень вместо голубого свечения; `::selection` sky-300; `html { background:#020617 }` — без него при оттягивании страницы на iPhone и на full-page скриншотах ниже первого экрана белый фон.
- Детектор impeccable на этом сайте врёт про контраст (~40 находок): считает фон по `bg-slate-50` у `body` и не видит градиент `.theme-dark body`. Контраст мерить в браузере по вычисленным цветам. «overused-font: inter» — общий дизайн-слой сайтов, не трогать. «cramped-padding» — паддинг стоит на внутреннем контейнере секции.

**Внутренние страницы меню** (2026-09-08) держат манеру главной: `.page-title` / `.page-display` / `.page-prose` / `.home-creds`, без `border-t` и без пилюль. Шапка внутренних — прозрачная, поверх градиента (15.10.2026). Копию Ника не переписывать.

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

**Gotcha — headless screenshot of the homepage.** (2026-09-08) Chrome `--screenshot` of `100dvh` hero often writes the PNG and then hangs — kill the process once the file is non-empty. Do not hammer `:4000` (Puma’s 5 threads wedge on hung connections); serve `output/` on another port. A tall window or `#where` hash still captures only the hero, because `100dvh` fills the viewport. Section shots need a ~900px iframe, `scrollIntoView` after load, then wait.

**Gotcha — `bin/bridgetown build` alone leaves CSS STALE.** Tailwind/PostCSS runs in the esbuild step (`frontend:build`), NOT in `bin/bridgetown build`. So a **newly-added utility class** (e.g. `bg-sky-500` not used elsewhere) won't be in the CSS bundle after a bare `build` — it silently has no styling, and screenshots off `output/` mislead. To verify a new class locally: `bin/bridgetown frontend:build && bin/bridgetown build`, then `grep <class> output/_bridgetown/static/index.*.css`. `yarn start` and `yarn deploy` both run `frontend:build` first, so the real deploy is fine — this only bites local verification.

### Голос и правки копирайта (2026-08-26)
Ник прошёлся по всем страницам: «the english doesn't make sense». Что чинилось и что теперь нельзя ломать заново:

- **Не заявлять, что тренировка — это no-fins.** Ник: «don't claim we train no fins, it's just the brand». `nofins` — имя, а не дисциплина. Блок «No fins. / Just breath, body, and attention.» с `/about/` снят. Секция `#nofins` на главной («Move with your whole body» / bi-fins, monofin, lanyard) снята 08.09.2026 как slop — не возвращать.
- **«Your character» — калька с русского «характер».** По-английски это персонаж книги, а не голос в голове. На `/why/` и `/about/` теперь «your mind» / «The quieter your mind, the better you dive.» Любой новый перевод внутренней речи Ника проверять этим тестом
- Заголовок не пересказывается абзацем дословно (было «One diver. One buoy.» + «One diver, one buoy and full instructor attention.»)
- Термин вводится до употребления: «The reflex» → «The dive reflex» на `/junior/`
- Безличный корпоративный залог режется: «trips are announced with confirmed dates», «practice uses an active, qualified buddy», «No-fins develops efficient movement through coordination and feel» — всё переписано живым английским
- Про Еву (реел на `/about/` подписан «EVA 13Y FREEFALL 20M`): блок «My daughter is thirteen» и строку «Five children, all of them freedivers» Ник велел снять, оставить только про падение. Не возвращать без его слова

### Полный проход на английский носителя (12.10.2026)

Коля: «блин ну это не английский! Какая-то калька с русского», потом «перепиши ВЕСЬ текст на сайте». Переписаны все страницы: главная, `/why/`, `/about/`, `/friends/`, `/junior/`, `/videos/`, `/404/` и `description`. Правило — `me/writing-rules.md` § «Каждый язык — как носитель»: каждую фразу писать словами, которые выбрал бы начитанный носитель. Нетронутыми оставлены строки Коли, которые по-английски звучат естественно: «Freediving trains life.» (слоган и картинка превью; вариант «Freediving is training for life.» Коля отклонил — «оставь», 12.10.2026), «Slow down. Stay calm. Go deeper.», «Freediving is life.», «Relax harder.», «We do what we want.», «Calm starts young.», «Pool first.», кнопки. Британская орфография (metres, organises, practises, travelled); «Equalise» тоже через s.

### Язык сайта — правила Ника (2026-09-08)

Проход по всем страницам на «corny and unnatural». Три правила от Ника в тот день и список вычищенного.

**Без стяжений.** Ник: «write "are" not "'re", the only ok is "Let's go"». На сайте пишем `you are`, `we are`, `she is`, `it is`, `you will`. Единственное исключение — CTA-канон «Let's freedive» / «Let's go.». Правило касается и `&rsquo;`-сущностей в HTML. Проверка: `rg "&rsquo;(s|re|ll|ve|t)" src --glob '!phuket/**'` — в выдаче должны остаться только кнопки.

**Короткие рубленые фразы — его манера, не слоп.** Ник: «я люблю короткие рубленые фразы, они же поясняют сразу что надо». «Slow down. Stay calm. Go deeper.», «Calm dives.», «Pool first.», «A longer float. A cleaner duck dive.» — оставлять. Общий банлист режет тройки и рубленые пары ассистента; здесь clipped-ритм разрешён, вычищать его нельзя. Резать повтор смысла, не длину фразы.

**Дважды одна строка на сайте — дефект.** Один заголовок живёт на одной странице:
- «Freediving is life.» — h2 `#why` на главной. h1 `/why/` — «Freediving gives your life back.» (Коля, 15.10.2026: «и так понятно что gives you» — второе «you» не возвращать) (дубль вернулся и снят 08.09)
- «One diver. One buoy.» — h2 `#about` на главной. На `/about/` блок про бассейн и море озаглавлен «Pool or open sea.» (12.10.2026; прежний «Full attention.» с абзацем «the dive does the same thing to you» читался как бессмыслица)

**Один приём — один раз на весь сайт.** Конструкция «the same X that helps at school / in a hard conversation / at 3am» стояла в трёх местах (`why.serb`, `junior.serb` ×2). Остался только хвост на `/why/` («…and it is there at 3am»). Появилась в четвёртом месте — значит шаблон, а не мысль.

**Снято как слоп, не возвращать:**
- «You take off the character» на главной — та же калька «персонаж», что чинили 26.08. Теперь «Drop the act and be yourself.» (Коля, 12.10.2026)
- «You start filtering the chatter, and it goes quiet» на `/why/` — возврат запрещённой строки «You start filtering. The noise drops.». Плюс заголовок «It all comes at once.» обещал одно, а абзац говорил обратное. Теперь «Everything shows up at once.» / «…every thought you have comes with you. You start throwing them out one by one.»
- Аплодисменты себе после своей же мысли: «That is the whole secret.», «and that is the best part of it», «Each win is concrete, and it stacks.»
- Отрицательные параллелизмы на `/junior/`: «not a group average», «No pushing for depth, no racing the clock», «not just that they showed up», зачин «Not only on the surface.» Утверждать то, что есть
- Обороты журнального профиля на `/friends/`: «you'll find him deep in his favourite discipline», «brings a calm presence to every line», «brings that athlete's precision», «she's known for the patience», «Personal bests tell the story», «it reshaped everything since», «a deep read on the local reef». Факты на месте — снята оправа
- «Why freediving?» подзаголовком на главной — описывал функцию блока и дублировал пункт меню
- Абзац, пересказывающий свой заголовок: «Just you on the line.» под «One diver. One buoy.»; «The rest of the time I'm in Phuket.» под «Phuket is home.» (отсылка «the rest of the time» уводила на две секции вверх)
- Двойной CTA в `#join`: заголовок «Let's freedive.» плюс кнопка «Let's go.». Заголовок теперь вопрос «What do you want to work on?», кнопка канонная
- `/404/` перечисляет все пять пунктов меню, Friends в том числе
