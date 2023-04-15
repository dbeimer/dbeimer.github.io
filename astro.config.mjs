import { defineConfig } from 'astro/config';
// import { imageHeroRemark } from './remark-hero-image.mjs';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  markdown: {
    drafts: true,
    // remarkPlugins: [imageHeroRemark]
  }
});
