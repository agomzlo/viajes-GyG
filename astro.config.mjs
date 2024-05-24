import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";
// import VitePWA from 'vite-plugin-pwa';

import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'always'
  },
  compressHTML: true,
  prefetch: true,
  integrations: [tailwind(), db(), react()],
  output: 'server',
  adapter: vercel()
});