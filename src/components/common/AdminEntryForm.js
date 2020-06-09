import React from 'react';
import TimeField from 'react-simple-timefield';
import { useIntl, defineMessages, FormattedMessage } from 'react-intl';
import { func, object } from 'prop-types';
import { useForm, useValidation, useTextInputProps } from 'hooks';
import { useUsersForSelect } from 'hooks/selectors';
import Input from 'components/common/Input';
import Select from 'components/common/Select';
import { formatMinutesToTime, formatTimeToMinutes } from 'utils/helpers';
import { adminEntry as adminEntryValidations } from 'utils/constraints';

const messages = defineMessages({
  date: { id: 'entry.form.date' },
  detail: { id: 'entry.form.detail' },
  minutes: { id: 'entry.form.minutes' },
  userId: { id: 'entry.form.userId' }
});

const AdminEntryForm = ({ onSubmit, initialValues = {} }) => {
  const { users } = useUsersForSelect();
  const intl = useIntl();
  const validator = useValidation(adminEntryValidations);

  const { values, errors, handleValueChange, handleSubmit, handleBlur } = useForm(
    {
      onSubmit,
      initialValues,
      validator,
      validateOnBlur: true
    },
    [onSubmit]
  );

  const inputProps = useTextInputProps({ handleValueChange, handleBlur, values, errors });

  const handleTimeChange = (event, time) => {
    const minutes = formatTimeToMinutes(time);
    handleValueChange('minutes', minutes);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Select
        name="userId"
        label={intl.formatMessage(messages.userId)}
        options={users}
        errors={errors.userId}
        defaultValue={initialValues.user?.id}
        onChange={value => {
          handleValueChange('userId', value);
        }}
      />
      <Input
        name="date"
        type="date"
        label={intl.formatMessage(messages.date)}
        {...inputProps('date')}
      />
      <Input
        isTextArea
        name="detail"
        type="text"
        label={intl.formatMessage(messages.detail)}
        {...inputProps('detail')}
      />
      <TimeField
        value={formatMinutesToTime(values.minutes)}
        onChange={handleTimeChange}
        style={{ display: 'block' }}
        input={
          <Input
            name="minutes"
            type="text"
            errors={errors.minutes}
            label={intl.formatMessage(messages.minutes)}
          />
        }
      />
      <button type="submit">
        <FormattedMessage id="entry.form.submit" />
      </button>
    </form>
  );
};

AdminEntryForm.propTypes = {
  onSubmit: func.isRequired,
  initialValues: object
};

export default AdminEntryForm;
