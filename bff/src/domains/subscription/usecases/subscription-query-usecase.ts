import { SubscriptionRepository } from './subscription-repository';

export class SubscriptionQueryUsecase {
  constructor(private subscriptionRepository: SubscriptionRepository) {}

  async listSubscription() {
    const subscriptions = await this.subscriptionRepository.list();

    return subscriptions.map((subscription) => subscription.toDto());
  }
}
