import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as Schema from '../../../generated/resolvers-types';
import { SubscriptionConstant } from '../subscription.constant';
import { SubscriptionCommandUsecase } from '../usecases/subscription-command-usecase';
import { SubscriptionQueryUsecase } from '../usecases/subscription-query-usecase';
import { SubscriptionRepository } from '../usecases/subscription-repository';

@Resolver('Subscription')
export class SubscriptionResolver {
  subscriptionQueryUsecase: SubscriptionQueryUsecase;
  subscriptionCommandUsecase: SubscriptionCommandUsecase;

  constructor(
    @Inject(SubscriptionConstant.SubscriptionRepositoryDIToken)
    subscriptionRepository: SubscriptionRepository,
  ) {
    this.subscriptionQueryUsecase = new SubscriptionQueryUsecase(
      subscriptionRepository,
    );

    this.subscriptionCommandUsecase = new SubscriptionCommandUsecase(
      subscriptionRepository,
    );
  }

  @Query()
  async subscriptions(): Promise<Schema.Query['subscriptions']> {
    const subscriptions =
      await this.subscriptionQueryUsecase.listSubscription();
    return subscriptions;
  }

  @Mutation()
  async createSubscription(
    @Args() { createSubscriptionInput }: Schema.MutationCreateSubscriptionArgs,
  ): Promise<Schema.Mutation['createSubscription']> {
    const newSubscriptionId =
      await this.subscriptionCommandUsecase.createSubscription({
        ...createSubscriptionInput,
        firstPaymentDate: new Date(createSubscriptionInput.firstPaymentDate),
      });

    return newSubscriptionId;
  }

  @Mutation()
  async changeSubscriptionServiceName(
    @Args()
    {
      subscriptionId,
      newServiceName,
    }: Schema.MutationChangeSubscriptionServiceNameArgs,
  ): Promise<Schema.Mutation['changeSubscriptionServiceName']> {
    const subscription =
      await this.subscriptionCommandUsecase.changeServiceName(
        subscriptionId,
        newServiceName,
      );

    return subscription;
  }
}
