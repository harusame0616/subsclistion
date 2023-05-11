import { Subscription } from '~/domains/subscription/types/subscription-types';
import {
  ChangeServiceNameMutation,
  ChangeServiceNameMutationVariables,
} from '~/src/generated/gql/graphql';

export type { IntervalAmount, Subscription } from '~/src/generated/gql/graphql';

type UseSubscriptionArgs = {
  initialSubscription: Subscription;
};

export const useSubscriptionEdit = ({
  initialSubscription,
}: UseSubscriptionArgs) => {
  const subscription = ref({ ...initialSubscription });
  const subscriptionId = initialSubscription.id;

  const { mutate, loading } = useMutation<
    ChangeServiceNameMutation,
    ChangeServiceNameMutationVariables
  >(
    gql`
      mutation ChangeSubscriptionServiceName(
        $subscriptionId: String!
        $newServiceName: String!
      ) {
        changeSubscriptionServiceName(
          subscriptionId: $subscriptionId
          newServiceName: $newServiceName
        ) {
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

  const changeServiceName = async (serviceName: string) => {
    const result = await mutate({
      subscriptionId,
      newServiceName: serviceName,
    });

    if (result?.errors || !result?.data) {
      return;
    }

    subscription.value = result.data.changeSubscriptionServiceName;
  };

  return {
    subscription,
    isProcessing: computed(() => loading.value),
    changeServiceName,
  };
};
