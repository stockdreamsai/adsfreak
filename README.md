# AdsFreak — Landing Page

Long-form sales landing page for **AdsFreak**, built as a Vite + React app so it can be
edited visually with **Builder.io** and maintained through GitHub + Claude Code.

The section order mirrors the proven StockDreams.ai sales page structure.

## Run locally

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build to dist/
```

## Structure

- `src/App.jsx` — page composition (section order lives here)
- `src/sections/*.jsx` — one component per landing-page section
- `src/components/Shared.jsx` — CTA button, section title, media placeholder
- `src/styles.css` — design tokens (colors, gradients) + all section styles

## Connect to Builder.io

1. In Builder.io, create/open a **Project** (Fusion) and connect this GitHub repo.
2. Builder will run `npm install` and `npm run dev` to preview the app.
3. Each section is a small standalone component, so visual edits map to clean diffs.

## Before launch — replace placeholders

Search the code for `PLACEHOLDER` and `[` brackets:

- **Videos**: hero VSL + demo video (`Hero.jsx`, `WatchDemo.jsx`)
- **Images**: every `MediaPlaceholder` → real screenshots/mockups
- **Testimonials & success stories**: use only real, verifiable customer quotes
- **Stats** (`StatsBand.jsx`): use your real numbers
- **Bonuses** (`Bonuses.jsx`): your real bonus stack
- **Checkout link**: `PricingBox.jsx` buy button + `CTAButton` default `href`
- **Footer links**: privacy/terms/disclaimer/support pages
