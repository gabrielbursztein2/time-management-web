import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  margin: 2rem 0;
`;

export const TableHeader = styled.div`
  display: flex;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: 0 1rem;

  p {
    margin-bottom: 0.5rem;
  }
`;

export const Name = styled.p`
  flex: 3;
`;

export const Role = styled.p`
  flex: 3;
`;

export const WorkingHours = styled.p`
  flex: 2;
`;

export const Actions = styled.p`
  flex: 1;
`;
