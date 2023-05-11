import { CreateParam, SubscriptionEntity } from '../models/subscription';
import { SubscriptionRepository } from './subscription-repository';

type CreateSubscriptionParam = CreateParam;

export class SubscriptionCommandUsecase {
  constructor(private subscriptionRepository: SubscriptionRepository) {}

  async listSubscription() {
    const subscriptions = await this.subscriptionRepository.list();

    return subscriptions.map((subscription) => subscription.toDto());
  }

  async createSubscription(createSubscriptionParam: CreateSubscriptionParam) {
    const newSubscription = SubscriptionEntity.create(createSubscriptionParam);

    await this.subscriptionRepository.save(newSubscription);
    return newSubscription.id;
  }

  async changeServiceName(subscriptionId: string, newServiceName: string) {
    const subscription = await this.subscriptionRepository.getById(
      subscriptionId,
    );

    subscription.changeServiceName(newServiceName);

    await this.subscriptionRepository.save(subscription);
    return subscription.toDto();
  }
}
