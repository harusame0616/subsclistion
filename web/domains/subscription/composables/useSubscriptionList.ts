import {
  NewSubscription,
  Subscription,
} from '~/domains/subscription/types/subscription-types';

export type { IntervalAmount, Subscription } from '~/src/generated/gql/graphql';

const subscriptionRepository = getRepository('Subscription');
export const useSubscriptionList = () => {
  const isLoading = ref(false);

  const {
    data: subscriptions,
    refresh: refreshSubscriptions,
    pending,
  } = useLazyAsyncData<Subscription[]>('subscriptions', () =>
    subscriptionRepository.list()
  );

  const createSubscription = async (subscription: NewSubscription) => {
    isLoading.value = true;

    const subscriptionId = await subscriptionRepository.create(subscription);
    await refreshSubscriptions();

    isLoading.value = false;
    return subscriptionId;
  };

  return {
    subscriptions,
    isSubscriptionsLoading: computed(() => isLoading.value || pending.value),
    refreshSubscriptions,
    createSubscription,
  };
};
