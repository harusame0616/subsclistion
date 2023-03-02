import AmplifyVue from '@aws-amplify/ui-vue';

export default defineNuxtPlugin((app) => {
  app.vueApp.use(AmplifyVue);
});
