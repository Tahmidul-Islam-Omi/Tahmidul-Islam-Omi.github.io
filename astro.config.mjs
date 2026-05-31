// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // NOTE: set `site` to your final URL (e.g. https://<username>.github.io)
  // in Phase 5 when we configure GitHub Pages. Needed for correct canonical
  // URLs and Open Graph tags.
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
