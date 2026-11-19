import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://salteadorneo.dev',
  integrations: [sitemap({
    filter: (page) => ![
      'https://salteadorneo.dev/mvp1/',
      'https://salteadorneo.dev/mvp2/',
      'https://salteadorneo.dev/mvp3/',
      'https://salteadorneo.dev/vs-lovable/',
      'https://salteadorneo.dev/system-design/'
    ].includes(page)
  })],
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    shikiConfig: {
      theme: 'tokyo-night'
    }
  },
  redirects: {
    '/base64': '/tool/base64',
    '/case': '/tool/case',
    '/color': '/tool/color',
    '/console': '/tool/console',
    '/cron': '/tool/cron',
    '/diff': '/tool/diff',
    '/hash': '/tool/hash',
    '/json': '/tool/json',
    '/jwt': '/tool/jwt',
    '/lipsum': '/tool/lipsum',
    '/markdown': '/tool/markdown',
    '/pass': '/tool/pass',
    '/random': '/tool/random',
    '/regex': '/tool/regex',
    '/slug': '/tool/slug',
    '/timestamp': '/tool/timestamp',
    '/url': '/tool/url',
    '/uuid': '/tool/uuid'
  }
})
