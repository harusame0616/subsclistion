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
};

export enum IntervalAmount {
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY',
  Yearly = 'YEARLY'
}

export type Query = {
  __typename?: 'Query';
  subscriptions: Array<Subscription>;
};

export type Subscription = {
  __typename?: 'Subscription';
  firstPaymentDate: Scalars['String'];
  id: Scalars['ID'];
  intervalAmount: IntervalAmount;
  intervalValue: Scalars['Int'];
  price: Scalars['Int'];
  serviceName: Scalars['String'];
};

export type GetSubscriptionListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSubscriptionListQuery = { __typename?: 'Query', subscriptions: Array<{ __typename?: 'Subscription', id: string, price: number, serviceName: string, intervalValue: number, intervalAmount: IntervalAmount, firstPaymentDate: string }> };


export const GetSubscriptionListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubscriptionList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"serviceName"}},{"kind":"Field","name":{"kind":"Name","value":"intervalValue"}},{"kind":"Field","name":{"kind":"Name","value":"intervalAmount"}},{"kind":"Field","name":{"kind":"Name","value":"firstPaymentDate"}}]}}]}}]} as unknown as DocumentNode<GetSubscriptionListQuery, GetSubscriptionListQueryVariables>;