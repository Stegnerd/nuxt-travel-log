import tailwindcss from "@tailwindcss/vite";

import "./app/lib/env";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },

  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  colorMode: {
    // needed for daisyui to see correct value and swap it
    dataValue: "theme",
  },
});
