import { useSelector } from 'react-redux';
import { groupBy, toPairs, reduce } from 'ramda';

export default () =>
  useSelector(({ entries: { entries } }) => {
    const groupedEntries = groupBy(entry => entry.date, entries);
    const entriesArray = toPairs(groupedEntries);

    return entriesArray.map(([date, timeEntries]) => {
      return {
        date,
        totalMinutes: reduce((acc, entry) => acc + entry.minutes, 0, timeEntries),
        entries: timeEntries
      };
    });
  });
