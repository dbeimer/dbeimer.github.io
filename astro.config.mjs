import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import bwLight from './src/themes/bw-light.json';
import bwDark from './src/themes/bw-dark.json';

export default defineConfig({
  integrations: [tailwind(), react()],
  site:'https://dbeimer.github.io/',
  markdown: {
    drafts: true,
    shikiConfig: {
      themes: {
        light: bwLight,
        dark: bwDark,
      },
      wrap: true,
    },
  }
});
