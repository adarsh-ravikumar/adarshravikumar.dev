import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.adarshravikumar.dev",
  markdown: {
    shikiConfig: {
      themes: {
        light: "gruvbox-light-medium",
        dark: "gruvbox-dark-medium",
      },
    },
  },
});
