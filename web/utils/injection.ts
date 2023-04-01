import { SubscriptionRepository } from '~/domains/subscription/composables/subscription-repository';
import { GraphQLSubscriptionRepository } from '~/domains/subscription/infrastructures/graphql-subscription-repository';

// 実装追加時に追加すること
const repositoryImplementations = ['GRAPHQL'] as const;

// リポジトリ追加時に追加すること
const repositoryNames = ['Subscription'] as const;

type RepositoryImplementation = typeof repositoryImplementations[number];
type RepositoryName = typeof repositoryNames[number];
type RepositoryNameMap = {
  Subscription: SubscriptionRepository;
};

type RepositoryImplementationMap = {
  [k in RepositoryImplementation]: RepositoryNameMap;
};

// リポジトリ追加時に追加すること
const repositoryImplementationMap: RepositoryImplementationMap = {
  GRAPHQL: {
    Subscription: new GraphQLSubscriptionRepository(),
  },
};

let selectRepositoryImplementation: RepositoryImplementation = 'GRAPHQL';

export const setRepositoryImplementation = (
  implementation: RepositoryImplementation
) => {
  selectRepositoryImplementation = implementation;
};

export const getRepository = <T extends RepositoryName>(
  repositoryName: T
): RepositoryNameMap[T] =>
  repositoryImplementationMap[selectRepositoryImplementation][repositoryName];
