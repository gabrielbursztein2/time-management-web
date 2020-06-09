import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

const AlternativeButtonContainer = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 2rem;
  height: 100%;
  width: 4rem;
  padding: 0.5rem;

  :focus {
    outline: 0;
  }
`;

const AlternativeButton = ({ children, ...props }) => (
  <AlternativeButtonContainer {...props}>{children}</AlternativeButtonContainer>
);

AlternativeButton.propTypes = {
  children: node
};

export default AlternativeButton;
