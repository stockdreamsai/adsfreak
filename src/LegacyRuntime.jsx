import { useEffect } from "react";

const scripts = [
  {
    "src": "/legacy/script-001.js",
    "external": false
  },
  {
    "src": "/legacy/script-002.js",
    "external": false
  },
  {
    "src": "/legacy/script-003.js",
    "external": false
  },
  {
    "src": "/legacy/script-004.js",
    "external": false
  },
  {
    "src": "https://player.vimeo.com/api/player.js",
    "external": true
  },
  {
    "src": "/legacy/script-005.js",
    "external": false
  },
  {
    "src": "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js",
    "external": true
  },
  {
    "src": "/legacy/script-006.js",
    "external": false
  },
  {
    "src": "/legacy/script-007.js",
    "external": false
  },
  {
    "src": "/legacy/script-008.js",
    "external": false
  },
  {
    "src": "/legacy/script-009.js",
    "external": false
  },
  {
    "src": "/legacy/script-010.js",
    "external": false
  }
];

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const tag = document.createElement("script");
    tag.src = src;
    tag.async = false;
    tag.dataset.safLegacy = "1";
    tag.onload = () => resolve();
    tag.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(tag);
  });
}

export default function LegacyRuntime() {
  useEffect(() => {
    const root = document.getElementById("saf-app");
    const clickHandler = (event) => {
      const el = event.target.closest("[data-onclick]");
      if (!el || !root?.contains(el)) return;
      const code = el.getAttribute("data-onclick");
      if (!code) return;
      try {
        const result = Function("event", code).call(el, event);
        if (result === false) { event.preventDefault(); event.stopPropagation(); }
      } catch (error) {
        console.error("Legacy click handler failed", error);
      }
    };
    root?.addEventListener("click", clickHandler);

    if (!window.__SAF_LEGACY_LOADED__) {
      window.__SAF_LEGACY_LOADED__ = true;
      (async () => {
        for (const entry of scripts) {
          try { await loadScript(entry.src); }
          catch (error) { console.error(error); }
        }
      })();
    }

    return () => root?.removeEventListener("click", clickHandler);
  }, []);

  return null;
}
