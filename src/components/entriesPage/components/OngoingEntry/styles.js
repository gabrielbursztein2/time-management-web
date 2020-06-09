import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 2rem 0;
  text-overflow: ellipsis;
  max-height: 4rem;
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 4rem;
  margin: 0;
  flex: 1;
`;

export const EntryColumn = styled.div`
  background-color: ${({ theme }) => theme.colors.maize};
  display: flex;
  flex: 5;
  justify-content: space-between;
  padding-right: 2rem;
`;

export const EntryDetail = styled.p`
  color: ${({ theme }) => theme.colors.white};
  line-height: 4rem;
  margin: 0 0 0 1rem;
  font-size: 2rem;

  &:first-child {
    text-align: left;
  }

  &:last-child {
    text-align: right;
  }
`;
