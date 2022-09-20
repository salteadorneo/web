import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(),tailwind()],
  output: "server",
  adapter: cloudflare({ mode: "directory" })
});