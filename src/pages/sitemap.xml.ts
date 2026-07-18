import type { APIRoute } from 'astro';

const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://getqibla.app';

export const GET: APIRoute = () => {
  const url = new URL('/', siteUrl).toString();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${url}</loc>
  </url>
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
