import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 30px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 0px;
    padding: 5px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 40px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.hover};
  padding: 30px;
  text-transform: capitalize;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 25px;
    margin: 10px 0 0;
    padding: 10px;
    text-align: center;
    border-bottom: 2px solid ${({ theme }) => theme.colors.hover};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 20px;
    padding: 0px;
    text-align: center;
  }
`;
