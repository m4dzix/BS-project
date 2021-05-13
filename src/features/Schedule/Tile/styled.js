import styled from "styled-components";

export const StyledTile = styled.div`
  display: grid;
  grid-gap: 30px;
  justify-content: center;
  box-shadow: 1px 2px 3px 4px ${({ theme }) => theme.colors.text};
  padding: 50px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.025);
  }
`;
export const Name = styled.h3`
  margin: 0;
  font-size: 28px;
  ${({ theme }) => theme.colors.text}
`;
export const Language = styled.h4`
  font-size: 25px;
  margin: -10px 0 10px;
  ${({ theme }) => theme.colors.text}
`;
export const List = styled.dl`
  display: grid;
  grid-gap: 20px;
  margin: 0;
`;
export const Key = styled.dt`
  font-size: 25px;
  ${({ theme }) => theme.colors.text}
`;
export const Value = styled.dd`
  margin: 0;
  font-size: 20px;
  ${({ theme }) => theme.colors.text}
`;
