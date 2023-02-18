import { randomUUID } from 'crypto';
import { BadParameterError } from '../../../errors/bad-parameter';

export const intervalAmountList = [
  'DAILY',
  'WEEKLY',
  'MONTHLY',
  'YEARLY',
] as const;
export type IntervalAmount = (typeof intervalAmountList)[number];

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

export class SubscriptionEntity {
  private constructor(private param: ConstructorParam) {}

  static create(createParam: CreateParam) {
    SubscriptionEntity.validateIntervalValue(createParam.intervalValue);
    SubscriptionEntity.validatePrice(createParam.price);
    SubscriptionEntity.validateServiceName(createParam.serviceName);
    SubscriptionEntity.validateFirstPaymentDate(createParam.firstPaymentDate);

    return new SubscriptionEntity({
      ...createParam,
      id: randomUUID(),
    });
  }

  get id() {
    return this.param.id;
  }

  get serviceName() {
    return this.param.serviceName;
  }

  static validateServiceName(serviceName: string) {
    const MIN_SERVICE_NAME_LENGTH = 1;

    if (serviceName.length < MIN_SERVICE_NAME_LENGTH) {
      throw new BadParameterError(
        `サービス名は ${MIN_SERVICE_NAME_LENGTH}文字以上 である必要があります。`,
      );
    }
  }

  get intervalValue() {
    return this.param.intervalValue;
  }

  static validateIntervalValue(intervalValue: number) {
    const MIN_INTERVAL_VALUE = 1;
    if (intervalValue < MIN_INTERVAL_VALUE) {
      throw new BadParameterError(
        `間隔値は ${MIN_INTERVAL_VALUE}以上 である必要があります。`,
      );
    }

    if (!Number.isInteger(intervalValue)) {
      throw new BadParameterError(`間隔値は 整数 である必要があります。`);
    }
  }

  get intervalAmount() {
    return this.param.intervalAmount;
  }

  get price() {
    return this.param.price;
  }

  static validatePrice(price: number) {
    const MIN_PRICE_VALUE = 0;
    if (price < MIN_PRICE_VALUE) {
      throw new BadParameterError(
        `価格は ${MIN_PRICE_VALUE}以上 である必要があります。`,
      );
    }
    if (!Number.isInteger(price)) {
      throw new BadParameterError(`価格は 整数 である必要があります。`);
    }
  }

  get firstPaymentDate() {
    return this.param.firstPaymentDate;
  }

  static validateFirstPaymentDate(firstPaymentDate: Date) {
    if (Number.isNaN(firstPaymentDate.getTime())) {
      throw new BadParameterError(
        '初回支払日は 有効な日付 である必要があります。',
      );
    }
  }

  toDto() {
    return { ...this.param };
  }

  static fromDto(dto: SubscriptionDto) {
    return new SubscriptionEntity({ ...dto });
  }
}
