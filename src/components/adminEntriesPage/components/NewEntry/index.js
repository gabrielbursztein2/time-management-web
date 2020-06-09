import React, { useState, useEffect } from 'react';
import { formatDate } from 'utils/date';
import { useDispatch } from 'hooks';
import { getUsers } from 'state/actions/userActions';
import { createAdminEntry } from 'state/actions/adminEntryActions';
import NewEntryButton from 'components/common/NewEntryButton';
import AdminEntryForm from 'components/common/AdminEntryForm';
import Modal from 'components/common/Modal';

import { Container, TodaysDate } from './styles';

const NewEntry = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const createAdminEntryRequest = useDispatch(createAdminEntry);
  const getUsersRequest = useDispatch(getUsers);

  useEffect(() => {
    getUsersRequest();
  }, [getUsersRequest]);

  const handleCreate = entry => {
    setIsModalOpen(false);
    createAdminEntryRequest(entry);
  };

  return (
    <Container>
      <NewEntryButton onClick={() => setIsModalOpen(true)} />
      <TodaysDate>{formatDate()}</TodaysDate>
      <Modal shouldClose closeHandler={() => setIsModalOpen(false)} isOpen={isModalOpen}>
        <AdminEntryForm onSubmit={handleCreate} />
      </Modal>
    </Container>
  );
};

export default NewEntry;
