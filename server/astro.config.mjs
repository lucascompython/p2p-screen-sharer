import { defineConfig } from 'astro/config';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [(await import("@playform/compress")).default()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});