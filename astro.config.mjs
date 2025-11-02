// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://learn.jesstern.com",

  redirects: {
    "/": "/introduction/philosophy/",
  },
  
  integrations: [
    starlight({
      title: "Cloud Engineering",
      favicon: "./favicon.ico",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/jsstrn/learn",
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
