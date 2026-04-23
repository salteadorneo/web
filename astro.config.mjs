import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://salteadorneo.dev',
  integrations: [sitemap({
    filter: (page) => ![
      'https://salteadorneo.dev/mvp1/',
      'https://salteadorneo.dev/mvp2/',
      'https://salteadorneo.dev/mvp3/',
      'https://salteadorneo.dev/vs-lovable/',
      'https://salteadorneo.dev/system-design/',
    ].includes(page),
  })],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/blog': {
      status: 301,
      destination: '/'
    }
  }
});