import React from 'react';
import { Popconfirm } from 'antd';
import { func, bool, shape, number, string } from 'prop-types';
import { humanize } from 'utils/helpers';
import AlternativeButton from 'components/common/AlternativeButton';
import EditSvg from 'components/svg/EditSvg';
import TrashSvg from 'components/svg/TrashSvg';
import theme from 'constants/theme';
import { Row, Name, Role, WorkingHours, Actions } from './styles';

const UserRow = ({ user, odd, onEdit, onDelete }) => (
  <Row key={user.id} odd={odd}>
    <Name>{user.fullName}</Name>
    <Role>{humanize(user.role)}</Role>
    <WorkingHours>{user.workingHours}</WorkingHours>
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

UserRow.propTypes = {
  onEdit: func.isRequired,
  onDelete: func.isRequired,
  odd: bool.isRequired,
  user: shape({
    id: number.isRequired,
    fullName: string.isRequired,
    workingHours: number.isRequired,
    role: string.isRequired
  }).isRequired
};

export default UserRow;
