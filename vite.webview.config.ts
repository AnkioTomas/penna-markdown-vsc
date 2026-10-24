import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  build: {
    outDir: "dist/webview",
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, "src/webview/main.ts"),
      output: {
        format: "es",
        entryFileNames: "main.js",
        assetFileNames: "main.[ext]",
      },
    },
    sourcemap: false,
    minify: false,
  },
});
