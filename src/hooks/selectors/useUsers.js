import { useSelector } from 'react-redux';

export default () =>
  useSelector(({ users: { users } }) => ({
    users
  }));
