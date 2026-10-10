# PrinceKing Property

A two-page React app (Vite + React Router) for PrinceKing Property:
one page for TO-LET / property listings, one for the Printing & Job Hub.
Switch between them with the tab bar fixed at the top.

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173/PrinceKing/`.

## Build

```bash
npm run build
```

Outputs a static site to `dist/`.

## Deploy to GitHub Pages

This repo is set up for `https://abdaal12.github.io/PrinceKing/`.

**Option A — automatic (recommended):**
The included workflow at `.github/workflows/deploy.yml` builds and deploys
automatically on every push to `main`. In your repo on GitHub, go to
**Settings → Pages** and set the Source to **GitHub Actions**. That's it —
push to `main` and it deploys itself.

**Option B — manual, from your machine:**
```bash
npm run deploy
```
This uses the `gh-pages` package to push the built `dist/` folder to a
`gh-pages` branch. In **Settings → Pages**, set the Source branch to
`gh-pages`.

## Project structure

```
src/
  App.jsx                   routes between the two pages
  main.jsx                  entry point (HashRouter)
  styles.css                shared brand styles
  components/
    TopTabs.jsx              sticky 50/50 tab nav
    ContactActions.jsx        Call / WhatsApp / Telegram row
    StickyContactBar.jsx      fixed bottom contact bar
    LocationCard.jsx          Google Maps link card
    Icons.jsx                 shared SVG icons
  pages/
    Property.jsx               TO-LET / property page
    PrintingJobs.jsx            printing & job hub page
public/
  images/to-let-card.jpg       the sticker/card photo
```

## Notes

- Routing uses `HashRouter`, so page URLs look like
  `.../PrinceKing/#/printing-jobs`. This avoids needing a GitHub Pages
  404-redirect workaround for client-side routing.
- If you ever rename the GitHub repo, update `base` in `vite.config.js`
  to match the new repo name.
- Phone numbers, WhatsApp, and Telegram links live in
  `src/components/ContactActions.jsx` and `StickyContactBar.jsx` —
  update them in both places if they ever change.
