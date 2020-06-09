import { createThunk, createAction } from '@rootstrap/redux-tools';
import profileService from 'services/profileService';
import parseError from 'utils/parseError';

export const login = createThunk('LOGIN', async user => {
  try {
    const { data } = await profileService.login({ user });
    return data;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const logout = createThunk('LOGOUT', async () => {
  try {
    await profileService.logout();
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const signUp = createThunk('SIGNUP', async user => {
  try {
    const { data } = await profileService.signUp({ user });
    return data;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const updateUser = createThunk('UPDATE_CURRENT_USER', async user => {
  try {
    const { data } = await profileService.update(user);
    return data;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const updateSession = createAction('UPDATE_SESSION');
