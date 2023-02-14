import SubscriptionEntity from '../models/subscription';

export type SubscriptionRepository = {
  list(): Promise<SubscriptionEntity[]>;
  save(subscription: SubscriptionEntity): Promise<void>;
};
