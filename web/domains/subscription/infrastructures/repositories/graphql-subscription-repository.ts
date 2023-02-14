import { GraphqlClient } from '../../../../lib/graphql';
import { graphql } from '../../../../src/generated/gql';
import { SubscriptionRepository } from '../../../../composables/subscription-repository';

export class GraphQLSubscriptionRepository implements SubscriptionRepository {
  private static readonly client = GraphqlClient;

   // eslint-disable-next-line class-methods-use-this
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
    });

    return result.data.subscriptions;
  }
}

const r = new GraphQLSubscriptionRepository()
r.list();
