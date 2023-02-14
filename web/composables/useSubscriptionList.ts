import { getRepository } from '../lib/injection';
import { Subscription } from './subscription-repository';

export type { IntervalAmount } from '~~/src/generated/gql/graphql';
const subscriptionRepository = getRepository('Subscription');

export const useSubscriptionList = () => {
  const list = ref<Subscription[]>([]);
  const isLoading = ref(false);

  const refresh = async () => {
    isLoading.value = true;

    const subscriptions = await subscriptionRepository.list();
    list.value = subscriptions;
  };

  refresh();

  return {
    list,
    isLoading,
    refresh,
  };
};
