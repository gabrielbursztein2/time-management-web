import React, { memo } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { useSession, useDispatch } from 'hooks';
import { signUp } from 'state/actions/profileActions';
import SignUpForm from 'components/user/SignUpForm';
import routes from 'constants/routesPaths';
import { Container, Title } from './styles';

const SignUpPage = () => {
  const { authenticated } = useSession();
  const signUpRequest = useDispatch(signUp);

  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return (
    <Container>
      <Title>
        <FormattedMessage id="signup.title" />
      </Title>
      <SignUpForm onSubmit={signUpRequest} />
      <Link to={routes.login}>
        <FormattedMessage id="signup.signin" />
      </Link>
    </Container>
  );
};

export default memo(SignUpPage);
