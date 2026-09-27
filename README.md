# Social Ads Freak — Landing Page (redesign/simple)

Clean rebuild of the sales page on the stockdreams.ai blueprint: same block order and
element types, white layout, one purple→pink accent, Social Ads Freak content.

```bash
npm install && npm run dev   # http://localhost:5173
npm run build                # dist/
```

- `src/App.jsx` — section order
- `src/sections/*.jsx` — one small component per block
- `src/ui.jsx` — shared pieces + launch settings (`CHECKOUT_URL`, `VSL_EMBED_URL`, `PRICE`)
- `src/styles.css` — the whole stylesheet (~330 lines)
