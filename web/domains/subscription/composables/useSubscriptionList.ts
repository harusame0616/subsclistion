import { NewSubscription } from '~/domains/subscription/types/subscription-types';
import { GetSubscriptionListQuery } from '~/src/generated/gql/graphql';

export type { IntervalAmount, Subscription } from '~/src/generated/gql/graphql';

const subscriptionRepository = getRepository('Subscription');
export const useSubscriptionList = () => {
  const isLoading = ref(false);

  const {
    data,
    refresh: refreshSubscriptions,
    error,
    pending,
  } = useLazyAsyncQuery<GetSubscriptionListQuery>(
    gql`
      query GetSubscriptionList {
        subscriptions {
          id
          price
          serviceName
          intervalValue
          intervalAmount
          firstPaymentDate
        }
      }
    `
  );

  const createSubscription = async (subscription: NewSubscription) => {
    isLoading.value = true;

    const subscriptionId = await subscriptionRepository.create(subscription);
    await refreshSubscriptions();

    isLoading.value = false;
    return subscriptionId;
  };

  return {
    subscriptions: computed(() => data.value?.subscriptions ?? []),
    isSubscriptionsLoading: computed(() => isLoading.value || pending.value),
    refreshSubscriptions,
    createSubscription,
    error,
  };
};
