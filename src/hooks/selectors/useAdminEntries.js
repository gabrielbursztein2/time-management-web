import { useSelector } from 'react-redux';

export default () =>
  useSelector(({ entries: { adminEntries } }) => ({
    entries: adminEntries
  }));
