import type { Meta, StoryFn } from '@storybook/vue3';
import BaseCard from './BaseCard.vue';

export default {
  title: 'BaseCard',
  component: BaseCard,
} as Meta<typeof BaseCard>;

const Template: StoryFn<typeof BaseCard> = () => ({
  components: { BaseCard },
  template: '<BaseCard> Base Card </BaseCard>',
});

export const Default = Template.bind({});
Default.args = {};
