import { NewSubscription } from '~/domains/subscription/types/subscription-types';
import { GetSubscriptionListQuery } from '~/src/generated/gql/graphql';

export type { IntervalAmount, Subscription } from '~/src/generated/gql/graphql';

const subscriptionRepository = getRepository('Subscription');
export const useSubscriptionList = () => {
  const isLoading = ref(false);

  const query = gql`
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
  `.loc?.source.body;

  const { data, refresh, pending, error } = useLazyFetch<{
    data: GetSubscriptionListQuery;
  }>('http://localhost:3001/graphql', {
    method: 'POST',
    body: {
      query,
    },
  });

  const createSubscription = async (subscription: NewSubscription) => {
    isLoading.value = true;

    const subscriptionId = await subscriptionRepository.create(subscription);
    await refresh();

    isLoading.value = false;
    return subscriptionId;
  };

  return {
    subscriptions: computed(() => data.value?.data.subscriptions ?? []),
    isSubscriptionsLoading: computed(() => isLoading.value || pending.value),
    refresh,
    createSubscription,
    error,
  };
};
