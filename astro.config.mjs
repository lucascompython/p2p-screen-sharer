import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://lucascompython.github.io",
  base: "p2p-screen-sharer",
  integrations: [(await import("@playform/compress")).default()],
});
