import React from 'react';
import { func, arrayOf, shape, string, number } from 'prop-types';
import UserRow from '../UserRow';
import { Container, TableHeader, Name, Role, WorkingHours, Actions } from './styles';

const UsersList = ({ users, onEdit, onDelete }) => (
  <Container>
    <TableHeader>
      <Name>Name</Name>
      <Role>Role</Role>
      <WorkingHours>Working Hours</WorkingHours>
      <Actions>Actions</Actions>
    </TableHeader>
    {users.map((user, index) => (
      <UserRow
        user={user}
        key={user.id}
        odd={index % 2 == 0}
        onEdit={() => onEdit(user)}
        onDelete={() => onDelete(user)}
      />
    ))}
  </Container>
);

UsersList.propTypes = {
  onEdit: func.isRequired,
  onDelete: func.isRequired,
  users: arrayOf(
    shape({
      id: number.isRequired,
      fullName: string.isRequired,
      email: string.isRequired
    })
  ).isRequired
};

export default UsersList;
