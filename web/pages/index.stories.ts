import { Meta, StoryFn } from '@storybook/vue3';
import Index from './index.vue';

export default {
  title: 'pages/Index',
  component: Index,
} as Meta<typeof Index>;

const Template: StoryFn<typeof Index> = () => ({
  components: { Index },
  template: '<Index />',
});

export const Default = Template.bind({});
Default.args = {};
