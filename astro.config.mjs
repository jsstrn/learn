// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/": "/guides/names",
  },
  integrations: [
    starlight({
      title: "Cloud Engineering",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/learn",
        },
      ],
      sidebar: [
        {
          label: "Introduction",
          autogenerate: { directory: "introduction" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
