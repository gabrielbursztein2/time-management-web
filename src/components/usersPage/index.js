import React, { useState, useEffect } from 'react';
import { useDispatch } from 'hooks';
import { useUsers } from 'hooks/selectors';
import { getUsers, updateUser, deleteUser } from 'state/actions/userActions';
import Modal from 'components/common/Modal';
import UserForm from 'components/common/UserForm';
import UsersList from './components/UsersList';
import NewUser from './components/NewUser';
import { Container } from './styles';

const UsersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const getUsersRequest = useDispatch(getUsers);
  const updateUserRequest = useDispatch(updateUser);
  const deleteUserRequest = useDispatch(deleteUser);
  const { users } = useUsers();

  useEffect(() => {
    getUsersRequest();
  }, [getUsersRequest]);

  const onEdit = user => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const onUpdate = user => {
    updateUserRequest(user);
    setIsModalOpen(false);
  };

  const onDelete = user => {
    deleteUserRequest(user.id);
  };

  return (
    <Container>
      <NewUser />
      <UsersList users={users} onEdit={onEdit} onDelete={onDelete} />
      <Modal shouldClose closeHandler={() => setIsModalOpen(false)} isOpen={isModalOpen}>
        <UserForm isEditing onSubmit={onUpdate} initialValues={selectedUser} />
      </Modal>
    </Container>
  );
};

export default UsersPage;
