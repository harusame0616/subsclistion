import type { Subscription } from '~~/src/generated/gql/graphql';

export type { Subscription };

export type SubscriptionRepository = {
  list(): Promise<Subscription[]>;
};
