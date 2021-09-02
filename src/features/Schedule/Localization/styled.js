import styled from "styled-components";

export const StyledLocalization = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 400px;
  height: 400px;
  @media (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}) and (orientation: landscape) {
    grid-template-columns: 1fr 1fr;
    justify-content: center;
  }
  @media (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}) and (orientation: portrait) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
    height: auto;
  }
`;

export const List = styled.dl`
  list-style: none;
  padding: 30px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px;
  }
  @media (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}) and(orientation:portrait) {
    margin: 0 auto;
  }
`;

export const Key = styled.dt`
  font-size: 25px;
  font-weight: bold;
  padding: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
    padding: 5px;
  }
`;

export const Value = styled.dd`
  font-size: 22px;
  padding: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 15px;
    padding: 0;
    margin: 10px;
  }
`;
