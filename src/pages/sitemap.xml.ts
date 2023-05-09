import { CollectionEntry, getCollection } from 'astro:content';

export async function get() {
  const posts = await getCollection("blog");

  posts.sort((a, b) => {
    return b.data.publishedDate - a.data.publishedDate;
  });

  return {
    body: await generateSitemapXml({ posts, site: { url: import.meta.env.SITE } })
  }
}

async function generateSitemapXml({ posts, site }: { posts: CollectionEntry<"blog">[], site: { url: string} }) {
  const lastMod = posts.length > 0 ? posts[0].data.publishedDate.toISOString() : new Date().toISOString();

  return `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <url>
        <loc>${site.url}</loc>
        <lastmod>${lastMod}</lastmod>
        <priority>1.00</priority>
    </url>
    <url>
        <loc>${site.url}/blog</loc>
        <lastmod>${lastMod}</lastmod>
        <priority>0.90</priority>
    </url>
    ${posts.map((post:any) => {
      const loc = new URL(`/${post.collection}/${post.slug}`, site.url).href;
      return `
      <url>
          <loc>${loc}</loc>
          <lastmod>${post.data.publishedDate.toISOString()}</lastmod>
          <priority>0.80</priority>
      </url>
      `.trim();
    }).join("")}
    </urlset>
`.trim();
}