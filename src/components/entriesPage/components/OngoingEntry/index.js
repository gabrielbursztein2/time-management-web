import React, { useState } from 'react';
import { isEmpty } from 'ramda';
import { Popconfirm } from 'antd';
import { useOngoingEntry } from 'hooks/selectors';
import { useDispatch } from 'hooks';
import { deleteOngoingEntry, createEntry } from 'state/actions/entryActions';
import { formatTime, diff } from 'utils/date';
import theme from 'constants/theme';

import Modal from 'components/common/Modal';
import EntryForm from 'components/common/EntryForm';
import Button from 'components/common/Button';
import StopSvg from 'components/svg/EditSvg';
import TrashSvg from 'components/svg/TrashSvg';

import { Container, Title, EntryColumn, EntryDetail } from './styles';

const OngoingEntry = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ongoing: ongoingEntry } = useOngoingEntry();
  const deleteOngoingEntryRequest = useDispatch(deleteOngoingEntry);
  const createEntryRequest = useDispatch(createEntry);

  if (!ongoingEntry) {
    return null;
  }

  const handleCreate = values => {
    setIsModalOpen(false);
    createEntryRequest(values);
  };

  const ongoingEntryWithTime = () => {
    if (!isEmpty(ongoingEntry)) {
      return {
        ...ongoingEntry,
        minutes: diff(new Date(), ongoingEntry.startTime)
      };
    }
  };

  return (
    <Container>
      <Title>Ongoing</Title>
      <EntryColumn>
        <EntryDetail>{ongoingEntry.detail || 'Pending details...'}</EntryDetail>
        <EntryDetail>Started at {formatTime(ongoingEntry.startTime)}</EntryDetail>
      </EntryColumn>
      <div>
        <Button color={theme.colors.maize} onClick={() => setIsModalOpen(true)}>
          <StopSvg />
        </Button>
        <Popconfirm
          title="Are you sure?"
          onConfirm={() => deleteOngoingEntryRequest()}
          okText="Yes"
          cancelText="No"
        >
          <Button color={theme.colors.maize}>
            <TrashSvg />
          </Button>
        </Popconfirm>
      </div>
      <Modal shouldClose closeHandler={() => setIsModalOpen(false)} isOpen={isModalOpen}>
        <EntryForm isEditing onSubmit={handleCreate} initialValues={ongoingEntryWithTime()} />
      </Modal>
    </Container>
  );
};

export default OngoingEntry;
