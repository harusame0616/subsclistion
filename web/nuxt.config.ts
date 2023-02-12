// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  vite: {
    server: {
      proxy: {
        '/graphql': {
          target: 'http://localhost:3001/graphql',
        },
      },
    },
  },
});
