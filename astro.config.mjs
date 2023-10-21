import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import vercel from '@astrojs/vercel/serverless';


import tailwind from "@astrojs/tailwind";

const config = {
  site: 'https://www.rohi.dev',
  integrations: [mdx(), sitemap(), react(), tailwind({
    applyBaseStyles: false,
  })],
  build: {incremental: true},
  output: 'server',
  adapter: vercel(),
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: 'rose-pine-moon',
      wrap: true
    }
  }
}

// https://astro.build/config
export default defineConfig(config);