import {
  NewSubscription,
  Subscription,
} from '../domains/subscription/types/subscription-types';
import { getRepository } from '../lib/injection';

export type {
  IntervalAmount,
  Subscription,
} from '~~/src/generated/gql/graphql';
const subscriptionRepository = getRepository('Subscription');

export const useSubscriptionList = () => {
  const list = ref<Subscription[]>([]);
  const isLoading = ref(false);

  const refresh = async () => {
    isLoading.value = true;

    const subscriptions = await subscriptionRepository.list();
    list.value = subscriptions;

    isLoading.value = false;
  };

  const create = async (subscription: NewSubscription) => {
    isLoading.value = true;

    const subscriptionId = await subscriptionRepository.create(subscription);
    await refresh();

    isLoading.value = false;
    return subscriptionId;
  };

  refresh();

  return {
    list,
    isLoading,
    refresh,
    create,
  };
};
