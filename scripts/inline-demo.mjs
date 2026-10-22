// Inlines the built demo's JS and CSS into dashboard.html so the result is a
// single file. Usage: node scripts/inline-demo.mjs <dist dir> <output file>
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const [dist = "dist/demo", out = "demo/create-ad-demo.html"] = process.argv.slice(2);
let html = readFileSync(join(dist, "dashboard.html"), "utf8");
const scripts = [];

html = html.replace(/<link rel="stylesheet"[^>]*href="\.\/([^"]+)"[^>]*>/g, (_, file) =>
  `<style>\n${readFileSync(join(dist, file), "utf8")}</style>`);
// pull the module script out of <head>; it goes after #root at the end of <body>
html = html.replace(/\s*<script type="module"[^>]*src="\.\/([^"]+)"[^>]*><\/script>/g, (_, file) => {
  scripts.push(readFileSync(join(dist, file), "utf8").replace(/<\/script/g, "<\\/script"));
  return "";
});
// the favicon lives in /public, which the standalone file doesn't ship
html = html.replace(/\s*<link rel="icon"[^>]*>/, "");
html = html.replace("</body>", () => `${scripts.map((js) => `<script type="module">\n${js}</script>`).join("\n")}\n</body>`);

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, html);
console.log(`wrote ${out} (${Math.round(html.length / 1024)} KB)`);
