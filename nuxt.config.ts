// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/image-edge", "@nuxtjs/tailwindcss"],
  content: {
    documentDriven: true,
  },
  experimental: { reactivityTransform: true },
});
