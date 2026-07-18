import type { APIRoute } from 'astro';

const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://getqibla.app';

export const GET: APIRoute = () => {
  const sitemapUrl = new URL('/sitemap.xml', siteUrl).toString();
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
