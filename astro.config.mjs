import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

const isProd = process.env.NODE_ENV === "production";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: "https://creativetimofficial.github.io",
  base: "/",
  adapter: cloudflare(),
});