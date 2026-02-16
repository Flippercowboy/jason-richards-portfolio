# Jason Richards Portfolio Site

## Project Overview
Personal portfolio/CV website for Jason Richards, built with React + Vite. Hosted on GitHub Pages at https://flippercowboy.github.io/jason-richards-portfolio/

## Tech Stack
- React (Vite)
- Plain CSS (no framework)
- GitHub Pages deployment via GitHub Actions

## Key Files
- `src/App.jsx` — Main component containing all site content
- `src/App.css` — All component styling
- `src/index.css` — Global styles (background, typography, buttons)
- `public/jason.jpeg` — Profile photo
- `public/Jason_Richards_CV.pdf` — Downloadable CV
- `.github/workflows/deploy.yml` — GitHub Pages deployment workflow
- `vite.config.js` — Vite config with base path set to `/jason-richards-portfolio/`

## Deployment
- Pushes to `main` auto-deploy via GitHub Actions
- GitHub repo: https://github.com/Flippercowboy/jason-richards-portfolio
- Live site: https://flippercowboy.github.io/jason-richards-portfolio/

## Important Notes
- Public assets (images, CV) must use `import.meta.env.BASE_URL` prefix in paths, not `/`, due to the GitHub Pages base path
- The Learning Technologies Award was won in **2022** (not 2024)
- Agency model transition: Jason started the year with 2 people (himself + 1) and grew to 5 by year end — not a static 2-person team
- CV source document lives at `/Users/jasonrichards/Downloads/Documents - Administrative/Jason_Richards_CV_2026.docx`

## Style
- Dark theme with purple/blue gradient background
- Gradient text on headings (pink/coral hero, blue/cyan sections, purple/pink site title)
- Centre-justified layout
- Hover effects on cards, tags, and buttons
