import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

export function index(state = {}, { type, payload }) {
  return type === HYDRATE ? { ...state, ...payload } : state;
}

const rootReducer = combineReducers({
  index,

});

export default rootReducer;
