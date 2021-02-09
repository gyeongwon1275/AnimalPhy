import { applyMiddleware, createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '@data/rootReducer';

const makeStore = (context) => {
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));

  return createStore(rootReducer, enhancer);
};

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === 'development',
});
