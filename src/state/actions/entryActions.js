import { createThunk, createAction } from '@rootstrap/redux-tools';
import entryService from 'services/entryService';
import parseError from 'utils/parseError';
import { successMessage, errorMessage } from 'utils/helpers';

export const createEntry = createThunk('CREATE_ENTRY', async timeEntry => {
  try {
    const { data } = await entryService.createEntry(timeEntry);
    successMessage('Entry successfully created');
    return data;
  } catch ({ response: { data } }) {
    errorMessage(parseError(data));
    throw parseError(data);
  }
});

export const updateEntry = createThunk('UPDATE_ENTRY', async timeEntry => {
  try {
    await entryService.updateEntry(timeEntry);
    successMessage('Entry successfully updated');
    return timeEntry;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const deleteEntry = createThunk('DELETE_ENTRY', async id => {
  try {
    await entryService.deleteEntry(id);
    successMessage('Entry successfully deleted');
    return id;
  } catch ({ response: { data } }) {
    errorMessage(parseError(data));
    throw parseError(data);
  }
});

export const getEntries = createThunk('GET_ENTRIES', async ({ from, to }) => {
  try {
    const {
      data: { timeEntries }
    } = await entryService.getEntries(from, to);
    return timeEntries;
  } catch ({ response: { data } }) {
    errorMessage(parseError(data));
    throw parseError(data);
  }
});

export const createOngoingEntry = createAction('CREATE_ONGOING_SESSION');
export const deleteOngoingEntry = createAction('DELETE_ONGOING_SESSION');
export const selectEntry = createAction('SELECT_ENTRY');
export const unselectEntry = createAction('UNSELECT_ENTRY');
