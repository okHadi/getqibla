import { defineConfig } from 'astro/config';

const configuredSite = process.env.PUBLIC_SITE_URL || 'https://getqibla.app';

export default defineConfig({
  site: configuredSite,
  output: 'static',
  build: {
    format: 'directory',
  },
});
