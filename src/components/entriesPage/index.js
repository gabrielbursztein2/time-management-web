import React, { useState, useEffect } from 'react';
import { reject, isNil, isEmpty } from 'ramda';
import { useDispatch } from 'hooks';
import { useEntriesByDate, useSelectedEntry } from 'hooks/selectors';
import {
  getEntries,
  updateEntry,
  deleteEntry,
  selectEntry,
  unselectEntry
} from 'state/actions/entryActions';
import DateRange from 'components/common/DateRange';
import Modal from 'components/common/Modal';
import EntryForm from 'components/common/EntryForm';
import NewEntry from './components/NewEntry';
import EntriesList from './components/EntriesList';
import OngoingEntry from './components/OngoingEntry';
import { Container, Header } from './styles';

const EntriesPage = () => {
  const [range, setRange] = useState({});
  const getEntriesRequest = useDispatch(getEntries);
  const updateEntryRequest = useDispatch(updateEntry);
  const deleteEntryRequest = useDispatch(deleteEntry);
  const selectEntryRequest = useDispatch(selectEntry);
  const unselectEntryRequest = useDispatch(unselectEntry);
  const entriesByDate = useEntriesByDate();
  const { selectedEntry } = useSelectedEntry();

  useEffect(() => {
    getEntriesRequest(reject(isNil, range));
  }, [getEntriesRequest, range]);

  return (
    <Container>
      <Header>
        <NewEntry allowOngoing />
        <DateRange handleChange={setRange} />
      </Header>
      <OngoingEntry />
      <EntriesList
        entriesByDate={entriesByDate}
        onEdit={selectEntryRequest}
        onDelete={deleteEntryRequest}
      />
      <Modal shouldClose closeHandler={unselectEntryRequest} isOpen={!isEmpty(selectedEntry)}>
        <EntryForm isEditing onSubmit={updateEntryRequest} initialValues={selectedEntry} />
      </Modal>
    </Container>
  );
};

export default EntriesPage;
