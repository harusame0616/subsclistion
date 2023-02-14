import { Inject } from '@nestjs/common';
import * as Schema from '../../../generated/resolvers-types';
import { SubscriptionConstant } from '../subscription.constant';
import { Resolver, Query } from '@nestjs/graphql';
import { SubscriptionRepository } from '../usecases/subscription-repository';
import { SubscriptionQueryUsecase } from '../usecases/subscription-query-usecase';

@Resolver('Subscription')
export class SubscriptionResolver {
  subscriptionQueryUsecase: SubscriptionQueryUsecase;
  constructor(
    @Inject(SubscriptionConstant.SubscriptionRepositoryDIToken)
    subscriptionRepository: SubscriptionRepository,
  ) {
    this.subscriptionQueryUsecase = new SubscriptionQueryUsecase(
      subscriptionRepository,
    );
  }

  @Query()
  async subscriptions(): Promise<Schema.Query['subscriptions']> {
    const subscriptions =
      await this.subscriptionQueryUsecase.listSubscription();

    return subscriptions.map((subscription) => ({
      ...subscription,
      firstPaymentDate: subscription.firstPaymentDate.toISOString(),
    }));
  }
}
