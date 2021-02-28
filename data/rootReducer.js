import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

export function index(state = {}, { type, payload }) {
  return state;
}

const rootReducer = combineReducers({
  index,

});

export default rootReducer;
