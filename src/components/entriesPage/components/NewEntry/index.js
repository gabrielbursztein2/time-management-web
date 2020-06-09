import React, { useState } from 'react';
import { formatDate } from 'utils/date';
import { useDispatch } from 'hooks';
import { createOngoingEntry, createEntry } from 'state/actions/entryActions';
import NewEntryButton from 'components/common/NewEntryButton';
import EntryForm from 'components/common/EntryForm';
import Modal from 'components/common/Modal';

import { Container, TodaysDate } from './styles';

const NewEntry = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const createOngoingEntryRequest = useDispatch(createOngoingEntry);
  const createEntryRequest = useDispatch(createEntry);

  const handleCreate = values => {
    if (values.minutes && values.minutes != 0) {
      createEntryRequest(values);
    } else {
      createOngoingEntryRequest(values);
    }
    setIsModalOpen(false);
  };

  return (
    <Container>
      <NewEntryButton onClick={() => setIsModalOpen(true)} />
      <TodaysDate>{formatDate()}</TodaysDate>
      <Modal shouldClose closeHandler={() => setIsModalOpen(false)} isOpen={isModalOpen}>
        <EntryForm onSubmit={handleCreate} />
      </Modal>
    </Container>
  );
};

export default NewEntry;
