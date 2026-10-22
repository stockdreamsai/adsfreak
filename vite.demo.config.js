// Builds the Create Ad demo as ONE self-contained HTML file (scripts, styles
// and images inlined) that opens with a double-click and can be sent as is.
// Run: npx vite build --config vite.demo.config.js && node scripts/inline-demo.mjs
//   →  demo/create-ad-demo.html
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  base: "./",
  publicDir: false,
  build: {
    outDir: "dist/demo",
    emptyOutDir: true,
    assetsInlineLimit: 100_000_000,
    cssCodeSplit: false,
    modulePreload: false,
    rollupOptions: { input: resolve(__dirname, "dashboard.html") },
  },
});
