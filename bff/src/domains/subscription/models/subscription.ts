import { randomUUID } from 'crypto';

export type IntervalAmount = 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';

export type ConstructorParam = {
  id: string;
  intervalAmount: IntervalAmount;
  intervalValue: number;
  serviceName: string;
  price: number;
  firstPaymentDate: Date;
};

export type CreateParam = Omit<ConstructorParam, 'id'>;

export type SubscriptionDto = ConstructorParam;

export default class SubscriptionEntity {
  private constructor(private param: ConstructorParam) {}

  static create(createParam: CreateParam) {
    return new SubscriptionEntity({
      ...createParam,
      id: randomUUID(),
    });
  }

  get serviceName() {
    return this.param.serviceName;
  }

  get intervalValue() {
    return this.param.intervalValue;
  }

  get intervalAmount() {
    return this.param.intervalAmount;
  }

  get price() {
    return this.param.price;
  }

  get firstPaymentDate() {
    return this.param.firstPaymentDate;
  }

  toDto() {
    return { ...this.param };
  }

  static fromDto(dto: SubscriptionDto) {
    return new SubscriptionEntity({ ...dto });
  }
}
