import React from 'react';
import { string, arrayOf, shape } from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Select } from 'antd';

import { parseInputErrors } from 'utils/helpers';

const Container = styled.div`
  margin: 1rem 0;
`;

const Errors = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.red};
`;

const MySelect = ({ label, name, errors, options, ...props }) => {
  return (
    <Container>
      <span>{label}</span>
      <Select
        showSearch
        style={{ display: 'block' }}
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        {...props}
      >
        {options.map(({ label, value }) => (
          <Select.Option key={value} value={value}>
            {label}
          </Select.Option>
        ))}
      </Select>
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

MySelect.propTypes = {
  name: string.isRequired,
  options: arrayOf(
    shape({
      label: string.isRequired,
      value: string.isRequired
    })
  ),
  label: string,
  errors: arrayOf(string)
};

export default MySelect;
