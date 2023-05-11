import postCssConfig from './postcss.config';
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['nuxt-vitest', '@nuxtjs/apollo'],
  css: ['~/assets/css/tailwind.css', '~/assets/css/style.css'],
  postcss: postCssConfig,
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:3001/graphql',
      },
    },
  },
  runtimeConfig: {
    public: {
      mock: true,
    },
  },
});
