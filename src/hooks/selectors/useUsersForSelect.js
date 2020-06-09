import { useSelector } from 'react-redux';

export default () =>
  useSelector(({ users: { users } }) => ({
    users: users.map(user => ({
      label: user.fullName,
      value: user.id
    }))
  }));
