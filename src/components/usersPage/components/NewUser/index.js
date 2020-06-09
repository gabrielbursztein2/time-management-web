import React, { useState } from 'react';
import { useDispatch } from 'hooks';
import { createUser } from 'state/actions/userActions';
import Button from 'components/common/Button';
import Modal from 'components/common/Modal';
import UserForm from 'components/common/UserForm';
import { Container } from './styles';

const NewUser = () => {
  const createUserRequest = useDispatch(createUser);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const create = user => {
    createUserRequest(user);
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Button rounded onClick={() => setIsModalOpen(true)}>
        Create
      </Button>
      <Modal shouldClose closeHandler={() => setIsModalOpen(false)} isOpen={isModalOpen}>
        <UserForm onSubmit={create} />
      </Modal>
    </Container>
  );
};

export default NewUser;
