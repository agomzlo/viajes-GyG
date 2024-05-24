import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";
// import VitePWA from 'vite-plugin-pwa';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'always',
  },
  compressHTML: true,
  prefetch: true,
  integrations: [tailwind(), db(), react()],
  output: 'server',

  // vite: {
  //   plugins: [
  //     VitePWA({
  //       manifest: {
  //         display: 'standalone',
  //         display_override: ['window-controls-overlay'],
  //         lang: 'es-ES',
  //         name: 'Viajes GyG',
  //         short_name: 'Viajes GyG',
  //         description: 'Planea tu viaje con Viajes GyG',
  //         background_color: '#fff',
  //         icons: [
  //           {
  //             src: '/favicon.png',
  //             sizes: '192x192',
  //             type: 'image/png',
  //           },
  //           {
  //             src: '/favicon.png',
  //             sizes: '512x512',
  //             type: 'image/png',
  //           },
  //         ]
  //       }
  //     })
  //   ],
  // }
});