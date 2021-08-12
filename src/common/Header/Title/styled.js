import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-size: 50px;
  max-width: 1200px;
  margin: 0 auto;
  font-weight: bold;
  padding: 10px 150px;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 35px;
    padding: 10px;
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    text-align: left;
    padding-right: 60px;
  }
`;
