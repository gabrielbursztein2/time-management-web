import React, { useState, useEffect } from 'react';
import { reject, isNil, isEmpty } from 'ramda';
import { useDispatch } from 'hooks';
import {
  getAdminEntries,
  updateAdminEntry,
  deleteAdminEntry,
  createAdminEntry,
  selectAdminEntry,
  unselectAdminEntry
} from 'state/actions/adminEntryActions';
import { useAdminEntries, useAdminSelectedEntry } from 'hooks/selectors';
import Modal from 'components/common/Modal';
import AdminEntryForm from 'components/common/AdminEntryForm';
import DateRange from 'components/common/DateRange';
import NewEntry from './components/NewEntry';
import EntriesList from './components/EntriesList';
import { Container, Header } from './styles';

const AdminEntriesPage = () => {
  const [range, setRange] = useState({});
  const getEntriesRequest = useDispatch(getAdminEntries);
  const updateEntryRequest = useDispatch(updateAdminEntry);
  const deleteEntryRequest = useDispatch(deleteAdminEntry);
  const createEntryRequest = useDispatch(createAdminEntry);
  const selectAdminEntryRequest = useDispatch(selectAdminEntry);
  const unselectAdminEntryRequest = useDispatch(unselectAdminEntry);
  const { selectedAdminEntry } = useAdminSelectedEntry();
  const { entries } = useAdminEntries();

  useEffect(() => {
    getEntriesRequest(reject(isNil, range));
  }, [getEntriesRequest, range]);

  const handleDelete = entry => {
    deleteEntryRequest(entry.id);
  };

  const handleEdit = entry => {
    selectAdminEntryRequest(entry);
  };

  return (
    <Container>
      <Header>
        <NewEntry />
        <DateRange handleChange={setRange} />
      </Header>
      <EntriesList
        entries={entries}
        onDelete={handleDelete}
        onCreate={createEntryRequest}
        onEdit={handleEdit}
      />
      <Modal
        shouldClose
        closeHandler={unselectAdminEntryRequest}
        isOpen={!isEmpty(selectedAdminEntry)}
      >
        <AdminEntryForm
          isEditing
          onSubmit={updateEntryRequest}
          initialValues={selectedAdminEntry}
        />
      </Modal>
    </Container>
  );
};

export default AdminEntriesPage;
