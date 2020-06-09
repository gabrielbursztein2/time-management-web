import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.gray};
  margin: 1rem 0;
`;

export const Row = styled.div`
  display: flex;
  background-color: ${({ underWork, theme }) =>
    underWork ? theme.colors.vermilion : theme.colors.pineTreeGreen};
  border-radius: 0.2rem;
  color: ${({ theme }) => theme.colors.white};
  margin: 0.5rem 0;
  padding-left: 1rem;
`;

export const EntriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
`;

export const Entry = styled.div`
  display: flex;
  font-size: 1.5rem;
  justify-content: space-between;
`;

export const Date = styled.div`
  flex: 2;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-top: 0.7rem;
`;

export const Detail = styled.p`
  align-self: center;
  flex: 3;
  margin: 0;
  text-align: left;
`;

export const Time = styled.p`
  align-self: center;
  text-align: right;
  margin: 0 1rem 0 0;
  flex: 1;
`;

export const Actions = styled.div`
  align-items: flex-end;
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
