/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
};

export type CreateSubscriptionInput = {
  firstPaymentDate: Scalars['Date'];
  intervalAmount: IntervalAmount;
  intervalValue: Scalars['Int'];
  price: Scalars['Int'];
  serviceName: Scalars['String'];
};

export type IntervalAmount =
  | 'DAILY'
  | 'MONTHLY'
  | 'WEEKLY'
  | 'YEARLY';

export type Mutation = {
  __typename?: 'Mutation';
  changeSubscriptionServiceName: Subscription;
  createSubscription: Scalars['ID'];
  updateSubscription: Scalars['ID'];
};


export type MutationChangeSubscriptionServiceNameArgs = {
  newServiceName: Scalars['String'];
  subscriptionId: Scalars['String'];
};


export type MutationCreateSubscriptionArgs = {
  createSubscriptionInput: CreateSubscriptionInput;
};


export type MutationUpdateSubscriptionArgs = {
  subscriptionId: Scalars['String'];
  updateSubscriptionInput: UpdateSubscriptionInput;
};

export type Query = {
  __typename?: 'Query';
  subscriptions: Array<Subscription>;
};

export type Subscription = {
  __typename?: 'Subscription';
  firstPaymentDate: Scalars['Date'];
  id: Scalars['ID'];
  intervalAmount: IntervalAmount;
  intervalValue: Scalars['Int'];
  price: Scalars['Int'];
  serviceName: Scalars['String'];
};

export type UpdateSubscriptionInput = {
  firstPaymentDate?: InputMaybe<Scalars['Date']>;
  intervalAmount?: InputMaybe<IntervalAmount>;
  intervalValue?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
  serviceName?: InputMaybe<Scalars['String']>;
};

export type ChangeServiceNameMutationVariables = Exact<{
  subscriptionId: Scalars['String'];
  newServiceName: Scalars['String'];
}>;


export type ChangeServiceNameMutation = { __typename?: 'Mutation', changeSubscriptionServiceName: { __typename?: 'Subscription', id: string, price: number, serviceName: string, intervalValue: number, intervalAmount: IntervalAmount, firstPaymentDate: string } };

export type GetSubscriptionListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSubscriptionListQuery = { __typename?: 'Query', subscriptions: Array<{ __typename?: 'Subscription', id: string, price: number, serviceName: string, intervalValue: number, intervalAmount: IntervalAmount, firstPaymentDate: string }> };

export type CreateSubscriptionMutationVariables = Exact<{
  createSubscriptionInput: CreateSubscriptionInput;
}>;


export type CreateSubscriptionMutation = { __typename?: 'Mutation', createSubscription: string };

export type UpdateSubscriptionMutationVariables = Exact<{
  subscriptionId: Scalars['String'];
  updateSubscriptionInput: UpdateSubscriptionInput;
}>;


export type UpdateSubscriptionMutation = { __typename?: 'Mutation', updateSubscription: string };


export const ChangeServiceNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeServiceName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newServiceName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeSubscriptionServiceName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"subscriptionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"newServiceName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newServiceName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"serviceName"}},{"kind":"Field","name":{"kind":"Name","value":"intervalValue"}},{"kind":"Field","name":{"kind":"Name","value":"intervalAmount"}},{"kind":"Field","name":{"kind":"Name","value":"firstPaymentDate"}}]}}]}}]} as unknown as DocumentNode<ChangeServiceNameMutation, ChangeServiceNameMutationVariables>;
export const GetSubscriptionListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubscriptionList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"serviceName"}},{"kind":"Field","name":{"kind":"Name","value":"intervalValue"}},{"kind":"Field","name":{"kind":"Name","value":"intervalAmount"}},{"kind":"Field","name":{"kind":"Name","value":"firstPaymentDate"}}]}}]}}]} as unknown as DocumentNode<GetSubscriptionListQuery, GetSubscriptionListQueryVariables>;
export const CreateSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createSubscriptionInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSubscriptionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createSubscriptionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createSubscriptionInput"}}}]}]}}]} as unknown as DocumentNode<CreateSubscriptionMutation, CreateSubscriptionMutationVariables>;
export const UpdateSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateSubscriptionInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSubscriptionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"subscriptionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"updateSubscriptionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateSubscriptionInput"}}}]}]}}]} as unknown as DocumentNode<UpdateSubscriptionMutation, UpdateSubscriptionMutationVariables>;