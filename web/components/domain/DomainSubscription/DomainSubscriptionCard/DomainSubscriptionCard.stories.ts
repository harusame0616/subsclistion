import type { Meta, StoryFn } from '@storybook/vue3';
import DomainSubscriptionCard from './DomainSubscriptionCard.vue';

export default {
  title: 'Domain/Subscription/Card',
  component: DomainSubscriptionCard,
} as Meta<typeof DomainSubscriptionCard>;

const Template: StoryFn<typeof DomainSubscriptionCard> = (args) => ({
  components: { DomainSubscriptionCard },
  setup() {
    return args;
  },
  template: '<DomainSubscriptionCard :subscription="subscription" />',
});

export const Daily = Template.bind({});
Daily.args = {
  subscription: {
    firstPaymentDate: '2021-01-01',
    id: 'id',
    intervalAmount: 'DAILY',
    intervalValue: 1,
    price: '1000',
    serviceName: 'Subsc-listion',
  },
};

export const Weekly = Template.bind({});
Weekly.args = {
  subscription: {
    firstPaymentDate: '2021-01-01',
    id: 'id',
    intervalAmount: 'WEEKLY',
    intervalValue: 1,
    price: '1000',
    serviceName: 'Subsc-listion',
  },
};

export const Monthly = Template.bind({});
Monthly.args = {
  subscription: {
    firstPaymentDate: '2021-01-01',
    id: 'id',
    intervalAmount: 'MONTHLY',
    intervalValue: 1,
    price: '1000',
    serviceName: 'Subsc-listion',
  },
};

export const Yearly = Template.bind({});
Yearly.args = {
  subscription: {
    firstPaymentDate: '2021-01-01',
    id: 'id',
    intervalAmount: 'YEARLY',
    intervalValue: 1,
    price: '1000',
    serviceName: 'Subsc-listion',
  },
};
