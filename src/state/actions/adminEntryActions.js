import { createThunk, createAction } from '@rootstrap/redux-tools';
import adminEntryService from 'services/adminEntryService';
import parseError from 'utils/parseError';
import { successMessage, errorMessage } from 'utils/helpers';

export const createAdminEntry = createThunk('CREATE_ADMIN_ENTRY', async entry => {
  try {
    const { data } = await adminEntryService.createEntry(entry);
    successMessage('Entry successfully created');
    return data;
  } catch ({ response: { data } }) {
    errorMessage(parseError(data));
    throw parseError(data);
  }
});

export const updateAdminEntry = createThunk('UPDATE_ADMIN_ENTRY', async entry => {
  try {
    await adminEntryService.updateEntry(entry);
    successMessage('Entry successfully updated');
    return entry;
  } catch ({ response: { data } }) {
    errorMessage(parseError(data));
    throw parseError(data);
  }
});

export const deleteAdminEntry = createThunk('DELETE_ADMIN_ENTRY', async id => {
  try {
    await adminEntryService.deleteEntry(id);
    successMessage('Entry successfully deleted');
    return id;
  } catch ({ response: { data } }) {
    errorMessage(parseError(data));
    throw parseError(data);
  }
});

export const getAdminEntries = createThunk('GET_ADMIN_ENTRIES', async ({ from, to }) => {
  try {
    const {
      data: { timeEntries }
    } = await adminEntryService.getEntries(from, to);
    return timeEntries;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const selectAdminEntry = createAction('SELECT_ADMIN_ENTRY');
export const unselectAdminEntry = createAction('UNSELECT_ADMIN_ENTRY');
