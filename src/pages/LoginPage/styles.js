import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 5rem;
  margin: 2rem auto;
  height: 30rem;
  width: 30rem;
`;

export const Title = styled.h1`
  font-family: inherit;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
`;
