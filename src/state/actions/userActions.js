import { createThunk } from '@rootstrap/redux-tools';
import userService from 'services/userService';
import parseError from 'utils/parseError';
import { successMessage, errorMessage } from 'utils/helpers';

export const getUsers = createThunk('GET_USERS', async () => {
  try {
    const { data } = await userService.getAll();
    return data;
  } catch ({ response: { data } }) {
    errorMessage(parseError(data));
    throw parseError(data);
  }
});

export const createUser = createThunk('CREATE_USER', async user => {
  try {
    const { data } = await userService.create(user);
    successMessage('User successfully created');
    return data;
  } catch ({ response: { data } }) {
    errorMessage(parseError(data));
    throw parseError(data);
  }
});

export const updateUser = createThunk('UPDATE_USER', async user => {
  try {
    const { data } = await userService.update(user);
    successMessage('User successfully updated');
    return data;
  } catch ({ response: { data } }) {
    errorMessage(parseError(data));
    throw parseError(data);
  }
});

export const deleteUser = createThunk('DELETE_USER', async id => {
  try {
    await userService.delete(id);
    successMessage('User successfully deleted');
    return id;
  } catch ({ response: { data } }) {
    errorMessage(parseError(data));
    throw parseError(data);
  }
});
