import { defineConfig, type AstroUserConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

const config: AstroUserConfig = {
  site: "https://rohi.dev",
  integrations: [
    mdx(),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  experimental: {
    contentCollectionCache: true,
    optimizeHoistedScript: true,
  },
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "rose-pine-moon",
      wrap: true,
    },
  },
};

// https://astro.build/config
export default defineConfig(config);
