import type { Meta, StoryFn } from '@storybook/vue3';
import DomainSubscriptionCardList from './DomainSubscriptionCardList.vue';

export default {
  title: 'Domain/Subscription/CardList',
  component: DomainSubscriptionCardList,
} as Meta<typeof DomainSubscriptionCardList>;

const Template: StoryFn<typeof DomainSubscriptionCardList> = (args) => ({
  components: { DomainSubscriptionCardList },
  setup() {
    return { args };
  },
  template: '<DomainSubscriptionCardList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  subscriptions: [
    {
      firstPaymentDate: '2021-01-01',
      id: 'id1',
      intervalAmount: 'WEEKLY',
      intervalValue: 1,
      price: '1000',
      serviceName: 'Subsc-listion',
    },
    {
      firstPaymentDate: '2021-01-01',
      id: 'id2',
      intervalAmount: 'WEEKLY',
      intervalValue: 1,
      price: '1000',
      serviceName: 'Subsc-listion',
    },
    {
      firstPaymentDate: '2021-01-01',
      id: 'id3',
      intervalAmount: 'WEEKLY',
      intervalValue: 1,
      price: '1000',
      serviceName: 'Subsc-listion',
    },
    {
      firstPaymentDate: '2021-01-01',
      id: 'id4',
      intervalAmount: 'WEEKLY',
      intervalValue: 1,
      price: '1000',
      serviceName: 'Subsc-listion',
    },
  ],
};
