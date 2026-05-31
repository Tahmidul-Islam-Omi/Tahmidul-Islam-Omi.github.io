// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Root user site (Tahmidul-Islam-Omi.github.io) is served at the domain
  // root, so we set `site` and need NO `base` path. Used for canonical URLs
  // and Open Graph tags.
  site: "https://tahmidul-islam-omi.github.io",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
