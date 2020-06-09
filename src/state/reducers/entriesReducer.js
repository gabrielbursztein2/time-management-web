import { createReducer } from '@rootstrap/redux-tools';
import {
  createOngoingEntry,
  deleteOngoingEntry,
  createEntry,
  updateEntry,
  deleteEntry,
  getEntries,
  selectEntry,
  unselectEntry
} from 'state/actions/entryActions';
import {
  createAdminEntry,
  updateAdminEntry,
  deleteAdminEntry,
  getAdminEntries,
  selectAdminEntry,
  unselectAdminEntry
} from 'state/actions/adminEntryActions';
import { filter } from 'ramda';
import { sortByDate } from 'utils/helpers';
import { formatDateRequest } from 'utils/date';

const initialState = {
  entries: [],
  adminEntries: [],
  ongoing: {
    detail: 'Reviewing the app',
    startTime: new Date() - 900000,
    date: '2020-06-09'
  },
  selectedEntry: {},
  selectedAdminEntry: {}
};

const actionHandlers = {
  [createOngoingEntry]: (state, { payload }) => {
    state.ongoing = { ...payload, startTime: new Date(), date: formatDateRequest(new Date()) };
  },
  [deleteOngoingEntry]: state => {
    state.ongoing = undefined;
  },
  [createEntry.success]: (state, { payload }) => {
    state.entries = sortByDate([payload, ...state.entries]);
    state.ongoing = undefined;
  },
  [updateEntry.success]: (state, { payload }) => {
    state.selectedEntry = {};
    state.entries = sortByDate(
      state.entries.map(entry => (entry.id === payload.id ? payload : entry))
    );
  },
  [deleteEntry.success]: (state, { payload }) => {
    state.entries = filter(entry => entry.id !== payload, state.entries);
  },
  [getEntries.success]: (state, { payload }) => {
    state.entries = payload;
  },
  [selectEntry]: (state, { payload }) => {
    state.selectedEntry = payload;
  },
  [unselectEntry]: state => {
    state.selectedEntry = {};
  },
  [createAdminEntry.success]: (state, { payload }) => {
    state.adminEntries = sortByDate([payload, ...state.adminEntries]);
  },
  [updateAdminEntry.success]: (state, { payload }) => {
    state.selectedAdminEntry = {};
    state.adminEntries = sortByDate(
      state.adminEntries.map(entry => (entry.id === payload.id ? payload : entry))
    );
  },
  [deleteAdminEntry.success]: (state, { payload }) => {
    state.adminEntries = filter(entry => entry.id !== payload, state.entries);
  },
  [getAdminEntries.success]: (state, { payload }) => {
    state.adminEntries = payload;
  },
  [selectAdminEntry]: (state, { payload }) => {
    state.selectedAdminEntry = payload;
  },
  [unselectAdminEntry]: state => {
    state.selectedAdminEntry = {};
  }
};

export default createReducer(initialState, actionHandlers);
