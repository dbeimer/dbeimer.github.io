import { defineConfig } from 'astro/config';
// import { imageHeroRemark } from './remark-hero-image.mjs';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site:'https://dbeimer.github.io/page',
  // base:'/page',
  markdown: {
    drafts: true,
    // remarkPlugins: [imageHeroRemark]
  }
});
