import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

import robotsTxt from "astro-robots-txt";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  site: "https://www.ajzliu.com",
  integrations: [
    tailwind(),
    astroImageTools,
    sitemap(),
    prefetch(),
    robotsTxt(),
    compress({
      img: false,
    }),
  ],
});
