import React, { memo } from 'react';
import { func } from 'prop-types';
import { useIntl, defineMessages, FormattedMessage } from 'react-intl';
import { useStatus, ERROR, LOADING } from '@rootstrap/redux-tools';

import Loading from 'components/common/Loading';
import Input from 'components/common/Input';
import { signUp as signUpValidations } from 'utils/constraints';
import { useForm, useValidation, useTextInputProps } from 'hooks';
import { signUp } from 'state/actions/profileActions';

const messages = defineMessages({
  firstName: { id: 'signup.form.firstName' },
  lastName: { id: 'signup.form.lastName' },
  email: { id: 'signup.form.email' },
  password: { id: 'signup.form.password' },
  passConfirmation: { id: 'signup.form.passwordConfirmation' },
  workingHours: { id: 'signup.form.workingHours' }
});

export const SignUpForm = ({ onSubmit }) => {
  const intl = useIntl();
  const { status, error } = useStatus(signUp);

  const validator = useValidation(signUpValidations);
  const { values, errors, handleValueChange, handleSubmit, handleBlur } = useForm(
    {
      onSubmit,
      validator,
      validateOnBlur: true
    },
    [onSubmit]
  );

  const inputProps = useTextInputProps({ handleValueChange, handleBlur, values, errors });

  return (
    <form onSubmit={handleSubmit}>
      {status === ERROR && <strong>{error}</strong>}
      <Input
        name="firstName"
        label={intl.formatMessage(messages.firstName)}
        type="text"
        {...inputProps('firstName')}
      />
      <Input
        name="lastName"
        label={intl.formatMessage(messages.lastName)}
        type="text"
        {...inputProps('lastName')}
      />
      <Input
        name="email"
        label={intl.formatMessage(messages.email)}
        type="email"
        {...inputProps('email')}
      />
      <Input
        name="password"
        label={intl.formatMessage(messages.password)}
        type="password"
        isPassword
        {...inputProps('password')}
      />
      <Input
        name="passwordConfirmation"
        label={intl.formatMessage(messages.passConfirmation)}
        type="password"
        isPassword
        {...inputProps('passwordConfirmation')}
      />
      <Input
        name="workingHours"
        label={intl.formatMessage(messages.workingHours)}
        type="number"
        min={0}
        max={24}
        {...inputProps('workingHours')}
      />
      <button type="submit">
        <FormattedMessage id="signup.form.submit" />
      </button>
      {status === LOADING && <Loading />}
    </form>
  );
};

SignUpForm.propTypes = {
  onSubmit: func.isRequired
};

export default memo(SignUpForm);
