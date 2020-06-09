import styled from 'styled-components';

export const Row = styled.div`
  background-color: ${({ odd, theme }) => (odd ? theme.colors.lighterGray : theme.colors.lightGray)}
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  min-height: 3.5rem;
  padding: 0.5rem 1rem;
  margin: 0;

  p {
    align-self: center;
    font-size: 1.8rem;
    line-height: 1.8rem;
    margin: 0;
    padding: 0 0.2rem;
  }
`;

export const Name = styled.p`
  margin: 0;
  flex: 2;
`;

export const Date = styled.p`
  margin: 0;
  flex: 2;
`;

export const Detail = styled.p`
  margin: 0;
  flex: 3;
`;

export const Time = styled.p`
  margin: 0;
  flex: 1;
`;

export const Actions = styled.div`
  display: flex;
  flex: 1;
`;
