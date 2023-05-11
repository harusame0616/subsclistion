import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateSubscriptionInput: CreateSubscriptionInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IntervalAmount: IntervalAmount;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  UpdateSubscriptionInput: UpdateSubscriptionInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  CreateSubscriptionInput: CreateSubscriptionInput;
  Date: Scalars['Date'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Query: {};
  String: Scalars['String'];
  Subscription: {};
  UpdateSubscriptionInput: UpdateSubscriptionInput;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  changeSubscriptionServiceName?: Resolver<ResolversTypes['Subscription'], ParentType, ContextType, RequireFields<MutationChangeSubscriptionServiceNameArgs, 'newServiceName' | 'subscriptionId'>>;
  createSubscription?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationCreateSubscriptionArgs, 'createSubscriptionInput'>>;
  updateSubscription?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationUpdateSubscriptionArgs, 'subscriptionId' | 'updateSubscriptionInput'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  subscriptions?: Resolver<Array<ResolversTypes['Subscription']>, ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  firstPaymentDate?: SubscriptionResolver<ResolversTypes['Date'], "firstPaymentDate", ParentType, ContextType>;
  id?: SubscriptionResolver<ResolversTypes['ID'], "id", ParentType, ContextType>;
  intervalAmount?: SubscriptionResolver<ResolversTypes['IntervalAmount'], "intervalAmount", ParentType, ContextType>;
  intervalValue?: SubscriptionResolver<ResolversTypes['Int'], "intervalValue", ParentType, ContextType>;
  price?: SubscriptionResolver<ResolversTypes['Int'], "price", ParentType, ContextType>;
  serviceName?: SubscriptionResolver<ResolversTypes['String'], "serviceName", ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Date?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
}>;

