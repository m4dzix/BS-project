import styled from "styled-components";

export const StyledMain = styled.main`
  max-width: 1200px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 0 auto;
`;
