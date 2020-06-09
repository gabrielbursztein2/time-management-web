import { createReducer } from '@rootstrap/redux-tools';
import { createUser, updateUser, deleteUser, getUsers } from 'state/actions/userActions';
import { filter } from 'ramda';

const initialState = {
  users: []
};

const actionHandlers = {
  [createUser.success]: (state, { payload: { user } }) => {
    state.users = [user, ...state.users];
  },
  [updateUser.success]: (state, { payload: { user } }) => {
    state.users = state.users.map(u => (u.id === user.id ? user : u));
  },
  [deleteUser.success]: (state, { payload }) => {
    state.users = filter(user => user.id !== payload, state.users);
  },
  [getUsers.success]: (state, { payload: { users } }) => {
    state.users = users;
  }
};

export default createReducer(initialState, actionHandlers);
