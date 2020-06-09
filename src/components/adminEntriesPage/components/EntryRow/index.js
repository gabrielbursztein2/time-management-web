import React from 'react';
import { object, bool, func } from 'prop-types';
import { Popconfirm } from 'antd';
import { formatMinutesToTime } from 'utils/helpers';
import AlternativeButton from 'components/common/AlternativeButton';
import EditSvg from 'components/svg/EditSvg';
import TrashSvg from 'components/svg/TrashSvg';
import theme from 'constants/theme';

import { Row, Date, Name, Detail, Time, Actions } from './styles';

const EntryRow = ({ entry, odd, onEdit, onDelete }) => (
  <Row odd={odd} key={entry.id}>
    <Date>{entry.date}</Date>
    <Name>{entry.user.fullName}</Name>
    <Detail>{entry.detail}</Detail>
    <Time>{formatMinutesToTime(entry.minutes)}</Time>
    <Actions>
      <AlternativeButton onClick={onEdit}>
        <EditSvg color={theme.colors.charcoal} width={20} />
      </AlternativeButton>
      <Popconfirm title="Are you sure?" onConfirm={onDelete} okText="Yes" cancelText="No">
        <AlternativeButton>
          <TrashSvg color={theme.colors.charcoal} width={20} />
        </AlternativeButton>
      </Popconfirm>
    </Actions>
  </Row>
);

EntryRow.propTypes = {
  entry: object.isRequired,
  odd: bool.isRequired,
  onEdit: func.isRequired,
  onDelete: func.isRequired
};

export default EntryRow;
