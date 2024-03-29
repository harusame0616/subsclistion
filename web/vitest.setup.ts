import matchers, {
  TestingLibraryMatchers,
} from '@testing-library/jest-dom/matchers';
import { server } from './mocks/node';

declare global {
  module Vi {
    interface JestAssertion<T = any>
      extends jest.Matchers<void, T>,
        TestingLibraryMatchers<T, void> {}
  }
}

expect.extend(matchers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
beforeAll(() => server.close());
