import styled from 'styled-components';

export const Row = styled.div`
  background-color: ${({ odd, theme }) => (odd ? theme.colors.lighterGray : theme.colors.lightGray)}
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  height: 4rem;
  padding: 0 1rem;
  margin: 0;

  p {
    align-self: center;
    line-height: 1.8rem;
    font-size: 1.8rem;
    margin: 0;
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

export const Actions = styled.div`
  display: flex;
  flex: 1;
`;
