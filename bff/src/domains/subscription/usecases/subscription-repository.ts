import SubscriptionEntity from '../models/subscription';

export type SubscriptionRepository = {
  list(): Promise<SubscriptionEntity[]>;
};
