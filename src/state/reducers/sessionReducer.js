import { createReducer } from '@rootstrap/redux-tools';
import { login, signUp, logout, updateSession, updateUser } from 'state/actions/profileActions';

const initialState = {
  authenticated: false,
  user: null,
  info: {}
};

const actionHandlers = {
  [login.success]: (state, { payload: { user } }) => {
    state.user = user;
  },
  [signUp.success]: (state, { payload: { user } }) => {
    state.user = user;
  },
  [updateUser.success]: (state, { payload: { user } }) => {
    state.user = user;
  },
  [updateSession]: (state, { payload }) => {
    state.info = payload;
    state.authenticated = true;
  },
  [logout.success]: () => initialState
};

export default createReducer(initialState, actionHandlers);
