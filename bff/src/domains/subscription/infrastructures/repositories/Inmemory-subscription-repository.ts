import { Injectable } from '@nestjs/common';
import SubscriptionEntity, { SubscriptionDto } from '../../models/subscription';
import { SubscriptionRepository } from '../../usecases/subscription-repository';
import { randomUUID } from 'crypto';

@Injectable()
export class InmemorySubscriptionRepository implements SubscriptionRepository {
  static store: SubscriptionDto[] = [
    {
      id: randomUUID(),
      serviceName: 'Netflix',
      intervalAmount: 'MONTHLY',
      intervalValue: 1,
      price: 1490,
      firstPaymentDate: new Date('2022-12-01'),
    },
    {
      id: randomUUID(),
      serviceName: 'U-Next',
      intervalAmount: 'YEARLY',
      intervalValue: 2,
      price: 10500,
      firstPaymentDate: new Date('2022-12-03'),
    },
  ];

  async list(): Promise<SubscriptionEntity[]> {
    return InmemorySubscriptionRepository.store.map((subscriptionDto) =>
      SubscriptionEntity.fromDto(subscriptionDto),
    );
  }
}
