import React from 'react';
import { func, arrayOf, object } from 'prop-types';
import EntryRow from '../EntryRow';

import { Container, TableHeader } from './styles';

const EntriesList = ({ entries, onEdit, onDelete }) => {
  return (
    <Container>
      <TableHeader>
        <p className="date">Date</p>
        <p className="name">Name</p>
        <p className="detail">Detail</p>
        <p className="time">Time</p>
        <p className="actions">Actions</p>
      </TableHeader>
      {entries.map((entry, index) => (
        <EntryRow
          key={entry.id}
          odd={index % 2 === 0}
          onEdit={() => onEdit(entry)}
          onDelete={() => onDelete(entry)}
          entry={entry}
        />
      ))}
    </Container>
  );
};

EntriesList.propTypes = {
  onEdit: func.isRequired,
  onDelete: func.isRequired,
  entries: arrayOf(object).isRequired
};

export default EntriesList;
