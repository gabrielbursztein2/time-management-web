import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.sandyBrown};
  display: flex;
  height: 5rem;
  justify-content: space-between;
  position: relative;
  top: 0;
`;

export const Button = styled.button`
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.terracotta : theme.colors.sandyBrown}
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights.boldest};
  height: 100%;
  padding: 0 2rem;
  width: fit-content;

  :focus {
    outline: 0;
  }
`;
