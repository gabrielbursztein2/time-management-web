import React, { useState } from 'react';
import { useDispatch, useSession } from 'hooks';
import { updateUser, logout } from 'state/actions/profileActions';

import TopBar from 'components/common/TopBar';
import EntriesPage from 'components/entriesPage';
import UsersPage from 'components/usersPage';
import AdminEntriesPage from 'components/adminEntriesPage';
import Modal from 'components/common/Modal';
import SettingsForm from 'components/common/SettingsForm';

import { Container } from './styles';

const HomePage = () => {
  const { user } = useSession();
  const [tab, setTab] = useState(0);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const updateUserRequest = useDispatch(updateUser);
  const logoutRequest = useDispatch(logout);

  const updateSettings = ({ id, workingHours }) => {
    updateUserRequest({ id, workingHours });
    setIsSettingsModalOpen(false);
  };

  if (!user) {
    return null;
  }

  return (
    <div>
      <TopBar
        user={user}
        changeTab={setTab}
        tab={tab}
        openSettingsModal={() => setIsSettingsModalOpen(true)}
        logout={logoutRequest}
      />
      <Container>
        {tab === 0 && <EntriesPage />}
        {tab === 1 && <UsersPage />}
        {tab === 2 && <AdminEntriesPage />}
      </Container>
      <Modal
        shouldClose
        closeHandler={() => setIsSettingsModalOpen(false)}
        isOpen={isSettingsModalOpen}
      >
        <SettingsForm isEditing onSubmit={updateSettings} initialValues={user} />
      </Modal>
    </div>
  );
};

export default HomePage;
