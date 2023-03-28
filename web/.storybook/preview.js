import '../assets/css/tailwind.css';
import '../assets/css/style.css';

import { app } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

app.component('NuxtLink', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to);
    },
  },
  template: '<a href="#" @click.prevent="log"><slot /></a>',
});
