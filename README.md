# nofins.com

Bridgetown site. Build & deploy to GitHub Pages (legacy Pages: branch master, path /):

```
yarn deploy
```

`output/` is a separate git repo → `firedev/nf-website`. If cloned fresh:

```
cd output
git init && git remote add origin git@github.com:firedev/nf-website
```

**Keep the repo public** — private repo on the free plan silently stops Pages builds while serving the stale site (incident 2026-06-12).
