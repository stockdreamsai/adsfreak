# Create Ad — 2026 redesign demo

**Open `create-ad-demo.html`** (double-click, works offline). It is one self-contained
file: send it to anyone as is.

Source lives in `src/dashboard/` and runs with the rest of the site:

```bash
npm install && npm run dev        # http://localhost:5173/dashboard.html
npm run build:demo                # rebuilds demo/create-ad-demo.html
```

## What changed vs. the current screen

| Before | After |
| --- | --- |
| 4 crowded columns, the form scrolls under the fold | One guided column (4 numbered steps) + a sticky live preview |
| Text dropdowns ("Select an avatar…", "Let AI decide…") | Photo pickers: template cards, faces, voice cards with waveforms, flags, caption-style thumbnails, format shapes |
| Generate button hidden halfway down the form | Generate sits under the phone preview, always visible, with cost and balance after |
| MAX features shown as one small badge | Every MAX feature is visible in context with a gold lock; one tap opens the upgrade sheet |
| Blue accents, emoji nav icons | Brand from the sales + MAX pages: purple→pink gradient, navy night sky, neon grid floor, gold for MAX |

## Things to try

- Hover a template: the phone "peeks" at it before you pick.
- Click a template or tile with a gold lock → upgrade sheet → **Upgrade to MAX** unlocks everything.
- The **Demo** switch (bottom-left) flips the whole screen between Standard and MAX.
- Turn on Variant Factory + Priority render (MAX), then **Generate**: queue → render steps → confetti → scored variants.
- Switch format to 16:9 or 1:1 and watch the phone reshape.
- `⌘K` / `Ctrl+K` opens search for templates and actions. The sun/moon icon toggles light mode.
- Narrow the window: the nav becomes an icon rail, then a drawer; on phones the preview opens as a sheet.

## For developers

- `data.js` — every list on the screen (templates, avatars, voices, token prices, which features are MAX-only).
- `dashboard.css` — the design tokens are at the top (`:root` = dark, light overrides below), then one block per area.
- `Builder.jsx` (the 4 steps + power-ups), `Stage.jsx` (live preview + generate), `App.jsx` (state, nav, top bar, upgrade sheet, search).
- Everything is mock data; nothing calls an API.
