import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  margin: 2rem auto;
`;

export const TableHeader = styled.div`
  display: flex;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: 0 1rem;

  p {
    margin-bottom: 0.5rem;
  }

  .date {
    flex: 2;
  }

  .name {
    flex: 2;
  }

  .detail {
    flex: 3;
  }

  .time {
    flex: 1;
  }

  .actions {
    flex: 1;
    text-align: center;
  }
`;
