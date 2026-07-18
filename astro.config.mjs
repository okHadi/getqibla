import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://getqibla.com',
  output: 'static',
  build: {
    format: 'directory',
  },
});
