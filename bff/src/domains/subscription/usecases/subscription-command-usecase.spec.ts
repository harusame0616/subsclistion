import { SubscriptionEntity } from '../models/subscription';
import { SubscriptionCommandUsecase } from './subscription-command-usecase';
import { SubscriptionRepository } from './subscription-repository';

describe('createSubscription ', () => {
  test('指定された引数と生成されたIDを元に subscription が保存されている', async () => {
    const repository = {} as SubscriptionRepository;
    const save = jest.fn();
    repository.save = save;

    const subscriptionCommandUsecase = new SubscriptionCommandUsecase(
      repository,
    );

    const newSubscriptionParam = {
      intervalAmount: 'WEEKLY' as const,
      intervalValue: 1,
      serviceName: 'Netflix',
      price: 1800,
      firstPaymentDate: new Date('2022-10-11'),
    };
    const id = await subscriptionCommandUsecase.createSubscription(
      newSubscriptionParam,
    );

    const subscription: SubscriptionEntity = save.mock.calls[0][0];

    expect({
      intervalAmount: subscription.intervalAmount,
      intervalValue: subscription.intervalValue,
      serviceName: subscription.serviceName,
      price: subscription.price,
      firstPaymentDate: subscription.firstPaymentDate,
    }).toEqual(newSubscriptionParam);
  });
});
