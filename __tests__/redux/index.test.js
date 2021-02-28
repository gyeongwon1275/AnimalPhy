import { index } from '@data/rootReducer';

describe('index', () => {
  it('return default state', () => {
    const action = { type: '', payload: '__NEXT_REDUX_WRAPPER_HYDRATE__' };
    const state = index(undefined, action);

    expect(state).toMatchObject({});
  });
});
