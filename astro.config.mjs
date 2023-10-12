import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import vercel from '@astrojs/vercel/serverless';


import tailwind from "@astrojs/tailwind";

const config = {
  site: 'https://rohi.dev',
  integrations: [mdx(), sitemap(), react(), tailwind({
    applyBaseStyles: false,
  })],
  build: {incremental: true},
  output: 'server',
  adapter: vercel(),
}

// https://astro.build/config
export default defineConfig(config);