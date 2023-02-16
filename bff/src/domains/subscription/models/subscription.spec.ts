import { BadParameterError } from '../../../errors/bad-parameter';
import { CreateParam, SubscriptionEntity } from './subscription';

describe('create', () => {
  it('IDを生成して新しいsubscriptionを作成できる', () => {
    const createParam: CreateParam = {
      firstPaymentDate: new Date('2022-11-10'),
      intervalAmount: 'MONTHLY',
      intervalValue: 1,
      price: 0,
      serviceName: 'Subscliption',
    };

    const subscription = SubscriptionEntity.create(createParam);
    expect(subscription.firstPaymentDate).toBe(createParam.firstPaymentDate);
    expect(subscription.intervalAmount).toBe(createParam.intervalAmount);
    expect(subscription.intervalValue).toBe(createParam.intervalValue);
    expect(subscription.price).toBe(createParam.price);
    expect(subscription.serviceName).toBe(createParam.serviceName);
  });

  it.each([
    [-1, '間隔値は 1以上 である必要があります。'],
    [0, '間隔値は 1以上 である必要があります。'],
    [1.1, '間隔値は 整数 である必要があります。'],
  ])(
    'intervalValueが不正な値の場合に例外が発生する',
    (intervalValue: number, errorMessage: string) => {
      const createParam: CreateParam = {
        firstPaymentDate: new Date('2022-11-10'),
        intervalAmount: 'MONTHLY',
        intervalValue,
        price: 5000,
        serviceName: 'Subscliption',
      };

      expect(() => SubscriptionEntity.create(createParam)).toThrow(
        new BadParameterError(errorMessage),
      );
    },
  );

  it.each([
    [-1, '価格は 0以上 である必要があります。'],
    [1.1, '価格は 整数 である必要があります。'],
  ])(
    'priceが不正な値の場合に例外が発生する',
    (price: number, errorMessage: string) => {
      const createParam: CreateParam = {
        firstPaymentDate: new Date('2022-11-10'),
        intervalAmount: 'MONTHLY',
        intervalValue: 1,
        price,
        serviceName: 'Subscliption',
      };

      expect(() => SubscriptionEntity.create(createParam)).toThrow(
        new BadParameterError(errorMessage),
      );
    },
  );

  it.each([['', 'サービス名は 1文字以上 である必要があります。']])(
    'サービス名が不正な値の場合に例外が発生する',
    (serviceName: string, errorMessage: string) => {
      const createParam: CreateParam = {
        firstPaymentDate: new Date('2022-11-10'),
        intervalAmount: 'MONTHLY',
        intervalValue: 1,
        price: 1,
        serviceName,
      };

      expect(() => SubscriptionEntity.create(createParam)).toThrow(
        new BadParameterError(errorMessage),
      );
    },
  );

  it.each([
    [new Date('invalid'), '初回支払日は 有効な日付 である必要があります。'],
  ])(
    '初回支払日が不正な値の場合に例外が発生する',
    (firstPaymentDate: Date, errorMessage: string) => {
      const createParam: CreateParam = {
        firstPaymentDate,
        intervalAmount: 'MONTHLY',
        intervalValue: 1,
        price: 1,
        serviceName: 'Subscliption',
      };

      expect(() => SubscriptionEntity.create(createParam)).toThrow(
        new BadParameterError(errorMessage),
      );
    },
  );
});
