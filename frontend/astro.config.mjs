import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import astroI18next from "astro-i18next";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://industrialtransformation.mx",
  integrations: [tailwind(), react(), astroI18next(), sitemap({
    i18n: {
      defaultLocale: "es",
      locales: {
        en: "en",
        es: "es"
      }
    }
  })]
});