import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://n-seine.github.io",
  base: "frontend-mentor-newsletter",
  integrations: [tailwind()],
});
