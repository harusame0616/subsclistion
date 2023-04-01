import type { Meta, StoryFn } from '@storybook/vue3';
import CaseCardWithTitle from './CaseCardWithTitle.vue';

export default {
  title: 'CaseCardWithTitle',
  component: CaseCardWithTitle,
} as Meta<typeof CaseCardWithTitle>;

const Template: StoryFn<typeof CaseCardWithTitle> = () => ({
  components: { CaseCardWithTitle },
  template:
    '<CaseCardWithTitle><template #title>title</template><template #default>content</template></CaseCardWithTitle>',
});

export const Default = Template.bind({});
Default.args = {};
