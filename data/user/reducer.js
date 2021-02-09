import { handleActions } from 'redux-actions';

const initialState = {
  userId: 'rud285',
  userName: '경원',
  phone: '01086901275',
};

const user = handleActions({}, initialState);

export default user;
