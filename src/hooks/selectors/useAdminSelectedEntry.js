import { useSelector } from 'react-redux';

export default () =>
  useSelector(({ entries: { selectedAdminEntry } }) => ({
    selectedAdminEntry
  }));
