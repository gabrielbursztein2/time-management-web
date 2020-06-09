import React from 'react';
import { Popconfirm } from 'antd';
import { string, arrayOf, object, bool, func } from 'prop-types';
import { formatDate } from 'utils/date';
import { formatMinutesToTime } from 'utils/helpers';
import AlternativeButton from 'components/common/AlternativeButton';
import EditSvg from 'components/svg/EditSvg';
import TrashSvg from 'components/svg/TrashSvg';

import { Row, Date, Entry, Time, Detail, EntriesContainer, Actions } from './styles';

const EntriesRow = ({ date, entries, isUnderWork, onEdit, onDelete }) => (
  <Row key={date} isUnderWork={isUnderWork}>
    <Date>{formatDate(date)}</Date>
    <EntriesContainer>
      {entries.map(entry => (
        <Entry key={entry.id}>
          <Detail>{entry.detail}</Detail>
          <Time>{formatMinutesToTime(entry.minutes)}</Time>
          <Actions>
            <AlternativeButton
              onClick={() => {
                onEdit(entry);
              }}
            >
              <EditSvg width={20} />
            </AlternativeButton>
            <Popconfirm
              title="Are you sure?"
              onConfirm={() => onDelete(entry.id)}
              okText="Yes"
              cancelText="No"
            >
              <AlternativeButton>
                <TrashSvg width={20} />
              </AlternativeButton>
            </Popconfirm>
          </Actions>
        </Entry>
      ))}
    </EntriesContainer>
  </Row>
);

EntriesRow.propTypes = {
  date: string.isRequired,
  entries: arrayOf(object).isRequired,
  isUnderWork: bool.isRequired,
  onEdit: func.isRequired,
  onDelete: func.isRequired
};

export default EntriesRow;
