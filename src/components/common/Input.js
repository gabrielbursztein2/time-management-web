import React from 'react';
import { string, bool, arrayOf } from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Input } from 'antd';

import { parseInputErrors } from 'utils/helpers';

const Container = styled.div`
  margin: 1rem 0;
`;

const Errors = styled.span`
  color: ${({ theme }) => theme.colors.red};
  display: block;
  font-size: 1.4rem;
`;

const MyInput = ({ label, name, errors, isPassword = false, isTextArea = false, ...props }) => {
  return (
    <Container>
      <span>{label}</span>
      {isPassword && <Input.Password size="large" {...props} />}
      {isTextArea && <Input.TextArea style={{ display: 'block' }} {...props} />}

      {!isPassword && !isTextArea && <Input size="large" {...props} />}

      {errors && (
        <Errors>
          <FormattedMessage
            id={parseInputErrors(errors)}
            defaultMessage={parseInputErrors(errors)}
          />
        </Errors>
      )}
    </Container>
  );
};

MyInput.propTypes = {
  name: string.isRequired,
  isPassword: bool,
  isTextArea: bool,
  label: string,
  errors: arrayOf(string)
};

export default MyInput;
