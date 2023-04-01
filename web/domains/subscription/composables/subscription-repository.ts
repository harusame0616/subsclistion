import type {
  MutationCreateSubscriptionArgs,
  Subscription,
} from '~/src/generated/gql/graphql';

export type { Subscription };

export type CreateParam =
  MutationCreateSubscriptionArgs['createSubscriptionInput'];

export type SubscriptionRepository = {
  list(): Promise<Subscription[]>;
  create(subscription: CreateParam): Promise<string>;
};
