import React from 'react';
import { func, object } from 'prop-types';

import { useForm, useTextInputProps } from 'hooks';
import Input from 'components/common/Input';

const SettingsForm = ({ onSubmit, initialValues = {} }) => {
  const { values, errors, handleValueChange, handleSubmit, handleBlur } = useForm(
    {
      onSubmit,
      initialValues,
      validateOnBlur: true
    },
    [onSubmit]
  );

  const inputProps = useTextInputProps({ handleValueChange, handleBlur, values, errors });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          name="workingHours"
          type="number"
          label="Working Hours"
          min="1"
          max="24"
          {...inputProps('workingHours')}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

SettingsForm.propTypes = {
  onSubmit: func.isRequired,
  initialValues: object
};

export default SettingsForm;
