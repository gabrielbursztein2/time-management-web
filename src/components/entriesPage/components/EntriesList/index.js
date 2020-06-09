import React from 'react';
import { func, arrayOf, object } from 'prop-types';
import { useSession } from 'hooks';
import EntriesRow from '../EntriesRow';

import { Container, Title } from './styles';

const EntriesList = ({ entriesByDate, onEdit, onDelete }) => {
  const { user } = useSession();
  const underWork = minutes => minutes / 60 < user.workingHours;

  return (
    <Container>
      <Title>Past Entries</Title>
      {entriesByDate.map(({ date, entries, totalMinutes }) => (
        <EntriesRow
          key={date}
          date={date}
          entries={entries}
          isUnderWork={underWork(totalMinutes)}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </Container>
  );
};

EntriesList.propTypes = {
  onEdit: func.isRequired,
  onDelete: func.isRequired,
  entriesByDate: arrayOf(object).isRequired
};

export default EntriesList;
