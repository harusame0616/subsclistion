import postCssConfig from './postcss.config';
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [],
  css: ['~/assets/css/tailwind.css', '~/assets/css/style.css'],
  vite: {
    server: {
      proxy: {
        '/graphql': {
          target: 'http://localhost:3001/graphql',
        },
      },
    },
  },
  postcss: postCssConfig,
});
