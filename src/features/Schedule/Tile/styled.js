import styled from "styled-components";

export const StyledTile = styled.div`
  display: grid;
  grid-gap: 30px;
  justify-content: center;
  box-shadow: 1px 2px 3px 4px ${({ theme }) => theme.colors.hover};
  padding: 50px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.025);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px;
    grid-gap: 20px;
  }
`;
export const Name = styled.h3`
  margin: 0;
  font-size: 25px;
  ${({ theme }) => theme.colors.text};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 20px;
  }
`;
export const Language = styled.h4`
  font-size: 25px;
  margin: -10px 0 10px;
  ${({ theme }) => theme.colors.text};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 17px;
  }
`;
export const List = styled.dl`
  display: grid;
  grid-gap: 20px;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-gap: 15px;
  }
`;
export const Key = styled.dt`
  font-size: 25px;
  ${({ theme }) => theme.colors.text};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 17px;
    font-weight: 700;
  }
`;
export const Value = styled.dd`
  margin: 0;
  font-size: 20px;
  ${({ theme }) => theme.colors.text};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }
`;
export const Icon = styled.img`
  width: 35px;
  height: 35px;
  transform: translateY(5px);
  margin-left: 5px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 25px;
    height: 25px;
  }
`;
