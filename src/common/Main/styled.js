import styled from "styled-components";

export const StyledMain = styled.main`
  position: relative;
  max-width: 1200px;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px;
  }
`;
