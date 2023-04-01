/* eslint-disable class-methods-use-this */
import { graphql } from '../../../src/generated/gql';
import {
  CreateParam,
  SubscriptionRepository,
} from '../composables/subscription-repository';

export class GraphQLSubscriptionRepository implements SubscriptionRepository {
  private static readonly client = getGraphqlClient();

  async list() {
    const getSubscriptionListQuery = graphql(`
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
    `);

    const result = await GraphQLSubscriptionRepository.client.query({
      query: getSubscriptionListQuery,
      fetchPolicy: 'no-cache',
    });

    return result.data.subscriptions;
  }

  async create(subscription: CreateParam): Promise<string> {
    const createSubscription = graphql(`
      mutation CreateSubscription(
        $createSubscriptionInput: CreateSubscriptionInput!
      ) {
        createSubscription(createSubscriptionInput: $createSubscriptionInput)
      }
    `);

    const result = await GraphQLSubscriptionRepository.client.mutate({
      mutation: createSubscription,
      variables: {
        createSubscriptionInput: subscription,
      },
    });

    if (!result.data || result.errors?.length) {
      throw new Error();
    }

    return result.data.createSubscription;
  }
}
