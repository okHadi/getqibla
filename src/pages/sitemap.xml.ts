import type { APIRoute } from 'astro';
import { articles } from '../content/articles';
import { qiblaCities } from '../content/cities';
import { localeCodes, localePaths } from '../i18n';
import { SITE_URL } from '../config';

const siteUrl = SITE_URL;
const escapeXml = (value: string) => value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&apos;');

export const GET: APIRoute = () => {
  const homeAlternates = localeCodes.map((code) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${escapeXml(new URL(localePaths[code],siteUrl).toString())}" />`).join('\n');
  const homeUrls = localeCodes.map((code) => `  <url>\n    <loc>${escapeXml(new URL(localePaths[code],siteUrl).toString())}</loc>\n${homeAlternates}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(new URL('/',siteUrl).toString())}" />\n  </url>`);
  const articleUrls = articles.map((article) => `  <url><loc>${escapeXml(new URL(`/${article.slug}/`,siteUrl).toString())}</loc><lastmod>2026-07-18</lastmod></url>`);
  const cityUrls = qiblaCities.map((city) => `  <url><loc>${escapeXml(new URL(`/qibla-direction/${city.slug}/`,siteUrl).toString())}</loc><lastmod>2026-07-18</lastmod></url>`);
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${[...homeUrls,...articleUrls,...cityUrls].join('\n')}\n</urlset>`;
  return new Response(body,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
};
