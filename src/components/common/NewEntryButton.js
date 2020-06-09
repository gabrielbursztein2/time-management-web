import React from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as PlusSvg } from 'components/svg/plus.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.maize};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  height: 6rem;
  padding: 1rem;
  width: 6rem;

  :focus {
    outline: 0;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.sandyBrown};
  }
`;

const Text = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  flex: 1;
  font-size: 1.3rem;
  margin-top: 0.5rem;
  text-align: center;
`;

const NewEntryButton = ({ onClick }) => (
  <Container>
    <Button onClick={onClick}>
      <PlusSvg />
    </Button>
    <Text>New Entry</Text>
  </Container>
);

NewEntryButton.propTypes = {
  onClick: func.isRequired
};

export default NewEntryButton;
