import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { SubscriptionDto, SubscriptionEntity } from '../../models/subscription';
import { SubscriptionRepository } from '../../usecases/subscription-repository';

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

  async save(subscription: SubscriptionEntity) {
    InmemorySubscriptionRepository.store.push(subscription.toDto());
  }

  async getById(subscriptionId: string): Promise<SubscriptionEntity> {
    const subscriptionDto = InmemorySubscriptionRepository.store.find(
      (subscriptionDto) => subscriptionDto.id === subscriptionId,
    );

    if (!subscriptionDto) {
      throw new NotFoundException('ID');
    }
    return SubscriptionEntity.fromDto(subscriptionDto);
  }
}
