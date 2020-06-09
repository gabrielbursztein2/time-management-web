import React from 'react';
import { useIntl, defineMessages, FormattedMessage } from 'react-intl';
import { func, object, bool } from 'prop-types';
import TimeField from 'react-simple-timefield';
import { useForm, useTextInputProps, useValidation } from 'hooks';
import Input from 'components/common/Input';
import { formatMinutesToTime, formatTimeToMinutes } from 'utils/helpers';
import { entry as entryValidations } from 'utils/constraints';

const messages = defineMessages({
  date: { id: 'entry.form.date' },
  detail: { id: 'entry.form.detail' },
  minutes: { id: 'entry.form.minutes' }
});

const EntryForm = ({ onSubmit, isEditing = false, initialValues = {} }) => {
  const intl = useIntl();
  let validations = {};
  if (isEditing) {
    validations = entryValidations;
  }
  const validator = useValidation(validations);
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
      <div>
        <Input
          name="date"
          type="date"
          label={intl.formatMessage(messages.date)}
          {...inputProps('date')}
        />
      </div>
      <div>
        <Input
          isTextArea
          name="detail"
          type="text"
          label={intl.formatMessage(messages.detail)}
          {...inputProps('detail')}
        />
      </div>
      <div>
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
      </div>
      <button type="submit">
        {(values.minutes && values.minutes != 0) || isEditing ? (
          <FormattedMessage id="entry.form.submit" />
        ) : (
          <FormattedMessage id="entry.form.startCounter" />
        )}
      </button>
    </form>
  );
};

EntryForm.propTypes = {
  onSubmit: func.isRequired,
  initialValues: object,
  isEditing: bool
};

export default EntryForm;
