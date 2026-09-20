# Social Ads Freak — Landing Page

Long-form sales landing page for **Social Ads Freak**, built as a Vite + React app so it
can be edited visually with **Builder.io** and maintained through GitHub + Claude Code.

Design + section flow follow the proven StockDreams.ai sales-page structure, filled with
the real Social Ads Freak content (videos, avatars, copy, value stack, bonuses).

## Run locally

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build to dist/
```

## Structure

- `src/App.jsx` — page composition (section order lives here)
- `src/sections/*.jsx` — one component per landing-page section
- `src/components/Shared.jsx` — CTA button, section title, video frame, typed-words effect
- `src/styles.css` — design tokens (colors, gradients) + all section styles
- `public/` — local images/videos; large media served from CloudFront

## Before launch

- Replace `CHECKOUT_URL` in `src/components/Shared.jsx` with the real JVZoo/checkout link
  (currently `#buy`, which scrolls to the pricing box).
