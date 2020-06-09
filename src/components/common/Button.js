import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

const ButtonContainer = styled.button`
  background-color: ${({ theme, color }) => color || theme.colors.charcoal};
  border: none;
  border-radius: ${({ rounded = false }) => (rounded ? '0.5rem' : '0')}
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 2rem;
  height: 100%;
  min-width: 5rem;
  padding: 0.5rem 1rem;

  :focus {
    outline: 0;
  }
`;

const Button = ({ children, ...props }) => <ButtonContainer {...props}>{children}</ButtonContainer>;

Button.propTypes = {
  children: node
};

export default Button;
