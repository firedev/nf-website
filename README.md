# nofins.com

Landing page for **Psychedelic Freediving** (Phuket, Thailand). Bridgetown + Tailwind v4, with a dual-theme twist: light ("Spiritual Pool") and dark ("Psychedelic Wave") show different content, not just different colors.

## Repo layout

One repo, two branches:

- `source` (this checkout) — site source
- `master` — built static site, served by GitHub Pages at nofins.com
- `output/` — a separate clone of the same repo (`firedev/nf-website`) on `master`; git-ignored here, used as the deploy target

If `output/` is missing or lost its `.git`:

```bash
rm -rf output && git clone -b master git@github.com:firedev/nf-website output
```

**Keep the repo public** — a private repo on the free plan silently stops Pages builds while serving the stale site (incident 2026-06-12).

## Commands

Ruby via mise (system ruby 2.6 won't run Bridgetown):

```bash
eval "$(mise env -s zsh)"
yarn start    # dev server
yarn deploy   # build + push output/ to master (needs output/.git, see above)
```

More detail (architecture, theme system, content conventions): `CLAUDE.md`.
