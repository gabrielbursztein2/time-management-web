import React, { memo } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { useSession, useDispatch } from 'hooks';
import LoginForm from 'components/user/LoginForm';
import { login } from 'state/actions/profileActions';
import routes from 'constants/routesPaths';

import { Container, Title } from './styles';

const LoginPage = () => {
  const { authenticated } = useSession();
  const loginRequest = useDispatch(login);

  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return (
    <Container>
      <Title>
        <FormattedMessage id="login.title" />
      </Title>
      <LoginForm onSubmit={loginRequest} />
      <Link to={routes.signUp}>
        <FormattedMessage id="login.signup" />
      </Link>
    </Container>
  );
};

export default memo(LoginPage);
