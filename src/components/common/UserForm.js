import React from 'react';
import { object, func, bool } from 'prop-types';
import { useIntl, defineMessages, FormattedMessage } from 'react-intl';

import { useForm, useTextInputProps, useValidation } from 'hooks';
import Input from 'components/common/Input';
import Select from 'components/common/Select';
import {
  user as userValidations,
  userWithPassword as userWithPasswordValidations
} from 'utils/constraints';

const messages = defineMessages({
  firstName: { id: 'user.form.firstName' },
  lastName: { id: 'user.form.lastName' },
  role: { id: 'user.form.role' },
  password: { id: 'user.form.password' },
  email: { id: 'user.form.email' },
  workingHours: { id: 'user.form.workingHours' }
});

const UserForm = ({ onSubmit, isEditing = false, initialValues = {} }) => {
  const intl = useIntl();
  let validations;
  if (isEditing) {
    validations = userValidations;
  } else {
    validations = userWithPasswordValidations;
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
  const roles = [
    { label: 'Regular', value: 'regular' },
    { label: 'User Manager', value: 'user_manager' },
    { label: 'Admin', value: 'admin_user' }
  ];

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="firstName"
        type="text"
        label={intl.formatMessage(messages.firstName)}
        {...inputProps('firstName')}
      />
      <Input
        name="lastName"
        type="text"
        label="Last Name"
        style={{ display: 'block' }}
        {...inputProps('lastName')}
      />
      <Select
        name="role"
        label={intl.formatMessage(messages.role)}
        options={roles}
        errors={errors.userId}
        style={{ display: 'block' }}
        onChange={value => {
          handleValueChange('role', value);
        }}
        defaultValue={initialValues.role}
      />
      <Input
        name="email"
        type="email"
        label={intl.formatMessage(messages.email)}
        {...inputProps('email')}
        disabled={isEditing}
      />
      {!isEditing && (
        <Input
          name="password"
          type="text"
          label={intl.formatMessage(messages.password)}
          {...inputProps('password')}
          isPassword
        />
      )}
      <Input
        name="workingHours"
        type="number"
        label={intl.formatMessage(messages.workingHours)}
        {...inputProps('workingHours')}
      />
      <button type="submit">
        <FormattedMessage id="user.form.submit" />
      </button>
    </form>
  );
};

UserForm.propTypes = {
  onSubmit: func.isRequired,
  initialValues: object,
  isEditing: bool
};

export default UserForm;
