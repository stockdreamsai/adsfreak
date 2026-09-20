# Social Ads Freak — React/Vite landing page

Converted from the original `new2.html` + `new2.css` package so the page can live in a normal GitHub codebase and be opened by visual/code tools that support React.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Vercel detects Vite automatically. Build command: `npm run build`; output directory: `dist`.

## Structure

- `src/components/` — major visual page blocks split into React components for easier visual editing.
- `src/styles.css` — original stylesheet.
- `public/images`, `public/videos`, `public/brand`, `public/captions` — original assets.
- `public/legacy/` — original interactive JavaScript, loaded after React mounts to preserve the existing animations/demos.
- `public/terms.html`, `privacy.html`, `disclaimer.html` — original legal pages.

## Builder + GitHub workflow

1. Push this folder to a GitHub repo.
2. Connect the React/Vite repo in Builder Projects.
3. Use GitHub as the source of truth. Commit/push after visual edits before asking Claude Code to change the same files.
4. Claude Code can work on the same repo; pull/reload Builder after Claude pushes changes.

## Same domain as an existing Vercel app

No problem. The cleanest setups are either:

- `example.com` = this landing page and `app.example.com` = the product app; or
- one primary Vercel project owns `example.com` and rewrites `/app/*` to the separate app project.

If both projects need the exact same hostname, use a routing/rewrite layer rather than attaching the exact same production domain independently to both projects.

Example front-door rewrite (replace the destination):

```json
{
  "rewrites": [
    { "source": "/app/:path*", "destination": "https://YOUR-APP.vercel.app/:path*" }
  ]
}
```

Do not add that rewrite until the app's production URL and desired public route are known.
