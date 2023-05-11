import { graphql } from 'msw';
import {
  ChangeServiceNameMutationVariables,
  GetSubscriptionListQuery,
  GetSubscriptionListQueryVariables,
  ChangeServiceNameMutation,
} from '../src/generated/gql/graphql';

const subscriptions = [
  {
    id: '5b4f62fa-37ba-413e-b3de-f0f76d4188e8',
    serviceName: 'MSW Netflix',
    intervalAmount: 'MONTHLY',
    intervalValue: 1,
    price: 1490,
    firstPaymentDate: '2022-12-01',
  },
  {
    id: 'be4756da-4e1c-4458-8c17-8733721f3b9e',
    serviceName: 'MSW U-Next',
    intervalAmount: 'YEARLY',
    intervalValue: 2,
    price: 10500,
    firstPaymentDate: '2022-12-03',
  },
] as const;

export const handlers = [
  graphql.query<GetSubscriptionListQuery, GetSubscriptionListQueryVariables>(
    'GetSubscriptionList',
    (_, res, ctx) =>
      res(
        ctx.data({
          subscriptions: [...subscriptions],
        })
      )
  ),
  graphql.mutation<
    ChangeServiceNameMutation,
    ChangeServiceNameMutationVariables
  >('ChangeSubscriptionServiceName', (req, res, ctx) => {
    const subscription = subscriptions.find(
      (v) => v.id === req.variables.subscriptionId
    );
    if (!subscription) {
      throw new Error('notfound');
    }
    return res(
      ctx.data({
        changeSubscriptionServiceName: {
          ...subscription,
          serviceName: req.variables.newServiceName,
        },
      })
    );
  }),
];
