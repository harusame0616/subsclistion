/* eslint-disable class-methods-use-this */
import { SubscriptionRepository } from '../../../../composables/subscription-repository';
import { GraphqlClient } from '../../../../lib/graphql';
import { graphql } from '../../../../src/generated/gql';
import { MutationCreateSubscriptionArgs } from '../../../../src/generated/gql/graphql';

export class GraphQLSubscriptionRepository implements SubscriptionRepository {
  private static readonly client = GraphqlClient;

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

  async create(
    subscription: MutationCreateSubscriptionArgs['createSubscriptionInput']
  ): Promise<string> {
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
