# Portfolio

Personal portfolio site built with [Astro](https://astro.build), hosted on GitHub, deployed on Vercel.

## Run it locally
```bash
npm install      # first time only: downloads dependencies
npm run dev      # starts a live-reloading site at http://localhost:4321
npm run build    # produces the final static site in dist/
```

## How to customize (start here)
| I want to change... | Edit this file |
|---|---|
| Name, headline, bio, links, skills, projects, certs | `src/config.ts` |
| Colors, fonts, spacing | `src/styles/global.css` (the `:root` tokens at the top) |
| Order of sections / remove a section | `src/pages/index.astro` |
| The look of one section | `src/components/<Section>.astro` |
| Photo, résumé PDF, favicon | put files in `public/`, then reference them in `src/config.ts` |

## Project structure
```
src/
  config.ts          <- all your content
  pages/             <- each file = a URL (index.astro = "/")
  layouts/Base.astro <- shared page shell (head, nav, footer, theme)
  components/        <- one file per section
  styles/global.css  <- design tokens + shared styles
public/              <- static files served as-is
planning/            <- positioning, decision log, case-study company
```

## Deploy
Push to GitHub → import the repo at vercel.com/new → Vercel auto-detects Astro.
Every push to `main` redeploys automatically.
