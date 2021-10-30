import pluginMetaUrl from "@uppercod/vite-meta-url";
import loadCss from "@uppercod/vite-meta-url-load-css";

import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    jsxFactory: "_jsx",
    jsxInject: `import {h as _jsx, css as _css} from 'atomico'`
  },
  build: {
    target: "esnext"
  },
  plugins: [
    pluginMetaUrl({ css: loadCss(), md: true })
  ]
})
