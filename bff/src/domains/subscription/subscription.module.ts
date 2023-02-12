import { Module } from '@nestjs/common';
import { SubscriptionResolver } from './presentations/subscription.resolver';
import { SubscriptionConstant } from './subscription.constant';
import { InmemorySubscriptionRepository } from './infrastructures/repositories/Inmemory-subscription-repository';

@Module({
  imports: [],
  providers: [
    SubscriptionResolver,
    {
      provide: SubscriptionConstant.SubscriptionRepositoryDIToken,
      useClass: InmemorySubscriptionRepository,
    },
  ],
})
export class SubscriptionModule {}
